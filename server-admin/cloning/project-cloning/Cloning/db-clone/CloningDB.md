## CLONING DATABASE AS NEW DB AND SCHEMA AND ADDED to API Server AS NEXT NEW DB
Cloning DB Schema is good solution for More DB instances In One Server for working as
Example:
 -  more Branches
 -  Test / Dev / Sharp instances
 -  New Cloned System 
 
 - Do It By CloneEDCtoXXX.Bat in DatabaseFolder AND DO THESE 2 STEPS

### 1] Replace Hard DB connection for Multiple DB in Schema
in configuration is only One Connection string
for more Databases you must modify the config or Replace 
DsataContect by hard inserted connectin string

Here is code for Replacing

```cs
public SHOPINGERContext()
        {
        }

        public SHOPINGERContext(DbContextOptions<SHOPINGERContext> options)
                    : base(options) {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.ConfigureLoggingCacheTime(TimeSpan.FromMinutes(BackendServer.ServerConfigSettings.DatabaseInternalCacheTimeoutMin));
                optionsBuilder.EnableServiceProviderCaching(BackendServer.ServerConfigSettings.DatabaseInternalCachingEnabled);

                optionsBuilder.UseSqlServer("Server=192.168.1.141,1433;Database=SHOPINGER;User Id=shopinger;Password=shopinger;TrustServerCertificate=True",
                      x => x.MigrationsHistoryTable("MigrationsHistory", "dbo"));

                if (BackendServer.ServerRuntimeData.DebugMode) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => { builder.AddConsole(); }))
                        .LogTo(message => Debug.WriteLine(message)).LogTo(Console.WriteLine);
                };
                ;
            }
        }
```

---

### 2] Extend file 'ServerDATaBaseEngine' for Special DataWorking

Extend Server definition for this new DatasertWorking for Support
Get datatable from Stored Procedures

```cs
        public static List<T> SHOPINGERCollectionFromSql<T>(this SHOPINGERContext dbContext, string sql) where T : class, new() {
            using var cmd = dbContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection.State != ConnectionState.Open)
                cmd.Connection.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = DbOperations.BindList<T>(table).ToList();

                return results;
            } catch (Exception Ex) { ServerCoreFunctions.SendEmail(new MailRequest() { Content = ServerCoreFunctions.GetSystemErrMessage(Ex) }); } finally { cmd.Connection.Close(); }
            return new List<T>();
        }
```

---
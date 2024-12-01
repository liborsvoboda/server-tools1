EASYSERVER Database Snapshot Command
Scaffold-DbContext "Server=192.168.1.141;Database=EASYSERVER;Persist Security Info=False;User ID=easyserver;Password=easyserver;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=True;Connection Timeout=30;" Microsoft.EntityFrameworkCore.SqlServer -Context ScaffoldContext -ContextDir DATABASES/EASYSERVER/DBModel -OutputDir DATABASES/EASYSERVER/NewEntities -ContextNamespace EASYSERVER.DBModel -Namespace EASYSERVER.DBModel -Force -DataAnnotations

Shopinger Database Snapshot Command
Scaffold-DbContext "Server=192.168.1.141;Database=SHOPINGER;Persist Security Info=False;User ID=shopinger;Password=shopinger;MultipleActiveResultSets=False;Encrypt=False;TrustServerCertificate=True;Connection Timeout=30;" Microsoft.EntityFrameworkCore.SqlServer -Context SHOPINGERContext -ContextDir DATABASES/SHOPINGER/NewDBModel -OutputDir DATABASES/SHOPINGER/NewEntities -ContextNamespace SHOPINGER.DBModel -Namespace SHOPINGER.DBModel -Force -DataAnnotations

COPY EASYDATACENTER without Downloads And Projects Docs
Scaffoldfile



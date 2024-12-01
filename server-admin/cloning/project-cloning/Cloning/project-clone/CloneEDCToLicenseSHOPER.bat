
@ECHO off
@ECHO Generate LicenseSHOPER From EDC

REM GOTO ROOT FOLDER WITH CREATE NEW
E:
if not exist E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER (
	mkdir E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER
)
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER


REM DELETE OLD FILES
del bin /Q /S
del obj /Q /S
del Data /Q /S
del DATABASES /Q /S
del Docs /Q /S
del ServerCoreConfiguration /Q /S
del ServerCoreControllersExtensions /Q /S
del ServerCoreDBSettings /Q /S
del ServerCoreStructure /Q /S
del ServerCorePages /Q /S
del ServerCoreServers /Q /S
del *.cs /Q

REM DELETE WWWPART
del wwwroot/* /Q

REM COPY PROJECT
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Data" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\Data" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\DATABASES\LicenseSHOPER" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Docs" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\Docs" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreConfiguration" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\ServerCoreConfiguration" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreControllersExtensions" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\ServerCoreControllersExtensions" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreDBSettings" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\ServerCoreDBSettings" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreStructure" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\ServerCoreStructure" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreServers" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\ServerCoreServers" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" *.cs
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" LICENSE

REM COPY WWWPART
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\metro" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\metro" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\Tools\EDC_ESB_InteliHelp\book" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\server" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\ClickByClickHelps" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\server\ClickByClickHelps" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Media" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\server\Media" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\NodeClientApp" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\wwwroot\server\NodeClientApp" /s /e 

REM CHANGE CONTEXT NAME TO NEW
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" "*.cs" "LicenseSHOPERContext" "ScaffoldContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\DATABASES\LicenseSHOPER" "*.cs" "ScaffoldContext" "LicenseSHOPERContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" "*.cs" "EASYDATACenter.DBModel" "LicenseSHOPER.DBModel" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" "*.cs" "GLOBALNET" "LicenseSHOPER" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" "*.cs" "EASYDATACenterContext" "LicenseSHOPERContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\Data" "*.json" "Database=EASYDATACenter;User Id=easydatacenter;Password=easydatacenter;" "Database=LicenseSHOPER;User Id=LicenseSHOPER;Password=LicenseSHOPER;" false true
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\DATABASES\LicenseSHOPER\ControllersExtensions" "*.cs" "EASYDATACenterCollectionFromSql" "LicenseSHOPERCollectionFromSql" false true 
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER" "*.cs" "using SHOPINGER.DBModel;" "" false false

REM REMOVE LOGIN LINES FROM GENERATED ScaffoldContext FOR USING BY Congif
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\DATABASES\LicenseSHOPER\DBModel" "*.*" "LicenseSHOPERContext" "ScaffoldContext" false true
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\LicenseSHOPER\DATABASES\LicenseSHOPER\DBModel\ScaffoldContext.cs" "20" "34"


@ECHO done

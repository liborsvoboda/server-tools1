
@ECHO off
@ECHO Generate From EDC
E:
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\
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

del wwwroot/* /Q

robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Data" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\Data" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\DATABASES\SHOPINGER" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Docs" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\Docs" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreConfiguration" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\ServerCoreConfiguration" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreControllersExtensions" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\ServerCoreControllersExtensions" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreDBSettings" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\ServerCoreDBSettings" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreStructure" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\ServerCoreStructure" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreServers" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\ServerCoreServers" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter" *.cs

robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\metro" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\metro" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\server" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\ClickByClickHelps" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\server\ClickByClickHelps" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Media" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\server\Media" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\NodeClientApp" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\wwwroot\server\NodeClientApp" /s /e 

REM Rename to New Schema Name
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter" "*.cs" "SHOPINGERContext" "ScaffoldContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\DATABASES\SHOPINGER" "*.cs" "ScaffoldContext" "SHOPINGERContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter" "*.cs" "EASYDATACenter.DBModel" "SHOPINGER.DBModel" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter" "*.cs" "GLOBALNET" "SHOPINGER" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter" "*.cs" "EASYDATACenterContext" "SHOPINGERContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\Data" "*.json" "Database=EASYDATACenter;User Id=easydatacenter;Password=easydatacenter;" "Database=SHOPINGER;User Id=shopinger;Password=shopinger;" false true


REM Manually delete Static Connection from ScaffoldContext.cs
REM         public ScaffoldContext() { }
REM         public ScaffoldContext(DbContextOptions<ScaffoldContext> options) : base(options) { }

E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\DATABASES\SHOPINGER\DBModel" "*.*" "SHOPINGERContext" "ScaffoldContext" false true
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\SHOPINGERDATACenter\DATABASES\SHOPINGER\DBModel\ScaffoldContext.cs" "20" "34"


@ECHO done

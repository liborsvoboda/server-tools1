
@ECHO off
@ECHO Generate EASYSERVER From EDC
E:
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\
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

robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Data" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\Data" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\DATABASES\EASYDATACenter" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Docs" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\Docs" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreConfiguration" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreConfiguration" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreControllersExtensions" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreControllersExtensions" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreDBSettings" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreDBSettings" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreStructure" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreStructure" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCorePages" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCorePages" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreServers" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreServers" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER" *.cs

robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\metro" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\metro" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\Tools\EDC_ESB_InteliHelp\book" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\server" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\ClickByClickHelps" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\server\ClickByClickHelps" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Media" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\server\Media" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\NodeClientApp" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\wwwroot\server\NodeClientApp" /s /e 

E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER" "*.cs" "using SHOPINGER.DBModel;" "" false false

REM Exception Auto Correction = REMOVE DBExtension Shopinger
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYSERVER\ServerCoreDBSettings" "*.cs" "SHOPINGERContext" "EASYDATACenterContext" false true


@ECHO done

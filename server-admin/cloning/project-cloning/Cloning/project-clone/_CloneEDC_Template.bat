@ECHO off
@ECHO Generate REWRITEthisWordByNewNAME From EDC to NEW/Existing Project
@ECHO REWRITE: REWRITEthisWordByNewNAME BY ProjectName And RUN as BAT

REM GOTO ROOT FOLDER WITH CREATE NEW
E:
if not exist E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME (
	mkdir E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME
	cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME
	robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" *.csproj
	robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot" /s /e 
	robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\Properties" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\Properties" /s /e 

	ren EASYDATACenter.csproj REWRITEthisWordByNewNAME.csproj
)

cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME


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
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Data" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\Data" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\REWRITEthisWordByNewNAME" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\DATABASES\REWRITEthisWordByNewNAME" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Docs" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\Docs" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreConfiguration" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\ServerCoreConfiguration" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreControllersExtensions" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\ServerCoreControllersExtensions" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreDBSettings" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\ServerCoreDBSettings" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreStructure" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\ServerCoreStructure" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreServers" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\ServerCoreServers" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" *.cs
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" LICENSE

REM COPY WWWPART
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\metro" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\metro" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\Tools\EDC_ESB_InteliHelp\book" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\server" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\ClickByClickHelps" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\server\ClickByClickHelps" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Media" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\server\Media" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\NodeClientApp" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\wwwroot\server\NodeClientApp" /s /e 

REM CHANGE CONTEXT NAME TO NEW
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" "*.cs" "REWRITEthisWordByNewNAMEContext" "ScaffoldContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\DATABASES\REWRITEthisWordByNewNAME" "*.cs" "ScaffoldContext" "REWRITEthisWordByNewNAMEContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" "*.cs" "EASYDATACenter.DBModel" "REWRITEthisWordByNewNAME.DBModel" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" "*.cs" "GLOBALNET" "REWRITEthisWordByNewNAME" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME" "*.cs" "EASYDATACenterContext" "REWRITEthisWordByNewNAMEContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\Data" "*.json" "Database=EASYDATACenter;User Id=easydatacenter;Password=easydatacenter;" "Database=REWRITEthisWordByNewNAME;User Id=REWRITEthisWordByNewNAME;Password=REWRITEthisWordByNewNAME;" false true


REM REMOVE LOGIN LINES FROM GENERATED ScaffoldContext FOR USING BY Config
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\DATABASES\REWRITEthisWordByNewNAME\DBModel" "*.*" "REWRITEthisWordByNewNAMEContext" "ScaffoldContext" false true
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\REWRITEthisWordByNewNAME\DATABASES\REWRITEthisWordByNewNAME\DBModel\ScaffoldContext.cs" "20" "34"


@ECHO done

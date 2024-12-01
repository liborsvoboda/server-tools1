@ECHO off
@ECHO Generate %ProjectName% From EDC to NEW/Existing Project
@ECHO %ProjectName% Is Rewrited By PARAM = ProjectName And RUN as BAT

SET ProjectName=%~1
SET IpAddress=%~2

IF NOT DEFINED ProjectName (
	ECHO Bad ProjectName : %1	
	GOTO :EOF
) 

REM Loging
REM powershell -command "$AutoGenServerReqList = @{'Name'='%ProjectName%';'IpAddress'='%IpAddress%'};Invoke-WebRequest -Method POST -Uri http://127.0.0.1:7000/GLOBALNETAutoGenServerReqList -Body ($AutoGenServerReqList|ConvertTo-Json)  -ContentType 'application/json'; "


REM GOTO ROOT FOLDER WITH CREATE NEW
E:
if not exist E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName% (
	mkdir E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%
	cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%

	REM STRATUP PROJECT
	robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" *.csproj
	robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\Properties" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\Properties" /s /e 
	ren EASYDATACenter.csproj %ProjectName%.csproj
)
REM GOTO FOLDER
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%

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
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Data" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\Data" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\DATABASES\EASYDATACenter" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\Docs" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\Docs" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreConfiguration" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreConfiguration" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreControllersExtensions" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreControllersExtensions" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreDBSettings" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreDBSettings" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreStructure" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreStructure" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\ServerCoreServers" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreServers" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" *.cs
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" LICENSE

REM COPY WWWPART COPY TO server FOR ACCESIBLE
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\wwwroot" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server" /s /e 

robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\metro" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\metro" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server" *.*
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\NodeClientApp" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\NodeClientApp" /s /e 
REM robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\ClickByClickHelps" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\ClickByClickHelps" *.*
REM robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Media" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\Media" /s /e 

REM COPY Server Tools
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Downloads\UNIVERSAL_MSSQL_DB" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\DATABASE" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\Downloads\EASYDATACenter\EDCManager" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server" *.exe
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\EASYDATACenter_Downloads" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server" *.chm 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\EASYSYSTEMBuilder_Downloads" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server" *.chm 

REM COPY HELPS
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\EDC_ESB_InteliHelp\book" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\Tools\EDC_ESB_InteliHelp\book" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\EASYDATACenterDBSchema" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\EASYDATACenter_Downloads" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\EASYDATACenter_DevTemplates" /s /e 
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\server\EASYSYSTEMBuilder_Downloads" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\wwwroot\server\EASYSYSTEMBuilder_DevTemplates" /s /e 


REM CHANGE CONTEXT NAME TO NEW
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "%ProjectName%Context" "ScaffoldContext" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\DATABASES\%ProjectName%" "*.cs" "ScaffoldContext" "%ProjectName%Context" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "EASYDATACenter.DBModel" "%ProjectName%.DBModel" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "GLOBALNET" "%ProjectName%" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "EASYDATACenterContext" "%ProjectName%Context" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\Data" "*.json" "Database=EASYDATACenter;User Id=easydatacenter;Password=easydatacenter;" "Database=%ProjectName%;User Id=%ProjectName%;Password=%ProjectName%;" false true

REM REMOVE MISSING CONTEXTS FROM FULL PROJECT
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "using SHOPINGER.DBModel;" "" false false
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%" "*.cs" "GLOBALNET" "" false false


REM REPLACING TEMPLATE FILES
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\AutoGenTools\ProjectTemplate" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\ServerCoreDBSettings" ServerDatabaseEngine.cs

REM REMOVE LOGIN LINES FROM GENERATED ScaffoldContext FOR USING BY Config
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\DATABASES\%ProjectName%\DBModel" "*.*" "%ProjectName%Context" "ScaffoldContext" false true
REM E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%\DATABASES\%ProjectName%\DBModel\ScaffoldContext.cs" "20" "34"


@ECHO done

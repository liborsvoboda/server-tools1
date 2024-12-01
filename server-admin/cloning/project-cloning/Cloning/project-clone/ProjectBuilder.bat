@ECHO off
@ECHO Build %ProjectName% 

SET ProjectName=%~1

IF NOT DEFINED ProjectName (
	ECHO Bad ProjectName : %1	
	GOTO :EOF
) 

REM Send Start Build Info
REM powershell -command "$AutoGenServerReqList = @{'Name'='%ProjectName%';'IpAddress'='%IpAddress%'};Invoke-WebRequest -Method POST -Uri http://127.0.0.1:7000/GLOBALNETAutoGenServerReqList -Body ($AutoGenServerReqList|ConvertTo-Json)  -ContentType 'application/json'; "

REM GOTO PROJECT FOLDER
cd E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\%ProjectName%

REM Build Project
dotnet.exe build %ProjectName%.csproj --configuration Release

REM Send Done Build Info
REM powershell -command "$AutoGenServerReqList = @{'Name'='%ProjectName%';'IpAddress'='%IpAddress%'};Invoke-WebRequest -Method POST -Uri http://127.0.0.1:7000/GLOBALNETAutoGenServerReqList -Body ($AutoGenServerReqList|ConvertTo-Json)  -ContentType 'application/json'; "

@ECHO done

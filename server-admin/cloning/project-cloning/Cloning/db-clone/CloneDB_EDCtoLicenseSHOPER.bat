
REM Delete Old files
Del "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" /Q /S

REM Copy Full Schema
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" /s /e 

REM Rename to New Schema Name
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" "*.cs" "EASYDATACenter.DBModel" "LicenseSHOPER.DBModel" false  false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" "*.cs" "GLOBALNET" "LicenseSHOPER" false  false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" "*.cs" "ScaffoldContext" "LicenseSHOPERContext" false  false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\LicenseSHOPER" "*.cs" "EASYDATACenterContext" "LicenseSHOPERContext" false  false

REM Manually Remove unused AGENDAS

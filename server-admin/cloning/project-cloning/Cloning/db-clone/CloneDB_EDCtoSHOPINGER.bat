
REM Delete Old files
Del "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" /Q /S

REM Copy Full Schema
robocopy "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\EASYDATACenter" "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" /s /e 

REM Rename to New Schema Name
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" "*.cs" "EASYDATACenter.DBModel" "SHOPINGER.DBModel" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" "*.cs" "GLOBALNET" "SHOPINGER" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" "*.cs" "ScaffoldContext" "SHOPINGERContext" false false
E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\wwwroot\Tools\ReplaceStringTool\EASYTools.ReplaceInFilesTool.exe "E:\Projekty\MyGitHub\GroupWare-Solution\Universal-Backend-Server\EASYDATACenter\DATABASES\SHOPINGER" "*.cs" "EASYDATACenterContext" "SHOPINGERContext" false false

REM Manually Remove LicenseSrv AND Production

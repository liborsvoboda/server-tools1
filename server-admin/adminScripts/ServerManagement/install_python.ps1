

#Install Python
E:\Projekty\zEasy\WWW-ROOT\DISTRIBUTE-LIBRARY\SERVERS-SOURCES\Code\python-3.13-amd64.exe InstallAllUsers=1 PrependPath=1 /passive TargetDir=E:\Projekty\zEasy\EASY-IT-CENTER\EASY-IT-CENTER-SERVER\wwwroot\server-locked\installed\Python3

$InstalledPath = 'E:\Projekty\zEasy\EASY-IT-CENTER\EASY-IT-CENTER-SERVER\wwwroot\server-locked\installed\Python3'
$arrPath = [System.Environment]::GetEnvironmentVariable('PATH')
[System.Environment]::SetEnvironmentVariable('Path', $arrPath + ';' + $InstalledPath + ';', 'Machine')

#TODO Write To DB that installed

#PyhthonGit for generator-tools Must be installed separate after install Done
#pip install pygithub
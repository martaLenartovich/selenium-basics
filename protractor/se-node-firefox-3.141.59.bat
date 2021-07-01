set SERVER_VERSION=3.141.59
set HUB_PORT=5558
set REGISTER_IP=localhost:4444
set FIREFOX_DRIVER=.\specs\driver\geckodriver.exe
java -Dwebdriver.gecko.driver=%FIREFOX_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=firefox, version=64, maxinstance=5, platform=WINDOWS" -port %HUB_PORT%
: : End of hub batch file
pause
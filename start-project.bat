start cmd.exe /k "cd C:\Program Files\MongoDB\Server\8.0\bin && mongod.exe"
start cmd.exe /k "cd %~dp0\backend && npm start"
start cmd.exe /k "cd %~dp0\frontend && npm run dev"
start C:\Users\aguia\AppData\Local\MongoDBCompass\MongoDBCompass.exe
start C:\Users\aguia\AppData\Local\Postman\Postman.exe
var  userName = 'NJHu'
var  timeStamp = Date.parse(new Date())
var jsonDatabase = {'loginUser': userName, 'loginTime': timeStamp}
var db = connect('log')

db.login.insert(jsonDatabase)

print('[demo]log print success')

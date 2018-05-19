var  userName = 'jspang'
var timeStamp = new Date().getTime().toString()

var jsonDatabase = {loginUser: userName, loginTime: timeStamp}

var db = connect('school')

db.users.insert(jsonDatabase)

print(`===`)

var db = connect('company3')
var result = db.workmate.find()

while(result.hasNext()) {
    printjson(result.next())
}
var db = connect('school')

var result = db.workmate.find()

while (result.hasNext()) {
    printjson(result.next())
}

var db = connect('school')

var reslut = db.workmate.find()

reslut.forEach(function (item) {
    printjson(item)
})
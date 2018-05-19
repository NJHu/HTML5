var startTime = new Date().getTime()

var db = connect('school')

var rs = db.randomInfo.find({usename: 'tfruhjy8k'})

rs.forEach(item => {
    printjson(item)
})

var runTime = new Date().getTime() - startTime

print('=============' + runTime)
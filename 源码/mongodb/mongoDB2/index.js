var startTime = new Date().getTime()

var db = connect('school')

var rs = db.randomInfo.find({usename: '7xwb8y3', randNum0: 565509})

rs.forEach(item => {
    printjson(item)
})

var runTime = new Date().getTime() - startTime

print(runTime)
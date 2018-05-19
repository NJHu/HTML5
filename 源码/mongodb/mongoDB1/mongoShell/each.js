var startTime = new Date().getTime()

var db = connect('newCompany')

var rs = db.randomInfo.find({username: 'tfruhjy8k'})

rs.forEach((item) => {
        printjson(item)
    })

var runTime = new Date().getTime() - startTime

print(`[SUCCESS]This run time is:+${runTime}+ms`)    //打印出运行时间

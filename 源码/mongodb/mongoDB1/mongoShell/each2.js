var startTime = new Date().getTime();
var db = connect('company');


var rs = db.randomInfo.find({username: '7xwb8y3', randnUM0: 565509})

rs.forEach((item) => {
    printjson(item)
})


var runTime = new Date().getTime() - startTime;
print('[Demo]this run time is ' + runTime + 'ms');
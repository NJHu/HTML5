var startTime = (new Date()).getTime()

var db = connect('local')

var tempArray = []
for(let i = 0; i < 1000; i++) {
    tempArray.push({num: i})
}

db.test.insert(tempArray)

var runTime = (new Date()).getTime() - startTime

print(`This run this is:+${runTime}+ms`)
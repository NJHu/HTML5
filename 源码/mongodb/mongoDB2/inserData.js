var startTime = new Date().getTime()

var db  = connect('school')

let array = [];
for (let i = 0; i < 1000; i++) {
    array.push({name: `name${i}`, age: i})
}

db.child.insert(array)

var runTime = new Date().getTime() - startTime

print(`===${runTime}==`)
function getRandom(min, max) {
    let range = max - min
    let rand = Math.random()
    return (min + Math.round(rand * range))
}

// console.log(getRandom(10000, 99999))

function getRandomUserName(min, max) {
    let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("")
    let outPuttext = ""
    for (let i = 1; i < getRandom(min, max); i++) {
        outPuttext = outPuttext + tempStringArray[getRandom(0, tempStringArray.length)]
    }
    return outPuttext;
}

// console.log(getRandomUserName(7, 16))

var db = connect('newCompany')

db.randomInfo.drop()

var temInfo = []

for (let i = 0; i < 2000000; i++) {
    temInfo.push({
        username: getRandomUserName(7, 16),
        regeditTime: new Date(),
        randNum0: getRandom(100000, 999999),
        randNum1: getRandom(100000, 999999),
        randNum2: getRandom(100000, 999999),
        randNum3: getRandom(100000, 999999),
        randNum4: getRandom(100000, 999999),
        randNum5: getRandom(100000, 999999),
        randNum6: getRandom(100000, 999999),
        randNum7: getRandom(100000, 999999),
        randNum8: getRandom(100000, 999999),
        randNum9: getRandom(100000, 999999)
    })
}

db.randomInfo.insert(temInfo);
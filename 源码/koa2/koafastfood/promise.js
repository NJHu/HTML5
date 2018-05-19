
function cook() {
    console.log('start 1')
    var p = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('1--end')
            resolve('1->0')
        }, 1000)
    })
    return p ;
}

function eat(data) {
    console.log('start 2')
    var p = new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log('2--end')
            reslove('2 -> 0')
        }, 2000);
    })

    return p;
}

cook().then(function (data) {
    return eat(data)
}).then(function (data) {
    console.log(data)
})
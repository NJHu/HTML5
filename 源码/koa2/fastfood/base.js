function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    console.log('111111');
    const v = await takeLongTime();
    console.log('222222');
    console.log(v);
    console.log('333333');
}

console.log('444444');
test();
console.log('5555555');
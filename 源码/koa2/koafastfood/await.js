

function getsome() {
    return '1111'
}

async function testAsync() {
    return '2222'
}

async function log() {
    const v1 = await getsome()
    const v2 = await testAsync()
    console.log(v1)
    console.log(v2)
}

log()

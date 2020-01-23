const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000)
})

//minhaPromisse().then(response => {
//    console.log(response)
//})
//.catch(err => {

//})

async function executaPromise(){
    const response = await minhaPromisse()

    console.log(response)
}

executaPromise()
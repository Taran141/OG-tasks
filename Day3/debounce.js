function debounce(func, delay) {
    let timeout=null
    return () => {
        if(timeout) clearTimeout(timeout)

        timeout=setTimeout(() => {
            func()
        }, delay)
    }
}

function func (){
    return console.log("y")
}


const debouncedFun = debounce(func, 500)

debouncedFun()

setTimeout(debouncedFun, 300)

setTimeout(debouncedFun, 900)
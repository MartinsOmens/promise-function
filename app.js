
//CHANGE BACKGROUND COLOR

const changeBackground = ((color, delay) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
})

changeBackground('red', 1000)
.then(() => changeBackground('orange', 1000))
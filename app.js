
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
.then(() => changeBackground('yellow', 1000))
.then(() => changeBackground('green', 1000))
.then(() => changeBackground('blue', 1000))
.then(() => changeBackground('indigo', 1000))
.then(() => changeBackground('violet', 1000))
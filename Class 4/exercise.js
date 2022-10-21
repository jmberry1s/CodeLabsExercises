function changeBGToRandom (){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`
}
function changeCToRandom (){
    const headingOne = document.querySelector("h1")
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    headingOne.style.color = `#${randomColor}`
}
const eventListenerButton = document.querySelector(".btn_inline")
eventListenerButton.addEventListener("click", changeBGToRandom)
eventListenerButton.addEventListener("click", changeCToRandom)
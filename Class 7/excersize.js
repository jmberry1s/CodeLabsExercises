
function redundantReturn(str){
    return function(secondParr){
        return `Hello my string is ${secondParr} ${str}`;
    }
}

let returnMessage = redundantReturn("string.")


console.log(returnMessage("this and that"));
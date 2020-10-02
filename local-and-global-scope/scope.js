function createLocalVariable() {
    const localVar = "I am a local variable and can only be used inside of this function." + 
        "If I am called anywhere else, I will throw an error.";
    console.log(localVar);
    return localVar;
}


const globalVar = "I am able to be used anywhere in this file! I should only be used when necessary.";

function accessGlobalVariable() {
    console.log(globalVar);
}
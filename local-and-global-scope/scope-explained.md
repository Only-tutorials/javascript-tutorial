> Scope is a term that refers to the accessibility of variables in the file or project.

#### Local Scope
```
function createLocalVariable() {
    const localVar = "I am a local variable and can only be used inside of this function." + 
        "If I am called anywhere else, I will throw an error.";

    console.log(localVar);
```

> Local scope has a narrowed accessibility and cannot be used outside of the space that it is defined in. (e.g. within a function) 

```
    return localVar;
```

> However, if the function is set to 'return' the local variable, it can be called elsewhere by calling the function.

```
}
```

#### Global Scope
```
const globalVar = "I am able to be used anywhere in this file! I should only be used when necessary.";

function accessGlobalVariable() {
    console.log(globalVar);
}
```

> Since 'globalVar' is defined outside of a function, all functions have access to it. 
> Put another way: global scope can be used anywhere in the file as it is defined outside of the confines of any local scope or limitations.
let name = {
    firstName: "Ritesh",
    lastName: "Kumar"
}

function printName () {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name);
printMyName();

Function.prototype.myBind = function (...args) {
    let originalFunction = this;
    let params = args.slice(1);
    return function (...funcArg) {
        originalFunction.apply(args[0], [...params, ...funcArg] );
    } 
}
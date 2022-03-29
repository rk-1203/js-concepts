// const log = (flag) => {
//     const val = document.getElementById("normalInput").value;
//     if(!flag) {
//         console.log("Normal Log", val);
//     } else {
//         console.log("Debounced Log", val);
//     }
// }

// const debouncedLog = _.debounce(() => {log(true)}, 500)
// function x () {
//     let a = 1;
//     let b = 2;
//     return function y() {
//         console.log(a);
//     }
// }

// const z = x();

// z();

// document.getElementById("btn")
// .addEventListener("click", function xyz () {
//     while(true){
        
//     };
//     console.log("yes");
// } )

// names = "Jay"
// const obj = {
//     names: "Ritesh",
//     prop: this.names,
//     regFn: function () {
//         console.log("regFn", this.names);
//     },
//     arrowFn: () => {
//         console.log("arrowFn", this.names);
//     },
//     iife: (function () {
//         console.log("iife", this.names);
//     })()
// }
// console.log("this", this);
// console.log("log", this.names);
// console.log("prop", obj.prop);
// obj.regFn();
// obj.arrowFn();

// names = 'global';
// function x() {
//     this.names = "x";
//     function y() {
//         this.names = 'y';
//         function z() {
//             console.log(this.names);
//         }
//         z();
//     }
//     y();
// }

throw new Error('');
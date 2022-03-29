// // let counter = 0;

// // function fetchData() {
// //     console.log("Fetched Data", ++counter);
// // }

// // let betterFetchData = debounce(fetchData, 300);

// // function debounce(func, time) {
// //     let timer;
// //     return function() {
// //         clearTimeout(timer);
// //         timer = setTimeout(() => func.apply(this, arguments), time);
// //     }
// // }

// const add1 = (...args) => {
//     let sum = 0;
//     if (args.length > 1) {
//         return args.reduce((acc, item) => acc + item, 0);
//     } else {
//         return function () {
//             const x = add(arguments);
//             sum += args[0];
//             return sum + add(arguments);
//         };
//     }
// };

// function add2 (...args) {
//     if(args.length===1) {
//         const context = this;
//         return function(...newArgs) {
//             const newAdd = add.apply(context, [...args, ...newArgs]);
//             return newAdd;
//         }
//     } else {
//         return args.reduce((acc, item) => acc + item, 0);
//     }
//     // return function (...newArgs) {
//     //     if(newArgs.length===1) {
//     //         const context = this;
//     //         return add.apply(context, [...args, ...newArgs]);
//     //     } else {
//     //         return x;
//     //     }
//     // }

// }


// function add (...args) {
//     const sum = args.reduce((acc, item) => acc + item, 0);
//     return function (...newArgs) {
//         if(newArgs?.length!==0) {
//             return add.apply(this, [sum, ...newArgs]);
//         } else {
//             return sum;
//         }
//     }
// }

// // const sum(a,b) {
// //     if(a && b)
// // }

// const x = add(2)();
// // const x1 = x(3);

// console.log(x)

// var z = 1;
// let z1 = 2;

const SERIES = {
    expanse: {
      name: "The Expanse"
    }
  };
  
  getSeriesText("expanse");
  
  function getSeriesText(seriesKey) {
    const seriesData = SERIES[seriesKey];
    const seriesText = generateSeriesText(seriesData);
    console.log(seriesText);
    return seriesText;
  }
  
  const generateSeriesText = (seriesData) => `
    Show Name: ${seriesData.name}
    Show Genre: ${seriesData.genre}
    Enjoy! 🍿
  `;
let counter = 0;

function fetchData() {
    console.log("Fetched Data with search term", ++counter);
}

let betterFetchData = throttle(fetchData, 300);

function throttle(func, time) {
    let isTimerOn = true;
    return function() {
        if(isTimerOn) {
            isTimerOn = false;
            setTimeout(() => isTimerOn = true, time);
            func.apply(this, arguments)
        }
    }
}
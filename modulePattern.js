const CounterModule = (function() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(`count ${count}`);
    }
    
    function decrement() {
        count--;
        console.log(`count ${count}`);
    }
    
    return {
        increment,
        decrement,
    };
})();

counter = CounterModule;
counter.increment();
counter.increment();
counter.decrement();
// console.log("counter :", );

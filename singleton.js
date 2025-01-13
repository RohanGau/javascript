class Singleton {
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance;
        }
        this.data = {};
        Singleton.instance = this;
    }
    
    set(key, value) {
        this.data[key] = value;
    }
    
    get(key, value) {
        return this.data[key];
    }
}

const Singleton = (function() {
    let instance;
    
    function createInstance() {
        const object = { data: {}};
        return object;
    }
    
    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// with classes
const instance1 = new Singleton();
instance1.set("name", "Rohan");

const instance2 = new Singleton();
console.log("instance1 :", instance2.data);

console.log(instance1 === instance2);

// with functions
const obj1 = Singleton.getInstance();
obj1.data.name = "Rohan";

const obj2 = Singleton.getInstance();

console.log("obj1 :", obj1);
console.log("obj2 :", obj2);



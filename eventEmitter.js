
// please complete the implementation
class EventEmitter {
  subscriptions = new Map();

  subscribe(eventName, callback) {
    if(!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, new Set());
    }
    const subscriptions = this.subscriptions.get(eventName);
    const callbackObj = { callback };
    subscriptions.add(callbackObj);
    return {
      release: () => {
        subscriptions.delete(callbackObj);
        if(subscriptions.length === 0) {
          this.subscriptions.delete(eventName);
        }
      }
    }
  }

  emit(eventName, ...args) {
    const subscriptions = this.subscriptions.get(eventName);
    if(subscriptions) {
      subscriptions.forEach((obj) => {
        obj.callback.apply(this, args);
      })
    }
  }
}



// more enhancement

class EventEmitter {
    constructor() {
        this.event = {};
    }
    
    emit(eventName, ...args) {
        if(!this.event[eventName] || this.event[eventName].length === 0) {
            console.warn(`Event ${eventName} not found or has no listeners`)
            return;
        }

        this.event[eventName].forEach((callback) => {
            callback.call(this, ...args);
        });
    }
    
    subscribe(eventName, callback) {
        if(!this.event[eventName]) {
            this.event[eventName] = [];
        }
        
        if(!this.event[eventName].includes(callback)) {
            this.event[eventName].push(callback);
        }
        
        
        return {
            remove: () => {
                this.event[eventName] = this.event[eventName].filter((fn) => fn !== callback);
                if (this.event[eventName].length === 0) {
                   delete this.event[eventName];
                }
            }
        }
    }
}

const emitter = new EventEmitter();

const subscription = emitter.subscribe("modify", (link) => {
    console.log(`Modified : ${link}`);
});

emitter.emit("modify", "test@gmail.com");
subscription.remove();

emitter.emit("modify", "rohan@gmail.com");
// // no event found
emitter.emit("notEventFound", "test@gmail.com");




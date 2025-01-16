
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

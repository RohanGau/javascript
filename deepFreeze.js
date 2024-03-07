function deepFreez(obj) {
  const propNames = Object.keys(obj);
  for (key of propNames) {
    const value = obj[key];
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreez(value);
    }
  }
  return Object.freeze(obj);
}

const object = {
  firstName: "Rohan",
  lastName: "kumar",
  address: {
    city: "Ghaziabad",
    pincode: 201005,
  },
};

// Object.freeze(object);
deepFreez(object);

object.address.city = "Banglore";
object.address.pincode = 560103;
console.log(object);

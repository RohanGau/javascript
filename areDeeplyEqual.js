const object1 = {
  name: "Rohan",
};
const object2 = {
  name: "Rakesh",
};

const array1 = [3, 4, 2, 4];
const array2 = [3, 4, 2, 4];

function areDeepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  return false;
}

function areDeepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (Array.isArray(obj1) && Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((elem, index) => areDeepEqual(elem, obj2[index]));
  }
  if (
    typeof obj1 === "object" &&
    typeof obj2 === "object" &&
    typeof obj1 !== null &&
    typeof obj2 !== null
  ) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (
      keys1.length !== keys2.length ||
      !keys1.every((key) => keys2.includes(key))
    )
      return false;
    for (let key in obj1) {
      console.log(obj1[key], obj2[key]);
      let isEqual = areDeepEqual(obj1[key], obj2[key]);
      if (!isEqual) return false;
    }
  }
 
  return false;
}

console.log(areDeepEqual(array1, array2));

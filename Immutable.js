

/**
 * @param {any} data
 * @param {Object} command
 */

const isObject = (data) => {  return typeof data === 'object' && data !== null}

function update(data, command) {
  if ('$push' in command) {
    if (!Array.isArray(data)) {
      throw new Error('not array');
    }
    return [...data, ...command['$push']];  
  }

  if('$merge' in command) {
    if(!isObject(data)) {
      throw new Error('not object');
    }
    return {
      ...data,
      ...command['$merge'],
    }
  }

  if('$set' in command) {
    return command['$set'];
  }

  if('$apply' in command) {
    return command['$apply'](data);
  }


  if(!isObject(data)) {
    throw new Error("not object for more complex value");
  }

  const newData = Array.isArray(data) ? [...data] : { ...data };

  for(const key of Object.keys(command)) {
    newData[key] = update(newData[key], command[key]);
  }

  return newData;
}


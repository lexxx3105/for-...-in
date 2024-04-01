export default function orderByProps(player, list) {
    const propsByList = [];
    const propsByAlphabet = [];
    const comparator = (a, b) => a.key.localeCompare(b.key);
  
    if (Array.isArray(list) && list.length !== 0) {
      for (const prop in player) {
        if (Object.prototype.hasOwnProperty.call(player, prop)) {
          const obj = {
            key: prop,
            value: player[prop],
          };
  
          const propIndex = list.indexOf(prop);
  
          if (propIndex !== -1) {
            propsByList[propIndex] = obj;
          } else {
            propsByAlphabet.push(obj);
          }
        }
      }
  
      propsByAlphabet.sort(comparator);
  
      return propsByList.concat(propsByAlphabet);
    }
  
    for (const prop in player) {
      if (Object.prototype.hasOwnProperty.call(player, prop)) {
        const obj = {
          key: prop,
          value: player[prop],
        };
  
        propsByAlphabet.push(obj);
      }
    }
  
    propsByAlphabet.sort(comparator);
  
    return propsByAlphabet;
  }
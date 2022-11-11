function setCompleted(item, Id) {
  if (item[Id].completed === false) {
    item[Id].completed = true;
  } else {
    item[Id].completed = false;
  }
  return item;
}

module.exports = setCompleted;
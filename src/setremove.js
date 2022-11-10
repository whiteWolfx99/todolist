function setromovebyid(object, clear) {
  return object.splice(object.indexOf(clear), 1);
}

module.exports = setromovebyid;
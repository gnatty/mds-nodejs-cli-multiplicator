function getCurrentDate() {
  let oDate = new Date();
  let oCurDate = {
    y: oDate.getFullYear(),
    m: oDate.getMonth() + 1,
    d: oDate.getDate(),
    h: oDate.getHours(),
    m: oDate.getMinutes(),
    s: oDate.getSeconds(),
    ms: oDate.getMilliseconds(),
    toString: () => {
      return `${oCurDate.y}-${oCurDate.m}-${oCurDate.d} ` 
      + `| ${oCurDate.h}:${oCurDate.m}:${oCurDate.s}:${oCurDate.ms}`;
    }
  };
  return oCurDate.toString();
}

module.exports = getCurrentDate;
// function formatTime (date) {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()

//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   const t1 = [year, month, day].map(formatNumber).join('/')
//   const t2 = [hour, minute, second].map(formatNumber).join(':')

//   return `${t1} ${t2}`
// }

export function formatNumber(value) {
  let _value = parseInt(value);
  if (10000 <= _value && _value < 100000000 ) {
    _value = (_value / 10000).toFixed(2) + '万';
  } else if (_value >= 100000000) {
    _value = (_value / 100000000).toFixed(2) + '亿';
  }
  return _value;
}

export default {
  formatNumber,
  // formatTime
}

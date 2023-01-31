/**
 * Task 1 - String Sort
 *
 */
function sortString(str) {
  var result = '';

  if(str === '' || str === null) {
    return result;
  }
  var res = str.split(' ')

  const arr = res.map((obj, index) => {
    return { number: getDigits(obj), value: obj, index: index }
  })

  arr.sort((a, b) => {
    return a.number - b.number
  })

  arr.map(obj => {result += obj.value + " "});
  result = result.slice(0, -1);
  return result
}

const getDigits = (str) => (str.match(/\d+/) || [Number.MAX_VALUE])[0];


/**
 * Task 2 - Queue at the supermarket
 */
function queueSupermakert(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;

  }
  return Math.max(...w);
}


/**
 * Task 3 - Next bigger number
 */

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){

  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);

  if(max > n) return max;

  return -1;
}

module.exports = { sortString, queueSupermakert, nextBigger }

// Methods to format numbers

export /**
 * @param {number} num
 * @param {number} decPlaces
 */
  function financial(num, decPlaces) {
  return Number.parseFloat(num).toFixed(decPlaces);
}

export /**
 * @param {number} n
 * @param {number} decPlaces
 */
  function percentage(n, decPlaces) {
  return (Number.parseFloat(n) * 100).toFixed(decPlaces);
};


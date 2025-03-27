
randomId = function(length = 6) {
  return Math.random().toString(36).substring(2, length+2);
};

const num = randomId(8);
console.log(num)
var prices = [33, 26, 99, 120, 12, 45]
var sum = 0;

for (i = 0; i < prices.length; i++) {
  sum += prices[i];


}
var x
console.log("The sum is: ", sum);

for(x = 99; x >= 1; x--){
  if(x != 1) {
  console.log(x + "crows on the wall" + x + "crows." + "1 fell down and became wight" + (x - 1) + "crows are left.");
 } else {
  console.log("1 single crow. It fell down and became a wight. There is no one left to defend Westeros now.");
}
}

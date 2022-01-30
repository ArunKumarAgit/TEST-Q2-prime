//Write a program to print all prime numbers in range 1 to n.take a input from the user

var n = prompt("Enter a number:");
n = parseInt(n);
if(isNaN(n) || n <= 1) {
    alert("enter valid number");
}
for (j = 2; j <= n; j++) {
  let p = 1;
  let i = 2;

  while (i < j) {
    if (parseInt(j % i) == 0) {
      p = 0;
      break;
    }
    i++;
  }
  if (p == 1) {
    console.log(j);
  }
}
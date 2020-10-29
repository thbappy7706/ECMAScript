var num1 = prompt("Enter Your First Number :");
var num2 = prompt("Enter Your Second Number :");

num1  = parseInt(num1,10);
num2  = parseInt(num2,10);

var add,sub,mul,div,mod;

add = num1 + num2;
document.write(num1 + " + "  + num2 + " = " + add + "<br/>"  );

sub = num1 - num2;
document.write(num1 + " - "  + num2 + " = " + sub + "<br/>"  );

mul = num1 * num2;
document.write(num1 + " * "  + num2 + " = " + mul + "<br/>"  );

div = num1 / num2;
document.write(num1 + " / "  + num2 + " = " + div + "<br/>"  );

mod = num1 % num2;
document.write(num1 + " % "  + num2 + " = " + mod + "<br/>"  );




// var i = 1;
// while(i<=100){
//   document.write(" " +i);
//   i = i+1;
//

var i = 1;
var sum = 0 ;

while(i<=30)
{
  if(i%3==0 && i%5==0)
  {
    document.write(" " +i );
    document.write("<br>" );
    sum = sum + i ;

  }

  i++;
}

document.write("The Result is ",sum);






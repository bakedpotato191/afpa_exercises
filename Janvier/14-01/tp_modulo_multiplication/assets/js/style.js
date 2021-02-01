/* 1 */

var i=0;

for (i=20; i>=0; i-=2)
{
  console.log(i);
}

console.log("---")

/* 2 */

for (i=20; i>=0; i--)
{
  if (i%2==0)
  {
    console.log(i);
  }
}

console.log("---")

/* 3 */

var array = ['20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
for (i=0; i<=array.length; i++)
{
  if (array[i] % 2 == 0)
  {
    console.log(array[i]);
  }
}

console.log("---")

/* 4*/

var array = ['20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
for (i=0; i<=array.length; i+=2)
{
    console.log(array[i]);
}

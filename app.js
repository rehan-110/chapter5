//cahpter 05 started-------------------------------------------------------------------------





// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

//---------------------------------------------------POINT 1 START--------------------------------------------------------------------
var num1 = 10;
var num2 = 20;
var res = num1+num2;
document.write("sum of " + num1 +" and " + num2 + " is " + res + "<br>") ;



//---------------------------------------------------POINT 1 END--------------------------------------------------------------------



//2. Repeat task1 for subtraction, multiplication, division &
//modulus.


//---------------------------------------------------POINT 2 START--------------------------------------------------------------------


var res = num1-num2;
document.write("sub of " + num1 +" and " + num2 + " is " + res + "<br>");

var res = num1*num2;
document.write("multiply of  " + num1 +" and " + num2 + " is " + res + "<br>");

var res = num1/num2;
document.write("division of " + num1 +" and " + num2 + " is " + res + "<br>");

var res = num1%num2;
document.write("modulus of " + num1 +" and " + num2 + " is " + res + "<br>");



//---------------------------------------------------POINT 2 END--------------------------------------------------------------------




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.



//---------------------------------------------------POINT 3 START--------------------------------------------------------------------

var $num;
document.write("<br>" + "value after variable declaration is " + $num);

$num = 5
document.write("<br>" + "initial value: " + $num);

$res = $num++
document.write("<br>" + "value after increment is: " + $num);

$res = $num + ++$num
document.write("<br>" + "value after addition: " + $res);

_res = $res = --$res
document.write("<br>" + "value after decrement: " + $res);

var $rre = 3 
var $_res = $res%$rre 
document.write("<br>" + "the remainder is: " + $_res);


//---------------------------------------------------POINT 3  END--------------------------------------------------------------------





// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

//---------------------------------------------------POINT 4  START--------------------------------------------------------------------

var ticketPrice = 600
var $tick = 5
var $total = ticketPrice * $tick
document.write("<br> <br> <br> <br> " + "The Cost To Buy " + $tick + " tickets to a movie is " + $total + "PKR");
//---------------------------------------------------POINT 4 END--------------------------------------------------------------------




// 5. Write a script to display multiplication table of any 
// number in your browser. E.g



//---------------------------------------------------POINT 5  START--------------------------------------------------------------------

var tableNum = 96
document.write("<br> <br> <br> <br> "+"Table Of " + tableNum)
var tableLine = 1
var tableRes = tableNum * tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);

var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes =  tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);
var tableRes = tableNum * ++tableLine
document.write("<br>" + tableNum +"x" +tableLine +"="+ tableRes);



//---------------------------------------------------POINT 5 END--------------------------------------------------------------------





// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


//---------------------------------------------------POINT 6  START--------------------------------------------------------------------

var cel = 25;
var f = 77;
var f = (cel * 9 / 5) + 32
document.write("<br><br><br>" + cel + "oC is " + f + "oF");

var f = 70;
var cel = 25;
var cel = (f - 32 ) * 5 / 9;
document.write("<br>" + f + "oF is " + cel + "oC");
//---------------------------------------------------POINT 6 END--------------------------------------------------------------------





// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

//---------------------------------------------------POINT 7  START--------------------------------------------------------------------


var $item1 = 650;
var $qty = 3;
var $ship = 100;
document.write("<br><br><br><br>" + "the price of item 1 is " + $item1);
document.write("<br>" + "qty of item 1 is " + $qty  );
var total1 = $item1*$qty

$item2 = 100;
$qty2 = 7;
document.write("<br>" + "the price of item 2 is " + $item2);
document.write("<br>" + "qty of item 2 is " + $qty2  );
document.write("<br>" + "Shipping Charges " + $ship);


var total2 = $item2*$qty2;
var final = total1+total2+$ship
document.write("<br>" + "Total Cost Of Your Order is " + final);



//---------------------------------------------------POINT 7   END--------------------------------------------------------------------



// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

//---------------------------------------------------POINT 8  START--------------------------------------------------------------------


document.write("<h4>Marks Sheet</h4>");
var marks = 1200;
var obt = 940;
document.write("<br>" +"Total marks: " + marks);
document.write("<br>" + "Obtained Marks: " + obt);

var result = obt*100/marks;
document.write("<br>" + "Percentage: " + result +"%" );


//---------------------------------------------------POINT 8   END--------------------------------------------------------------------







// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

//---------------------------------------------------POINT 9  START--------------------------------------------------------------------

// 10 dollors 25 riyals
var dollar = 104.80 , riyal = 28 , dollarqty =10 , riyalqty = 25
var exchange =  dollar * dollarqty + riyal * riyalqty;
document.write("<br><br><br>"+"Total Currency In PKR : " + exchange);

var reh = 1 , res = reh+5*10, $res = res / 2;
document.write("<br><br><br><br>" + $res);
//---------------------------------------------------POINT 9   END--------------------------------------------------------------------





// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
//---------------------------------------------------POINT 10  START--------------------------------------------------------------------

var initialValue = 7;


var result = ((initialValue + 5) * 10) / 2;

document.write("<br><br><br><br>"+result);

//---------------------------------------------------POINT 10   END--------------------------------------------------------------------




// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


//---------------------------------------------------POINT 11  START--------------------------------------------------------------------

var curYear = 2024 , bYear = 2009 , age = curYear - bYear ;

document.write("<br><br><br>" + "Current Year " + curYear);
document.write("<br>" + "Birth Year " + bYear);
document.write("<br>" + "Your Age Is  " + age);

//---------------------------------------------------POINT 11  END--------------------------------------------------------------------

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


//---------------------------------------------------POINT 12  START--------------------------------------------------------------------


 var radius = 20;
 var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<br><br><br>"+"Radius Of a cirlce is: " + radius);
document.write("<br>"+"The circumference is " + circumference);
document.write("<br>"+"The area is " + area);

//---------------------------------------------------POINT 12   END--------------------------------------------------------------------



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

//---------------------------------------------------POINT 13  START--------------------------------------------------------------------




var fvrt = " kurkure " , maxage = 65 ,nextAge = maxage-age, perday = 3;
var oneYear = 365 , allDays = oneYear*nextAge ,need= allDays*perday;

document.write("<br><br><br>" + "Favourite Snack: " + fvrt);
document.write("<br>" + "Current Age: " + age);
document.write("<br>" + "Estimated MAX Age: " + maxage);
document.write("<br>" + "Amount Of Snack Per Day: " + perday);
document.write("<br>" + "You Will Need " , need , fvrt , "To Last Until the RIP old Age of " , maxage );
//By The Year Or Book Rule
var $need = nextAge * perday
document.write("<br><h1>By The Book/Year Rule</h1>" + "You will Need " + $need + "To Last Until the RIP old Age Of " , maxage );

//---------------------------------------------------POINT 13  END--------------------------------------------------------------------












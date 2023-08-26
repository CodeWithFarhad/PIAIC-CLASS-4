// write program that  converts the temp fh into cel
{
var tempinCelsius:number =  41;
var tempinFh:number = 0;
     tempinFh = (tempinCelsius*(9/5)+32);
     console.log(tempinFh)
}

// write a program the calculate the percentage
{
var tottalMarks:number = 1100;
var marksTaken:number = 928;
const percentage:number = marksTaken/tottalMarks * 100
console.log(percentage)
}
//write a program that converts given number of days in to weeks and days such as 17 days= 2 weeks and 4 days
{
 var days:number = 23;
 const weeks:number =days/7;
 const remainingDay = days%7;

  console.log(weeks,"weeks",remainingDay,"days")
}
//  - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
{
    let myAge:number= 20;


    if(myAge>=0 && myAge<=12){
        console.log("child")

    }
    else if(myAge>=13 && myAge<=19){
        console.log("teen")
    }
    else{
        console.log("adult")
    }
}
//  - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

var units:number = 278;
var billAmount:number = 12800;


if (units>100) {
    const taxRate:number = 0.10; //10%tax = 0.10
    let taxAmount:number=billAmount*taxRate;
    let totalAmount:number= billAmount+taxAmount
    console.log(totalAmount)
} else if(units>200) {
    const taxRate:number = 0.15;//15%tax = 0.15
    let taxAmount:number=billAmount*taxRate;
    let totalAmount:number= billAmount+taxAmount
    console.log(totalAmount)
    
}else if(units>500){
    const taxRate:number = 0.25;//25%tax = 0.25
    let taxAmount:number=billAmount*taxRate;
    let totalAmount:number= billAmount+taxAmount
    console.log(totalAmount)
}
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
{
var temp:number= 18;
if(temp<=16){
console.log("wear jacket,gloves,warm cap,warm socks,")

}
else if(temp>=17 && temp<=25){
    console.log("wear a jaket and full clothes")
}
else if (temp>=26 && temp<=40){
    console.log("wear normal  clothes you are commfortable with")
}
}  
// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

{
    var a:number =  37;
    if(a % 3 == 0 && a %  5 == 0){
        console.log("it is divisible for both 5 and 3")

    } 
    else if (a % 3== 0){
        console.log("it is divisible for 3")

    }
    else if (a % 5 == 0 ){
        console.log("it is divisible for 5")
    }
    else {
        console.log("it is not divisible for both")
    }

}
// Write a program that checks if the given year is leap year or not.
 {
    var year:number = 2024
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log("it is a leap year")
    }
    else{console.log("it is simple year")}
        
    
 }
//   - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
{
var productPrice:number = 145
  if(productPrice>100){
    const discount:number = 0.10 // 10% discount = 0.10
    let discountAmount:number = productPrice*discount
    let tottalAmount:number = productPrice-discountAmount
    console.log(tottalAmount)
  }
  else{
    const discount:number = 0.05// 5% discount = 0.05
    let discountAmount:number = productPrice*discount
    let tottalAmount:number = productPrice-discountAmount
    console.log(tottalAmount)

  }
}

//  - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name
   { 
   var dayNumber:number = 6

  if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber === 1) {
      console.log("Sunday");
    } else if (dayNumber === 2) {
      console.log("Monday");
    } else if (dayNumber === 3) {
      console.log("Tuesday");
    } else if (dayNumber === 4) {
      console.log("Wednesday");
    } else if (dayNumber === 5) {
      console.log("Thursday");
    } else if (dayNumber === 6) {
      console.log("Friday");
    } else {
      console.log("Saturday");
    }
  } else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
  }

}
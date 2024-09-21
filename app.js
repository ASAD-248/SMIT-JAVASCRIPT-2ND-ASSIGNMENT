
//              Q no: 01;

var user = prompt("Enter your city name");
var message = user;
if (user == "karachi"){
    document.write("<h1>Wellcome to the city of lights</h1>");
}else{
    document.write("<h1> your city is </h1>" + "<h1>" + message  + "</h1>");
}

//              Q no: 02;

var userGender = prompt("Enter Your Gender")

if(userGender == "male"){
    document.write("Good Morning Sir");

}else if(user == "female"){
    document.write("Good Morning Ma’am.")
}else{
    document.write("Have a Good Day");  
}

//              Q no: 03;

var red = "Must Stop";
var yellow = "Rrady to Move";
var green = "Move Now";

document.write(`
    <table> 
        <tr>
            <th> Signal Color</th>
            <th> Message</th>   
        </tr> 
         <tr>
            <td>Red</td>
            <td> ${red}</td>   
        </tr>
         <tr>
            <td>Yellow</td>
            <td> ${yellow}</td>   
        </tr>
         <tr>
            <td>Green</td>
            <td> ${green}</td>   
        </tr>   
    </table>
    `);


var traffic = prompt("Enter traffic signal color");

var redMessage = "<h1> Must Stop </h1>";
var yellowMessage = "<h1> Rrady to Move </h1>";
var greenMessage = "<h1> Move Now </h1>";


if(traffic === "red"){
    document.write(redMessage);
}else if(traffic === "yellow"){
    document.write(yellowMessage);
}else if(traffic === "green"){
    document.write(greenMessage);
}

//              Q no: 04;

var userFuel = +prompt("Enter current fuel in your car");

if (userFuel < 0.25 ){
    alert("Please refill the fuel in your car")
}else{
    alert("you dont have to refill the fuel")
}

//              Q no: 05;

// a)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

// d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e)
if (true){
alert("True");
}

if (false){
alert("False");
}

// f)

 if("car" < "cat"){
alert("car is smaller than cat")
}

//              Q no: 06;

var eng = +prompt("Enter your English marks");
var urdu = +prompt("Enter your Urdu marks");
var math = +prompt("Enter your math marks");
var total = 300;
var obtain = eng + urdu + math;
var percentage = obtain / total * 100 + "%";
alert(percentage)

var grade;
var remarks;

if(percentage >= 80){
        grade = "A-one"
        remarks="Excellent"
}else if(percentage >= 70){
        grade = "A"
        remarks="Good"
}else if(percentage >= 60){
        grade = "B"
        remarks="You need to imrove"
}else{
        grade = "Fail"
        remarks = "Sorry"
}
document.write(`
        <h1> Marks Sheet </h1> 
        <h3>Total Marks is : ${total};</h3>   
        <h3>Marks Obtained : ${obtain};</h3>  
        <h3>Percentage :${percentage};</h3>       
        <h3>Grade :${grade};</h3>            
        <h3>Remarks :${remarks};</h3>          
    `);

//              Q no: 07;

var sec_number = 7;
var user_guess = +prompt("Guess the number 1 to 10;");

if(user_guess === sec_number){
    document.write("“Bingo! Correct answer”.");
}else if(++user_guess === sec_number ){
    document.write("“Close enough to the correct answer”.")
}else {
    document.write("You can't guess the secret number")
 }

//              Q no: 08;

var getUser = + prompt("Enter any  number that  will be  divsible  by 3")

var divisble = getUser % 3;
 
if( divisble === 0){
    alert("The number is divsible by 3")
}

else{
    alert("The number is not divsible by 3")
}

//              Q no: 09;

var User_Inp = + prompt("Enter any  number to find whether it is even or add :");

var divisble_nmbr = User_Inp % 2;
 
if(divisble_nmbr  === 0){
    alert("Even number");
}

else{
    alert("Odd Number");
}

//              Q no: 10;

var user_T = +prompt("enter yoy area temprature");

if(user_T >= 40 ){
    alert("It is too hot outside.");
}else if(user_T >= 30){
    alert("The Weather today is Normal.");
}else if(user_T >= 20){
    alert("Today’s Weather is cool.");
}else if(user_T >= 10){
    alert("OMG! Today’s weather is so Cool.");
}else{
    alert("invalid");
}

//              Q no: 11;

var num1 = + prompt("enter first number to perform operation")
var num2 = + prompt("enter secound number to perform operation")
var operator = prompt("enter operator to perform operation")
var result;
        
if (operator === "+"){
  result = num1 + num2 
}

else if(operator === "-"){
    result = num1 - num2 
}

else if(operator === "x"){
    result = num1 * num2 
}

else if(operator === "/"){
    result = num1 / num2 
}

else if(operator === "%"){
    result = num1 % num2 
}

else {
    alert("invalid")
}

alert(result);

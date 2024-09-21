
//                  Q no: 01;

var c = 10;
document.write( `
        Result: <br>
        The value of c is : ${c}<br><br><br>
`)
document.write( `
        
        The value of ++c is : 11<br>
        Now the value c is : ${++c}<br><br><br>
`)    
document.write( `
        The value of ++c is : 11<br>
        Now the value c is : ${++c}<br><br><br>
`)
document.write( `
    The value of --c is : ${--c}<br>
    Now the value c is : ${c} <br><br><br>
`)
document.write( `
    The value of c-- is : ${c--}<br>
    Now the value c is : ${c}<br><br><br>
`) 
    
//                  Q no: 02;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +   1 answ = 3 ;
document.write("a is " + a  + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result);

//                  Q no: 03;

var userName = prompt("Enter tour name");
alert("Hello " + userName + "<br>");

//                  Q no: 05;

var table_nmbr = +prompt("Enter any number for table");

for( i = 1 ; i<=10; i ++){
    document.write(table_nmbr + " x "  + i + " = " + table_nmbr * i + "<br>")
}

//                  Q no: 06;

var subName_1 = prompt("Enter subject 1 name");
var obtainmarks_1 = +prompt("Enter subject 1 marks");

var subName_2 = prompt("Enter subject 2 name");
var obtainmarks_2 = +prompt("Enter subject 2 marks");

var subName_3 = prompt("Enter subject 3 name");
var obtainmarks_3 = +prompt("Enter subject 3 marks");

var total = 100;
var perc_1 = obtainmarks_1 / 300 * 100;
var perc_2 = obtainmarks_2 / 300 * 100;
var perc_3 = obtainmarks_3 / 300 * 100;

var all_Obtain = obtainmarks_1 + obtainmarks_2 + obtainmarks_3;
var percentage = (all_Obtain / 300 * 100) + "%";



document.write(`
        <table> 
            <tr>
                <th>Subjects</th>
                <th>Total Marks</th>
                <th>Obtain Marks</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>${subName_1}</td>
                <td>${total}</td>
                <td>${obtainmarks_1}</td>
                <td>${perc_1}</td>
            </tr>
            <tr>
                <td>${subName_2}</td>
                <td>${total}</td>
                <td>${obtainmarks_2}</td>
                <td>${perc_2}</td>
            </tr>
            <tr>
                <td>${subName_3}</td>
                <td>${total}</td>
                <td>${obtainmarks_3}</td>
                <td>${perc_3}</td>
            </tr>
            <tr>
                <th></th>
                <th>300</th>
                <th>${all_Obtain}</th>
                <th>${percentage}</th>
            </tr>
        </table>
    `)


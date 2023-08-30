 // operators are symbols that used to perform some operation on operands
 var a = 10;
 document.write(a + '<br>');      //10
 document.write((a++) + '<br>');  //10
 document.write((++a) + '<br>');   //12
 document.write((++a) + '<br>');//13
 document.write((--a) + '<br>');//12
 document.write((a--) + '<br>');//12
 document.write(a + '<br>');//11

 //relational operators
 var b = 2;
 if (a > b) {
     document.write(`a<b`);
 }

 else if (b > a) {
     document.write('b>a');
 }
 else if (a == b) {
     document.write('a==b');
 }
 // === strictly equal to operator
 else if (a === b) {
     document.write('a===b');
 }
 else if (a !== b) {
     document.write('a!==b');
 }
 else if (a != b) {
     document.write('a!==b');
 }
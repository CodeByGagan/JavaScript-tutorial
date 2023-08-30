// Function without arguments
function func1() {
  alert("This is inside function func()");
}
document.write("we are using external js file");

// Function with arguments
// in function calling we can pass arguments
// parameters receives the value of an arguments
function cube(a) {
  b = a;
  cube = a * a * a;
  document.write("Cube of " + b + " is: " + cube);
}
function triangleArea(b, h) {
  base = b;
  height = h;
  area = 0.5 * b * h;
  document.write(
    "Area of triangle with base=" +
      base +
      " and height=" +
      height +
      " is " +
      area
  );
}
// function with return value
function square(a){
 sqr=a*a;
 a=a;
//  document.write('Square of '+a+' is '+sqr);
 return 'Square of '+a+' is '+sqr;
}
// document.write(square(a));
//---------------------------------------------------------------------------




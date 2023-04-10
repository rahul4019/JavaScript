const lastname = 'kumar';

const printName = function () {
  const firstname = 'Rahul';
  function myFunction() {
    console.log(firstname);
    console.log(lastname);
  }
  myFunction();
  console.log(firstname);
  console.log(lastname);
  /* 
    When JavaScript cannot find the lastname in the local memory of function, It will go to 
    global execution context
    * Lexical => where is somthing present
   */
};

printName();

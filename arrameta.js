// Add any extra import statements you may need here


// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){
    array_a.sort((a, b) => a - b);
     array_b.sort((a, b) => a - b);
     
     for(let i = 0; i < array_a.length; i++) {
       if (array_a[i] !== array_b[i]) {
         return false;
       }
     }
     return true;
   }
   
   
   
   
   // These are the tests we use to determine if the solution is correct.
   // You can add your own at the bottom.
   function printString(str) {
     var out = '["' + str + '"]';
     return out;
   }
   
   var test_case_number = 1;
   
   function check(expected, output) {
     var result = (expected == output);
     var rightTick = "\u2713";
     var wrongTick = "\u2717";
     if (result) {
       var out = rightTick + ' Test #' + test_case_number;
       console.log(out);
     }
     else {
       var out = '';
       out += wrongTick + ' Test #' + test_case_number + ': Expected ';
       out += printString(expected);
       out += ' Your output: ';
       out += printString(output);
       console.log(out);
     }
     test_case_number++;
   }
   
   var array_a_1 = [1, 2, 3, 4];
   var array_b_1 = [1, 4, 3, 2];
   var expected_1 = true;
   var output_1 = areTheyEqual(array_a_1, array_b_1); 
   check(expected_1, output_1); 
   
   var array_a_2 = [1, 2, 3, 4];
   var array_b_2 = [1, 4, 3, 3];
   var expected_2 = false;
   var output_2 = areTheyEqual(array_a_2, array_b_2); 
   check(expected_2, output_2); 
   
   // Add your own test cases here
   var array_a_3 = [1, 5, 7, 9];
   var array_b_3 = [9, 7, 5, 1];
   var expected_3 = true;
   var output_3 = areTheyEqual(array_a_3, array_b_3); 
   check(expected_3, output_3); 
   
   var array_a_4 = [10, 20, 30, 40];
   var array_b_4 = [10, 20, 30, 50];
   var expected_4 = false;
   var output_4 = areTheyEqual(array_a_4, array_b_4); 
   check(expected_4, output_4); 
let a = 0;         // Initialize a variable 'a' with the value 0.

for (a; a < 5; a++);  // Start a for loop with three parts: initialization (a), condition (a < 5), and increment (a++).
                       // The loop body is empty due to the semicolon (;) immediately after the for statement.
                       // The loop will continue executing as long as the condition (a < 5) is true.
                       // The increment part (a++) is executed after each iteration.

// Iteration 1: a = 0
// Iteration 2: a = 1
// Iteration 3: a = 2
// Iteration 4: a = 3
// Iteration 5: a = 4
// Iteration 6: a = 5 (loop exits because a is no longer less than 5)

console.log(a);  //5
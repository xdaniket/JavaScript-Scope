//            __________________  Scope ___________________________________
//
//  Scope :
//                  Scope determines the accessibility nd visibility of a variable.
//
//                  All the variables are a global variable.
//                  Like = 1. Var  2. Let  3. Const
//
//  There are three types of scope in javascript.
//
//  1. Global Scope   2. Script nd Block Scope  3. Functional nd Local Scope

//  1. Global Scope :
//                  If we declare a variable globally ( outside any function ) have a Global Scope.
//
//           Note:  If we declare Var** variable anywhere so they have a global scope.
//                  except the inside a function.

//  2. Script Scope :
//                  If we declare a variable globally outside a curley braces nd function
//                  so let nd const have a script scope nd var has a global scope.

//  2.1 Block Scope :
//                  If we declare a variable inside a curley braces (for loop / if)
//                  so let nd const has a Block Scope But var has a global scope.
//                  After it's working Block Scope has gone.

// 3. Functional nd Local Scope :
//                  If we declare a variable inside a function so all variable
//                  Var Let Const has a local scope.
//                  After it's working Local Scope has gone.

// 4. Accidental Variable :
//                  If we assign a value without variable name so they are accidental variable
//                  it will automatically become a Global Variable.
//           Note : They are not hoisted.
//           Like : a = 20  nd window.x = 30;

// 5. Temporal Dead Zone :
//                  Var variable we can access it before initialisation of it nd
//                  Let nd Const variable we can't access before initialisation of it.

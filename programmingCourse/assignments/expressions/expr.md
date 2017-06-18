# Expressions

Most programming languages provide a way for programmers to build _expressions_.  We build expresions from _values_ and _operators_.  Some types of values include strings, numbers, and variables.  Some types of operators include _arithmetic_ operators (+, *), logical operators (||, &&), and comparison operators (==, >=).  

In this lesson, we will explore all the ways to build expressions in TypeScript.  We will do this by playing with expressions using node.  

Before we start playing with examples, take a look at this [overview](https://www.w3schools.com/Js/js_operators.asp) of the JavaScript operators.  TypeScript has all of the JavaScript operators and a few more.  Most of this lesson will focus on the JavaScript operators.

Now that you've looked at the overview, let's start with the arithmetc operators. For each of the operators, we've listed one or more examples.  Run each example using node.  After doing this, make a note for yourself of what you think the operator does.  Later, you'll use this knowledge to construct your own expressions.

``` typescript
2 + 4
4 - 2
4 * 2
4 / 2
5 / 2
2.1 * 3
3 % 4
1 % 4
2 % 4
0 % 4
7 % 4
5 % 4
6 % 4
4 % 4
```

You've now worked with all of the arithmetic operators except `++` and `--`.  These operators work on variables, so we need to first look at how to _declare_ and update a variable.  To _declare_ a variable you can use the `var` keyword.  In a later lesson, we'll look at how to use also the `let` and `const` keywords to declare variables.  Declaring a variable means telling the compiler that you will use the variable to store and retrieve values.  Think of a variable as a name for a location in the computer's memory.

```typescript
var v;
```

In this example, we declared a variable named `v`.  Once we declare `v`, we can use it in our programs.  Often, we just go ahead and _initialize_ a variable as part of declaring that variable.  For example, we can write:
```typescript
 var v = 10;
 ```
This statement declares `v` and sets its initial value to 10.  Go ahead and type this into node.
Node will respond by printing `undefined`, because a declaration statement does not have a value.  Even so, if you now type `v` at the node prompt, you will see that `v` has been declared and set to `10`.

Try the following examples of the increment (`++`) and decrement (`--`) operators.  What are they doing?  

``` typescript
var v = 10;
++v
v
--v
v
v++
v
v--     
v
```
`v` ended up with the value (`10`) that it started with, but what happened in between?  What is the difference between `++` and `--`.  

Next up, the _assignment_ operators.  You have seen one of these already, the basic assignment operator `=`, as part of the declaration of variable `v`.  The expression
```typescript
v = v + 2
```
is an assignment expression.  Although `v` appears in both the left-hand side and the right-hand side of the expression, `v` is used differently on each side.  On the right-hand side `v` is used as in any other expression: `v` refers to a location in memory and the JavaScript engine reads the current value from that location.  On the left-hand side, instead of reading from the memory location referenced by `v`, the JavaScript engine writes the value of the entire right-hand side expression into that location, _overwriting_ the old value in the location. 

Test these _compound_ assignment expressions to determine what they do:
```typescript
v = 1
v *= 2
v += 1
v /= 3
v -= 1
v += 5
v %= 4
```
We move on now to the _comparison_ operators.  We use these to build up _conditional_ expressions, whose value is either `true` or `false`.  We most commonly use conditional expressions in _control_ statements such as `if`, `while`, and `for` to decide what statement the JavaScript engine will next execute.

JavaScript and therefore TypeScript have extra operators for testing equality and inequality.  The JavaScript `==` operator should rarely be used because it will convert values of two different types such as number and string so that they become equal.

Try these examples:
```typescript
1 == "1"; 
false == " nt "; 
[[],[]] == true; 
```

Most people find these conversions hard to predict and so they stick with the `===` operator and its negative counterpart `!==`.
```typescript
1 === "1"; 
false === " nt "; 
[[],[]] === true; 
```

Test these expressions to determine how the comparison operators work.
```typescript
4 < 3
4 > 3
4 >= 3
4 <= 3
4 !== 3
4 == 3
```

For a bonus we have one "odd duck" operator called the ternary operator `?`.  Sometimes people write this operator `?:` because a colon is part of the overall expression.  The ternary operator is like an `if` statement in an expression because it uses a conditional expression to choose between two possible result expressions.

Test these examples to see how it works.
```typescript
true ? 1 : 2
false ? 1 : 2
(3 < 4) ? "hat" : "cat"
(2 === 2) ? "duh" : "hmm"
```

To understand the term _ternary_, take a look at count how many sub-expressions make up the entire `?:` expression.  There are three: first the conditional expression before the `?`, then after the `?` the expression to use if the conditional expression evaluates to `true` and finally after the `:` the expression to use if the conditional expression evaluates to `false`.  Each one of these sub-expressions is called an _operand_ and we say that `?:` _takes_ 3 operands.  

In the same way, `+` is a _binary_ operator because it has two operands and `++` is a _unary_ operator because it has a single operand.
 
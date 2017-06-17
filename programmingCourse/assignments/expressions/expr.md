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


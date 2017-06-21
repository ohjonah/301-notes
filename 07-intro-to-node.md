# Intro to Node
***

# Review

#### String Interpolation
* wrap strings in back-ticks ** ` ** and surround variables with ** ${} **


```js
var turtle = 'turtle-animals';
var snail = 'snail-animals';

console.log(`i like ${turtle} and a ${snail}`);
// OUTPUT: i like turtle and snail
```

#### const : you cannot change this variable name
* if you declare something, you can still change it. like array methods. const is mutable

```js
var a = 10;
a = 20;
console.log(a);
// OUTPUT: returns 20

var b = 30;
b = 10;
// OUTPUT: cannot set b to 10
```

#### let : working within a specific scope
* let is about block scoping, like in an if statement

```js
var turtle = 'turtle';
if (1 > 0) {
  console.log(turtle);
}
// OUTPUT: turtle
var turtle = 'turtle';

if (1 > 0) {
  let turtle = 2;
  console.log(turtle);
}
// OUTPUT: fish
```

#### lexical arrow functions

```js
var turtle = () => { console.log('blah') };
turtle();
// OUTPUT: blah
```

# Node
Javascript is blocking. Node.js is an IO and does this in a non-block manner. This is through an event loop.

Node gets a request and adds it off to multi-threads. See lib.uv. Node is fast because it handles one thing at a time in a call stack in a call queue.

Call stack is like putting dishes in a cupboard. First in, Last Out (FILO).

Node gives us the ability to I/O. You can grab a file, read its contents, manipulate it, and then output it. Mostly used to create a server.

#### Key Parts of every Node App:
* package.json : file that contains meta data about the app.
  * name
  * version
  * dependencies
  * etc.
* .gitignore : 'ignore these packages and don't push this up!'
  * ignores /node_modules, a directory that houses our packages that our app needs to install
* npm - node package manager
  * to install packages in a node environment
* REPL :  node has a built-in repl, or a place to write some code
  * read
  * evaluate
  * print
  * loop


```sh
node
```

To create a package.json file:
```sh
npm init -y
```

To create a node_modules directory
```sh
npm i -S express
```
This says: Hey node package manager, install a file called express, and save it as a dependency (-S)

Don't forget to create your .gitignore file!

if you get rid of your modules, you can
```sh
npm i
```
and install based on your package.json meta data

# Lab










# Build Server and Serve Files

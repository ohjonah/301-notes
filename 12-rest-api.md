# REST & APIs
this - is the context in which the function is being executed.
let - declares a variable in a block of code

# Page JS under the hood
1. hijack all clicks on anchor tags
2. prevent default from firing
3. href to which callback we want to invoke
4. invoke callback
5. maintain availability of the back button by saving state: .pushState();
6. Invoke function: what we have defined our callback to be. i.e controller.js

# REST
> Representational State Transfer

* REST is an architectural style that you can use on top of HTTP
* polymorphism: small number of verbs to act on many nouns
* machine to machine talking, machine to human interaction
* GET, POST, UPDATE, DELETE


How to Add a Token
```sh
curl -i -H 'Authorization: token TADIFJAWLKEFJAWLKEJFAWKEJFLKAWJEFLKAWJEKFLJAWE' https://api.github.com/users/brookr
```


```js
$.ajax({
  url: 'https://api.github.com/user/repo',
  headers: {Authorization: 'token 2323jf8j0fjweifjaw;iejfwlkej'},
  method: 'GET'
}).then(function(data) {
  data.map( (repo) => console.log(repo.name))
});
```

make a token.js file
gitignore

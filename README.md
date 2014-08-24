# File Container [![Build Status](https://travis-ci.org/ai/file-container.png)](https://travis-ci.org/ai/file-container)

Parser for file format to store different languages in one file:

```js
$('.signup').click(function () {
    app.showSignup();
});

sass:
  .signup
    background: green
    color: white

haml:
  %a.signup( href="#signup" )
    Signup
```

```js
var parser  = require('file-container');
var control = parser(code);

control.main //=> $('.signup').click(function () {
             //=>     app.showSignup();
             //=> });
control.sass //=> .signup
             //=>   background: green
             //=>   color: white
control.haml //=> %a.signup( href="#signup" )
             //=>   Signup
```

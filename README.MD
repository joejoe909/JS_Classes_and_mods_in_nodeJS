# Classes and Modules in Node Js.

#### Some code I put togeather from a few books and my own ideas. The main lesson of this code is using classes and objects in JS and then using modules
#### in both CommonJS and ESSM: ECMAScript modules. Additionally the code highlight how you can create items dynamically in a for loop and add them 
#### to an array. Then later use the foreach array method to log your data.
####  <br>

```
const employee = require('./employee.js');

function lg(val) {
    console.log(val);
}

const em1 = new employee("Jonny", "Cash");
const em2 = new employee("Sam", "Wise"); 
let empArray = new Array();


for(let i = 0 ; i < 10; i++)
{
    empArray.push(new employee("firstName" + i , "secondName" + i));    
}

lg(em1);
lg(em2);
empArray.forEach(item => lg(item));

```

## Note
#### It's important to note if you use ESM you must use a package.json file with type value set as below or name your files with the .mjs extension...
```
{
    "type":"module"
}
```


## Refrences
#### "Node.js Design Patterns" by Kevin Faabord and Sandro Pasquali - Packt - 2017
#### "JavaScript from Beginner to Professional" by Ved Antani and Stayan Stefanov - Packt 2017  


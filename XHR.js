//Import XHR package
const XMLHttpRequest = require('xhr2');
//Create instance or object of httpRequest
const xhr = new XMLHttpRequest();
//open request

xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1');

//send request

xhr.send();

//Listen for response
xhr.onload = function()
{
    console.log(xhr.responseText);
}



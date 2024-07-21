const requestUrl = "https://api.github.com/users/shreeyashnaik";
const xhr = new XMLHttpRequest(0);
xhr.open('GET', requestUrl);
console.log(xhr.readyState);
xhr.send();
console.log(xhr.readyState);


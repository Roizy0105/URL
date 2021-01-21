//get the url
let url = window.location.href;

//split it by ? or &
let array = url.split(/\?|&/);
//save items in localStorage
localStorage.setItem('array', array);


//push each element on a new line
let newArray = [];
for (i = 0; i < array.length; i++) {
  newArray.push(array[i] + '<br>');
}


//attach the results to a div element
document.getElementById("split_url").innerHTML = newArray;

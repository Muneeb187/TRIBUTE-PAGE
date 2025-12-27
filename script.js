let answer = prompt("Are you Pakistani? (yes/no)");

if (answer && answer.toLowerCase() === "yes") {
  alert("Welcome 🇵🇰");
} else {
  alert("Welcome");
}


document.getElementById('myButton').onclick = function() {
  window.location.href = 'detail.html'; 
};

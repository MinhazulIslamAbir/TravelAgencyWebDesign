let age;
document.getElementById("SubmitButton").onclick = function(){
    age = document.getElementById("Textbox").value;
    if(age < 18) window.alert("You must be 18 years old or older.");
    else window.alert("You can watch it.");
}
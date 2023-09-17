function getInput(){
    var num1;
    var num2;
    num1=parseInt(document.getElementById('num1').value);
    num2=parseInt(document.getElementById('num2').value);
    alert(num1+num2)
}

function getData(){
    var fname=prompt('Enter your first name');
    var lname=prompt('ENter your last name');
    document.getElementById('para1').innerHTML=fname+''+lname;
}
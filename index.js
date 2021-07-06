
let nameFlag=false;
let emailflag=false;
let usnflag=false;
function validate_email(){
    let pattern =new RegExp("(?=.*@)(?=.+.com)");
    
    if(!(pattern.test(document.getElementById("email").value))){
        document.getElementById("em").innerHTML="Email must contain @ and .com";
        document.getElementById("em").style.display="block";
    }
    else{
        emailflag=true;
        document.getElementById("em").innerHTML=" ";
    }
}

function validate_usn(){
    let usn=document.getElementById("usn").value;
    if(usn.length>10 || usn.length<0){
        document.getElementById("id").innerHTML="USN must contain 10 characters";
        document.getElementById("em").style.display="block";
    }
    else{
        usnflag=true;
        document.getElementById("em").innerHTML=" ";

    }
}

function validate_name(){
    let name=document.getElementById("name").value;
    if(name.length>15 || name.length<5){
        document.getElementById("na").innerHTML="Minimun 5 and Maximum 15 characters";
        document.getElementById("na").style.display="block";
    }
    else{
        nameFlag=true;
        document.getElementById("na").innerHTML=" ";

    }
}

function validation(){
    if(nameFlag && usnflag && emailflag){
     alert("Succesfully submitted your form");
    }
    else{
        alert("Enter valid details");
    }
}


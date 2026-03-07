

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
};

document.getElementById("login-btn").addEventListener("click",function(){
const userName = getValueFromInput("user-name");

    const pin= getValueFromInput("passward");

    if(userName==="admin" && pin=== "admin123"){
       
             alert("successfully login");
             window.location.href = "issue-tracker.html";  
             
    }   
    else{
        alert("invalid username or pin");
    }

});

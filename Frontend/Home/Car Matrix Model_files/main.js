//Marcus Mousavi - main.js

//Global variables and values






//Function Calls



/////////////////////////////////////////////////////
function triggerStartButton(button,status){
 // console.log(button + "works");
    var tmp = document.getElementById(button);
    if(status == "hide"){
        tmp.style.display = 'none';
        console.log(tmp.style)
        console.log(tmp);
    }
    else if (status == "show"){
        tmp.style.display = ''

    }
}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
function manageAccount(showhide){
    if(showhide == "show"){
        document.getElementById('popupbox').style.visibility="visible";

        document.addEventListener("DOMContentLoaded",() => {
            document.getElementById('popupbox-submit').addEventListener('click',logUser)
        });
    }   
    else if(showhide == "hide"){
        document.getElementById('popupbox').style.visibility="hidden"; 
    }
}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
function enableSavedUser(){

         //enable saved user settings
         //welcome (username) back
         //change register button on welcome... 
         //...from register to logout 
         //configure registered table using matching id's

}
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
                                                    //Save logged user data
let users = [];
    const logUser = (ev) =>{ 
        ev.preventDefault();
        if(users.some(u => users.includes(u.ID))) { //look for user in DB later
                                                    //enable saved user settings
                                                    //welcome (username) back
                                                    //change register button on welcome... 
                                                    //...from register to logout   

        }
        else{  
        let user = {
            ID: Date.now(),
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
             };
        users.push(user);
        document.forms[0].reset(); 
                                                    //print in console
    console.warn('added',{users});

                                                    //saving to local storage
    localStorage.setItem('UsersList', JSON.stringify(users));

                                                    //welcome user
                                                    //enable saved user settings
    }
}
/////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded",() => {
//     document.getElementById('popupbox-submit').addEventListener('click',logUser)

// });

                                                    //create case where user is already logged in 
   //Marcus Mousavi - main.js


// show display if DOM is loaded

// if (document.readyState === "loading"){
//     document.addEventListener("DOMContentLoaded", register);
// } else {
//     register();
//     console.log(register_button + "dom finished loading");
//     }



//hideButton and register need to be combined where function(showhide,e){}
//
// 
// 
// random comment


function hideButton(e){
    console.log(e + "works");
    e.style.display = 'none';
    //e.style.visibility = 'hidden';
 }

function register(showhide){
    if(showhide == "show"){
        document.getElementById('popupbox').style.visibility="visible";
    }   
    else if(showhide == "hide"){
        document.getElementById('popupbox').style.visibility="hidden"; 
    }
}

//Save logged user data

let users = [];
    const logUser = (ev) =>{ 
        ev.preventDefault();
        let user = {
            IdleDeadline: Date.now(),
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
             };
        users.push(user);
        document.forms[0].reset(); 
    //display 
    console.warn('added',{users});
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(users, '\t', 2)


    //saving to local storage
    localStorage.setItem('UsersList', JSON.stringify(users));
}

document.addEventListener("DOMContentLoaded",() => {
    document.getElementById('popupbox-submit').addEventListener('click',logUser)

});

//create case where user is already logged in 
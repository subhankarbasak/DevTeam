
///////
/**
 * Topic : Learning Javascript From Scrach 
 * Created By Aditya Mandal, Gourab Gupta, Subhankar Basak
 * Date: 29.01.2023 08:15:00 PM to 30.01.2023 01:35:00 AM
 * Online Google Meeting Link : https://meet.google.com/rze-vfhs-gks
 */
/////


// Learn Prompt Function

function learnPromptFunction() {
	// let x = prompt("Enter Your Name Here");
	let y = store(5);
	//alert(x);
	document.write(y);
}


//Function for Save and Print on the body of pages

function save() {
	let a = document.getElementById("input");
	// document.getElementById("heading").innerHTML = a.value;
	// document.querySelector("#heading").innerHTML = a.value;
	// document.querySelector("#heading").innerHTML = "<a href='#'>Lol</a>";
	// document.querySelector("#heading").innerText = "<a href='#'>Lol</a>";
	document.querySelector("#heading").innerText = a.value;
	// console.log(a.value);
}



//Function for Count Number on Click Button 
let a = 0;
function count() {
	//
	let b = a++;
	document.querySelector('[mycustomattribute="sibu"]').innerText = b;
	// return b;
}

//Function for Electric Bulb On and off

function lightOnOff() {
	//
	let getClass = document.getElementById('light');
	if (getClass.classList.contains('off-light')) {
		document.querySelector("#light").src = './images/pic_bulbon.gif';
		getClass.classList.remove("off-light");
	} else {
		document.querySelector("#light").src = './images/pic_bulboff.gif';
		getClass.classList.add("off-light");
	}
}

//Function for Save Information of SignUp page

function saveForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let users = [];
	let user = { name: name, email: email, password: password };
	if (localStorage.getItem("users") == null) {
		users.push(user);
	} else {
		users = JSON.parse(localStorage.getItem("users"));
		for (let i = 0; i < users.length; i++) {
			if (users[i].email == email) {
				alert("user already exist");
			}
		}
		users.push(user);
	}
	let json = JSON.stringify(users);

	// sessionStorage.setItem("user",json);
	localStorage.setItem("users", json);
}

//Function for redirect to another page without refresh Page or concept used: hide page  

function redirect() {
	document.getElementById("signup-form").style.display = "none";
	document.getElementById("signin-form").style.display = "block";
}

//Function for Prevent Default behavior like do not Refresh page after submit button

function prevent(e) {
	// console.log(e);
	e.preventDefault();
}

//Function for Sign In

function signIn() {
	let password = document.getElementById("signInPassword").value;
	let email = document.getElementById("signInEmail").value;
	let users = localStorage.getItem("users");
	let lsUser = JSON.parse(users);
	// console.log(lsUser);
	let isValid = 0;
	for (let i = 0; i < lsUser.length; i++) {
		if (lsUser[i].email == email && lsUser[i].password == password) {
			isValid = 1;
			break;
		}
	}
	if (isValid == 0) {
		alert("Wrong Email or Password!!!!");
	}
	else {
		document.getElementById("dashboard").style.display = "block";
		document.getElementById("signin-form").style.display = "none";

		let currentUser = { email: email, password: password };
		let json = JSON.stringify(currentUser);
		sessionStorage.setItem("currentUser", json);
	}
}

//Function for Sign Out

function signOut() {
	sessionStorage.clear();
	document.getElementById("dashboard").style.display = "none";
	document.getElementById("signin-form").style.display = "block";
}


if (sessionStorage.getItem("currentUser") != null) {
	document.getElementById("dashboard").style.display = "block";
	document.getElementById("signin-form").style.display = "none";
	document.getElementById("signup-form").style.display = "none";
}
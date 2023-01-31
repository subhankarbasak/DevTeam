
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
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	let users = [];
	if(name.trim()=="" || email.trim()=="" || password.trim()=="") {
		alert("something is wrong");
	}
	else if(!email.match(mailformat)){
		alert('Invalid email');
	}
	else if(password.trim().length<8){
		alert('password is too short');
	}
	else{
	let user = { name: name, email: email, password: password };
	if (localStorage.getItem("users") == null) {
		users.push(user);
	} else {
		let userExist=0;
		users = JSON.parse(localStorage.getItem("users"));
		for (let i = 0; i < users.length; i++) {
			if (users[i].email == email) {
				alert("user already exist");
				userExist=1;
			}
		}
		if(userExist==0){
		users.push(user);
		}
	}
	let json = JSON.stringify(users);

	// sessionStorage.setItem("user",json);
	localStorage.setItem("users", json);
}
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
	let index;
	for (let i = 0; i < lsUser.length; i++) {
		if (lsUser[i].email == email && lsUser[i].password == password) {
			isValid = 1;
			index=i;
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
		showImage();
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
let url="";
let upload=document.getElementById('image-upload')
upload.addEventListener('change', () => {
    const fr = new FileReader();
    fr.readAsDataURL(upload.files[0]);
    fr.addEventListener('load', () => {
        url = fr.result;
    });
});

function imageSaver(){
	if(url==""){
		alert('image uploading error');
	}
	else{
		let images=[];
		let currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
		let email=currentUser.email;
		if(localStorage.getItem(email)!==null){
			images=JSON.parse(localStorage.getItem(email));
			images.push(url);
		}else{
			images.push(url);
		}
		localStorage.setItem(email,JSON.stringify(images));
		showImage();
	}
}

function showImage(){
	let html="";
	let currentUser=JSON.parse(sessionStorage.getItem('currentUser'));
	let email=currentUser.email;
	let images=JSON.parse(localStorage.getItem(email));
	for(let i=0;i<images.length;i++){
	html+=`<div class="col-lg-3">
	<div class="card w-100 h-100">
	  <div class="card-body text-center">
		<h5 class="card-title">Special title treatment</h5>
		<img src=${images[i]} alt="" class="image">
	  </div>
	</div>
  </div>`;
	}
	document.getElementById('all-images').innerHTML=html;
}
showImage();
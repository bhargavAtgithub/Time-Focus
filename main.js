//DOM elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//Show Time Function

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    //12 hr Format
    hour = hour % 12 || 12; 

    //Output 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`;

    setTimeout(showTime,1000);
}

function addZero(n){
    return(parseInt(n,10) < 10 ? '0' : '') + n;
}

//set Background
function setBg(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        //Morning
        document.body.style.backgroundImage = "url('images/morning.jpg')";
        greeting.textContent = "Good Morning";
    }else if(hour<18){
        //afternoon
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    }else{
        //evening
        document.body.style.backgroundImage = "url('images/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'White';
    }
}

//GetName
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent = "[Enter Name]";
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

//getFocus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = "[Enter Focus]";
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

//setName
function setName(e){
    if(e.type === 'keypress'){
        //Make sure Enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//setFocus
function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure Enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
//Run
showTime();
setBg();
getName();
getFocus();
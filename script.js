var btn = document.getElementById("mybutton");
                 // trial for own purpose var btn = document.querySelector("#mybutton");

btn.addEventListener('click', function(e){
    alert("goede middag");
                 //  trial for own purpose console.log( e. target);
                 //  trial for own purpose console.log(e);
});

var btn2 = document.getElementById('changeBckgnd');

btn2.addEventListener("click",function(e){
    //btn2.classList.add("red-background");
    btn2.classList.toggle("red-background");
});


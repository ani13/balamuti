
var current = document.getElementById("content");

function insert1() {

    current.style.display='none';
    document.getElementById("content1").style.display = 'block';
    current = document.getElementById("content1");
    
}

function insert2() {

    current.style.display='none';
    document.getElementById("content2").style.display = 'block';
    current = document.getElementById("content2");
    
}

function insert3() {

    current.style.display='none';
    document.getElementById("content3").style.display = 'block';
    current = document.getElementById("content3");
    
}

function insert4() {

    current.style.display='none';
    document.getElementById("content4").style.display = 'block';
    current = document.getElementById("content4");
    
}

function insert5() {

    current.style.display='none';
    document.getElementById("content5").style.display = 'block';
    current = document.getElementById("content5");
    
}



function insertHome() {
    current.style.display = 'none';
    document.getElementById("content").style.display='block';
    current = document.getElementById("content");
}

var item1 = document.getElementById("1");
item1.addEventListener('click', insert1);

var item2 = document.getElementById("2");
item2.addEventListener('click', insert2);

var item3 = document.getElementById("3");
item3.addEventListener('click', insert3);

var item4 = document.getElementById("4");
item4.addEventListener('click', insert4);

var item5 = document.getElementById("5");
item5.addEventListener('click', insert5);

var itemHome = document.getElementById("home");
itemHome.addEventListener('click', insertHome);



function insert11() {
    current.style.display = 'none';
    document.getElementById("essey1").style.display = 'block';
    current = document.getElementById("essey1");
}

var essey11 = document.getElementById("item1");
essey11.addEventListener('click', insert11);

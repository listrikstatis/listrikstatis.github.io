//SOAL 1
function cek(){
  let a1= document.getElementById("1aa").value;
  let b1= document.getElementById("1ab").value;
  let c1= document.getElementById("1ac").value;
  
  if (a1 == "9" && b1 == "30" && c1 == "270") {
    document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('p1')[0].style.display='block';
    document.getElementsByClassName('j1')[0].style.display='block';
    document.getElementsByClassName('coba')[0].style.display='none';
  } else {
     document.getElementById("1aa").style="border: 3px solid red";
     document.getElementById("1ab").style="border: 3px solid red";   
     document.getElementById("1ac").style="border: 3px solid red";    
  }

  if (a1 == "9") {
    document.getElementById("1aa").style="border: 3px solid green";
  } else {
     document.getElementById("1aa").style="border: 3px solid red";
  }

  if (b1 == "30") {
    document.getElementById("1ab").style="border: 3px solid green";
  } else {
     document.getElementById("1ab").style="border: 3px solid red";
  }

  if (c1 == "270") {
    document.getElementById("1ac").style="border: 3px solid green";
  } else {
     document.getElementById("1ac").style="border: 3px solid red";
  }

}

//SOAL 2
function cek2(){
  let a2= document.getElementById("2aa").value;
  let b2= document.getElementById("2ab").value;
  let c2= document.getElementById("2ac").value;
  
  if (a2 == "45" && b2 == "15" && c2 == "3") {
    document.getElementsByClassName('cek2')[0].style.display='none';
    document.getElementsByClassName('p')[0].style.display='block';
    document.getElementsByClassName('j2')[0].style.display='block';
    document.getElementsByClassName('table2')[0].style.display='none';
  } else {
     document.getElementById("2aa").style="border: 3px solid red";
     document.getElementById("2ab").style="border: 3px solid red";   
     document.getElementById("2ac").style="border: 3px solid red";    
  }

  if (a2 == "45") {
    document.getElementById("2aa").style="border: 3px solid green";
  } else {
     document.getElementById("2aa").style="border: 3px solid red";
  }

  if (b2 == "15") {
    document.getElementById("2ab").style="border: 3px solid green";
  } else {
     document.getElementById("2ab").style="border: 3px solid red";
  }

  if (c2 == "3") {
    document.getElementById("2ac").style="border: 3px solid green";
  } else {
     document.getElementById("2ac").style="border: 3px solid red";
  }

}

//SOAL 3
function cek3(){
  let a= document.getElementById("3aa").value;
  let b= document.getElementById("3ab").value;
  let c= document.getElementById("3ac").value;
  
  if (a == "100" && b == "10" && c == "10") {
    document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('j')[0].style.display='block';
    document.getElementsByClassName('j3')[0].style.display='block';
    document.getElementsByClassName('table1')[0].style.display='none';
  } else {
     document.getElementById("3aa").style="border: 3px solid red";
     document.getElementById("3ab").style="border: 3px solid red";   
     document.getElementById("3ac").style="border: 3px solid red";    
  }

  if (a == "100") {
    document.getElementById("3aa").style="border: 3px solid green";
  } else {
     document.getElementById("3aa").style="border: 3px solid red";
  }

  if (b == "10") {
    document.getElementById("3ab").style="border: 3px solid green";
  } else {
     document.getElementById("3ab").style="border: 3px solid red";
  }

  if (c == "10") {
    document.getElementById("3ac").style="border: 3px solid green";
  } else {
     document.getElementById("3ac").style="border: 3px solid red";
  }

}

//Input Soal 1
$('input[id="1aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="1ab"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="1ac"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 2
$('input[id="2aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="2ab"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="2ac"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

//Input Soal 3
$('input[id="3aa"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="3ab"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});

$('input[id="3ac"]').keyup(function(e)
                                {
  if (/^[a-zA-Z]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z]+$/, '');
  }
});
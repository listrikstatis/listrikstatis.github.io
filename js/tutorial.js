//input nilai ke variabel localstorage
localStorage.setItem("nkuis1",70);
localStorage.setItem("nkuis2",70);
localStorage.setItem("nkuis3",70);
localStorage.setItem("nkuis4",70);
localStorage.setItem("nkuis5",70);

//input nilai ke variabel localstorage
// localStorage.setItem("nkuis1",0);
// localStorage.setItem("nkuis2",0);
// localStorage.setItem("nkuis3",0);
// localStorage.setItem("nkuis4",0);
// localStorage.setItem("nkuis5",0);

//hapus variabel dari localstorage
// localStorage.removeItem("nkuis1");
// localStorage.removeItem("nkuis2");
// localStorage.removeItem("nkuis3");
// localStorage.removeItem("nkuis4");
// localStorage.removeItem("nkuis5");

//hapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function materi2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 75;
    if (skor>=70){
      window.location.href='../Materi2/hukum_coulomb.html#hukumcoulomb';
    } else{
      alert('Maaf, Kamu belum bisa membuka materi ini!');
    }
}
function kuis2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 70;
    if (skor>=70){
      window.location.href='../Materi2/latihan2.html#hukumcoulomb';
    } else{
      alert('Maaf, Kamu belum bisa membuka kuis ini!');
    }
}

/*subbab 3*/
function materi3(){
  var skor = localStorage.getItem("nkuis2");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi3/medanlistrik.html#medanlistrik';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}

function kuis3(){
  var skor = localStorage.getItem("nkuis2");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi3/latihan3.html#medanlistrik';
  } else{
    alert('Maaf, Kamu belum bisa membuka kuis ini!');
  }
}

/*subbab 4*/
function materi4(){
  var skor = localStorage.getItem("nkuis3");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi4/bedapotensial.html#bedapotensial';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}
function kuis4(){
  var skor = localStorage.getItem("nkuis3");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi4/latihan4.html#bedapotensial';
  } else{
    alert('Maaf, Kamu belum bisa membuka kuis ini!');
  }
}

/*subbab 5*/
function materi5(){
  var skor = localStorage.getItem("nkuis4");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi5/penerapan.html#penerapan';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}
function kuis5(){
  var skor = localStorage.getItem("nkuis4");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../Materi5/latihan5.html#penerapan';
  } else{
    alert('Maaf, Kamu belum bisa membuka kuis ini!');
  }
}

/*evaluasi*/
function evaluasi(){
  var skor = localStorage.getItem("nkuis5");
  // var skor = 70;
  if (skor>=70){
    window.location.href='../evaluasi/evaluasi.html';
  } else{
    alert('Maaf, Kamu belum bisa membuka Evaluasi ini!');
  }
}
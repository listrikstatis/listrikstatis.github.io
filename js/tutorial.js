//untuk memasukkan nilai ke variabel localstorage
// localStorage.setItem("skkuis1",80);
// localStorage.setItem("skkuis2",80);
// localStorage.setItem("skkuis3",80);
// localStorage.setItem("skkuis4",80);
// localStorage.setItem("skkuis5",80);

//untuk memasukkan nilai ke variabel localstorage
// localStorage.setItem("skkuis1",0);
// localStorage.setItem("skkuis2",0);
// localStorage.setItem("skkuis3",0);
// localStorage.setItem("skkuis4",0);
// localStorage.setItem("skkuis5",0);

//untuk menghapus variabel dari localstorage
// localStorage.removeItem("skkuis1");
// localStorage.removeItem("skkuis2");
// localStorage.removeItem("skkuis3");
// localStorage.removeItem("skkuis4");
// localStorage.removeItem("skkuis5");

//untuk menghapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function materi2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 75;
    if (skor>=75){
      window.location.href='../../Materi2/hukum_coulomb.html';
    } else{
      alert('Maaf, Anda belum bisa membuka materi ini!');
    }
}
function kuis2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 75;
    if (skor>=75){
      window.location.href='../../Materi2/latihan2.html';
    } else{
      alert('Maaf, Anda belum bisa membuka kuis ini!');
    }
}

/*subbab 3*/
function materi3(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi3/medanlistrik.html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}

function kuis3(){
  var skor = localStorage.getItem("nkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi3/latihan3.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*subbab 4*/
function materi4(){
  var skor = localStorage.getItem("nkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi4/bedapotensial.html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function kuis4(){
  var skor = localStorage.getItem("nkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi4/latihan4.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*subbab 5*/
function materi5(){
  var skor = localStorage.getItem("nkuis4");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi5/penerapan.html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function kuis5(){
  var skor = localStorage.getItem("nkuis4");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../Materi5/latihan5.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*evaluasi*/
function evaluasi(){
  var skor = localStorage.getItem("nkuis5");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../evaluasi/evaluasi.html';
  } else{
    alert('Maaf, Anda belum bisa membuka latihan ini!');
  }
}
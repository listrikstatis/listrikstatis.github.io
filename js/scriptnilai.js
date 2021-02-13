// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyAZDp9rrxItslIYMXyU2_7Y-eCr1sM63Qo",
    authDomain: "listrikstatis-b91fe.firebaseapp.com",
    projectId: "listrikstatis-b91fe",
    storageBucket: "listrikstatis-b91fe.appspot.com",
    messagingSenderId: "261164154927",
    appId: "1:261164154927:web:a273f977e8f6ef428246da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.load = function () {


}

function readlah() {
    var task = firebase.database().ref("evaluasi/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "IX A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IX B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IX C";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 2 Banjarmasin";
    } else if (sekolah.value == "2") {
        sekolahfix = "SMP Negeri 9 Banjarmasin";
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else if (sekolahfix != '') {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                        </tr>`;
            }
        });

    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}



// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})

// const highScoresList = document.getElementById("highScoresList");
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// highScoresList.innerHTML = highScores
//   .map(score => {
//     return `<table class="high-score">
//   <tr>
//     <th>Nama</th>
//     <th>Sekolah</th>
//     <th>Kelas</th>
//     <th>Nilai</th> 
//   </tr>
//   <tr>
//     <td>${score.name}</td>
//     <td>${score.sekolah}</td>
//     <td>${score.kelas}</td>
//     <td>${score.score}</td>
//   </tr>
// </table>`;
//   })
//   .join("");

//   function btnh() {
//     localStorage.removeItem("highScores");
//     location.reload();
//     }
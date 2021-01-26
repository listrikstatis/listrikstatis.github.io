const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<table class="high-score">
  <tr>
    <th>Nama</th>
    <th>Sekolah</th>
    <th>Kelas</th>
    <th>Nilai</th> 
  </tr>
  <tr>
    <td>${score.name}</td>
    <td>${score.sekolah}</td>
    <td>${score.kelas}</td>
    <td>${score.score}</td>
  </tr>
</table>`;
  })
  .join("");

  function btnh() {
    localStorage.removeItem("highScores");
    location.reload();
    }
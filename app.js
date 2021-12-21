// Тоглогчийн ээлжийг хадагалах хувьсагч, нэгдүгээр тоглогчийг 0 ь хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Программ эхлэлэд бэлтгэе
//<div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  //Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  //   alert("ШооГ шидлээ : " + diceNumber);

  //Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог өөрчилнө.
  if (diceNumber !== 1) {
    // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
    // roundScore = 0;
    // document.getElementById("current-" + activePlayer).textContent = 0;
    // // Тоглогчийн ээлжиндээ нөгөө тоглогч руу шилжүүлнэ.
    // // Хэрэв идэхвтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
    // // Үгүй бол идэвхтэй тоглогчийг 0 болго.
    // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // // if (activePlayer === 0) {
    // //   activePlayer = 1;
    // // } else {
    // //   activePlayer = 0;
    // // }
    // //  Улаан цэгийг шилжүүлэх код
    // document.querySelector(".player-0-panel").classList.toggle("active");
    // document.querySelector(".player-1-panel").classList.toggle("active");
    // // Шоог түр алга болгоно
    // diceDom.style.display = "none";
    switchToNextPlayer();
  }
});
// холд товчний эвент листенэр
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нэмж өгнө.
  //var scores = [20, 0];
  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //   Дэлгэц дээр оноог өөрчлөнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //   Уг тоглогч хожсон эсэхийг шалгах
  if (scores[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove(".active");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add(".winner");
  } else {
    switchToNextPlayer();
  }
  //   Ээлжийн оноог 0 болгоно.
});
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Тоглогчийн ээлжиндээ нөгөө тоглогч руу шилжүүлнэ.
  // Хэрэв идэхвтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
  // Үгүй бол идэвхтэй тоглогчийг 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //  Улаан цэгийг шилжүүлэх код
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгоно
  diceDom.style.display = "none";
}
// Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", function () {
  alert("clicked");
});

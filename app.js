// Тоглоомын бүх газар ашиглагдах хувьсагчийн зарлана.
// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;
// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхтэй тоглогчийн цуглуулсан оноонууд
var roundScore;
// Шооны зургийг үзүүлэх элементийг DOM-оос олоод энд хадгалъя
var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүл
initGame();
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
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
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
//NEW GAME товч дарахад Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
  // Тоглогчийн ээлжийг хадагалах хувьсагч, нэгдүгээр тоглогчийг 0 ь хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Программ эхлэлэд бэлтгэе
  //<div class="player-score" id="score-0">43</div>
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //  Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

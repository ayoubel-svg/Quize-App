const startBtn = document.querySelector(".startBtn");
const start = document.querySelector(".start");
const container = document.querySelector(".container");
const next = document.querySelector(".next");
const containerH2 = document.querySelector(".container h2");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const scoreJs = document.querySelector(".scoreJs");
const myScore = document.querySelector(".score");
const rest = document.querySelector(".rest");
let count = 0;
let btnStatus = false;
let score = 0;
let me;
let arrQuestion = [
  "What Is The Biggeste Conetinent",
  "What is The Moste Painful Sting In The Insect Kingdom ",
  "What Is the Tallesete Mountine in The World ",
  "What is The Capital Of Peru",
  "what is the biggest country in the world",
  "what is the biggest sea animal in the world",
  "what is the smallest country in the world",
];
let questionListe = [
  ["Africa", "Asia", "Australia", "North America"],
  ["Bullet Ant", "Fire Ant", "Paper Wasp", "Yellow Jacket"],
  ["Annapurna", "Kangchenjunga", "Makalu", "Everest"],
  ["Rabat", "Lima", "Cairo", "Canberra"],
  ["Usa", "Canada", "Russia", "Brazil"],
  ["White Shark", "Blue Whale", "Orca", "Dolphin"],
  ["Spain", "Morocco", "Vatican City", "Singapore"],
];

startBtn.addEventListener("click", () => {
  container.style.visibility = "visible";
  start.style.visibility = "hidden";
});

next.addEventListener("click", () => {
  for (i = 0; i < arrQuestion.length; i++) {
    count++;
    if (count > arrQuestion.length) {
      count = 7;
    }
    if (count == 7) {
      myScore.style.visibility = "visible";
      container.style.visibility = "hidden";
      scoreJs.innerHTML = score;
    }
    containerH2.innerHTML = arrQuestion[count];
    if (containerH2.innerHTML == arrQuestion[0]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[0].length; j++) {
          let ab = questionListe[0];
          p1.innerHTML = ab[0];
          p2.innerHTML = ab[1];
          p3.innerHTML = ab[2];
          p4.innerHTML = ab[3];
        }
      }
    } else if (containerH2.innerHTML == arrQuestion[1]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[1].length; j++) {
          let ay = questionListe[1];
          p1.innerHTML = ay[0];
          p2.innerHTML = ay[1];
          p3.innerHTML = ay[2];
          p4.innerHTML = ay[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "green";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
        score++;
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "red";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    } else if (containerH2.innerHTML == arrQuestion[2]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[2].length; j++) {
          let ac = questionListe[2];
          p1.innerHTML = ac[0];
          p2.innerHTML = ac[1];
          p3.innerHTML = ac[2];
          p4.innerHTML = ac[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "red";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "green";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    } else if (containerH2.innerHTML == arrQuestion[3]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[3].length; j++) {
          let ad = questionListe[3];
          p1.innerHTML = ad[0];
          p2.innerHTML = ad[1];
          p3.innerHTML = ad[2];
          p4.innerHTML = ad[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "green";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
        score++;
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    } else if (containerH2.innerHTML == arrQuestion[4]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[4].length; j++) {
          let ae = questionListe[4];
          p1.innerHTML = ae[0];
          p2.innerHTML = ae[1];
          p3.innerHTML = ae[2];
          p4.innerHTML = ae[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "red";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "green";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
        score++;
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    } else if (containerH2.innerHTML == arrQuestion[5]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[5].length; j++) {
          let af = questionListe[5];
          p1.innerHTML = af[0];
          p2.innerHTML = af[1];
          p3.innerHTML = af[2];
          p4.innerHTML = af[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "green";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
        score++;
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    } else if (containerH2.innerHTML == arrQuestion[6]) {
      for (i = 0; i < questionListe.length; i++) {
        for (j = 0; j < questionListe[6].length; j++) {
          let af = questionListe[6];
          p1.innerHTML = af[0];
          p2.innerHTML = af[1];
          p3.innerHTML = af[2];
          p4.innerHTML = af[3];
        }
      }
      btn1.addEventListener("click", () => {
        btn1.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn2.addEventListener("click", () => {
        btn2.style.background = "red";
        btn1.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
      });
      btn3.addEventListener("click", () => {
        btn3.style.background = "green";
        btn2.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
        btn4.style.pointerEvents = "none";
        score++;
      });
      btn4.addEventListener("click", () => {
        btn4.style.background = "red";
        btn2.style.pointerEvents = "none";
        btn3.style.pointerEvents = "none";
        btn1.style.pointerEvents = "none";
      });
      next.addEventListener("click", () => {
        btn1.style.background = "none";
        btn2.style.background = "none";
        btn3.style.background = "none";
        btn4.style.background = "none";
      });
    }
  }
});

function checkWin() {
  btn1.addEventListener("click", () => {
    btn1.style.background = "green";
    btn2.style.pointerEvents = "none";
    btn3.style.pointerEvents = "none";
    btn4.style.pointerEvents = "none";
    score++;
  });
  btn2.addEventListener("click", () => {
    btn2.style.background = "red";
    btn1.style.pointerEvents = "none";
    btn3.style.pointerEvents = "none";
    btn4.style.pointerEvents = "none";
  });
  btn3.addEventListener("click", () => {
    btn3.style.background = "red";
    btn2.style.pointerEvents = "none";
    btn1.style.pointerEvents = "none";
    btn4.style.pointerEvents = "none";
  });
  btn4.addEventListener("click", () => {
    btn4.style.background = "red";
    btn2.style.pointerEvents = "none";
    btn3.style.pointerEvents = "none";
    btn1.style.pointerEvents = "none";
  });
  next.addEventListener("click", () => {
    btn1.style.background = "none";
    btn1.style.pointerEvents = "all";
    btn2.style.pointerEvents = "all";
    btn3.style.pointerEvents = "all";
    btn4.style.pointerEvents = "all";
  });
}
checkWin();
rest.addEventListener("click", () => {
  location.reload();
});

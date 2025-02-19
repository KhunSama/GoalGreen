const translations = {
  en: {
    home: "Home",
    minigames: "Minigames",
    aboutUs: "About us",
    name1: "Minigames",
    name2: "Minigames",
    name3: "Minigames",
    text1: "Recycling Drop",
    text2: "Sort Belt",
    text3: "Trash Collector Road Conqueror",
    desc1_1: "How to Play : The player controls a trash bin and collects recyclable trash.",
    desc1_2: "Controls : Arrow keys ⬅ ⮕ ⬆ ⬇ ",
    desc1_3: "Game Components : Recyclable bin, Banana, Cardboard box, plastic bottle, fishbone, Light bulb, Battery, Chips Bag, Cloth.",
    desc1_4: "Rules : There is a time limit of 1 minute, and points will be counted. Each recyclable item placed in the bin earns 1 point.",
    desc2_1: "How to Play : Players should observe the trash moving along the conveyor belt and separate it by dragging it into the correct trash bin.",
    desc2_2: "Controls : use the mouse to drag the trash into the bin.",
    desc2_3: "Game Components : Trash to be sorted (boxes, cups, masks, fish bones) ; trash bins (recycling bin, infectious waste bin, general waste bin, compost bin).",
    desc2_4: "Rules : There is a time limit of 1 minute 30 seconds. Points will be counted when trash is placed in the correct bin 10 points for correct placement. However, if the trash is 	placed in the wrong bin or falls off the conveyor belt, the score will be reduced by 5 points.",
    desc3_1: "How to Play : The player controls a trash collector vehicle to collect trash that floats on the road and avoid obstacles.",
    desc3_2: "Controls : Use the arrow keys ⬅ ⮕",
    desc3_3: "Game Components : Trash(light bulbs, snack bags, cardboard boxes, fish bones) , obstacles, and trash collection vehicle.",
    desc3_4: "Rules : No time limit. The goal is to collect as much trash as possible and achieve the highest score.",
    play1: "Play",
    play2: "Play",
    play3: "Play",
  },
  th: {
    home: "หน้าแรก",
    minigames: "มินิเกมส์",
    aboutUs: "เกี่ยวกับเรา",
    name1: "มินิเกมส์",
    name2: "มินิเกมส์",
    name3: "มินิเกมส์",
    text1: "ขยะตกจากฟ้า",
    text2: "สายพานคัดแยก",
    text3: "รถเก็บขยะพิชิตถนน",
    desc1_1: "วิธีการเล่น : ให้ผู้เล่นควบคุมถังขยะ แล้วเก็บขยะที่สามารถรีไซเคิลได้",
    desc1_2: "การควบคุม : ปุ่ม ⬅ ⮕ ⬆ ⬇",
    desc1_3: "ส่วนประกอบของเกม : ถังขยะรีไซเคิล, กล้วย, กล่องกระดาษ, ขวดพลาสติก, ก้างปลา, หลอดไฟ, ถ่านแบตเตอรี่, ถุงขนม, เสื้อผ้า",
    desc1_4: "เงื่อนไขการเล่น : มีเวลาจำกัดให้ 1 นาที และ จะมีการนับคะแนน ถ้าขยะที่รีไซเคิลได้ลงถังจะได้ 1 คะแนน",
    desc2_1: "วิธีการเล่น : ให้ผู้เล่นสังเกตขยะที่เลื่อนออกมาจากสายพาน แล้วแยกขยะโดยการลาก ให้ลงถังขยะที่ถูกประเภท",
    desc2_2: "การควบคุม : ใช้เมาส์ลากขยะลงถัง",
    desc2_3: "ส่วนประกอบของเกม : ขยะที่ต้องแยก(กล่อง แก้วน้ำ หน้ากากอนามัยที่ใช้แล้ว ก้างปลา) , ถังขยะ(ถังขยะรีไซเคิล ถังขยะติดเชื้อ ถังขยะทั่วไป ถังย่อยสลาย)",
    desc2_4: "เงื่อนไขการเล่น : มีเวลาจำกัดให้ 1 นาที 30 วินาที และ จะมีการนับคะแนน จะได้คะแนนเมื่อใส่ขยะลงถังถูกประเภท จะได้ 10 คะแนน แต่ถ้าใส่ขยะผิดถังหรือขยะเลื่อนออกไปจากสายพาน คะแนนจะลด 5 คะแนน",
    desc3_1: "วิธีการเล่น : ให้ผู้เล่นควบคุมรถเก็บขยะ แล้วให้เก็บขยะที่ลอยมาบนถนน และให้หลบสิ่งกีดขวาง",
    desc3_2: "การควบคุม : ปุ่ม ⬅ ⮕",
    desc3_3: "ส่วนประกอบของเกม : ขยะ(หลอดไฟ ถุงขนม กล่องกระดาษ ก้างปลา) สิ่งกีดขวาง และ รถเก็บขยะ",
    desc3_4: "เงื่อนไขการเล่น : ไม่มีเวลาจำกัด เน้นเก็บคะแนน แล้วทำคะแนนให้ได้เยอะที่สุด",
    play1: "เล่น",
    play2: "เล่น",
    play3: "เล่น",
  }
};

function setLanguage(lang) {
  document.querySelector('.navbar a[href="./index.html"]').innerText = translations[lang].home;
  document.querySelector('.navbar a[href="./page2.html"]').innerText = translations[lang].minigames;
  document.querySelector('.navbar a[href="./page3.html"]:last-of-type').innerText = translations[lang].aboutUs;
  document.querySelector('#name1').textContent = translations[lang].name1;
  document.querySelector('#name2').textContent = translations[lang].name2;
  document.querySelector('#name3').textContent = translations[lang].name3;
  document.querySelector('#text1').textContent = translations[lang].text1;
  document.querySelector('#text2').textContent = translations[lang].text2;
  document.querySelector('#text3').textContent = translations[lang].text3;
  document.querySelector('#desc1_1').textContent = translations[lang].desc1_1;
  document.querySelector('#desc1_2').textContent = translations[lang].desc1_2;
  document.querySelector('#desc1_3').textContent = translations[lang].desc1_3;
  document.querySelector('#desc1_4').textContent = translations[lang].desc1_4;
  document.querySelector('#desc2_1').textContent = translations[lang].desc2_1;
  document.querySelector('#desc2_2').textContent = translations[lang].desc2_2;
  document.querySelector('#desc2_3').textContent = translations[lang].desc2_3;
  document.querySelector('#desc2_4').textContent = translations[lang].desc2_4;
  document.querySelector('#desc3_1').textContent = translations[lang].desc3_1;
  document.querySelector('#desc3_2').textContent = translations[lang].desc3_2;
  document.querySelector('#desc3_3').textContent = translations[lang].desc3_3;
  document.querySelector('#desc3_4').textContent = translations[lang].desc3_4;
  document.querySelector('#play1').textContent = translations[lang].play1;
  document.querySelector('#play2').textContent = translations[lang].play2;
  document.querySelector('#play3').textContent = translations[lang].play3;
    
  localStorage.setItem('selectedLanguage', lang);
}
  
function toggleDropdown() {
  document.getElementById("language-menu").classList.toggle("show");
}
  
window.onload = function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  setLanguage(savedLang);
};
  
window.onclick = function(event) {
  if (!event.target.matches('.langbutton img')) {
    var dropdowns = document.getElementsByClassName("language-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
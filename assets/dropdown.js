const translations = {
  en: {
    welcomeMessage: "Welcome!",
    home: "Home",
    minigames: "Minigames",
    aboutUs: "About us",
    text1: "Waste Separation",
    text2: "Waste separation is the process of grouping and categorizing waste into different categories based on its characteristics or type, with the goal of improving waste management and recycling efficiency.",
    text3: "Types of Waste Separation:",
    text4: "1. Organic Waste",
    text5: "Waste that can naturally decompose, such as food scraps and leaves.",
    text6: "2. Recyclable Waste",
    text7: "Materials that can be reused, such as paper, glass, metal, and plastic.",
    text8: "3. Hazardous Waste",
    text9: "Toxic or harmful waste, like batteries and light bulbs.",
    text10: "4. General Waste",
    text11: "Waste that cannot be recycled or decomposed, such as certain types of plastics, packaging, or disposable waste.",
    text12: "Recycling",
    text13: "The process of taking waste or used materials and putting them through reprocessing or quality improvement so that the waste regains a quality equal to or near its original state, or turns into new raw materials or new products.",
    text14: "The process involves 4 steps:",
    text15: "1. Collection",
    text16: "2. Sorting of different types of materials",
    text17: "3. Production or improvement",
    text18: "4. Utilizing the materials in the production or improvement process, where different types of materials have different methods of production.",

  },
  th: {
    welcomeMessage: "ยินดีต้อนรับ!",
    home: "หน้าแรก",
    minigames: "มินิเกมส์",
    aboutUs: "เกี่ยวกับเรา",
    text1: "การแยกขยะ",
    text2: "กระบวนการที่เราจัดกลุ่มและแยกประเภทของขยะออกเป็นหมวดหมู่ต่างๆ ตามลักษณะหรือประเภทนั้น มีเป้าหมายเพื่อการจัดการและการรีไซเคิลที่มีประสิทธิภาพมากขึ้น",
    text3: "ประเภทของการแยกขยะ",
    text4: "1. ขยะอินทรีย์",
    text5: "ขยะที่สามารถย่อยสลายได้ตามธรรมชาติ เช่น เศษอาหาร ใบไม้",
    text6: "2. ขยะรีไซเคิล",
    text7: "วัสดุที่สามารถนำกลับมาใช้ใหม่ได้ เช่น กระดาษ แก้ว โลหะ และพลาสติก",
    text8: "3. ขยะอันตราย",
    text9: "ขยะที่เป็นพิษหรือเป็นอันตรายต่อสุขภาพ เช่น แบตเตอรี่ หลอดไฟ ถ่านไฟฉาย",
    text10: "4. ขยะทั่วไป",
    text11: "ขยะที่ไม่สามารถรีไซเคิลหรือย่อยสลายได้ เช่น พลาสติกบางชนิด ห่อบรรจุภัณฑ์ หรือขยะที่ใช้แล้วทิ้ง",
    text12: "การรีไซเคิล",
    text13: "การนำของเสียหรือวัสดุที่ใช้แล้วมาผ่านกระบวนการแปรรูปหรือปรับปรุงคุณภาพ เพื่อให้ของเสียกลับมามีคุณภาพเทียบเท่าหรือใกล้เคียงของเดิม หรือให้ได้วัตถุดิบใหม่ หรือผลิตภัณฑ์ใหม่",
    text14: "กระบวนการอยู่ 4 ขั้นตอน ได้แก่",
    text15: "1. การเก็บรวบรวม",
    text16: "2. การแยกประเภทวัสดุแต่ละชนิดออกจากกัน",
    text17: "3. การผลิตหรือปรับปรุง",
    text18: "4. การนำมาใช้ประโยชน์ในขั้นตอนการผลิตหรือปรับปรุงนั้น วัสดุที่แตกต่างชนิดกันจะมีกรรมวิธีในการผลิตแตกต่างกัน",

  }
};

function setLanguage(lang) {
  document.querySelector('.centered-container p').innerText = translations[lang].welcomeMessage;
  document.querySelector('.navbar a[href="index.html"]').innerText = translations[lang].home;
  document.querySelector('.navbar a[href="page2.html"]').innerText = translations[lang].minigames;
  document.querySelector('.navbar a[href="page3.html"]:last-of-type').innerText = translations[lang].aboutUs;
  document.querySelector('#text1').textContent = translations[lang].text1;
  document.querySelector('#text2').textContent = translations[lang].text2;
  document.querySelector('#text3').textContent = translations[lang].text3;
  document.querySelector('#text4').textContent = translations[lang].text4;
  document.querySelector('#text5').textContent = translations[lang].text5;
  document.querySelector('#text6').textContent = translations[lang].text6;
  document.querySelector('#text7').textContent = translations[lang].text7;
  document.querySelector('#text8').textContent = translations[lang].text8;
  document.querySelector('#text9').textContent = translations[lang].text9;
  document.querySelector('#text10').textContent = translations[lang].text10;
  document.querySelector('#text11').textContent = translations[lang].text11;
  document.querySelector('#text12').textContent = translations[lang].text12;
  document.querySelector('#text13').textContent = translations[lang].text13;
  document.querySelector('#text14').textContent = translations[lang].text14;
  document.querySelector('#text15').textContent = translations[lang].text15;
  document.querySelector('#text16').textContent = translations[lang].text16;
  document.querySelector('#text17').textContent = translations[lang].text17;
  document.querySelector('#text18').textContent = translations[lang].text18
  
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
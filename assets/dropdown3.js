const translations = {
  en: {
    home: "Home",
    minigames: "Minigames",
    aboutUs: "About us",
    name1: "Chatchapol Singhachan",
    name1_2: "Lead Developer",
    name2: "Benjamin Chukwuka Tagbo",
    name2_2: "Developer",
    name3: "ㅤㅤㅤSuttaweeㅤㅤㅤ Noikorn",
    name3_2: "Document Manager",
    text3_1: "About Us",
    text3_2: "We are a team dedicated to raising awareness and understanding of proper waste separation through innovative and engaging educational tools. We believe that effective waste management starts with accurate knowledge. Therefore, we have created a website and mini-games to help users of all ages learn how to separate waste efficiently while enjoying the process.",
    text3_3: "“There is no such thing as ‘away’. When we throw anything away, it must go somewhere.”",
    text3_4: "- Annie Leonard, Author of The Story of Stuff",

  },
  th: {
    home: "หน้าแรก",
    minigames: "มินิเกมส์",
    aboutUs: "เกี่ยวกับเรา",
    name1: "ชัชพล สิงหชาญ",
    name1_2: "นักพัฒนาหลักของเว็บไซต์",
    name2: "เบนจามิน ชุควูกา แทกโบ",
    name2_2: "นักพัฒนารอง",
    name3: "ศุทธวีร์ น้อยกรณ์",
    name3_2: "ผู้จัดทำเอกสาร",
    text3_1: "เกี่ยวกับเรา",
    text3_2: "เราคือทีมที่มุ่งมั่นสร้างความตระหนักและความเข้าใจเกี่ยวกับการแยกขยะอย่างถูกต้อง โดยผ่านสื่อการเรียนรู้แบบใหม่ที่เข้าใจง่ายและสนุกสนาน เราเชื่อว่าการจัดการขยะที่เหมาะสมเริ่มต้นจากความรู้ที่ถูกต้อง ดังนั้นเราจึงสร้างเว็บไซต์และมินิเกมส์เพื่อให้ผู้ใช้งานทุกเพศทุกวัยสามารถเรียนรู้วิธีแยกขยะได้อย่างมีประสิทธิภาพและเพลิดเพลินไปพร้อมกัน",
    text3_3: "“ไม่มีสิ่งใดที่เรียกว่า 'ทิ้งไป' เพราะเมื่อเราทิ้งอะไรไป มันต้องไปอยู่ที่ไหนสักแห่ง”",
    text3_4: "แอนนี่ ลีโอนาร์ด, ผู้แต่งหนังสือ The Story of Stuff",
    
  }
};
  
function setLanguage(lang) {
  document.querySelector('.navbar a[href="./index.html"]').innerText = translations[lang].home;
  document.querySelector('.navbar a[href="./page2.html"]').innerText = translations[lang].minigames;
  document.querySelector('.navbar a[href="./page3.html"]:last-of-type').innerText = translations[lang].aboutUs;
  document.getElementById("text3_1").innerText = translations[lang].text3_1;
  document.getElementById("text3_2").innerText = translations[lang].text3_2;
  document.getElementById("name1").innerText = translations[lang].name1;
  document.getElementById("name2").innerText = translations[lang].name2;
  document.getElementById("name3").innerText = translations[lang].name3;
  document.getElementById("name1_2").innerText = translations[lang].name1_2;
  document.getElementById("name2_2").innerText = translations[lang].name2_2;
  document.getElementById("name3_2").innerText = translations[lang].name3_2;
  document.getElementById("text3_3").innerText = translations[lang].text3_3;
  document.getElementById("text3_4").innerText = translations[lang].text3_4;
    
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
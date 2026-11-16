const letter = {
  title: "Dear Ma’am Roan,",
  paragraphs: [
    "Sabi nila, pagtungtong ko sa college, puro terror, masama ang ugali, nambabagsak, at marami pang iba ang mararanasan ko.But in my case, ma’am, I’ve already proven them wrong. Yes, meron po talagang gano’n, pero you and Sir Alex are living proof that not all teachers are like that. Sa totoo nga lang po, kayo pa mismo yung nagpu-push sa mga students niyo na mag-aral nang mabuti para pumasa."

    , "I’ve heard countless stories and experiences from other students about you, ma’am. Syempre, I have mine, too HAHAHAHAHA. Pero my story is slightly different from theirs. During our first day, I already anticipated that you’d also be like Mamu Arvee HAHHAHAHA sorry po😭. Pero as we met once a week, the more I realized na you have a heart for teaching your students, yung tipong kahit paulit-ulit yung lesson, hindi po kayo magsasawang turuan yung mga students ninyo. And also, to Sir Alex, thank you so much din po kasi kahit hindi niyo na po kami students, nagpo-provide pa rin po kayo ng materials para sa amin. Hindi po kami papasa without your help, Sir!"

    , "Thank you so much po for this wonderful semester with you, Ma’am Roan! You’ve guided us in every possible way you could and helped us with every problem we encountered. Thank you for making me realize that making/designing websites is quite fun and satisfying. Even though my greatest weakness is my creativity, you squeezed every last drop of my creative juices and made me enjoy Web Systems Technologies. I hope that someday, once I become a successful IT professional, makapag-coffee date din po tayo with Sir Alex, just like Ate Ja! HAHAHAHAHA. Pero kidding aside, sana makabalik po ako sa CICT para makapagturo rin po, just like you, Sir Alex, and Mamu Arvee. You’re all an inspiration to me."

    , "Thank you so much po, Ma'am Roan!"

    , "Sincerely,"
  ],
  closing: "Ambri",
 
};

const heartBtn = document.getElementById("heartBtn");
const heartImg = document.getElementById("heartImg");

heartImg.addEventListener("error", () => {
  heartImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90">' +
    '<path fill="#e63946" d="M50 88 8 46C-4 33 2 10 22 6c12-2 22 4 28 14 6-10 16-16 28-14 20 4 26 27 14 40z"/></svg>'
  );
}, { once: true });

function openLetter() {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const paper = document.createElement("div");
  paper.className = "paper";

  const h2 = document.createElement("h2");
  h2.textContent = letter.title;
  paper.appendChild(h2);

  letter.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    paper.appendChild(p);
  });

  const closing = document.createElement("p");
  closing.textContent = letter.closing;
  paper.appendChild(closing);

  const close = document.createElement("button");
  close.textContent = "Close";
  close.addEventListener("click", () => overlay.remove());
  paper.appendChild(close);

  overlay.appendChild(paper);
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

heartBtn.addEventListener("click", openLetter);
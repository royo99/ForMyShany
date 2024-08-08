const happy = [
  "אני כל כך גאה בך!",
  "החיוך שלך מאיר לי את היום.",
  "אין כמוך כשאת מאושרת.",
  "אני אוהב לראות אותך כל כך שמחה.",
  "העולם נהיה יפה יותר כשאת מחייכת.",
  "השמחה שלך מדבקת, תודה שאת פה.",
  "את מאירה את הסביבה שלך באור חיובי.",
  "כל רגע שאת שמחה הוא רגע של אושר גם לי.",
  "מטורף עלייך שניצק",
  "כל דבר שאת עושה הופך למיוחד כשאת שמחה.",
  "אין אין על השניצקול",
  "תודה עלייך בובה"
];

const sad = [
  "אני כאן בשבילך, תמיד.",
  "כל דבר יסתדר בסוף, אני מבטיח.",
  "אני מבין אותך, ופה כדי לעזור.",
  "אל תדאגי, אנחנו נעבור את זה יחד.",
  "תני לעצמך זמן, זה בסדר להרגיש ככה.",
  "הכל יהיה בסדר, את לא לבד.",
  "אני תמיד פה כדי להקשיב לך.",
  "תזכרי שכל יום הוא הזדמנות חדשה.",
  "גם כשחשוך, אני אמצא את הדרך להאיר לך.",
  "הכאב יעבור, ואנחנו נמשיך קדימה."
];

const dontKnow = [
  "אני מאמין בך וביכולות שלך.",
  "נעבור את זה ביחד, צעד אחר צעד.",
  "קחי נשימה עמוקה, הכל יסתדר.",
  "אפשר להתלבט, זה חלק מהתהליך.",
  "תסמכי על עצמך, את יודעת מה נכון.",
  "אני פה לעזור לך לחשוב על הפתרון.",
  "גם אם את לא בטוחה, את תמצאי את הדרך.",
  "כל שאלה שלך חשובה, ואת תמצאי תשובה.",
  "תזכרי שכל החלטה היא צעד קדימה.",
  "אני כאן כדי לתמוך בך בכל מה שתבחרי."
];

const powerless = [
  "אל תשכחי כמה את חזקה.",
  "את מסוגלת להתמודד עם הכל.",
  "גם כשקשה, את תמיד מוצאת את הכוח.",
  "אני פה לעזור לך, תמיד.",
  "נחים כשצריך, ממשיכים כשאפשר.",
  "תני לעצמך להיות חלשה, זה חלק מהכוח.",
  "את לא לבד במאבק הזה.",
  "כל מכשול שאת עוברת מחזק אותך.",
  "אני מאמין בכוחות שלך, גם כשאת לא.",
  "הזמן שלך להצליח יגיע, אני בטוח בזה.",
  "קטן עלייך שניצק"
];

function pullNoteFromJar(noteArray, colorClass) {
  const randomIndex = Math.floor(Math.random() * noteArray.length);
  const noteText = noteArray[randomIndex];

  const noteContainer = document.getElementById('note-container');
  noteContainer.innerHTML = ''; // Clear previous note

  const heart = document.createElement('div');
  heart.className = `heart ${colorClass}`;
  heart.innerHTML = `
    <div class="text">${noteText}</div>
    <button class="close-btn" onclick="closeHeart()">×</button>
  `;
  heart.style.backgroundColor = getColorFromClass(colorClass);
  noteContainer.appendChild(heart);

  animateJarTop();
}

function closeHeart() {
  const noteContainer = document.getElementById('note-container');
  noteContainer.innerHTML = ''; // Clear the heart when close button is clicked
}

function animateJarTop() {
  const jarTop = document.getElementById('jar-top');
  jarTop.style.transform = 'translateX(200px)';

  setTimeout(() => {
    jarTop.style.transform = 'translateX(-50%)';
  }, 1000);
}

function getColorFromClass(colorClass) {
  switch (colorClass) {
    case 'red':
      return '#ED78AC';
    case 'blue':
      return '#BFAFED';
    case 'green':
      return '#CBECB7';
    case 'yellow':
      return '#E7DB87';
    default:
      return 'red';
  }
}

function pullRedNote() {
  pullNoteFromJar(happy, 'red');
}

function pullBlueNote() {
  pullNoteFromJar(sad, 'blue');
}

function pullGreenNote() {
  pullNoteFromJar(dontKnow, 'green');
}

function pullYellowNote() {
  pullNoteFromJar(powerless, 'yellow');
}

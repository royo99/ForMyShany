const redNotes = [
  "Red note sentence 1",
  "Red note sentence 2",
  "Red note sentence 3"
];

const blueNotes = [
  "Blue note sentence 1",
  "Blue note sentence 2",
  "Blue note sentence 3"
];

const greenNotes = [
  "Green note sentence 1",
  "Green note sentence 2",
  "Green note sentence 3"
];

const yellowNotes = [
  "Yellow note sentence 1",
  "Yellow note sentence 2",
  "Yellow note sentence 3"
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
  pullNoteFromJar(redNotes, 'red');
}

function pullBlueNote() {
  pullNoteFromJar(blueNotes, 'blue');
}

function pullGreenNote() {
  pullNoteFromJar(greenNotes, 'green');
}

function pullYellowNote() {
  pullNoteFromJar(yellowNotes, 'yellow');
}

const sentences = [
    "Life is what happens when you're busy making other plans.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
    "You will face many defeats in life, but never let yourself be defeated."
  ];
  
  function showRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('sentence').textContent = sentences[randomIndex];
  }
  
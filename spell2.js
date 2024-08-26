// List of words to practice
const words = [
    'Eccentric', 'Enthusiastic', 'Privilege', 'Decompression', 'Unbelievable', 'Babysitter', 'Rhythm', 'Thoughtful', 
'Threatening', 'Brotherhood', 'Throughout', 'Strength', 'Thickness', 'Length', 'Untie', 'Underneath', 
'Reasonable', 'Plumber', 'Chamber', 'Jealous', 'Height', 'Frighten', 'Empathy', 'Encouragement', 
'Dearest', 'Roughly', 'Fearless', 'Fierce', 'Fairly', 'Slippery', 'Beautifully', 'Belongings', 'Cautious'
];

// Copia de la lista de palabras para mantener el original intacto
let remainingWords = [...words];
let currentWord = '';
let isBritish = true; // Por defecto, acento británico

function speakWord() {
    if (!currentWord) return;

    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = isBritish ? 'en-GB' : 'en-US';

    const voices = window.speechSynthesis.getVoices();
    
    // Busca específicamente una voz femenina o masculina
    const selectedVoice = voices.find(voice =>
        isBritish ? voice.lang === 'en-GB' && voice.name.includes('Female') : voice.lang === 'en-US' && voice.name.includes('Female')
    ) || voices.find(voice =>
        isBritish ? voice.lang === 'en-GB' : voice.lang === 'en-US'
    );

    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
}

function nextWord() {
    if (remainingWords.length === 0) {
        document.getElementById('wordDisplay').innerText = 'no hay palabras lino, solucionalo.';
        document.getElementById('remainingCount').innerText = 'palabras restantes: 0';
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    currentWord = remainingWords[randomIndex];
    remainingWords.splice(randomIndex, 1); // Eliminar la palabra seleccionada

    document.getElementById('wordDisplay').innerText = ''; // No mostrar la palabra
    document.getElementById('feedback').innerText = '';
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
    document.getElementById('remainingCount').innerText = `palabras restantes: ${remainingWords.length}`;
}

function checkWord() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (userInput === currentWord.toLowerCase()) {
        document.getElementById('feedback').innerText = 'Correcto! :)';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect bro! la palabra es: ' + currentWord;
    }
}

function toggleVoice() {
    isBritish = !isBritish;
    document.querySelector('button[onclick="toggleVoice()"]').innerText = isBritish ? 'Switch to American' : 'Switch to British';
}

// Inicializar la primera palabra cuando se carga la página
window.onload = nextWord;

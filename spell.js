// List of words to practice
const words = [
    'Ability', 'Abolition', 'Abortion', 'Acceptable', 'Absent', 'Abstract', 'Academic', 'Accept', 'Accidental',
    'Achievement', 'Acquire', 'Activate', 'Admission', 'Advantage', 'Adventure', 'Adverbial', 'Advertisement',
    'Affection', 'Against', 'Align', 'Ambassador', 'Ambulance', 'Amount', 'Annual', 'Appear', 'Appetizer',
    'Appointment', 'Approach', 'Approval', 'Audience', 'Autumn', 'Babysitter', 'Backwards', 'Baggage', 'Balance',
    'Basement', 'Bartender', 'Beast', 'Beautifully', 'Before', 'Behave', 'Behind', 'Belongings', 'Beneficial',
    'Beyond', 'Bilingual', 'Biography', 'Blanket', 'Bleed', 'Boomerang', 'Bottle', 'Brave', 'Breathing',
    'Briefly', 'Brightness', 'Brotherhood', 'Browse', 'Bruise', 'Bumper', 'Calculate', 'Cameraman', 'Campfire',
    'Cancellation', 'Canyon', 'Capable', 'Cardiologist', 'Cardboard', 'Catalogue', 'Caterpillar', 'Cattle',
    'Cautious', 'Ceremony', 'Challenge', 'Chamber', 'Champion', 'Character', 'Chemical', 'Childhood', 'Chimney',
    'Chimpanzee', 'Chubby', 'Climbing', 'Closely', 'Clothes', 'Companion', 'Colonization', 'Comfortably',
    'Community', 'Concentration', 'Concern', 'Connection', 'Constitute', 'Conversation', 'Cooperation', 'Correction',
    'Critically', 'Creative', 'Crisis', 'Cultivate', 'Curiosity', 'Daily', 'Dangerous', 'Daylight', 'Deadline',
    'Dearest', 'Deathly', 'Deceive', 'Deception', 'Decimal', 'Decompression', 'Decrease', 'Defence', 'Definitely',
    'Democracy', 'Demonstrate', 'Denominator', 'Department', 'Delicious', 'Demanding', 'Descendant', 'Disagreement',
    'Disappoint', 'Discipline', 'Daughter', 'Discussion', 'Documentary', 'Domain', 'Doorstep', 'Double', 'Doubt',
    'Duplicity', 'Earache', 'Earnings', 'Easily', 'Eccentric', 'Egocentric', 'Elbow', 'Election', 'Extinguish',
    'Emerald', 'Expansion', 'Educate', 'Electricity', 'Element', 'Empathy', 'Employment', 'Encouragement',
    'Engagement', 'Enhance', 'Enjoyment', 'Enthusiastic', 'Envelope', 'Equation', 'Emptiness', 'Entirely',
    'Exception', 'Environment', 'Example', 'Excitement', 'Explosion', 'Exterior', 'Expect', 'Fabulous', 'Fairly',
    'Facilitator', 'Familiar', 'Fancy', 'Fantasy', 'Fashionable', 'Fearless', 'Fierce', 'Fingerprint', 'Fireproof',
    'Fisherman', 'Fitness', 'Folder', 'Flight', 'Foolish', 'Foreigner', 'Forecast', 'Forget', 'Forgive', 'Failure',
    'Fortunately', 'Forward', 'Freeze', 'Friendship', 'Frighten', 'Fuel', 'Further', 'Gallon', 'Genuine', 'Gesture',
    'Government', 'Gradual', 'Greasy', 'Hamburger', 'Headache', 'Hospitality', 'Harvest', 'Headquarters', 'Heroes',
    'Heaven', 'Height', 'Horizon', 'Huge', 'Hyperactive', 'Ignore', 'Imagination', 'Immediate', 'Importation',
    'Improvement', 'Indication', 'Ingredient', 'Intention', 'Internal', 'Interview', 'Invisible', 'Invitation',
    'Involve', 'Jealous', 'Journey', 'Jury', 'Knowledge', 'Languages', 'Laughter', 'Liberty', 'Liquefy', 'Length',
    'Laboratory', 'Location', 'Management', 'Manner', 'Material', 'Manually', 'Measure', 'Memories', 'Mention',
    'Minus', 'Mountain', 'Message', 'Misunderstand', 'Mischief', 'Mysterious', 'Multiply', 'Musical', 'Museum',
    'Musician', 'Mutation', 'Mythology', 'Magazine', 'Necessary', 'Northern', 'Noisily', 'Negotiate', 'Novel',
    'Numerator', 'Obtain', 'Opposite', 'Official', 'Oxygen', 'Original', 'Outline', 'Partial', 'Paragraph',
    'Passenger', 'Perfection', 'Photography', 'Performance', 'Physics', 'Personal', 'Pleasant', 'Pleasure',
    'Privilege', 'Plumber', 'Poetic', 'Plentiful', 'Policy', 'Pollute', 'Political', 'Potatoes', 'Poison', 'Possible',
    'Pressure', 'Privacy', 'Probably', 'Protection', 'Process', 'Prodigy', 'Purchase', 'Purse', 'Question',
    'Randomly', 'Raspberry', 'Recipe', 'Recently', 'Reality', 'Reform', 'Regional', 'Regardless', 'Reliable',
    'Rehearse', 'Relief', 'Remain', 'Remarkable', 'Replicate', 'Replacement', 'Recommend', 'Requirement',
    'Retirement', 'Response', 'Resident', 'Respectful', 'Review', 'Reasonable', 'Roughly', 'Rhythm', 'Security',
    'Satisfaction', 'Square', 'Science', 'Scissors', 'Secretary', 'Several', 'Separately', 'Sincere', 'Settle',
    'Squeeze', 'Shorten', 'Slippery', 'Sporadic', 'Sketch', 'Skillful', 'Substitute', 'Southern', 'Spaghetti',
    'Slice', 'Seizure', 'Sponge', 'Souvenir', 'Stammer', 'Sandwich', 'Statement', 'Strength', 'Struggle',
    'Supervisor', 'Success', 'Support', 'Surrounded', 'Survey', 'Systematic', 'Television', 'Temperature', 'Theme',
    'Thickness', 'Themselves', 'Therapy', 'Thieve', 'Thoughtful', 'Threatening', 'Throughout', 'Triangle', 'Tutor',
    'Unbelievable', 'Usefully', 'Underneath', 'Untie', 'Variety', 'Version', 'Valuable', 'Vampire', 'Violence',
    'Visible', 'Vision', 'Wheat', 'Whoever', 'Wrinkle'
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

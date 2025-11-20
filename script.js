// Game data - 100 unique questions with answers and hints
const gameData = [
    // Level 1
    [
        {
            question: "What gets wet while drying?",
            answer: "towel",
            hints: ["You use it after showering.", "It absorbs moisture."]
        },
        {
            question: "I have a head and a tail that will never meet. Having too many of me is always a treat. What am I?",
            answer: "coin",
            hints: ["It's used as currency.", "It's typically round and metallic."]
        },
        {
            question: "The more you take, the more you leave behind. What am I?",
            answer: "footsteps",
            hints: ["They're created when walking.", "They can be found on sandy beaches."]
        },
        {
            question: "What has keys but can't open locks?",
            answer: "piano",
            hints: ["It's a musical instrument.", "It has black and white keys."]
        },
        {
            question: "What has a heart that doesn't beat?",
            answer: "artichoke",
            hints: ["It's a type of vegetable.", "It has layers that you peel off."]
        },
        {
            question: "What can travel around the world while staying in a corner?",
            answer: "stamp",
            hints: ["It's used for mailing letters.", "It often has adhesive on the back."]
        },
        {
            question: "What has a neck but no head?",
            answer: "bottle",
            hints: ["It's used to contain liquids.", "It often has a cap or cork."]
        },
        {
            question: "What has an eye but cannot see?",
            answer: "needle",
            hints: ["It's used in sewing.", "It has a small hole at one end."]
        },
        {
            question: "What gets sharper the more you use it?",
            answer: "brain",
            hints: ["It's an organ in your head.", "It's responsible for thinking."]
        },
        {
            question: "What has a thumb and four fingers but is not alive?",
            answer: "glove",
            hints: ["You wear it on your hand.", "It comes in pairs."]
        }
    ],
    // Level 2
    [
        {
            question: "I'm tall when I'm young and short when I'm old. What am I?",
            answer: "candle",
            hints: ["It produces light.", "It melts as it burns."]
        },
        {
            question: "What has a ring but no finger?",
            answer: "telephone",
            hints: ["It's used for communication.", "It can make a ringing sound."]
        },
        {
            question: "What has to be broken before you can use it?",
            answer: "egg",
            hints: ["It comes from chickens.", "It's often used in baking."]
        },
        {
            question: "What is full of holes but still holds water?",
            answer: "sponge",
            hints: ["It's used for cleaning.", "It absorbs liquids."]
        },
        {
            question: "What goes up but never comes down?",
            answer: "age",
            hints: ["It's a measurement of time.", "It increases every year."]
        },
        {
            question: "What has cities but no houses, forests but no trees, and rivers but no water?",
            answer: "map",
            hints: ["It's used for navigation.", "It represents geographical areas."]
        },
        {
            question: "What can you catch but not throw?",
            answer: "cold",
            hints: ["It's an illness.", "It can make you sneeze."]
        },
        {
            question: "What invention lets you look right through a wall?",
            answer: "window",
            hints: ["It's made of glass.", "It's found in buildings."]
        },
        {
            question: "What has many teeth but can't bite?",
            answer: "comb",
            hints: ["It's used for hair.", "It has a row of thin parts."]
        },
        {
            question: "The more there is, the less you see. What is it?",
            answer: "darkness",
            hints: ["It's the absence of light.", "It comes at night."]
        }
    ],
    // Level 3
    [
        {
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
            answer: "river",
            hints: ["It flows through landscapes.", "It contains freshwater."]
        },
        {
            question: "What is so fragile that saying its name breaks it?",
            answer: "silence",
            hints: ["It's the absence of sound.", "It can be found in quiet places."]
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answer: "letter m",
            hints: ["It's a letter of the alphabet.", "Look at the spelling of the words in the riddle."]
        },
        {
            question: "What is always in front of you but can't be seen?",
            answer: "future",
            hints: ["It hasn't happened yet.", "It's what comes after the present."]
        },
        {
            question: "What can fill a room but takes up no space?",
            answer: "light",
            hints: ["It allows us to see.", "It comes from the sun."]
        },
        {
            question: "What gets bigger when more is taken away?",
            answer: "hole",
            hints: ["It's an empty space.", "You can dig one in the ground."]
        },
        {
            question: "What has a bottom at the top?",
            answer: "leg",
            hints: ["It's part of the body.", "You have two of them."]
        },
        {
            question: "What has words but never speaks?",
            answer: "book",
            hints: ["It contains pages.", "You read it."]
        },
        {
            question: "What has a head, a tail, is brown, and has no legs?",
            answer: "penny",
            hints: ["It's a form of currency.", "It's worth one cent."]
        },
        {
            question: "What goes through towns and over hills but never moves?",
            answer: "road",
            hints: ["Cars travel on it.", "It connects different places."]
        }
    ],
    // Level 4
    [
        {
            question: "What belongs to you but other people use it more than you?",
            answer: "name",
            hints: ["It identifies you.", "People call you by it."]
        },
        {
            question: "I have branches but no fruit, trunk or leaves. What am I?",
            answer: "bank",
            hints: ["It deals with money.", "It has different locations."]
        },
        {
            question: "What can you break without touching it?",
            answer: "promise",
            hints: ["It's a commitment.", "It can be verbal or written."]
        },
        {
            question: "What has a face that does not frown, hands that do not wave, and marches but does not walk?",
            answer: "clock",
            hints: ["It tells time.", "It has numbers and hands."]
        },
        {
            question: "What has a neck but no head, two arms but no hands?",
            answer: "shirt",
            hints: ["It's an article of clothing.", "You wear it on your upper body."]
        },
        {
            question: "What can be measured but has no length, width, or height?",
            answer: "temperature",
            hints: ["It tells how hot or cold something is.", "It's measured with a thermometer."]
        },
        {
            question: "What runs all around a backyard yet never moves?",
            answer: "fence",
            hints: ["It marks a boundary.", "It can be made of wood or metal."]
        },
        {
            question: "What is always coming but never arrives?",
            answer: "tomorrow",
            hints: ["It's a point in time.", "It follows today."]
        },
        {
            question: "What can be cracked, made, told, and played?",
            answer: "joke",
            hints: ["It's meant to be funny.", "People laugh at it."]
        },
        {
            question: "What has a head and a tail but no body?",
            answer: "coin",
            hints: ["It's used as currency.", "It's typically round and metallic."]
        }
    ],
    // Level 5
    [
        {
            question: "What has keys but can't open locks?",
            answer: "keyboard",
            hints: ["It's used for typing.", "It has letters and numbers."]
        },
        {
            question: "What has a face but no body?",
            answer: "mountain",
            hints: ["It has a steep side.", "People climb it."]
        },
        {
            question: "What has hands but can't clap?",
            answer: "volcano",
            hints: ["It can erupt.", "It has lava inside."]
        },
        {
            question: "What has legs but doesn't walk?",
            answer: "chair",
            hints: ["You sit on it.", "It's furniture."]
        },
        {
            question: "What is full of holes but still holds water?",
            answer: "net",
            hints: ["It's used for catching.", "It has many openings."]
        },
        {
            question: "What goes up but never comes down?",
            answer: "balloon",
            hints: ["It's filled with air or gas.", "Children play with it."]
        },
        {
            question: "What can you catch but not throw?",
            answer: "disease",
            hints: ["It can make you sick.", "Doctors treat it."]
        },
        {
            question: "I'm tall when I'm young and short when I'm old. What am I?",
            answer: "pencil",
            hints: ["You write with it.", "It has graphite inside."]
        },
        {
            question: "What has a ring but no finger?",
            answer: "basketball",
            hints: ["It's a sport.", "Players shoot it through a hoop."]
        },
        {
            question: "What has to be broken before you can use it?",
            answer: "glowstick",
            hints: ["It produces light.", "You snap it to activate."]
        }
    ],
    // Level 6
    [
        {
            question: "What has cities but no houses, forests but no trees, and rivers but no water?",
            answer: "atlas",
            hints: ["It contains maps.", "It shows geographical features."]
        },
        {
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
            answer: "waterfall",
            hints: ["Water flows over it.", "It's found in nature."]
        },
        {
            question: "What has one eye but can't see?",
            answer: "hurricane",
            hints: ["It's a storm.", "It has a calm center."]
        },
        {
            question: "What is so fragile that saying its name breaks it?",
            answer: "peace",
            hints: ["It's the opposite of war.", "It's a state of calm."]
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answer: "the letter e",
            hints: ["It's a vowel.", "Look at the spelling carefully."]
        },
        {
            question: "What is always in front of you but can't be seen?",
            answer: "air",
            hints: ["You breathe it.", "It's invisible."]
        },
        {
            question: "What has many keys but can't open a single lock?",
            answer: "organ",
            hints: ["It's a musical instrument.", "It has pipes."]
        },
        {
            question: "What can fill a room but takes up no space?",
            answer: "music",
            hints: ["You can hear it.", "It has melody and rhythm."]
        },
        {
            question: "What gets bigger when more is taken away?",
            answer: "debt",
            hints: ["It's money owed.", "It increases with spending."]
        },
        {
            question: "What has a bottom at the top?",
            answer: "page",
            hints: ["It's in a book.", "You turn it."]
        }
    ],
    // Level 7
    [
        {
            question: "What has words but never speaks?",
            answer: "diary",
            hints: ["People write in it.", "It contains personal thoughts."]
        },
        {
            question: "What has a heart that doesn't beat?",
            answer: "deck",
            hints: ["It's made of cards.", "You play games with it."]
        },
        {
            question: "What can be cracked, made, told, and played?",
            answer: "code",
            hints: ["Computers use it.", "It can be secret."]
        },
        {
            question: "I have cities but no houses, mountains but no trees, and water but no fish. What am I?",
            answer: "globe",
            hints: ["It represents the Earth.", "It spins on an axis."]
        },
        {
            question: "What has a thumb and four fingers but is not a hand?",
            answer: "mitten",
            hints: ["You wear it in winter.", "It keeps hands warm."]
        },
        {
            question: "What has an eye but cannot see?",
            answer: "storm",
            hints: ["It has a center.", "It can be destructive."]
        },
        {
            question: "What has a neck but no head?",
            answer: "guitar",
            hints: ["It's a musical instrument.", "It has strings."]
        },
        {
            question: "What gets wet while drying?",
            answer: "umbrella",
            hints: ["You use it in rain.", "It protects from water."]
        },
        {
            question: "The more of them you take, the more you leave behind. What are they?",
            answer: "breaths",
            hints: ["You do it constantly.", "It's essential for life."]
        },
        {
            question: "What can travel around the world while staying in a corner?",
            answer: "news",
            hints: ["It informs people.", "It spreads information."]
        }
    ],
    // Level 8
    [
        {
            question: "What has a face but no body?",
            answer: "clock",
            hints: ["It tells time.", "It has numbers."]
        },
        {
            question: "What has hands but can't clap?",
            answer: "sculpture",
            hints: ["It's art.", "It can be made of stone."]
        },
        {
            question: "What has legs but doesn't walk?",
            answer: "compass",
            hints: ["It shows direction.", "It has a needle."]
        },
        {
            question: "What is full of holes but still holds water?",
            answer: "cloud",
            hints: ["It's in the sky.", "It produces rain."]
        },
        {
            question: "What goes up but never comes down?",
            answer: "smoke",
            hints: ["It comes from fire.", "It rises in the air."]
        },
        {
            question: "What can you catch but not throw?",
            answer: "opportunity",
            hints: ["It's a chance.", "It comes and goes."]
        },
        {
            question: "I'm tall when I'm young and short when I'm old. What am I?",
            answer: "tree",
            hints: ["It has leaves.", "It provides shade."]
        },
        {
            question: "What has a ring but no finger?",
            answer: "saturn",
            hints: ["It's a planet.", "It has distinctive rings."]
        },
        {
            question: "What has to be broken before you can use it?",
            answer: "wave",
            hints: ["It's in the ocean.", "It crashes on shore."]
        },
        {
            question: "What has cities but no houses, forests but no trees, and rivers but no water?",
            answer: "painting",
            hints: ["It's artwork.", "It's created with brushes."]
        }
    ],
    // Level 9
    [
        {
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
            answer: "computer",
            hints: ["It processes information.", "You type on it."]
        },
        {
            question: "What has one eye but can't see?",
            answer: "needle",
            hints: ["It's used in sewing.", "It's pointed."]
        },
        {
            question: "What is so fragile that saying its name breaks it?",
            answer: "glass",
            hints: ["It can shatter.", "Windows are made of it."]
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answer: "the letter t",
            hints: ["It's a consonant.", "Check the spelling again."]
        },
        {
            question: "What is always in front of you but can't be seen?",
            answer: "time",
            hints: ["It keeps moving forward.", "You can measure it."]
        },
        {
            question: "What has many keys but can't open a single lock?",
            answer: "calculator",
            hints: ["It does math.", "It has numbers."]
        },
        {
            question: "What can fill a room but takes up no space?",
            answer: "laughter",
            hints: ["It expresses joy.", "It's contagious."]
        },
        {
            question: "What gets bigger when more is taken away?",
            answer: "shadow",
            hints: ["It's created by light.", "It changes size."]
        },
        {
            question: "What has a bottom at the top?",
            answer: "ship",
            hints: ["It sails on water.", "It has a keel."]
        },
        {
            question: "What has words but never speaks?",
            answer: "sign",
            hints: ["It gives information.", "It's found on roads."]
        }
    ],
    // Level 10
    [
        {
            question: "What has a heart that doesn't beat?",
            answer: "peach",
            hints: ["It's a fruit.", "It has a stone inside."]
        },
        {
            question: "What can be cracked, made, told, and played?",
            answer: "record",
            hints: ["It can be broken.", "It stores information."]
        },
        {
            question: "I have cities but no houses, mountains but no trees, and water but no fish. What am I?",
            answer: "puzzle",
            hints: ["It has pieces.", "You solve it."]
        },
        {
            question: "What has a thumb and four fingers but is not a hand?",
            answer: "starfish",
            hints: ["It lives in the ocean.", "It has five arms."]
        },
        {
            question: "What has an eye but cannot see?",
            answer: "potato",
            hints: ["It's a vegetable.", "It grows underground."]
        },
        {
            question: "What has a neck but no head?",
            answer: "violin",
            hints: ["It's a musical instrument.", "It's played with a bow."]
        },
        {
            question: "What gets wet while drying?",
            answer: "tears",
            hints: ["They come from eyes.", "They express emotion."]
        },
        {
            question: "The more of them you take, the more you leave behind. What are they?",
            answer: "memories",
            hints: ["They're in your mind.", "They can be happy or sad."]
        },
        {
            question: "What has keys but can't open locks?",
            answer: "flute",
            hints: ["It's a wind instrument.", "You blow into it."]
        },
        {
            question: "What can travel around the world while staying in a corner?",
            answer: "thought",
            hints: ["It's in your mind.", "It can be shared."]
        }
    ]
];

// Game state
let currentLevel = 1;
let currentQuestion = 0;
let hp = 150;
let score = 0;
let usedHints = [false, false];
let revealedFirstLetter = false;

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const levelCompleteScreen = document.getElementById('level-complete');
const gameCompleteScreen = document.getElementById('game-complete');
const gameOverScreen = document.getElementById('game-over');

const currentLevelElement = document.getElementById('current-level');
const hpCountElement = document.getElementById('hp-count');
const scoreElement = document.getElementById('score');

const questionText = document.getElementById('question-text');
const currentQuestionElement = document.getElementById('current-question');
const answerInput = document.getElementById('answer-input');
const submitAnswerButton = document.getElementById('submit-answer');
const answerBlanks = document.getElementById('answer-blanks');
const messageContainer = document.getElementById('message-container');

const hint1Button = document.getElementById('hint1-btn');
const hint2Button = document.getElementById('hint2-btn');
const showAnswerButton = document.getElementById('show-answer-btn');
const hintDisplay = document.getElementById('hint-display');

const prevQuestionButton = document.getElementById('prev-question');
const nextQuestionButton = document.getElementById('next-question');

const levelScoreElement = document.getElementById('level-score');
const levelHpElement = document.getElementById('level-hp');
const nextLevelButton = document.getElementById('next-level-btn');
const playAgainButton = document.getElementById('play-again');
const restartGameButton = document.getElementById('restart-game');
const startGameButton = document.getElementById('start-game');
const finalScoreElement = document.getElementById('final-score');

// Initialize the game
function initGame() {
    // Check if there's saved progress
    const hasSavedProgress = localStorage.getItem('logicMasterSave');

    if (hasSavedProgress) {
        // Update welcome screen to show continue option
        const welcomeScreen = document.getElementById('welcome-screen');
        const startButton = document.getElementById('start-game');
        startButton.textContent = 'Continue Your Journey';

        // Add a restart option
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Start New Game';
        restartButton.id = 'new-game';
        restartButton.style.marginLeft = '10px';
        restartButton.style.backgroundColor = '#444';
        restartButton.addEventListener('click', () => {
            clearGameProgress();
            startGame();
        });

        startButton.parentNode.appendChild(restartButton);
    }

    showScreen(welcomeScreen);
    updateGameInfo();

    // Event listeners
    startGameButton.addEventListener('click', startGame);
    submitAnswerButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    hint1Button.addEventListener('click', () => useHint(0));
    hint2Button.addEventListener('click', () => useHint(1));
    showAnswerButton.addEventListener('click', showAnswer);

    prevQuestionButton.addEventListener('click', goToPreviousQuestion);
    nextQuestionButton.addEventListener('click', goToNextQuestion);

    nextLevelButton.addEventListener('click', goToNextLevel);
    playAgainButton.addEventListener('click', restartGame);
    restartGameButton.addEventListener('click', restartGame);
}

// Show a specific screen and hide others
function showScreen(screen) {
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    levelCompleteScreen.classList.add('hidden');
    gameCompleteScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');

    screen.classList.remove('hidden');
}

// Update game info display
function updateGameInfo() {
    currentLevelElement.textContent = currentLevel;
    hpCountElement.textContent = hp;
    scoreElement.textContent = score;
}

// Save game progress to localStorage
function saveGameProgress() {
    const gameState = {
        currentLevel: currentLevel,
        currentQuestion: currentQuestion,
        hp: hp,
        score: score,
        completedLevels: Array.from(completedLevels),
        usedHints: usedHints,
        revealedFirstLetter: revealedFirstLetter
    };
    localStorage.setItem('logicMasterSave', JSON.stringify(gameState));
}

// Load game progress from localStorage
function loadGameProgress() {
    const savedGame = localStorage.getItem('logicMasterSave');
    if (savedGame) {
        const gameState = JSON.parse(savedGame);
        currentLevel = gameState.currentLevel;
        currentQuestion = gameState.currentQuestion;
        hp = gameState.hp;
        score = gameState.score;
        completedLevels = new Set(gameState.completedLevels);
        usedHints = gameState.usedHints;
        revealedFirstLetter = gameState.revealedFirstLetter;
        return true;
    }
    return false;
}

// Clear saved progress (for restart)
function clearGameProgress() {
    localStorage.removeItem('logicMasterSave');
}

// Modified startGame function to check for saved progress
function startGame() {
    // Check if there's saved progress
    if (loadGameProgress()) {
        showScreen(gameScreen);
        loadQuestion();
        updateGameInfo();
        showMessage("Welcome back! Your progress has been loaded.", "success");
    } else {
        // Start new game
        currentLevel = 1;
        currentQuestion = 0;
        hp = 150;
        score = 0;
        completedLevels = new Set();
        usedHints = [false, false];
        revealedFirstLetter = false;

        showScreen(gameScreen);
        loadQuestion();
        updateGameInfo();
    }
}



// Load the current question
// Load the current question (modified)
function loadQuestion() {
    const questionData = gameData[currentLevel - 1][currentQuestion];
    questionText.textContent = questionData.question;
    currentQuestionElement.textContent = currentQuestion + 1;
    hintDisplay.textContent = '';
    clearMessage();

    // Create blank inputs for answer
    createAnswerBlanks(questionData.answer.length);

    // Reset hint buttons
    hint1Button.disabled = false;
    hint2Button.disabled = false;
    showAnswerButton.disabled = true; // Disabled until both hints are used

    // Update navigation buttons
    prevQuestionButton.disabled = currentQuestion === 0;
    nextQuestionButton.disabled = currentQuestion === 9;

    // Reset used hints for this question
    usedHints = [false, false];
    revealedFirstLetter = false;
}

// Create blank lines showing the number of letters in the answer
// Create blank inputs for answer
function createAnswerBlanks(length) {
    answerBlanks.innerHTML = '';
    for (let i = 0; i < length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'blank-input';
        input.maxLength = 1;
        input.dataset.index = i;

        // Add event listeners
        input.addEventListener('input', handleBlankInput);
        input.addEventListener('keydown', handleBlankNavigation);
        input.addEventListener('focus', handleBlankFocus);

        answerBlanks.appendChild(input);
    }

    // Focus on first input
    if (answerBlanks.firstChild) {
        answerBlanks.firstChild.focus();
    }
}


// Show a message to the user
function showMessage(text, type) {
    messageContainer.innerHTML = '';
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    messageContainer.appendChild(message);
}

// Clear any message
function clearMessage() {
    messageContainer.innerHTML = '';
}

// Use a hint
function useHint(hintIndex) {
    if (usedHints[hintIndex]) return;

    const questionData = gameData[currentLevel - 1][currentQuestion];
    hintDisplay.textContent = questionData.hints[hintIndex];
    usedHints[hintIndex] = true;

    // Disable the used hint button
    if (hintIndex === 0) {
        hint1Button.disabled = true;
    } else {
        hint2Button.disabled = true;
    }

    // Enable "Show Answer" button if both hints are used
    if (usedHints[0] && usedHints[1]) {
        showAnswerButton.disabled = false;

        // If both hints are used and first letter not revealed yet, reveal it
        if (!revealedFirstLetter) {
            revealFirstLetter();
        }
    }

    // Deduct HP for using hint
    hp = Math.max(0, hp - 10);
    updateGameInfo();

    if (hp === 0) {
        showScreen(gameOverScreen);
    }
}

// Reveal the first letter of the answer
// Reveal the first letter of the answer
// Reveal the first letter of the answer
function revealFirstLetter() {
    const questionData = gameData[currentLevel - 1][currentQuestion];
    const firstLetter = questionData.answer[0].toLowerCase();
    const firstInput = answerBlanks.querySelector('.blank-input[data-index="0"]');

    firstInput.value = firstLetter;
    firstInput.classList.add('revealed');
    firstInput.readOnly = true;
    revealedFirstLetter = true;

    // Focus on next input if available
    if (answerBlanks.children[1]) {
        answerBlanks.children[1].focus();
    }

    // Deduct HP for revealing first letter
    hp = Math.max(0, hp - 5);
    updateGameInfo();

    showMessage(`First letter revealed: ${firstLetter.toUpperCase()}`, "success");

    if (hp === 0) {
        showScreen(gameOverScreen);
    }
}

// Handle input in blank spaces
function handleBlankInput(e) {
    const input = e.target;
    const index = parseInt(input.dataset.index);
    const value = input.value.toLowerCase();

    // Only allow letters
    if (value && !/^[a-z]$/.test(value)) {
        input.value = '';
        return;
    }

    // Auto-advance to next input
    if (value && index < answerBlanks.children.length - 1) {
        answerBlanks.children[index + 1].focus();
    }

    // Check if answer is complete
    checkBlankAnswer();
}

// Handle keyboard navigation
function handleBlankNavigation(e) {
    const input = e.target;
    const index = parseInt(input.dataset.index);

    if (e.key === 'Backspace') {
        if (!input.value && index > 0) {
            // Move to previous input on backspace when empty
            answerBlanks.children[index - 1].focus();
        }
    } else if (e.key === 'ArrowLeft' && index > 0) {
        answerBlanks.children[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < answerBlanks.children.length - 1) {
        answerBlanks.children[index + 1].focus();
    } else if (e.key === 'Enter') {
        checkBlankAnswer();
    }
}

// Handle focus on blank inputs
function handleBlankFocus(e) {
    e.target.select();
}

// Check answer from blank inputs
function checkBlankAnswer() {
    const inputs = answerBlanks.querySelectorAll('.blank-input');
    let userAnswer = '';

    for (let input of inputs) {
        userAnswer += input.value.toLowerCase();
    }

    // Only check if all inputs are filled
    if (userAnswer.length === inputs.length) {
        const correctAnswer = gameData[currentLevel - 1][currentQuestion].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            // Correct answer
            score += 10;
            updateGameInfo();
            showMessage("Correct! Well done!", "success");

            // Mark all inputs as correct
            for (let input of inputs) {
                input.classList.add('correct');
                input.readOnly = true;
            }

            // Move to next question or complete level
            setTimeout(() => {
                if (currentQuestion === 9) {
                    completeLevel();
                } else {
                    goToNextQuestion();
                }
            }, 1500);
        } else {
            // Incorrect answer
            showMessage("Incorrect answer. Try again!", "error");
            hp = Math.max(0, hp - 5);
            updateGameInfo();

            // Clear all inputs and focus on first
            for (let input of inputs) {
                input.value = '';
            }
            if (inputs[0]) {
                inputs[0].focus();
            }

            if (hp === 0) {
                showScreen(gameOverScreen);
            }
        }
    }
}

// Show the answer
function showAnswer() {
    const questionData = gameData[currentLevel - 1][currentQuestion];
    hintDisplay.textContent = `The answer is: ${questionData.answer}`;

    // Fill in all the inputs with the answer
    const inputs = answerBlanks.querySelectorAll('.blank-input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = questionData.answer[i].toLowerCase();
        inputs[i].classList.add('filled');
        inputs[i].readOnly = true;
    }

    // Disable all hint buttons
    hint1Button.disabled = true;
    hint2Button.disabled = true;
    showAnswerButton.disabled = true;

    // Deduct more HP for showing answer
    hp = Math.max(0, hp - 20);
    updateGameInfo();

    if (hp === 0) {
        showScreen(gameOverScreen);
    }
}

// Check the answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = gameData[currentLevel - 1][currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        // Correct answer
        score += 10;
        updateGameInfo();
        showMessage("Correct! Well done!", "success");

        // Fill in the blanks with the correct answer
        const blanks = answerBlanks.querySelectorAll('.blank-letter');
        for (let i = 0; i < blanks.length; i++) {
            blanks[i].textContent = correctAnswer[i].toUpperCase();
            blanks[i].classList.add('filled');
        }

        // Move to next question or complete level
        setTimeout(() => {
            if (currentQuestion === 9) {
                completeLevel();
            } else {
                goToNextQuestion();
            }
        }, 1500);
    } else {
        // Incorrect answer
        showMessage("Incorrect answer. Try again!", "error");
        hp = Math.max(0, hp - 5);
        updateGameInfo();

        // Clear the input field for next attempt
        answerInput.value = '';
        answerInput.focus();

        if (hp === 0) {
            showScreen(gameOverScreen);
        }
    }
}

// Go to the next question
function goToNextQuestion() {
    if (currentQuestion < 9) {
        currentQuestion++;
        loadQuestion();
    }
}

// Go to the previous question
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Modified completeLevel function to save progress
function completeLevel() {
    levelScoreElement.textContent = score;
    levelHpElement.textContent = hp;

    // Add current level to completed levels
    completedLevels.add(currentLevel);

    // Save progress
    saveGameProgress();

    if (currentLevel === 10) {
        // Game completed
        finalScoreElement.textContent = score;
        showScreen(gameCompleteScreen);
        // Clear progress since game is complete
        clearGameProgress();
    } else {
        showScreen(levelCompleteScreen);
    }
}



// Modified goToNextLevel function to save progress
function goToNextLevel() {
    if (currentLevel < 10) {
        currentLevel++;
        currentQuestion = 0;
        hp = 150; // Reset HP for new level
        usedHints = [false, false];
        revealedFirstLetter = false;

        showScreen(gameScreen);
        loadQuestion();
        updateGameInfo();

        // Save progress
        saveGameProgress();
    }
}

// Modified restartGame function to clear progress
function restartGame() {
    clearGameProgress();
    currentLevel = 1;
    currentQuestion = 0;
    hp = 150;
    score = 0;
    completedLevels = new Set();
    usedHints = [false, false];
    revealedFirstLetter = false;
    updateGameInfo();
    showScreen(welcomeScreen);
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);
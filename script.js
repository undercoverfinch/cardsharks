const p1button = document.getElementById("p1button");
const p2button = document.getElementById("p2button");
const message = document.querySelector("header p");
const p1Select = document.getElementById("select1");
const p2Select = document.getElementById("select2");
const p1Input = document.getElementById("p1input");
const p2Input = document.getElementById("p2input");
const p1Card1 = document.getElementById("p1card1");
const p1Card2 = document.getElementById("p1card2");
const p1Card3 = document.getElementById("p1card3");
const p1Card4 = document.getElementById("p1card4");
const p1Card5 = document.getElementById("p1card5");
const p2Card1 = document.getElementById("p2card1");
const p2Card2 = document.getElementById("p2card2");
const p2Card3 = document.getElementById("p2card3");
const p2Card4 = document.getElementById("p2card4");
const p2Card5 = document.getElementById("p2card5");
const roundElement = document.getElementById("round");
const roundString = roundElement.textContent;
let round = parseInt(roundString);
const p1ScoreElement = document.getElementById("p1score");
const p1ScoreString = p1ScoreElement.textContent;
let p1Score = parseInt(p1ScoreString);
const p2ScoreElement = document.getElementById("p2score");
const p2ScoreString = p2ScoreElement.textContent;
let p2Score = parseInt(p2ScoreString);
const p1Button = document.getElementById("p1button");
const p2Button = document.getElementById("p2button");
const joel = document.getElementById("joel");

let p1Card1flipped = false;
let p1Card2flipped = false;
let p1Card3flipped = false;
let p1Card4flipped = false;
let p1Card5flipped = false;
let p2Card1flipped = false;
let p2Card2flipped = false;
let p2Card3flipped = false;
let p2Card4flipped = false;
let p2Card5flipped = false;

const p1Deck = [
  { value: 2, src: "images/c2.svg" },
  { value: 3, src: "images/c3.svg" },
  { value: 4, src: "images/c4.svg" },
  { value: 5, src: "images/c5.svg" },
  { value: 6, src: "images/c6.svg" },
  { value: 7, src: "images/c7.svg" },
  { value: 8, src: "images/c8.svg" },
  { value: 9, src: "images/c9.svg" },
  { value: 13, src: "images/ca.svg" },
  { value: 12, src: "images/cK.svg" },
  { value: 10, src: "images/cJ.svg" },
  { value: 11, src: "images/cQ.svg" },
  { value: 2, src: "images/d2.svg" },
  { value: 3, src: "images/d3.svg" },
  { value: 4, src: "images/d4.svg" },
  { value: 5, src: "images/d5.svg" },
  { value: 6, src: "images/d6.svg" },
  { value: 7, src: "images/d7.svg" },
  { value: 8, src: "images/d8.svg" },
  { value: 9, src: "images/d9.svg" },
  { value: 13, src: "images/da.svg" },
  { value: 12, src: "images/dk.svg" },
  { value: 10, src: "images/dj.svg" },
  { value: 11, src: "images/dq.svg" },
  { value: 2, src: "images/h2.svg" },
  { value: 3, src: "images/h3.svg" },
  { value: 4, src: "images/h4.svg" },
  { value: 5, src: "images/h5.svg" },
  { value: 6, src: "images/h6.svg" },
  { value: 7, src: "images/h7.svg" },
  { value: 8, src: "images/h8.svg" },
  { value: 9, src: "images/h9.svg" },
  { value: 13, src: "images/ha.svg" },
  { value: 12, src: "images/hk.svg" },
  { value: 10, src: "images/hj.svg" },
  { value: 11, src: "images/hq.svg" },
  { value: 2, src: "images/s2.svg" },
  { value: 3, src: "images/s3.svg" },
  { value: 4, src: "images/s4.svg" },
  { value: 5, src: "images/s5.svg" },
  { value: 6, src: "images/s6.svg" },
  { value: 7, src: "images/s7.svg" },
  { value: 8, src: "images/s8.svg" },
  { value: 9, src: "images/s9.svg" },
  { value: 13, src: "images/sa.svg" },
  { value: 12, src: "images/sk.svg" },
  { value: 10, src: "images/sj.svg" },
  { value: 11, src: "images/sq.svg" },
];

const p2Deck = [
  { value: 2, src: "images/c2.svg" },
  { value: 3, src: "images/c3.svg" },
  { value: 4, src: "images/c4.svg" },
  { value: 5, src: "images/c5.svg" },
  { value: 6, src: "images/c6.svg" },
  { value: 7, src: "images/c7.svg" },
  { value: 8, src: "images/c8.svg" },
  { value: 9, src: "images/c9.svg" },
  { value: 13, src: "images/ca.svg" },
  { value: 12, src: "images/cK.svg" },
  { value: 10, src: "images/cJ.svg" },
  { value: 11, src: "images/cQ.svg" },
  { value: 2, src: "images/d2.svg" },
  { value: 3, src: "images/d3.svg" },
  { value: 4, src: "images/d4.svg" },
  { value: 5, src: "images/d5.svg" },
  { value: 6, src: "images/d6.svg" },
  { value: 7, src: "images/d7.svg" },
  { value: 8, src: "images/d8.svg" },
  { value: 9, src: "images/d9.svg" },
  { value: 13, src: "images/da.svg" },
  { value: 12, src: "images/dk.svg" },
  { value: 10, src: "images/dj.svg" },
  { value: 11, src: "images/dq.svg" },
  { value: 2, src: "images/h2.svg" },
  { value: 3, src: "images/h3.svg" },
  { value: 4, src: "images/h4.svg" },
  { value: 5, src: "images/h5.svg" },
  { value: 6, src: "images/h6.svg" },
  { value: 7, src: "images/h7.svg" },
  { value: 8, src: "images/h8.svg" },
  { value: 9, src: "images/h9.svg" },
  { value: 13, src: "images/ha.svg" },
  { value: 12, src: "images/hk.svg" },
  { value: 10, src: "images/hj.svg" },
  { value: 11, src: "images/hq.svg" },
  { value: 2, src: "images/s2.svg" },
  { value: 3, src: "images/s3.svg" },
  { value: 4, src: "images/s4.svg" },
  { value: 5, src: "images/s5.svg" },
  { value: 6, src: "images/s6.svg" },
  { value: 7, src: "images/s7.svg" },
  { value: 8, src: "images/s8.svg" },
  { value: 9, src: "images/s9.svg" },
  { value: 13, src: "images/sa.svg" },
  { value: 12, src: "images/sk.svg" },
  { value: 10, src: "images/sj.svg" },
  { value: 11, src: "images/sq.svg" },
];

const intro = [
  "Time to go over the rules, but don’t worry—I’m here to make them sound way cooler than they actually are...",
  "Here’s how it goes: Player One, you’re up first—you’ll get a stats question, and your mission is to guess the answer. Then Player Two, it’s your turn to shine: you’ll decide if the real answer is higher or lower...",
  "Whoever nails that question gets their first card flipped—congratulations, you lucky human! But don’t get too comfortable… now you get to guess if your next card is higher or lower...",
  "Guess right, and you keep flipping. Guess wrong… well, try not to cry on camera. First player to flip all five cards? They take the round and maybe a little bit of bragging rights!...",
  "How many rounds? Well, that's up to you. Traditionally, the first player to win two rounds takes home the glory!",
];

const incorrectMessages = [
  "That's too bad, looks like you guessed incorrectly. Oh well, onto the next question!",
  "Womp womp… that one’s wrong. Onward we go!",
  "Incorrect, but don’t worry — redemption awaits!",
  "Just missed it! But hey, who’s keeping score? Oh right, we are.",
  "That’s incorrect, but hey, nobody’s perfect.",
  "Nope! But points for confidence.",
];

const questions = [
  {
    question:
      "1500 Redditors were polled: “Should phones be banned in schools?” What percent supported phone banning?",
    answer: "35%",
  },

  {
    question:
      "On average, there are six unprovoked shark related fatalities per year. How many sharks are killed by humans?",
    answer: "100 million",
    options: ["hundred", "thousand", "million", "billion", "trillion"],
  },
  {
    question:
      "The subreddit r/dogswearinghats is home to 62k canine enthusiasts. How many members does r/catswitheyeliner have?",
    answer: "42k",
    options: ["k", "m"],
  },
  {
    question:
      "What percentage of Redditors say they are closer to their mother than their father?",
    answer: "81%",
  },
  {
    question:
      "Seventeen markets were surveyed globally, what percentage of people find putting your feet up in the movie theatre unacceptable?",
    answer: "84%",
  },
  {
    question:
      "r/breadstapledtotrees currently has 335k members. How many does r/treesstapledtobread have?",
    answer: "4.4k",
    options: ["k", "m"],
  },
  {
    question:
      "A post in r/polls asked: “Would you delete your account if I offered to pay your karma in USD?” What percent of people refused?",
    answer: "15%",
  },
  {
    question:
      "Spider-Man was the most Googled superhero worldwide (in a 2024 study across 113 countries). In what percentage of countries did he come out on top?",
    answer: "48.7%",
  },
  {
    question:
      "The subreddit r/designporn has 2.3 million members! Can you predict r/crappydesign’s member count?",
    answer: "6m",
    options: ["k", "m"],
  },
  {
    question:
      "What percentage of Reddit believes life was better before cellphones?",
    answer: "35%",
  },
  {
    question:
      "657k bird watchers have joined r/birding. How many people have joined its estranged cousin, r/birdswitharms?",
    answer: "1.1m",
    options: ["k", "m"],
  },

  {
    question: "In what year did streaming overtake broadcast and cable?",
    answer: "2025",
  },
  {
    question:
      "1500 Redditors answered: “Would you press a button that kills a random person but gives you 1 thousand USD?” What percent of people took the money?",
    answer: "36%",
  },
  {
    question:
      "What percentage of Redditors prefer mayo over butter on their sandwiches?",
    answer: "56%",
  },

  {
    question:
      "Horror is one of the fastest growing genres of this decade. In 2025, what percentage of North American movie ticket sales were for this genre? ",
    answer: "17%",
  },
  {
    question:
      "A post in r/polls asked: “If all drugs were legalized would you start to use them?” What percentage of people answered ‘Yes or I already use them’?",
    answer: "24%",
  },
  {
    question:
      "r/shittylifeprotips currently has 1.7 million members. How many do you think have joined r/diWHY?",
    answer: "3.8m",
    options: ["k", "m"],
  },
  {
    question:
      "According to the ESA’s 2025 report, how old is the average American gamer?",
    answer: "36",
  },
  {
    question:
      "What percentage of Redditors would choose a self-clean house over a car that never breaks down?",
    answer: "70%",
  },
  {
    question:
      "53k people hate fat squirrels in r/Fatsquirrelhatred. How many ketchup haters are in r/Ketchuphate?",
    answer: "21k",
    options: ["k", "m"],
  },
  {
    question:
      "Australians lead the world in Reddit usage per capita. What percentage of Australians over 16 use Reddit?",
    answer: "33%",
  },
  {
    question:
      "1000 Redditors were polled: “If you had the chance to know the exact date of your death, would you do it?” What percent said ‘No’?",
    answer: "57%",
  },
  { question: "What percentage of Reddit is scared of dogs?", answer: "37%" },
  {
    question:
      "In a study by Hulcr et al, 60 belly buttons were sampled. How many different species of bacteria were found?",
    answer: "2368",
  },
  {
    question:
      "What percentage of Redditors said they wash their hands with soap, then water, as opposed to wetting their hands first?",
    answer: "27%",
  },
  {
    question:
      "A poll in r/polls asked: “Would you prefer extra love, extra time, or extra money?” What percentage of Redditors chose ‘extra time’?",
    answer: "47%",
  },
  {
    question:
      "What percentage of people admit to talking to themselves out loud?",
    answer: "25%",
  },

  {
    question:
      "Let’s find out about Reddit’s gaming preferences! What percent of Reddit gamers prefer first person over third person?",
    answer: "46%",
  },
];

let messageIndex = 0;
let introDone = false;

function changeIntro() {
  if (messageIndex < intro.length) {
    message.textContent = intro[messageIndex];
    messageIndex++;
  } else {
    introDone = true;
    questionRound();
  }
}

const higherLowerOptions =
  "<option value='higher'>Higher</option><option value='lower'>Lower</option>";
let qIndex = 0;
let currentAnswer = null;
let currentDrop = null;
let currentChoice = null;
let answeringPlayer = "p1";
let stored = false;
let storedChoice = false;
let winner = false;
let flipping = false;
let cardGuess = false;
let currentCardGuess = null;
let previousCardValueP1 = null;
let previousCardValueP2 = null;
let firstRoundFlip = true;
let fullAnswer = null;
let freeCardP1 = false;
let freeCardP2 = false;
let roundWinner = null;
let incorrectGuess = false;

function storedAnswer(playerInput, playerSelect, player) {
  let answer = playerInput.value.trim();
  let drop = playerSelect.value;

  if (!answer) return false;

  fullAnswer = answer;
  currentAnswer = parseFloat(answer);
  currentDrop = drop;
  answeringPlayer = player;

  playerInput.value = "";
  playerSelect.innerHTML = "";
  return true;
}

function buttonLighter() {
  if (introDone == true) {
    if (
      incorrectGuess == true ||
      p2Card5flipped == true ||
      p1Card5flipped == true
    ) {
      p1Button.src = "images/p1buttonLit.svg";
      p2Button.src = "images/p2buttonLit.svg";
      incorrectGuess = false;
    }
    if (answeringPlayer == "p1" && (stored == false || winner == "Player 1")) {
      p1Button.src = "images/p1buttonLit.svg";
      p2Button.src = "images/p2button.svg";
    } else if (answeringPlayer == "p1" && stored == true) {
      p2Button.src = "images/p2buttonLit.svg";
      p1Button.src = "images/p1button.svg";
    } else if (
      answeringPlayer == "p2" &&
      (stored == false || winner == "Player 2")
    ) {
      p2Button.src = "images/p2buttonLit.svg";
      p1Button.src = "images/p1button.svg";
    } else if (answeringPlayer == "p2" && stored == true) {
      p1Button.src = "images/p1buttonLit.svg";
      p2Button.src = "images/p2button.svg";
    }
  }
  return;
}

function questionRound() {
  buttonLighter();
  const q = questions[qIndex];
  joel.src = "images/smile.jpg";
  p1Select.innerHTML = "";
  p2Select.innerHTML = "";
  message.textContent = q.question;

  if (answeringPlayer == "p1") {
    if (q.options && q.options.length > 0) {
      q.options.forEach((opt) => {
        const optionEl = document.createElement("option");
        optionEl.value = opt;
        optionEl.textContent = opt;
        p1Select.appendChild(optionEl);
      });
    }
  }
  if (answeringPlayer == "p2") {
    if (q.options && q.options.length > 0) {
      q.options.forEach((opt) => {
        const optionEl = document.createElement("option");
        optionEl.value = opt;
        optionEl.textContent = opt;
        p2Select.appendChild(optionEl);
      });
    }
  }
}

function checkWinner(answeringPlayer) {
  const multipliers = {
    hundred: 100,
    thousand: 1_000,
    million: 1_000_000,
    billion: 1_000_000_000,
    trillion: 1_000_000_000_000,
    m: 1_000_000,
    k: 1_000,
  };

  let numericAnswer = currentAnswer;
  if (currentDrop && multipliers[currentDrop]) {
    numericAnswer *= multipliers[currentDrop];
  }
  const correctAnswer = questions[qIndex].answer;

  let [numberPart, unitPart] = correctAnswer.split(" ");
  let correctNumeric = parseFloat(numberPart);
  if (unitPart && multipliers[unitPart.toLowerCase()]) {
    correctNumeric *= multipliers[unitPart.toLowerCase()];
  }

  let isCorrect = false;
  if (currentChoice === "higher" && correctNumeric > numericAnswer)
    isCorrect = true;
  if (currentChoice === "lower" && correctNumeric < numericAnswer)
    isCorrect = true;

  if (answeringPlayer === "p1") {
    winner = isCorrect ? "Player 2" : "Player 1";
  } else if (answeringPlayer === "p2") {
    winner = isCorrect ? "Player 1" : "Player 2";
  }

  joel.src = "images/correctjoel.jpg";
  message.textContent = `${winner} wins the question round! ${questions[qIndex].question} ${correctAnswer}!`;
  p1Select.innerHTML = "";
  p2Select.innerHTML = "";

  stored = null;
  storedChoice = null;

  return winner;
}

function nextRound() {
  answeringPlayer = answeringPlayer === "p1" ? "p2" : "p1";

  currentAnswer = null;
  currentDrop = null;
  currentChoice = null;
  stored = false;
  storedChoice = false;
  winner = false;
  flipping = false;
  cardGuess = false;
  currentCardGuess = null;
  firstRoundFlip = true;
  fullAnswer = null;
  p1Select.innerHTML = "";
  p2Select.innerHTML = "";

  if (previousCardValueP1) {
    freeCardP1 = true;
  }

  if (previousCardValueP2) {
    freeCardP2 = true;
  }

  // move to next question
  qIndex++;
  questionRound();
}

function nextGame() {
  nextRound();
  p1Card1.src = "images/unflipped card.svg";
  p1Card2.src = "images/unflipped card.svg";
  p1Card3.src = "images/unflipped card.svg";
  p1Card4.src = "images/unflipped card.svg";
  p1Card5.src = "images/unflipped card.svg";
  p2Card1.src = "images/unflipped card.svg";
  p2Card2.src = "images/unflipped card.svg";
  p2Card3.src = "images/unflipped card.svg";
  p2Card4.src = "images/unflipped card.svg";
  p2Card5.src = "images/unflipped card.svg";

  p1Card1flipped = false;
  p1Card2flipped = false;
  p1Card3flipped = false;
  p1Card4flipped = false;
  p1Card5flipped = false;
  p2Card1flipped = false;
  p2Card2flipped = false;
  p2Card3flipped = false;
  p2Card4flipped = false;
  p2Card5flipped = false;

  previousCardValueP1 = null;
  previousCardValueP2 = null;
  freeCardP1 = false;
  freeCardP2 = false;

  round++;
  if (roundWinner == "p1") {
    p1Score++;
  }
  if (roundWinner == "p2") {
    p2Score++;
  }

  roundElement.textContent = round;
  p1ScoreElement.textContent = p1Score;
  p2ScoreElement.textContent = p2Score;
  roundWinner = null;

  return;
}

function higherOrLower(playerSelect) {
  let choice = playerSelect.value;

  if (!choice) return false; // no selection made

  currentChoice = choice; // store globally if you want

  p2Select.innerHTML = "";

  return true;
}

function pickCard(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let chosenCard = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return chosenCard;
}

let incorrectIndex = 0;

function guessCard(currentCardGuess, chosenCard, previousCardValue) {
  if (currentCardGuess === "higher" && chosenCard.value > previousCardValue) {
    return true;
  } else if (
    currentCardGuess === "lower" &&
    chosenCard.value < previousCardValue
  ) {
    return true;
  } else if (currentCardGuess) {
    incorrectGuess = true;
    joel.src = "images/wrongjoel.jpg";
    message.textContent = incorrectMessages[incorrectIndex];
    incorrectIndex++;
    if (incorrectIndex == incorrectMessages.length) {
      incorrectIndex = 0;
    }
    p1Select.innerHTML = "";
    p2Select.innerHTML = "";
    flipping = false;
  }

  return false;
}

function cardFlip() {
  if (winner == "Player 1") {
    if (!p1Card1flipped) {
      chosenCard = pickCard(p1Deck);
      p1Card1.src = chosenCard.src;
      p1Card1flipped = true;
      joel.src = "images/joelsmiley.jpg";
      message.textContent =
        "Player 1, your first card is on the table! Now, will the next card be higher or lower? Pick from the dropdown!";
      previousCardValueP1 = chosenCard.value;
      chosenCard = pickCard(p1Deck);
    } else if (
      !p1Card2flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP1) ||
        freeCardP1 == true)
    ) {
      if (freeCardP1 == true && !cardGuess) {
        freeCardP1 = false;
      }
      p1Card2.src = chosenCard.src;
      p1Card2flipped = true;
      joel.src = "images/smile.jpg";
      message.textContent = "Bam! Second card’s up!";
      previousCardValueP1 = chosenCard.value;
      chosenCard = pickCard(p1Deck);
    } else if (
      !p1Card3flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP1) ||
        freeCardP1 == true)
    ) {
      if (freeCardP1 == true && !cardGuess) {
        freeCardP1 = false;
      }
      p1Card3.src = chosenCard.src;
      p1Card3flipped = true;
      joel.src = "images/joelsmiley.jpg";
      message.textContent = "The third card has entered the chat!";
      previousCardValueP1 = chosenCard.value;
      chosenCard = pickCard(p1Deck);
    } else if (
      !p1Card4flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP1) ||
        freeCardP1 == true)
    ) {
      if (freeCardP1 == true && !cardGuess) {
        freeCardP1 = false;
      }
      p1Card4.src = chosenCard.src;
      p1Card4flipped = true;
      joel.src = "images/smile.jpg";
      message.textContent =
        "Fourth card revealed! Cue the dramatic music. One more to go!";
      previousCardValueP1 = chosenCard.value;
      chosenCard = pickCard(p1Deck);
    } else if (
      !p1Card5flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP1) ||
        freeCardP1 == true)
    ) {
      if (freeCardP1 == true && !cardGuess) {
        freeCardP1 = false;
      }
      p1Card5.src = chosenCard.src;
      p1Card5flipped = true;
      joel.src = "images/joelhappyaf.jpg";
      message.textContent =
        "That’s five cards on the board, and one shiny win in your pocket! Onto the next round!";
      previousCardValueP1 = chosenCard.value;
      roundWinner = "p1";
      flipping = false;
    } else {
      p1Select.innerHTML = "";
      return;
    }
  } else if (winner == "Player 2") {
    if (!p2Card1flipped) {
      chosenCard = pickCard(p2Deck);
      p2Card1.src = chosenCard.src;
      p2Card1flipped = true;
      joel.src = "images/joelsmiley.jpg";
      message.textContent =
        "Player 2, your first card has been revealed. Now the choice is yours: do you think the next card will be higher or lower? Use the dropdown to select your answer.";
      previousCardValueP2 = chosenCard.value;
      chosenCard = pickCard(p2Deck);
    } else if (
      !p2Card2flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP2) ||
        freeCardP2 == true)
    ) {
      if (freeCardP2 == true && !cardGuess) {
        freeCardP2 = false;
      }
      p2Card2.src = chosenCard.src;
      p2Card2flipped = true;
      joel.src = "images/smile.jpg";
      message.textContent =
        "Look at that! The second card. Riveting television, folks.";
      previousCardValueP2 = chosenCard.value;
      chosenCard = pickCard(p2Deck);
    } else if (
      !p2Card3flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP2) ||
        freeCardP2 == true)
    ) {
      if (freeCardP2 == true && !cardGuess) {
        freeCardP2 = false;
      }
      p2Card3.src = chosenCard.src;
      p2Card3flipped = true;
      joel.src = "images/joelsmiley.jpg";
      message.textContent =
        "Another piece of digital cardboard makes its dramatic debut!";
      previousCardValueP2 = chosenCard.value;
      chosenCard = pickCard(p2Deck);
    } else if (
      !p2Card4flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP2) ||
        freeCardP2 == true)
    ) {
      if (freeCardP2 == true && !cardGuess) {
        freeCardP2 = false;
      }
      p2Card4.src = chosenCard.src;
      p2Card4flipped = true;
      joel.src = "images/smile.jpg";
      message.textContent = "Card four is live! Victory draws near.";
      previousCardValueP2 = chosenCard.value;
      chosenCard = pickCard(p2Deck);
    } else if (
      !p2Card5flipped &&
      (guessCard(currentCardGuess, chosenCard, previousCardValueP2) ||
        freeCardP2 == true)
    ) {
      if (freeCardP2 == true && !cardGuess) {
        freeCardP2 = false;
      }
      p2Card5.src = chosenCard.src;
      p2Card5flipped = true;
      joel.src = "images/joelhappyaf.jpg";
      message.textContent =
        "That’s the fifth and final card, and yes… you nailed it. Congratulations, you've won the round!";
      previousCardValueP2 = chosenCard.value;
      roundWinner = "p2";
      flipping = false;
    } else {
      p2Select.innerHTML = "";
      return;
    }
  }
}

p1button.addEventListener("click", () => {
  if (!introDone) {
    changeIntro();
    buttonLighter();
    return;
  }

  if (answeringPlayer == "p1" && stored == false && !flipping) {
    stored = storedAnswer(p1Input, p1Select, "p1");
    if (!stored) return;

    message.textContent = `Player 1 answered: ${fullAnswer} ${currentDrop}! Player 2, higher or lower?`;
    joel.src = "images/thinkingjoel.jpg";
    p2Select.innerHTML = higherLowerOptions;
    buttonLighter();
    return;
  }

  if (answeringPlayer == "p2" && stored == true) {
    storedChoice = higherOrLower(p1Select);
    buttonLighter();
  }

  if (stored == true && storedChoice == true && !flipping) {
    checkWinner(answeringPlayer);
    buttonLighter();
  }

  if (!flipping && winner && firstRoundFlip == true) {
    flipping = true;
    firstRoundFlip = false;
    buttonLighter();
    return;
  }

  if (flipping == true && !cardGuess && winner == "Player 1") {
    cardFlip();
    if (flipping == true) {
      p1Select.innerHTML = higherLowerOptions;
    }
    cardGuess = true;
    buttonLighter();
    return;
  }

  if (flipping == true && cardGuess) {
    currentCardGuess = p1Select.value;
    if (!freeCardP1) {
      guessCard(currentCardGuess, chosenCard, previousCardValueP1);
    }
    cardGuess = false;
    cardFlip();
    buttonLighter();
    return;
  }

  if (!flipping && winner && firstRoundFlip == false) {
    buttonLighter();
    nextRound();
  }

  if (roundWinner) {
    buttonLighter();
    nextGame();
  }
});

p2button.addEventListener("click", () => {
  if (!introDone) {
    changeIntro();
    buttonLighter();
    return;
  }

  if (answeringPlayer == "p2" && stored == false && !flipping) {
    stored = storedAnswer(p2Input, p2Select, "p2");
    if (!stored) return;

    message.textContent = `Player 2 answered: ${fullAnswer} ${currentDrop}! Player 1, higher or lower?`;
    joel.src = "images/thinkingjoel.jpg";
    p1Select.innerHTML = higherLowerOptions;
    buttonLighter();
    return;
  }

  if (answeringPlayer == "p1" && stored == true) {
    storedChoice = higherOrLower(p2Select);
    buttonLighter();
  }

  if (stored == true && storedChoice == true && !flipping) {
    checkWinner(answeringPlayer);
    buttonLighter();
  }

  if (!flipping && winner && firstRoundFlip == true) {
    flipping = true;
    firstRoundFlip = false;
    buttonLighter();
    return;
  }

  if (flipping == true && !cardGuess && winner == "Player 2") {
    cardFlip();
    if (flipping == true) {
      p2Select.innerHTML = higherLowerOptions;
    }
    cardGuess = true;
    buttonLighter();
    return;
  }

  if (flipping == true && cardGuess) {
    currentCardGuess = p2Select.value;
    if (!freeCardP2) {
      guessCard(currentCardGuess, chosenCard, previousCardValueP2);
    }
    cardGuess = false;
    cardFlip();
    buttonLighter();
    return;
  }

  if (!flipping && winner && firstRoundFlip == false) {
    buttonLighter();
    nextRound();
  }

  if (roundWinner) {
    buttonLighter();
    nextGame();
  }
});

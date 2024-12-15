const questions = [
    { question: "What’s most important to you when you invest?", answers: ["Long-term growth", "Quick profits", "Steady income", "A mix of everything"], points: [4, 2, 3, 1] },
    { question: "How much risk are you okay with when you invest?", answers: ["A lot – I’m okay with ups and downs", "Some – I like some risk, but not too much", "Little – I want to play it safe", "Not sure – I need to learn more"], points: [4, 3, 2, 1] },
    { question: "How do you feel about market changes and price swings?", answers: ["I enjoy the excitement", "It’s okay, but I like to be careful", "I don’t like it – I prefer things to be stable", "I don’t really understand it"], points: [4, 3, 2, 1] },
    { question: "How long do you want to wait for your investment to grow?", answers: ["10+ years", "5-10 years", "1-5 years", "A short time for quick gains"], points: [4, 3, 2, 1] },
    { question: "If you suddenly got 500,000 Birr, what would you do with it?", answers: ["Invest in stocks, bonds, and real estate", "Put it all in a high-growth stock", "Buy land or property", "Keep it in a bank or business"], points: [3, 4, 2, 1] },
    { question: "You hear the government is promoting tech startups. What do you do?", answers: ["I’d invest in tech companies", "I’d watch and learn more before investing", "I’d wait until things are more stable", "I’d stick to traditional investments like land"], points: [4, 3, 2, 1] },
    { question: "A local coffee group is doing well and expanding. Would you invest?", answers: ["Yes, coffee is a strong industry in Ethiopia", "I’d consider it after looking into their financials", "I’d stick to safer investments", "No, I don’t trust cooperatives"], points: [4, 3, 2, 1] },
    { question: "A new electric tuk-tuk business is starting in Addis. What do you think?", answers: ["I’d invest, I think electric vehicles are the future", "I’d look into it more before deciding", "I’d wait to see if the business does well", "I prefer traditional industries like farming"], points: [4, 3, 2, 1] },
    { question: "A relative wants you to invest in a family business that’s struggling. What do you do?", answers: ["I’d invest, with the right plan it could succeed", "I’d be careful and want to see a good recovery plan", "I’d avoid it and look for new businesses", "I wouldn’t invest in a family business"], points: [3, 2, 4, 1] },
    { question: "An international company just launched on the Ethiopian Stock Exchange, but their stock price is unstable. What do you do?", answers: ["I’d invest now, it’s a good chance to buy early", "I’d wait and see how it does first", "I’d wait for it to settle down before investing", "I prefer not to invest in unstable stocks"], points: [4, 3, 2, 1] },
    // Add more questions (11-15) here...
];

let currentQuestion = 0;
let totalScore = 0;

function startQuiz() {
    document.getElementById("intro-page").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question-title").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById("question-text").textContent = questionData.question;
    
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";
    
    questionData.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.onclick = () => selectAnswer(index, questionData.points[index]);
        answersContainer.appendChild(answerButton);
    });
}

function selectAnswer(answerIndex, points) {
    totalScore += points;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results-page").style.display = "block";
    
    let resultType = "";
    let resultDescription = "";

    if (totalScore >= 30) {
        resultType = "The Risk-Taker";
        resultDescription = "You enjoy the excitement of investing and are ready to take on some risk for bigger rewards.";
    } else if (totalScore >= 20) {
        resultType = "The Balanced Investor";
        resultDescription = "You look for a mix of safety and growth. You’re open to some risk but prefer stability as well.";
    } else if (totalScore >= 10) {
        resultType = "The Cautious Investor";
        resultDescription = "You prefer a stable, risk-free investment strategy. You like slow and steady returns.";
    } else {
        resultType = "The Conservative Saver";
        resultDescription = "You like to keep things safe and secure, and you are very cautious with your money.";
    }

    document.getElementById("result-description").textContent = resultDescription;
}

function finishQuiz() {
    document.getElementById("results-page").style.display = "none";
    document.getElementById("intro-page").style.display = "block";
    totalScore = 0;
    currentQuestion = 0;
}

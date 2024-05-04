import React, { useState } from 'react';
import './ChorosPage.css';
import chorosImage1 from '../assets/images/choro1.jpg';


const sections = [
  {
    title: "Introduction to Choros",
    content: "Discover the world of Choros, a Brazilian music genre known for its fast and happy rhythm.",
    imageUrl: chorosImage1
  },
  {
    title: "Famous Choros Musicians",
    content: "Learn about iconic musicians like Pixinguinha, who have shaped the Choros scene in Brazil.",
    imageUrl: chorosImage1
  },
  // Adding a quiz section
  {
    title: "Mid-Section Quiz",
    type: "quiz",
    questions: [
      { question: "What is a key characteristic of Choros music?", options: ["Slow and melancholic rhythm", "Fast and happy rhythm", "Use of electronic instruments"], answer: "Fast and happy rhythm" },
      { question: "Which instrument is central to Choros music?", options: ["Guitar", "Violin", "Bandolim"], answer: "Bandolim" }
    ]
  },
  {
    title: "Evolution of Choros",
    content: "Explore how Choros has evolved over the years, integrating modern musical elements.",
    imageUrl: chorosImage1
  },
  {
    title: "Choros Today",
    content: "Understand the current state of Choros music and its influence on contemporary Brazilian culture.",
    imageUrl: chorosImage1
  },
  {
    title: "Final Quiz",
    type: "quiz",
    questions: [
      { question: "What is a hallmark of Choros music?", options: ["Complex harmonies", "Simple rhythms", "Electronic enhancements"], answer: "Complex harmonies" },
      { question: "Which instrument is a mainstay in Choros ensembles?", options: ["Bandolim", "Drum kit", "Electric guitar"], answer: "Bandolim" },
      { question: "How is improvisation used in Choros music?", options: ["Rarely used", "Central to performance", "Only in rehearsals"], answer: "Central to performance" }
    ]
  },
  {
    title: "References",
    content: "Delve deeper into the world of Choros music with these resources.",
    details: [
      "Explore extensive recordings and biographies of notable Choros musicians.",
      "Choros music is discussed in numerous academic papers and music conferences.",
      "Online platforms offer a wide array of Choros performances and tutorials."
    ],
    imageUrl: chorosImage1 // Ensure you have a relevant image or use a placeholder
  }
];

const keywords = [
  { term: "Pixinguinha", definition: "One of the most important figures in the history of Choros, known for his compositions and skill as a flautist." },
  { term: "Bandolim", definition: "A stringed musical instrument similar to a mandolin, commonly used in Choros music." },
  { term: "Choro Club", definition: "Informal gatherings where musicians play Choros music and improvise together, which are essential for the tradition's continuity." }
];

const ChorosPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [correctQuiz, setCorrectQuiz] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAnswer = (question, option) => {
    setQuizAnswers(prev => ({ ...prev, [question]: option }));
  };

  const isAnswerComplete = (questions) => {
    return questions.every(q => quizAnswers.hasOwnProperty(q.question));
  };

  const isAnswerCorrect = (question, answer) => quizAnswers[question] === answer;

  const checkQuizCompletion = () => {
    const currentQuiz = sections[currentIndex].questions;
    if (!isAnswerComplete(currentQuiz)) {
      displayModal('Please answer all questions to proceed.');
      return;
    }
    const allCorrect = currentQuiz.every(q => isAnswerCorrect(q.question, q.answer));
    setCorrectQuiz(allCorrect);
    if (allCorrect) {
      displayModal('Congratulations! You have passed the quiz. You may proceed to the next section.');
    } else {
      let incorrectAnswers = currentQuiz.filter(q => !isAnswerCorrect(q.question, q.answer)).map(q => q.question).join(', ');
      displayModal(`Some answers are incorrect, please review the questions: ${incorrectAnswers}`);
    }
  };

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const nextSection = () => {
    if (correctQuiz || sections[currentIndex].type !== 'quiz') {
      if (currentIndex < sections.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCorrectQuiz(false);
        setQuizAnswers({});
      }
    } else {
      checkQuizCompletion();
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCorrectQuiz(false);
      setQuizAnswers({});
    }
  };

  const renderContent = () => {
    const currentSection = sections[currentIndex];
    const imageComponent = currentSection.imageUrl ? (
      <div className="choros-image-container">
        <img src={currentSection.imageUrl} alt="" />
      </div>
    ) : null;

    if (currentSection.type === 'quiz') {
      return (
        <div className="choros-section-container">
          <div className="choros-text-container">
            <h1>{currentSection.title}</h1>
            <p>Please take a short quiz to continue:</p>
            {currentSection.questions.map((q, index) => (
              <div key={index}>
                <p>{q.question}</p>
                {q.options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(q.question, option)}
                    style={{ margin: '5px', backgroundColor: quizAnswers[q.question] === option ? '#4a6977' : '#ddd' }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
            <button className="choros-submit-button" onClick={checkQuizCompletion}>Submit Answers</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="choros-section-container">
          {imageComponent}
          <div className="choros-text-container">
            <h1>{currentSection.title}</h1>
            <p>{currentSection.content}</p>
          </div>
        </div>
      );
    }
  };

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="choros-page">
      {renderContent()}
      <div className="choros-navigation">
        <button onClick={prevSection} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={nextSection}
          disabled={
            currentIndex === sections.length - 1 ||
            (sections[currentIndex].type === "quiz" && !correctQuiz)
          }
        >
          Next
        </button>
      </div>
      {showModal && (
        <div className="choros-alert-modal">
          <div className="choros-alert-box">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="choros-progress-container">
        <div className="choros-progress-bar" style={{ width: `${progress}%` }}>
          <span className="progress-label">{Math.round(progress)}%</span>
        </div>
      </div>
      <div className="choros-keyword-section">
        {keywords.map((keyword, index) => (
          <div className="choros-keyword-box" key={index}>
            <h4>{keyword.term}</h4>
            <p>{keyword.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChorosPage;
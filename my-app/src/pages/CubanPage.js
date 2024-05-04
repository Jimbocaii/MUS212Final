import React, { useState } from 'react';
import './CubanPage.css';
import cubanImage1 from '../assets/images/cuban1.jpg';
import cubanImage2 from '../assets/images/cuban2.jpg';

const sections = [
  {
    title: "Introduction to Cuban Music",
    content: "Explore the rich tapestry of Cuban music, known for its blend of African and Spanish influences, vibrant rhythms, and distinctive styles like Son, Mambo, and Salsa.",
    imageUrl: cubanImage1
  },
  {
    title: "Famous Cuban Musicians",
    content: "Learn about influential figures such as Celia Cruz, Buena Vista Social Club, and Compay Segundo, who have played pivotal roles in popularizing Cuban music worldwide.",
    imageUrl: cubanImage2
  },
  {
    title: "Mid-Section Quiz",
    type: "quiz",
    questions: [
      { question: "What is a key characteristic of Cuban music?", options: ["Use of electronic instruments", "Influence of African rhythms", "Primarily classical compositions"], answer: "Influence of African rhythms" },
      { question: "Which famous Cuban musician is known for popularizing salsa globally?", options: ["Celia Cruz", "Marc Anthony", "Tito Puente"], answer: "Celia Cruz" }
    ]
  },
  {
    title: "The Revolution and Music",
    content: "Examine how the Cuban Revolution influenced the music industry, fostering a new era of artistic expression aligned with ideological changes.",
    imageUrl: cubanImage1
  },
  {
    title: "Modern Cuban Music",
    content: "Delve into the evolution of Cuban music in the modern era, exploring new genres and the global influence of Cuban sounds.",
    imageUrl: cubanImage2
  },
  {
    title: "Final Quiz",
    type: "quiz",
    questions: [
      { question: "Which famous Cuban musician is known as the Queen of Salsa?", options: ["Celia Cruz", "Omara Portuondo", "La Lupe"], answer: "Celia Cruz" },
      { question: "What instrument is iconic to Cuban Son music?", options: ["Tres", "Bongo", "Trumpet"], answer: "Tres" },
      { question: "Which Cuban music style influenced modern salsa?", options: ["Son Cubano", "Bolero", "Guaracha"], answer: "Son Cubano" }
    ]
  },
  {
    title: "References",
    content: "For more details, explore the works and influence of these musicians at major music libraries and online platforms.",
    details: [
      "Biographies and recordings of famous Cuban musicians are available globally.",
      "Music journals and academic articles often explore the evolution of Cuban music.",
      "Various documentaries and books can provide further insights into Cuban music history."
    ],
    imageUrl: cubanImage2 // Ensure you have a relevant image or use a placeholder
  }
];

const keywords = [
  { term: "Son Cubano", definition: "A genre of music and dance that originated in the highlands of eastern Cuba during the late 19th century. It is a synthesis of Spanish canción and guitar with African rhythms and percussion instruments of Bantu origin." },
  { term: "Mambo", definition: "A genre of Cuban dance music pioneered by Cachao and popularized by Perez Prado and Benny Moré in the 1940s and 1950s, which influenced modern salsa music." },
  { term: "Salsa", definition: "A popular dance music genre that initially arose in New York City during the 1960s. Salsa is a product of various musical genres including the Cuban son montuno, guaracha, cha cha chá, mambo, and to a certain extent bolero, and the Puerto Rican bomba and plena." },
  { term: "Guajira", definition: "A rural form of music that originated in the eastern region of Cuba. It combines lyrical poetry and narrative verse with the musical qualities of Spanish cancionero and guitar with African rhythms." },
  { term: "Rumba", definition: "A secular genre of Cuban music involving dance, percussion, and song. It originated in the northern regions of Cuba, mainly in urban Havana and Matanzas, during the late 19th century." }
];

const CubanPage = () => {
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
    const allAnswersProvided = isAnswerComplete(currentQuiz);
    if (!allAnswersProvided) {
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
      <div className="cuban-image-container">
        <img src={currentSection.imageUrl} alt="" />
      </div>
    ) : null;

    if (currentSection.type === 'quiz') {
      return (
        <div className="cuban-section-container">
          <div className="cuban-text-container">
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
            <button className="cuban-submit-button" onClick={checkQuizCompletion}>Submit Answers</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cuban-section-container">
          {imageComponent}
          <div className="cuban-text-container">
            <h1>{currentSection.title}</h1>
            <p>{currentSection.content}</p>
          </div>
        </div>
      );
    }
  };

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="cuban-page">
      {renderContent()}
      <div className="cuban-navigation">
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
        <div className="cuban-alert-modal">
          <div className="cuban-alert-box">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <div className="cuban-progress-container">
        <div className="cuban-progress-bar" style={{ width: `${progress}%` }}>
          <span className="progress-label">{Math.round(progress)}%</span>
        </div>
      </div>
      <div className="cuban-keyword-section">
        {keywords.map((keyword, index) => (
          <div className="cuban-keyword-box" key={index}>
            <h4>{keyword.term}</h4>
            <p>{keyword.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubanPage;

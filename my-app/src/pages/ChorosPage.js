import React, { useState } from 'react';
import './ChorosPage.css';
import chorosImage1 from '../assets/images/choro1.jpg';
import chorosImage2 from '../assets/images/choro2.jpg';
import chorosImage3 from '../assets/images/choro3.jpg';
import chorosImage4 from '../assets/images/choro4.jpg';
import chorosImage5 from '../assets/images/choro5.jpg';
import chorosImage6 from '../assets/images/choro6.jpg';
import reference from '../assets/images/reference2.jpg';



const sections = [
  {
    title: "Introduction to Choros",
    content: "A Brazilian music genre known for its fast and happy rhythm.",
    details: [
      "Choros originated in 19th century Rio de Janeiro as a blend of European polka and African rhythms.",
      "Typically in a fast and happy/exciting rhythm",
      "Traditionally, it involves complex melodies and counterpoints that challenge even skilled musicians.",
      "It's celebrated for its improvisational nature, allowing musicians to express creativity within structured compositions."
    ],
    imageUrl: chorosImage1
  },
  {
    title: "Famous Choros Musicians",
    content: "Iconic musicians who have shaped the Choros scene in Brazil.",
    details: [
      "Pixinguinha is credited with transforming Choros into a respected music genre through his sophisticated arrangements and compositions.",
      "Other key figures include Jacob do Bandolim and Waldir Azevedo, both revered for their contributions to modern Choros.",
      "These musicians are noted for their technical mastery and emotional depth, which have left a lasting impact on Brazilian music."
    ],
    imageUrl: chorosImage5
  },
  {
    title: "Choros Instruments",
    content: "Explore the diverse range of instruments used in Choros music.",
    details: [
      "The bandolim is a staple instrument in Choros ensembles, known for its bright tone and virtuosic playing style.",
      "Other common instruments include the cavaquinho, a small guitar-like instrument, and the pandeiro, a Brazilian tambourine.",
      "Choros groups often feature a variety of wind instruments such as the flute, clarinet, and saxophone, adding richness to the ensemble sound."
    ],
    imageUrl: chorosImage2
  },
  {
    title: "Choros Dance and Culture",
    content: "Cultural aspects and dance traditions associated with Choros.",
    details: [
      "Choros music is often accompanied by lively dance styles such as the maxixe and the samba, reflecting Brazil's vibrant cultural heritage.",
      "The music's infectious rhythms and joyful melodies encourage spontaneous dancing and celebration.",
      "Choros culture celebrates community and inclusivity, with gatherings ranging from informal jam sessions to elaborate street festivals."
    ],
    imageUrl: chorosImage6
  },
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
    content: "Integrating modern musical elements.",
    details: [
      "In the 20th century, Choros absorbed influences from jazz and samba, enriching its harmonic complexity.",
      "Contemporary musicians continue to experiment with Choros, blending it with genres like funk and hip-hop.",
      "This evolution has helped Choros remain relevant in Brazil's vibrant music scene, continually attracting new audiences."
    ],
    imageUrl: chorosImage3
  },
  {
    title: "Choros Today",
    content: "Current state of Choros music and its influence on contemporary Brazilian culture.",
    details: [
      "Choros remains a popular genre in urban centers, with lively performances in clubs and at street festivals.",
      "It's recognized as a symbol of Brazilian cultural identity and resilience, celebrated in both formal and informal settings.",
      "Musicians and composers innovate within the genre by introducing global music influences while preserving traditional Choros forms."
    ],
    imageUrl: chorosImage4
  },
  {
    title: "Final Quiz",
    type: "quiz",
    questions: [
      { question: "How has Choros music evolved in the 20th century?", options: ["By incorporating elements from rock music", "By integrating jazz and samba influences", "By returning to its classical roots"], answer: "By integrating jazz and samba influences" },
      { question: "What does the role of improvisation play in Choros music?", options: ["It is discouraged", "It is central to performance", "It is reserved for rehearsals"], answer: "It is central to performance" },
      { question: "Which setting is NOT commonly associated with live Choros performances?", options: ["Large concert halls", "Street festivals", "Music clubs"], answer: "Large concert halls" }
    ]
  },
  {
    title: "References",
    content: "",
    details: [
      "Miller, Richard. “African Rhythms in Brazilian Popular Music: Tango Brasileiro, Maxixe and Choro.” Luso-Brazilian Review, vol. 48, no. 1, 2011, pp. 6–35. JSTOR, http://www.jstor.org/stable/41342566.",
      "Reily, Suzel Ana. “Introduction: Brazilian Musics, Brazilian Identities.” British Journal of Ethnomusicology, vol. 9, no. 1, 2000, pp. 1–10. JSTOR, http://www.jstor.org/stable/3060787. "
    ],
    imageUrl: reference
  }
];

const keywords = [
  { term: "Pixinguinha", definition: "One of the most important figures in the history of Choros, known for his compositions and skill as a flautist." },
  { term: "Jacob do Bandolim", definition: "Renowned Choros musician and composer, recognized for his virtuosic bandolim playing and innovative compositions." },
  { term: "Waldir Azevedo", definition: "Influential Choros musician known for popularizing the choro genre with his compositions and performances on the cavaquinho." },
  { term: "Cavaquinho", definition: "A small, four-stringed guitar-like instrument commonly used in Choros music, known for its bright and lively sound." },
  { term: "Pandeiro", definition: "A Brazilian tambourine often used in Choros ensembles to provide rhythmic accompaniment and percussive flair." },
  { term: "Maxixe", definition: "A lively Brazilian dance style closely associated with Choros music, characterized by quick footwork and playful movements." }
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
            <ul>
              {currentSection.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
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
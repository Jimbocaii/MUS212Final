import React, { useState } from 'react';
import './VillaLobosPage.css';
import villalobos1 from '../assets/images/villalobos1.jpg';
import villalobos2 from '../assets/images/villalobos2.jpg';
import villalobos3 from '../assets/images/villalobos3.jpg';
import villalobos4 from '../assets/images/villalobos4.jpg';
import villalobos5 from '../assets/images/villalobos5.jpg';
import villalobosSOLO from '../assets/images/villalobosSOLO.jpg';
import reference from '../assets/images/reference1.jpg';


const sections = [
  {
    title: "The Maestro of Blended Traditions",
    content: "Explore Villa-Lobos' innovative fusion of Brazilian folk and European classical music.",
    details: [
      "Villa-Lobos merged samba and choro with classical forms, crafting a modern Brazilian musical identity.",
      "He integrated indigenous and Afro-Brazilian sounds, showcasing Brazil’s diverse cultural tapestry.",
      "This unique blend elevated Brazilian music on the global stage, influencing both folk and classical genres worldwide."
    ],
    imageUrl: villalobos1
  },
  {
    title: "Guitar Virtuoso: Villa-Lobos's Signature Works",
    content: "Discover the depth of Villa-Lobos' guitar compositions.",
    details: [
      "His 'Chôros' series introduced novel rhythmic structures, blending them with traditional melodies.",
      "The 'Preludes' showcase innovative guitar techniques, highlighting the instrument's expressive potential. Each of the Preludes have a meaning of why he wrote them and varies in styles dramatically",
      "He wrote 5 Preludes for Solo guitar",
      "These works are essential in classical guitar curricula globally, celebrated for their technical and cultural depth."
    ],
    imageUrl: villalobosSOLO
  },
  {
    title: "The Cultural Ambassador: Music Meets Politics",
    content: "How Villa-Lobos used music as a tool for political and cultural expression.",
    details: [
      "During the Estado Novo regime, Villa-Lobos directed national music educationas a director, promoting Brazilian unity.",
      "His international tours acted as cultural diplomacy, promiting and representing Brazil's cultural prestige amid political shifts.",
      "His compositions subtly carries messages of Brazilian nationalism, reflecting and shaping Brazil’s national identity."
    ],
    imageUrl: villalobos3
  },
  {
    title: "Mid-Section Quiz",
    type: "quiz",
    questions: [
      {
        question: "Which of Villa-Lobos's series blends elements of Brazilian folk with classical guitar technique?",
        options: ["Chôros", "Bachianas Brasileiras", "Preludes"],
        answer: "Chôros"
      },
      {
        question: "How did Villa-Lobos use his international tours to benefit Brazilian culture?",
        options: ["By promoting Brazilian dance", "By conducting cultural diplomacy", "By organizing music festivals"],
        answer: "By conducting cultural diplomacy"
      }
    ]
  },
  {
    title: "Rhythmic Innovations: Breaking Boundaries",
    content: "Villa-Lobos's compositions reflect his mastery of rhythm, inspired by Brazil’s natural sounds.",
    details: [
      "He used polyrhythms and syncopation to represent the sounds of the Brazilian rainforest.",
      "His innovative use of rhythm brought new life to classical music, incorporating elements of Brazilian dances and festivals.",
      "These rhythmic innovations made his works stand out, adding a lively, dynamic quality to classical performances.",
      "Elements from Operas, Bach and Vocals can often be heard in most of his compositions"
    ],
    imageUrl: villalobos4
  },
  {
    title: "Echoes of Modernity: Villa-Lobos’s Lasting Influence",
    content: "Villa-Lobos's profound impact on modern music.",
    details: [
      "He pioneered blending different techniques from different cultures and composers. WHich has influenced a broad spectrum of music genres and composers globally.",
      "His approach to composition and adaptation has established him as a foundational figure in 20th-century classical and Brazillian music.",
      "Composers and musicians worldwide continue to draw inspiration from his innovative use of form and harmony."
    ],
    imageUrl: villalobos5
  },
  {
    title: "Innovations in Chamber Music",
    content: "Explore Villa-Lobos's contributions to chamber music.",
    details: [
      "His 17 string quartets showcase a fusion of Brazilian folk elements with classical chamber music structures.",
      "His chamber music features innovative instrumentation, often including non-traditional combinations that challenge conventional forms.",
      "These compositions are renowned for their complexity, modernism and have influenced different chamber music repertoire and composition internationally."
    ],
    imageUrl: villalobos2
  },
  {
    title: "Villa-Lobos's Global Impact",
    content: "Explore the international influence of Villa-Lobos's music.",
    details: [
      "His pedagogical and compositional methods are integral to music education curricula worldwide, inspiring new generations.",
      "Performed internationally, his works underscore the adaptability and appeal of his musical innovations.",
      "His efforts paved the way for future cross-cultural collaborations, building a lasting global legacy."
    ],
    imageUrl: villalobos1
  },
  {
    title: "Final Quiz",
    type: "quiz",
    questions: [
      {
        question: "What rhythmic element did Villa-Lobos employ to mimic the natural sounds of the Brazilian environment?",
        options: ["Polysynthetics", "Polyrhythms", "Homorhythms"],
        answer: "Polyrhythms"
      },
      {
        question: "Which of Villa-Lobos's works is known for integrating a variety of instrumental combinations and challenging conventional norms in chamber music?",
        options: ["Bachianas Brasileiras", "Chôros", "His string quartets"],
        answer: "His string quartets"
      },
      {
        question: "How did Villa-Lobos's music contribute to global cultural collaborations?",
        options: ["By using universally understood musical structures", "By influencing music education curricula worldwide", "By incorporating modern electronic music elements"],
        answer: "By influencing music education curricula worldwide"
      }
    ]
  },
  {
    title: "References",
    details: [
      "Garcia, Thomas G. “The ‘Choro’, the Guitar and Villa-Lobos.” Luso-Brazilian Review, vol. 34, no. 1, 1997, pp. 57–66. JSTOR, http://www.jstor.org/stable/3513804. Accessed 4 April 2024.",
      "Simon Wright. “Villa-Lobos: Modernism in the Tropics.” The Musical Times, vol. 128, no. 1729, 1987, pp. 132–35. JSTOR, https://doi.org/10.2307/964493. Accessed 5 April 2024.",
      "Vassberg, David E. “Villa-Lobos: Music as a Tool of Nationalism.” Luso-Brazilian Review, vol. 6, no. 2, 1969, pp. 55–65. JSTOR, http://www.jstor.org/stable/3512733. Accessed 4 April 2024.",
      "de Oliveira Pinto, Tiago. “‘Art Is Universal’ - On Nationalism and Universality in the Music of Heitor Villa-Lobos.” The World of Music, vol. 29, no. 2, 1987, pp. 104–16. JSTOR, http://www.jstor.org/stable/43562744. Accessed 4 April 2024."
    ],
    imageUrl: reference 
  }
];





const keywords = [
  { term: "Chôro", definition: "A Brazilian music style that combines elements of European march and African rhythms, significantly shaped by Villa-Lobos." },
  { term: "Nationalism", definition: "Villa-Lobos used his compositions to express and foster a sense of Brazilian national identity, often aligning with governmental cultural policies." },
  { term: "Orchestration", definition: "He was known for his ability to orchestrate music thatfully leveraged the diverse sounds and textures of orchestral instruments to depict Brazilian musical themes." },
  { term: "Modernity", definition: "Villa-Lobos's work embodies the spirit of modernity, merging traditional forms with avant-garde techniques to create new musical expressions." },
  { term: "Polyrhythms", definition: "Refers to the simultaneous use of two or more conflicting rhythms, a technique often used by Villa-Lobos to enrich the textural complexity of his compositions." },
  { term: "Cultural Diplomacy", definition: "He utilized his music as a form of cultural diplomacy, enhancing Brazil's cultural prestige internationally through his compositions and international tours." },
  { term: "Music Education", definition: "Villa-Lobos significantly contributed to music education in Brazil, developing curricula and organizing large-scale orchestra and choir performances to promote music learning." },
  { term: "Avant-Garde", definition: "His approach was considered avant-garde for his time, pushing the boundaries of music with innovative structures and harmonies." },
  { term: "Syncretism", definition: "The blending of different religious, cultural, or musical practices, as seen in Villa-Lobos's fusion of Brazilian folk and European classical music traditions." }
];


const VillaLobosPage = () => {
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

  const displayModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

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
      <div className="lobos-image-container">
        <img src={currentSection.imageUrl} alt={''} />
      </div>
    ) : null;
  
    if (currentSection.type === 'quiz') {
      return (
        <div className="lobos-section-container">
          <div className="lobos-text-container">
            <h1>{currentSection.title}</h1>
            <p>Please take a short quiz to continue:</p>
            {renderQuiz(currentSection.questions)}
            <button className="lobos-submit-button" onClick={checkQuizCompletion}>Submit Answers</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="lobos-section-container">
          {imageComponent}
          <div className="lobos-text-container">
            <h1>{currentSection.title}</h1>
            <p>{currentSection.content}</p>
            <ul>
              {currentSection.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
          </div>
        </div>
      );
    }
  };
  
  const renderQuiz = (questions) => (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map(option => (
            <button
              key={option}
              onClick={() => handleAnswer(q.question, option)}
              style={{ margin: '7px', backgroundColor: quizAnswers[q.question] === option ? '#4a6977' : '#ddd' }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="lobos-page">
      <div className="lobos-section-container">
        {renderContent()}
      </div>
      <div className="lobos-navigation">
        <button onClick={prevSection} disabled={currentIndex === 0}>Previous</button>
        <button onClick={nextSection} disabled={currentIndex === sections.length - 1 || (sections[currentIndex].type === 'quiz' && !correctQuiz)}>Next</button>
      </div>
      <div className="lobos-progress-container">
        <div className="lobos-progress-bar" style={{ width: `${progress}%` }}>
          <span className="progress-label">{Math.round(progress)}%</span>
        </div>
      </div>
      <div className="lobos-keyword-section">
        {keywords.map((keyword, index) => (
          <div className="lobos-keyword-box" key={index}>
            <h4>{keyword.term}</h4>
            <p>{keyword.definition}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="lobos-alert-modal">
          <div className="lobos-alert-box">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VillaLobosPage;
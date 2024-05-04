import React, { useState } from 'react';
import './VillaLobosPage.css';
import villalobos1 from '../assets/images/villalobos1.jpg';
import villalobos2 from '../assets/images/villalobos2.jpg';


const sections = [
  { title: "Who is Villa-Lobos?", 
    content: "Heitor Villa-Lobos was a Brazilian composer, conductor, cellist, and guitarist known for his creative compositions that blend Western classical music with Brazilian folk music.", 
    details: ["Influential in the development of Brazilian art music.", "Used elements from both Brazilian folk music and European classical music.", "His compositions include symphonies, operas, and chamber music.", "Promoted Brazilian music globally.", "His style is characterized by originality and innovation."], 
    imageUrl: villalobos1
  },
  { title: "His Famous Works", 
    content: "Villa-Lobos is best known for his Bachianas Brasileiras series, Chôros, and his operas which incorporate a variety of Brazilian music styles and instruments.", 
    details: ["Bachianas Brasileiras are a fusion of Brazilian folk music and the style of Johann Sebastian Bach.", "Chôros introduces a new style inspired by street music of Rio de Janeiro.", "His operas often feature themes of Brazilian nationalism and folklore.", "His works have been performed internationally.", "Villa-Lobos was a pioneer in using Brazilian indigenous music and rhythms in orchestral compositions."], 
    imageUrl: villalobos1 
  },
  { title: "Music and Brazil's Political Connection", 
    content: "His works were influenced by and also influenced the Brazilian government and its policies, promoting a sense of national identity through music.", 
    details: ["His music served as a cultural symbol during the era of Getúlio Vargas.", "Villa-Lobos worked as a music educator and created orchestras during the Estado Novo.", "His compositions are seen as expressions of Brazilian nationalism.", "He used his music to foster a sense of Brazilian unity and pride.", "Villa-Lobos's music reflects the political and social ethos of his times."], 
    imageUrl: villalobos1 
  },
  { title: "Mid-Section Quiz", type: "quiz", questions: [
    { question: "What is a key characteristic of Villa-Lobos's music?", options: ["Use of Brazilian folk music", "Exclusively classical compositions", "Minimalist style"], answer: "Use of Brazilian folk music" },
    { question: "Which music series by Villa-Lobos is inspired by Bach?", options: ["Symphonies", "Bachianas Brasileiras", "Chôros"], answer: "Bachianas Brasileiras" },
    { question: "What was Villa-Lobos's role in Brazil's Estado Novo?", options: ["Politician", "Music educator", "Ambassador"], answer: "Music educator" }
  ]},
  { title: "Exploration of Rhythms", 
    content: "Villa-Lobos explored the rhythms of Brazilian music, incorporating these elements into his classical compositions.", 
    details: ["He integrated diverse Brazilian rhythms into his works.", "Rhythmic innovation is a hallmark of his style.", "Explored polyrhythms and syncopation.", "His rhythmic complexity adds a unique texture to his compositions.", "Rhythms often mimic the natural sounds of the Brazilian landscape."], 
    imageUrl: villalobos2
  },
  { title: "Influence on Modern Music", 
    content: "His innovative techniques and styles have left a lasting impact on modern music, influencing many contemporary composers and musicians.",  
    details: ["His compositions influenced 20th-century music globally.", "Villa-Lobos's approach has inspired a range of music genres.", "His works continue to be studied for their innovative use of form and harmony.", "He has influenced composers in both classical and popular music spheres.", "Villa-Lobos's legacy is evident in the continued performance and recording of his works."], 
    imageUrl: villalobos1
  },
  { title: "Legacy and Recognition", 
    content: "Today, Villa-Lobos is celebrated as one of the most important figures in classical music of the 20th century.", 
    details: ["He is recognized globally for his contributions to classical music.", "Villa-Lobos's music is a staple in the repertoires of world-class orchestras.", "Numerous recordings of his works have been made.", "Music festivals dedicated to his music are held regularly.", "He has been the subject of extensive musicological research and publications."],
    imageUrl: villalobos1
  },
  { title: "Final Quiz", type: "quiz", questions: [
    { question: "Which element did Villa-Lobos famously incorporate into his classical music compositions?", options: ["Modern pop elements", "Traditional Brazilian instruments", "Electronic music"], answer: "Traditional Brazilian instruments" },
    { question: "How did Villa-Lobos contribute to music education in Brazil?", options: ["Developed a new curriculum", "Ignored it", "Focused only on performance"], answer: "Developed a new curriculum" },
    { question: "Is Villa-Lobos's music considered avant-garde for its time?", options: ["Yes", "No"], answer: "Yes" }
  ]},
  { title: "References", 
    content: "For more details, explore his detailed biography, recordings, and impact on music at major music libraries and websites.", 
    details: ["Villa-Lobos's music is archived in major libraries worldwide.", "Recordings of his works are widely available.", "Biographies of Villa-Lobos can provide deeper insights into his life and works.", "Academic articles and music journals frequently discuss his impact on music.", "Online platforms offer extensive resources for listening to and studying his compositions."], 
    imageUrl: villalobos2 
  }
];

const keywords = [
  { term: "Cannibalism", definition: "In cultural studies, refers to the absorption and adaptation of cultural elements from colonizers by colonized societies, as seen in Villa-Lobos's music." },
  { term: "Modernism", definition: "Musical modernism in Brazil was heavily influenced by Villa-Lobos who combined traditional Brazilian music with contemporary classical techniques." },
  { term: "Nationalism", definition: "Villa-Lobos used music as a form of national expression, promoting Brazilian identity through his compositions." },
  { term: "Folklore", definition: "He often incorporated Brazilian folklore into his music, bringing native themes and stories to a global audience." },
  { term: "Avant-Garde", definition: "Villa-Lobos was considered avant-garde for his time, pushing the boundaries of music with innovative structures and harmonies." }
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
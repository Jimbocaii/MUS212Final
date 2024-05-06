import React, { useState } from 'react';
import './CubanPage.css';
import cubanImage1 from '../assets/images/cuban1.jpg';
import cubanImage3 from '../assets/images/cuban3.jpg';
import cubanImage4 from '../assets/images/cuban4.jpg';
import cubanImage5 from '../assets/images/cuban5.jpg';
import reference from '../assets/images/reference3.png';

const sections = [
  {
    title: "Introduction to Cuban Music",
    content: "Known for its blend of African and Spanish influences, vibrant rhythms, and distinctive styles like Son, Mambo, and Salsa.",
    imageUrl: cubanImage1,
    details: [
      "Cuban music is deeply rooted in a fusion of African and Spanish musical traditions.",
      "Key genres of Cuban music include Son, Mambo, Salsa, Guajira, and Rumba.",
      "Instruments like the Tres, Bongo, and Trumpet play integral roles in Cuban music.",
      "Famous Cuban musicians such as Celia Cruz and Buena Vista Social Club have globally popularized Cuban music."
    ]
  },
  {
    title: "Nostalgia and Homesickness in Elder Cuban-Americans",
    content: "Insight of Cuban-Americans as they navigate feelings of homesickness and nostalgia for their homeland, expressed through music and cultural connections.",
    imageUrl: cubanImage5,
    details: [
      "Elderly Cuban-Americans often experience a profound sense of homesickness and nostalgia for their homeland, Cuba. Having left behind their familiar surroundings, they look for a longing to reconnect with the places, people, and traditions of their youth.",
      "Music serves as a powerful tool for expressing and coping with these feelings of displacement and longing. Through melodies infused with the rhythms of their homeland, elder Cuban-Americans find solace and connection, transporting themselves back to cherished memories of their past.",
      "Cuban-American literature explores the complexities of cultural identity and belonging, reflecting the experiences of elder Cuban-Americans. The authors describes the struggles of navigating between two cultures while preserving one's sense of identity.",
      "Themes of cultural displacement and longing for home permeate the narratives of elder Cuban-Americans, echoing the universal human experience of exile. Whether through literature, music, or personal reflections, elderly Cuban-Americans confront the bittersweet reality of living in a new land while yearning for the familiarity of their homeland."
    ]
  },
  {
    title: "Mid-Section Quiz",
    type: "quiz",
    questions: [
      { question: "What is a key influence of Cuban music?", options: ["Use of electronic instruments", "Influence of African and Spanish rhythms", "Primarily classical compositions"], answer: "Influence of African and Spanish rhythms" },
      { question: "Which famous Cuban musician is known for popularizing salsa globally?", options: ["Celia Cruz", "Marc Anthony", "Tito Puente"], answer: "Celia Cruz" },
      { question: "According to the details provided in the Nostalgia and Homesickness in Elder Cuban-Americans section, what serves as a powerful tool for expressing and coping with feelings of displacement and longing?", options: ["Music", "Art", "Literature"], answer: "Music" }
    ]
  },
  {
    title: "The Revolution and Music",
    content: "Cuban Revolution influenced the music industry, fostering a new era of artistic expression aligned with ideological changes.",
    imageUrl: cubanImage3,
    details: [
      "The Cuban Revolution of 1959 brought about significant changes in the music industry, reshaping the cultural landscape of the country. As part of the revolutionary agenda, music was seen as a powerful tool for promoting socialist ideals and fostering national identity.",
      "Artistic expression became aligned with ideological shifts, with musicians encouraged to create music that reflected the revolutionary spirit and celebrated the achievements of the Cuban people. Themes of social justice, equality, and solidarity permeated the lyrics and melodies of songs produced during this era.",
      "New genres and styles emerged during this period, reflecting the revolutionary fervor and cultural identity of Cuba. Revolutionary songs, known as 'nueva trova,' became popular, characterized by their poetic lyrics and acoustic instrumentation.",
      "In addition to promoting revolutionary themes, the Cuban government also placed a renewed focus on traditional Cuban music and indigenous rhythms.",
    ]
  },
  {
    title: "Modern Cuban Music",
    content: "Evolution of Cuban music in the modern era",
    imageUrl: cubanImage4,
    details: [
      "Modern Cuban music continues to evolve, incorporating contemporary influences while maintaining traditional roots.",
      "Cuban artists blend diverse musical styles and global influences, contributing to the richness and diversity of the global music landscape.",
      "Cuban music festivals and events showcase the vibrancy and innovation of modern Cuban music."
    ]
  },
  {
    title: "Final Quiz",
    type: "quiz",
    questions: [
      { question: "How does modern Cuban music continue to evolve?", options: ["Incorporating contemporary influences", "Maintaining traditional roots", "Focusing solely on traditional Cuban rhythms"], answer: "Incorporating contemporary influences" },
      { question: "What themes spread the lyrics and melodies of songs produced during the era influenced by the Cuban Revolution?", options: ["Social justice, equality, and solidarity", "Individualism and capitalism", "Religious devotion and spirituality"], answer: "Social justice, equality, and solidarity" },
      { question: "WHow do Cuban music festivals and events contribute to the promotion of modern Cuban music?", options: ["They showcase the vibrancy and innovation of modern Cuban music", "They exclusively feature traditional Cuban music", "They focus on international music genres"], answer: "They showcase the vibrancy and innovation of modern Cuban music" }
    ]
  },
  {
    title: "References",
    content: "",
    details: [
      "The Natural Exile: A Study Of Twenty-First Century Cuban-American Narratives Focusing On The Elderly's Plight.(2019).",
      "Sierra, Horacio. “The Cuban-American Sound Machine: Nostalgia and Identity in the Music of Celia Cruz, Gloria Estefan and Pitbull.” International Journal of Cuban Studies, vol. 10, no. 2, 2018, pp. 238–65. JSTOR, https://doi.org/10.13169/intejcubastud.10.2.0238."
    ],
    imageUrl: reference 
  }
];

const keywords = [
  { term: "Son Cubano", definition: "A genre of music and dance that originated in the highlands of eastern Cuba during the late 19th century. It is a synthesis of Spanish canción and guitar with African rhythms and percussion instruments of Bantu origin." },
  { term: "Mambo", definition: "A genre of Cuban dance music pioneered by Cachao and popularized by Perez Prado and Benny Moré in the 1940s and 1950s, which influenced modern salsa music." },
  { term: "Salsa", definition: "A popular dance music genre that initially arose in New York City during the 1960s. Salsa is a product of various musical genres including the Cuban son montuno, guaracha, cha cha chá, mambo, and to a certain extent bolero, and the Puerto Rican bomba and plena." },
  { term: "Guajira", definition: "A rural form of music that originated in the eastern region of Cuba. It combines lyrical poetry and narrative verse with the musical qualities of Spanish cancionero and guitar with African rhythms." },
  { term: "Rumba", definition: "A secular genre of Cuban music involving dance, percussion, and song. It originated in the northern regions of Cuba, mainly in urban Havana and Matanzas, during the late 19th century." },
  { term: "Cuban-American Literature", definition: "Literature produced by Cuban-American authors, often exploring themes of cultural identity, displacement, and the immigrant experience. It provides nuanced insights into the complexities of exile and longing for homeland." },
  { term: "Homesickness", definition: "A feeling of longing or nostalgia for one's home or homeland, often accompanied by a sense of dislocation or displacement. Elderly Cuban-Americans may experience homesickness for their native Cuba, expressing it through cultural connections like music." },
  { term: "Nostalgia", definition: "A sentimental longing or wistful affection for the past, typically for a period or place with happy personal associations. Elderly Cuban-Americans may feel nostalgia for their homeland, reminiscing about familiar traditions, music, and cultural experiences." },
  { term: "Cultural Displacement", definition: "The sense of dislocation or estrangement experienced when individuals are removed from their familiar cultural environment. Elderly Cuban-Americans may grapple with cultural displacement as they navigate changing societal norms and values in a new country." }
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

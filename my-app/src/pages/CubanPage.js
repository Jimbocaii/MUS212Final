import React, { useState } from 'react';
import './CubanPage.css'; 


const sections = [
  { title: "Introduction to Cuban Music", content: "Explore the rich tapestry of Cuban music, known for its blend of African and Spanish influences, vibrant rhythms, and distinctive styles like Son, Mambo, and Salsa." },
  { title: "Famous Cuban Musicians", content: "Learn about influential figures such as Celia Cruz, Buena Vista Social Club, and Compay Segundo, who have played pivotal roles in popularizing Cuban music worldwide." },
  { title: "Afro-Cuban Influences", content: "Discover how African musical elements have been integral in shaping the unique sounds of Cuban music, from religious rituals to dance music." },
  { title: "The Revolution and Music", content: "Examine how the Cuban Revolution influenced the music industry, fostering a new era of artistic expression aligned with ideological changes." },
  { title: "Modern Cuban Music", content: "Delve into the evolution of Cuban music in the modern era, exploring new genres and the global influence of Cuban sounds." }
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
  const maxIndex = sections.length - 1;

  const nextSection = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="cuban-page">
      <div className="cuban-section-container">
        <h1>{sections[currentIndex].title}</h1>
        <p>{sections[currentIndex].content}</p>
      </div>
      <div className="cuban-navigation">
        <button onClick={prevSection} disabled={currentIndex === 0}>Previous</button>
        <button onClick={nextSection} disabled={currentIndex === maxIndex}>Next</button>
      </div>
      <div className="cuban-progress-container">
        <div className="cuban-progress-bar" style={{ width: `${progress}%` }}></div>
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

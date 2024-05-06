import React from 'react';
import './RecordingPage.css'; // Ensure this CSS file is correctly linked

const RecordingPage = () => {
  return (
    <div className="recording-page">
      <h1 className="recording-header">Performance Recordings</h1>
      <div className="video-container">
        <div className="video-block">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/H4reriL-v2E?si=nBnt8_TlVsjF9sa_"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video 1"
          ></iframe>
          <p className="video-description">Title: <strong>Prelude No. 5</strong><br/>Composer: <strong>Heitor Villa-Lobos</strong><br/>Performer: <strong>Jim Cai</strong></p>
        </div>
        <div className="video-block">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video 2"
          ></iframe>
          <p className="video-description">Title: <strong>Tico-Tico no Fubá</strong><br/>Composer: <strong>Zequinha de Abreu</strong><br/>Performer: <strong>Jim Cai</strong></p>
        </div>
        <div className="video-block">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video 2"
          ></iframe>
          <p className="video-description">Title: <strong>Danza Brasilera</strong><br/>Composer: <strong>Jorge Morel</strong><br/>Performer: <strong>Jim Cai</strong></p>
        </div>
      </div>
    </div>
  );
}

export default RecordingPage;

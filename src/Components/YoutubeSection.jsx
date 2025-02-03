import React from 'react'

function YoutubeSection (){
  return (
    <div>
      <div className="Youtube-video">
        <iframe
          width="641.78"
          height="361"
          src="https://www.youtube.com/embed/xvK74yqldkY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="Youtube-video-description">
        <p>Learn the importance of Taka</p>
        <p>Watch this overview video about the importance of using TAKA to track your assignments efficiently</p>
        <button>Mark as done</button>
      </div>
    </div>
  );
};

export default YoutubeSection;

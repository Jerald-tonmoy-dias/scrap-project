import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Leftside from './component/LeftSide';
import Rightside from './component/RightSide';
function App() {

  // state here

  const [scrapInfo, setscrapInfo] = useState({
    url: 'youtube.com ewrtwetew',
    title: 'YouTube 5rg4rtc5y',
    titleChar: 0,
    des: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube ertty.',
    desChar: 0
  });

  // destructure items
  const { url, title, des, desChar, titleChar } = scrapInfo;

  const [showdata, setShowdata] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [responsive, setresponsive] = useState('desktop');//mobile ,desktop

  // useeffect
  useEffect(() => {
    // fetch data and store it
    // show req
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("w3schools.com", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);

  // handle checkbox
  const handledate = (e) => {
    setShowdata(!showdata);
  };
  const handleratings = (e) => {
    setShowRatings(!showRatings);
  };
  const handlead = (e) => {
    setShowAd(!showAd);
  };
  const handlemap = (e) => {
    setShowMap(!showMap);
  };
  const handleHeatmap = (e) => {
    setShowHeatmap(!showHeatmap);
  };

  // scrap info
  const handleChange = (e) => {
    setscrapInfo({
      ...scrapInfo,
      [e.target.name]: e.target.value,
      titleChar: e.target.value.length,
      desChar: e.target.value.length,

    })

  }

  // handle reset
  const handleReset = (e) => {
    e.preventDefault();
    setShowdata(!showdata);
    setShowRatings(!showRatings);
    setShowAd(!showAd);
    setShowMap(!showMap);
    setShowHeatmap(!showHeatmap);
  }

  // handle responsive
  const handledesktop = (e) => {
    setresponsive('desktop');
  }
  const handlemobile = (e) => {
    setresponsive('mobile');
  }

  // handleExportHTML
  const handleExportHTML = (e) => {
    e.preventDefault();
    // get title tag with content

    //get meta tag with content
  }


  return (
    <div className='container-fluid my-5'>
      <div className='row justify-content-center px-xl-5'>
        <div className='col-lg-12 text-center mb-4'>
          <h2 className='scrap-title'><span>Google</span> SERP Simulator</h2>
          <h5>Just enter your title tag and meta des to see your website's SERP snippet preview.</h5>
        </div>

        {/* left side */}
        <Leftside
          url={url}
          title={title}
          des={des}
          handledate={handledate}
          handleratings={handleratings}
          handlead={handlead}
          handlemap={handlemap}
          handleHeatmap={handleHeatmap}
          showdata={showdata}
          showRatings={showRatings}
          showAd={showAd}
          showMap={showMap}
          showMap={showMap}
          showHeatmap={showHeatmap}
          handleReset={handleReset}
          handleChange={handleChange}
          desChar={desChar}
          titleChar={titleChar}
        />

        {/* right content */}
        <Rightside
          url={url}
          title={title}
          des={des}
          showdata={showdata}
          showRatings={showRatings}
          showAd={showAd}
          showAd={showAd}
          showMap={showMap}
          showMap={showMap}
          showHeatmap={showHeatmap}
          handledesktop={handledesktop}
          handlemobile={handlemobile}
          responsive={responsive}

        />

      </div>
    </div>

  );
}

export default App;

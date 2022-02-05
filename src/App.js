import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Leftside from "./component/LeftSide";
import Rightside from "./component/RightSide";

function App() {
  // state here
  const [scrapInfo, setscrapInfo] = useState({
    url: "youtube.com ewrtwetew",
    title: "YouTube is awesome",
    titleChar: 0,
    des: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube ertty.",
    desChar: 0,
  });
  // destructure items
  const { url, title, des, desChar, titleChar } = scrapInfo;

  const [showdata, setShowdata] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [responsive, setresponsive] = useState("desktop"); //mobile ,desktop

  // useeffect
  useEffect(() => {
    // fetch data and store it
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("w3schools.com", requestOptions)
      .then((response) => response.JSON.parse())
      .then((result) => {
        // let abc = JSON.parse(JSON.stringify(result));
        let abc = result;
        console.log(typeof abc);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // meta perse



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

  // handle change
  const handleChange = (e) => {
    setscrapInfo({
      ...scrapInfo,
      [e.target.name]: e.target.value,
    });
  };

  // handle reset
  const handleReset = (e) => {
    e.preventDefault();
    setShowdata(!showdata);
    setShowRatings(!showRatings);
    setShowAd(!showAd);
    setShowMap(!showMap);
    setShowHeatmap(!showHeatmap);
  };

  // handle responsive
  const handledesktop = (e) => {
    setresponsive("desktop");
  };

  const handlemobile = (e) => {
    setresponsive("mobile");
  };

  // handle capitalize
  const handleCapitalize = (e) => {
    const str = document.getElementById('scrp_title').innerText;
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1);
    }
    const str2 = arr.join(" ");
    document.getElementById('scrp_title').innerText = str2;

  }

  // makebold
  let desArray = des.split(" ");

  // bold string
  function boldString(str, substr) {
    var strRegExp = new RegExp(substr, "g");
    return str.replace(strRegExp, "<b>" + substr + "</b>");
  }

  const makeBold = (e) => {
    let matchValue = e.target.value.split(" ");
    // console.log("change value", desArray);
    // console.log("match value", matchValue);

    let boldValue = desArray.filter((filterItems) => {
      if (matchValue.includes(filterItems)) {
        console.log("filter value inside", "milse");
      } else {
        console.log("filter value outside", "mile nai");
      }
    });
    return boldValue;
  };

  // handleExportHTML
  const handleExportHTML = (e) => {
    e.preventDefault();
    // get title tag with content

    //get meta tag with content
  };

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center px-xl-5">
        <div className="col-lg-12 text-center mb-4">
          <h2 className="scrap-title">
            <span>Google</span> SERP Simulator
          </h2>
          <h5>
            Just enter your title tag and meta des to see your website's SERP
            snippet preview.
          </h5>
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
          makeBold={makeBold}
          handleCapitalize={handleCapitalize}
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

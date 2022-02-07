import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import Leftside from "./component/LeftSide";
import Rightside from "./component/RightSide";

function App() {
  // state here
  const [scrapInfo, setscrapInfo] = useState({
    url: "",
    title: "",
    titleChar: 0,
    des: "",
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

  const [titleWidth, setTitleWidth] = useState(0);
  const [desWidth, setdesWidth] = useState(0);
  const [boldtext, setBoldtext] = useState([]);

  // useeffect
  useEffect(() => {
    setscrapInfo({
      ...scrapInfo,
      title: 'yourwebsite.com',
      des: 'We Bring Creative Solutions to our clients both in Marketing and SEO Optimization for WIX',
    })

    // setBold('We Bring Creative Solutions to our clients both in Marketing and SEO Optimization for WIX')
  }, []);

  // fetch data from other website
  const fetchData = (e) => {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let el = document.createElement('html');
    // fetch data and store it
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };


    // fetch(`${proxyurl + url}`, requestOptions)
    fetch(`${url}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        el.innerHTML = result;
        setscrapInfo({
          ...scrapInfo,
          title: el.getElementsByTagName("title")[0] ? el.getElementsByTagName("title")[0].innerText : 'Title is empty!',
          des: el.querySelector('meta[name="description"]') ? el.querySelector('meta[name="description"]').content : 'Meta description is empty!',
        })
      })
      .catch((error) => {
        setscrapInfo({
          ...scrapInfo,
          title: 'failed to fetch title',
          des: 'failed to fetch description',
        })
        console.log(error);
      });
  }

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

    // title
    let titleEl = document.getElementById("titleWidth");
    let width = titleEl.clientWidth;
    setTitleWidth(width)

    // des
    let desEl = document.getElementById("desWidth");
    let dwidth = desEl.clientWidth;
    setdesWidth(dwidth)


  }

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

  // handleExportHTML
  const handleExportHTML = (e) => {
    e.preventDefault();
    // get title tag with content
    let copyTitle = document.getElementById("scrp_title").innerText;
    //get meta tag with content
    let copyContent = document.getElementById("metaContent").innerText;

    let webInfo = `<title>${copyTitle}</title>
    <meta name="description" content='${copyContent}' />`;

    navigator.clipboard.writeText(webInfo);
  };

  // let boldtext = ['we', 'bring'];
  // console.log(boldtext);

  // makebold
  // let desArray = des.toLowerCase().split(' ');
  const makeBold = (e) => {
    // boldtext.push(e.target.value);
    let tempArray = []

    tempArray.push(e.target.value);

    // tempArray.push(e.target.value);


    // console.log(tempArray);
    // t(boldtext);
    setBoldtext(tempArray);

    // let matchValue = e.target.value.toLowerCase().split(' ');
    // let checkvalue = document.getElementById("boldvalue");

    // matchValue.map((match) => {
    //   desArray.map((des) => {
    //     if (match == des) {
    //       let replace = des.bold();
    //       let ind = desArray.indexOf(des);
    //       desArray[ind] = replace;
    //     }

    //     setscrapInfo({
    //       ...scrapInfo,
    //       des: desArray.join(' ')
    //     });

    //   })
    // });


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
          fetchData={fetchData}
          handleExportHTML={handleExportHTML}
          titleWidth={titleWidth}
          desWidth={desWidth}
        // removeBold={removeBold}
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
          titleWidth={titleWidth}
          desWidth={desWidth}
          boldtext={boldtext}
        />
      </div>
    </div>
  );
}

export default App;

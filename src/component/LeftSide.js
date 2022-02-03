import React, { useState, useEffect } from 'react';
const Leftside = ({
    url,
    title,
    des,
    handledate,
    showdata,
    handleratings,
    showRatings,
    handlead,
    handlemap,
    showAd,
    showMap,
    showHeatmap,
    handleHeatmap,
    handleReset,
    handleChange
}
) => {



    const [count, setCount] = useState(0);



    const countCharacter = (e) => {
        // count = e.value.length;
        // setCount(parseInt(e.target.value))
        console.log('kaj kore');
    }


    return (
        <>
            <div className='col-lg-4 mt-4'>
                <div className='left-content bg-light'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3 form-wrapper position-relative">
                            <label htmlFor="form-url" className="form-label label-title">URL</label>
                            <button className='btn btn-sm fetch-btn' href="#"> fetch data</button>
                            <input
                                type="url"
                                className="form-control"
                                onChange={handleChange}
                                name='url'
                                id="form-url"
                                placeholder="http://youtube.com"
                                defaultValue={url} />
                        </div>

                        <div className="mb-3 form-wrapper position-relative mt-5">
                            {/* progress bar */}

                            {/* <span className="snippet-progress"></span> */}
                            <label htmlFor="title" className="form-label label-title">Title</label>
                            <textarea
                                onChange={handleChange}
                                name='title'
                                className="form-control"
                                defaultValue={title}
                                id="title" rows="2"></textarea>
                            <div className='d-flex justify-content-between align-items-center  mt-4'>
                                <button className='btn btn-sm capitalize-btn'>capitalizae text</button>
                                <span className='chars-info'>28 chars (262 / 600px)</span>
                            </div>
                            {/* {`count amount : ${count}`} */}
                        </div>

                        <div className="mb-3 form-wrapper position-relative mt-5">
                            <label htmlFor="Description" className="form-label label-title">Description</label>
                            <textarea
                                onChange={handleChange}
                                name='des'
                                defaultValue={des}
                                className="form-control"
                                id="Description" rows="2">

                            </textarea>
                            <div className='d-flex justify-content-end align-items-center  mt-4'>

                                <span className='chars-info'>28 chars (262 / 600px)</span>
                            </div>
                        </div>

                        <div className="mb-3 form-wrapper position-relative mt-5">
                            <label htmlFor="bold-key" className="form-label label-title">Bold keywords</label>
                            <input type="text" className="form-control" id="bold-key" placeholder="sepearte with a space or comma" />
                        </div>

                        {/* checkbox */}
                        <span className="form-label  mb-2 d-block option-label d-block mt-5">options</span>
                        <div className="mb-3 form-wrapper d-flex align-items-center flex-wrap">

                            <div className="single-checkbox me-2 d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox-item"
                                    defaultChecked={showHeatmap === 1 ? true : false}
                                    onChange={handleHeatmap}
                                    id="heatmap" />
                                <label htmlFor="heatmap" className="form-label mb-0 ms-1">heatmap</label>
                            </div>
                            <div className="single-checkbox me-2 d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox-item"
                                    defaultChecked={showdata === 1 ? true : false}
                                    onChange={handledate}
                                    id="date" />
                                <label htmlFor="date" className="form-label mb-0 ms-1">date</label>
                            </div>
                            <div className="single-checkbox me-2 d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    defaultChecked={showRatings === 1 ? true : false}
                                    onChange={handleratings}
                                    className="checkbox-item"
                                    id="rating" />
                                <label htmlFor="rating" className="form-label mb-0 ms-1">rating</label>
                            </div>
                            <div className="single-checkbox me-2 d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    defaultChecked={showAd === 1 ? true : false}
                                    onChange={handlead}
                                    className="checkbox-item"
                                    id="ads" />
                                <label htmlFor="ads" className="form-label mb-0 ms-1">ads</label>
                            </div>
                            <div className="single-checkbox">
                                <input
                                    type="checkbox"
                                    defaultChecked={showMap === 1 ? true : false}
                                    onChange={handlemap}
                                    className="checkbox-item"
                                    id="map-check" />
                                <label htmlFor="map-check" className="form-label mb-0 ms-1">map-check</label>
                            </div>
                        </div>
                        {/* operational button */}
                        <div className='operational-btn-grp d-flex align-items-center mt-4'>
                            <button className='btn btn-sm me-3 blue-btn'>export as HTML</button>
                            <button
                                onClick={handleReset}
                                className='btn btn-sm capitalize-btn outline'
                            >reset</button>

                        </div>
                    </form>


                </div>
            </div>
        </>
    );
}

export default Leftside;
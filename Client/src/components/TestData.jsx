// src/components/TestData.js
import React, { useEffect, useState } from 'react';
import Data from "../../../Server/data/pdfData.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../css/TestData.css';

const TestData = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState(null);
  


  const getData = async () => {
    const response = Data;
    console.log(response);
    let dt = response.slice(0,10)
    setBook(dt)
  }

  const handleInput = (e) =>{
    // console.log(e.target.value);
    setSearch(e.target.value)

}

  const userInput = (event) =>{
    setSearch(event.target.value)
  }

  useEffect(()=>{
    getData()
},[])
  return (
    <div className="test-data">
      <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
      </div>
      {
        Data
        .filter((val) => {
          if(search == ""){
            return val;
          }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
        })
        .map((val) => {
          return (
            <div key={val.id} className="test-data-item">
              <h3>{val.name}</h3>
              <p>Author: {val.author}</p>
              <a href={val.pdfURL}  download={val.name} className="download-link">
                <FontAwesomeIcon icon={faDownload} /> Download
              </a>
            </div>
          );
        })
      }
      {/* {Data.map((post) => (
        <div key={post.id} className="test-data-item">
          <h3>{post.name}</h3>
          <p>Author: {post.author}</p>
          <a href={post.pdfURL} download={post.name} className="download-link">
            <FontAwesomeIcon icon={faDownload} /> Download
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default TestData;

// src/components/TestData.js
import React from 'react';
import Data from "../../../Server/data/pdfData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../css/TestData.css';

const TestData = () => {
  return (
    <div className="test-data">
      {Data.map((post) => (
        <div key={post.id} className="test-data-item">
          <h3>{post.name}</h3>
          <p>Author: {post.author}</p>
          <a href={post.pdfURL} download={post.name} className="download-link">
            <FontAwesomeIcon icon={faDownload} /> Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default TestData;

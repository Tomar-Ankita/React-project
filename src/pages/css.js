import React from 'react';
function CSS() {
  return  <div className="css-notes">
      <h2># What is CSS? Why Do We Use It?</h2>
      <p>
        <strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It is a stylesheet language used to describe
        the presentation of a document written in HTML or XML. CSS defines how HTML elements should be displayed in terms of layout,
        colors, fonts, spacing, and responsiveness.
      </p>

      <h3> # Why Use CSS?</h3>
      <ul>
        <li><strong>Separation of Content and Design:</strong> Keeps HTML focused on structure, and CSS on styling.</li>
        <li><strong>Improves Maintainability:</strong> Changes in one CSS file can update styles across all pages.</li>
        <li><strong>Enhances User Experience:</strong> With better visual design, animations, and responsiveness.</li>
        <li><strong>Reduces Code Duplication:</strong> Apply styles across multiple elements using classes and selectors.</li>
      </ul>

      <h3> # Types of CSS</h3>
      <ul>
        <li><strong>Inline CSS:</strong> Applied directly to an element using the <code>style</code> attribute.</li>
        <li><strong>Internal CSS:</strong> Written inside a <code>&lt;style&gt;</code> tag within an HTML file.</li>
        <li><strong>External CSS:</strong> Linked via a separate file using <code>&lt;link&gt;</code> tag.</li>
      </ul>
      <h3> # CSS Box Model</h3>
      <div>
      <img src='BoxModel.png' alt='Box model' style={{width: "350px", height: "auto",border: "4px solid blue"}}></img>
      </div>
      </div>
}

export default CSS;

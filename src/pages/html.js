import React from 'react';
function HTML() {
  return <div>
    <h2 className='htmlHeading'>HTML Tutorial</h2>
    <p> HTML, which stands for <strong>HyperText Markup Language</strong>, is the standard language used to create web pages.
        It provides the basic structure for web content and tells the browser how to display text, images, links, and other elements.</p>

      <h3>What is a Markup Language?</h3>
      <p> A markup language is a computer language used to apply layout and formatting to a document.
        HTML uses "tags" to mark up elements in a document such as headings, paragraphs, links, lists, etc.</p>

      <h3>Why is HTML Important?</h3>
      <ul>
        <li>It is the foundation of all web pages.</li>
        <li>Every website you visit is built with HTML in some form.</li>
        <li>It allows browsers to interpret and render content.</li>
      </ul>
    <h3>Types of Elements</h3>
      <ul>
        <li><strong>Block-level elements:</strong> Start on a new line and take up full width (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>)</li>
        <li><strong>Inline elements:</strong> Do not start on a new line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)</li>
      </ul>
      <p>
          For more info visit:&nbsp;
          <a
            href="https://www.geeksforgeeks.org/html-tutorial/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007acc' }}
          >
            GeeksforGeeks
          </a>
        </p>
       
    </div>;
}

export default HTML;

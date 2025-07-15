import React, { useState } from 'react';
import './resume.css';
function FeedbackButton() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      <button className="top-right-button" onClick={() => setShowFeedback(true)}>
        📝 Your feedback matters
      </button>

      {showFeedback && (
        <div className="feedback-container">
          <textarea placeholder="Write your feedback here..." rows="5" cols="50" />
        </div>
      )}
    </div>
  );
}

export default FeedbackButton;

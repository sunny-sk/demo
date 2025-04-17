import React, { useState } from "react";
import "./QnA.css";

const QnA = ({ n, q }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className={`qna-container ${showAnswer ? 'active' : ''}`}>
      <div className="qna-question" onClick={toggleAnswer}>
        <h3>
          <span className="qna-number">{n}.</span> {q.question}
        </h3>
        <div className="qna-icon">
          <i className={`fas ${showAnswer ? 'fa-minus' : 'fa-plus'}`} />
        </div>
      </div>
      <div className={`qna-answer ${showAnswer ? 'show' : ''}`}>
        <p>{q.answer}</p>
      </div>
    </div>
  );
};

export default QnA;

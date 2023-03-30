import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questions, onDelete}) {
  
  const questionItems = questions.map((q) => {
    return (
      <QuestionItem
      onDelete={onDelete}
      key={q.id}
      question={q}
/> 
    )
  })
// console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      {<ul>{questionItems}</ul>}
    </section>
  );
}

export default QuestionList;

import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} 
          ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          
          `}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
{
  /*  answer !== null
              ? index === question.correctOption
                ? "correct"
                : "accent"
              : index !== question.correctOption
              ? "wrong"
              : "accent" */
}

import React, { useState } from "react";
import socket from "../utils/socket";
import { isDisallowedAnswer, isEmptyString } from "../utils/formValidation";

const QuestionForm = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitAnswer = () => {
    if (!error && answer) {
      // no errors, we are good to emit an add_answer message to the server, along with the data to be stored
      socket.emit("add_answer", { value: answer });
      setSubmitted(true);
      setAnswer("");
    } else if (answer === "") {
      setSubmitted(false);
      setError("Please enter some text");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl bold mb-4">Is a hot dog a sandwich? Why?</h2>
      <textarea
        className={`resize-none border border-solid px-4 leading-10 rounded-md w-full lg:w-2/4 border-gray-500 ${
          error ? "outline-none ring-1 ring-red-500" : "focus:outline-none focus:ring-1 focus:ring-gray-700"
        }`}
        rows={5}
        onChange={(e) => {
          // This is where the input validation takes place
          setSubmitted(false);
          const value = e.target.value;
          if (isEmptyString(value)) {
            setError("Please enter some text");
          } else if (isDisallowedAnswer(value)) {
            setError("Answer cannot be one of: yes/no/I don't know");
          } else {
            setError("");
          }
          setAnswer(e.target.value);
        }}
        value={answer}
        placeholder="Please enter your response"
        maxLength={1000} /* Assuming that there aren't any strongly opinionated respondents on the subject,
        and 1000 characters should suffice to express their opinion :) */
      />
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <div className="flex flex-row space-x-2">
        <button className="border border-solid font-semibold px-4 leading-10 rounded-md text-white border-gray-800 bg-gray-800 hover:border-gray-600 hover:bg-gray-600 active:border-gray-700 active:bg-gray-700 inline-flex my-4 w-36">
          <p className="mx-auto" onClick={(e) => submitAnswer()}>
            Submit
          </p>
        </button>
        {submitted && <p className="text-green-500 my-auto">Your response has been submitted!</p>}
      </div>
    </div>
  );
};

export default QuestionForm;

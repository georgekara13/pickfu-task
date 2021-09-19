import React, { useState, useEffect } from "react";
import axios from "axios";

const formatDate = (date) => {
  return date.replace(/:\d+\.\d+Z$/, "").replace(/T/, " ");
};

const AnswersList = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getanswers").then((res) => setAnswers(res.data.doc));
  }, []);

  return (
    <div className="w-full flex flex-col">
      <h2 className="text-3xl bold mb-4">Answers</h2>
      <h2 className="text-xl bold mb-4">Is a hot dog a sandwich? Why?</h2>
      <ul>
        {answers.map((answer, i) => (
          <li
            key={answer._id}
            className="border border-gray-200 rounded-lg p-4 mb-1 flex lg:flex-row flex-col w-full lg:w-4/6 hover:border-gray-500 cursor-pointer"
          >
            <p>
              <b>{i + 1}</b>. {answer.value}
            </p>
            <p className="ml-0 lg:ml-auto">Added: {formatDate(answer.createdAt)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersList;

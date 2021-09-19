import React, { useState, useEffect } from "react";
import socket from "../utils/socket";

const formatDate = (date) => {
  return date.replace(/:\d+\.\d+Z$/, "").replace(/T/, " ");
};

const AnswersList = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    socket.emit("initial_data");
    socket.on("get_data", (answers) => {
      setAnswers(answers);
    });

    socket.on("change_data", () => {
      socket.emit("initial_data");
    });

    return () => {
      socket.off("get_data");
      socket.off("change_data");
    };
  }, []);

  return (
    <div className="w-full flex flex-col mb-8">
      <h2 className="text-3xl bold mb-4">Answers</h2>
      <h2 className="text-xl bold mb-4">Is a hot dog a sandwich? Why?</h2>
      <ul>
        {answers.map((answer, i) => (
          <li
            key={answer._id}
            className="hover:shadow-md shadow border border-gray-200 rounded-lg p-4 mb-2 flex lg:flex-row flex-col w-full lg:w-4/6 hover:border-gray-300 cursor-pointer"
          >
            <p className="flex-shrink w-full md:w-3/4">
              <b>{i + 1}</b>. {answer.value}
            </p>
            <p className="ml-0 lg:ml-auto flex-0 my-auto italic">Added: {formatDate(answer.createdAt)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersList;

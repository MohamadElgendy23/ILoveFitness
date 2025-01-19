import React, { useState } from "react";

function Exercise(props) {
  const [isSaved, setIsSaved] = useState(false);

  function saveExercise() {
    setIsSaved((prevState) => !prevState);
    props.setSavedCount((prevState) => {
      return isSaved ? prevState - 1 : prevState + 1;
    });
  }
  return (
    <div className="flex items-center justify-center bg-blue-600 w-100 h-100 gap-8 p-8 rounded-md hover:bg-blue-400 relative">
      <img src={props.image} alt="an image of an exercise" className="w-60" />
      <div className="flex items-center justify-center flex-col w-80">
        <h2 className="text-4xl font-bold mb-3">{props.name}</h2>
        <p>
          <span className="font-bold">Description:</span> {props.description}
        </p>
        <p>
          <span className="font-bold">Instructions:</span> {props.instructions}
        </p>
        <a
          className="cursor-pointer text-xl underline"
          href={props.link}
          target="_blank"
        >
          Learn More
        </a>
      </div>
      <i
        className={`fa-regular fa-bookmark absolute top-3 right-4 text-xl cursor-pointer hover:bg-blue-400 ${
          isSaved ? "text-gray-600" : "text-current"
        }`}
        onClick={saveExercise}
      ></i>
    </div>
  );
}

export default Exercise;

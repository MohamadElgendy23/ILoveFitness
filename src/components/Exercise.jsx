import React from "react";

function Exercise(props) {
  return (
    <div className="flex items-center justify-center bg-blue-600 w-100 h-100 gap-8 p-8 rounded-md">
      <img src={props.image} alt="an image of an exercise" className="w-60" />
      <div className="flex items-center justify-center flex-col w-80">
        <h2 className="text-3xl font-bold mb-3">{props.name}</h2>
        <p>
          <span className="font-bold">Description:</span> {props.description}
        </p>
        <p>
          <span className="font-bold">Instructions:</span> {props.instructions}
        </p>
        <a href="">Learn More</a>
      </div>
    </div>
  );
}

export default Exercise;

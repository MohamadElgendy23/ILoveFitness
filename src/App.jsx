import { useState } from "react";
import "./App.css";
import exercisesArr from "./data/Exercises";
import Exercise from "./components/Exercise";
function App() {
  const [exercises, setExercises] = useState(exercisesArr);
  const [inputContent, setInputContent] = useState("");

  function generateFilteredExercises() {
    console.log(inputContent);
    const filteredExercises = exercises.filter((exercise) => {
      return (
        exercise.name.includes(inputContent) ||
        exercise.instructions.includes(inputContent)
      );
    });
    console.log(exercises, filteredExercises);
    return filteredExercises;
  }
  function clearInput() {
    setInputContent("");
    setExercises(exercisesArr);
  }

  return (
    <div className="flex items-center flex-col justify-center gap-5 mt-5">
      <h1 className="font-bold text-6xl">ILoveFitness</h1>
      <p className="italic text-3xl">
        This app displays various muscle building exercises for gym goers and
        lovers of fitness!
      </p>
      <div className="flex items-center justify-center gap-3 w-1/4">
        <div className="relative w-full">
          <input
            className="text-blue-600 placeholder-current bg-gray-300 w-full p-3 rounded-md"
            type="text"
            placeholder="Search Exercises, Instructions"
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
              setExercises(generateFilteredExercises());
            }}
            required
          />
          {inputContent && (
            <button
              className="absolute cursor-pointer right-5 bottom-3 text-blue-600"
              onClick={clearInput}
            >
              X
            </button>
          )}
        </div>
        <button className="bg-blue-600 p-3 rounded-md" type="button">
          Saved
        </button>
      </div>
      <div className="flex items-center flex-col justify-center gap-5 mt-10">
        {exercises.map((exercise, index) => {
          return (
            <Exercise
              key={index}
              name={exercise.name}
              description={exercise.description}
              instructions={exercise.instructions}
              image={exercise.image}
              link={exercise.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

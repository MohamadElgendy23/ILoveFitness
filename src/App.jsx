import { useState } from "react";
import "./App.css";
import exercisesArr from "./data/Exercises";
import Exercise from "./components/Exercise";
function App() {
  const [exercises, setExercises] = useState(exercisesArr);
  const [showClear, setShowClear] = useState(false);
  return (
    <div className="flex items-center flex-col justify-center gap-5 mt-5">
      <h1 className="font-bold text-6xl">ILoveFitness</h1>
      <p className="italic text-3xl">
        This app displays various muscle building exercises for gym goers and
        lovers of fitness!
      </p>
      <div className="flex items-center justify-center gap-3 w-full relative">
        <input
          className="text-blue-600 placeholder-current bg-gray-300 w-1/4 p-3 rounded-md"
          type="text"
          placeholder="Search Exercises, Instructions"
          required
        />
        <button className="absolute cursor-pointer">X</button>
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

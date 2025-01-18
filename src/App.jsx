import { useState } from "react";
import "./App.css";
import exercisesArr from "./data/Exercises";

function App() {
  const [exercises, setExercises] = useState(exercisesArr);
  return (
    <div className="flex items-center flex-col justify-center gap-5 mt-5">
      <h1 className="font-bold text-6xl">ILoveFitness</h1>
      <p className="italic text-3xl">
        This app displays various muscle building exercises for gym goers and
        lovers of fitness!
      </p>
      <div className="flex items-center flex-col justify-center">
        {exercises.map((exercise, index) => {
          return <Exercise />;
        })}
      </div>
    </div>
  );
}

export default App;

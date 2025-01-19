import { useEffect, useState } from "react";
import "./App.css";
import exercisesArr from "./data/Exercises";
import Exercise from "./components/Exercise";
function App() {
  const [exercises, setExercises] = useState(exercisesArr);
  const [savedExercises, setSavedExercises] = useState(() => {
    localStorage.getItem("saved-exercises")
      ? JSON.parse(localStorage.getItem("saved-exercises"))
      : [];
  });
  const [inputContent, setInputContent] = useState("");
  //const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("saved-exercises", JSON.stringify(savedExercises));
  }, [savedExercises]);

  function generateFilteredExercises(mode) {
    let filteredExercises;
    // exercises based on saved exercises
    if (mode === "saved") {
      filteredExercises = savedExercises;
    }
    // exercises based on search input value
    if (mode === "search") {
      filteredExercises = exercisesArr.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(inputContent.toLowerCase()) ||
          exercise.instructions
            .toLowerCase()
            .includes(inputContent.toLowerCase())
        );
      });
    }

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
              setExercises(generateFilteredExercises("search"));
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
        <div className="w-1/4 relative">
          <button
            className="bg-blue-600 p-2 w-full rounded-md hover:bg-blue-400"
            type="button"
            onClick={() => {
              setExercises(generateFilteredExercises("saved"));
            }}
          >
            View Saved
          </button>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-s font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {savedExercises.length}
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center gap-5 mt-10">
        {exercises.map((exercise, index) => {
          return (
            <Exercise
              key={index}
              exercise={exercise}
              setSavedExercises={setSavedExercises}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

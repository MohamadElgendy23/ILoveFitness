// this array contains the objects of exercises that will be displayed for users to view and save (as they like).
// fields are name, description, instructions, and image.
const exercisesArr = [
  {
    name: "Pushups",
    description:
      "Conditioning exercise that strengthens the muscles in the chest, arms, and shoulders.",
    instructions:
      "From a prone position, the hands are placed under the shoulders with the elbows extended. Keeping the back and legs straight with the toes touching the ground. The body is lowered until the upper arm is parallel to the ground. Then reverse the movement and raise the body until arm is extended.",
    image:
      "https://thumbs.dreamstime.com/z/man-character-doing-push-up-flat-vector-illustration-isolated-different-layers-man-character-doing-push-up-flat-vector-236370303.jpg?w=768",
  },
  {
    name: "Squats",
    description:
      "Strength exercise that involves bending the knees and hips while keeping the back straight. Squats are a popular exercise that can help strengthen the lower body and core, and can help prevent injuries.",
    instructions:
      "Stand with your feet slightly greater than shoulder-width apart and your toes pointing ahead. Slowly descend, bending through the hips, knees and ankles. Stop when your knees reach a 90-degree angle. Then return to the starting position.",
    image: "https://thumbs.dreamstime.com/z/basic-rgb-221835086.jpg?w=768",
  },
  {
    name: "Crunches",
    description: "An exercise that targets the abdominal muscles.",
    instructions:
      "Lie on your back, bend your knees, and lift your shoulders while squeezing your abs.",
    image: "https://gymgeek.com/wp-content/uploads/2024/02/crunches.png",
  },
  {
    name: "Donkey Kicks",
    description:
      "Lower-body exercise that strengthen the glutes, hamstrings, and other leg muscles.",
    instructions:
      "Get down on all fours and position your hands under your shoulders and your knees under your hips. Kick back with one leg and squeeze the glutes. Bend the knee, lower the leg, and repeat. Switch legs.",
    image:
      "https://www.realsimple.com/thmb/JD66qzumvb19EmPhYW5CB2ieBSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/donkey-kicks-exercise-form-d3ab6b2ac16445feacd1e61e5fbcca6a.jpg",
  },
  {
    name: "Triceps Dips",
    description:
      "A bodyweight exercise that target the triceps muscles in the upper arms. They can be performed on the floor, a bench, or with gymnastics rings.",
    instructions:
      "Press into your palms to lift your body and slide forward just far enough that your buttocks clear the edge of the chair. Lower yourself until your elbows are bent between 45 and 90 degrees. Control the movement throughout the range of motion. Push yourself back up slowly until your arms are almost straight, and repeat.",
    image:
      "https://thumbs.dreamstime.com/z/woman-doing-triceps-dips-exercise-workout-hands-woman-doing-triceps-dips-exercise-workout-hands-flat-vector-illustration-283843242.jpg?w=768",
  },
  {
    name: "Plank",
    description:
      "Isometric exercise that strengthens your core and improves your posture and balance.",
    instructions:
      "Begin lying on your front, propped up on your elbows. Engage your abdominal muscles and lift your hips and legs up into a plank position, keeping your elbows directly under your shoulders. Hold this position. Make sure to keep your back straight and maintain a gentle chin tuck during the exercise.",
    image:
      "https://thumbs.dreamstime.com/z/perfect-body-plank-exercise-woman-making-60460290.jpg?w=768",
  },
  {
    name: "Warrior Pose",
    description:
      "A foundational yoga pose that builds strength, stability, and flexibility.",
    instructions:
      "Begin standing, then step your right foot forward about four feet. With your foot parallel and toes pointing to the top of the mat, bend your knee into a lunge. Keep your left leg straight behind you and turn your left heel in at approximately 45 degrees. Raise your arms straight above your head, keeping your shoulders pressed down. Squeeze your shoulder blades together and downward, and lift your chin to gaze at your hands overhead. Hold your pose and then repeat on the left side.",
    image: "https://pocketyoga.com/assets/images/full/WarriorI_L.png",
  },
  {
    name: "Wall Sit",
    description:
      "An isometric exercise that strengthens the quadriceps, glutes, and core muscles. It's often used in sports like ice hockey, fencing, and skiing.",
    instructions:
      "Start in a squat position, with your thighs parallel to the floor and your back against a wall. Hold this position for as long as you can.",
    image:
      "https://www.spotebi.com/wp-content/uploads/2015/05/wall-sit-exercise-illustration.jpg",
  },
  {
    name: "Boat Pose",
    description:
      "A position that engages your core muscles. Its name comes from the shape your body makes during the pose.",
    instructions:
      "You balance on your tailbone with your legs lifted up. With your arms out straight, your body makes a shape like an upside-down A or a cartoon boat.",
    image:
      "https://static.vecteezy.com/system/resources/previews/047/749/807/non_2x/man-doing-half-boat-pose-ardha-navasana-exercise-vector.jpg",
  },
  {
    name: "Glute Bridge",
    description:
      "Engages your glute, thigh, and core muscles. Doing it differently every time keeps it fun and helps you work multiple muscles.",
    instructions:
      "Lie on your back with your hands by your sides and your knees bent. Lift your hips off the mat, while keeping your back straight, and pause for 1 second. Return to the starting position and repeat the movement until the set is complete.",
    image:
      "https://www.spotebi.com/wp-content/uploads/2015/01/glute-bridge-exercise-illustration.jpg",
  },
];

export default exercisesArr;

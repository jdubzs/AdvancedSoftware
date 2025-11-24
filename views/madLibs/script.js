/* Thanksgiving Mad Libs Game
Utilized ChatGPT to create the Mad Libs story text (OpenAI), 2025.
*/

function generateStory() {
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adjective = document.getElementById("adjective").value;
  const place = document.getElementById("place").value;
  const animal = document.getElementById("animal").value;

  if (!noun || !verb || !adjective || !place || !animal) {
    document.getElementById("story").innerText = "Please fill out all five words before generating your story!";
    return;
  }

  const story = `It was Thanksgiving morning in ${place}. The smell of roasted ${animal} filled the air as everyone
  gathered around the kitchen. Grandma was busy trying to ${verb} the ${noun}, while the kids were running around,
  laughing and making ${adjective} decorations out of paper and glue.
  
  When dinner was finally ready, the family sat together at the long wooden table, each person sharing what they were thankful for.
  Even the ${animal} looked proud, sitting in the center of it all. After the feast, they played games, told stories, and promised
  to return to ${place} next year for another Thanksgiving full of warmth, laughter, and too much food.`;

  document.getElementById("story").innerText = story;
}

function clearStory() {
  document.getElementById("noun").value = "";
  document.getElementById("verb").value = "";
  document.getElementById("adjective").value = "";
  document.getElementById("place").value = "";
  document.getElementById("animal").value = "";
  document.getElementById("story").innerText = "";
}

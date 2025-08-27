// update value by inc or dec with id
function updateValue(count, id) {
  if (count === "inc") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) < 0) {
      return;
    }
    element.innerText = Number(elementValue) + 1;
    return;
  }
  if (count === "dec") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) < 0) {
      return;
    }
    element.innerText = Number(elementValue) - 1;
    return;
  }
}

// Handel all heart button and update value
const allHeart = document.querySelectorAll(".heart");
for (const heart of allHeart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("text-gray-300");
    heart.classList.toggle("text-red-600");
    if (heart.classList.contains("text-gray-300")) {
      updateValue("dec", "love");
    } else if (heart.classList.contains("text-red-600")) {
      updateValue("inc", "love");
    }
  });
}

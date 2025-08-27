// update nav value by inc or dec with id
function updateValue(count, id) {
  if (count === "inc") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) === 0 || Number(elementValue) > 0) {
      element.innerText = Number(elementValue) + 1;
      return;
    }
  }
  if (count === "dec") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) === 0 || Number(elementValue) > 0) {
      element.innerText = Number(elementValue) - 1;
      return;
    }
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

// Handel all copy button
const allCopyBtn = document.querySelectorAll(".copytext");
for (const copyBtn of allCopyBtn) {
  copyBtn.addEventListener("click", function () {
    const copyId = copyBtn.id.split("-")[0];
    const id = `${copyId}-number`;
    const copyTextValue = document.getElementById(id).innerText;
    // set text to clipboard
    navigator.clipboard.writeText(copyTextValue);
    // update the navigation copy value
    updateValue("inc", "copy");
    //changed the button text
    copyBtn.innerText = "Copied!";
    // change the btn style
    copyBtn.classList.toggle("bg-gray-200");
    // again set the normal copy text after 3 seconds
    setTimeout(function () {
      // set normal text
      copyBtn.innerText = "Copy";
      // set normal style
      copyBtn.classList.toggle("bg-gray-200");
    }, 3000);
  });
}

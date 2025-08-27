// update nav value by inc or dec with id
function updateValue(count, id) {
  if (count === "inc") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) === 0 || Number(elementValue) > 0) {
      element.innerText = Number(elementValue) + 1;
      return;
    } else {
      return;
    }
  }
  if (count === "dec") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) === 0 || Number(elementValue) > 0) {
      element.innerText = Number(elementValue) - 1;
      return;
    } else {
      return;
    }
  }
  if (count === "call") {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    if (Number(elementValue) >= 20) {
      element.innerText = Number(elementValue) - 20;
      return;
    } else {
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
const allCopyBtn = document.querySelectorAll(".copy-text");
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

// handel all call button
const allCallBtn = document.querySelectorAll(".call");
for (const callBtn of allCallBtn) {
  callBtn.addEventListener("click", function () {
    const callingToMinistry = document.getElementById("calling-ministry");
    const sureToCall = document.getElementById("sureCalling");
    const callingMinistryNumber = document.getElementById(
      "calling-ministry-number"
    );
    // get the call number form callBtn
    const callId = callBtn.id.split("-")[0];
    const id = `${callId}-number`;
    const callNumber = document.getElementById(id).innerText;
    // get the call destination form document
    const callDestination = document.getElementById(callId).innerText;
    callingToMinistry.innerText = callDestination;
    sureToCall.innerText = callDestination;
    callingMinistryNumber.innerText = callNumber;
    // call function for access info outside
    historyUpdate(callDestination, callNumber);
    // show a dialog
    const modalId = document.getElementById("modal");
    modalId.showModal();
  });
}

// when hit the modal call btn
const callSuccess = document.getElementById("call-success");
callSuccess.addEventListener("click", function () {
  afterCalling();

  // for history
});

// after success to call
function afterCalling() {
  const balance = document.getElementById("coin").innerText;
  if (Number(balance) >= 20) {
    updateValue("call", "coin");
    return;
  }
}

// history update
function historyUpdate(callDestination, callNumber) {
  const callHistory = document.getElementById("history-content");
  const historyParentDiv = document.createElement("div");
  historyParentDiv.classList.add("historyParent");

  const div1 = document.createElement("div");
  div1.classList.add("history-content");
  const paragraph1 = document.createElement("p");
  paragraph1.innerText = callDestination;

  div1.appendChild(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.innerText = callNumber;

  div1.appendChild(paragraph2);

  historyParentDiv.appendChild(div1);

  const newDate = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const newTime = new Date().toLocaleTimeString("en-us");
  const div2 = document.createElement("div");
  div2.classList.add("datetime");
  const time1 = document.createElement("p");
  time1.innerText = newTime;
  div2.appendChild(time1);
  const date1 = document.createElement("p");
  date1.innerText = newDate;
  div2.appendChild(date1);
  historyParentDiv.appendChild(div2);

  callHistory.appendChild(historyParentDiv);
}

// clear the history
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-content").innerHTML = null;
});

// get html element
const customEventTarget = document.querySelector(".customEventTarget");

// what happens when we click the button
document.querySelector(".trigger").addEventListener("click", function () {
  const state = customEventTarget.classList.contains("sizeChanged");

  // custom event to change size
  let sizeChangeEvent = new CustomEvent("sizeChange", {
    detail: {
      // the payload is in the detail
      changed: new Date(),
      isResized: !state,
    },
    bubbles: true, // the event is bubbling
    cancelable: true, // the event is cancellable
  });
  // dispatching the new event
  customEventTarget.dispatchEvent(sizeChangeEvent);
});

// event listener for my new event
customEventTarget.addEventListener("sizeChange", function (e) {
  e.target.querySelector(".payload").innerHTML = pretty(e.detail);
  e.target.classList.toggle("sizeChanged");
});

// text formatting
function pretty(json) {
  return JSON.stringify(json)
    .split(",")
    .join("<br />")
    .split("{")
    .join("")
    .split("}")
    .join("");
}

// global variable
let firstName = "James";
let lastName = "Bond";
// iife
(function () {
  const nameButton = document.querySelector(".bond");
  nameButton.addEventListener("click", () => {
    alert(`My name is ${lastName}, ${firstName} ${lastName}`);
  });
})();

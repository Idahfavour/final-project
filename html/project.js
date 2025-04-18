document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("h2"); 
  const button = document.querySelector(".click");
  function Addbtn() {
    alert('Button clicked!');
  }

  if (button) {
    button.addEventListener("click", Addbtn);
  } else {
    console.error("Button with class 'click' not found.");
  }

  if (h2) {
    console.log("h2 element found:", h2.textContent);
  } else {
    console.error("h2 element not found.");
  }
});
//  alert("Welcome to the website!");












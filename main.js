// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartButton = document.querySelectorAll(".like-glyph");

heartButton.forEach(element => {
  element.addEventListener("click", (e) => {
    mimicServerCall()
    .then(res => {
      if (element.innerText === EMPTY_HEART){
        element.innerText = FULL_HEART;
        element.classList.add("activated-heart");
      }
      else {
        element.innerText = EMPTY_HEART;
        element.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      const errorModal = document.getElementById("modal");
      errorModal.classList.remove("hidden");
      const errorPara = document.getElementById("modal-message");
      errorPara.innerText = error;
      setTimeout(() => errorModal.classList.add("hidden"), 3000);
    });
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

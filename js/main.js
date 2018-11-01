var school = document.getElementById("schools");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");
var modeButtons = document.querySelectorAll(".mButton");

//Set up functions
init();

// this are the functions that run right away
function init(){
  setupResumeButtons();
  showContent(0);
}

// resets display so only one content shows at a time
function reset(){
  school.style.display = "none"
  experience.style.display = "none"
  skills.style.display = "none"
}

//NOTE: Changes difficulty by changing the size of the array using var numSqaures
function setupResumeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
      console.log(this.textContent);
			this.textContent === "Schools" ? showContent(0):this.textContent === "Experience" ? showContent(1): showContent(2);
		});
	}
}

function showContent(content){
  reset();
  content == "0" ? school.style.display = "block": content == "1" ? experience.style.display = "block": skills.style.display="block";
}

//see my work button

function myWork(){
  document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
}





// element.addEventListener(event, listener, useCapture);

let projectList= document.getElementById("project-list");

let leftArrow= document.getElementById("leftArrow");
let rightArrow= document.getElementById("rightArrow");


leftArrow.addEventListener('click', function () {
    projectList.scrollBy({
      top: 0,
      left: -400, // Adjust this value based on how much you want to scroll
      behavior: 'smooth'
    });
    // console.log("button left");
  });
  
  rightArrow.addEventListener('click', function () {
    projectList.scrollBy({
      top: 0,
      left: 400, // Adjust this value based on how much you want to scroll
      behavior: 'smooth'
    });
    // console.log("buttone right");
  });



  // for automatic sliding
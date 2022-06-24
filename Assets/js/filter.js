
filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.querySelectorAll(".filterDiv");
  if (c == "all") c = "";
  // Adds the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    AddClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "hide");
  }
}

// Shows filtered elements
function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Hides elements that are not selected
function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
} 

// Adds active class to the current control button (highlights it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = document.querySelectorAll(".filterButton");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className +=" active";
  });
} 




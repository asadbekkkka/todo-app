  function openProgress(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
const inputBox = document.getElementById("input-box")
const inputList = document.getElementById("input-list")

function AddTask(){
    if(inputBox.value === ''){
      alert("You must write something!");
    }
    else{
      let li = document.createElement("li")
      li.innerHTML = inputBox.value;
      inputList.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

inputList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
}, false);
function saveData(){
  localStorage.setItem("data" , inputList.innerHTML);
}

function showTask(){
  inputList.innerHTML = localStorage.getItem("data");
}
showTask();
const addToDo = document.querySelector(".btn");
const toDoContainer = document.querySelector(".toDoContainer");
const inputField = document.querySelector(".inputField");


addToDo.addEventListener("click", function() {
  if(inputField.value!="") {
          // creation des balise du toDO
          const newDiv=document.createElement("div");
          const imageRemouve = document.createElement("img");
          const pElement = document.createElement("p");
      
          // insertion des valeur
          imageRemouve.src="./images/poubelle.jpg";
          pElement.innerText=inputField.value;
      
          newDiv.classList.add("div_style");
          pElement.classList.add("p_style");
          imageRemouve.classList.add("img_style");
      
      
          // ajout des balises au DOM
          toDoContainer.appendChild(newDiv);
          newDiv.appendChild(pElement);
          newDiv.appendChild(imageRemouve);
      
          inputField.value = "";
      
          imageRemouve.addEventListener("click", function() {
              newDiv.remove();
          });

          newDiv.addEventListener("click", function() {
            newDiv.style.backgroundColor = " rgb(247,118,118)";
            newDiv.style.textDecoration = "line-through";
          });
  }
  else{
    alert("veillez entrer une valeur valide");
  }
});


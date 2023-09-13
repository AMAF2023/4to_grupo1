//LINEA DE TIEMPO
function openPopup(title, content) {
    document.getElementById("popup-title").innerHTML = title;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
  }
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


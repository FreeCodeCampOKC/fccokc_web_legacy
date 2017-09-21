var modal = document.getElementById('parkModal');
var img = document.getElementById('parkImg');
var modalImg = document.getElementById('parkModal');
var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

span.onclick = function() {
    modal.style.display = "none";
}
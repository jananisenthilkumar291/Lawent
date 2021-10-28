function showDes(n) {
  let descrip = document.querySelectorAll(".des-part");
  let desBtn = document.querySelectorAll(".despartChange");
  for (let i = 0; i < descrip.length; i++) {
    descrip[i].style.display = "none";
    desBtn[i].classList.remove("active");
  }
  descrip[n].style.display = "block";
  desBtn[n].classList.add("active");
}

function miniPhotoListener() {
  let miniPhoto = document.querySelectorAll('.mini-photo .img-container img');
  for(let i = 0; i < miniPhoto.length; i++) {
    miniPhoto[i].addEventListener('click', function() {
      document.querySelector('.full-photo img').setAttribute('src', this.src)
    })
  }

}
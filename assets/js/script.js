const shareButton = document.getElementById("share-btn");
const links = document.getElementById("share-links");

function shareSocialLinks() {
  links.classList.toggle("active");
}

shareButton.addEventListener("click", shareSocialLinks);

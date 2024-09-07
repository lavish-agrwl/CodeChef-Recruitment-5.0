document.addEventListener("DOMContentLoaded", function () {
  var modal = document.querySelector(".modal");
  var closeModal = document.querySelector(".close");
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  modal.style.visibility = "visible";
  document.body.style.overflow = "hidden";

  closeModal.addEventListener("click", function () {
    modal.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  });

  var isDropdownOpen = false;


  dropdown.addEventListener("click", function () {
    isDropdownOpen = !isDropdownOpen;
    dropdownContent.style.display = isDropdownOpen ? "block" : "none";
  });


  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      isDropdownOpen = false;
      dropdownContent.style.display = "none";
    }
  });
});

const form = document.getElementById("profileForm");
const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      preview.src = reader.result;
      localStorage.setItem("profilePhoto", reader.result);
    };
    reader.readAsDataURL(file);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const profileData = {
    name: document.getElementById("name").value,
    skills: document.getElementById("skills").value,
    college: document.getElementById("college").value,
    collegeAddress: document.getElementById("collegeAddress").value,
    year: document.getElementById("year").value,
    age: document.getElementById("age").value,
    dreamCompany: document.getElementById("dreamCompany").value,
    photo: localStorage.getItem("profilePhoto") || "../assets/default-avatar.png",
  };

  localStorage.setItem("studentProfile", JSON.stringify(profileData));
  alert("✅ Profile saved successfully!");
});

const cvForm = document.getElementById("cvForm") as HTMLFormElement;
const generateCVBtn = document.getElementById("generateCV") as HTMLButtonElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

generateCVBtn.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;

  if (name && email && phone && experience && education) {
    outputDiv.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Experience:</h4>
      <p>${experience}</p>
      <h4>Education:</h4>
      <p>${education}</p>
    `;
  } else {
    alert("Please fill out all fields.");
  }
});

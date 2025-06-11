document.getElementById("cvForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("outputName").textContent = document.getElementById("name").value;
  document.getElementById("outputRank").textContent = document.getElementById("rank").value;
  document.getElementById("outputSpec").textContent = document.getElementById("spec").value;
  document.getElementById("outputHomeworld").textContent = document.getElementById("homeworld").value;
  document.getElementById("outputHistory").textContent = document.getElementById("history").value;

  const file = document.getElementById("profilePic").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("outputImage").src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    document.getElementById("outputImage").src = "";
  }

  document.getElementById("cvOutput").style.display = "block";
});

function openImageTab() {
  const output = document.getElementById("cvOutput");
  html2canvas(output).then(canvas => {
    const dataURL = canvas.toDataURL("image/png");
    const newWindow = window.open();
    newWindow.document.write(`<img src="${dataURL}" alt="CV Image"/>`);
  });
}



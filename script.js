const url = document.getElementById("text");
const btn = document.getElementById("generate");
const img = document.getElementById("qr");

btn.addEventListener("click", () => {
  img.innerHTML = "";
  if (url.value === "") {
    alert("Please enter a URL");
    return;
  }
  genQR();
  save();
});

function genQR() {
  console.log("Generating QR Code");
  const qr = new QRCode(img, {
    text: url.value,
    width: 200,
    height: 200,
  });
}

function save() {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.id = "download";
  a.href = dataURL;
  a.download = "QRCode.png";
  a.textContent = "Download QR Code";
  img.appendChild(a);
}

function GenerateNumber() {
const min = Math.ceil(document.getElementById ("inicial").value)
const max = Math.floor(document.getElementById ("final").value)

const result = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("resultado").style.display = "block";
document.getElementById("valor-final").innerHTML = result

}
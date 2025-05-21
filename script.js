const body = document.querySelector("body")
const h3 = document.querySelector("h3")
let input1 = document.querySelectorAll("input")[0]
let input2 = document.querySelectorAll("input")[1]

function setColor(){
	body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")"

	h3.textContent = body.style.background + ";";
}

input1.addEventListener("input", setColor)
input2.addEventListener("input", setColor)



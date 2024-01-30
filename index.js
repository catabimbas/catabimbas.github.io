const webs = ['.', '.'] // If was back-end, used database 
const divCard = document.querySelector("div#placeCards")
webs.forEach((element, arrayPos) => {
divCard.innerHTML += `
<div class="card-body">
<a href="./folds/Web${++arrayPos}/index.html">Web ${arrayPos++}</a>
</div>
<br>`
})
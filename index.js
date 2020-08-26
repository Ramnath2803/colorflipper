let colorChoice = ['#FFFFFF', '#C0C0C0', 'rgb(254,30,40)', 'Violet','Indigo','Blue','Green','Yellow','Orange','Red']

let colorFetch = document.querySelector('.color')

$("main button").click(function() {

  let randomNumber = Math.floor(Math.random() * colorChoice.length)+1
  document.body.style.backgroundColor = colorChoice[randomNumber]
  colorFetch.textContent = colorChoice[randomNumber]
});


colorChoice=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']

$("main button").click(function() {
colochosen='#'
  let randomNumber = ''
  for(let i=0; i<6; i++)
  {
    randomNumber=Math.floor(Math.random() * colorChoice.length)
    colochosen+=colorChoice[randomNumber]
  }

  document.body.style.backgroundColor = colochosen
  colorFetch.textContent =colochosen
});

data = [
    {
    name: 'banana',
      price: 27
    },
    {
      name: "orange",
      price: 15
    },
    {
      name: 'apple',
      price: 10,
    }
  ]

  number=0

function muaapple(){
   number= number+10
}
function muabanana(){
   number= number+27
}
function muaorange(){
    number=number+15
}





  button1=document.querySelector('.apple')
  button1.addEventListener('click',muaapple)

  button2=document.querySelector('.banana')
  button2.addEventListener('click',muabanana)


  button3=document.querySelector('.orange')
  button3.addEventListener('click',muaorange)


  

console.log(number);

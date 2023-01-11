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
  buffer=''
for (let index = 0; index < data.length; index++) {

  
  buffer=buffer+  ', '   +data[index].name
  
}

function changemydiv(){
div=document.getElementById('id1')
console.log(div);
div.innerHTML=buffer
div.style.color='blue'
div.style.border='1px solid black'
div.style.display='inline'
div.style.padding='8px'
div.classList.add('id2')
}




function printstring(text1,text2) {
    console.log('ket qua la: ' + text1 + text2);

}
printstring('a','z')
printstring('b')
printstring('c')
printstring('d')






button=document.querySelector('#clickme')
button.addEventListener('click',changemydiv)

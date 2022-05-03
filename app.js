let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
 btn.addEventListener('click',function(e){
  const temp = e.currentTarget.classList;

  if(temp.contains('decrease')){
    count -= 1;
  }
  else if(temp.contains('increase')){
    count += 1;
  }
  else if(temp.contains('reset')){
    count = 0;
  }
  if(count > 0){
   value.style.color = "green"
  }
  else if(count < 0){
   value.style.color = "red"
  }
  else value.style.color = "black"
  value.textContent = count;
 })
 value.textContent = count;
})
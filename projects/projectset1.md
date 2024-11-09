


## project 1 solution

```Javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

### project 2 sol
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height =parseInt (document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const result= document.querySelector('#results')

  if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = `please give a valid number ${height}`
  } else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = `please give a valid number ${weight}`
  }
  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    if(bmi < 18.6){
    result.innerHTML = `<span> Under weight and ${bmi}<span>`;
  return 0;}
    
    if (bmi> 18.6 && bmi <24.6){
      result.innerHTML = `<span> normal weight and ${bmi}<span>`;
      return 0;
    }
    if (bmi > 24.9){
      result.innerHTML = `<span> over weight and ${bmi}<span>`;
      return 0;
    }

  }
  
  
  
})

```

## project 3 sol 
```javascript
const clock = document.getElementById('clock')

let date = new Date();
console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```
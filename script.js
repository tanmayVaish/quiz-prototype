const next = document.querySelector('.button');
const question1 = document.querySelector('#one');
const question2 = document.querySelector('#two');
const submit = document.querySelectorAll('.buttonSubmit');
const terms = document.querySelector('.terms');
const overlay = document.querySelectorAll('.overlay');
const attempt = document.querySelectorAll('.buttonAttempt');

let prev = null;

next.addEventListener('click', () => {
  question1.style.display = 'block';
  terms.style.display = 'none';
})

submit[0].addEventListener('click', () => {
  question1.style.display = 'none';
  question2.style.display = 'block';
})


function timer(){
  if (prev !== null)
    prev.style.display = 'none';
  overlay[i].style.display = 'grid';
  prev = overlay[i];
  if(++i<overlay.length){
    setTimeout(timer, 1000);
  }
}

let i=0;
submit[1].addEventListener('click', () => {
  question2.classList.add('blur');
  timer();
})


attempt[0].addEventListener('click', () => {
  question1.style.display = 'none';
  question2.style.display = 'block';
})

attempt[1].addEventListener('click', () => {
  question2.classList.add('blur');
  timer();
})


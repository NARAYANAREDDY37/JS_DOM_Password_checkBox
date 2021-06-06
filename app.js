let passBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');

checkBox.addEventListener('change', function (){
  let typeAttribute = passBox.getAttribute('type');
  if(typeAttribute == 'password'){
    passBox.setAttribute('type','text')
  }
  else{
    passBox.setAttribute('type','password');
  }
});

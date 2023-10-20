const age = document.getElementById('age');
const text = document.getElementById('text');

age.addEventListener('change', ageValidate)

function ageValidate () {
    const valueAge = age.value

    if (valueAge ) {
        text.textContent = "Eres mayor de edad";
    }else{
        text.textContent = "Eres menor de edad" ;
    }
    
}
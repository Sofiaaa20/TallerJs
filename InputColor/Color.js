document.addEventListener('DOMContentLoaded', function(){

    const header = document.getElementById('header');
    const inputColor = document.getElementById('color');
    const footer = document.getElementById('footer');

    inputColor.addEventListener('input', function(){
        const newColor = inputColor.value;
        header.style.backgroundColor = newColor;
        footer.style.backgroundColor = newColor;
    });
});



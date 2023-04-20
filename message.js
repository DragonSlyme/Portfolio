const form = document.querySelector('form');
const statutTxt = form.querySelector('.submit span');

form.onsubmit = (e)=>{
    e.preventDefault(); // Prevent form from submitting
    statutTxt.style.display = 'block'; // Show status text
    let xhr = new XMLHttpRequest(); // Create XML object
    xhr.open("POST", "php/form.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                statutTxt.textContent = data;
                form.reset();
            }
        }
    }
    let formData = new FormData(form); // Create new FormData object
    xhr.send(); // Send the form data to php
}
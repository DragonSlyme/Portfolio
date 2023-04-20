const form = document.querySelector('form');
const statutTxt = form.querySelector('.submit span');

form.onsubmit = (e)=>{
    e.preventDefault(); // Prevent form from submitting
    statutTxt.style.color = "#F24C4C"
    statutTxt.style.display = 'block'; // Show status text

    let xhr = new XMLHttpRequest(); // Create XML object
    xhr.open("POST", "form.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if (data.indexOf("Les champs email et message ne sont pas remplis") != -1 || data.indexOf("L'adresse email n'est pas valide") != -1 || data.indexOf("Une erreur est survenue lors de l'envoi du message, mince...") != -1) {
                    statutTxt.style.color = 'red';
                } else {
                    statutTxt.style.color = 'green';
                    form.reset();
                    setTimeout(()=>{
                        statutTxt.style.display = 'none';
                    }, 3000);
                }
                statutTxt.textContent = data;
            }
        }
    }
    let formData = new FormData(form); // Create new FormData object
    xhr.send(formData); // Send the form data to php
}
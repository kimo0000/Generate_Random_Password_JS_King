const form = document.querySelector('form');
const input = document.querySelector('input');
const copy = document.querySelector('form div i');
const popup = document.getElementById('popup');

const generate = "abcdefghijklmnopsqrtxyw-_0123456789&";

form.addEventListener('submit', (e) => {
   e.preventDefault();

   generatePass();
})

function generatePass() {
    let choosenPass = '';
    for(let i = 0; i < 10; i++) {
        let randomPassword = Math.floor(Math.random() * generate.length);
        // console.log(generate[randomPassword]);
        choosenPass += generate[randomPassword];
    }

    input.value = choosenPass;
}

copy.addEventListener("click", (e) => {
     generatePopup();
});

function generatePopup() {
     if (input.value != "") {
       copy.title = "copie";
       input.select();
       input.setSelectionRange(0, 9999);
       navigator.clipboard.writeText(input.value);

       popup.innerText = input.value;
       if (popup.innerText != "") {
         popup.classList.add("show");
         setTimeout(() => popup.classList.remove("show"), 2000);
       }
     }
}







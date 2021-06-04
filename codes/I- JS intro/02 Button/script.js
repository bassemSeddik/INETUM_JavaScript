let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');
monBouton.addEventListener('click', ChangerTitre);

function ActiverBouton(){
    ChangerTitre();
}


/*monBouton.addEventListener('click', function() {
  ChangerTitre();
});*/


if (!localStorage.getItem('champTitre')) {
    ChangerTitre();
} else {
    let t2 = localStorage.getItem('champTitre');
    monTitre.textContent = 'Titre: ' + t2;
}


function ChangerTitre() {
    let t = prompt('Veuillez un titre.');
    localStorage.setItem('champTitre', t);
    monTitre.textContent = 'Titre: ' + t ;
}
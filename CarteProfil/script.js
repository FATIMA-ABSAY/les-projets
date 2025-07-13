
function changerCouleur() {
  const card = document.querySelector('.card');
  const couleurs = ['#ffddcc', '#ccffcc', '#ddeeff', '#fff9c4', '#f8bbd0'];
  const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
  card.style.backgroundColor = couleurAleatoire;
}
function toggleBio() {
    const bio = document.querySelector('.bio');
    if(bio.style.display === 'none'){
        bio.style.display = 'block';

    }else {
        bio.style.display = 'none';
    }
}


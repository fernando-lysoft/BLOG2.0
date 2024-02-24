//cuando haga scroll la barra de menu se pondra de color blanco

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

//Con este código, el parráfo aparecerá gradualmente al cargar la página highlight-text.
document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.querySelector('p');
    parrafo.classList.add('highlight-text');
  });

  //Con este código, el parráfo aparecerá gradualmente al cargar la página.
document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.querySelector('p');
    parrafo.classList.add('centered-text');
  });

  //Con este código, el parráfo aparecerá gradualmente al cargar la página.
document.addEventListener('DOMContentLoaded', () => {
    const parrafo = document.querySelector('p');
    parrafo.classList.add('hero h1');
  });


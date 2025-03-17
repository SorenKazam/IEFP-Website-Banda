// Aguarda o carregamento da página
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Função para verificar se os elementos estão visíveis
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Aplica a classe slide-up quando o usuário rolar a página
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".slide-up");
  elements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("visible");
    }
  });
});

// Detectar quando o scroll ultrapassar a altura do header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > header.offsetHeight) {
      navbar.classList.add("fixed");
      navbar.classList.add("glassEffect");
    } else {
      navbar.classList.remove("fixed");
      navbar.classList.remove("glassEffect");
    }
  }
});

//navbar dinamica LETS GOOOOOOOOOOOOOOOOO
window.addEventListener("resize", () => {
  var navbar = document.querySelector("#navbar");
  var navbarLinks = document.querySelector("#navbar-links");
  var navbarHamburguer = document.querySelector("#navbar-hamburguer");
  var menuOpened = false;

  // verificar primeiro se todos os elementos existem na pagina porque se nao BOOOMN
  if (navbar && navbarLinks && navbarHamburguer) {
    if (window.innerWidth < 768) {
      navbarLinks.style.display = "none";
      navbarHamburguer.style.display = "block";
      navbarHamburguer.addEventListener("click", () => {
        if (!menuOpened) {
          navbarLinks.style.display = "block";
          menuOpened = true;
        } else {
          navbarLinks.style.display = "none";
          menuOpened = false;
        }
      });
    } else {
      navbarLinks.style.display = "flex";
      navbarHamburguer.style.display = "none";
    }
  }
});

// Get the button
let mybutton = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  // verifica se existe o butao parta voltao ao topo yah? bueda fixe baby bro
  if (mybutton) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// super cool animation by tiago guerreiro omg
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("ativo");
    } else {
      entrada.target.classList.remove("ativo");
    }
  });
});

const elementosOcultos = document.querySelectorAll(".hidden");
elementosOcultos.forEach((elemento) => observador.observe(elemento));

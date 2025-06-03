// script.js

document.addEventListener("DOMContentLoaded", () => {
  const encontrados = [
    "ALEX",
    "ALANA RS-B",
    "ALEMÃO RS P",
    "ALVIN RS P",
    "ALEMÃO RS-B",
    "ALFREDO",
  ];

  const perdidos = encontrados; // Só para simular

  const encontradosContainer = document.getElementById("encontrados");
  const perdidosContainer = document.getElementById("perdidos");

  encontrados.forEach((nome, i) => {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `<img src="https://via.placeholder.com/150?text=${nome}" alt="${nome}" /><div>${nome}</div>`;
    card.addEventListener("click", () => alert(`Pet encontrado: ${nome}`));
    encontradosContainer.appendChild(card);
  });

  perdidos.forEach((nome, i) => {
    const card = document.createElement("div");
    card.className = "pet-card pet-card--inactive";
    card.innerHTML = `<img src="https://via.placeholder.com/150?text=${nome}" alt="${nome}" /><div>${nome}</div>`;
    card.addEventListener("click", () => alert(`Pet perdido: ${nome}`));
    perdidosContainer.appendChild(card);
  });
});


// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');


// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Animação do Shimeji Corrigida
document.addEventListener('DOMContentLoaded', () => {
    // Cria elementos
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const shimejiContainer = document.createElement('div');
    shimejiContainer.id = 'shimeji-container';
    
    const shimeji = document.createElement('img');
    shimeji.id = 'shimeji';
    shimeji.src = './image/GATO.gif';
    shimeji.alt = 'Shimeji Cat';
    
    // Configuração de estilo
    Object.assign(shimeji.style, {
        position: 'absolute',
        bottom: '20px',
        right: '-100px',
        height: '80px',
        width: 'auto'
    });

    // Adiciona ao DOM
    shimejiContainer.appendChild(shimeji);
    footer.appendChild(shimejiContainer);

    // Animação
    let start = null;
    const duration = 5000; // 5 segundos
    const startPosition = -100;
    const endPosition = window.innerWidth + 100;

    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        // Calcula nova posição
        const newX = startPosition + 
            (progress/duration) * (endPosition - startPosition);
        
        shimeji.style.left = `${newX}px`;
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            shimejiContainer.remove();
        }
    }

    // Inicia após carregar a imagem
    shimeji.onload = () => {
        shimeji.style.opacity = '1';
        requestAnimationFrame(animate);
    };

    // Trata erro de carregamento
    shimeji.onerror = () => {
        console.error('Erro ao carregar o shimeji');
        shimejiContainer.remove();
    };
});
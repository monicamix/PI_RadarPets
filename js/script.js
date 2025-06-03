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

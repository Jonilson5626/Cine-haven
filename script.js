let currentMovies = [...movies];
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  document.querySelectorAll('.sidebar a[data-category]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('.sidebar a.active')?.classList.remove('active');
      link.classList.add('active');
      const cat = link.dataset.category;
      currentMovies = cat === 'all' ? movies : movies.filter(m => m.category === cat);
      renderMovies();
    });
  });
  document.getElementById('search').addEventListener('input', e => {
    currentMovies = movies.filter(m => m.title.toLowerCase().includes(e.target.value.toLowerCase()));
    renderMovies();
  });
});
function renderMovies() {
  const grid = document.getElementById('movies-grid');
  grid.innerHTML = currentMovies.map(m => `
    <div class="movie-card" onclick="openModal(${m.id})">
      <img src="${m.poster}" alt="${m.title}" class="movie-poster">
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-rating">${m.rating}</div>
      </div>
    </div>
  `).join('');
}
function openModal(id) {
  const movie = movies.find(m => m.id === id);
  const modal = document.querySelector('.modal') || createModal(movie);
  modal.querySelector('.trailer iframe').src = movie.trailer;
  document.body.appendChild(modal);
  modal.classList.add('active');
}
function createModal(movie) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <iframe class="trailer" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>
      <h2>${movie.title}</h2>
      <p>${movie.desc}</p>
      ${Object.entries(movie.downloads).map(([q,link]) => `<a href="${link}" class="download-btn">${q.toUpperCase()}</a>`).join('')}
      <button onclick="this.parentElement.parentElement.remove(); this.parentElement.parentElement.classList.remove('active')" class="download-btn">Fechar</button>
    </div>
  `;
  return modal;
}

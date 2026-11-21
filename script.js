const home = document.getElementById('home');
const letter = document.getElementById('letter');
const openLetter = document.getElementById('openLetter');
const backHome = document.getElementById('backHome');
const song = document.getElementById('song');
const songFile = document.getElementById('songFile');

openLetter.addEventListener('click', () => {
  home.classList.remove('active');
  letter.classList.add('active');
  window.scrollTo(0, 0);
});

backHome.addEventListener('click', () => {
  letter.classList.remove('active');
  home.classList.add('active');
  window.scrollTo(0, 0);
});

songFile.addEventListener('change', () => {
  const file = songFile.files && songFile.files[0];
  if (!file) return;
  const oldSource = song.querySelector('source');
  if (oldSource) oldSource.remove();
  song.src = URL.createObjectURL(file);
  song.load();
  song.play().catch(() => {});
});

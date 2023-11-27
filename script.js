const sculptureContainer = document.getElementById('sculpture-container');
const light = document.getElementById('light');

sculptureContainer.addEventListener('mousemove', (e) => {
  const offsetX = e.clientX / window.innerWidth - 0.5;
  const offsetY = e.clientY / window.innerHeight - 0.5;

  const intensity = 1.5;
  const translateX = offsetX * intensity * 100;
  const translateY = offsetY * intensity * 100;

  const gradientX = 50 + translateX;
  const gradientY = 50 + translateY;

  light.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, transparent 1%, rgba(0, 0, 0, 1) 70%)`;
});
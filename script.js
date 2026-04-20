function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  clock.textContent = `${h}:${m}`;
}

updateClock();
setInterval(updateClock, 1000);

document.getElementById('email').addEventListener('input', function(event) {
  const input = event.target;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.value)) {
    input.setCustomValidity('Некорректный формат электронной');
  } else;
  }
});

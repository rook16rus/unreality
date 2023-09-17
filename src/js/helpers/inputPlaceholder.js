export default function inputPlaceholder() {
  const inputs = document.querySelectorAll('.input');

  inputs.forEach(input => {
    const label = input.nextElementSibling;

    input.addEventListener('focus', () => label.classList.add('active'))

    input.addEventListener('blur', () => {
      const value = input.value;
      value ? label.classList.add('active') : label.classList.remove('active');
    })

    input.addEventListener('input', () => {
      const value = input.value;
      value ? label.classList.add('active') : label.classList.remove('active');
    })
  })
}

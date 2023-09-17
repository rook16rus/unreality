export default function fileInputs() {
    const inputs = document.querySelectorAll('.js-input-file');

    inputs.forEach( input => {
      const inputContainer = input.closest('.js-input-file-container');
      const inputFileDesc = inputContainer.querySelector('.js-input-file-desc');

        input.addEventListener('change', function (e) {
            if (this.files[0]) {
              inputFileDesc.innerText = this.files[0].name;
              input.classList.add('active')
            } else {
              inputFileDesc.innerText = input.dataset.placeholder;
              input.classList.remove('active')
            }
        });

        const form = input.closest('form');

        form.addEventListener('reset', () => {
          inputFileDesc.innerText = input.dataset.placeholder;
          input.classList.remove('active')
        })
    });
}

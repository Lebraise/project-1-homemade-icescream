(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-mob]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
      
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

 
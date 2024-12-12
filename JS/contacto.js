var noticiaModal = document.getElementById('noticiaModal')
         noticiaModal.addEventListener('show.bs.modal', function (event) {
         var button = event.relatedTarget // Botón que activó el modal
         var title = button.getAttribute('data-bs-title') // Extraer el título
         var content = button.getAttribute('data-bs-content') // Extraer el contenido
         
         var modalTitle = noticiaModal.querySelector('.modal-title')
         var modalBody = noticiaModal.querySelector('.modal-body')
         
         modalTitle.textContent = title
         modalBody.textContent = content
         })
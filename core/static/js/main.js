// Función global para mostrar el modal de aviso
window.mostrarAvisoNoDisponible = function(event) {
    event.preventDefault();

    // 1. Buscamos si el modal ya existe en la página
    let modalOverlay = document.getElementById('miModalPersonalizado');

    // 2. Si no existe, lo creamos dinámicamente
    if (!modalOverlay) {
        const modalHtml = `
        <div id="miModalPersonalizado" class="custom-modal-overlay">
            <div class="custom-modal-box">
                <div class="custom-modal-header">
                    <h5 class="custom-modal-title">Aviso importante</h5>
                    <button type="button" class="custom-modal-close" onclick="cerrarModal()">&times;</button>
                </div>
                <div class="custom-modal-body">
                    Por el momento este servicio no está disponible de forma automática. ¡Contáctanos directamente por WhatsApp para atenderte!
                </div>
                <div class="custom-modal-footer">
                    <button type="button" class="custom-btn-cerrar" onclick="cerrarModal()">Cerrar</button>
                    <a href="https://wa.me/5214421277702?text=Buen%20d%C3%ada,%20me%20gustar%C3%ada%20cotizar%20un%20servicio" class="custom-btn-whatsapp" target="_blank">Ir a WhatsApp</a>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modalOverlay = document.getElementById('miModalPersonalizado');
    }

    // 3. Mostramos el modal activando su clase CSS
    modalOverlay.classList.add('active');
};

// Función global para cerrar el modal
window.cerrarModal = function() {
    const modalOverlay = document.getElementById('miModalPersonalizado');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
    }
};
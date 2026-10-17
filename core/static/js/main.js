window.avisoNoDisponible = function(event){
    event.preventDefault();

    let modalOverlay = document.getElementById('modalCatalogoEnDesarrollo')

    if (!modalOverlay){
        const modalHtml=`
        <div id="modalCatalogoEnDesarrollo" class="modal-overlay">
            <div class="modal-box">
                <div class="modal-header">
                    <h4>¡Estamos trabajando en ello!</h4>
                    <button type="button" class="modal-close" onclick="cerrarModal()">&times;</button>
                </div>
                <div class="modal-body">
                    Aún estamos trabajando en nuestra sección de catálogo. Si tienes alguna duda o buscas alguna cotización, contáctanos directamente. 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-cerrar" onclick="cerrarModal()">Cerrar</button>
                    <a href="https://wa.me/5214421277702?text=Buen%20d%C3%ada,%20tengo%20una%20duda%20sobre%20un%20servicio%20o%20refacción" class="custom-btn-whatsapp" target="_blank">WhatsApp</a>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modalOverlay = document.getElementById('modalCatalogoEnDesarrollo'); 
    }

    modalOverlay.classList.add('active');

};

window.cerrarModal = function(){
    const modalOverlay = document.getElementById('modalCatalogoEnDesarrollo');
    if (modalOverlay){
        modalOverlay.classList.remove('active');
    }
};

document.addEventListener("DOMContentLoaded", function() {

    console.log("¡El script del menú está funcionando!"); 
    const menuToggle = document.getElementById("menuToggle");
    const navBar = document.querySelector(".nav-bar"); 

    if (menuToggle && navBar) {
        menuToggle.addEventListener("click", function() {
            navBar.classList.toggle("active");
        });
    }
});
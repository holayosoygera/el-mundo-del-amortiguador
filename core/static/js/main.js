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

document.addEventListener("DOMContentLoaded",() => {
    const avisoPriv = document.getElementById('aviso-priv');
    const overlay = document.getElementById('overlay');

    if(avisoPriv && overlay){
        const screenContent = overlay.querySelector('.screen-content');

        avisoPriv.addEventListener('click', (e) =>{
            e.preventDefault();

            screenContent.innerHTML=`
            <div class="legal-container">
                <div class="legal-header">
                    <h1 class="legal-title">AVISO DE PRIVACIDAD</h1>
                    <button id="close-legal" class="close-btn">&times;</button>
                </div>
                <div class="legal-body">
                    <div class="legal-container">
                        <p><strong> El Mundo del Amortiguador</strong>, con domicilio en <strong>Santiago de Querétaro, Querétaro, México.</strong> es responsable del tratamiento y protección de los datos personales que usted nos proporcione a través de este sitio web, vía telefónica o mediante canales de mensajería digital, reconociendo la importancia de proteger su privacidad.</p>
                    </div>

                    <div class="legal-container">
                        <h2 class="legal-subtitle">1. ¿Qué datos personales recabamos?</h2>
                        <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, podremos recabar las siguientes categorias de datos personales:</p>
                        <p><strong>Datos de identificación y contacto:</strong> Nombre completo, número telefónico y correo electrónico.</p>
                        <p><strong>Datos del Vehículo:</strong> Marca, modeloy año (necesarios para la cotización de refacciones, suspensiones y la programación de servicios).</p>
                    </div>

                    <div class="legal-container">
                        <h2 class="legal-subtitle">2. ¿Para que fines utilizamos sus datos personales?</h2>
                        <p>Los datos perosnales que recabamos serán utilizados para las siguientes finalidades que son necesarias para el servicio solicitado:</p>
                        <p><strong>Finalidades Principales:</strong> Brindar atención, cotizaciones, presupuestos y agendar citas de diangóstico, mantenimiento, reparación o instalación de amortiguadores y sistemas de suspensión en nuestro taller.</p>
                        <p><strong>Finalidades Secundarias:</strong> Contactarle para recordatorios de servicios preventivos, seguimiento de garantías y, en caso de que usted lo solicite expresamente, la emisión de facturas electrónicas (CFDI) por los servicios prestados.</p>
                        <p>Sus datos no serán comercializados, cedidos ni compartidos con terceros con fines comerciales, publicitarios o de marketing ajenos a nuestro establecimiento.</p>
                    </div>

                    <div class="legal-container">
                        <h2 class="legal-subtitle">3. ¿Como puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación u Oposición)?</h2>
                        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la correción de su información personal en caso de que esté desactualziada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos para fines específicos (Oposición).</p>
                        <p>Para el ejercicio de cualquiera de los derechos ARCo, puede enviar una solicitud a través de nuestros canales de contacto oficiales o números telefónicos publicados en este sitio web.</p>
                    </div>

                    <div class="legal-container">
                        <h2 class="legal-subtitle">4. Cambios al Aviso de Privacidad</h2>
                        <p>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualziaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades operativas y comerciales. Cualquier modificación estará disponible para su consulta a travpes de este sitio web.</p>
                    </div>
                </div>
            </div>
            `;

            overlay.classList.add('active');

            const closeBtn = screenContent.querySelector('#close-legal')
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
            });
        });

        overlay.addEventListener('click',(e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
});
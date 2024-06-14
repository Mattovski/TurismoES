document.addEventListener('DOMContentLoaded', () => {
    const serviciosContainer = document.getElementById('servicios-container');

    // Obtener los datos de los servicios desde la API
    fetch('/api/servicios/')
        .then(response => response.json())
        .then(data => {
            const servicios = data;

            servicios.forEach(servicio => {
                const card = crearCardProducto(servicio);
                serviciosContainer.appendChild(card);
            });

            // Función encargada de crear y modificar las cartas de los servicios
            function crearCardProducto(servicio) {
                const card = document.createElement('div');
                // Modificar carta/s
                card.classList.add('col-md-3', 'mb-4');

                card.innerHTML = `
                    <div class="card mb-3" style="width: 940px; maxWidth: 940px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img 
                                    src="/media/${servicio.foto}" 
                                    class="img-fluid rounded-start" 
                                    alt="Imagen Servicio"
                                    style="width: 100%;"
                                >
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h6 class="card-text">${servicio.descripcion}</h6>
                                    <br><br><br>
                                    <h6 class="card-text">Precio: ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(servicio.precio)}</h6>
                                </div>   
                            </div>
                        </div>
                    </div>
                `;

                return card;
            }
        })
        .catch(error => console.error('Error al obtener los datos de los servicios:', error));
});
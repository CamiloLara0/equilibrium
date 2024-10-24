document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementsByClassName('close')[0];
    const galleryItems = document.querySelectorAll('.gallery-item');

    const galleryData = [
        {
            id: 1,
            title: "Sala de Masajes Relajantes",
            description: "Nuestra sala de masajes está diseñada para proporcionar una experiencia de relajación profunda. Equipada con camillas cómodas y un ambiente tranquilo, es el lugar perfecto para nuestros tratamientos de masajes terapéuticos y relajantes."
        },
        {
            id: 2,
            title: "Área de Hidroterapia",
            description: "El área de hidroterapia ofrece una variedad de tratamientos que utilizan el agua para aliviar el dolor y promover la relajación. Incluye jacuzzis, duchas terapéuticas y piscinas de contraste térmico."
        },
        {
            id:  3,
            title: "Tratamientos Faciales de Lujo",
            description: "Ofrecemos tratamientos faciales de alta gama utilizando productos de primera calidad. Nuestros especialistas personalizan cada tratamiento para abordar las necesidades específicas de tu piel."
        },
        {
            id: 4,
            title: "Sauna y Baño de Vapor",
            description: "Nuestras instalaciones incluyen saunas y baños de vapor para ayudarte a desintoxicar tu cuerpo, mejorar la circulación y relajar los músculos tensos."
        },
        {
            id: 5,
            title: "Área de Relajación",
            description: "Un espacio tranquilo y confortable donde puedes descansar antes o después de tus tratamientos. Equipado con cómodas tumbonas y un ambiente sereno."
        },
        {
            id: 6,
            title: "Consultorio Médico",
            description: "Nuestro consultorio médico está equipado con tecnología de vanguardia para proporcionar diagnósticos precisos y tratamientos efectivos. Aquí, nuestros profesionales médicos ofrecen consultas y servicios de medicina estética."
        }
    ];

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const itemData = galleryData.find(data => data.id === itemId);
            
            if (itemData) {
                modalTitle.textContent = itemData.title;
                modalImage.src = this.querySelector('img').src;
                modalImage.alt = itemData.title;
                modalDescription.textContent = itemData.description;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Carousel functionality
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds
});
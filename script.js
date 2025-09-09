// Datos de los productos basados en la información del archivo info.txt
const productos = [
    {
        id: 1,
        nombre: "Terremoto",
        imagen: "img/productos/terremoto.jpg",
        descripcion: "En septiembre, no puede faltar un refrescante terremoto 😍🇨🇱 Por eso tenemos nuestra versión en helado 🍦🐼 la junta perfecta en Panda Cream 🎉🎉"
    },
    {
        id: 2,
        nombre: "Golden Hour",
        imagen: "img/productos/goldenhour.jpg",
        descripcion: "Golden hour, un helado en la mano y tus personas favoritas cerca…😍🤩 El momento perfecto para disfrutar de nuestros sabores únicos."
    },
    {
        id: 3,
        nombre: "Café Helado",
        imagen: "img/productos/cafehelado.jpg",
        descripcion: "☕❄️ En Panda Cream, el invierno también se vive con sabor y frescura. Perfecto para los amantes del café con un toque helado."
    },
    {
        id: 4,
        nombre: "El Pandita",
        imagen: "img/productos/pandita.jpg",
        descripcion: "¡El Pandita llegó para endulzarte el día! Pequeño en tamaño, gigante en sabor. 😍🍦 ¿Ya probaste el helado más tierno de Panda Cream? 🤩💖"
    },
    {
        id: 5,
        nombre: "Waffle en Cono",
        imagen: "img/productos/waffleencono.JPG",
        descripcion: "¿Waffle en cono? Sí, leíste bien... crujiente, calentito y relleno con helado, salsa, crema chantilly, toppings y más salsa por si quedaste corto 🍫🍓🤤 Esto no se comparte, ¡se disfruta solito hasta el final! 😎🍦"
    },
    {
        id: 6,
        nombre: "Waffle Caliente",
        imagen: "img/productos/wafflecaliente.jpg",
        descripcion: "Invierno no se trata solo de frío… ¡también se trata de antojos irresistibles! ✨ Imagina un waffle calientito, con helado cremoso, toppings a tu gusto 🍫🍓 Perfecto para esos días fríos donde solo necesitas un momento dulce para sonreír 😍"
    },
    {
        id: 7,
        nombre: "Super Copanda",
        imagen: "img/productos/supercopanda.jpg",
        descripcion: "❄️🍦 En invierno, también hay lugar para los caprichos dulces 🍦❄️ Prueba nuestra Super Copanda, la combinación perfecta de helado con tus toppings favoritos: Oreo, M&M, Bubble Gum, Chocolate Milka. ¡Ven y elige tu favorita para darle sabor a este invierno! 💙✨"
    },
    {
        id: 8,
        nombre: "Milkshake",
        imagen: "img/productos/milkshake.jpg",
        descripcion: "🥤✨ Cuando la vida te pida algo dulce... ¡responde con un milkshake! Cremoso, refrescante y con ese toque mágico que solo nuestros sabores tienen 🍓🍫🍪 Perfecto para subir el ánimo o simplemente darte un gusto porque sí."
    },
    {
        id: 9,
        nombre: "Jugo Natural",
        imagen: "img/productos/jugonatural.jpg",
        descripción: "Nunca estará demás un refrescante y exquisito jugo natural 😍 Perfecto para acompañar nuestros dulces o para refrescarte en cualquier momento del día."
    },
    {
        id: 10,
        nombre: "Helado Artesanal",
        imagen: "img/productos/heladoartesanal.jpg",
        descripcion: "Nuestros helados artesanales, elaborados con los mejores ingredientes y todo el amor de Panda Cream. Cada cucharada es una experiencia única de sabor y cremosidad."
    },
    {
        id: 11,
        nombre: "Tiramisú",
        imagen: "img/productos/tiramisu.jpg",
        descripcion: "El clásico italiano reinventado en versión helado. Capas de sabor que te transportarán directamente a Italia, con todo el estilo y calidad de Panda Cream."
    }
];

// Función para cargar productos dinámicamente
const cargarProductos = () => {
    const productosGrid = document.getElementById('productosGrid');
    
    productos.forEach((producto, index) => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.style.animationDelay = `${index * 0.1}s`;
        
        productoCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-image" loading="lazy">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
            </div>
        `;
        
        productosGrid.appendChild(productoCard);
    });
};

// Función para manejar el menú móvil
const toggleMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
};

// Función para el modal de imágenes
const setupImageModal = () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    
    // Agregar evento click a todas las imágenes de la galería
    const galeriaImages = document.querySelectorAll('.galeria-item img');
    galeriaImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    
    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer click fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
};

// Función para smooth scroll personalizado
const setupSmoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Función para animaciones al hacer scroll
const setupScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.producto-card, .galeria-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Función para manejar el cambio de color del header al hacer scroll
const setupHeaderScroll = () => {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(223, 29, 188, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #df1dbc, #0b86c2)';
            header.style.backdropFilter = 'none';
        }
    });
};

// Función para lazy loading de imágenes
const setupLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
};

// Función para manejar errores de carga de imágenes
const setupImageErrorHandling = () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Error al cargar la imagen: ${this.src}`);
        });
    });
};

// Función principal de inicialización
const init = () => {
    // Cargar productos
    cargarProductos();
    
    // Configurar funcionalidades
    toggleMobileMenu();
    setupImageModal();
    setupSmoothScroll();
    setupScrollAnimations();
    setupHeaderScroll();
    setupLazyLoading();
    setupImageErrorHandling();
    
    // Agregar clase loaded al body para animaciones CSS
    document.body.classList.add('loaded');
};

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Manejar redimensionamiento de ventana
window.addEventListener('resize', () => {
    // Cerrar menú móvil si se redimensiona a desktop
    if (window.innerWidth > 768) {
        document.querySelector('.nav').classList.remove('active');
    }
});

// Prevenir zoom en dispositivos móviles al hacer doble tap
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
});

let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Funcionalidad del botón flotante QR
const qrFloatBtn = document.getElementById('qr-float-btn');
const qrModal = document.getElementById('qr-modal');
const qrClose = document.querySelector('.qr-close');
const downloadBtn = document.getElementById('download-qr');
const shareBtn = document.getElementById('share-qr');
const qrImage = document.getElementById('qr-image');

// Abrir modal QR
if (qrFloatBtn) {
    qrFloatBtn.addEventListener('click', function() {
        qrModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modal QR
if (qrClose) {
    qrClose.addEventListener('click', function() {
        qrModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Cerrar modal al hacer clic fuera
if (qrModal) {
    qrModal.addEventListener('click', function(e) {
        if (e.target === qrModal) {
            qrModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Función para descargar QR
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            // Crear enlace de descarga
            const link = document.createElement('a');
            link.download = 'pandacream-qr.png';
            link.href = canvas.toDataURL();
            link.click();
        };
        
        img.src = qrImage.src;
    });
}

// Función para compartir QR
if (shareBtn) {
    shareBtn.addEventListener('click', async function() {
        if (navigator.share) {
            try {
                // Convertir imagen a blob para compartir
                const response = await fetch(qrImage.src);
                const blob = await response.blob();
                const file = new File([blob], 'pandacream-qr.png', { type: 'image/png' });
                
                await navigator.share({
                    title: 'Código QR - Panda Cream',
                    text: 'Escanea este código QR para acceder a nuestro catálogo',
                    files: [file]
                });
            } catch (error) {
                console.log('Error al compartir:', error);
                fallbackShare();
            }
        } else {
            fallbackShare();
        }
    });
}

// Función alternativa para compartir (copiar enlace)
function fallbackShare() {
    const url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Enlace copiado al portapapeles');
        }).catch(() => {
            prompt('Copia este enlace:', url);
        });
    } else {
        prompt('Copia este enlace:', url);
    }
}

// Cerrar modal QR con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && qrModal && qrModal.style.display === 'block') {
        qrModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
// src/lib/data.js
export const hero = {
  titleTop: "Ponete",
  titleMid: "modo",
  titleBottom: "banana",
  subtitle: "Tostado fresco, envío en el día.",
  image: { src: "/images/banana/platanohero.webp", alt: "Banana con café" },
  ctas: {
    primary: { label: "Probar ahora", href: "#compra" },
    secondary: { label: "Conocé nuestros granos", href: "#compra" }
  }
};

export const nav = {
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" }
  ],
  cta: { label: "Pedir café", href: "#compra" },
  colors: { bg: "#E3551E" }
};

export const about = {
  id: "about",
  // Título dividido en líneas, como en la referencia
  titleTop: "Creemos en el ",
  titleMid: "café honesto",
  titleBottom: "",
  // Párrafos (podés sumar/quitar)
  paragraphs: [
    "Tostamos granos frescos cada día de manera artesanal y cercana.",
    "Queremos que disfrutes un café puro, sin secretos."
  ],
  cta: { label: "Conoce nuestra historia", href: "#historia" },
  // Imagen principal (la banana en el sillón)
  image: { src: "/images/banana/platano-about.png", alt: "Banana relajada con café" },
  // Colores (solo referencia; el componente usa hex directos)
  colors: { bg: "#FBF1C6", heading: "#2B1C0E", body: "#2B1C0E", cream: "#F7D58A", brown: "#2B1C0E" }
};

// Cómo funciona
export const howItWorks = {
  id: "como-funciona",
  title: "Cómo funciona",
  steps: [
    { title: "Hacé tu pedido acá", image: { src: "/images/banana/platano-pc.png", alt: "Banana haciendo un pedido en la laptop" } },
    { title: "Te lo llevamos sin vueltas", image: { src: "/images/banana/platano-bici.png", alt: "Banana en bici llevando café" } },
    { title: "Lo disfrutás como siempre", image: { src: "/images/banana/platano-relax.png", alt: "Banana relajada con café en sillón" } }
  ],
  ctaBand: {
    leftLabel: "Envíos gratis",
    button: { label: "Quiero mi café", href: "#compra" }
  },
  colors: {
    bg: "#3D1C0F",          // fondo seccion
    frame: "#D18B28",       // líneas/divisores marco
    heading: "#F4DEAA",     // “Cómo funciona”
    text: "#F4DEAA",        // textos en general
    cream: "#F7D58A",       // pill crema
    coffee: "#2B1C0E"       // marrón oscuro para textos/bordes
  }
};


// --- BLENDS ----------------------------------------------------
export const blends = {
  id: "compra",
  sectionTitle: "Nuestros Blends",
  sectionSubtitle: "Descubrí el sabor de cada origen",
  // Fondo de la sección (igual al de las refs crema)
  colors: {
    bg: "#FBF1C6",        // crema de fondo de sección
    border: "#2B1C0E",    // contornos
    text: "#2B1C0E",      // textos
    pill: "#F7D58A",      // botones crema
    featuredBg: "#F3A11A" // naranja del recuadro destacado (3ra imagen)
  },
  featured: {
    tag: "PREMIUM",
    name: "BLEND BANANA",
    note: "Producto Estrella",
    image: { src: "/images/banana/banana.png", alt: "Bolsa Blend Banana Premium" },
    cta: { label: "Comprar", href: "#comprar-blend-banana" },
    modal: {
      title: "Blend Banana · Premium",
      description: "Nuestro blend insignia: balance entre dulzor tipo caramelo y notas a cacao. Cuerpo medio-alto y final sedoso.",
      attributes: [
        { k: "Origen", v: "Colombia · Brasil" },
        { k: "Proceso", v: "Lavado / Natural" },
        { k: "Tostado", v: "Medio" }
      ],
      notes: ["Caramelo", "Cacao", "Avellana"],
      priceFrom: "$12",
      gallery: ["/images/banana/banana.png"]
    },
  },
  items: [
    {
      tag: "REGULAR",
      name: "COLOMBIA COFFEE",
      image: { src: "/images/banana/colombia.png", alt: "Bolsa Colombia" },
      cta: { label: "Comprar", href: "#comprar-colombia" },
      modal: {
        title: "Colombia · Regular",
        description: "Altura y acidez brillante con dulzor a panela. Ideal para filtrados.",
        attributes: [
          { k: "Origen", v: "Huila, Colombia" },
          { k: "Proceso", v: "Lavado" },
          { k: "Tostado", v: "Medio-Claro" }
        ],
        notes: ["Panela", "Cítricos", "Cacao suave"],
        priceFrom: "$10",
        gallery: ["/images/banana/colombia.png"]
      }
    },
    {
      tag: "REGULAR",
      name: "COFFEE BRASIL",
      image: { src: "/images/banana/brasil.png", alt: "Bolsa Brasil" },
      cta: { label: "Comprar", href: "#comprar-brasil" },
      modal: {
        title: "Brasil · Regular",
        description: "Cuerpo alto, notas a chocolate y frutos secos. Perfecto para espresso.",
        attributes: [
          { k: "Origen", v: "Minas Gerais, Brasil" },
          { k: "Proceso", v: "Natural" },
          { k: "Tostado", v: "Medio" }
        ],
        notes: ["Chocolate", "Nuez", "Vainilla"],
        priceFrom: "$9.9",
        gallery: ["/images/banana/brasil.png"]
      }
    },
    {
      tag: "REGULAR",
      name: "ETIOPÍA ETIOPÍA",
      image: { src: "/images/banana/etiopia.png", alt: "Bolsa Etiopía" },
      cta: { label: "Comprar", href: "#comprar-etiopia" },
      modal: {
        title: "Etiopía · Regular",
        description: "Aromas florales y frutas rojas. Complejo y jugoso.",
        attributes: [
          { k: "Origen", v: "Yirgacheffe, Etiopía" },
          { k: "Proceso", v: "Lavado" },
          { k: "Tostado", v: "Claro" }
        ],
        notes: ["Jazmín", "Frutos rojos", "Miel"],
        priceFrom: "$11",
        gallery: ["/images/banana/etiopia.png"]
      }
    },
    {
      tag: "PREMIUM",
      name: "RESERVA ESPECIAL",
      image: { src: "/images/banana/premium.png", alt: "Bolsa Reserva Especial" },
      cta: { label: "Comprar", href: "#comprar-reserva" },
      modal: {
        title: "Reserva Especial · Premium",
        description: "Micro-lotes seleccionados. Perfil dulce y complejo con final largo.",
        attributes: [
          { k: "Origen", v: "Rotativo, microlotes" },
          { k: "Proceso", v: "Experimental" },
          { k: "Tostado", v: "Medio-Claro" }
        ],
        notes: ["Caramelo", "Fruta madura", "Especias"],
        priceFrom: "$14.5",
        gallery: ["/images/banana/premium.png"]
      }
    }
  ]
};


// --- CONTACT ----------------------------------------------------
export const contact = {
  id: "contact",
  title: "tomemos un feca",
  fields: [
    { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
    { name: "email", label: "Email", type: "email", placeholder: "Tu correo" },
    { name: "message", label: "Mensaje", type: "textarea", placeholder: "Escribí tu mensaje" },
  ],
  submit: {
    label: "Enviar mensaje",
    href: "#enviar-mensaje"
  },
  image: {
    src: "/images/banana/banana-contacto.png",
    alt: "Banana con headset"
  },
  band: {
    text: "Envíos gratis a partir de $50",
    icon: "🚚", // si luego querés usar react-icons lo adaptamos
  }
};

// --- FOOTER ----------------------------------------------------
export const footer = {
  id: "footer",
  colors: {
    bg: "#2B1C0E",           // fondo global muy oscuro
    brandCard: "#386641",    // tarjeta amarilla "Banana Coffee"
    contactCard: "#C65A1E",  // tarjeta naranja de contacto
    border: "#2B1C0E",       // contornos/sombras duras
    textDark: "#2B1C0E",     // texto marrón oscuro
    textLight: "#FFF3D0",    // texto claro sobre fondos oscuros
    pillDark: "#2B1C0E",     // píldora de navegación oscura
    pillDarkText: "#F7D58A", // texto de píldora oscura
    pillActive: "#C65A1E",   // píldora activa (Contacto)
    pillActiveText: "#FFEFD0"
  },
  brand: {
    titleTop: "Don Banana",
    titleBottom: "Cafe",
    tagline: "Hecho con amor y cafeína",
    // si querés ocultar la tacita, cambiá a false
    showCupIcon: true
  },
  contactCard: {
    phone: { label: "123 456 7890", href: "tel:1234567890" },
    email: { label: "info@banana.coffee", href: "mailto:info@banana.coffee" },
    address: { label: "Av. Principal 123,\nCiudad", href: "https://maps.google.com/?q=Av.+Principal+123" }
  },
  nav: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Filosofía", href: "#nosotros" },
      { label: "Blends", href: "#blends" },
      { label: "Contacto", href: "#contact" } // activa
    ],
    activeIndex: 0
  },
  // Imagen de banana del footer (vos cambiás la ruta)
  image: { src: "/images/banana/banana-footer.png", alt: "Banana saludando" }
};


// src/data/productos.js

const juegosBiblioteca = [
    {
        id: 1,
        titulo: "X-COM 2",
        destacado: false,
        genero: ["Estrategia", "Táctico"],
        etiquetas: ["Single-player", "Sci-fi", "Turn-Based Combat", "Moddable"],
        desarrollador: "Firaxis Games",
        fechaLanzamiento: "2016-02-05",
        precioBase: 19.99,
        descuento: 75,
        descripcion: "XCOM 2 es la secuela de XCOM: Enemy Unknown, el galardonado juego de estrategia. Han pasado veinte años desde que la humanidad perdió la guerra contra los invasores alienígenas y hay un nuevo orden en la Tierra. Tras años escondidos en la sombra, las fuerzas XCOM deben alzarse y eliminar la ocupación alienígena.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg?t=1772813016"
    },
    {
        id: 2,
        titulo: "Darkest Dungeon",
        destacado: false,
        genero: ["RPG", "Estrategia", "Aventura"],
        etiquetas: ["Single-player", "Dark Fantasy", "Turn-Based", "Rogue-like"],
        desarrollador: "Red Hook Studios",
        fechaLanzamiento: "2016-01-19",
        precioBase: 11.99,
        descuento: 10,
        descripcion: "Darkest Dungeon es un desafiante juego de rol gótico en mazmorras y por turnos que gira en torno al esfuerzo psicológico de la aventura. Recluta, entrena y lidera a un equipo de héroes imperfectos a través de enrevesados bosques, laberintos olvidados, criptas en ruinas y más allá.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/262060/header.jpg?t=1769780578"
    },
    {
        id: 3,
        titulo: "Hollow Knight",
        destacado: true, 
        genero: ["Metroidvania", "Acción", "Aventura"],
        etiquetas: ["Single-player", "Souls-like", "Atmospheric", "2D Platformer"],
        desarrollador: "Team Cherry",
        fechaLanzamiento: "2017-02-24",
        precioBase: 4.99,
        descuento: 0,
        descripcion: "¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.",
        imagen: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight.jpg"
    },
    {
        id: 4,
        titulo: "Slay The Spire 2",
        destacado: false,
        genero: ["Roguelike", "Estrategia", "Cartas"],
        etiquetas: ["Single-player", "Card Battler", "Deckbuilding", "Rogue-lite"],
        desarrollador: "Mega Crit",
        fechaLanzamiento: "2025-04-15",
        precioBase: 11.99,
        descuento: 0,
        descripcion: "El emblemático roguelike de creación de mazos está de vuelta. ¡Construye un mazo único, enfréntate a extrañas criaturas y descubre poderosas reliquias en Slay the Spire 2!",
        imagen: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/b0958d387dc366211e0f353443710cfcf9fdb020/header.jpg?t=1776735385"
    },
    {
        id: 5,
        titulo: "Blasphemous",
        destacado: false,
        genero: ["Metroidvania", "Acción", "Gótico"],
        etiquetas: ["Single-player", "Pixel Art", "Violent", "Souls-like"],
        desarrollador: "The Game Kitchen",
        fechaLanzamiento: "2019-09-10",
        precioBase: 12.49,
        descuento: 50,
        descripcion: "Blasphemous es un juego de acción y plataformas sin piedad, con elements de combate hack-n-slash, ambientado en el retorcido mundo de Cvstodia. Explora, mejora tus habilidades y masacra las hordas de enemigos que se interponen en tu misión para romper el ciclo de condenación eterna.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg?t=1780479368"
    },
    {
        id: 6,
        titulo: "DARK SOULS™ III",
        destacado: true,
        genero: ["SoulsLike", "Acción", "RPG"],
        etiquetas: ["Single-player", "Multiplayer", "Co-op", "Difficult", "Dark Fantasy"],
        desarrollador: "FromSoftware, Inc.",
        fechaLanzamiento: "2016-04-11",
        precioBase: 47.99,
        descuento: 0,
        descripcion: "Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg?t=1748630784"
    },
    {
        id: 7,
        titulo: "Divinity: Original Sin 2",
        destacado: false,
        genero: ["Estrategia", "RPG", "Turnos"],
        etiquetas: ["Single-player", "Multiplayer", "Online Co-op", "Tactical RPG"],
        desarrollador: "Larian Studios",
        fechaLanzamiento: "2017-09-14",
        precioBase: 25.99,
        descuento: 60,
        descripcion: "El aclamado RPG que revolucionó el género, de los creadores de Baldur's Gate 3. Reúne a tu grupo. Domina el combate táctico y profundo. Aventúrate con un grupo de hasta cuatro personajes, pero ten cuidado: solo uno de vosotros tendrá la oportunidad de convertirse en un dios.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/435150/3f6ee788cb01bd65097c52399d536eb424b4876f/header.jpg?t=1765811123"
    },
    {
        id: 8,
        titulo: "Stardew Valley",
        destacado: true,
        genero: ["Aventura", "Simulación", "Casual"],
        etiquetas: ["Single-player", "Multiplayer", "Co-op", "Farming Sim", "Relaxing"],
        desarrollador: "ConcernedApe",
        fechaLanzamiento: "2016-02-26",
        precioBase: 4.99,
        descuento: 0,
        descripcion: "Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865"
    },
    {
        id: 9,
        titulo: "Vampire Survivors",
        destacado: false,
        genero: ["Roguelite", "Acción", "Casual"],
        etiquetas: ["Single-player", "Shared/Split Screen Co-op", "Bullet Hell", "Survival"],
        desarrollador: "poncle",
        fechaLanzamiento: "2022-10-20",
        precioBase: 3.49,
        descuento: 15,
        descripcion: "¡Aniquila a miles de criaturas de la noche y sobrevive hasta el amanecer! Vampire Survivors es un juego casual de terror gótico con elementos «roguelite» donde tus decisiones te permitirán aumentar tu poder exponencialmente mientras luchas contra cientos de monstruos.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg?t=1778864981"
    },
    {
        id: 10,
        titulo: "Remnant: From the Ashes",
        destacado: false,
        genero: ["Soulslike", "Acción", "Aventura"],
        etiquetas: ["Single-player", "Multiplayer", "Online Co-op", "Third-Person Shooter"],
        desarrollador: "Gunfire Games",
        fechaLanzamiento: "2019-08-19",
        precioBase: 39.49,
        descuento: 40,
        descripcion: "Como superviviente de la humanidad, te embarcarás en una aventura a solas o en compañía de grupos de hasta tres jugadores para enfrentarte a hordas de enemigos mortales y aterradores jefes finales, con el fin de reconquistar y reconstruir aquello que la humanidad ya daba por perdido.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/617290/header.jpg?t=1764657526"
    },
    {
        id: 11,
        titulo: "Loop Hero",
        destacado: false,
        genero: ["Roguelike", "Estrategia", "RPG"],
        etiquetas: ["Single-player", "Card Game", "Auto Battler", "Idler"],
        desarrollador: "Four Quarters",
        fechaLanzamiento: "2021-03-04",
        precioBase: 4.49,
        descuento: 33,
        descripcion: "El Lich ha lanzado el mundo entero a un bucle intemporal y ha sumido a sus habitantes en un caos sin fin. Utiliza una baraja creciente de cartas místicas para situar enemigos, edificios y terrenos en cada bucle de expedición único para el valiente héroe.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1282730/header.jpg?t=1751489185"
    },
    {
        id: 12,
        titulo: "The Last Spell",
        destacado: false,
        genero: ["Estrategia", "Roguelike", "Táctico"],
        etiquetas: ["Single-player", "Turn-Based Strategy", "Tower Defense", "RPG Táctico"],
        desarrollador: "Ishtar Games",
        fechaLanzamiento: "2023-03-09",
        precioBase: 3.74,
        descuento: 0,
        descripcion: "¡Debes defender el último bastión de la humanidad con tu tropa de héroes! Extermina durante la noche a los diabólicos monstruos, ya sea con magia o mediante la violencia, y reconstruye las maltrechas defensas de tu ciudad durante el día en este RPG táctico con mecánicas rogue-lite.",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1105670/header.jpg?t=1778181686"
    }
];

const productosProcesados = juegosBiblioteca.map(juego => {
  // Calculamos el precio final de manera limpia para cada juego
    const precioCalculado = juego.descuento > 0 
        ? Math.round(juego.precioBase * (1 - juego.descuento / 100))
        : juego.precioBase;

    // Devolvemos el juego original pero sumándole la nueva propiedad lista para usar
    return {
        ...juego,
        precioFinal: precioCalculado
    };
});



export default productosProcesados;
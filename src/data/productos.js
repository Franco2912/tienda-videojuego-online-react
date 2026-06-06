const juegosBiblioteca = [
  {
    id: 1,
    titulo: "X-COM 2",
    generos: ["Estrategia","Combate por turnos","Tácticos","Rol","Un jugador"],
    descripcion:
      "XCOM 2 es la secuela de XCOM: Enemy Unknown, el galardonado juego de estrategia. Han pasado veinte años desde que la humanidad perdió la guerra contra los invasores alienígenas y hay un nuevo orden en la Tierra. Tras años escondidos en la sombra, las fuerzas XCOM deben alzarse y eliminar la ocupación alienígena.",
    precioBase: 21,
    descuento: 15,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268500/header.jpg?t=1772813016",
  },
  {
    id: 2,
    titulo: "Darkest Dungeon",
    generos: ["Combate por turnos","Roguelike","Exploración de mazmorras"],
    descripcion:
      "Darkest Dungeon es un desafiante juego de rol gótico en mazmorras y por turnos que gira en torno al esfuerzo psicológico de la aventura. Recluta, entrena y lidera a un equipo de héroes imperfectos a través de enrevesados bosques, laberintos olvidados, criptas en ruinas y más allá.",
    precioBase: 12,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/262060/header.jpg?t=1769780578",
  },
  {
    id: 3,
    titulo: "Hollow Knight",
    generos: ["Metrodvania","Plataformas","Tipo <<Dark Souls>>", "Un jugador","Indie"],
    descripcion:
      "¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.",
    precioBase: 21,
    descuento: 0,
    imagen:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight.jpg",
  },
  {
    id: 4,
    titulo: "Slay The Spire 2",
    generos: ["Roguelike","Juegos de cartas", "Construcción de barajas","Indie"],
    descripcion:
      "El emblemático roguelike de creación de mazos está de vuelta. ¡Construye un mazo único, enfréntate a extrañas criaturas y descubre poderosas reliquias en Slay the Spire 2!",
    precioBase: 8,
    descuento: 15,
    imagen:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/b0958d387dc366211e0f353443710cfcf9fdb020/header.jpg?t=1776735385",
  },
  {
    id: 5,
    titulo: "Blasphemous",
    generos: ["Metroidvania","Tipo <<Dark Souls>>","Indie","2D","Acción","Pixelados"],
    descripcion:
      "Blasphemous es un juego de acción y plataformas sin piedad, con elementos de combate hack-n-slash, ambientado en el retorcido mundo de Cvstodia. Explora, mejora tus habilidades y masacra las hordas de enemigos que se interponen en tu misión para romper el ciclo de condenación eterna.",
    precioBase: 12,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg?t=1780479368",
  },
  {
    id: 6,
    titulo: "DARK SOULS™ III",
    generos: ["Tipo <<Dark Souls>>","Rol","Acción","Fantasía oscura"],
    descripcion:
      "Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!",
    precioBase: 15,
    descuento: 50,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg?t=1748630784",
  },
  {
    id: 7,
    titulo: "Divinity: Original Sin 2 ",
    generos: ["Estrategia","Combate por turnos","Fantasía","Rol"],
    descripcion:
      "El aclamado RPG que revolucionó el género, de los creadores de Baldur's Gate 3. Reúne a tu grupo. Domina el combate táctico y profundo. Aventúrate con un grupo de hasta cuatro personajes, pero ten cuidado: solo uno de vosotros tendrá la oportunidad de convertirse en un dios.",
    precioBase: 25,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/435150/3f6ee788cb01bd65097c52399d536eb424b4876f/header.jpg?t=1765811123",
  },
  {
    id: 8,
    titulo: "Stardey Valley",
    generos: ["Simulador agrícola","Pixelados","Multijugador","Indie","Rol"],
    descripcion:
      "Acabas de heredar la vieja parcela agrícola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas. ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar próspero?",
    precioBase: 8,
    descuento: 5,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865",
  },
  {
    id: 9,
    titulo: "Vampire Survivors",
    generos: ["Roguelike","2D","Vampiros","Pixelados","Arcade"],
    descripcion:
      "¡Aniquila a miles de criaturas de la noche y sobrevive hasta el amanecer! Vampire Survivors es un juego casual de terror gótico con elementos «roguelite» donde tus decisiones te permitirán aumentar tu poder exponencialmente mientras luchas contra cientos de monstruos.",
    precioBase: 4,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg?t=1778864981",
  },
  {
    id: 10,
    titulo: "Remnant: From the Ashes",
    generos: ["Tipo <<Dark Souls>>","Acción","Aventura","Multijugador"],
    descripcion:
      "Como superviviente de la humanidad, te embarcarás en una aventura a solas o en compañía de grupos de hasta tres jugadores para enfrentarte a hordas de enemigos mortales y aterradores jefes finales, con el fin de reconquistar y reconstruir aquello que la humanidad ya daba por perdido.",
    precioBase: 40,
    descuento: 15,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/617290/header.jpg?t=1764657526",
  },
  {
    id: 11,
    titulo: "Loop Hero",
    generos: ["Roguelike","Pixelados","Construcción de barajas","Juegos de cartas"],
    descripcion:
      "El Lich ha lanzado el mundo entero a un bucle intemporal y ha sumido a sus habitantes en un caos sin fin. Utiliza una baraja creciente de cartas místicas para situar enemigos, edificios y terrenos en cada bucle de expedición único para el valiente héroe.",
    precioBase: 8,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1282730/header.jpg?t=1751489185",
  },
  {
    id: 12,
    titulo: "The Last Spell",
    generos: ["Estrategia por turnos","Un jugador","2D","Fantasía oscura"],
    descripcion:
      "¡Debes defender el último bastión de la humanidad con tu tropa de héroes! Extermina durante la noche a los diabólicos monstruos, ya sea con magia o mediante la violencia, y reconstruye las maltrechas defensas de tu ciudad durante el día. en este RPG táctico con mecánicas rogue-lite.",
    precioBase: 12,
    descuento: 0,
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1105670/header.jpg?t=1778181686",
  },
  {
    id: 13,
    titulo: "Resident Evil 4 Remake",
    generos: ["Terror", "Survival Horror","Acción","Un jugador"],
    precioBase: 29, // <-- Número entero limpio para calcular
    descuento: 75, // <-- Porcentaje de descuento (33%)
    descripcion:
      "Sobrevive a la pesadilla totalmente reimaginada. Acción intensa, gráficos de última generación y una atmósfera asfixiante.",
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1772502922",
  },
  {
    id: 14,
    titulo: "Cyberpunk 2077",
    generos: ["Rol" ,"Mundo abierto","Acción","Un jugador"],
    precioBase: 45,
    descuento: 20,  
    descripcion:
      "Adéntrate en el distrito de Dogtown como el mercenario V y desentraña una red de espionaje y traición política de alto riesgo.",
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1769690377",
  },
  {
    id: 15,
    titulo: "Elden Ring: Shadow of the Erdtree",
    generos: ["Tipo <<Dark Souls>>","Fantasía oscura","Mundo abierto","Rol"],
    precioBase: 48,
    descuento: 0, // 50% de descuento
    descripcion:
      "Explora las Tierras de la Sombra y desentraña los misterios del árbol sagrado en la expansión del galardonado juego del año.",
    imagen:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716",
  },
]

export default juegosBiblioteca;

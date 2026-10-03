/* La Panera Rosa — datos de la carta (MENÚ 062026 GENERAL DIGITAL) y sucursales (stories de Reservas). */
/* t: etiquetas -> new = NEW · low = LOW CARB · sg = sin gluten */
window.CARTA = [
  {
    id: 'desayunos', tab: 'Desayunos & Meriendas', foto: 'img/french-toast-mesa.webp',
    grupos: [
      {
        titulo: 'Desayunos & Meriendas a toda hora',
        nota: 'Todos incluyen café con leche o té + mini jugo exprimido de naranja.',
        items: [
          { n: 'Classic', d: 'Con 2 medialunas caseras y calentitas o scon inglés clásico o cookie red velvet.', p: '$11.900' },
          { n: 'Country', d: 'Tostadas de pan casero blanco o integral con nueces y semillas, mermelada casera y queso crema.', p: '$13.500' },
          { n: 'Porteño', d: 'Tostado de pan de chipa relleno de jamón cocido natural y mix de quesos seleccionados + medialuna de manteca casera.', p: '$19.500', t: ['new'] },
          { n: 'Avocado', d: 'Palta slice, queso crema, huevo de campo poché y dukkah de frutos secos.', p: '$19.500' },
          { n: 'Energizer', d: 'Bowl con chía activada en leche de almendras, yogur natural, granola casera, semillas de calabaza tostadas, arándanos, frutos rojos, frutilla y banana con miel + tostadas de pan casero con mermelada casera y queso crema.', p: '$20.900' },
          { n: 'Heavy', d: 'Huevos revueltos, tostadas de pan casero blanco, mermelada casera y queso crema, scon de queso.', p: '$20.500' },
          { n: 'Pink Light', d: 'Frutas de estación con miel y lluvia de nueces, tostadas en pan integral con nueces y semillas, mermelada casera y queso crema.', p: '$18.900' },
          { n: 'French Toast', d: 'Tostadas de pan brioche humedecidas en huevo, miel y leche, con mix de frutos rojos y frutillas, mermelada casera, queso crema y mix de sésamo.', p: '$18.900' },
          { n: 'Sweet', d: 'Torta, porción a elección.', p: '$18.900' },
          { n: 'Ham & Cheese', d: 'Waffle untado con queso cheddar, jamón cocido natural, mix de quesos seleccionados y huevo de campo poché.', p: '$20.500' },
          { n: 'Keto Breakfast', d: 'Tostada de pan de harina 100% de almendras con espinaca (keto y sin gluten) + palta slice + huevos camperos revueltos con tomates concassé + dip de almendras, nueces y semillas + yogur natural con chía activada, frutillas y arándanos.', p: '$24.900', t: ['low'] }
        ]
      },
      {
        titulo: 'Adicionales',
        items: [
          { n: 'Queso crema', p: '$1.500' }, { n: 'Mermelada casera', p: '$1.500' }, { n: 'Dukkah de frutos secos', p: '$1.500' },
          { n: 'Dulce de leche', p: '$1.500' }, { n: 'Nutella', p: '$3.900' }, { n: 'Palta slice', p: '$2.900' },
          { n: 'Salmón ahumado', p: '$4.500' }, { n: 'Tomate natural', p: '$1.900' }, { n: 'Huevo a la plancha', p: '$1.900' },
          { n: 'Jamón crudo', p: '$3.900' }
        ]
      }
    ]
  },
  {
    id: 'empezar', tab: 'Para empezar', foto: 'img/para-compartir.webp',
    grupos: [
      {
        titulo: 'Entrantes & Picoteo',
        items: [
          { n: 'Sopa casera de calabaza & leche de coco', d: 'Crema de calabaza con toque de leche de coco, croutones de pan casero y pipas de calabaza tostadas.', p: '$11.900' },
          { n: 'Croquetas de arroz y bondiola braseada', d: '2 croquetas de arroz yamaní rellenas de bondiola braseada con dip de salsa BBQ.', p: '$11.500' },
          { n: 'Croquetas de la Abu', d: '2 bombas de puré de papa rellenas de queso azul, maní tostado y panceta crocante con dip de salsa napolitana y tabasco.', p: '$11.500' },
          { n: 'Provoleta crocante', d: '3 provoletitas apanadas en mix de semillas, gota de pesto, rúcula y tomate seco.', p: '$13.500' },
          { n: 'Buñuelos de espinaca & parmesano', d: '4 buñuelos de espinaca, parmesano y tomate cherry con gota de mayonesa chimichurri.', p: '$11.900' },
          { n: 'Pinchos de pollo crocante', d: 'Pechugas de pollo apanadas en panko y almendras con salsa BBQ.', p: '$13.500' },
          { n: 'Hummus', d: 'Crema de garbanzos, tahini, limón, aceite de oliva y pimentón, con tablitas crocantes.', p: '$10.500' },
          { n: 'Papas rústicas', d: 'Con cheddar, panceta crocante y verdeo.', p: '$13.500' },
          { n: 'Huevos revueltos', d: 'Con papas rústicas y panceta crocante.', p: '$12.500' },
          { n: 'Omelette', d: 'Con queso y tomates, bouquet de verdes, tomates cherry y cebolla morada.', p: '$12.500', t: ['low'] },
          { n: 'Adicional jamón', p: '$1.700' },
          { n: 'Adicional champiñones y cebolla caramelizada', p: '$2.500' }
        ]
      },
      {
        titulo: 'Empanadas & Tartas caseras',
        items: [
          { n: 'Empanadas caseras (x2)', d: 'Masa hojaldrada rellena de carne cortada a cuchillo o jamón cocido natural y queso.', p: '$10.500' },
          { n: 'Tarta de harina 100% de almendras con espinaca y parmesano', d: 'Masa sableé de harina de almendras rellena de espinaca, cebolla, parmesano y mozzarella, con bouquet de verdes.', p: '$19.900', t: ['low', 'sg'] },
          { n: 'Tarta de harina 100% de almendras con pollo al puerro', d: 'Masa sableé de harina de almendras rellena de pollo, puerro y queso, con bouquet de verdes.', p: '$19.900', t: ['low', 'sg'] },
          { n: 'Tarta de harina de arroz con calabaza y queso azul', d: 'Rellena de calabaza, cebolla caramelizada, queso azul y pipas de calabaza tostadas, con bouquet de verdes.', p: '$16.900', t: ['new', 'low', 'sg'] }
        ]
      },
      {
        titulo: 'Tabla Panera (para dos)',
        items: [
          { n: 'Tabla Panera', d: 'Provoleta en crocante de semillas, pinchos de pollo crocante, buñuelos de espinaca, bomba de papa, boniatos y bondiola braseada BBQ desmechada, con dips de hummus, guacamole, salsa napolitana hot y tablitas crocantes.', p: '$48.900' }
        ]
      }
    ]
  },
  {
    id: 'tostas', tab: 'Tostas & Ensaladas', foto: 'img/brunch-mesa.webp',
    grupos: [
      {
        titulo: 'Tostas de pan de campo casero',
        items: [
          { n: 'Avocado toast + huevo poché', d: 'Palta slice, huevo de campo poché, queso crema y dukkah de frutos secos.', p: '$16.500' },
          { n: 'Avocado toast + salmón ahumado + 2 huevos poché', d: 'Salmón ahumado, palta slice, 2 huevos de campo poché, lima, queso crema y dukkah.', p: '$19.900' },
          { n: 'Tosta chicken guacamole', d: 'Pan negro integral con semillas y nueces, hummus, rúcula, pollo con guacamole, bocconcinos, tomates, huevo poché y dukkah.', p: '$18.500' },
          { n: 'Opcional: pan casero de espinaca y harina 100% de almendra y portobello', p: '$4.900' },
          { n: 'Tosta peras caramelizadas y queso azul', d: 'Pan de campo, palta, peras caramelizadas, hummus, queso azul, nueces, tomates secos, cebolla acaramelada y dressing de aceto y miel.', p: '$16.900' },
          { n: 'Atún avocado', d: 'Pan negro integral, cremoso de atún y huevo, lomitos de atún, palta, dúo de cebollas, huevo poché, aceite harissa, cajú y pipas de calabaza.', p: '$17.500', t: ['new'] }
        ]
      },
      {
        titulo: 'Tostas Keto',
        items: [
          { n: 'Pan de harina 100% de almendra y portobello con salmón ahumado', d: 'Salmón ahumado, palta slice, hummus, champiñones, queso con hierbas, huevo poché, provenzal, cajú y mix de sésamo.', p: '$19.900', t: ['new', 'low'] },
          { n: 'Pan de harina 100% de almendra y espinaca', d: 'Palta slice, hummus, huevo poché y huevo revuelto, mix de quesos seleccionados, rúcula y tomates cherry.', p: '$17.700', t: ['new', 'low'] }
        ]
      },
      {
        titulo: 'Ensaladas',
        items: [
          { n: 'Del Jefe', d: 'Pollo salteado en sésamo blanco, bocconcinos, mix de verdes, lajas de parmesano, tomates cherry, garrapiñadas de semillas y almendras con dressing de aceto y miel.', p: '$19.900' },
          { n: 'Pollo crocante', d: 'Pollo rebozado en almendras y panko, mix de lechugas, parmesano, tomates cherry, cebolla morada y garrapiñadas de semillas.', p: '$19.900' },
          { n: 'Caesar Panera', d: 'Pechuga grillada, panceta crocante, mix de quesos, lechuga, croutons, parmesano, tomate cherry y dressing caesar.', p: '$19.900' },
          { n: 'Panera Alternativa', d: 'Rúcula, queso azul, nueces, boniatos, cebolla morada asada, peras caramelizadas, huevo poché y vinagreta de miel y jengibre.', p: '$19.900' },
          { n: 'De Mar', d: 'Salmón ahumado, palta, champiñones, rúcula y verdes, quesos con hierbas, tomates secos, calabaza, aceitunas, huevo poché, nueces y sésamo.', p: '$24.900' },
          { n: 'Mediterránea', d: 'Soufflé tibio de portobello, rúcula, cajú, bocconcinos, huevo poché, arroz yamaní, champiñones, penne rigati, cherry y pesto de albahaca.', p: '$19.900', t: ['new'] }
        ]
      }
    ]
  },
  {
    id: 'sandwiches', tab: 'Sándwiches & Burgers', foto: 'img/sandwich-mesa.webp',
    grupos: [
      {
        titulo: 'Sándwiches', nota: 'De panes caseros. Vienen con papas rústicas caseras, crocantes y al horno.',
        items: [
          { n: 'Baguetín de jamón crudo', d: 'Baguetín de queso untado con manteca dijon, jamón crudo, parmesano, rúcula y tomates cherry.', p: '$21.300' },
          { n: 'Panera Rosa', d: 'Pan de calabaza casero, pollo grillado, queso fundido, huevo a la plancha, pasta de palta y tomates frescos.', p: '$22.900' },
          { n: 'Club sándwich Panera', d: 'Pan de campo tostado, pollo asado, panceta crocante, jamón cocido, huevo revuelto, quesos, tomate, lechuga, mayonesa y queso crema, con papas fritas.', p: '$22.900', t: ['new'] },
          { n: 'Desmechado de lomo', d: 'Baguetín casero de queso, lomo desmechado, quesos gratinados, tomates secos y pasta de palta.', p: '$26.900' },
          { n: 'Bondiola braseada', d: 'Pan de cebolla, bondiola braseada en salsa BBQ desmechada, rúcula y cebollas caramelizadas.', p: '$22.900' },
          { n: 'Focaccia de milanesa de bife', d: 'Focaccia con cebollas moradas, mix de verdes, tomates secos y mayonesa de chimichurri.', p: '$26.900' },
          { n: 'Keto Pink', d: 'Pan casero de harina 100% de almendras, guacamole, rúcula, quesos, huevo revuelto, palta, pesto de albahaca y dukkah.', p: '$17.900', t: ['low'] },
          { n: 'Tostado', d: 'Pan casero relleno con jamón natural y mix de quesos seleccionados.', p: '$14.900' }
        ]
      },
      {
        titulo: 'Hamburguesas', nota: 'De panes de papa caseros. Vienen con papas rústicas caseras.',
        items: [
          { n: 'Big Burger', d: 'Hamburguesa casera de bife de chorizo con salsa BBQ, quesos, panceta crocante, cebolla caramelizada, lechuga, tomate y huevo a la plancha.', p: '$22.900' },
          { n: 'Big Chicken', d: 'Pechuga de pollo rebozada en panko al horno, guacamole, rúcula, quesos, tomates secos, pesto de albahaca y mix de maní y semillas.', p: '$22.900', t: ['new'] }
        ]
      },
      {
        titulo: 'Wraps', nota: 'Vienen con papas rústicas caseras.',
        items: [
          { n: 'Wrap Panera', d: 'Guacamole, pollo, lechuga, mix de quesos, morrones asados y huevo duro.', p: '$21.900' },
          { n: 'Wrap Caprese', d: 'Salsa napolitana, rúcula, quesos, cebolla caramelizada, tomates secos y frescos, aceitunas verdes y pesto de albahaca.', p: '$21.900' }
        ]
      }
    ]
  },
  {
    id: 'platos', tab: 'Platos fuertes', foto: 'img/milanesa-mesa.webp',
    grupos: [
      {
        titulo: 'Waffles salados',
        items: [
          { n: 'Jamón y queso', d: 'Untado con cheddar, jamón cocido natural, quesos y huevo poché, con papas rústicas.', p: '$19.500' },
          { n: 'Waffle de chipa proteico', d: 'Jamón cocido natural, quesos, huevo revuelto y poché, tomates secos y semillas.', p: '$21.500', t: ['new'] },
          { n: 'Waffle Duo de chipa: mitad salado, mitad dulce', d: 'Salado: hummus, palta, huevo revuelto y poché, quesos, panceta y provenzal. Dulce: fresco y batata con chocolate, coulis de dulce de leche y nueces. Opcional todo salado o todo dulce.', p: '$24.500' }
        ]
      },
      {
        titulo: 'Crepes salados', nota: 'Vienen con papas rústicas caseras.',
        items: [
          { n: 'Bondiola desmechada', d: 'Con cebolla caramelizada, queso azul y crumble crocante de queso azul y nuez.', p: '$22.900' },
          { n: 'Chicken pesto pistacho', d: 'Pollo desmechado, hongos dorados, quesos fundidos, crumble y pesto de pistachos tostados.', p: '$22.900' },
          { n: 'Green', d: 'Espinaca, cebolla caramelizada, parmesano, queso con ciboulette y ricota con crumble de tomates secos.', p: '$22.900' }
        ]
      },
      {
        titulo: 'Pastas caseras',
        items: [
          { n: 'Lasagna Pink al gratén', d: '3 capas: bondiola desmechada con cebolla caramelizada / espinaca y ricota / jamón y mozzarella, con salsa blanca y roja y pesto al gratén.', p: '$25.900' },
          { n: 'Fideos caseros a la bolognesa', d: 'Salsa bolognesa y pesto de albahaca y nuez con queso parmesano.', p: '$22.900', t: ['new'] },
          { n: 'Capeletones de pollo & verdeo', d: 'Suave crema con almendras tostadas, verdeo fresco y panceta ahumada en astillas.', p: '$23.500', t: ['new'] },
          { n: 'Raviolones de pera & blue cheese', d: 'De queso azul, peras caramelizadas y almendras en crema de 4 quesos, peras asadas, garrapiñadas y arándanos.', p: '$23.500' },
          { n: 'Raviolones de calabaza', d: 'Con crema Panera y cubeteado de tomates frescos.', p: '$23.500' },
          { n: 'Sorrentinos de bondiola y queso azul', d: 'Masa de remolacha, bondiola desmechada y BBQ en crema de queso azul, nuez y cebollas acarameladas.', p: '$26.500' },
          { n: 'Sorrentinos caseros de jamón y queso', d: 'Con trilogía de tomates de la huerta salteados en oliva.', p: '$23.500' },
          { n: 'Ñoquis rellenos con pesto de pistacho', d: 'Rellenos de muzzarella, en pesto de albahaca y pistacho, tomate fresco y seco y lajas de jamón crudo.', p: '$21.900' },
          { n: 'Ñoquis caseros de papa', d: 'Tradicionales, con salsa rosa.', p: '$18.900' },
          { n: 'Chicken brócoli', d: 'Penne rigati con crema Panera al brócoli, pollo salteado en sésamo, quesos, maní y panceta crocante.', p: '$22.900' },
          { n: 'Rigatoni bolognesa de calabaza y cajú', d: 'Pasta seca, salsa rústica de calabaza, verdeo, lajas de provoleta y castañas de cajú.', p: '$19.500' }
        ]
      },
      {
        titulo: 'Carnes & Milanesas',
        items: [
          { n: 'Bife de chorizo bien argentino', d: '300 g, provoleta crocante con semillas, boniatos y bouquet de verdes.', p: '$34.900' },
          { n: 'Milanesa de bife de chorizo a la napolitana', d: 'Salsa napolitana, provenzal, mozzarella gratinada, tomate con orégano, boniatos y mayonesa de chimichurri.', p: '$29.900' },
          { n: 'Milanesa de bife de chorizo a caballo', d: 'Con papas fritas crocantes y 2 huevos poché.', p: '$27.900' },
          { n: 'Big Milanesa Panera de ternera XL (comen 2, pican 3)', d: 'Mitad napolitana, mitad fugazzeta, con papas fritas y 3 huevos a la plancha.', p: '$58.900', t: ['new'] },
          { n: 'Ñoquinesa', d: 'Milanesa de pechuga, ñoquis caseros con salsa de 5 quesos, perejil y panceta crocante.', p: '$23.900', t: ['new'] },
          { n: 'Milanesa de pechuga fugazzeta', d: 'Cebolla caramelizada, mozzarella gratinada y parmesano crocante, con boniatos.', p: '$22.900' },
          { n: 'Milanesa de pechuga napolitana', d: 'Salsa napolitana, provenzal, mozzarella, tomate con orégano, boniatos y mayonesa de chimichurri.', p: '$22.900' },
          { n: 'Milanesa de pechuga a caballo', d: 'Con papas fritas crocantes y 2 huevos poché.', p: '$21.900' }
        ]
      },
      {
        titulo: 'Menú infantil (hasta 10 años)', nota: 'Incluye agua o gaseosa + bocha de helado Volta.',
        items: [
          { n: 'Chicken fingers', d: 'Con papas fritas.', p: '$16.500' },
          { n: 'Ñoquis de papa', d: 'Caseros, con salsa rosa.', p: '$16.500' }
        ]
      }
    ]
  },
  {
    id: 'brunch', tab: 'All-Day Brunch', foto: 'img/brindis.webp',
    grupos: [
      {
        titulo: 'Brunch Time (para 2)',
        items: [
          { n: 'Brunch Time', d: '2 infusiones; 2 vasos de limonada o pomelada; tabla de quesos y fiambres con dips; huevos revueltos con panceta; sándwich de chipa caprese y chipacitos; Panera (panes caseros con dip de remolacha); medialuna de manteca y pastelería seca a elección. + Una porción de picoteo: bombas de papa, buñuelos, croquetas de arroz, pincho de pollo o provoleta.', p: '$58.500' }
        ]
      },
      {
        titulo: 'Pink Tower (para 2 o 3)', nota: 'Si son 3 se debe adicionar una infusión.',
        items: [
          { n: 'Pink Tower', d: '2 infusiones o 2 limonadas; fosforito de jamón y queso, scon de queso con rúcula, chipá mixto, medialuna, budín, conito de dulce de leche, cookie red velvet, alfajorcito de choco 70% y porción de torta a elección.', p: '$66.900' },
          { n: 'Para acompañar: Tostado Panera', p: '$11.900' },
          { n: 'Para acompañar: Scon de queso relleno de salmón ahumado', p: '$10.700' },
          { n: 'Para acompañar: Medialuna rellena de jamón y quesos', p: '$5.800' },
          { n: 'Para acompañar: Chipacitos caseros (3)', p: '$5.400' },
          { n: 'Para acompañar: Limonada o pomelada de litro', p: '$8.700' },
          { n: 'Para acompañar: Infusión', p: '$4.700' }
        ]
      }
    ]
  },
  {
    id: 'patisserie', tab: 'Patisserie', foto: 'img/caja-medialunas.webp',
    grupos: [
      {
        titulo: 'Patisserie',
        items: [
          { n: 'Medialuna', d: 'De manteca casera de 110 g. Elaboración propia.', p: '$3.800' },
          { n: 'Medialuna rellena', d: 'De dulce de leche.', p: '$4.900' },
          { n: 'Roll de canela con frosting y chips de maní', p: '$6.900' },
          { n: 'Roll de manzana caramelizada y pastelera', p: '$6.900' },
          { n: 'Scon inglés clásico', p: '$5.400' },
          { n: 'Muffin de banana y dulce de leche', p: '$8.300' },
          { n: 'Budín de limón y amapola', p: '$7.500' },
          { n: 'Budín de manzana, nuez y canela', p: '$7.500' },
          { n: 'Brownie con nueces', p: '$8.900' },
          { n: 'Cookie red velvet', d: 'Estilo New York. Chocolate blanco, frosting de queso y cereales red.', p: '$7.500' },
          { n: 'Cookie Rocklets (2)', d: 'Estilo New York, sabor vainilla con Rocklets on top.', p: '$5.000' },
          { n: 'Conito Panera', d: 'De dulce de leche con cobertura de choco al 70%.', p: '$4.700' },
          { n: 'Mini alfajores de choco con dulce de leche (2)', d: 'Bañados en choco 70%.', p: '$5.900' },
          { n: 'Alfajor crocante de almendras', d: 'Tapas con almendras trituradas y relleno de dulce de leche.', p: '$7.300' },
          { n: 'Big alfajor de maicena', d: 'Relleno de dulce de leche y cubierto en coco.', p: '$7.300' },
          { n: 'Alfajor Rocher', d: 'Tapas de choco, relleno de DDL especial, bañado en choco 70% rocher con maní.', p: '$7.300' }
        ]
      },
      {
        titulo: 'Tentaciones dulces',
        items: [
          { n: 'French toast', d: 'Pan brioche humedecido en huevo, miel y leche, con frutos rojos, frutillas, mermelada casera, queso crema y sésamo.', p: '$14.900' },
          { n: 'Chia pudding', d: 'Chía activada en leche de almendras, yogurt, granola casera, semillas, arándanos, frutos rojos, frutilla y banana con miel.', p: '$14.900', t: ['low'] },
          { n: 'Plato de frutas de estación', d: 'Con miel y lluvia de nueces.', p: '$10.900' }
        ]
      },
      {
        titulo: 'Medialunas de manteca caseras rellenas',
        items: [
          { n: 'Con huevo de campo revuelto, quesos y rúcula', p: '$9.300' },
          { n: 'Ham & cheese', d: 'Jamón cocido natural y mix de quesos seleccionados.', p: '$7.200' },
          { n: 'Cheese', d: 'Mix de quesos seleccionados y queso con hierbas.', p: '$7.200' }
        ]
      },
      {
        titulo: 'Tentaciones saladas',
        items: [
          { n: 'Scon de queso', p: '$7.900' },
          { n: 'Scon de queso con salmón ahumado', d: 'Salmón ahumado, queso crema y ciboulette.', p: '$13.300' },
          { n: 'Scon de queso con jamón crudo', d: 'Jamón crudo, queso crema y ciboulette.', p: '$10.600' },
          { n: 'Scon de queso con rúcula y queso con hierbas', d: 'Queso crema y ciboulette.', p: '$10.600' },
          { n: 'Chipacitos caseros (3)', p: '$6.700' },
          { n: 'Chipá mixto', d: 'Tostado en pan de chipá casero con jamón y quesos.', p: '$15.700' },
          { n: 'Chipá caprese', d: 'Queso a las finas hierbas, rúcula, tomates secos y pesto de albahaca.', p: '$15.700' },
          { n: 'Fosforitos (2)', d: 'Hojaldre azucarado relleno de jamón cocido y quesos.', p: '$8.300' }
        ]
      },
      {
        titulo: 'Sin gluten', nota: 'Patisserie sin azúcar añadida, apta diabéticos, keto y libre de gluten.',
        items: [
          { n: 'Mini alfajor de coco y dulce de leche con stevia', p: '$6.900', t: ['sg'] },
          { n: 'Mini alfajor de sableé de almendras y dulce de leche con stevia', p: '$6.900', t: ['sg'] },
          { n: 'Mini alfajor de maicena y dulce de leche con stevia', p: '$6.900', t: ['sg'] },
          { n: 'Muffin de coco & arándanos', p: '$8.300', t: ['sg'] },
          { n: 'Cheesecake clásico con coulis de frutos rojos', p: '$11.900', t: ['sg'] },
          { n: 'Torta húmeda de chocolate, dulce de leche con stevia & nueces', p: '$14.900', t: ['sg'] },
          { n: 'Brownie de calabaza y maní', p: '$8.500', t: ['sg'] },
          { n: 'Tostado de pan de harina de arroz', d: 'Jamón cocido natural y mix de quesos.', p: '$14.900', t: ['sg', 'low'] },
          { n: 'Tostado de pan de harina 100% de almendras y semillas', d: 'Jamón cocido natural y mix de quesos.', p: '$16.900', t: ['sg'] },
          { n: 'Desayuno / merienda sin gluten', d: 'Café o té con leche, 2 tostadas de pan sin gluten, queso crema, dulce de leche y jugo de naranja.', p: '$15.300', t: ['sg'] },
          { n: 'Clásico de pan 100% de almendra y sésamo', d: 'Café o té con leche, queso crema, dulce de leche y jugo de naranja.', p: '$19.900', t: ['sg'] },
          { n: 'Keto brunch', d: 'Tosta de pan de almendras, palta, huevos revueltos con tomates, dip de almendras, yogurt con chía, frutillas, arándanos y muffin de coco.', p: '$24.900', t: ['sg', 'low'] },
          { n: 'Bowl de yogur con frutas, chía, almendras y nueces', p: '$14.900', t: ['sg'] }
        ]
      }
    ]
  },
  {
    id: 'dulces', tab: 'Waffles, Pancakes & Crepes', foto: 'img/waffle-roll.webp',
    grupos: [
      {
        titulo: 'Waffles dulces (para compartir)',
        items: [
          { n: 'La Panera Split', d: 'Frambuesas bañadas en chocolate, helado de DDL granizado, banana acaramelada, dulce de leche, nueces, chantilly y coulis de DDL.', p: '$18.900' },
          { n: 'Tropical', d: 'Frutillas, arándanos, frutos rojos, banana, crema chantilly, semillas de calabaza tostadas y miel natural.', p: '$18.900' },
          { n: 'Sweet', d: 'Dulce de leche, frutas de estación, copo de crema y salsa de chocolate o miel.', p: '$18.900' },
          { n: 'Nutella con frutas y nueces', d: 'Nutella, frutas de estación y corona de nueces.', p: '$18.900' },
          { n: 'Waffle con Nutella', p: '$14.900' },
          { n: 'Waffle con dulce de leche', p: '$12.900' },
          { n: 'Waffle Duo de chipa: mitad salado, mitad dulce', p: '$24.500' }
        ]
      },
      {
        titulo: 'Pancakes (para compartir)',
        items: [
          { n: 'Poderoso de frambuesa & chocolate', d: 'Torre de 3 pancakes con Nutella, frambuesas bañadas en chocolate, almendras tostadas y cascada de chocolate.', p: '$18.900' },
          { n: 'Goloso', d: 'Torre de 3 pancakes con dulce de leche, banana, frutilla, nueces y salsa de chocolate.', p: '$17.500' }
        ]
      },
      {
        titulo: 'Crepes dulces',
        items: [
          { n: 'Panqueque style', d: 'Arrollado de dulce de leche y costra de azúcar acaramelada.', p: '$10.500' },
          { n: 'Dulce de leche', d: 'Con almendras tostadas, crema batida y coulis de DDL.', p: '$14.500' },
          { n: 'Dulce de leche con helado de DDL granizado, banana y frutilla', d: 'Con nueces, chantilly y coulis de DDL.', p: '$15.900' },
          { n: 'Crepe de Nutella', d: 'Con nueces, crema batida y salsa de chocolate.', p: '$16.900' },
          { n: 'Nutella con helado de chocolate amargo, banana y frutillas', d: 'Con almendras tostadas, chantilly y salsa de chocolate.', p: '$20.900' }
        ]
      }
    ]
  },
  {
    id: 'tortas', tab: 'Tortas & Copas', foto: 'img/redvelvet-porcion.webp',
    grupos: [
      {
        titulo: 'Tortas',
        items: [
          { n: 'Helena', d: 'Bizcochuelo húmedo de chocolate 70%, DDL con Mantecol, crema de chocolate blanco granizado, ganache y macarrón on top… ¡irresistible!', p: '$14.900' },
          { n: 'Abu Betty', d: 'Bizcochuelo de vainilla, DDL con Mantecol, merengue, nueces caramelizadas, chantilly, duraznos y rocas de merengue rosas.', p: '$13.900' },
          { n: 'Sienna', d: 'Chocorrosa de Chocolinas con DDL, Nutella y queso crema, mousse de chocolate 70% y ganache… ¡Bomba!', p: '$15.900', t: ['new'] },
          { n: 'Pink Rogel', d: '12 láminas de hojaldre con DDL artesanal y 2 capas de merengue suizo con frutos rojos.', p: '$13.900' },
          { n: 'Red Velvet', d: 'Terciopelo rojo con azúcar glass y queso crema.', p: '$14.900' },
          { n: 'Lemon Pie La Panera', d: 'Sableé de vainilla, crema de limones frescos y merengue italiano.', p: '$12.900' },
          { n: 'Carrot Cake', d: 'Torta de zanahoria y nuez con frosting de queso crema.', p: '$14.900' },
          { n: 'Crumble de manzana', d: 'Sableé, manzanas cocidas y crumble. Se sirve tibia con coulis de DDL.', p: '$12.900' },
          { n: 'Cheesecake de frutos rojos', d: 'Base de brownie y nuez con cobertura de frutos rojos.', p: '$14.900' },
          { n: 'Opcional: bocha de helado americana o chocolate', p: '$4.100' }
        ]
      },
      {
        titulo: 'Copas heladas', nota: 'Con helado artesanal premium de Volta. #LaPaneraRosaYVolta',
        items: [
          { n: 'Copa helada Panera', d: 'Mousse de chocolate, helado de DDL granizado, Chocolinas, crema, frutillas, coulis de chocolate y nueces.', p: '$15.300' },
          { n: 'Copa helada Baileys', d: 'Helado de chocolate 70% y DDL granizado, Baileys, almendras, crema, merengues y coulis de DDL.', p: '$15.300' },
          { n: 'Copa helada', d: '2 bochas a elección: dulce de leche granizado, chocolate al 70% o crema americana.', p: '$9.900' }
        ]
      }
    ]
  },
  {
    id: 'cafe', tab: 'Cafetería & Té', foto: 'img/cafe-torta.webp',
    grupos: [
      {
        titulo: 'Cafetería', nota: 'Café de especialidad propio, exclusivo Panera Rosa, 85 puntos.',
        items: [
          { n: 'Pocillo', d: 'Cortado, lágrima o macchiato.', p: '$4.500' },
          { n: 'Jarrito', d: 'Cortado, lágrima o macchiato.', p: '$5.300' },
          { n: 'Doble', d: 'Cortado, lágrima o macchiato.', p: '$5.900' },
          { n: 'Café con leche', p: '$5.900' },
          { n: 'Flat white', d: 'Doble shot de café con leche.', p: '$6.700' },
          { n: 'Submarino o chocolatada', p: '$6.500' },
          { n: 'Capuchino a la italiana grande', d: 'Café con leche, crema, chocolate y canela.', p: '$7.100' },
          { n: 'Pistacho latte', d: 'Café con leche, pistacho y lluvia de pistacho.', p: '$7.300' },
          { n: 'Chocolate pistacho latte', d: 'Syrup de pistacho, chocolate amargo y pistachos on top.', p: '$7.300' },
          { n: 'Avellana latte', d: 'Con toques de avellana y copo de crema.', p: '$7.300' },
          { n: 'Mocca', d: 'Café con leche, chocolate y copo de crema.', p: '$7.300' },
          { n: 'Vainilla latte', d: 'Con toques de vainilla y copo de crema.', p: '$7.300' },
          { n: 'Caramel', d: 'Café con leche, caramel y copo de crema.', p: '$7.300' },
          { n: 'Bombón', d: 'Café, chocolate y leche condensada.', p: '$7.300' },
          { n: 'La Panera Rosa', d: 'Café, leche, crema batida, dulce de leche, espuma de leche, canela y chocolate.', p: '$7.300' },
          { n: 'Iced coffee con o sin leche', p: '$7.300' },
          { n: 'Frappus', d: 'Caramel, mocca, italiano o vainilla.', p: '$7.500' },
          { n: 'Adicional leche de almendras', p: '$990' }
        ]
      },
      {
        titulo: 'Té',
        items: [
          { n: 'Té en sobres', d: 'Indian Chai, Dark Ceylon, Patagonian Berries, Amazonian Green, Sweet Flower, Earl Grey, Rooibos Caramel.', p: '$4.500' },
          { n: 'Almond Rooibos', d: 'Sin teína, con almendras, naranja, pistacho, cilantro y pimienta rosa.', p: '$6.500' },
          { n: 'Spicy Chai', d: 'Té negro con clavo, pimienta, jengibre, canela, anís y achicoria.', p: '$6.500' },
          { n: 'Blueberry Dreams', d: 'Arándanos, frutos rojos, hibisco, rosa mosqueta, naranja y vainilla.', p: '$6.500' },
          { n: 'Pure Jazmín', d: 'Té verde de Fujian con jazmín.', p: '$6.500' },
          { n: 'Detox Ginger Pu Erh', d: 'Té rojo con naranja, jengibre, canela y vainilla. Línea exclusiva.', p: '$6.500' },
          { n: 'Peach & Oolong', d: 'Oolong y té verde con grosella, aciano, girasol y durazno. Línea exclusiva.', p: '$6.500' },
          { n: 'All Berries', d: 'Sencha con frambuesas, arándanos y pimpollos de rosa. Línea exclusiva.', p: '$6.500' },
          { n: 'Matcha latte', d: 'Té verde japonés con leche.', p: '$6.500' },
          { n: 'Chai latte', d: 'Té indio con cúrcuma, masala, jengibre y cardamomo.', p: '$6.500' }
        ]
      }
    ]
  },
  {
    id: 'bebidas', tab: 'Jugos & Bebidas', foto: 'img/fitito.webp',
    grupos: [
      {
        titulo: 'Jugos & batidos',
        items: [
          { n: 'Maracuyá, naranja y miel', d: 'En jarra $15.500.', p: '$6.900' },
          { n: 'Panera Rosa Mix', d: 'Naranja, zanahoria, maracuyá y jengibre. En jarra $15.500.', p: '$6.900' },
          { n: 'Pomelada con menta', d: 'En jarra $10.900.', p: '$6.500' },
          { n: 'Limonada con menta y jengibre', d: 'En jarra $10.900.', p: '$6.500' },
          { n: 'Exprimido de naranja', p: '$7.300' },
          { n: 'La Pantera Frozen (620 cc)', d: 'Pomelo, manzana roja, limón y miel.', p: '$8.300' },
          { n: 'Tropical (620 cc)', d: 'Kiwi, durazno, naranja y miel.', p: '$8.300' },
          { n: 'Cóctel de mango (620 cc)', d: 'Frutos rojos, mango, naranja y jengibre.', p: '$8.300' },
          { n: 'Mix de frutas (620 cc)', d: 'Naranja, limón, mango y miel.', p: '$8.300' },
          { n: 'Citrus (620 cc)', d: 'Naranja, limón, pomelo y miel.', p: '$8.300' }
        ]
      },
      {
        titulo: 'Milkshakes & licuados',
        items: [
          { n: 'Milkshake crema americana', d: 'Helado artesanal premium.', p: '$10.500' },
          { n: 'Milkshake chocolate al 70%', d: 'Helado artesanal premium.', p: '$10.500' },
          { n: 'Licuados', d: 'Banana, frutilla, durazno, ananá, manzana o kiwi.', p: '$8.900' }
        ]
      },
      {
        titulo: 'Aguas y gaseosas',
        items: [
          { n: 'Gaseosas', p: '$4.300' }, { n: 'Agua mineral con o sin gas', p: '$4.300' }, { n: 'Aguas saborizadas', p: '$4.300' }
        ]
      }
    ]
  },
  {
    id: 'bar', tab: 'Bar', foto: 'img/brindis.webp',
    grupos: [
      {
        titulo: 'Cocktails',
        items: [
          { n: 'Aperol Spritz', d: 'Aperol, espumante, soda y naranja.', p: '$10.500' },
          { n: 'Gin Tonic', d: 'Gin, limón y tónica.', p: '$10.500' },
          { n: 'Negroni', d: 'Gin, Cinzano rosso, Campari y naranja.', p: '$10.500' },
          { n: 'Campari', d: 'Campari, jugo de naranja y naranja.', p: '$10.500' },
          { n: 'Daikiri', d: 'Ron blanco, licor de frutillas y fruta a elección.', p: '$10.500' },
          { n: 'Mojito', d: 'Ron blanco, menta, lima y soda.', p: '$10.500' },
          { n: 'Caipirinha', d: 'Cachaça, lima y azúcar.', p: '$10.500' },
          { n: 'Fernet con Coca', p: '$10.500' },
          { n: 'Baileys Frozen', d: 'Baileys, licor de chocolate y helado de crema americana.', p: '$10.500' }
        ]
      },
      {
        titulo: 'Cervezas',
        items: [
          { n: 'Quilmes 473 cc', d: 'Clásica, Bock o Stout.', p: '$6.900' },
          { n: 'Stella Artois 473 cc', p: '$8.500' },
          { n: 'Patagonia 473 cc', d: 'Amber Lager, Bohemian Pilsener o 24.7.', p: '$8.500' },
          { n: 'Patagonia 730 cc', d: 'Amber Lager, Bohemian Pilsener o 24.7.', p: '$13.900' }
        ]
      },
      {
        titulo: 'Vinos & whisky',
        items: [
          { n: 'Luigi Bosca', d: 'Malbec o Chardonnay.', p: '$38.900' },
          { n: 'La Linda', d: 'Malbec o Chardonnay.', p: '$25.900' },
          { n: 'Espumante La Linda', d: 'Extra Brut.', p: '$28.900' },
          { n: 'Séptima Tierra', d: 'Agrelo Malbec.', p: '$34.900' },
          { n: 'Séptima Obra', d: 'Malbec o Cabernet Franc.', p: '$27.500' },
          { n: 'Séptima', d: 'Malbec, Chardonnay o Rosado fresco.', p: '$17.500' },
          { n: 'Los Pasos Dulce', p: '$12.500' },
          { n: 'Espumante María Codorníu', d: 'Extra Brut.', p: '$28.700' },
          { n: 'Copa de vino', p: '$6.900' },
          { n: 'Johnnie Walker Black Label', p: '$10.900' },
          { n: 'Johnnie Walker Red Label', p: '$8.900' }
        ]
      }
    ]
  }
];

/* Sucursales: tomadas de las stories destacadas "Reservas" de @la.panera.rosa. El teléfono es WhatsApp para reservas. */
window.SUCURSALES = [
  { n: 'Agüero', lat: -34.5893, lon: -58.4077, zona: 'CABA', dir: 'Av. Santa Fe 2902', tel: '11 5851-6365' },
  { n: 'Aeroparque', lat: -34.5592, lon: -58.4156, zona: 'CABA', dir: 'Av. Costanera Rafael Obligado s/n°, ShopGallery', tel: '11 5851-6108' },
  { n: 'Barolo', lat: -34.6091, lon: -58.3857, zona: 'CABA', dir: 'Av. de Mayo 1370', tel: '11 3341-5940' },
  { n: 'Borges Palermo', lat: -34.5871, lon: -58.4282, zona: 'CABA', dir: 'Jorge Luis Borges 1689', tel: '11 3370-7420' },
  { n: 'Callao', lat: -34.6008, lon: -58.3925, zona: 'CABA', dir: 'Av. Callao 692', tel: '11 5375-2183' },
  { n: 'Coronel Díaz', lat: -34.5894, lon: -58.4131, zona: 'CABA', dir: 'Av. Cnel. Díaz 1699', tel: '11 5387-9121' },
  { n: 'Devoto', lat: -34.6017, lon: -58.5137, zona: 'CABA', dir: 'Bahía Blanca 4171', tel: '11 5850-8965' },
  { n: 'Lex Tower', lat: -34.604, lon: -58.388, zona: 'CABA', dir: 'Av. Corrientes 1454', tel: '11 6059-8284' },
  { n: 'Maipú y Corrientes', lat: -34.6033, lon: -58.3772, zona: 'CABA', dir: 'Av. Corrientes 699', tel: '11 5153-9219' },
  { n: 'Barrio Chino', lat: -34.559, lon: -58.4483, zona: 'CABA', dir: 'Montañeses 2328', tel: '11 5850-8923' },
  { n: 'Recoleta', lat: -34.5885, lon: -58.3878, zona: 'CABA', dir: 'Av. Presidente Manuel Quintana 595', tel: '11 5873-9898' },
  { n: 'Valle', lat: -34.6253, lon: -58.4378, zona: 'CABA', dir: 'Valle 902', tel: '11 2251-9825' },
  { n: 'Canning', lat: -34.8615, lon: -58.5085, zona: 'GBA', dir: 'Mariano Castex 905, Local 2', tel: '11 7537-2867' },
  { n: 'Lanús', lat: -34.7055, lon: -58.3935, zona: 'GBA', dir: 'E. Del Valle Iberlucea 2524', tel: '11 2277-1239' },
  { n: 'Lomitas', lat: -34.7612, lon: -58.4012, zona: 'GBA', dir: 'Italia 459', tel: '11 3937-1226' },
  { n: 'Monte Grande', lat: -34.817, lon: -58.4683, zona: 'GBA', dir: 'Cnel. Dorrego 112', tel: '11 2643-2720' },
  { n: 'Unicenter', lat: -34.5085, lon: -58.5228, zona: 'GBA', dir: 'Paraná 3745, Martínez, Local 3223, Piso 3', tel: '11 5851-6022' },
  { n: 'Vicente López', lat: -34.5265, lon: -58.479, zona: 'GBA', dir: 'Arenales 511', tel: '11 3014-3540' },
  { n: 'Corrientes', lat: -27.4672, lon: -58.833, zona: 'Interior', dir: 'San Juan 690, Corrientes', tel: '379 586-0058' },
  { n: 'Rosario', lat: -32.93, lon: -60.7, zona: 'Interior', dir: 'Av. Sorrento 7100, Shopping Paso del Bosque', tel: '341 15 782-2016', wa: '5493417822016', nota: 'Únicamente por orden de llegada.' }
];

/* Contorno de Argentina (simplificado, Natural Earth vía world.geo.json), recortado al sur de -42° porque no se muestra */
window.ARG_OUTLINE = [[-64.964892,-22.075862],[-64.377021,-22.798091],[-63.986838,-21.993644],[-62.846468,-22.034985],[-62.685057,-22.249029],[-60.846565,-23.880713],[-60.028966,-24.032796],[-58.807128,-24.771459],[-57.777217,-25.16234],[-57.63366,-25.603657],[-58.618174,-27.123719],[-57.60976,-27.395899],[-56.486702,-27.548499],[-55.695846,-27.387837],[-54.788795,-26.621786],[-54.625291,-25.739255],[-54.13005,-25.547639],[-53.628349,-26.124865],[-53.648735,-26.923473],[-54.490725,-27.474757],[-55.162286,-27.881915],[-56.2909,-28.852761],[-57.625133,-30.216295],[-57.874937,-31.016556],[-58.14244,-32.044504],[-58.132648,-33.040567],[-58.349611,-33.263189],[-58.427074,-33.909454],[-58.495442,-34.43149],[-57.22583,-35.288027],[-57.362359,-35.97739],[-56.737487,-36.413126],[-56.788285,-36.901572],[-57.749157,-38.183871],[-59.231857,-38.72022],[-61.237445,-38.928425],[-62.335957,-38.827707],[-62.125763,-39.424105],[-62.330531,-40.172586],[-62.145994,-40.676897],[-62.745803,-41.028761],[-63.770495,-41.166789],[-64.73209,-40.802677],[-65.118035,-41.064315],[-64.978561,-42.058001],[-71.746804,-42.051386],[-71.915734,-40.832339],[-71.680761,-39.808164],[-71.413517,-38.916022],[-70.814664,-38.552995],[-71.118625,-37.576827],[-71.121881,-36.658124],[-70.364769,-36.005089],[-70.388049,-35.169688],[-69.817309,-34.193571],[-69.814777,-33.273886],[-70.074399,-33.09121],[-70.535069,-31.36501],[-69.919008,-30.336339],[-70.01355,-29.367923],[-69.65613,-28.459141],[-69.001235,-27.521214],[-68.295542,-26.89934],[-68.5948,-26.506909],[-68.386001,-26.185016],[-68.417653,-24.518555],[-67.328443,-24.025303],[-66.985234,-22.986349],[-67.106674,-22.735925],[-66.273339,-21.83231]];

# Piedra, papel, tijeras, lagarto, Spock

Juego de Piedra, papel, tijeras, lagarto, Spock contra el ordenador, para móvil y escritorio. Lo hice para practicar JavaScript con un proyecto completo, desde la lógica hasta la interfaz.

## Cómo funciona

Al abrir el juego, el jugador ve cinco botones con dibujos en 3D colocados en círculo: piedra, papel, tijeras, lagarto y Spock. Al pulsar uno, los demás se bloquean y se atenúan, y el elegido se queda marcado.

El ordenador elige al azar y su dibujo aparece en el centro del círculo. Debajo se muestra el resultado de la ronda con la regla que lo decide, por ejemplo "Ganaste: Piedra aplasta lagarto" o "Perdiste: Spock vaporiza piedra", junto con el marcador de jugador y ordenador y el número de ronda.

Pasado un instante, los botones vuelven a estar disponibles. Un empate no suma puntos ni cuenta como ronda. La partida dura cinco rondas: al terminar, los botones se bloquean y el mensaje final dice quién ganó la partida. El botón "Reiniciar" permite empezar de nuevo.

## Tecnologías usadas

HTML, CSS y JavaScript, sin librerías. Fuente Inter incluida en el propio proyecto y publicado con GitHub Pages.

## Decisiones técnicas

- **Reglas del juego como datos:** qué vence a qué se guarda en un objeto, y no como una cadena de `else if`. Añadir una opción nueva es añadir una línea, sin tocar la lógica.
- **Frases de las reglas:** un segundo objeto guarda la frase de cada pareja ganadora (diez en total). La clave se forma uniendo la elección ganadora y la perdedora, y así el mensaje de cada ronda sale de buscar esa clave.
- **Elección del ordenador:** se elige al azar de una lista, usando su longitud, así que sigue funcionando si cambia el número de opciones. `Math.random()` es pseudoaleatorio, suficiente para un juego.
- **Dibujo del ordenador:** se crea con JavaScript y su ruta se construye a partir del nombre de la elección, porque los archivos de imagen se llaman igual que las opciones.
- **Botones en círculo:** cada botón se coloca con un giro y un desplazamiento desde el centro, con medidas en porcentaje, para que el círculo se adapte a la pantalla.
- **Diseño responsive:** el título usa `clamp()`, el círculo se limita con `min()` según la altura de la pantalla, y una regla específica ajusta los espacios en móviles bajos.
- **Colores como variables CSS:** se definen una sola vez, y cambiar de tema es cambiar los valores.
- **Accesibilidad:** cada botón tiene un texto alternativo en español ("Elegir piedra"), y el mensaje de cada ronda está en una región `aria-live` para que un lector de pantalla lo anuncie.
- **Efecto al pasar el ratón:** solo se aplica en dispositivos que pueden hacer hover y a los botones que se pueden pulsar, para que en el móvil no se quede el estado "pegado" tras tocar.

## Versión publicada

[Abrir el juego](https://josetarrada-png.github.io/rock-paper-scissors-lizard-spock/)
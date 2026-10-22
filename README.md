# Piedra, papel, tijeras, lagarto, Spock

Juego de Piedra, papel, tijeras, lagarto, Spock contra el ordenador, para móvil y escritorio. Lo hice para practicar JavaScript con un proyecto completo, desde la lógica hasta la interfaz.

## Cómo funciona

Al abrir el juego, el jugador ve cinco botones con dibujos colocados en círculo: piedra, papel, tijeras, lagarto y Spock. Al pulsar uno, los demás se bloquean y se atenúan, y el elegido se queda marcado. El ordenador elige al azar y aparece el resultado de la ronda ("Ganaste", "Perdiste" o "Empate") junto con el marcador.

Pasado un instante, los botones vuelven a estar disponibles. Un empate no suma puntos ni cuenta como ronda. La partida dura cinco rondas, y al terminar los botones se bloquean. El botón "Reiniciar" permite empezar de nuevo.

## Tecnologías usadas

HTML, CSS y JavaScript, sin librerías.

## Decisiones técnicas

- **Reglas del juego en un objeto:** qué vence a qué se guarda como datos, y no como una cadena de `else if`. Añadir una opción nueva es añadir una línea al objeto, sin tocar la lógica.
- **Elección del ordenador:** se elige al azar de una lista, usando su longitud, así que sigue funcionando si cambia el número de opciones.
- **Botones en círculo:** cada botón se coloca con un giro y un desplazamiento desde el centro, con medidas en porcentaje, para que el círculo se adapte a la pantalla.
- **Colores como variables CSS:** se definen una sola vez, y cambiar de tema es cambiar los valores.
- **Accesibilidad:** cada botón tiene un texto alternativo en español ("Elegir piedra"), y el mensaje de cada ronda está en una región `aria-live` para que un lector de pantalla lo anuncie.
- **Efectos al pasar el ratón:** solo se aplican a los botones que se pueden pulsar.

## Versión publicada

[Abrir el juego](https://josetarrada-png.github.io/rock-paper-scissors-lizard-spock/)
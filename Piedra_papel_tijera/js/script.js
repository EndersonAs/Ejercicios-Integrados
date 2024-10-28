function mostrarEleccion(jugador, eleccion) {
  const opciones = ["Piedra ", "Papel ", "Tijera"];
  return opciones[eleccion - 1] || "Elección inválida";
}

function determinarGanador(jugador, pc) {
  if (jugador === pc) {
      return "¡EMPATE!";
  } else if (
      (jugador === 1 && pc === 3) ||
      (jugador === 2 && pc === 1) ||
      (jugador === 3 && pc === 2)
  ) {
      return "¡GANASTE!";
  } else {
      return "¡PERDISTE!";
  }
}

function jugar(jugador) {
  const pc = Math.floor(Math.random() * 3) + 1;
  const resultadoJugador = mostrarEleccion("Jugador", jugador);
  const resultadoPc = mostrarEleccion("PC", pc);
  const resultadoFinal = determinarGanador(jugador, pc);

  document.getElementById("result").innerHTML = `
      INFORMACIÓN<br>
      Tú eliges: ${resultadoJugador}<br>
      PC elige: ${resultadoPc}<br>
      Resultado: ${resultadoFinal}
  `;
}

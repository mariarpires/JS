for (let i = 0; i < 15; i++) {
  const balao = document.createElement('div');
  balao.classList.add('balao');
  balao.style.left = `${Math.random() * 100}%`;
  balao.style.animationDuration = `${8 + Math.random() * 4}s`;
  balao.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 75%) 40%, hsl(${Math.random() * 360}, 100%, 60%) 100%)`;
  document.body.appendChild(balao);
}

function atualizarContador() {
  const agora = new Date();
  const dataAlvo = new Date(2025, 9, 12); // Outubro = 9
  const diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").innerHTML = "<p>🎉 Chegou o Dia das Crianças! 🎈</p>";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("dias-numero").textContent = dias;
  document.getElementById("horas-numero").textContent = horas;
  document.getElementById("minutos-numero").textContent = minutos;
  document.getElementById("segundos-numero").textContent = segundos;
}

atualizarContador();
const intervalo = setInterval(atualizarContador, 1000);

const somFinal = document.getElementById("som-final");

const tempoTotal = dataAlvo - dataInicio;

const porcentagem = ((tempoTotal - diferenca) / tempoTotal) * 100;
document.getElementById("barra-progresso").style.width = `${porcentagem}%`;

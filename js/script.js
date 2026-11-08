// Estados possíveis do semáforo
const ESTADOS = {
  desligado: { imagem: "Imagens/semaforo_desligado.png", texto: "Semáforo desligado" },
  vermelho:  { imagem: "Imagens/semaforo_vermelho.png",  texto: "Vermelho: parar" },
  amarelo:   { imagem: "Imagens/semaforo_amarelo.png",   texto: "Amarelo: atenção" },
  verde:     { imagem: "Imagens/semaforo_verde.png",     texto: "Verde: avançar" }
};

const imagem      = document.getElementById("semaforo");
const estado      = document.getElementById("estado");
const painelBotoes = document.getElementById("botoes");
const botoes      = document.querySelectorAll("[data-cor]");
const btnVermelho = document.getElementById("btn-vermelho");

function definirEstado(cor) {
  const dados = ESTADOS[cor];
  const ligado = cor !== "desligado";

  imagem.src = dados.imagem;
  imagem.alt = dados.texto;
  estado.textContent = dados.texto;

  painelBotoes.classList.toggle("desligado", !ligado);

  // Desligado: só aparece o botão "Ligar" (que liga com vermelho).
  // Ligado: aparecem Vermelho, Amarelo, Verde e Desligar.
  btnVermelho.textContent = ligado ? "Vermelho" : "Ligar";
  botoes.forEach(b => {
    const cor_b = b.dataset.cor;
    b.hidden = !ligado && b !== btnVermelho;
    b.classList.toggle("ativo", ligado && cor_b === cor);
  });
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => definirEstado(botao.dataset.cor));
});

// O semáforo começa desligado
definirEstado("desligado");

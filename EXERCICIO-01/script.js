function clicar() {
  var digiteTexto = prompt("Digite seu nome:");
  var novoTexto = document.getElementById("novo_texto");

  novoTexto.textContent = `E aí ${digiteTexto}! Você está deixando seu site dinâmico.`;
}

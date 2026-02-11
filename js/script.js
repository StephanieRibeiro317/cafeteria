const botoes = document.querySelectorAll(".abrir-modal");

botoes.forEach(botao => {
  botao.addEventListener("click", function () {

    document.getElementById("modalNome").innerText = this.dataset.nome;
    document.getElementById("modalDescricao").innerText = this.dataset.descricao;
    document.getElementById("modalPreco").innerText = this.dataset.preco;
    document.getElementById("modalImagem").src = this.dataset.imagem;

    const modal = new bootstrap.Modal(document.getElementById('modalProduto'));
    modal.show();
  });
});

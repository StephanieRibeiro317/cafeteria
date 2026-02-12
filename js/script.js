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

// pega todos que usam a classe
// let scrollTop = document.querySelector('.scroll-top');

// Precisa que a tag tenha um ID
let scrollTop = document.getElementById('scroll-top');

scrollTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
});

// document = página
document.addEventListener('scroll', alterarScroll);
function alterarScroll() {
    if (window.scrollY > 100) {
        scrollTop.classList.remove('d-none');
    }
    else {
        scrollTop.classList.add('d-none');
    }
}

// Formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const resposta = document.getElementById('resposta');

  resposta.innerText = `Obrigado, ${nome}! ☕ Sua mensagem foi enviada com sucesso.`;
  resposta.style.color = "#6b3f3f";

  this.reset();
});

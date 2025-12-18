function abrirModal(pk, nome) {
    console.log('teste')
    const modal = document.querySelector('.modal__container');
    const backgroud = document.querySelector('.modal__backgroud');
    modal.style.position = 'fixed'
    modal.style.display = 'flex';
    backgroud.style.display = 'flex'

    document.getElementById('modal-funcionario-nome').innerText = nome;

    const form = modal.querySelector('form')
    form.action = `/app/remover_funcionario/${pk}`
}

function fecharModal() {
    const modal = document.querySelector('.modal__container');
    modal.style.display = 'none';
}
$(document).ready(function() {
    $('#form-tarefa').submit(function(evento) {
        evento.preventDefault(); // Evita o comportamento padrão do formulário

      // Captura o valor do input de tarefa
        const nomeTarefa = $('#adiciona-tarefa').val();

      // Adiciona a tarefa à lista como um novo elemento <li>
        if (nomeTarefa !== '') {
            $('#lista-tarefa').append('<li title ="Clique para marcar ou desmarcar">' + nomeTarefa + '</li>');
            $('#adiciona-tarefa').val(''); // Limpa o campo de input
        }
    });

    // Adiciona/Remove a classe 'completed' ao clicar nas tarefas
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
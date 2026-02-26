$(document).ready(function() {

    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();


    const TOTAL_JOGOS_RODADA = 2;

    $('.btn-checkbox-x').on('click', function() {
        let $cardDoJogo = $(this).closest('.jogo-card-novo');
        $cardDoJogo.find('.btn-checkbox-x').removeClass('ativo');
        $(this).addClass('ativo');
        verificarCartelaCompleta();
    });

    function verificarCartelaCompleta() {
        let palpitesFeitos = $('.jogo-card-novo').filter(function() {
            return $(this).find('.btn-checkbox-x.ativo').length > 0;
        }).length;

        $('#contador-palpites').text(`${palpitesFeitos} / ${TOTAL_JOGOS_RODADA} preenchidos`);

        if (palpitesFeitos === TOTAL_JOGOS_RODADA) {
            $('#btn-salvar-cartela').prop('disabled', false).removeClass('green darken-2').addClass('orange darken-3');
        } else {
            $('#btn-salvar-cartela').prop('disabled', true).removeClass('orange darken-3').addClass('green darken-2');
        }
    }
});
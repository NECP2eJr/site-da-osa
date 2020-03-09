$(document).ready(function (){
    $('#inputPhone').mask('(00) 00000-0000');
    selecionarEvento();
});

function selecionarEvento(){
    var idEvento = identificarEvento();
    console.log(idEvento);

    if(idEvento){
        $('#selectEvent').val(idEvento);
    }
}

function identificarEvento(){
    var url = window.location.search.substring(1);
    var parametros = url.split('&');

    for (var i = 0; i < parametros.length; i++) {
        var param = parametros[i].split('=');
        if(param[0] === 'event'){
            return param[1];
        }
    }
}

function setSelected(id){
    var item = '#selectEvent option[value=' +id + ']';
    // $(item).attr('selected', 'selected')
    $('#selectEvent').val(id);
}
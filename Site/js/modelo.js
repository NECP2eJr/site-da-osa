$(window).ready(function () {
    ativarItemMenu();
    exibirGaleria();
    fichaDeInteresse();
});

$('#icone-abrir-menu').on('click', function() {
    exibirMenuLateral();
});


function exibirGaleria(){
    baguetteBox.run('.gallery', {
        buttons: true,
        animation: 'slideIn'
    });
}

function fichaDeInteresse(){
    $('#modalRelatedContent').modal({ show: true, backdrop: false });
}

function ativarItemMenu(){
    var url = window.location.pathname;

    if(url === '/modelo.html'){
        ativarItem('projeto-1');
    }
}

function ativarItem(item){
    document.getElementById(item).style.textDecoration = "underline";
    document.getElementById(item).style.color = "#818181";
}

$('#open-sidebar').on('click', function() {
    document.getElementById('menu-lateral').style.width = "250px";
});

$('#close-sidebar').on('click', function() {
    document.getElementById('menu-lateral').style.width = "0px";
});
$(window).resize(function(){
    var windowHeight = window.innerHeight;
    var bodyHeight = $('body').height();
    var footer = $('footer');

    if(footer.hasClass('navbar-fixed-bottom')){
        var footerHeight = parseInt(footer.height());
        var footerMarginTop = parseInt(footer.css('margin-top'));
        windowHeight -= (footerHeight + 2*footerMarginTop);
    }

    if(bodyHeight > windowHeight){
        footer.removeClass('navbar-fixed-bottom');
    }else{
        footer.addClass('navbar-fixed-bottom');
    }
});

$(window).ready(function(){
    var alturaJanela = window.innerHeight;
    var alturaBody = $('body').height();

    if(alturaBody >= alturaJanela){
        $("footer").removeClass('navbar-fixed-bottom');
    }else{
        $("footer").addClass('navbar-fixed-bottom');
    }

    exibirMenuDeNavegacao();
    exibirRodape();    
});

function exibirMenuDeNavegacao(){
    $('#menu-navegacao').load("menu-navegacao.html");
}

function exibirRodape(){
    $('#rodape').load("rodape.html");
}

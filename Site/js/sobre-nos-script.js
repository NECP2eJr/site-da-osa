$('#modal-mvv').on('show.bs.modal', function (event) {
    var component = $(event.relatedTarget); // Componente que disparou o modal
    var parameter = component.data('whatever'); // Parâmetro passado pelo modal

    var icon = [];
    icon["missao"] = "fas fa-book light-blue-text";
    icon["visao"] = "fas fa-chart-line lime-text";
    icon["valores"] = "fas fa-gem deep-orange-text";

    var title = [];
    title["missao"] = "Missão";
    title["visao"] = "Visão";
    title["valores"] = "Valores";

    var text = [];
    text["missao"] = "Atuar na comunidade escolar e acadêmica de nossa região de forma ética, com responsabilidade social e cultural, disseminando o conhecimento da óptica e fotônica de maneira divertida para escolas públicas e particulares através de participações em feiras de ciências e, contribuir de forma profissional em eventos e congressos científicos com temas atuais que ajudem na formação e desenvolvimento de estudantes, pesquisadores, professores e profissionais de empresas tecnológicas. ";
    text["visao"] = "Até 2020, ser um dos maiores capítulos estudantis da OSA no Brasil e reconhecida por nossas ações educacionais na região do Sul de Minas Gerais.";
    text["valores"] = "Desenvolvimento de lideranças juvenis;\n" +
        "Integração;\n" +
        "Resultados;\n" +
        "Prontidão para mudanças;\n" +
        "Empreendedorismo e inovação;\n" +
        "Ética e transparência;\n" +
        "Respeito à igualdade de gêneros;\n" +
        "Diversidade humana e cultural;\n" +
        "Pessoas;\n" +
        "Disseminação de conhecimentos em Óptica e Fotônica;\n" +
        "Orgulho de ser Inatel Photonics Chapter.";

    var modal = $(".modal");
    modal.find('.modal-img').attr("src", icon[parameter]);
    modal.find('.modal-icon').addClass(icon[parameter]);
    modal.find('.modal-title').text(title[parameter]);
    modal.find('.modal-text').text(text[parameter]);

    $('.close').on('click', function() {
        modal.find('.modal-icon').removeClass(icon[parameter]);
    })
});
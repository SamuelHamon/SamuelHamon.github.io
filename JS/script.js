$(document).ready(function () {
    $("#TAutresCompetences").css("max-width", $("#TInformatique").css("width"));
    $(window).resize(function () {
        $("#TAutresCompetences").css("max-width", $("#TInformatique").css("width"));
    });
});
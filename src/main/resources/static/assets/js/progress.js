var i = 1;

function passos(m, n) {
    //Quantidade de passos
    if (i < m) {
        do {
            i++;
            $('.progressbar li:last').after("<li id='" + i + "'>Passo " + i + "</li>");
            var wi = 100 / i;
            $('.progressbar li').css({ "width": wi + "%" });
        } while (i < m)
    }

    //Passos concluídos
    $('#' + n).addClass("active").prevAll().addClass("active");
	
	
//Passos concluídos

if($('#' +n).hasClass("active")){

$('#' +n).nextAll().removeClass("active");

} else {

$('#' +n).addClass("active").prevAll().addClass("active");

}


}


var casper = require('casper').create();
casper.cli.options["proxy"] = "IWSVAGNN01:8080";

casper.start('http://portal.conviasa.aero/', function() {
   // Wait for the page to be loaded
   this.waitForSelector('form[name="frmidavuelta"]');
});

casper.then(function() {
    //this.click('input#ORIGEN_VISUALIZAR.ruta_desde');
    //this.click('div.ruta_origen li:nth-child(4)');
    //this.click('input#DESTINO_VISUALIZAR.ruta_hasta');
    //this.click('div.ruta_destino_int > ul:nth-of-type(1) li:nth-child(3)');
    //this.click('div.ruta_destino_int ul#AR > li:first-child');
    this.evaluate(function() {
        Select_ORIGEN_VISUALIZAR('Caracas','CCS','VE');
        Select_DESTINO_VISUALIZAR('Buenos Aires','EZE','AR');
        anular_mayores();
        $('input#fecha_desde').val('14/03/2017');
        $('input#fecha_hasta').val('18/03/2017');
        $("div#main_motor select[name='adultos']").val("2");
    });

    var valor1 = this.getElementAttribute('input[type="hidden"][name="ORIGEN"]', 'value');
    var valor2 = this.getElementAttribute('input[type="hidden"][name="DESTINO"]', 'value');
    this.echo('First Page: ' + this.getTitle());
    this.echo('Origen: ' + valor1);
    this.echo('Destino: ' + valor2);
    var fechaDesde = this.evaluate(function() {
        var value = $('input#fecha_desde').val();
        return value;
    });
    this.echo('Fecha desde: ' + fechaDesde);
    var fechaHasta = this.evaluate(function() {
        var value = $('input#fecha_hasta').val();
        return value;
    });
    this.echo('Fecha hasta: ' + fechaHasta);

    var nroAdultos = this.evaluate(function() {
        var value = $("div#main_motor select[name='adultos']").val();
        return value;
    });
    this.echo('Adultos: ' + nroAdultos);

    var target = this.evaluate(function(){
       return $('form#frmidavuelta').attr('target');
    });
    this.echo('Target: ' + target);

    this.evaluate(function() {
        $('form#frmidavuelta').attr('target','_parent');
        //enviar(form.context.forms.frmidavuelta,'es');
    });

    var target = this.evaluate(function(){
        return $('form#frmidavuelta').attr('target');
    });
    this.echo('Target: ' + target);
    this.click('input[type="button"][name="buscar1"]');
    this.echo('Iniciando Busqueda....');
});

/*
casper.waitForPopup(/popup\.html$/, function() {
    this.test.assertEquals(this.popups.length, 1);
});

casper.withPopup(/popup\.html$/, function() {
    this.test.assertTitle('Popup title');
});*/

this.waitForSelector("table.layoutTable",
    function pass () {
        test.pass("Found table.layoutTable");
    },
    function fail () {
        test.fail("Did not load element table.layoutTable");
    },
    20000 // timeout limit in milliseconds
);

casper.then(function(){
    var valor1 = this.getElementAttribute('input[type="hidden"][name="ORIGEN"]', 'value');
    var valor2 = this.getElementAttribute('input[type="hidden"][name="DESTINO"]', 'value');
    this.echo('First Page: ' + this.getTitle());
    this.echo('Origen: ' + valor1);
    this.echo('Destino: ' + valor2);
});

casper.run();
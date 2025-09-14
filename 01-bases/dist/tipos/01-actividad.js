"use strict";
(() => {
    // Tipar las variables, funciones, tuplas, etc.
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Poder;
    (function (Poder) {
        Poder[Poder["Acuaman"] = 0] = "Acuaman";
        Poder[Poder["Batman"] = 1] = "Batman";
        Poder[Poder["Flash"] = 5] = "Flash";
        Poder[Poder["Superman"] = 100] = "Superman";
    })(Poder || (Poder = {}));
    const fuerzaFlash = Poder.Flash;
    const fuerzaSuperman = Poder.Superman;
    const fuerzaBatman = Poder.Batman;
    const fuerzaAcuaman = Poder.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();

"use strict";
(() => {
    console.log('test');
    const a = 20;
    let b;
    b = 3.14;
    b = {};
    b = [];
    b = false;
    console.log('dev');
    function sayHello(msg) {
        console.log(msg + ' dev');
        msg.length;
    }
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastname'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'dev');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Iroman';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Bati señal activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    var _a;
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Tony',
        powers: ['Millonario', 'Filantropo'],
        getName() {
            return this.name;
        }
    };
    console.log(((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash)) || 'Método no definido');
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['Volar'],
    };
})();
(() => {
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['Velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark',
        age: 60,
        powers: ['Volar'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Lalo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Peter',
        age: 18,
        powers: ['Telaraña']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0).charAt(0));
    avenger = 123.12312312312;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villians = ['Omega Rojo', 'Batman', 'Iroman', 'Superman'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = false;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
    console.log({ isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = 10;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error('AAAAAA!!!');
    console.log('Hola Mundo');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos a salvo');
    }
    avengers = Number('123A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Heroe: Linterna Verde";
    const iroman = `Iroman`;
    const a = 123;
    console.log(`I'm ${iroman}, ${a}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callIroman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map
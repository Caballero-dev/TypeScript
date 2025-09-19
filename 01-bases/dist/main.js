"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`${this.nombre} - ${this.edad}`);
        }
    }
    const perosna1 = new Persona('Juan', 30, 'M', 'Soltero');
    perosna1.imprimirBio();
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
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} tiene el poder con ID ${id} y tiene ${this.age} años`;
        }
    }
})();
(() => {
    const client = {
        name: 'Eduardo',
        age: 20,
        address: [
            {
                id: 18,
                zip: 98168,
                city: 'Ottawa',
            }
        ],
        getFullAddres(id) {
            const adr = this.address.find((adr) => adr.id === id);
            return adr ? `${adr === null || adr === void 0 ? void 0 : adr.id} - ${adr === null || adr === void 0 ? void 0 : adr.city} - ${adr === null || adr === void 0 ? void 0 : adr.zip}` : `No hay dirección con el id ${id}`;
        }
    };
    const client2 = {
        name: 'Juan',
        age: 19,
        address: [
            {
                id: 98,
                zip: 87642,
                city: 'Toronto',
            }
        ],
        getFullAddres(id) {
            const adr = this.address.find((adr) => adr.id === id);
            return adr ? `${adr === null || adr === void 0 ? void 0 : adr.id} - ${adr === null || adr === void 0 ? void 0 : adr.city} - ${adr === null || adr === void 0 ? void 0 : adr.zip}` : `No hay dirección con el id ${id}`;
        }
    };
    console.log(client.getFullAddres(18));
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(5, 3));
})();
//# sourceMappingURL=main.js.map
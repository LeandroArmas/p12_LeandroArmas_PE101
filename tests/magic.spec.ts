import "mocha";
import { expect } from "chai";
import { ColeccionCartas } from "../src/coleccion.js";

describe('Test para eliminarCarta asincrono con promesas', function() {
    it('Debería eliminar correctamente una carta existente', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.eliminarCarta(9, 'usuario2');
        return myPromise.then((result) => {
            expect(result).to.be.equal('Carta eliminada correctamente.');
        })
    });
    it('Debería eliminar correctamente una carta existente', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.eliminarCarta(8, 'usuario2');
        return myPromise.then((result) => {
            expect(result).to.be.equal('Carta eliminada correctamente.');
        })
    });
    it('Debería informar del error al no poder eliminar la carta', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.eliminarCarta(100, 'leandro');
        return myPromise.catch((error) => {
            expect(error).to.be.equal('Error al eliminar la carta.');
        })
    });
    it('Debería informar del error al no poder eliminar la carta', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.eliminarCarta(100, 'usuario2');
        return myPromise.catch((error) => {
            expect(error).to.be.equal('Error al eliminar la carta.');
        })
    });
    
});

describe('Test para mostrarCarta asincrono con promesas', function() {
    it('Debería mostrar correctamente una carta existente', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.mostrarCarta(1, 'leandro');
        return myPromise.then((result) => {
            expect(result).to.be.equal('Carta encontrada!');
        })
    });
    it('Debería mostrar correctamente una carta existente', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.mostrarCarta(2, 'usuario2');
        return myPromise.then((result) => {
            expect(result).to.be.equal('Carta encontrada!');
        })
    });
    it('Debería informar de error al no encontrar la carta', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.mostrarCarta(100, 'leandro');
        return myPromise.catch((error) => {
            expect(error).to.be.equal('Error al buscar la carta.');
        })
    });
    it('Debería mostrar correctamente una carta existente', () => {
        const coleccion = new ColeccionCartas;
        const myPromise = coleccion.mostrarCarta(100, 'usuario2');
        return myPromise.catch((error) => {
            expect(error).to.be.equal('Error al buscar la carta.');
        })
    });

    
});

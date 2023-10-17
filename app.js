import { Gemaalma } from "./gemaalma.js";
import { Gematiempo } from "./gematiempo.js";
import { Gemadelespacio } from "./gemaespacio.js";
import { Gemamente } from "./gemamente.js";
import { Gemarealidad } from "./gemarealidad.js";
import { Gemapoder } from "./gemapoder.js";
import { Gemas } from "./gemas.js";

const unaGemaDeAlma= new Gemaalma;
const unaGemaDeTiempo= new Gematiempo;
const unaGemaDelEspacio= new Gemadelespacio;
const unaGemaDeLaMente= new Gemamente;
const unaGemaDeLaRealidad= new Gemarealidad;
const unaGemaDelPoder= new Gemapoder;

unaGemaDeAlma.poderDeLaGema();
unaGemaDeTiempo.poderDeLaGema();
unaGemaDelEspacio.poderDeLaGema();
unaGemaDeLaMente.poderDeLaGema();
unaGemaDeLaRealidad.poderDeLaGema();
unaGemaDelPoder.poderDeLaGema();

function usarAnilloDelPoder(obj) {
    if (obj instanceof Gemas) {
        obj.poderDeLaGema();
    }else{
        console.log("Esta no es una gema");
    }
}

usarAnilloDelPoder(unaGemaDeAlma);
usarAnilloDelPoder(unaGemaDeTiempo);
usarAnilloDelPoder(unaGemaDelEspacio);
usarAnilloDelPoder(unaGemaDeLaMente);
usarAnilloDelPoder(unaGemaDeLaRealidad);
usarAnilloDelPoder(unaGemaDelPoder);



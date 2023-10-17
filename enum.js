"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "segunda feira";
    DiasDaSemana["Ter\u00E7a"] = "ter\u00E7a feira";
    DiasDaSemana["Quarta"] = "quarta feira";
    DiasDaSemana["Quinta"] = "quinta feira";
    DiasDaSemana["Sexta"] = "sexta feira";
    DiasDaSemana["S\u00E1bado"] = "sabado";
    DiasDaSemana["Domingo"] = "domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Sexta;
//console.log("hoje é " + DiasDaSemana[diaHoje]);
console.log("hoje é " + diaHoje);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Array, tuple, modificatori di accesso
var mioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tupla = ['rosario', 30, 'giovanni'];
var Persona = /** @class */ (function () {
    function Persona(nome, cognome, anno) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = anno;
    }
    Persona.prototype.geteta = function () {
        return this.eta; // Per accedere ad una prorpietà private ho bisogno di un metodo get
    };
    return Persona;
}());
var Dipendente = /** @class */ (function (_super) {
    __extends(Dipendente, _super);
    function Dipendente(nome, cognome, anno, nomeazienda) {
        var _this = _super.call(this, nome, cognome, anno) || this;
        _this.nome = nome,
            _this.cognome = cognome;
        _this.anno = anno;
        _this.nomeazienda = nomeazienda;
        return _this;
    }
    return Dipendente;
}(Persona));

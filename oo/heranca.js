var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.calculaImposto = function (taxa) {
        if (taxa === void 0) { taxa = 8; }
        console.log("Pagando " + this.salario * taxa / 100 + " de imposto");
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Gerente;
}(Funcionario));
var ger = new Gerente('david', 2000);
ger.calculaImposto();
var Executivo = /** @class */ (function (_super) {
    __extends(Executivo, _super);
    function Executivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Executivo.prototype.calculaImposto = function (taxa) {
        if (taxa === void 0) { taxa = 10; }
        console.log('executivo paga mais');
        _super.prototype.calculaImposto.call(this, taxa);
    };
    return Executivo;
}(Funcionario));
var exec = new Executivo('david', 20000);
exec.calculaImposto();

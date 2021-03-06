"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^O usuario esta na pagina de pratos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/login");
        yield protractor_1.$("input[name='login']").sendKeys("abc");
        yield protractor_1.$("input[name='senha']").sendKeys("123");
        yield protractor_1.element(protractor_1.by.buttonText('Login')).click();
        yield sleep(1000);
        yield protractor_1.browser.get("http://localhost:4200/pratos");
        yield expect(protractor_1.$('#titulo').getText()).to.eventually.equal('Pratos');
    }));
    When(/^O fornecedor solicita o cadastro do prato "([^\"]*)" com a descrição "([^\"]*)" com o item "([^\"]*)" com o tamanho de "([^\"]*)"$/, (nome, descricao, item, tamanho) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[id='nome']").sendKeys(nome);
        yield protractor_1.$("input[id='descricao']").sendKeys(descricao);
        yield protractor_1.$("select[id='dropItem']").sendKeys(item);
        yield protractor_1.$("select[id='dropTam']").sendKeys(tamanho);
        yield protractor_1.element(protractor_1.by.id('adicionar')).click();
    }));
    Then(/^O prato e visualizado numa tabela "([^\"]*)" com a descrição "([^\"]*)" com o item "([^\"]*)" com tamanho "([^\"]*)"$/, (nome, descricao, item, tamanho) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("table tr:nth-child(3) td:first-child").getText().then(text => text === nome);
    }));
});

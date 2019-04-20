"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Types = require("../types");
/**
 * Account credit, entity class.
 */
let Credit = class Credit extends Class.Null {
    /**
     * Total of credits.
     */
    get total() {
        return this.amount + this.bonus;
    }
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Provider)),
    Class.Public()
], Credit.prototype, "provider", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Credit.prototype, "amount", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Credit.prototype, "bonus", void 0);
__decorate([
    Class.Public()
], Credit.prototype, "total", null);
Credit = __decorate([
    RestDB.Schema.Entity('accounts/credit'),
    Class.Describe()
], Credit);
exports.Credit = Credit;
//# sourceMappingURL=credit.js.map
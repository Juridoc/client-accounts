"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiGrants = require("@juridoc/client-grants");
const Types = require("../types");
/**
 * Account role, entity class.
 */
let Role = class Role extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Role)),
    Class.Public()
], Role.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiGrants.Entity, ['id', 'profilesIdList', 'rolesIdList', 'name']),
    Class.Public()
], Role.prototype, "grant", void 0);
Role = __decorate([
    RestDB.Schema.Entity('accounts/role'),
    Class.Describe()
], Role);
exports.Role = Role;
//# sourceMappingURL=role.js.map
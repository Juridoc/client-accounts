"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiProfiles = require("@juridoc/client-profiles");
const Internals = require("../internals");
/**
 * Account update request.
 */
let Update = class Update extends Class.Null {
};
__decorate([
    RestDB.Schema.Object(Internals.Picture),
    Class.Public()
], Update.prototype, "picture", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Update.prototype, "company", void 0);
__decorate([
    RestDB.Schema.Pattern(/[a-z0-9]([a-z0-9-]{0,30}[a-z0-9])/, 'domain'),
    Class.Public()
], Update.prototype, "domain", void 0);
__decorate([
    RestDB.Schema.Map(String),
    Class.Public()
], Update.prototype, "research", void 0);
__decorate([
    RestDB.Schema.Object(() => ApiProfiles.Internals.Settings),
    Class.Public()
], Update.prototype, "settings", void 0);
Update = __decorate([
    RestDB.Schema.Entity('accounts/{id}'),
    Class.Describe()
], Update);
exports.Update = Update;
//# sourceMappingURL=update.js.map
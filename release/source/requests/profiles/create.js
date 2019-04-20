"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiProfiles = require("@juridoc/client-profiles");
/**
 * Account profile, creation request.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiProfiles.Requests.Users.Create),
    Class.Public()
], Create.prototype, "user", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiProfiles.Requests.Contacts.Create),
    Class.Public()
], Create.prototype, "contact", void 0);
__decorate([
    RestDB.Schema.Object(() => ApiProfiles.Internals.Settings),
    Class.Public()
], Create.prototype, "settings", void 0);
Create = __decorate([
    RestDB.Schema.Entity('accounts/profiles'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Accounts mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Create a new account based on the specified creation request.
     * @param request Account creation request.
     * @returns Returns a promise to get the account Id.
     * @throws Throws an error when the account wasn't created.
     */
    async create(request) {
        return (await this.mapper.insertEx(Requests.Create, request));
    }
    /**
     * Invite a new member to the account based on the specified invitation request.
     * @param request Invitation request.
     * @returns Returns a promise to get the new invite Id.
     * @throws Throws an error when the invitation wasn't sent.
     */
    async invite(request) {
        return (await this.mapper.insertEx(Requests.Invite, request));
    }
    /**
     * Resend the invitation that corresponds to the specified invitation Id based on the given reinvite request.
     * @param id Invitation Id.
     * @param request Reinvitation request.
     * @returns Returns a promise to get true when the reinvite was successful, false otherwise.
     * @throws Throws an error when the invitation wasn't resent.
     */
    async reinvite(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Reinvite, id, request));
    }
    /**
     * Join into an account based on the specified join request.
     * @param request Account join request.
     * @returns Returns a promise to get the profile Id.
     * @throws Throws an error when the join wasn't accepted.
     */
    async join(request) {
        return (await this.mapper.insertEx(Requests.Join, request));
    }
    /**
     * Load the current session account.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the account entity.
     * @throws Throws an error when the current account wasn't found.
     */
    async loadMe(fields) {
        return (await this.mapper.findById('me', fields));
    }
    /**
     * Update the current session account based on the given update request.
     * @param request Account update request.
     * @returns Returns a promise to get true when the account was updated, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    async modifyMe(request) {
        return (await this.mapper.updateByIdEx(Requests.Update, 'me', request));
    }
    /**
     * Update the account member grants based on the given grant update request.
     * @param request Grant update request.
     * @returns Returns a promise to get true when the member grants were updated, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    async modifyGrant(request) {
        return (await this.mapper.updateByIdEx(Requests.Grant, 'grant', request));
    }
    /**
     * Delete the current session account.
     * @returns Returns a promise to get true when the account was deleted, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    async removeMe(id) {
        return (await this.mapper.deleteById('me'));
    }
};
__decorate([
    Injection.Inject(Core.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "invite", null);
__decorate([
    Class.Public()
], Mapper.prototype, "reinvite", null);
__decorate([
    Class.Public()
], Mapper.prototype, "join", null);
__decorate([
    Class.Public()
], Mapper.prototype, "loadMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modifyMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modifyGrant", null);
__decorate([
    Class.Public()
], Mapper.prototype, "removeMe", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'accounts' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiProfiles = require("@juridoc/client-profiles");
const ApiSubscription = require("@juridoc/client-subscriptions");
const Internals = require("./internals");
/**
 * Account entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the number of seats.
     */
    get seats() {
        let total = 0;
        for (const seat of this.seatList) {
            total += seat.total;
        }
        return total;
    }
    /**
     * Get the seat entity that corresponds to the specified seat type.
     * @param type Seat type.
     * @returns Returns the seat entity.
     * @throws Throws an error when the seat entity isn't found.
     */
    getSeatByType(type) {
        const entity = this.seatList.find((seat) => seat.type === type);
        if (entity === void 0) {
            throw new TypeError(`Seat entity '${type}' doesn't found.`);
        }
        return entity;
    }
    /**
     * Get the role entity that corresponds to the specified role type.
     * @param type Role type.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByType(type) {
        const entity = this.roleList.find((role) => role.type === type);
        if (entity === void 0) {
            throw new TypeError(`Role entity '${type}' doesn't found.`);
        }
        return entity;
    }
    /**
     * Get the role entity that corresponds to the specified grant Id.
     * @param grant Grant Id.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByGrantId(grant) {
        const entity = this.roleList.find((role) => role.grant.id === grant);
        if (entity === void 0) {
            throw new TypeError(`Grant Id '${grant}' doesn't match any role entity.`);
        }
        return entity;
    }
    /**
     * Get the role entity that contains the specified profile entity.
     * @param profile Profile Id.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByProfileId(profile) {
        const entity = this.roleList.find((role) => role.grant.profilesIdList.find((id) => id === profile));
        if (entity === void 0) {
            throw new TypeError(`Profile Id '${profile}' doesn't match any role entity.`);
        }
        return entity;
    }
    /**
     * Determines whether or not the specified profile has one of the expected roles.
     * @param profile Profile entity.
     * @param roles List of expected roles.
     * @returns Returns true when the profile entity has one of the expected roles, false otherwise.
     */
    hasRoles(profile, roles) {
        if (roles.find((role) => profile.grant.rolesIdList.includes(role)) === void 0) {
            const group = this.roleList.find((group) => group.grant.profilesIdList.includes(profile.id));
            if (group !== void 0) {
                return roles.find((role) => group.grant.rolesIdList.includes(role)) !== void 0;
            }
            return false;
        }
        return true;
    }
    /**
     * Test if the specified profile is the account ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile) {
        return this.ownership.id === profile.id;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiProfiles.Entity, [
        'id',
        'contact.id',
        'contact.pictureId',
        'contact.name',
        'contact.personal.firstName',
        'contact.personal.lastName',
        'contact.personal.emailList',
        'contact.professional.denomination',
        'contact.professional.emailList'
    ]),
    Class.Public()
], Entity.prototype, "ownership", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiSubscription.Entity, [
        'id',
        'checkout',
        'contextService',
        'startAt',
        'expireAt',
        'status',
        'recurrence'
    ]),
    Class.Public()
], Entity.prototype, "subscription", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "referrerId", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "pictureId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "company", void 0);
__decorate([
    RestDB.Schema.Pattern(/[a-z0-9]([a-z0-9-]{0,30}[a-z0-9])/, 'domain'),
    Class.Public()
], Entity.prototype, "domain", void 0);
__decorate([
    RestDB.Schema.Map(String),
    Class.Public()
], Entity.prototype, "research", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Seat),
    Class.Public()
], Entity.prototype, "seatList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Role),
    Class.Public()
], Entity.prototype, "roleList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Credit),
    Class.Public()
], Entity.prototype, "creditList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiProfiles.Internals.Settings),
    Class.Public()
], Entity.prototype, "settings", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "seats", null);
__decorate([
    Class.Public()
], Entity.prototype, "getSeatByType", null);
__decorate([
    Class.Public()
], Entity.prototype, "getRoleByType", null);
__decorate([
    Class.Public()
], Entity.prototype, "getRoleByGrantId", null);
__decorate([
    Class.Public()
], Entity.prototype, "getRoleByProfileId", null);
__decorate([
    Class.Public()
], Entity.prototype, "hasRoles", null);
__decorate([
    Class.Public()
], Entity.prototype, "isOwnership", null);
Entity = __decorate([
    RestDB.Schema.Entity('accounts'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map
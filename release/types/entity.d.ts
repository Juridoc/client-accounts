/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as ApiProfiles from '@juridoc/client-profiles';
import * as ApiSubscription from '@juridoc/client-subscriptions';
import * as Internals from './internals';
/**
 * Account entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Account Id.
     */
    id: string;
    /**
     * Ownership entity.
     */
    ownership: ApiProfiles.Entity;
    /**
     * ApiSubscription entity.
     */
    subscription: ApiSubscription.Entity;
    /**
     * Referrer Id.
     */
    referrerId?: string;
    /**
     * Picture Id.
     */
    pictureId?: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date;
    /**
     * Company name.
     */
    company?: string;
    /**
     * Sub-domain.
     */
    domain?: string;
    /**
     * Research fields.
     */
    research?: RestDB.Map<string>;
    /**
     * Seat list.
     */
    seatList: Internals.Seat[];
    /**
     * Role list.
     */
    roleList: Internals.Role[];
    /**
     * Credit list.
     */
    creditList: Internals.Credit[];
    /**
     * Default account settings.
     */
    settings: ApiProfiles.Internals.Settings;
    /**
     * Get the number of seats.
     */
    get seats(): number;
    /**
     * Get the seat entity that corresponds to the specified seat type.
     * @param type Seat type.
     * @returns Returns the seat entity.
     * @throws Throws an error when the seat entity isn't found.
     */
    getSeatByType(type: string): Internals.Seat;
    /**
     * Get the role entity that corresponds to the specified role type.
     * @param type Role type.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByType(type: string): Internals.Role;
    /**
     * Get the role entity that corresponds to the specified grant Id.
     * @param grant Grant Id.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByGrantId(grant: string): Internals.Role;
    /**
     * Get the role entity that contains the specified profile entity.
     * @param profile Profile Id.
     * @returns Returns the role entity.
     * @throws Throws an error when the role entity isn't found.
     */
    getRoleByProfileId(profile: string): Internals.Role;
    /**
     * Determines whether or not the specified profile has one of the expected roles.
     * @param profile Profile entity.
     * @param roles List of expected roles.
     * @returns Returns true when the profile entity has one of the expected roles, false otherwise.
     */
    hasRoles(profile: ApiProfiles.Entity, roles: string[]): boolean;
    /**
     * Test if the specified profile is the account ownership.
     * @param profile Profile entity.
     * @returns Returns true when the given profile is the ownership, false otherwise.
     */
    isOwnership(profile: ApiProfiles.Entity): boolean;
}

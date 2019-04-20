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
@RestDB.Schema.Entity('accounts')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Account Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Ownership entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiProfiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.personal.emailList',
    'contact.professional.denomination',
    'contact.professional.emailList'
  ])
  @Class.Public()
  public ownership!: ApiProfiles.Entity;

  /**
   * ApiSubscription entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiSubscription.Entity, [
    'id',
    'checkout',
    'contextService',
    'startAt',
    'expireAt',
    'status',
    'recurrence'
  ])
  @Class.Public()
  public subscription!: ApiSubscription.Entity;

  /**
   * Referrer Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public referrerId?: string;

  /**
   * Picture Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public pictureId?: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Company name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public company?: string;

  /**
   * Sub-domain.
   */
  @RestDB.Schema.Pattern(/[a-z0-9]([a-z0-9-]{0,30}[a-z0-9])/, 'domain')
  @Class.Public()
  public domain?: string;

  /**
   * Research fields.
   */
  @RestDB.Schema.Map(String)
  @Class.Public()
  public research?: RestDB.Map<string>;

  /**
   * Seat list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Seat)
  @Class.Public()
  public seatList!: Internals.Seat[];

  /**
   * Role list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Role)
  @Class.Public()
  public roleList!: Internals.Role[];

  /**
   * Credit list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Credit)
  @Class.Public()
  public creditList!: Internals.Credit[];

  /**
   * Default account settings.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiProfiles.Internals.Settings)
  @Class.Public()
  public settings!: ApiProfiles.Internals.Settings;

  /**
   * Get the number of seats.
   */
  @Class.Public()
  public get seats(): number {
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
  @Class.Public()
  public getSeatByType(type: string): Internals.Seat {
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
  @Class.Public()
  public getRoleByType(type: string): Internals.Role {
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
  @Class.Public()
  public getRoleByGrantId(grant: string): Internals.Role {
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
  @Class.Public()
  public getRoleByProfileId(profile: string): Internals.Role {
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
  @Class.Public()
  public hasRoles(profile: ApiProfiles.Entity, roles: string[]): boolean {
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
  @Class.Public()
  public isOwnership(profile: ApiProfiles.Entity): boolean {
    return this.ownership.id === profile.id;
  }
}

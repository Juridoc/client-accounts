/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiGrants from '@juridoc/client-grants';

import * as Types from '../types';

/**
 * Account role, entity class.
 */
@RestDB.Schema.Entity('accounts/role')
@Class.Describe()
export class Role extends Class.Null {
  /**
   * Role type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Role))
  @Class.Public()
  public type!: Types.Role;

  /**
   * Group grant entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiGrants.Entity, ['id', 'profilesIdList', 'rolesIdList', 'name'])
  @Class.Public()
  public grant!: ApiGrants.Entity;
}

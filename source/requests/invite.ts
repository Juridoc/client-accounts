/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as Types from '../types';

/**
 * Account invitation request.
 */
@RestDB.Schema.Entity('accounts/invite')
@Class.Describe()
export class Invite extends Class.Null {
  /**
   * Invitation type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Invitation))
  @Class.Public()
  public type!: Types.Invitation;

  /**
   * First name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public firstName!: string;

  /**
   * Last name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public lastName?: string;

  /**
   * Invitation email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * Language code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public language!: string;
}

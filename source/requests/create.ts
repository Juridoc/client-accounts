/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Profiles from './profiles';

/**
 * Account creation request.
 */
@RestDB.Schema.Entity('accounts')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Referrer Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public referrerId?: string;

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
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Create)
  @Class.Public()
  public profile!: Profiles.Create;
}

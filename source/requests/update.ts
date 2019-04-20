/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiProfiles from '@juridoc/client-profiles';

import * as Internals from '../internals';

/**
 * Account update request.
 */
@RestDB.Schema.Entity('accounts/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Picture entity.
   */
  @RestDB.Schema.Object(Internals.Picture)
  @Class.Public()
  public picture?: Internals.Picture;

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
   * Default settings.
   */
  @RestDB.Schema.Object(() => ApiProfiles.Internals.Settings)
  @Class.Public()
  public settings?: ApiProfiles.Internals.Settings;
}

/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiProfiles from '@juridoc/client-profiles';

/**
 * Account profile, creation request.
 */
@RestDB.Schema.Entity('accounts/profiles')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * User entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiProfiles.Requests.Users.Create)
  @Class.Public()
  public user!: ApiProfiles.Requests.Users.Create;

  /**
   * Contact request.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiProfiles.Requests.Contacts.Create)
  @Class.Public()
  public contact!: ApiProfiles.Requests.Contacts.Create;

  /**
   * Profile settings.
   */
  @RestDB.Schema.Object(() => ApiProfiles.Internals.Settings)
  @Class.Public()
  public settings?: Omit<ApiProfiles.Internals.Settings, 'getRegionPreferences' | 'getCurrentRegionPreferences'>;
}

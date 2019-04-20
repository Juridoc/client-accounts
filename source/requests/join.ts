/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Profiles from './profiles';

/**
 * Account join request.
 */
@RestDB.Schema.Entity('accounts/join')
@Class.Describe()
export class Join extends Class.Null {
  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Create)
  @Class.Public()
  public profile!: Profiles.Create;
}

/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Account picture, entity class.
 */
@RestDB.Schema.Entity('accounts/picture')
@Class.Describe()
export class Picture extends Class.Null {
  /**
   * MIME type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public mime!: string;

  /**
   * File name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * File data.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Binary()
  @Class.Public()
  public data!: Array<number>;
}

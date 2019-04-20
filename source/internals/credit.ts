/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Account credit, entity class.
 */
@RestDB.Schema.Entity('accounts/credit')
@Class.Describe()
export class Credit extends Class.Null {
  /**
   * Credit provider.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Provider))
  @Class.Public()
  public provider!: Types.Provider;

  /**
   * Credits amount.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public amount!: number;

  /**
   * Bonus credits.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public bonus!: number;

  /**
   * Total of credits.
   */
  @Class.Public()
  public get total(): number {
    return this.amount + this.bonus;
  }
}

/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Account seat, entity class.
 */
@RestDB.Schema.Entity('accounts/seat')
@Class.Describe()
export class Seat extends Class.Null {
  /**
   * Seat type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Seat))
  @Class.Public()
  public type!: Types.Seat;

  /**
   * Number of seats.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public total!: number;
}

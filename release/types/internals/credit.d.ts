/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Account credit, entity class.
 */
export declare class Credit extends Class.Null {
    /**
     * Credit provider.
     */
    provider: Types.Provider;
    /**
     * Credits amount.
     */
    amount: number;
    /**
     * Bonus credits.
     */
    bonus: number;
    /**
     * Total of credits.
     */
    get total(): number;
}

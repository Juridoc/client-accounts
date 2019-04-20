/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Profiles from './profiles';
/**
 * Account creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Referrer Id.
     */
    referrerId?: string;
    /**
     * Company name.
     */
    company?: string;
    /**
     * Sub-domain.
     */
    domain?: string;
    /**
     * Research fields.
     */
    research?: RestDB.Map<string>;
    /**
     * Profile entity.
     */
    profile: Profiles.Create;
}

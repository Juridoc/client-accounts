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
export declare class Update extends Class.Null {
    /**
     * Picture entity.
     */
    picture?: Internals.Picture;
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
     * Default settings.
     */
    settings?: ApiProfiles.Internals.Settings;
}

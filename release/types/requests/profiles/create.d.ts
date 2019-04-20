/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiProfiles from '@juridoc/client-profiles';
/**
 * Account profile, creation request.
 */
export declare class Create extends Class.Null {
    /**
     * User entity.
     */
    user: ApiProfiles.Requests.Users.Create;
    /**
     * Contact request.
     */
    contact: ApiProfiles.Requests.Contacts.Create;
    /**
     * Profile settings.
     */
    settings?: Omit<ApiProfiles.Internals.Settings, 'getRegionPreferences' | 'getCurrentRegionPreferences'>;
}

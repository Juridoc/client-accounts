/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Profiles from './profiles';
/**
 * Account join request.
 */
export declare class Join extends Class.Null {
    /**
     * Profile entity.
     */
    profile: Profiles.Create;
}

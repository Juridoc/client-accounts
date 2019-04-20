/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiGrants from '@juridoc/client-grants';
import * as Types from '../types';
/**
 * Account role, entity class.
 */
export declare class Role extends Class.Null {
    /**
     * Role type.
     */
    type: Types.Role;
    /**
     * Group grant entity.
     */
    grant: ApiGrants.Entity;
}

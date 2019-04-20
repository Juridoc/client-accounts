/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Account invitation request.
 */
export declare class Invite extends Class.Null {
    /**
     * Invitation type.
     */
    type: Types.Invitation;
    /**
     * First name.
     */
    firstName: string;
    /**
     * Last name.
     */
    lastName?: string;
    /**
     * Invitation email.
     */
    email: string;
    /**
     * Language code.
     */
    language: string;
}

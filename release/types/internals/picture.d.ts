/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Account picture, entity class.
 */
export declare class Picture extends Class.Null {
    /**
     * MIME type.
     */
    mime: string;
    /**
     * File name.
     */
    name: string;
    /**
     * File data.
     */
    data: Array<number>;
}

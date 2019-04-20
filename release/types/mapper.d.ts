/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Accounts mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new account based on the specified creation request.
     * @param request Account creation request.
     * @returns Returns a promise to get the account Id.
     * @throws Throws an error when the account wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Invite a new member to the account based on the specified invitation request.
     * @param request Invitation request.
     * @returns Returns a promise to get the new invite Id.
     * @throws Throws an error when the invitation wasn't sent.
     */
    invite(request: Requests.Invite): Promise<string>;
    /**
     * Resend the invitation that corresponds to the specified invitation Id based on the given reinvite request.
     * @param id Invitation Id.
     * @param request Reinvitation request.
     * @returns Returns a promise to get true when the reinvite was successful, false otherwise.
     * @throws Throws an error when the invitation wasn't resent.
     */
    reinvite(id: string, request: Requests.Reinvite): Promise<boolean>;
    /**
     * Join into an account based on the specified join request.
     * @param request Account join request.
     * @returns Returns a promise to get the profile Id.
     * @throws Throws an error when the join wasn't accepted.
     */
    join(request: Requests.Create): Promise<string>;
    /**
     * Load the current session account.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the account entity.
     * @throws Throws an error when the current account wasn't found.
     */
    loadMe(fields?: string[]): Promise<Entity>;
    /**
     * Update the current session account based on the given update request.
     * @param request Account update request.
     * @returns Returns a promise to get true when the account was updated, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    modifyMe(request: Requests.Update): Promise<boolean>;
    /**
     * Update the account member grants based on the given grant update request.
     * @param request Grant update request.
     * @returns Returns a promise to get true when the member grants were updated, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    modifyGrant(request: Requests.Grant): Promise<boolean>;
    /**
     * Delete the current session account.
     * @returns Returns a promise to get true when the account was deleted, false otherwise.
     * @throws Throws an error when the current account wasn't found.
     */
    removeMe(id: string): Promise<boolean>;
}

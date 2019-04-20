/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Accounts mapper class.
 */
@Injection.Describe({ singleton: true, name: 'accounts' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new account based on the specified creation request.
   * @param request Account creation request.
   * @returns Returns a promise to get the account Id.
   * @throws Throws an error when the account wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Invite a new member to the account based on the specified invitation request.
   * @param request Invitation request.
   * @returns Returns a promise to get the new invite Id.
   * @throws Throws an error when the invitation wasn't sent.
   */
  @Class.Public()
  public async invite(request: Requests.Invite): Promise<string> {
    return (await this.mapper.insertEx<Requests.Invite, string>(Requests.Invite, request))!;
  }

  /**
   * Resend the invitation that corresponds to the specified invitation Id based on the given reinvite request.
   * @param id Invitation Id.
   * @param request Reinvitation request.
   * @returns Returns a promise to get true when the reinvite was successful, false otherwise.
   * @throws Throws an error when the invitation wasn't resent.
   */
  @Class.Public()
  public async reinvite(id: string, request: Requests.Reinvite): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Reinvite, id, request))!;
  }

  /**
   * Join into an account based on the specified join request.
   * @param request Account join request.
   * @returns Returns a promise to get the profile Id.
   * @throws Throws an error when the join wasn't accepted.
   */
  @Class.Public()
  public async join(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Join, string>(Requests.Join, request))!;
  }

  /**
   * Load the current session account.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the account entity.
   * @throws Throws an error when the current account wasn't found.
   */
  @Class.Public()
  public async loadMe(fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById('me', fields))!;
  }

  /**
   * Update the current session account based on the given update request.
   * @param request Account update request.
   * @returns Returns a promise to get true when the account was updated, false otherwise.
   * @throws Throws an error when the current account wasn't found.
   */
  @Class.Public()
  public async modifyMe(request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, 'me', request))!;
  }

  /**
   * Update the account member grants based on the given grant update request.
   * @param request Grant update request.
   * @returns Returns a promise to get true when the member grants were updated, false otherwise.
   * @throws Throws an error when the current account wasn't found.
   */
  @Class.Public()
  public async modifyGrant(request: Requests.Grant): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Grant, 'grant', request))!;
  }

  /**
   * Delete the current session account.
   * @returns Returns a promise to get true when the account was deleted, false otherwise.
   * @throws Throws an error when the current account wasn't found.
   */
  @Class.Public()
  public async removeMe(id: string): Promise<boolean> {
    return (await this.mapper.deleteById('me'))!;
  }
}

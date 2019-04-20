/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiInvitations from '@juridoc/client-invitations';

/**
 * Account reinvitation request.
 */
@RestDB.Schema.Entity('accounts/invite/{id}/resend')
@Class.Describe()
export class Reinvite extends ApiInvitations.Requests.Resend {}

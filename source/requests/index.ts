/*!
 * Copyright (C) 2018-2019 Juridoc
 */
export { Create } from './create';
export { Update } from './update';
export { Invite } from './invite';
export { Reinvite } from './reinvite';
export { Grant } from './grant';
export { Join } from './join';

// Imported aliases.
import * as Profiles from './profiles';

/**
 * Profile requests namespace.
 */
export import Profiles = Profiles;

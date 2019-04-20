"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profiles = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
var create_1 = require("./create");
Object.defineProperty(exports, "Create", { enumerable: true, get: function () { return create_1.Create; } });
var update_1 = require("./update");
Object.defineProperty(exports, "Update", { enumerable: true, get: function () { return update_1.Update; } });
var invite_1 = require("./invite");
Object.defineProperty(exports, "Invite", { enumerable: true, get: function () { return invite_1.Invite; } });
var reinvite_1 = require("./reinvite");
Object.defineProperty(exports, "Reinvite", { enumerable: true, get: function () { return reinvite_1.Reinvite; } });
var grant_1 = require("./grant");
Object.defineProperty(exports, "Grant", { enumerable: true, get: function () { return grant_1.Grant; } });
var join_1 = require("./join");
Object.defineProperty(exports, "Join", { enumerable: true, get: function () { return join_1.Join; } });
// Imported aliases.
const Profiles = require("./profiles");
/**
 * Profile requests namespace.
 */
exports.Profiles = Profiles;
//# sourceMappingURL=index.js.map
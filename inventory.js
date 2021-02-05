"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _guitars;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const guitar_1 = require("./guitar");
class Inventory {
    constructor() {
        _guitars.set(this, void 0);
        __classPrivateFieldSet(this, _guitars, []);
    }
    addGuitar(serialNumber, price, spec) {
        let guitar = new guitar_1.Guitar(serialNumber, price, spec);
        __classPrivateFieldGet(this, _guitars).push(guitar);
    }
    getGuitar(serialNumber) {
        for (let guitar of __classPrivateFieldGet(this, _guitars)) {
            if (guitar.serialNumber === serialNumber) {
                return guitar;
            }
        }
        return null;
    }
    search(searchSpec) {
        for (let guitar of __classPrivateFieldGet(this, _guitars)) {
            let guitarSpec = guitar.spec;
            // Ignore serial number since that's unique
            // Ignore price since that's unique
            let builder = searchSpec.builder;
            if (builder !== null && builder !== guitarSpec.builder) {
                continue;
            }
            let model = searchSpec.model;
            if (model !== null && model !== guitarSpec.model) {
                continue;
            }
            let type = searchSpec.type;
            if (type !== null && type !== guitarSpec.type) {
                continue;
            }
            let backWood = searchSpec.backWood;
            if (backWood !== null && backWood !== guitarSpec.backWood) {
                continue;
            }
            let topWood = searchSpec.topWood;
            if (topWood !== null && topWood !== guitarSpec.topWood) {
                continue;
            }
            return guitar; // The book's version didn't had this line but I guess it was a honest mistake
        }
        return null;
    }
}
exports.Inventory = Inventory;
_guitars = new WeakMap();
//# sourceMappingURL=inventory.js.map
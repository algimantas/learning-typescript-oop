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
    addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
        let guitar = new guitar_1.Guitar(serialNumber, price, builder, model, type, backWood, topWood);
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
    search(searchGuitar) {
        for (let guitar of __classPrivateFieldGet(this, _guitars)) {
            // Ignore serial number since that's unique
            // Ignore price since that's unique
            let builder = searchGuitar.builder;
            if (builder !== null && builder !== guitar.builder) {
                continue;
            }
            let model = searchGuitar.model;
            if (model !== null && model !== guitar.model) {
                continue;
            }
            let type = searchGuitar.type;
            if (type !== null && type !== guitar.type) {
                continue;
            }
            let backWood = searchGuitar.backWood;
            if (backWood !== null && backWood !== guitar.backWood) {
                continue;
            }
            let topWood = searchGuitar.topWood;
            if (topWood !== null && topWood !== guitar.topWood) {
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
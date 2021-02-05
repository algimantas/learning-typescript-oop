"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_1 = require("./inventory");
const types_1 = require("./types");
const guitarSpec_1 = require("./guitarSpec");
// Set up Rick's guitar inventory
let inventory = new inventory_1.Inventory();
initializeInventory(inventory);
let whatErinLikes = new guitarSpec_1.GuitarSpec(types_1.Builder.fender, 'Stratocastor', types_1.Type.electric, types_1.Wood.alder, types_1.Wood.alder);
let guitar = inventory.search(whatErinLikes);
if (guitar != null) {
    let spec = guitar.spec;
    console.log('Erin, you might like this ' +
        spec.builder + ' ' + spec.model + ' ' +
        spec.type + ' guitar:\n   ' +
        spec.backWood + ' back and sides,\n   ' +
        spec.topWood + ' top.\nYou can have it for only $' +
        guitar.price + '!');
}
else {
    console.log('Sorry, Erin, we have nothing for you.');
}
function initializeInventory(inventory) {
    inventory.addGuitar('11277', 3999.95, new guitarSpec_1.GuitarSpec(types_1.Builder.collins, 'CJ', types_1.Type.acoustic, types_1.Wood.indianRosewood, types_1.Wood.sitka));
    inventory.addGuitar('V95693', 1499.95, new guitarSpec_1.GuitarSpec(types_1.Builder.fender, 'Stratocastor', types_1.Type.electric, types_1.Wood.alder, types_1.Wood.alder));
    inventory.addGuitar('V9512', 1549.95, new guitarSpec_1.GuitarSpec(types_1.Builder.fender, 'Stratocastor', types_1.Type.electric, types_1.Wood.alder, types_1.Wood.alder));
    inventory.addGuitar('122784', 5495.95, new guitarSpec_1.GuitarSpec(types_1.Builder.martin, 'D-18', types_1.Type.acoustic, types_1.Wood.mahogany, types_1.Wood.adirondack));
    inventory.addGuitar('76531', 6295.95, new guitarSpec_1.GuitarSpec(types_1.Builder.martin, 'OM-28', types_1.Type.acoustic, types_1.Wood.brazilianRosewood, types_1.Wood.adirondack));
    inventory.addGuitar('70108276', 2295.95, new guitarSpec_1.GuitarSpec(types_1.Builder.gibson, 'Les Paul', types_1.Type.electric, types_1.Wood.mahogany, types_1.Wood.maple));
    inventory.addGuitar('82765501', 1890.95, new guitarSpec_1.GuitarSpec(types_1.Builder.gibson, 'SG \'61 Reissue', types_1.Type.electric, types_1.Wood.mahogany, types_1.Wood.mahogany));
    inventory.addGuitar('77023', 6275.95, new guitarSpec_1.GuitarSpec(types_1.Builder.martin, 'D-28', types_1.Type.acoustic, types_1.Wood.brazilianRosewood, types_1.Wood.adirondack));
    inventory.addGuitar('1092', 12995.95, new guitarSpec_1.GuitarSpec(types_1.Builder.oslson, 'SJ', types_1.Type.acoustic, types_1.Wood.indianRosewood, types_1.Wood.cedar));
    inventory.addGuitar('566-62', 8999.95, new guitarSpec_1.GuitarSpec(types_1.Builder.ryan, 'Cathedral', types_1.Type.acoustic, types_1.Wood.cocobolo, types_1.Wood.cedar));
    inventory.addGuitar('6 29584', 2100.95, new guitarSpec_1.GuitarSpec(types_1.Builder.prs, 'Dave Navarro Signature', types_1.Type.electric, types_1.Wood.mahogany, types_1.Wood.maple));
}
//# sourceMappingURL=findGuitarTester.js.map
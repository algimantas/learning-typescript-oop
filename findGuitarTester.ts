import {Inventory} from "./inventory";
import {Builder, Type, Wood} from "./types";
import {Guitar} from "./guitar";

// Set up Rick's guitar inventory
let inventory = new Inventory();
initializeInventory(inventory);

let whatErinLikes = new Guitar('', 0, Builder.fender, 'Stratocastor',
    Type.electric, Wood.alder, Wood.alder);

let guitar = inventory.search(whatErinLikes);

if (guitar != null) {
    console.log('Erin, you might like this ' +
        guitar.builder + ' ' + guitar.model +  ' ' +
        guitar.type + ' guitar:\n   ' +
        guitar.backWood + ' back and sides,\n   ' +
        guitar.topWood + ' top.\nYou can have it for only $' +
        guitar.price + '!');
} else {
    console.log('Sorry, Erin, we have nothing for you.');
}

function initializeInventory(inventory: Inventory) {
    inventory.addGuitar('11277', 3999.95, Builder.collins, 'CJ', Type.acoustic,
        Wood.indianRosewood, Wood.sitka);
    inventory.addGuitar('V95693', 1499.95, Builder.fender, 'Stratocastor', Type.electric,
        Wood.alder, Wood.alder);
    inventory.addGuitar('V9512', 1549.95, Builder.fender, 'Stratocastor', Type.electric,
        Wood.alder, Wood.alder);
    inventory.addGuitar('122784', 5495.95, Builder.martin, 'D-18', Type.acoustic,
        Wood.mahogany, Wood.adirondack);
    inventory.addGuitar('76531', 6295.95, Builder.martin, 'OM-28', Type.acoustic,
        Wood.brazilianRosewood, Wood.adirondack);
    inventory.addGuitar('70108276', 2295.95, Builder.gibson, 'Les Paul', Type.electric,
        Wood.mahogany, Wood.maple);
    inventory.addGuitar('82765501', 1890.95, Builder.gibson, 'SG \'61 Reissue',
        Type.electric, Wood.mahogany, Wood.mahogany);
    inventory.addGuitar('77023', 6275.95, Builder.martin, 'D-28', Type.acoustic,
        Wood.brazilianRosewood, Wood.adirondack);
    inventory.addGuitar('1092', 12995.95, Builder.oslson, 'SJ', Type.acoustic,
        Wood.indianRosewood, Wood.cedar);
    inventory.addGuitar('566-62', 8999.95, Builder.ryan, 'Cathedral', Type.acoustic,
        Wood.cocobolo, Wood.cedar);
    inventory.addGuitar('6 29584', 2100.95, Builder.prs, 'Dave Navarro Signature',
        Type.electric, Wood.mahogany, Wood.maple);
}
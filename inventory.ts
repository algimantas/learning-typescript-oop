import {Guitar} from "./guitar";
import {Builder, Type, Wood} from "./types";

export class Inventory {
    #guitars: Guitar[];

    constructor() {
        this.#guitars = [];
    }

    addGuitar(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
        let guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.#guitars.push(guitar);
    }

    getGuitar(serialNumber: string):Guitar {
        for (let guitar of this.#guitars) {
            if (guitar.serialNumber === serialNumber) {
                return guitar;
            }
        }

        return null;
    }

    search(searchGuitar: Guitar): Guitar {
        for (let guitar of this.#guitars) {
            // Ignore serial number since that's unique
            // Ignore price since that's unique

            let builder = searchGuitar.builder
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
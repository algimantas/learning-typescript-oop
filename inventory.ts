import {Guitar} from "./guitar";

export class Inventory {
    #guitars: Guitar[];

    constructor() {
        this.#guitars = [];
    }

    addGuitar(serialNumber: string, price: number, builder: string, model: string, type: string, backWood: string, topWood: string) {
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
            if (builder !== null && builder !== "" && builder !== guitar.builder) {
                continue;
            }

            let model = searchGuitar.model;
            if (model !== null && model !== "" && model !== guitar.model) {
                continue;
            }

            let type = searchGuitar.type;
            if (type !== null && type !== "" && type !== guitar.type) {
                continue;
            }

            let backWood = searchGuitar.backWood;
            if (backWood !== null && backWood !== "" && backWood !== guitar.backWood) {
                continue;
            }

            let topWood = searchGuitar.topWood;
            if (topWood !== null && topWood !== "" && topWood !== guitar.topWood) {
                continue;
            }

            return guitar; // The book's version didn't had this line but I guess it was a honest mistake
        }

        return null;
    }
}
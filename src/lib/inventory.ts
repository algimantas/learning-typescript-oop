import { Guitar } from "./guitar";
import { GuitarSpec } from "./guitarSpec";

export class Inventory {
    #guitars: Guitar[];

    constructor() {
        this.#guitars = [];
    }

    addGuitar(serialNumber: string, price: number, spec: GuitarSpec) {
        let guitar = new Guitar(serialNumber, price, spec);
        this.#guitars.push(guitar);
    }

    getGuitar(serialNumber: string): Guitar {
        for (let guitar of this.#guitars) {
            if (guitar.serialNumber === serialNumber) {
                return guitar;
            }
        }

        return null;
    }

    search(searchSpec: GuitarSpec): Guitar[] {
        let matchingGuitars: Guitar[] = []

        for (let guitar of this.#guitars) {
            let guitarSpec = guitar.spec
            // Ignore serial number since that's unique
            // Ignore price since that's unique

            let builder = searchSpec.builder
            if (builder !== null && builder !== guitarSpec.builder) {
                continue;
            }

            let model = searchSpec.model;
            if (model !== null && model.toLowerCase() !== guitarSpec.model.toLowerCase()) {
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

            if (searchSpec.numStrings !== guitarSpec.numStrings) {
                continue;
            }

            matchingGuitars.push(guitar);
        }

        return matchingGuitars;
    }
}
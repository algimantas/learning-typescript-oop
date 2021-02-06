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
        return this.#guitars.filter((guitar) => guitar.spec.matches(searchSpec))
    }
}
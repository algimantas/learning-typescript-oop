import { Guitar } from "./guitar";
import { GuitarSpec } from "./guitarSpec";

export class Inventory {
    #guitars: Guitar[] = [];

    addGuitar(serialNumber: string, price: number, spec: GuitarSpec) {
        let guitar = new Guitar(serialNumber, price, spec);
        this.#guitars.push(guitar);
    }

    getGuitar(serialNumber: string): Guitar {
        return this.#guitars.find(guitar => guitar.serialNumber === serialNumber)
    }

    search(searchSpec: GuitarSpec): Guitar[] {
        return this.#guitars.filter((guitar) => guitar.spec.matches(searchSpec))
    }
}
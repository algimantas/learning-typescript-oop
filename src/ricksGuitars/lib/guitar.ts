import { GuitarSpec } from "./guitarSpec";

export class Guitar {
    constructor(readonly serialNumber: string, public price: number, readonly spec: GuitarSpec) { }
}

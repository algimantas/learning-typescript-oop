import { Builder, Type, Wood } from "./types";

export class GuitarSpec {
    constructor(readonly builder: Builder, readonly model: string, readonly type: Type, readonly backWood: Wood,
        readonly topWood: Wood, readonly numStrings: number = 6) { }

    matches(search: GuitarSpec): boolean {
        if (search.builder !== null && this.builder !== search.builder) {
            return false;
        }

        if (search.model !== null && this.model.toLowerCase() !== search.model.toLowerCase()) {
            return false;
        }

        if (search.type !== null && this.type !== search.type) {
            return false;
        }

        if (search.backWood !== null && this.backWood !== search.backWood) {
            return false;
        }

        if (search.topWood !== null && this.topWood !== search.topWood) {
            return false;
        }

        if (this.numStrings !== search.numStrings) {
            return false;
        }

        return true;
    }
}
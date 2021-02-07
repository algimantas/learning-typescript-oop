import { Builder, Type, Wood } from "./types";

export class GuitarSpec {
    constructor(readonly builder: Builder, readonly model: string, readonly type: Type, readonly numStrings,
        readonly backWood: Wood, readonly topWood: Wood) { }

    matches(search: GuitarSpec): boolean {
        if (search.builder !== undefined && this.builder !== search.builder) {
            return false;
        }

        if (search.model !== undefined && this.model.toLowerCase() !== search.model.toLowerCase()) {
            return false;
        }

        if (search.type !== undefined && this.type !== search.type) {
            return false;
        }

        if (search.backWood !== undefined && this.backWood !== search.backWood) {
            return false;
        }

        if (search.topWood !== undefined && this.topWood !== search.topWood) {
            return false;
        }

        if (this.numStrings !== search.numStrings) {
            return false;
        }

        return true;
    }
}
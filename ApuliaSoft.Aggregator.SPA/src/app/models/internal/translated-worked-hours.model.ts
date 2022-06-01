import { WorkedHours } from "../api/worked-hours.model";

export class TranslatedWorkedHours extends WorkedHours {
    project?: string;
    employee?: string;
}
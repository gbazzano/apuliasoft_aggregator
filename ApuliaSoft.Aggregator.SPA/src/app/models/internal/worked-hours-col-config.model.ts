import { WorkedHoursColType } from "src/app/enums/worked-hours-col-type.enum";

export class WorkedHoursColConfig {
    prop: string = '';
    title: string = '';
    baseData?: string;
    type?: WorkedHoursColType;
}
import { Pipe, PipeTransform } from '@angular/core';
import { WorkedHoursColType } from '../enums/worked-hours-col-type.enum';

@Pipe({
    name: 'aggregationTableCol',
    pure: false
})
export class AggregationTableColPipe implements PipeTransform {
    transform(item: any, filter: WorkedHoursColType | undefined = undefined): string {
        if (!item ) {
            return "";
        }

        if (filter == WorkedHoursColType.Date)
        {
            let dateItem = new Date(item);
            
            return  dateItem.getDate().toString().padStart(2, '0')
                    + "/" + (dateItem.getMonth() + 1).toString().padStart(2, '0')
                    + "/" + dateItem.getFullYear().toString().substring(2,4);
        }

        return item.toString();
    }
}
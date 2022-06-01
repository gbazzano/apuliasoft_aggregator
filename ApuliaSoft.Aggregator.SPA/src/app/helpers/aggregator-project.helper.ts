import { WorkedHours } from "../models/api/worked-hours.model";

export class ProjectHelper {

    /// Returns an array of WorkedHours oredered and aggregated by the filters supplied.
    public static workedHoursGroup(elements: WorkedHours[], filters: string[]) : WorkedHours[] {

        type key = keyof WorkedHours;

        if (filters == null || filters == [])
            return elements;

        this.filteredSort<WorkedHours>(elements, filters);

        return this.aggregateWorkHours(elements, filters);
    }


    /// Sorts the input array using the filters elements as properties list.
    private static filteredSort<T>(list: T[], filters: string[]) {
        type key = keyof T;
        
        list.sort((a, b) => {
            for(const filter of filters) {
                if (filter == null || filter == "" || !(filter in a) || !(filter in b))
                    throw "Invalid fitler supplied.";

                if (a[filter as key]! > b[filter as key]!)
                    return 1;
                if (a[filter as key]! < b[filter as key]!)
                    return -1;
            }
            
            return 0;
        });
    }


    /// Aggregates an ALREADY ORDERED list of WorkedHours using the filters elements as properties list.
    private static aggregateWorkHours(elements: WorkedHours[], filters: string[]): WorkedHours[] {
        type key = keyof WorkedHours;

        let result: WorkedHours[] = [];
        let currPos = 0;
        let currFilter: WorkedHours | null = null;
        let tempResult: WorkedHours | null = null;
        
        while(currPos < elements.length) {
            let tempFilter = new WorkedHours();
            let isNewGroup = currFilter == null;

            filters.forEach(f => {
                tempFilter[f as key] = elements[currPos][f as key] as any;
                
                if (!isNewGroup && tempFilter[f as key] != currFilter![f as key])
                    isNewGroup = true;
            });
            
            if (isNewGroup) {
                currFilter = tempFilter;
                
                if (tempResult != null)
                    result.push(tempResult);
                
                tempResult = new WorkedHours();

                filters.forEach(f => tempResult![f as key] = elements[currPos][f as key] as any);
                tempResult.hours = 0;
            }
            
            tempResult!.hours! += elements[currPos].hours!;
            
            currPos++;
            
            if (currPos == elements.length && tempResult != null)
                result.push(tempResult)
        }

        return result;
    }
}
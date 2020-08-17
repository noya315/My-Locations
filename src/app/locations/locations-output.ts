import { Location } from './location';

interface ListOutput {
    isGroupedBy: false;
    data: Location[];
}

interface GroupedByOutput {
    isGroupedBy: true;
    data: Record<string, Location[]>;
}

export type Output = ListOutput | GroupedByOutput;

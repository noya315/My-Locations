import { Location } from 'src/app/locations/location';

export interface LocationData {
    location: Location;
    submitTask?: string;
}

export interface CategoryData {
    name: string;
    submitTask?: string;
}

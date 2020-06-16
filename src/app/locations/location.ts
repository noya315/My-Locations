import { Category } from '../categories/category';

export class Location {
    constructor(public name: string = '', public address:string = '',
                public coordinates: string = '',
                public category: Category = new Category()){ }
}
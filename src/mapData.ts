import data from './data.json';
import { Location } from './locations/location';
import { LocationDeserialize } from './locations/location_data';

export class MapData{
    rootId: string;
    locations: Map<string, Location>;

    constructor(){
        this.rootId = data.rootId;
        this.locations = new Map();
        Object.entries(data.locations).forEach(([id, data])=>{
            this.locations.set(id, new Location(LocationDeserialize(data)));
        });
    }
}
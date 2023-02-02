import { LocationData } from "./location_data";

export class Location{
    // data: LocationData;
    id: string;
    // name: string;
    // type: string;
    // parentId: string;
    // children: string[];
    // properties: Map<string, string>;
    // blob: Map<string, string>;
    // localPosition: Phaser.Math.Vector3;
    constructor(data: LocationData){
        // this.data = data;
        this.id = data.id;
    }
}
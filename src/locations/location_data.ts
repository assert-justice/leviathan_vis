import Phaser from "phaser";

export interface LocationData{
    id: string;
    name: string;
    type: string;
    parentId: string;
    // children: string[];
    properties: Map<string, string>;
    // blob: Map<string, string>;
    localPosition: Phaser.Math.Vector3;
}

// export function locationDeserialize({data}: any): LocationData{
//     const properties = new Map<string,string>(Object.entries(data.properties));
//     // const properties = new Map<string,string>();
//     const pos: number[] = Object.values(data.localPosition).map(Number);
//     const localPosition = new Phaser.Math.Vector3(...pos);
//     // const localPosition = new Phaser.Math.Vector3();
    
//     const res = {
//         id: data.id,
//         name: data.name,
//         type: data.type,
//         parentId: data.parentId,
//         childIds: data.childIds,
//         properties,
//         localPosition,
//     }
    
//     return res;
// }
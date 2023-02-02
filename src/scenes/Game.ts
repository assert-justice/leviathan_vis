import Phaser from 'phaser';
import { getLocation } from '../utils/api';
import { MapData } from '../mapData';

export default class Demo extends Phaser.Scene {
  // locationId: string;
  // mapData: MapData;

  constructor() {
    super('GameScene');
    getLocation('1').then(console.log);
    // this.mapData = new MapData();
    // this.mapData.locations.values().forEach(console.log);
    // for (const loc of this.mapData.locations.values()) {
    //   console.log(loc); 
    // }
    // this.locationId = data.rootId;
    // this.locationId = data.rootId;
    // const locations: JSON = data.locations;
    // const location = locations[this.locationId];
  }

  preload() {
    // 
  }

  create() {
    //
    // const obj = new Phaser.GameObjects.Container(this);
    // // new Phaser.Math.Vector3()
    // const child = obj.add(
    //   new Phaser.GameObjects.Container(obj.scene),
    // );
    // obj.update()
  }

  update(time: number, delta: number): void {
      //
  }
}
import { Point1,Point3 } from "./services/taller1.js";
import { Point2_1, point2_2, point2_3 } from "./services/taller2.js";

export function main() {
    // Taller 1 
    Point1();
    console.log(`--------------`);
    // el punto 2 esta incluido en el 1 
    Point3();
    console.log(`--------------`);
    // Taller 2 
    Point2_1();
    console.log(`--------------`);
    point2_2();
    console.log(`--------------`);
    point2_3();
}

main();
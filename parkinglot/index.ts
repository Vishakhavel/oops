import { ParkingLot } from './ParkingLot';
import { VehicleType } from './utils';
import { Vehicle } from './Vehicle';

// create a parking lot of size 5x20
let parkingLot = new ParkingLot(5, 20);

// create a with a uniqe motorcycle number plate
let motorcycle = new Vehicle('MOTORCYCLE-1', VehicleType.MOTORCYCLE);
// create a with a compact uniqe number plate
let compact = new Vehicle('COMPACT-1', VehicleType.COMPACT);
// create a with a car uniqe number plate
let regular = new Vehicle('REGULAR-1', VehicleType.REGULAR);
// create a with a van uniqe number plate
let van = new Vehicle('VAN-1', VehicleType.VAN);

// park motorcycle
parkingLot.park(motorcycle);
// park compact
parkingLot.park(compact);
// park car
parkingLot.park(regular);
// park van
parkingLot.park(van);

// unpark car
parkingLot.unpark(regular);

// getRemaining car spaces
console.log(parkingLot.getTotalVehiclesInLot());

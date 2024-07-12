import { VehicleType } from './utils';
import { Vehicle } from './Vehicle';

// parking spot has not VAN type - van just takes up 2 regulars and 3 compacts.

type parkingSpotType =
  | VehicleType.REGULAR
  | VehicleType.COMPACT
  | VehicleType.MOTORCYCLE;

export class ParkingSpot {
  parkingSpotType: VehicleType;
  vehicleParked: Vehicle | null;

  // constructor
  ParkingSpot(
    parkingSpotType: parkingSpotType = VehicleType.REGULAR,
    vehicleParked: Vehicle | null = null
  ) {
    this.parkingSpotType = parkingSpotType;
    this.vehicleParked = vehicleParked;
  }

  // returns boolean
  canPark(vehicle: Vehicle) {
    switch (vehicle.vehicleType) {
      case VehicleType.MOTORCYCLE:
        // motorcycles can park in any empty spot.
        return (
          (this.parkingSpotType === VehicleType.MOTORCYCLE ||
            this.parkingSpotType === VehicleType.COMPACT ||
            this.parkingSpotType === VehicleType.REGULAR ||
            this.parkingSpotType === VehicleType.VAN) &&
          this.vehicleParked === null
        );
        break;
      case VehicleType.COMPACT:
        // compact can park in all empty spots except motorcycles
        return (
          (this.parkingSpotType === VehicleType.COMPACT ||
            this.parkingSpotType === VehicleType.REGULAR ||
            this.parkingSpotType === VehicleType.VAN) &&
          this.vehicleParked === null
        );
        break;
      case VehicleType.REGULAR:
        // regualar vehiclees can park in regular spots only
        return (
          this.parkingSpotType === VehicleType.REGULAR &&
          this.vehicleParked === null
        );
        break;
      case VehicleType.VAN:
        // return false, and deal with this seperately
        return false;
        break;

      default:
        return false;
    }
  }
}

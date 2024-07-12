import { ParkingSpot } from './ParkingSpot';
import { VehicleType } from './utils';
import { Vehicle } from './Vehicle';
export class ParkingLot {
  parkingSpots: ParkingSpot[][] = [];
  vehicleCount: number = 0;

  ParkingLot(rows: number, cols: number) {
    let parkingSpots: ParkingSpot[][] = [];
    for (let i = 0; i < rows; i++) {
      let curRow: ParkingSpot[] = [];
      for (let j = 0; j < cols; j++) {
        if (j < 3) {
          // dk why the underlined lint - FIXME:
          curRow.push(new ParkingSpot(VehicleType.MOTORCYCLE, null));
        } else if (j < 6) {
          curRow.push(new ParkingSpot(VehicleType.COMPACT));
        } else {
          curRow.push(new ParkingSpot(VehicleType.REGULAR, null));
        }
      }
      parkingSpots.push(curRow);
    }

    this.parkingSpots = parkingSpots;
  }

  park(vehicle: Vehicle) {
    let rows = this.parkingSpots.length;
    let cols = this.parkingSpots[0].length;

    // this entire loop will goo only for non-vans.

    if (vehicle.vehicleType !== VehicleType.VAN) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let curParkingSpot = this.parkingSpots[i][j];

          if (curParkingSpot.canPark(vehicle)) {
            curParkingSpot.vehicleParked = vehicle;
            this.vehicleCount++;
            return true;
          }
        }
      }
    } else {
      // vehicle type = van
      // Special handling for vans - check consecutive spaces
      // Try to find 2 consecutive regular spots
      for (let i = 0; i < rows; i++) {
        for (let j = 6; j < cols - 1; j++) {
          if (
            this.parkingSpots[i][j].parkingSpotType === VehicleType.REGULAR &&
            this.parkingSpots[i][j + 1].parkingSpotType ===
              VehicleType.REGULAR &&
            this.parkingSpots[i][j].vehicleParked === null &&
            this.parkingSpots[i][j + 1].vehicleParked === null
          ) {
            this.parkingSpots[i][j].vehicleParked = vehicle;
            this.parkingSpots[i][j + 1].vehicleParked = vehicle;
            this.vehicleCount++;
            return true;
          }
        }
      }
    }

    return false;
  }

  unpark(licensePlate: string) {
    let rows = this.parkingSpots.length;
    let cols = this.parkingSpots[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (
          this.parkingSpots[i][j].vehicleParked?.licensePlate === licensePlate
        ) {
          this.parkingSpots[i][j].vehicleParked = null;
          return true;
        }
      }
    }

    return false;
  }

  getTotalVehiclesInLot() {
    return this.vehicleCount;
  }
}

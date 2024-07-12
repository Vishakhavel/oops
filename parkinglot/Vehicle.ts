import { VehicleType } from './utils';
export class Vehicle {
  licensePlate: string;
  vehicleType: VehicleType;

  Vehicle(
    licensePlate: string = '',
    vehicleType: VehicleType = VehicleType.REGULAR
  ) {
    this.licensePlate = licensePlate;
    this.vehicleType = vehicleType;
  }
}

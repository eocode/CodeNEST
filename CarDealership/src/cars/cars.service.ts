import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [];

    findAll() {
        return this.cars;
    }

    findOne(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);

        return car;
    }
    
    create(createCarDto: CreateCarDTO) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);
        
        return car;
    }

    update(id: string, updateCarDto: CreateCarDTO) {
        let carDB = this.findOne(id);

        this.cars = this.cars.map(
            car => {
                if (car.id === id) {
                    carDB = {
                        ...car,
                        ...updateCarDto
                    }
                    return carDB;
                }
                return car;
            }
        )

        return carDB;
    }

    delete(id: string) {
        const car = this.findOne(id);

        this.cars = this.cars.filter(car => car.id !== id);
    }   

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }

}

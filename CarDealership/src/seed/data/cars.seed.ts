import { Car } from 'src/cars/interfaces/car.interface';
import {v4 as uuid} from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'Model S',
        color: 'red',
    },
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'Model 3',
        color: 'blue',
    },
];
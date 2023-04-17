import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDTO{
    @IsString()
    @IsOptional()
    readonly brand: string;
    @IsString()
    @IsOptional()
    readonly model: string;
    @IsString()
    @IsOptional()
    readonly color: string;
}
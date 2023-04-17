import { IsDate, IsString, IsUUID, IsDateString } from "class-validator";

export class Brand {
    @IsUUID()
    id: string;
    
    @IsString()
    name: string;
    
    @IsDateString()
    createdAt: Date;

    @IsDateString()
    updatedAt?: Date;
}

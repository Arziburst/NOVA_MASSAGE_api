// Core
import { IsString } from 'class-validator';

export class ContactUsInput {
    @IsString()
        name: string;

    @IsString()
        phone: string;

    @IsString()
        question: string;
}

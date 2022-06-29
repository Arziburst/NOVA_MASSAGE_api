// Core
import { Module } from '@nestjs/common';

// Instruments
import { ContactUsController } from './contactUs.controller';
import { ContactUsService } from './contactUs.service';

@Module({
    providers:   [ ContactUsService ],
    controllers: [ ContactUsController ],
    exports:     [ ContactUsService ],
})
export class ContactUsModule {}

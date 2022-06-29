// Core
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Modules
// import { DatabaseModule } from './database/database.module';
import { ContactUsModule } from './bus/ContactUs/contactUs.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        // DatabaseModule,
        ContactUsModule,
    ],
})
export class AppModule {}

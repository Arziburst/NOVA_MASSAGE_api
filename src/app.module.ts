// Core
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

// Modules
// import { DatabaseModule } from './database/database.module';
import { ContactUsModule } from './bus/ContactUs/contactUs.module';

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl:   1000 * 60 * 60 * 12,
            limit: 1,
        }),
        ConfigModule.forRoot(),
        // DatabaseModule,
        ContactUsModule,
    ],
})
export class AppModule {}

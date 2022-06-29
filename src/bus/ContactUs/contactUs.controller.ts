// Core
import {
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    Body,
} from '@nestjs/common';

// Services
import { ContactUsService } from './contactUs.service';

// Instruments
import { ContactUsInput } from './contactUs.inputs';

@Controller('contactUs')
export class ContactUsController {
    constructor(
        private readonly contactUsService: ContactUsService,
    ) {}

    // ================================================================================================================

    @Post('/')
    @HttpCode(HttpStatus.OK)
    async contactUsByTelegram(@Body() body: ContactUsInput): Promise<boolean> {
        const result = await this.contactUsService.contactUsByTelegram(body);

        return result;
    }
}

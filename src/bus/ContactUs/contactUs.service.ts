// Core
import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Instruments
import { ContactUsInput } from './contactUs.inputs';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot5361474341:AAHiYRHTmk_0DoYdmmXpvEnGkW488ZkPmQA';
const TELEGRAM_GROUP_ID = '-1001653168832';

@Injectable()
export class ContactUsService {
    constructor() { }

    async contactUsByTelegram(body: ContactUsInput): Promise<boolean> {
        try {
            const { name, phone, question } = body;

            const URL = `${TELEGRAM_API_URL}/sendMessage`;

            await axios.post(URL, {
                chat_id:    TELEGRAM_GROUP_ID,
                parse_mode: 'HTML',
                text:       `Клиент: ${name}\nТелефон: <a href='tel:${phone}'>${phone}</a>${question && `\nКомментарий: ${question}`}.`,
            });

            return true;
        } catch (error) {
            return false;
        }
    }
}

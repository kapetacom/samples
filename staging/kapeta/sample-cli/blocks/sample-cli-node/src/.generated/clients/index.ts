import { SampleClient } from './SampleClient';
import 'dotenv/config';

export const initRestClients = () => {
    if (!process.env.KAPETA_CONSUMER_SERVICE_SAMPLE_REST) {
        throw new Error('Environment variable "KAPETA_CONSUMER_SERVICE_SAMPLE_REST" is not defined');
    }

    return {
        sampleClient: new SampleClient(false).$withBaseUrl(process.env.KAPETA_CONSUMER_SERVICE_SAMPLE_REST),
    };
};

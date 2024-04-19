import Config from '@kapeta/sdk-config';

export interface SomeConfig {
    test: string;
    secretTest: string;
}

export const getSomeConfig = (defaultValue: SomeConfig): SomeConfig => {
    return Config.getOrDefault<SomeConfig>('Some', defaultValue);
};

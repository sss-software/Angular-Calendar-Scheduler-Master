import { Injectable } from '@angular/core';

/**
 * Auth configuration.
 */
@Injectable()
export class SchedulerConfig {
    locale?: string = 'en';
    headerDateFormat?: 'weekNumber' | 'daysRange' = 'daysRange';

    constructor(config: SchedulerConfig = {}) {
        function use<T>(source: T, defaultValue: T): T {
            return config && source !== undefined ? source : defaultValue;
        }

        this.locale = use(config.locale, this.locale);
        this.headerDateFormat = use(config.headerDateFormat, this.headerDateFormat);
    }
}

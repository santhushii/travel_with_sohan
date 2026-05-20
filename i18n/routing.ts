import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en'/*, 'es'*/],

  // Used when no locale matches
  defaultLocale: 'en',

  // Do not show the locale prefix for the default locale (English)
  localePrefix: 'as-needed'
});

import { createI18n } from 'vue-i18n';
import en from '../locales/en';
import gj from '../locales/gj'

export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        gj
    }
});
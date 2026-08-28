import type { Language } from './types';

export type TranslationKey =
  | 'nav.home'
  | 'nav.kinomas'
  | 'nav.kadrichDurs'
  | 'nav.academy'
  | 'nav.about'
  | 'nav.contact'
  | 'home.heroTitle'
  | 'home.heroSubtitle'
  | 'home.heroCta'
  | 'home.heroSecondary'
  | 'home.introLabel'
  | 'home.introTitle'
  | 'home.introBody'
  | 'home.featuredLabel'
  | 'home.featuredTitle'
  | 'home.kinomasLabel'
  | 'home.kinomasTitle'
  | 'home.kinomasBody'
  | 'home.kinomasCta'
  | 'home.kadrichLabel'
  | 'home.kadrichTitle'
  | 'home.kadrichBody'
  | 'home.kadrichCta'
  | 'home.academyLabel'
  | 'home.academyTitle'
  | 'home.academyBody'
  | 'home.academyCta'
  | 'home.aboutLabel'
  | 'home.aboutTitle'
  | 'home.aboutBody'
  | 'home.aboutCta'
  | 'home.contactLabel'
  | 'home.contactTitle'
  | 'home.contactBody'
  | 'common.viewAll'
  | 'common.watchOnTelegram'
  | 'common.readMore'
  | 'common.year'
  | 'common.genre'
  | 'common.duration'
  | 'common.difficulty'
  | 'common.category'
  | 'common.premium'
  | 'common.comingSoon'
  | 'common.premiumComingSoon'
  | 'common.free'
  | 'common.partner'
  | 'common.presentedWith'
  | 'common.backTo'
  | 'common.relatedContent'
  | 'common.allCategories'
  | 'common.noContent'
  | 'kinomas.title'
  | 'kinomas.subtitle'
  | 'kadrich.title'
  | 'kadrich.subtitle'
  | 'kadrich.categoryDirectors'
  | 'kadrich.categoryScreenwriters'
  | 'kadrich.categoryCinematographers'
  | 'kadrich.categoryEditors'
  | 'kadrich.categoryActors'
  | 'kadrich.categoryProduction'
  | 'kadrich.categoryTechniques'
  | 'academy.title'
  | 'academy.subtitle'
  | 'academy.beginner'
  | 'academy.intermediate'
  | 'academy.advanced'
  | 'academy.techniques'
  | 'academy.software'
  | 'academy.exercises'
  | 'about.title'
  | 'about.subtitle'
  | 'about.brand'
  | 'about.brandBody'
  | 'about.creator'
  | 'about.creatorBody'
  | 'about.mission'
  | 'about.missionBody'
  | 'about.programs'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.email'
  | 'contact.telegram'
  | 'contact.instagram'
  | 'contact.youtube'
  | 'contact.follow'
  | 'footer.rights'
  | 'footer.tagline'
  | 'admin.title'
  | 'admin.login'
  | 'admin.email'
  | 'admin.password'
  | 'admin.signIn'
  | 'admin.signOut'
  | 'admin.dashboard'
  | 'admin.content'
  | 'admin.sponsors'
  | 'admin.settings'
  | 'admin.loading'
  | 'admin.unauthorized'
  | 'admin.loginError'
  | 'admin.loginPrompt'
  | 'lessons.title'
  | 'lessons.subtitle'
  | 'lessons.freeLabel'
  | 'lessons.freeTitle'
  | 'lessons.freeBody'
  | 'lessons.premiumLabel'
  | 'lessons.premiumTitle'
  | 'lessons.premiumBody'
  | 'lessons.premiumBadge'
  | 'lessons.freeBadge'
  | 'lessons.cta'
  | 'lessons.premiumCta'
  | 'lessons.premiumNote'
  | 'admin.backToDashboard'
  | 'admin.backToSite'
  | 'admin.films'
  | 'admin.episodes'
  | 'admin.lessons'
  | 'admin.newFilm'
  | 'admin.newEpisode'
  | 'admin.newLesson'
  | 'admin.newSponsor'
  | 'admin.editFilm'
  | 'admin.editEpisode'
  | 'admin.editLesson'
  | 'admin.editSponsor'
  | 'admin.slug'
  | 'admin.type'
  | 'admin.program'
  | 'admin.coverImage'
  | 'admin.heroImage'
  | 'admin.title'
  | 'admin.synopsis'
  | 'admin.description'
  | 'admin.seoTitle'
  | 'admin.seoDescription'
  | 'admin.trailerUrl'
  | 'admin.telegramLink'
  | 'admin.year'
  | 'admin.genre'
  | 'admin.duration'
  | 'admin.difficulty'
  | 'admin.sponsor'
  | 'admin.noSponsor'
  | 'admin.featured'
  | 'admin.published'
  | 'admin.draft'
  | 'admin.premium'
  | 'admin.free'
  | 'admin.save'
  | 'admin.saveDraft'
  | 'admin.publish'
  | 'admin.unpublish'
  | 'admin.cancel'
  | 'admin.delete'
  | 'admin.edit'
  | 'admin.create'
  | 'admin.confirmDelete'
  | 'admin.saving'
  | 'admin.deleting'
  | 'admin.saved'
  | 'admin.saveError'
  | 'admin.deleted'
  | 'admin.deleteError'
  | 'admin.uploadImage'
  | 'admin.uploading'
  | 'admin.uploadError'
  | 'admin.imagePreview'
  | 'admin.sponsorName'
  | 'admin.sponsorLogo'
  | 'admin.sponsorBanner'
  | 'admin.sponsorLink'
  | 'admin.sponsorActive'
  | 'admin.sponsorLabel'
  | 'admin.sponsorMessage'
  | 'admin.totalFilms'
  | 'admin.totalEpisodes'
  | 'admin.totalLessons'
  | 'admin.totalSponsors'
  | 'admin.publishedItems'
  | 'admin.draftItems'
  | 'admin.recentItems'
  | 'admin.noItems'
  | 'admin.status'
  | 'admin.actions'
  | 'admin.translations'
  | 'admin.translationsHint'
  | 'admin.required';

type Dictionary = Record<TranslationKey, string>;

const hy: Dictionary = {
  'nav.home': 'Գլխավոր',
  'nav.kinomas': 'KinoMas',
  'nav.kadrichDurs': 'Կադրից դուրս',
  'nav.academy': 'Մոնտաժի Ակադեմիա',
  'nav.about': 'Մեր մասին',
  'nav.contact': 'Կապ',
  'home.heroTitle': 'Կինոն լույսի մեջ',
  'home.heroSubtitle': 'EvoVision Films — կինեմատոգրաֆիական մեդիա և ստեղծագործական հարթակ՝ նվիրված ֆիլմերին, կինոարվեստին և մոնտաժին',
  'home.heroCta': 'Բացահայտել',
  'home.heroSecondary': 'Ծանոթանալ ծրագրերին',
  'home.introLabel': 'Բրենդի մասին',
  'home.introTitle': 'Կինոն որպես արվեստ, լույս որպես պատմություն',
  'home.introBody': 'EvoVision Films-ը կինեմատոգրաֆիական մեդիա բրենդ է, որը միավորում է ֆիլմերի քննադատությունը, կինոարվեստի ուսումնասիրությունը և մոնտաժի կրթությունը մեկ ստեղծագործական տարածքում։',
  'home.featuredLabel': 'Ընտրված',
  'home.featuredTitle': 'Վերջին բովանդակություն',
  'home.kinomasLabel': 'Ծրագիր',
  'home.kinomasTitle': 'KinoMas',
  'home.kinomasBody': 'Ֆիլմերի քննարկում և ակնարկներ՝ կինոյի սիրահարների համար։',
  'home.kinomasCta': 'Դիտել կատալոգը',
  'home.kadrichLabel': 'Ծրագիր',
  'home.kadrichTitle': 'Կադրից դուրս',
  'home.kadrichBody': 'Կինոարտադրության ետնաբեմային աշխարհը՝ ռեժիսորներից մինչև մոնտաժողներ։',
  'home.kadrichCta': 'Բացահայտել',
  'home.academyLabel': 'Ծրագիր',
  'home.academyTitle': 'Մոնտաժի Ակադեմիա',
  'home.academyBody': 'Վիդեո մոնտաժի դասեր՝ սկսնակներից մինչև պրոֆեսիոնալներ։',
  'home.academyCta': 'Մուտք գործել ակադեմիա',
  'home.aboutLabel': 'Մեր մասին',
  'home.aboutTitle': 'EvoVision Films',
  'home.aboutBody': 'Ստեղծագործական թիմ՝ կինոյի և մեդիայի հանդեպ սիրով։',
  'home.aboutCta': 'Մանրամասն',
  'home.contactLabel': 'Կապ',
  'home.contactTitle': 'Միացեք մեզ',
  'home.contactBody': 'Հետևեք մեզ սոցիալական ցանցերում և միացեք մեր համայնքին։',
  'common.viewAll': 'Դիտել բոլորը',
  'common.watchOnTelegram': 'Դիտել Telegram-ում',
  'common.readMore': 'Կարդալ ավելին',
  'common.year': 'Տարի',
  'common.genre': 'Ժանր',
  'common.duration': 'Տևողություն',
  'common.difficulty': 'Մակարդակ',
  'common.category': 'Կատեգորիա',
  'common.premium': 'Պրեմիում',
  'common.comingSoon': 'Շուտով',
  'common.premiumComingSoon': 'Պրեմիում — Շուտով',
  'common.free': 'Անվճար',
  'common.partner': 'Գործընկեր',
  'common.presentedWith': 'Աջակցությամբ',
  'common.backTo': 'Վերադառնալ',
  'common.relatedContent': 'Կապված բովանդակություն',
  'common.allCategories': 'Բոլոր կատեգորիաները',
  'common.noContent': 'Բովանդակություն դեռ չկա',
  'kinomas.title': 'KinoMas',
  'kinomas.subtitle': 'Ֆիլմերի քննարկում, ակնարկներ և ակնարկներ։',
  'kadrich.title': 'Կադրից դուրս',
  'kadrich.subtitle': 'Կինոարվեստի ետնաբեմային աշխարհը։',
  'kadrich.categoryDirectors': 'Ռեժիսորներ',
  'kadrich.categoryScreenwriters': 'Սցենարիստներ',
  'kadrich.categoryCinematographers': 'Կինոօպերատորներ',
  'kadrich.categoryEditors': 'Մոնտաժողներ',
  'kadrich.categoryActors': 'Դերասաններ',
  'kadrich.categoryProduction': 'Արտադրություն',
  'kadrich.categoryTechniques': 'Կինոտեխնիկա',
  'academy.title': 'Մոնտաժի Ակադեմիա',
  'academy.subtitle': 'Վիդեո մոնտաժի դասեր բոլոր մակարդակների համար։',
  'academy.beginner': 'Սկսնակ',
  'academy.intermediate': 'Միջանկայլ',
  'academy.advanced': 'Պրոֆեսիոնալ',
  'academy.techniques': 'Տեխնիկաներ',
  'academy.software': 'Ծրագրեր',
  'academy.exercises': 'Գործնական վարժություններ',
  'about.title': 'Մեր մասին',
  'about.subtitle': 'EvoVision Films բրենդի պատմությունը և առաքելությունը։',
  'about.brand': 'Բրենդը',
  'about.brandBody': 'EvoVision Films-ը կինեմատոգրաֆիական մեդիա բրենդ է, որը ստեղծվել է կինոյի և մոնտաժի հանդեպ սիրով։',
  'about.creator': 'Ստեղծողը',
  'about.creatorBody': 'Ֆիլմ բլոգեր և բովանդակության ստեղծող՝ նվիրված կինոյի արվեստին և կրթությանը։ [Խմբագրել տեղեկատվությունը]',
  'about.mission': 'Առաքելությունը',
  'about.missionBody': 'Մեր նպատակն է ստեղծել պրեմիում կինոմեդիա հարթակ՝ միավորելով ֆիլմերի քննադատությունը, կինոարվեստի ուսումնասիրությունը և մոնտաժի կրթությունը։',
  'about.programs': 'Ծրագրերը',
  'contact.title': 'Կապ',
  'contact.subtitle': 'Կապ հաստատեք EvoVision Films-ի հետ։',
  'contact.email': 'Էլ. փոստ',
  'contact.telegram': 'Telegram',
  'contact.instagram': 'Instagram',
  'contact.youtube': 'YouTube',
  'contact.follow': 'Հետևեք մեզ',
  'footer.rights': 'Բոլոր իրավունքները պաշտպանված են',
  'footer.tagline': 'Կինեմատոգրաֆիական մեդիա և ստեղծագործական հարթակ',
  'admin.title': 'Կառավարման համակարգ',
  'admin.login': 'Մուտք',
  'admin.email': 'Էլ. փոստ',
  'admin.password': 'Գաղտնաբառ',
  'admin.signIn': 'Մուտք գործել',
  'admin.signOut': 'Դուրս գալ',
  'admin.dashboard': 'Վահանակ',
  'admin.content': 'Բովանդակություն',
  'admin.sponsors': 'Գործընկերներ',
  'admin.settings': 'Կարգավորումներ',
  'admin.loading': 'Բեռնվում է...',
  'admin.unauthorized': 'Դուք չունեք այս բաժինը դիտելու իրավունք',
  'admin.loginError': 'Մուտքի սխալ։ Ստուգեք տվյալները։',
  'admin.loginPrompt': 'Մուտք գործեք կառավարման համակարգ',
  'lessons.title': 'Վիդեո դասեր',
  'lessons.subtitle': 'Մոնտաժի դասեր՝ բոլոր մակարդակների համար։',
  'lessons.freeLabel': 'Անվճար դասեր',
  'lessons.freeTitle': 'Անվճար դասեր',
  'lessons.freeBody': 'Սկսեք ձեր ուղին մոնտաժի աշխարհում՝ անվճար դասերով։',
  'lessons.premiumLabel': 'Պրեմիում դասեր',
  'lessons.premiumTitle': 'Պրեմիում դասեր',
  'lessons.premiumBody': 'Առաջադեմ տեխնիկաներ և պրոֆեսիոնալ մոտեցումներ փորձառու մոնտաժողների համար։',
  'lessons.premiumBadge': 'Պրեմիում',
  'lessons.freeBadge': 'Անվճար',
  'lessons.cta': 'Դիտել դասը',
  'lessons.premiumCta': 'Շուտով հասանելի',
  'lessons.premiumNote': 'Պրեմիում բովանդակությունը շուտով կհասանելի լինի։ Վճարային համակարգը դեռ ակտիվ չէ։',
  'admin.backToDashboard': 'Վերադառնալ վահանակին',
  'admin.backToSite': 'Բաց կայք',
  'admin.films': 'Ֆիլմեր',
  'admin.episodes': 'Դրվագներ',
  'admin.lessons': 'Դասեր',
  'admin.newFilm': 'Նոր ֆիլմ',
  'admin.newEpisode': 'Նոր դրվագ',
  'admin.newLesson': 'Նոր դաս',
  'admin.newSponsor': 'Նոր գործընկեր',
  'admin.editFilm': 'Խմբագրել ֆիլմը',
  'admin.editEpisode': 'Խմբագրել դրվագը',
  'admin.editLesson': 'Խմբագրել դասը',
  'admin.editSponsor': 'Խմբագրել գործընկերոջը',
  'admin.slug': 'Slug',
  'admin.type': 'Տեսակ',
  'admin.program': 'Ծրագիր',
  'admin.coverImage': 'Կազմի նկար',
  'admin.heroImage': 'Ֆոնային նկար',
  'admin.title': 'Կառավարման համակարգ',
  'admin.synopsis': 'Սինոպսիս',
  'admin.description': 'Նկարագրություն',
  'admin.seoTitle': 'SEO վերնագիր',
  'admin.seoDescription': 'SEO նկարագրություն',
  'admin.trailerUrl': 'Թրեյլերի URL',
  'admin.telegramLink': 'Telegram հղում',
  'admin.year': 'Տարի',
  'admin.genre': 'Ժանր',
  'admin.duration': 'Տևողություն',
  'admin.difficulty': 'Մակարդակ',
  'admin.sponsor': 'Գործընկեր',
  'admin.noSponsor': 'Առանց գործընկերոջ',
  'admin.featured': 'Ընտրված',
  'admin.published': 'Հրապարակված',
  'admin.draft': 'Սևագիր',
  'admin.premium': 'Պրեմիում',
  'admin.free': 'Անվճար',
  'admin.save': 'Պահպանել',
  'admin.saveDraft': 'Պահպանել որպես սևագիր',
  'admin.publish': 'Հրապարակել',
  'admin.unpublish': 'Չհրապարակել',
  'admin.cancel': 'Չեղարկել',
  'admin.delete': 'Ջնջել',
  'admin.edit': 'Խմբագրել',
  'admin.create': 'Ստեղծել',
  'admin.confirmDelete': 'Վստա՞հ եք, որ ցանկանում եք ջնջել այս տարրը։ Այս գործողությունը հնարավոր չէ հետարկել։',
  'admin.saving': 'Պահպանվում է...',
  'admin.deleting': 'Ջնջվում է...',
  'admin.saved': 'Պահպանված է',
  'admin.saveError': 'Պահպանման սխալ։ Փորձեք կրկին։',
  'admin.deleted': 'Ջնջված է',
  'admin.deleteError': 'Ջնջման սխալ։',
  'admin.uploadImage': 'Վերբեռնել նկար',
  'admin.uploading': 'Բեռնվում է...',
  'admin.uploadError': 'Բեռնման սխալ։',
  'admin.imagePreview': 'Նախադիտում',
  'admin.sponsorName': 'Անվանում',
  'admin.sponsorLogo': 'Լոգո',
  'admin.sponsorBanner': 'Բաներ',
  'admin.sponsorLink': 'Հղում',
  'admin.sponsorActive': 'Ակտիվ',
  'admin.sponsorLabel': 'Պիտակ',
  'admin.sponsorMessage': 'Հաղորդագրություն',
  'admin.totalFilms': 'Ֆիլմերի քանակը',
  'admin.totalEpisodes': 'Դրվագների քանակը',
  'admin.totalLessons': 'Դասերի քանակը',
  'admin.totalSponsors': 'Գործընկերների քանակը',
  'admin.publishedItems': 'Հրապարակված',
  'admin.draftItems': 'Սևագրեր',
  'admin.recentItems': 'Վերջին տարրեր',
  'admin.noItems': 'Տարրեր չկան',
  'admin.status': 'Կարգավիճակ',
  'admin.actions': 'Գործողություններ',
  'admin.translations': 'Թարգմանություններ',
  'admin.translationsHint': 'Լրացրեք բոլոր երեք լեզուներով',
  'admin.required': 'Պարտադիր դաշտ',
};

const ru: Dictionary = {
  'nav.home': 'Главная',
  'nav.kinomas': 'KinoMas',
  'nav.kadrichDurs': 'Кадрич Дурс',
  'nav.academy': 'Академия монтажа',
  'nav.about': 'О нас',
  'nav.contact': 'Контакты',
  'home.heroTitle': 'Кино в свете',
  'home.heroSubtitle': 'EvoVision Films — кинематографическая медиа-платформа, посвящённая фильмам, киноискусству и монтажу',
  'home.heroCta': 'Открыть',
  'home.heroSecondary': 'Узнать о программах',
  'home.introLabel': 'О бренде',
  'home.introTitle': 'Кино как искусство, свет как история',
  'home.introBody': 'EvoVision Films — это кинематографический медиабренд, объединяющий кинокритику, изучение киноискусства и обучение монтажу в едином творческом пространстве.',
  'home.featuredLabel': 'Избранное',
  'home.featuredTitle': 'Последний контент',
  'home.kinomasLabel': 'Программа',
  'home.kinomasTitle': 'KinoMas',
  'home.kinomasBody': 'Обсуждение и обзоры фильмов для любителей кино.',
  'home.kinomasCta': 'Смотреть каталог',
  'home.kadrichLabel': 'Программа',
  'home.kadrichTitle': 'Кадрич Дурс',
  'home.kadrichBody': 'Закулисье кинопроизводства — от режиссёров до монтажёров.',
  'home.kadrichCta': 'Открыть',
  'home.academyLabel': 'Программа',
  'home.academyTitle': 'Академия монтажа',
  'home.academyBody': 'Уроки видеомонтажа от новичков до профессионалов.',
  'home.academyCta': 'Войти в академию',
  'home.aboutLabel': 'О нас',
  'home.aboutTitle': 'EvoVision Films',
  'home.aboutBody': 'Творческая команда, влюблённая в кино и медиа.',
  'home.aboutCta': 'Подробнее',
  'home.contactLabel': 'Контакты',
  'home.contactTitle': 'Свяжитесь с нами',
  'home.contactBody': 'Следите за нами в соцсетях и присоединяйтесь к нашему сообществу.',
  'common.viewAll': 'Смотреть все',
  'common.watchOnTelegram': 'Смотреть в Telegram',
  'common.readMore': 'Читать далее',
  'common.year': 'Год',
  'common.genre': 'Жанр',
  'common.duration': 'Длительность',
  'common.difficulty': 'Уровень',
  'common.category': 'Категория',
  'common.premium': 'Премиум',
  'common.comingSoon': 'Скоро',
  'common.premiumComingSoon': 'Премиум — Скоро',
  'common.free': 'Бесплатно',
  'common.partner': 'Партнёр',
  'common.presentedWith': 'При поддержке',
  'common.backTo': 'Назад к',
  'common.relatedContent': 'Связанный контент',
  'common.allCategories': 'Все категории',
  'common.noContent': 'Контента пока нет',
  'kinomas.title': 'KinoMas',
  'kinomas.subtitle': 'Обсуждение, обзоры и рецензии фильмов.',
  'kadrich.title': 'Кадрич Дурс',
  'kadrich.subtitle': 'Закулисье киноискусства.',
  'kadrich.categoryDirectors': 'Режиссёры',
  'kadrich.categoryScreenwriters': 'Сценаристы',
  'kadrich.categoryCinematographers': 'Кинооператоры',
  'kadrich.categoryEditors': 'Монтажёры',
  'kadrich.categoryActors': 'Актёры',
  'kadrich.categoryProduction': 'Производство',
  'kadrich.categoryTechniques': 'Кинотехника',
  'academy.title': 'Академия монтажа',
  'academy.subtitle': 'Уроки видеомонтажа для всех уровней.',
  'academy.beginner': 'Начальный',
  'academy.intermediate': 'Средний',
  'academy.advanced': 'Профессиональный',
  'academy.techniques': 'Техники',
  'academy.software': 'Программы',
  'academy.exercises': 'Практические упражнения',
  'about.title': 'О нас',
  'about.subtitle': 'История и миссия бренда EvoVision Films.',
  'about.brand': 'Бренд',
  'about.brandBody': 'EvoVision Films — кинематографический медиабренд, созданный из любви к кино и монтажу.',
  'about.creator': 'Создатель',
  'about.creatorBody': 'Фильм-блогер и создатель контента, посвятивший себя искусству кино и образованию. [Отредактировать информацию]',
  'about.mission': 'Миссия',
  'about.missionBody': 'Наша цель — создать премиальную киномедиа-платформу, объединяющую кинокритику, изучение киноискусства и обучение монтажу.',
  'about.programs': 'Программы',
  'contact.title': 'Контакты',
  'contact.subtitle': 'Свяжитесь с EvoVision Films.',
  'contact.email': 'Эл. почта',
  'contact.telegram': 'Telegram',
  'contact.instagram': 'Instagram',
  'contact.youtube': 'YouTube',
  'contact.follow': 'Следите за нами',
  'footer.rights': 'Все права защищены',
  'footer.tagline': 'Кинематографическая медиа и творческая платформа',
  'admin.title': 'Система управления',
  'admin.login': 'Вход',
  'admin.email': 'Эл. почта',
  'admin.password': 'Пароль',
  'admin.signIn': 'Войти',
  'admin.signOut': 'Выйти',
  'admin.dashboard': 'Панель',
  'admin.content': 'Контент',
  'admin.sponsors': 'Партнёры',
  'admin.settings': 'Настройки',
  'admin.loading': 'Загрузка...',
  'admin.unauthorized': 'У вас нет прав для просмотра этого раздела',
  'admin.loginError': 'Ошибка входа. Проверьте данные.',
  'admin.loginPrompt': 'Войдите в систему управления',
  'lessons.title': 'Видеоуроки',
  'lessons.subtitle': 'Уроки монтажа для всех уровней.',
  'lessons.freeLabel': 'Бесплатные уроки',
  'lessons.freeTitle': 'Бесплатные уроки',
  'lessons.freeBody': 'Начните свой путь в мире монтажа с бесплатными уроками.',
  'lessons.premiumLabel': 'Премиум-уроки',
  'lessons.premiumTitle': 'Премиум-уроки',
  'lessons.premiumBody': 'Продвинутые техники и профессиональные подходы для опытных монтажёров.',
  'lessons.premiumBadge': 'Премиум',
  'lessons.freeBadge': 'Бесплатно',
  'lessons.cta': 'Смотреть урок',
  'lessons.premiumCta': 'Скоро доступно',
  'lessons.premiumNote': 'Премиум-контент скоро будет доступен. Платёжная система пока не активна.',
  'admin.backToDashboard': 'Вернуться к панели',
  'admin.backToSite': 'Открыть сайт',
  'admin.films': 'Фильмы',
  'admin.episodes': 'Эпизоды',
  'admin.lessons': 'Уроки',
  'admin.newFilm': 'Новый фильм',
  'admin.newEpisode': 'Новый эпизод',
  'admin.newLesson': 'Новый урок',
  'admin.newSponsor': 'Новый партнёр',
  'admin.editFilm': 'Редактировать фильм',
  'admin.editEpisode': 'Редактировать эпизод',
  'admin.editLesson': 'Редактировать урок',
  'admin.editSponsor': 'Редактировать партнёра',
  'admin.slug': 'Slug',
  'admin.type': 'Тип',
  'admin.program': 'Программа',
  'admin.coverImage': 'Обложка',
  'admin.heroImage': 'Фоновое изображение',
  'admin.synopsis': 'Синопсис',
  'admin.description': 'Описание',
  'admin.seoTitle': 'SEO заголовок',
  'admin.seoDescription': 'SEO описание',
  'admin.trailerUrl': 'URL трейлера',
  'admin.telegramLink': 'Ссылка Telegram',
  'admin.year': 'Год',
  'admin.genre': 'Жанр',
  'admin.duration': 'Длительность',
  'admin.difficulty': 'Уровень',
  'admin.sponsor': 'Партнёр',
  'admin.noSponsor': 'Без партнёра',
  'admin.featured': 'Избранное',
  'admin.published': 'Опубликовано',
  'admin.draft': 'Черновик',
  'admin.premium': 'Премиум',
  'admin.free': 'Бесплатно',
  'admin.save': 'Сохранить',
  'admin.saveDraft': 'Сохранить как черновик',
  'admin.publish': 'Опубликовать',
  'admin.unpublish': 'Снять с публикации',
  'admin.cancel': 'Отмена',
  'admin.delete': 'Удалить',
  'admin.edit': 'Редактировать',
  'admin.create': 'Создать',
  'admin.confirmDelete': 'Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.',
  'admin.saving': 'Сохранение...',
  'admin.deleting': 'Удаление...',
  'admin.saved': 'Сохранено',
  'admin.saveError': 'Ошибка сохранения. Попробуйте снова.',
  'admin.deleted': 'Удалено',
  'admin.deleteError': 'Ошибка удаления.',
  'admin.uploadImage': 'Загрузить изображение',
  'admin.uploading': 'Загрузка...',
  'admin.uploadError': 'Ошибка загрузки.',
  'admin.imagePreview': 'Предпросмотр',
  'admin.sponsorName': 'Название',
  'admin.sponsorLogo': 'Логотип',
  'admin.sponsorBanner': 'Баннер',
  'admin.sponsorLink': 'Ссылка',
  'admin.sponsorActive': 'Активен',
  'admin.sponsorLabel': 'Метка',
  'admin.sponsorMessage': 'Сообщение',
  'admin.totalFilms': 'Всего фильмов',
  'admin.totalEpisodes': 'Всего эпизодов',
  'admin.totalLessons': 'Всего уроков',
  'admin.totalSponsors': 'Всего партнёров',
  'admin.publishedItems': 'Опубликовано',
  'admin.draftItems': 'Черновики',
  'admin.recentItems': 'Недавние элементы',
  'admin.noItems': 'Элементов нет',
  'admin.status': 'Статус',
  'admin.actions': 'Действия',
  'admin.translations': 'Переводы',
  'admin.translationsHint': 'Заполните на всех трёх языках',
  'admin.required': 'Обязательное поле',
};

const en: Dictionary = {
  'nav.home': 'Home',
  'nav.kinomas': 'KinoMas',
  'nav.kadrichDurs': 'Kadrich Durs',
  'nav.academy': 'Editing Academy',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'home.heroTitle': 'Cinema in the light',
  'home.heroSubtitle': 'EvoVision Films — a cinematic media platform dedicated to film, filmmaking, and editing',
  'home.heroCta': 'Discover',
  'home.heroSecondary': 'Explore the programs',
  'home.introLabel': 'About the brand',
  'home.introTitle': 'Cinema as art, light as story',
  'home.introBody': 'EvoVision Films is a cinematic media brand uniting film criticism, the study of filmmaking, and editing education in one creative space.',
  'home.featuredLabel': 'Featured',
  'home.featuredTitle': 'Latest content',
  'home.kinomasLabel': 'Program',
  'home.kinomasTitle': 'KinoMas',
  'home.kinomasBody': 'Film discussion and reviews for lovers of cinema.',
  'home.kinomasCta': 'View the catalogue',
  'home.kadrichLabel': 'Program',
  'home.kadrichTitle': 'Kadrich Durs',
  'home.kadrichBody': 'The behind-the-scenes world of filmmaking — from directors to editors.',
  'home.kadrichCta': 'Explore',
  'home.academyLabel': 'Program',
  'home.academyTitle': 'Editing Academy',
  'home.academyBody': 'Video editing lessons from beginner to professional.',
  'home.academyCta': 'Enter the academy',
  'home.aboutLabel': 'About',
  'home.aboutTitle': 'EvoVision Films',
  'home.aboutBody': 'A creative team in love with cinema and media.',
  'home.aboutCta': 'Read more',
  'home.contactLabel': 'Contact',
  'home.contactTitle': 'Connect with us',
  'home.contactBody': 'Follow us on social media and join our community.',
  'common.viewAll': 'View all',
  'common.watchOnTelegram': 'Watch on Telegram',
  'common.readMore': 'Read more',
  'common.year': 'Year',
  'common.genre': 'Genre',
  'common.duration': 'Duration',
  'common.difficulty': 'Level',
  'common.category': 'Category',
  'common.premium': 'Premium',
  'common.comingSoon': 'Coming soon',
  'common.premiumComingSoon': 'Premium — Coming soon',
  'common.free': 'Free',
  'common.partner': 'Partner',
  'common.presentedWith': 'Presented with support from',
  'common.backTo': 'Back to',
  'common.relatedContent': 'Related content',
  'common.allCategories': 'All categories',
  'common.noContent': 'No content yet',
  'kinomas.title': 'KinoMas',
  'kinomas.subtitle': 'Film discussion, reviews, and commentary.',
  'kadrich.title': 'Kadrich Durs',
  'kadrich.subtitle': 'The behind-the-scenes world of cinema.',
  'kadrich.categoryDirectors': 'Directors',
  'kadrich.categoryScreenwriters': 'Screenwriters',
  'kadrich.categoryCinematographers': 'Cinematographers',
  'kadrich.categoryEditors': 'Editors',
  'kadrich.categoryActors': 'Actors',
  'kadrich.categoryProduction': 'Production',
  'kadrich.categoryTechniques': 'Techniques',
  'academy.title': 'Editing Academy',
  'academy.subtitle': 'Video editing lessons for every level.',
  'academy.beginner': 'Beginner',
  'academy.intermediate': 'Intermediate',
  'academy.advanced': 'Advanced',
  'academy.techniques': 'Techniques',
  'academy.software': 'Software',
  'academy.exercises': 'Practical exercises',
  'about.title': 'About',
  'about.subtitle': 'The story and mission of the EvoVision Films brand.',
  'about.brand': 'The brand',
  'about.brandBody': 'EvoVision Films is a cinematic media brand born from a love of cinema and editing.',
  'about.creator': 'The creator',
  'about.creatorBody': 'A film blogger and content creator dedicated to the art of cinema and education. [Edit this information]',
  'about.mission': 'The mission',
  'about.missionBody': 'Our goal is to build a premium cinematic media platform that unites film criticism, the study of filmmaking, and editing education.',
  'about.programs': 'The programs',
  'contact.title': 'Contact',
  'contact.subtitle': 'Get in touch with EvoVision Films.',
  'contact.email': 'Email',
  'contact.telegram': 'Telegram',
  'contact.instagram': 'Instagram',
  'contact.youtube': 'YouTube',
  'contact.follow': 'Follow us',
  'footer.rights': 'All rights reserved',
  'footer.tagline': 'Cinematic media and creative platform',
  'admin.title': 'Management system',
  'admin.login': 'Login',
  'admin.email': 'Email',
  'admin.password': 'Password',
  'admin.signIn': 'Sign in',
  'admin.signOut': 'Sign out',
  'admin.dashboard': 'Dashboard',
  'admin.content': 'Content',
  'admin.sponsors': 'Sponsors',
  'admin.settings': 'Settings',
  'admin.loading': 'Loading...',
  'admin.unauthorized': 'You do not have permission to view this section',
  'admin.loginError': 'Login error. Check your credentials.',
  'admin.loginPrompt': 'Sign in to the management system',
  'lessons.title': 'Video Lessons',
  'lessons.subtitle': 'Editing lessons for every level.',
  'lessons.freeLabel': 'Free Lessons',
  'lessons.freeTitle': 'Free Lessons',
  'lessons.freeBody': 'Start your journey in the world of editing with free lessons.',
  'lessons.premiumLabel': 'Premium Lessons',
  'lessons.premiumTitle': 'Premium Lessons',
  'lessons.premiumBody': 'Advanced techniques and professional approaches for experienced editors.',
  'lessons.premiumBadge': 'Premium',
  'lessons.freeBadge': 'Free',
  'lessons.cta': 'Watch lesson',
  'lessons.premiumCta': 'Coming soon',
  'lessons.premiumNote': 'Premium content will be available soon. The payment system is not yet active.',
  'admin.backToDashboard': 'Back to dashboard',
  'admin.backToSite': 'Open site',
  'admin.films': 'Films',
  'admin.episodes': 'Episodes',
  'admin.lessons': 'Lessons',
  'admin.newFilm': 'New film',
  'admin.newEpisode': 'New episode',
  'admin.newLesson': 'New lesson',
  'admin.newSponsor': 'New sponsor',
  'admin.editFilm': 'Edit film',
  'admin.editEpisode': 'Edit episode',
  'admin.editLesson': 'Edit lesson',
  'admin.editSponsor': 'Edit sponsor',
  'admin.slug': 'Slug',
  'admin.type': 'Type',
  'admin.program': 'Program',
  'admin.coverImage': 'Cover image',
  'admin.heroImage': 'Background image',
  'admin.synopsis': 'Synopsis',
  'admin.description': 'Description',
  'admin.seoTitle': 'SEO title',
  'admin.seoDescription': 'SEO description',
  'admin.trailerUrl': 'Trailer URL',
  'admin.telegramLink': 'Telegram link',
  'admin.year': 'Year',
  'admin.genre': 'Genre',
  'admin.duration': 'Duration',
  'admin.difficulty': 'Difficulty',
  'admin.sponsor': 'Sponsor',
  'admin.noSponsor': 'No sponsor',
  'admin.featured': 'Featured',
  'admin.published': 'Published',
  'admin.draft': 'Draft',
  'admin.premium': 'Premium',
  'admin.free': 'Free',
  'admin.save': 'Save',
  'admin.saveDraft': 'Save as draft',
  'admin.publish': 'Publish',
  'admin.unpublish': 'Unpublish',
  'admin.cancel': 'Cancel',
  'admin.delete': 'Delete',
  'admin.edit': 'Edit',
  'admin.create': 'Create',
  'admin.confirmDelete': 'Are you sure you want to delete this item? This action cannot be undone.',
  'admin.saving': 'Saving...',
  'admin.deleting': 'Deleting...',
  'admin.saved': 'Saved',
  'admin.saveError': 'Save error. Try again.',
  'admin.deleted': 'Deleted',
  'admin.deleteError': 'Delete error.',
  'admin.uploadImage': 'Upload image',
  'admin.uploading': 'Uploading...',
  'admin.uploadError': 'Upload error.',
  'admin.imagePreview': 'Preview',
  'admin.sponsorName': 'Name',
  'admin.sponsorLogo': 'Logo',
  'admin.sponsorBanner': 'Banner',
  'admin.sponsorLink': 'Link',
  'admin.sponsorActive': 'Active',
  'admin.sponsorLabel': 'Label',
  'admin.sponsorMessage': 'Message',
  'admin.totalFilms': 'Total films',
  'admin.totalEpisodes': 'Total episodes',
  'admin.totalLessons': 'Total lessons',
  'admin.totalSponsors': 'Total sponsors',
  'admin.publishedItems': 'Published',
  'admin.draftItems': 'Drafts',
  'admin.recentItems': 'Recent items',
  'admin.noItems': 'No items',
  'admin.status': 'Status',
  'admin.actions': 'Actions',
  'admin.translations': 'Translations',
  'admin.translationsHint': 'Fill in all three languages',
  'admin.required': 'Required field',
};

const dictionaries: Record<Language, Dictionary> = { hy, ru, en };

export function translate(lang: Language, key: TranslationKey): string {
  return dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
}

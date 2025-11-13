
const data = [
    {
        "title": "ЧЕЛОВЕК-ПАУК: ПАУТИНА ВСЕЛЕННЫХ",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685789625-627974772-chelovek-pauk-pautina-vselennyh.jpg"
    },
    {
        "title": "БЕЗ ОБИД",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686145251-1320732604-bez-obid.jpg"
    },
    {
        "title": "ТРАНСФОРМЕРЫ: ВОСХОЖДЕНИЕ ЗВЕРОБОТОВ",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686337970-1155953622-transformery-voshozhdenie-zverobotov.jpg"
    },
    {
        "title": "ГИПНОТИК",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684755770-1850678879-gipnotik.jpg"
    },
    {
        "title": "БЕГЛЕЦ",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686144961-875513846-beglec.jpg"
    },
    {
        "title": "НЕ ДЫШИ: ИГРА НА ВЫЖИВАНИЕ",
        "group": "сериалы",
        "genres": "трилеры",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684755932-1734339375-ne-dyshi-igra-na-vyzhivanie.jpg"
    },
    {
        "title": "РУСАЛОЧКА",
        "group": "мультфильмы",
        "genres": "детские",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685522474-19631074-rusalochka.jpg"
    },
    {
        "title": "ЖАННА ДЮБАРРИ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684649112-1831993332-zhanna-dyubarri.jpg"
    },
    {
        "title": "КРОВЬ ЗА КРОВЬ",
        "group": "фильмы",
        "genres": "криминал",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685630842-1632903805-krov-za-krov.jpg"
    },
    {
        "title": "ОСТРОВ ИЛЛЮЗИЙ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685520684-143755639-ostrov-illyuziy.jpg"
    },
    {
        "title": "ЛЮБИ СНОВА",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684755673-2076607676-lyubi-snova.jpg"
    },
    {
        "title": "ЗВЕРОГОНЩИКИ",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684648663-1827017862-zverogonschiki.jpg"
    },
    {
        "title": "ПАРЕНЬ С ТОГО СВЕТА",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686853089-1639267312-paren-s-togo-sveta.jpg"
    },
    {
        "title": "ПОДВИДЫ 5: КРОВАВОЕ ВОСХОЖДЕНИЕ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685985551-1668347555-podvidy-5-krovavoe-voshozhdenie.jpg"
    },
    {
        "title": "БРИЛЛИАНТЫ МОХАВЕ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685521374-1207997593-brillianty-mohave.jpg"
    },
    {
        "title": "БРОДЯГИ",
        "group": "сериалы",
        "genres": "трилеры",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684818626-671970410-brodyagi.jpg"
    },
    {
        "title": "КОЛЬЦЕВАЯ ЛИНИЯ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685351690-779114944-kolcevaya-liniya.jpg"
    },
    {
        "title": "ГНЕЗДО КОНДОРА",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684818545-1585091526-gnezdo-kondora.jpg"
    },
    {
        "title": "КАРАТЕЛЬ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2004",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685125430-778909996-karatel.jpg"
    },
    {
        "title": "ТЫ УБИВАЕШЬ МЕНЯ",
        "group": "сериалы",
        "genres": "трилеры",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685790545-1547875340-ty-ubivaesh-menya.jpg"
    },
    {
        "title": "ОЗЕРО СТРАХА",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684770213-1012468067-ozero-straha.jpg"
    },
    {
        "title": "НЕЧТО. МОНСТР ИЗ ГЛУБИН",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685630594-687602492-nechto-monstr-iz-glubin.jpg"
    },
    {
        "title": "ЭСКАЛАЦИЯ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685789785-1093418657-eskalaciya.jpg"
    },
    {
        "title": "УИКЕНД С БАТЕЙ",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1687181311-1155723918-uikend-s-batey.jpg"
    },
    {
        "title": "КТО УБИЛ BLACKBERRY",
        "group": "сериалы",
        "genres": "фентези",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685630374-1318804647-kto-ubil-blackberry.jpg"
    },
    {
        "title": "ХРОНИКИ ПАНГОЛИНОВ",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686746693-660229112-hroniki-pangolinov.jpg"
    },
    {
        "title": "СЫН КАВЕРИ: ЧАСТЬ ВТОРАЯ",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685897586-911973740-syn-kaveri-chast-vtoraya.jpg"
    },
    {
        "title": "МАМА УЕХАЛА",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684820233-688774233-mama-uehala.jpg"
    },
    {
        "title": "ДРАКУЛА: НАСТОЯЩИЙ ЖИВОЙ ВАМПИР",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686073025-549165685-drakula-nastoyaschiy-zhivoy-vampir.jpg"
    },
    {
        "title": "ГНЕВ БЕККИ",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1687272774-933111587-gnev-bekki.jpg"
    },
    {
        "title": "НОВАЯ РЕАЛЬНОСТЬ",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686337143-1584363657-novaya-realnost.jpg"
    },
    {
        "title": "ОХОТА НА ДИКАРЕЙ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2016",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685247652-1328481206-ohota-na-dikarey.jpg"
    },
    {
        "title": "МОЁ ПРЕСТУПЛЕНИЕ",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685685147-684917907-moe-prestuplenie.jpg"
    },
    {
        "title": "КАТАК. ЛЕДНИКОВЫЙ ПОБЕГ",
        "group": "мультфильмы",
        "genres": "детские",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686391950-735150274-katak-lednikovyy-pobeg.jpg"
    },
    {
        "title": "МОДИФИКАТЫ",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2019",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686337259-1207823255-modifikaty.jpg"
    },
    {
        "title": "ЭФФЕКТ ЛАЗАРЯ",
        "group": "фильмы",
        "genres": "фентези",
        "price": "2013",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685984212-1007870825-effekt-lazarya.jpg"
    },
    {
        "title": "С ЛЮБОВЬЮ, РОЗИ",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685246906-207066888-s-lyubovyu-rozi.jpg"
    },
    {
        "title": "БЕЗНАДЁЖНАЯ СИТУАЦИЯ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686337866-794162159-beznadezhnaya-situaciya.jpg"
    },
    {
        "title": "ЮРА ДВОРНИК",
        "group": "сериалы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686390613-1533779612-yura-dvornik.jpg"
    },
    {
        "title": "КНИЖНЫЙ КЛУБ 2",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684649198-872353693-knizhnyy-klub-2.jpg"
    },
    {
        "title": "КОНЕЦ СВЕТА",
        "group": "фильмы",
        "genres": "драма",
        "price": "2021",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686146843-2118180024-konec-sveta.jpg"
    },
    {
        "title": "ДЕТЕКТИВ НАЙТ: МЕРЗАВЕЦ",
        "genres": "детектив",
        "group": "фильмы",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686336542-1745995342-detektiv-nayt-merzavec.jpg"
    },
    {
        "title": "ГНЕВ",
        "genres": "ужасы",
        "group": "фильмы",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685631849-2099983442-gnev.jpg"
    },
    {
        "title": "НЕРАСКРЫТЫЕ ДЕЛА МИСТЕРИ ЛЕЙН",
        "genres": "детектив",
        "group": "фильмы",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684818298-886334892-neraskrytye-dela-misteri-leyn.jpg"
    },
    {
        "title": "КРАСНОЕ ПЛАТЬЕ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684754883-1432024194-krasnoe-plate.jpg"
    },
    {
        "title": "ДЕНЬГИ РЕШАЮТ ВСЕ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "1997",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685791261-705754609-dengi-reshayut-vse.jpg"
    },
    {
        "title": "ОПАСНЫЙ БРАК",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2018",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686392185-518769764-opasnyy-brak.jpg"
    },
    {
        "title": "ПЕРВЫЙ ДЕНЬ МОЕЙ ЖИЗНИ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684648784-1932937561-pervyy-den-moey-zhizni.jpg"
    },
    {
        "title": "АКСЕЛЕРАТОР",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2020",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685790970-947875611-akselerator.jpg"
    },
    {
        "title": "ИГРА НА ВРЕМЯ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684819000-1583425186-igra-na-vremya.jpg"
    },
    {
        "title": "ДЕВОЧКА ПО ВЫЗОВУ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2007",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684756148-641732486-devochka-po-vyzovu.jpg"
    },
    {
        "title": "ДОМ",
        "group": "фильмы",
        "genres": "криминал",
        "price": "2015",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685684777-645516841-dom.jpg"
    },
    {
        "title": "ПАЦИЕНТЫ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685630486-1741021076-pacienty.jpg"
    },
    {
        "title": "ГОЛОВА-УТИЛЬ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684755035-1802127881-golova-util.jpg"
    },
    {
        "title": "ДОМ В КОНЦЕ ВРЕМЕН",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2013",
        "img": "https://kinozed.com/uploads/posts/2023-06/1687180938-126807337-dom-v-konce-vremen.jpg"
    },
    {
        "title": "КАМЕННЫЙ ОСТРОВ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685247899-1929747922-kamennyy-ostrov.jpg"
    },
    {
        "title": "РЕАЛИТИ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685790430-23513384-realiti.jpg"
    },
    {
        "title": "ВСЕ ДОЛЖНЫ УМЕРЕТЬ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2019",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686893756-1058562072-vse-dolzhny-umeret.jpg"
    },
    {
        "title": "ТИХИЙ САДОВНИК",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686391877-1160205072-tihiy-sadovnik.jpg"
    },
    {
        "title": "АЙРИС",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2010",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686392236-1236061763-ayris.jpg"
    },
    {
        "title": "ДЖЕНТЛЬМЕН ГРАБИТЕЛЬ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686987446-1112045236-dzhentlmen-grabitel.jpg"
    },
    {
        "title": "ОТЛИЧНИЦА ЛЁГКОГО ПОВЕДЕНИЯ",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2010",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685246726-879727979-otlichnica-legkogo-povedeniya.jpg"
    },
    {
        "title": "РАЙ ДЛЯ ДУРАКА",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684648463-518800236-ray-dlya-duraka.jpg"
    },
    {
        "title": "ДЕМОНЫ ДЕБОРЫ ЛОГАН",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686250243-1006627550-demony-debory-logan.jpg"
    },
    {
        "title": "ЛЕГЕНДЫ МОРТАЛ КОМБАТ: БИТВА МИРОВ",
        "group": "фильмы",
        "genres": "фентези",
        "price": "2021",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686557382-221746095-legendy-mortal-kombat-bitva-mirov.jpg"
    },
    {
        "title": "ПАЛЬМЫ И ЛИНИИ ЭЛЕКТРОПЕРЕДАЧ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685126190-591303187-palmy-i-linii-elektroperedach.jpg"
    },
    {
        "title": "СЕРГИЙ ПРОТИВ НЕЧИСТИ: ШАБАШ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685792973-1450974198-sergiy-protiv-nechisti-shabash.jpg"
    },
    {
        "title": "ДОМ УДОВОЛЬСТВИЙ",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686555435-309328082-dom-udovolstviy.jpg"
    },
    {
        "title": "БОЕВОЙ КОНТИНЕНТ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2018",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686069972-1553625622-boevoy-kontinent.jpg"
    },
    {
        "title": "ОБНАЖЕННОЕ ТАНГО",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "1990",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685790267-1033352696-obnazhennoe-tango.jpg"
    },
    {
        "title": "ИЗГОНЯЮЩИЙ ДЬЯВОЛА III",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "1990",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686557097-1699239424-izgonyayuschiy-dyavola-iii.jpg"
    },
    {
        "title": "ЧТО-ТО",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2018",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686392131-1500810044-chto-to.jpg"
    },
    {
        "title": "СТРАШНАЯ ВОЛЯ БОГОВ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686249821-1302179105-strashnaya-volya-bogov.jpg"
    },
    {
        "title": "БЕЗ ФИЛЬТРОВ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685897101-1153265352-bez-filtrov.jpg"
    },
    {
        "title": "БУНКЕР",
        "group": "фильмы",
        "genres": "военные",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685789956-1744692777-bunker.jpg"
    },
    {
        "title": "МАСКЕРАД",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686556880-1354330238-maskerad.jpg"
    },
    {
        "title": "ЗЕМЛЯ БУДУЩЕГО",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "2015",
        "img": "https://kinozed.com/uploads/posts/2023-06/1687180130-1636768936-zemlya-buduschego.jpg"
    },
    {
        "title": "ЛЕГЕНДА О ГРАНКРЕСТЕ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2018",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684818965-708536240-legenda-o-grankreste.jpg"
    },
    {
        "title": "ДРУГАЯ БОВАРИ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686987193-1497483912-drugaya-bovari.jpg"
    },
    {
        "title": "БОЛЬШАЯ ИГРА",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686243648-189995813-bolshaya-igra.jpg"
    },
    {
        "title": "ПОХИЩЕННЫЙ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2019",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685896985-377323190-pohischennyy.jpg"
    },
    {
        "title": "РОК ДОГ 3: БИТВА ЗА БИТ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685126103-1000354171-rok-dog-3-bitva-za-bit.jpg"
    },
    {
        "title": "СЛЕНДЕР",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2015",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686986863-1357790028-slender.jpg"
    },
    {
        "title": "ПОКЛОННИК",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685896650-345889902-poklonnik.jpg"
    },
    {
        "title": "МАШИНА",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1687365219-645395271-mashina.jpg"
    },
    {
        "title": "ХОЛОДНОЕ ТОРЖЕСТВО",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2015",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685684695-538320278-holodnoe-torzhestvo.jpg"
    },
    {
        "title": "МОДНАЯ ШТУЧКА",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685896939-1292888838-modnaya-shtuchka.jpg"
    },
    {
        "title": "ПЛОХОЙ ГЕНИЙ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684819959-1076518685-plohoy-geniy.jpg"
    },
    {
        "title": "ОПАСНОЕ ПОГРУЖЕНИЕ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2015",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686250809-1224283824-opasnoe-pogruzhenie.jpg"
    },
    {
        "title": "СУПЕРФОРСАЖ!",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685631956-154524924-superforsazh.jpg"
    },
    {
        "title": "ОБЖИГАЮЩЕ ГОРЯЧИЙ",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2023",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686747176-335653843-obzhigayusche-goryachiy.jpg"
    },
    {
        "title": "С 5 ДО 7. ВРЕМЯ ЛЮБОВНИКОВ",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686243743-80543214-s-5-do-7-vremya-lyubovnikov.jpg"
    },
    {
        "title": "S.O.S. ВЫЖИТЬ ИЛИ ПОЖЕРТВОВАТЬ",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2020",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686390509-1505063910-sos-vyzhit-ili-pozhertvovat.jpg"
    },
    {
        "title": "ГРЕМЛИНЫ: ТАЙНЫ МОГВАЯ",
        "group": "фильмы",
        "genres": "детские",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686893381-1377522569-gremliny-tayny-mogvaya.jpg"
    },
    {
        "title": "РОЖДЕСТВЕНСКИЕ ПЛЁНКИ",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685897529-1905936007-rozhdestvenskie-plenki.jpg"
    },
    {
        "title": "НЕВЕСТА ЧАРОДЕЯ",
        "group": "мультфильмы",
        "genres": "детские",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-05/1684649982-515805775-nevesta-charodeya.jpg"
    },
    {
        "title": "БЫТЬ САЛЬВАДОРОМ ДАЛИ",
        "group": "фильмы",
        "genres": "драма",
        "price": "2022",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686390328-895216322-byt-salvadorom-dali.jpg"
    },
    {
        "title": "ПРИВЕТ, ДЖУЛИ!",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2010",
        "img": "https://kinozed.com/uploads/posts/2023-05/1685247618-37650043-privet-dzhuli.jpg"
    },
    {
        "title": "ХОЛОДНОЕ ТАНГО",
        "group": "сериалы",
        "genres": "мелодрама",
        "price": "2017",
        "img": "https://kinozed.com/uploads/posts/2023-06/1686390751-946779813-holodnoe-tango.jpg"
    },
    {
        "title": "САМБА",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2014",
        "img": "https://kinozed.com/uploads/posts/2023-06/1685896231-1882092860-samba.jpg"
    },
    {
        "title": "Инкассаторы",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2012",
        "img": "https://thumbs.dfs.ivi.ru/storage2/contents/7/9/4674d77d469068e10b3070cc1893c3.jpg/234x360/?q=85"
    },
    {
        "title": "Избавинас от лукавого",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2020",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/b/a/9ec97eb3c6d52e1c3806a62b54d929.jpg/234x360/?q=85"
    },
    {
        "title": "Однаждыв Техасе",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2020",
        "img": "https://thumbs.dfs.ivi.ru/storage4/contents/6/1/978db05fa00dbc78860f1e6d67bd85.jpg/234x360/?q=85"
    },
    {
        "title": "Грязныемиллионы",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2021",
        "img": "https://thumbs.dfs.ivi.ru/storage30/contents/d/b/183fa278a739ec483ef4993c966554.jpg/234x360/?q=85"
    },
    {
        "title": "Плейбойпод прикрытием",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2018",
        "img": "https://thumbs.dfs.ivi.ru/storage6/contents/6/f/cfda0ffe7ba4f148b317f5b1cd4319.jpg/234x360/?q=85"
    },
    {
        "title": "Никто",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2021",
        "img": "https://thumbs.dfs.ivi.ru/storage33/contents/e/6/6401b31a0e023605cb2ae4c7284126.jpg/234x360/?q=85"
    },
    {
        "title": "Экстремальнаяработа",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2021",
        "img": "https://thumbs.dfs.ivi.ru/storage38/contents/f/f/60de966e93073139bd038c1d58642f.jpg/234x360/?q=85"
    },
    {
        "title": "Черноеи синее",
        "group": "фильмы",
        "genres": "драма",
        "price": "2019",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/c/c/87d45a6c5ac7ee69f516a8d372a5a6.jpg/234x360/?q=85"
    },
    {
        "title": "Овердрайв",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2017",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/f/f/3cddd01cee8cd412af4ffa2b5d99d4.jpg/234x360/?q=85"
    },
    {
        "title": "Девушка,которая застряла в паутине",
        "group": "фильмы",
        "genres": "мелодрама",
        "price": "2018",
        "img": "https://thumbs.dfs.ivi.ru/storage6/contents/3/f/d87a8c2b3ceda2ab309d69dbdde811.jpg/234x360/?q=85"
    },
    {
        "title": "Вымогательство",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2017",
        "img": "https://thumbs.dfs.ivi.ru/storage31/contents/5/1/6fa767aee226137eb4792be3e7d681.jpg/234x360/?q=85"
    },
    {
        "title": "Обратныйотсчет",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2021",
        "img": "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/5718087c95b3c9e361623c4f752dd2.jpg/234x360/?q=85"
    },
    {
        "title": "Особоопасен",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2008",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/3/5/746e35df6b7b05894754695ddd7c9e.jpg/234x360/?q=85"
    },
    {
        "title": "Суднаяночь 2",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2014",
        "img": "https://thumbs.dfs.ivi.ru/storage3/contents/1/2/36bfcc26d0f0462b6256bc9a94f4b9.jpg/234x360/?q=85"
    },
    {
        "title": "Коддоступа «Кейптаун»",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2012",
        "img": "https://thumbs.dfs.ivi.ru/storage15/contents/6/b/056b287d14789ab954e2ba4b414a24.jpg/234x360/?q=85"
    },
    {
        "title": "К-9:Собачья работа",
        "group": "фильмы",
        "genres": "детские",
        "price": "1989",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/f/a/e04a0951094ce6f063e3fbecb7e513.jpg/234x360/?q=85"
    },
    {
        "title": "Малавита",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "2013",
        "img": "https://thumbs.dfs.ivi.ru/storage2/contents/6/f/aa54f4787b67527a64638a799c0a04.jpg/234x360/?q=85"
    },
    {
        "title": "Британскийпсихопат",
        "group": "фильмы",
        "genres": "ужасы",
        "price": "2019",
        "img": "https://thumbs.dfs.ivi.ru/storage33/contents/3/b/8be43f4d0301afcfb1b0acf2cde7e4.jpg/234x360/?q=85"
    },
    {
        "title": "Пипец2",
        "group": "фильмы",
        "genres": "комедия",
        "price": "2013",
        "img": "https://thumbs.dfs.ivi.ru/storage5/contents/c/a/b3c4444ac8debbc3f9f4ed121f5bb2.jpg/234x360/?q=85"
    },
    {
        "title": "Контрабанда",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2011",
        "img": "https://thumbs.dfs.ivi.ru/storage8/contents/a/c/f7f2982e092fd3b7c48fa94c0ac1a7.jpg/234x360/?q=85"
    },
    {
        "title": "[4k]Агент Ева",
        "group": "сериалы",
        "genres": "детектив",
        "price": "2020",
        "img": "https://thumbs.dfs.ivi.ru/storage9/contents/4/4/0e152857f2dea3dfa0cf5fe7b89f80.jpg/234x360/?q=85"
    },
    {
        "title": "Совместнаяпоездка",
        "group": "фильмы",
        "genres": "драма",
        "price": "2014",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/7/7/8da790365c8cb98cc5b2a39abeed12.jpg/234x360/?q=85"
    },
    {
        "title": "Обратнаятяга",
        "group": "фильмы",
        "genres": "детектив",
        "price": "1991",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/0/6/e02460ebf1bfa3d25657940751e2a7.jpg/234x360/?q=85"
    },
    {
        "title": "ПолицияМайами: Отдел нравов",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2006",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/d/8/44b287b611b81badde44a60b946598.jpg/234x360/?q=85"
    },
    {
        "title": "Успетьдо полуночи",
        "group": "фильмы",
        "genres": "детектив",
        "price": "2006",
        "img": "https://thumbs.dfs.ivi.ru/storage29/contents/4/2/f8da8977f9cbd4729d528963aa9bfb.jpg/234x360/?q=85"
    },
    {
        "title": "Ангелмести",
        "group": "фильмы",
        "genres": "боевики",
        "price": "2021",
        "img": "https://thumbs.dfs.ivi.ru/storage23/contents/b/8/148f7f0a8afdfd06f8e9722a3f1d65.jpg/234x360/?q=85"
    },
    {
        "title": "Меркурийв опасности",
        "group": "фильмы",
        "genres": "криминал",
        "price": "1998",
        "img": "https://thumbs.dfs.ivi.ru/storage28/contents/c/2/39c10d0e746c963a0f2b02580ebc82.jpg/234x360/?q=85"
    },
    {
        "title": "Внезапнаясмерть",
        "group": "фильмы",
        "genres": "детектив",
        "price": "1995",
        "img": "https://thumbs.dfs.ivi.ru/storage37/contents/7/a/e9549488b9bc4ae4be0621a04b1823.jpg/234x360/?q=85"
    },
    {
        "title": "Улицыв огне",
        "group": "фильмы",
        "genres": "фантастика",
        "price": "1984",
        "img": "https://thumbs.dfs.ivi.ru/storage23/contents/0/7/78b0e0b6468215416070f7af450685.jpg/234x360/?q=85"
    },
    {
        "title": "БратьяБлюз",
        "group": "фильмы",
        "genres": "трилеры",
        "price": "1980",
        "img": "https://thumbs.dfs.ivi.ru/storage8/contents/7/1/e918dc9c365184abde54a7ad29b86a.jpg/234x360/?q=85"
    }
];


export default data
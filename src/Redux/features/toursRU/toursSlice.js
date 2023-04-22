import { createSlice } from "@reduxjs/toolkit";
import bukhara from '../../../resources/bukhara.jpg'
import bukhara2 from '../../../resources/bukhara2.jpg'
import xiva from '../../../resources/khiva2.jpg'
import xiva2 from '../../../resources/xiva2.jpg'
import tash from '../../../resources/tashkent.jpg'
import tash2 from '../../../resources/tashkent.png'
import vino from '../../../resources/vino.png'
import donior from '../../../resources/donior.png'
import bumaga from '../../../resources/bumaga.png'
import teatr from '../../../resources/teatr.png'
import plov from '../../../resources/plov.png'
import labiXauz from '../../../resources/labiXauz.png'
import magoki from '../../../resources/magoki.png'
import kalyan from '../../../resources/kalyan.png'
import kupal from '../../../resources/kupal.png'
import ark from '../../../resources/ark.png'
import boloXauz from '../../../resources/boloXauz.png'
import samanid from '../../../resources/samanid.png'
import ayub from '../../../resources/ayub.png'
import chorMinor from '../../../resources/chorMinor.png'
import moxiXosa from '../../../resources/moxiXosa.png'
import boy from '../../../resources/boy.png'
import xammam from '../../../resources/xammam.png'
import nakshband from '../../../resources/nakshband.png'
import kuynaArk from '../../../resources/kuynaArk.png'
import aminXan from '../../../resources/aminXan.png'
import kalta from '../../../resources/kalta.png'
import pyatnitsa from '../../../resources/pyatnitsa.png'
import paxlavan from '../../../resources/paxlavan.png'
import tashX from '../../../resources/tash.png'
import islamXoja from '../../../resources/islamXoja.png'
import akSaray from '../../../resources/akSaray.png'
import tilavat from '../../../resources/tilavat.png'
import saodat from '../../../resources/saodat.png'
import chorsu from '../../../resources/chorsu.png'
import imamX from '../../../resources/imamX.png'
import mXimam from '../../../resources/mXimam.png'
import barakX from '../../../resources/barakX.png'
import kukeldash from '../../../resources/kukeldash.png'
import gosmuzeyP from '../../../resources/gosmuzeyP.png'
import amirT from '../../../resources/amirT.png'
import shaxrisabs from '../../../resources/shaxrisabs.png'
import samarkand from '../../../resources/samarkand.jpg'
import gurEmir from '../../../resources/gurEmir.png'
import registan from '../../../resources/registan.png'
import Shaxi from '../../../resources/Shaxi.png'
import siyab from '../../../resources/siyab.png'
import bibi from '../../../resources/bibi.png'
import ulugbek from '../../../resources/ulugbek.png'

const initialState = {
    tours: [
        {
            id: 1,
            title: "Тур по Самарканду",
            body: "Самарканд – один из самых известных исторических городов Узбекистана. Это один из древнейших  городов мира , основанный , по археологическим данным в середине VIII века до н.э. ( Древняя Мараканда )  .  Когда-то здесь проходили караваны Великого Шелкового пути. Более 2 тысячелетий город являлся ключевым пунктом  на Великом шелковом пути между Китаем и Европой .  Именно Самарканд был столицей империи Амира Тимура (Тамерлана). Внук Тимура – Улугбек – сделал город центром научной и культурной жизни средневекового  Востока. Здесь сохранились архитектурные памятники средних веков, многие из которых внесены в Список всемирного наследия ЮНЕСКО. Сегодня Самарканд – это город, который сочетает в себе древние традиции востока и современность. Это третий по численности город Узбекистана, здесь живет больше полумиллиона человек.",
            price: "70$",
            img: "https://www.advantour.com/img/uzbekistan/images/samarkand.jpg",
            img2: samarkand,
            places: [
                {title:"Мавзолей Гур Эмир", img: gurEmir, body: "Гур-Эми́р «Гробница эмира»— мавзолей Тамерлана (Амира Тимура), его наставника Мир Сайид Барака, и некоторых членов семьи Тимура — (Тимуридов) в Самарканде.  Воздвигнутый по инициативе и на средства Тимура в 1403 году, шедевр персидского зодчества  эпохи Тимуридов занимает важное место в истории мировой исламской архитектуры. Главным архитектором мавзолея был выходец из иранского города Исфаган — Махмуд Исфахани."},
                {title:"Площадь Регистан", img: registan, body: "Площадь Регистан  — площадь в центре Самарканда. «Регистаном» называли главные площади в городах Среднего Востока. Самаркандская площадь является самым известным Регистаном благодаря расположенному на ней знаменитому архитектурному ансамблю ,центром которого являются  медресе Улугбека (1417—1420 гг.), медресе Шердор (1619—1636 гг.) и медресе Тилля-Кари (1646—1660 гг.). Ансамбль из трёх медресе является уникальным примером искусства градостроительства и замечательным образцом архитектурного оформления главной площади города. Является одним из ярчайших примеров исламской архитектуры. "},
                {title:"Мечеть Биби - Ханым", img: bibi, body: "Мечеть Биби-Ханым (букв. «старшая принцесса») — архитектурный памятник 1399—1404 годов в  Самарканде, грандиозная соборная  мечеть Тамерлана, богато украшенная изразцами, резным мрамором и росписями. Частично восстановлена из руин в конце XX века. Мечеть была воздвигнута по приказу Тамерлана после его победоносного похода в Индию. Месторасположение будущей мечети выбирал сам Тимур. В строительстве были задействованы мастера из различных стран: Индии, Ирана, Хорезма, Золотой Орды. К сентябрю 1404 года основная часть комплекса была уже построена. Во дворе мечети могли одновременно молиться 10 тысяч человек."},
                {title:"Сиябский базар", img: siyab, body: "Одна из главных достопримечательностей Самарканда — огромный, шумный, ароматный, влекущий Сиабский базар. Целый мир! Заглянешь на минуточку — и пары часов как не бывало. Заглянем !!! Рынок или как говорят в Узбекистане базар — душа города, место, где сильнее всего бьется его сердце, место, где город предстает перед тобой настоящим, таким, каким видят его горожане. Базар в Самарканде — место особенное. Во-первых, он огромный — занимает площадь в несколько гектар. Во-вторых, он находится в самом центре, в шаге от главных достопримечательностей, а потому миновать его вряд ли какому туристу удастся. В-третьих, базар сохраняет, несмотря на всю свою туристическую привлекательность, свою настоящую, восточную, узбекскую душу."},
                {title:"Обсерватория Улугбека", img: ulugbek, body: "Обсерватория Улугбека  — одна из наиболее значительных обсерваторий средневековья, построенная Улугбеком на холме Кухак в окрестностях Самарканда в 1424—1428 годах. Остатки обсерватории были найдены и исследованы археологом В. Л. Вяткиным в 1908 году."},
                {title:"Некрополь Шахи – Зинда", img: Shaxi, body: "Шахи́-Зинда́  «живой царь» — памятник средневековой архитектуры в Самарканде  ансамбль мавзолеев Караханидской и Тимуридской знати. Дошедший до нас комплекс состоит из одиннадцати мавзолеев, последовательно пристраивавшихся друг к другу в течение XIV—XV веков."},
            ],
            extraTitle: "Что можно дополнительно посмотреть в Самарканде",
            extraPlaces: [
                {title:"Мавзолей Святого Даниила или Ходжа Дониер", img: donior, body: "Мавзоле́й Ходжа́ Дониёр  —  мавзолей в Самарканде над могилой одного из святых. По легендарным сведениям XVIII века, в мавзолее захоронен прах ветхозаветного библейского пророка Данияра (Даниила), останки которого были привезены в Самарканд и захоронены среднеазиатским средневековым полководцем и завоевателем Амиром Тимуром (Тамерланом)."},
                {title:"Музей Виноделия при Винзаводе им. Ховренко", img: vino, body: "Самарканд, известный своими историческими достопримечательности, может удивить и своими музеями, среди которых особое место занимает Музей виноделия, которому уже более 150 лет. Здесь проводится дегустация вин . В Самарканде выращивался отличный сорт винограда, который отличался высоким содержанием сахара . Приехавший сюда русский винодел и предприниматель Д.М. Филатов открыл первый в Узбекистане винодельческий завод. За 15 лет работы он вывел завод на мировой уровень – выведенный сорт вина «Биишты» (что переводится как «райский») получил золотую медаль на Международной выставке вин и коньяков в Париже, после чего коллекционеры со всего мира стали приезжать в Самарканд за этим удивительным вином. "},
                {title:"Самаркандская бумага -  Ручное производство на бумажной фабрике 'Мерос'", img: bumaga, body: "Сегодня в кишлаке Конигил под Самаркандом действует бумажная фабрика «Мерос», основателями которой являются известные мастера братья Мухтаровы. Благодаря их усилиям на местной фабрике возрождена древняя традиция изготовления бумаги по старинным самаркандским технологиям. Интересно, что всё производство идёт вручную и каждый гость фабрики может воочию наблюдать за изготовлением бумаги."},
                {title:"Театр исторического костюма «Эл Мероси»", img: teatr, body: "Театр исторического костюма «Эл Мероси» («Народное наследие») функционирует в Самарканде с 2005 года. Сегодня театр «Эл Мероси» предлагает Вашему вниманию костюмы разных исторических эпох, которые языком орнамента, цвета и форм раскрывают нам многие сокровенные тайны и законы красоты народного искусства. По верованиям, костюм не только изолирует человека от внешней среды, но и упрочняет ее с помощью магических действий, часто зашифрованных в рисунках, орнаментах и т.д. В Самаркандском театре исторического костюма 'Эл Мероси' Вы сможете ознакомиться с жизнью, бытом, обычаями и традициями жителей нашего региона с древнейших времен по настоящее время. Здесь представлены костюмы различных исторических периодов"},
                {title:"Мастер класс  приготовления Самаркандского Плова", img: plov, body: "Плов — это визитная карточка Узбекистана! Но готовят его в разных областях нашей страны по-разному. Предлагаем вам приготовить самаркандский плов по нашему видеорецепту. Особенность плова по-самаркандски в том, что при подаче его не перемешивают, а укладывают на блюдо слоями. Что позволяет вам выбирать соотношение риса, моркови и мяса, попадающего в ложку и получать разные вкусовые ощущения."},
            ]
        },
        {
            id: 2,
            title: "Тур по Бухаре",
            body: "Бухара – город-оазис, самый крупный населенный пункт, располагается прямо посреди пустыни. Город, некогда расположенный на Великом Шелковом пути, один из самых древних – его история превышает 2500 лет. Бухара воплотила в себе многовековую историю древних традиций с исламом. Город с невероятной атмосферой мудрости, священности и учения. Попав в этот город, оказываешься словно в другом мире и на другой планете. Невероятные смешения культурных, религиозных, этнических цивилизаций сделали Бухару городом неизгладимых впечатлений.",
            price: "70$",
            img: bukhara,
            img2: bukhara2,
            places: [
                {title:"Ансамбль  Ляби - Хауз", img:labiXauz, body: "Древний город до сих пор хранит многовековые традиции и удивительные обряды. Бухару часто называют опорой ислама, так как здесь сосредоточено огромное количество мечетей, минаретов, мусульманских усыпальниц. Старинные здания до сих пор помнят события, которые происходили на этой земле десятки столетий назад, из-за этого достопримечательности Бухары обладают особенным колоритом. Город-музей, словно магнит, притягивает путешественников со всего света, желающих взглянуть на восточную сказку под открытым небом. Ансамбль Ляби-Хауз – центральная площадь города . На площади Ляби-Хауз всегда многолюдно, сюда приходят гости города, местные жители с детьми – здесь идеальное место для прогулок. Когда-то на месте Ляби-Хауза была оживленная торговая площадь. Сегодня здесь расположен один из самых старых и красивых архитектурных ансамблей, построенных в 16-17 веках."},
                {title:"Мечеть Магоки – Аттори", img:magoki , body: "Мечеть Магоки-Аттори – памятник с интересной историей. Мечеть Магоки-Аттори построена на месте разрушенного языческого храма. Крупный пожар, произошедший в начале 10 века, практически полностью уничтожил постройку, но власти решили восстановить храм и возвести новую мечеть по аналогичному плану. Мастерство архитекторов проявилось в том, что они использовали кирпич не только как строительный, но и как отделочный материал."},
                {title:"Торговые купола Бухары", img: kupal, body: "Бухара славилась не только обилием медресе, но и количеством караван-сараев. Перекрёстки, на которых шёл самый бойкий торг, накрывали куполами для защиты от солнца и дождя — такого сервиса не предлагал больше ни один город на Великом шёлковом пути. Эти средневековые шопинг-моллы стоят по сей день, не меняя своего предназначения. Прогулка по бухарским торговым анфиладам — не столько шопинг, сколько культурное впечатление: можно часами перебирать халаты и тюбетейки, разглаживать шёлковые ковры и сюзане, разглядывать расписные плошки и чеканные блюда, серебряные украшения и лохматые меховые шапки. "},
                {title:"Ансамбль Пои - Калян", img:kalyan, body: "В Бухаре медресе и мечети стоят парами друг напротив друга — этот древний среднеазиатский архитектурный приём зовётся кош. Он создаёт невероятный стереоэффект: оказавшись меж двух богато украшенных арочных фасадов, вы чувствуете себя заблудившимися в калейдоскопе. Пои-Калян («Подножие Великого»), пожалуй, самый красивый бухарский кош. На одной его стороне стоит 500-летняя соборная джума-мечеть с огромным лазоревым куполом — вторая по величине в Средней Азии, она вмещает 12 000 человек. Напротив красуется медресе Мири Араб."},
                {title:"Крепость Арк", img:ark, body: "Сердце Бухары и точка отсчёта всей её долгой истории, крепость Арк стоит на высоком насыпном холме, окружённом кирпичными стенами. Если верить легендам, первый дворец на этом месте построил герой древнего иранского эпоса Сиявуш, чтобы покорить сердце дочери царя Афрасиаба: получив от вредного правителя разрешение взять столько земли, сколько уместится в одной бычьей шкуре, хитрый юноша разрезал шкуру на полоски и связал вместе. Шнура хватило, чтобы оцепить огромный периметр."},
                {title:"Мечеть Боло Хауз", img:boloXauz, body: "Мечеть Боло-Хауз – любимая мечеть местных правителей. В 18 веке в Бухарском ханстве наблюдался общий упадок экономики и культуры. Но, несмотря на это, эмир, правящий в то время, решил возвести мечеть, чтобы молиться в ней вместе со своим народом. Мечеть получилась невероятно красивой и богато украшенной. Роскошный ансамбль с множеством колонн и удивительной росписью стен отражается в водах небольшого пруда – хауза. Высокие потолки декорированы резьбой и изысканными орнаментами. Сюда часто приходили на молитву правители города в разные времена."},
                {title:"Мавзолей Саманидов", img:samanid, body: "Выдающийся памятник средневекового зодчества, построенный на рубеже IX—X веков, долгое время был полностью скрыт под культурным слоем, его обнаружили и восстановили только в начале XX века. Усыпальница древних правителей Бухары из династии Саманидов стоит в парке, разбитом на месте бывшего кладбища. Маленькое кубическое здание поражает сложностью декора и кружевными узорами, созданными из простого жжёного кирпича. Их рисунок меняется в зависимости от высоты солнца над горизонтом."},
                {title:"Мавзолей Чашма - Айюб", img:ayub, body: "Один из важнейших бухарских мазаров — святых для мусульман мест, к которым совершаются паломничества. Расположенный здесь святой источник, по преданию, появился от удара посоха пророка Иова (Айюба). Мавзолей начали строить в XII веке, позднее неоднократно перестраивали и возводили на территории комплекса дополнительные строения. В Чашма - Айюб много захоронений богословов и праведников, древнейшим из них около тысячи лет."},
            ],
            extraTitle: "Что можно дополнительно посмотреть в Бухаре",
            extraPlaces: [
                {title:"Медресе Чор Минор", img: chorMinor, body: "Самое необычное медресе Бухары расположено за пределами шахристана — в рабате, рабочем предместье древнего города. Его неофициальное, но более популярное название Чор Минор означает «четыре минарета»: здание с четырьмя башенками под голубыми куполами напоминает одновременно игрушечную крепость и перевёрнутую табуретку. Впечатления добавляет и то, что на каждой башне свои узоры и украшения"},
                {title:"Дворец Ситораи Мохи Хоса", img: moxiXosa, body: "Название загородного дворца последнего бухарского эмира означает «подобный звёздам и луне». Он находится на окраине Бухары, в 4 км от центра города: при строительстве выбирали такое место, в котором роза ветров обеспечивает прохладу в самые жаркие дни. В архитектуре здания, построенного в конце XIX века, забавно смешиваются европейские и среднеазиатские традиции, а внутреннее убранство впечатляет роскошью: венецианские зеркала, голландские печи, хрустальные люстры, золотое шитьё и тонкие узоры на стенах, у входа несут караул мраморные львы. "},
                {title:"Дом музей богатого купца", img: boy, body: "Богатый купеческий дом расположен в исторической части старого города, в квартале Гозиён. Дом принадлежал отцу Файзуллы Ходжаева Убайдулло Ходжа Касым Ходжаеву - купцу-миллионеру, торговавшему каракулем в России, Германии и других странах. Дом богатого купца являет собой прекрасный образец бухарской жилой архитектуры XIX века. Площадь дома составляет 3 га и состоит из трех частей: хозяйственной, мужской и женской половин. Айваны, гостиные, жилые помещения украшены великолепной резьбой и росписью по дереву и алебастру."},
                {title:"Исторические хаммамы Бухары", img: xammam, body: "Старинная бухарская баня 'Бозори Корд Хаммам' была построена в XVI в. и до сих пор не утратила своих уникальных традиций и исцеляющих свойств. Посещение хаммама станет самым памятным событием вашего путешествия в Бухару. Вы окунетесь в мир древних традиций, почувствуете 'настоящую Бухару'. Этот мир унесет вас далеко от сувенирных магазинов, достопримечательностей, гидов, экскурсий и покажет реальную жизнь бухарцев, настоящую повседневную жизнь, которая неразрывно связана с богатой историей этого города."},
                {title:"Комлекс Бахауддина Накшбанди", img: nakshband, body: "Культово-мемориальный комплекс Бахауддина Накшбанди (1318-1389 гг.) находится в 12 км к северу-востоку от Бухары в селении Касри Орифон, где он родился и был похоронен. Ходжа Бахауддин Накшбанди - историческое лицо, известный суфий, современник Тимура, живший в XIV веке. Могила его приобрела популярность спустя много лет после его смерти, здесь же были похоронены его мать, ближайшие родственники, а также ученики и последователи. Культ Бахауддина Накшбанди пользовался в народе большой славой, и со стороны правителей ансамблю уделялось большое внимание."},
            ]
        },
        {
            id: 3,
            title: "Тур по Хиве",
            body: "Хива — один из старейших городов Узбекистана. Его история насчитывает более двух с половиной тысяч лет.  Город Хива, один из немногих городов, которому удалось сохранить свою самобытность, как было изначально задумано архитекторами. Хива – это «живой» памятник, город-музей. Древнейший город по одной из легенд был основан сыном библейского Ноя Симом. Начал он с того, что выкопал посреди пустыни колодец. Мимо шли караваны и купцы, пробовали изумительно вкусную воду и приговаривали «хейвак», то есть «как хорошо». Так и появился этот невероятный город. Величественные сооружения, резные двери и колонны, невероятной красоты здания – это книги с зашифрованными посланиями из глубины веков. В своей истории Хива переживала расцветы и падения. Хива являлся одним из крупнейших городов древнего Хорезмского государства. В городе сотни достопримечательностей, большинство из них — религиозные и архитектурные постройки с богатой историей. В 1990 году его включили в список Всемирного наследия ЮНЕСКО.",
            price: "70$",
            img: xiva,
            img2: xiva2,
            places: [
                {title:"Ичан – кала", img: "https://canaan.travel/wp-content/uploads/2020/12/ichan-kala.jpg", body: "Ичан-Кала — «город в городе», средневековый оборонительный круг внутри Хивы. Именно этот комплекс был внесен в список ЮНЕСКО целиком, так как прекрасно сохранился — улицы города практически не тронуты временем. Ичан-Кала окружают мощные крепостные стены, построенные, как гласит легенда, из той же глины, что и древняя Медина, основанная пророком Мухаммедом. Ичан-Кала — город-памятник, буквально каждое строение в нем представляет историческую и архитектурную ценность."},
                {title:"Цитадель Куня-Арк", img: kuynaArk, body: "Цитадель Куня-Арк — территория, где находится небольшой церемониальный дворик, фундамент под установку юрты и айван (ниша с навесом). Вплоть до свержения в 1920 году Хивинского хана Куня-Арк была официальной резиденцией правителя. Самым интересным местом цитадели для гостей является смотровая площадка, откуда открывается потрясающий вид на Ичан-Кала."},
                {title:"Медресе Мухаммад Амин хана", img: aminXan, body: "Медресе Амин-хана — восточная религиозная школа. Много лет назад здесь проживали ученики, изучающие философию ислама. Сегодня же это уникальное сочетание истории и современности. Комплекс превратился в отель и теперь в кельях, где когда-то жили студенты — проживают туристы. Расположено бывшее медресе сосем рядом со зданием минарета Кальта, что только добавляет ему популярности."},
                {title:"Минарет Кальта", img:kalta , body: "Минарет Кальта — один из самых узнаваемых символов города Хива. Он был и останется недостроенным — запланированная высота составляла 80 метров, но построено было всего 29 метров. Минарет покрыт необычной глазурованной мозаикой синего и небесно-голубого цветов. Сложные изразцы придают зданию необычный вид, поэтом «толстый минарет», как называют его местные — излюбленное место для фотосессий."},
                {title:"Пятничная мечеть", img:pyatnitsa , body: "Пятничная мечеть — одно из самых знаменитых зданий города. Расположена она на центральной улице, соединяющей Западные и Восточные ворота. Впервые в письменных источниках упоминается в источниках, датированных 10 веком нашей эры. Здание украшено многочисленными резными колоннами, которые были созданы в разные годы существования мечети. Резные узоры на колонных нередко содержат скрытые символы, повествующую историю создания Пятничной мечети."},
                {title:"Мавзолей Пахлавана Махмуда", img:paxlavan , body: "Пахлаван Махмуд, в честь которого возведен мавзолей, жил в 8 веке, был выходцем из семьи простого ремесленника. Славился своим поэтическим даром, огромной силой и способностью исцелять больных людей. Мавзолей Махмуда — здание, увенчанное большим куполом. Стены покрыты надписями арабской вязью — это стихотворения, созданные Пахлаваном. Внутри здания расположен склеп. Изнутри стены покрыты сложными растительными узорами."},
                {title:"Таш-Хаули (Каменный дворец)", img:tashX , body: "Каменный дворец построен в 30х-40х годах 19 столетия Аллакули-ханом. Внутри постройки расположен небольшой дворик, в который выходят многочисленные балконы, террасы и айваны. Плиточные стены покрыты богатой ажурной росписью, массивные деревянные колонны украшены сложной резьбой по дереву. Потолки также покрыты росписью. Посещая Таш-Хаули, можно зайти и в комнаты, где когда-то жил хан. По нынешним меркам помещения достаточно скромные — это всего две комнаты, в которых можно увидеть аутентичный трон и другие предметы мебели и обихода, принадлежавшие правителю."},
                {title:"Минарет Ислам-Ходжа", img:islamXoja , body: "Одним из самых известныхдостопримечательностей Хивы, является минарет Ислам Ходжа. Этот шедевр архитектуры был построен в начале XX века. Его высота достигает 57 метров, и превышает минарет Калян в Бухаре. Ислам Ходжа комплекс был назван в честь визиря Хивы Ислам Ходжы. Он служил под руководством Мухаммада Рахимхана и его сына Эсфандияр хана. И по его инициативе был построен этот архитектурный ансамбль."},
            ]
        },
        {
            id: 4,
            title: "Тур по Шахрисабзу",
            body: "Шахрисабз — один из самых красивых и колоритных городов Узбекистана. Его название переводе с персидского означает «Зеленый город», и это определение к Шахрисабзу вполне применимо, так как город действительно утопает в изумрудной зелени садов и виноградников. Совсем небольшой по размерам, Шахрисабз лежит всего в 80 км к югу от Самарканда, у подножия Гиссарского и Зеравшанского хребтов, у слияния рек Аксу и Танхоз. Над уровнем моря город возвышается на 622 метра. Шахрисабз также знаменит и великолепными памятниками истории и архитектуры, многие из которых возведены еще при династии Тимуридов в XV веке. Великий правитель Тимур превратил Шахризабз в самую настоящую вторую столицу государства, построив в городе поистине роскошные здания и сооружения, такие, как Ак-Сарай, дворец с белоснежными стенами, Дорут-Тилляват и иные впечатляющие ансамбли архитектуры, которые впечатляют гостей по сей день.",
            price: "70$",
            img: shaxrisabs,
            img2: shaxrisabs,
            places: [
                {title:"Дворец Ак-Сарай", img: akSaray, body: "Тимур мечтал построить гораздо бо́льший дворец на своей родине в Кеше (Шахрисабзе). Его строительство началось в 1380 году, то есть сразу после укрепления власти самодержца в Мавераннахре. Строительные работы продолжались 24 года, почти до самой смерти завоевателя. Дворец включал в себя несколько дворов, вокруг которых находились жилые помещения и комнаты общественного назначения. Помещения были украшены золотой лазурью, фасады построек покрыты цветными изразцами, дворы вымощены белыми плитами."},
                {title:"Ансамбль  Дорут – Тилават", img: tilavat, body: "В сердце Шахрисабза, рядом с некрополем барласской знати XIV-XV веков, находится ансамбль Дорут Тилловат – мемориальный комплекс и памятник архитектуры. Название комплекса переводится как «Дом размышления или медитации», был сформирован в 1370-1371 годы. Сегодня можно увидеть три сооружения этого ансамбля – соборную мечеть и два мавзолея, объединенные одним двором."},
                {title: "Ансамбль Дорус – Саодат", img: saodat, body:"В 1380 году в Шахрисабзе одновременно со строительством дворца Ак-Сарай началось сооружение еще одного монументального ансамбля, известного под названием Дорус-Саодат. До наших дней от ансамбля Дорус-Саодат сохранились мавзолей Джахангира и склеп Темура, в котором он так и не был погребен. Поводом для возведения мемориального комплекса послужило печальное событие – в 1376 году скоропостижно, на двадцать втором году жизни, умер старший сын Темура Джахангир, которого властелин горячо любил и готовил в свои наследники. Жители Самарканда оплакивали неожиданную смерть наследника престола, «справедливого царевича, храброго воина, мелькнувшего на земле, как роза». Сам повелитель впал в глубокую депрессию."},
            ]
        },
        {
            id: 5,
            title: "Тур по Ташкенту",
            body: "Ташкент - столица Узбекистана, мегаполис с населением более 2,5 миллионов человек, расчерченный сеткой прямых и широких улиц и проспектов, украшенный «изумрудными россыпями» парков, скверов, садов, пронизанный хрустальными нитями фонтанов… Этот дивный город – воплощение той самой современной элегантности, которая присуща многим столицам мира, но при этом, будучи городом восточным, Ташкент имеет свой неповторимый колорит. В нем изысканно сочетаются средневековые постройки, будто сошедшие со страниц старинных восточных сказок, изящная европейская архитектура, оставшаяся со времен Туркестанского генерал-губернаторства, стандартные бетонные «короба» советской эпохи и, наконец, сверкающие высотки из стекла и бетона – корпуса современных бизнес-центров и банков – как свидетельство новой эпохи независимого Узбекистана.",
            price: "70$",
            img: tash2,
            img2: tash,
            places: [
                {title:"Чорсу базар", img: chorsu, body: "Базар «Эски Жува»  или «Чорсу» один из крупнейших базаров Узбекистана и Средней Азии, расположенный в старой части Ташкента называемый «Эски шахар», который имел огромное значение для Великого шелкового пути. И даже название рынка переводится с персидского языка как «четыре дороги» или «четыре потока», так как в древние времена именно в этом месте соединялись все торговые пути Востока. И в современное время базар Чорсу стоит в центре пересечения четырех главных торговых улиц Ташкента. Чорсу – это огромный центральный купол в окружении расставленных вокруг семи куполов поменьше. В результате, рождается сложное пространство с чередованиями крытых, открытых и полуоткрытых помещений."},
                {title:"Ансамбль Хазрати Имам", img: imamX, body: "Ансамбль Хазрати Имам — религиозный комплекс в Ташкенте. Ансамбль был возведен около могилы имама города Ташкента, ученого, знатока Корана и хадисов, одного из первых проповедников ислама в Ташкенте, поэта и ремесленника Хазрати Имама (полное его имя — Абу Бакр ибн Исмаил аль-Каффал аш-Шоший). Согласно историческим источникам он был также мастером по изготовлению замков и ключей за что получил прозвище «Каффаль», что означает «Замочник», владел 72 языками и перевел Ветхий Завет (Тору) на арабский язык."},
                {title: "Мечеть Хазрати Имам", img: mXimam, body:"Соборная мечеть Хазрати Имам была возведена в 2007 году по инициативе и проекту Президента Республики Узбекистан Ислама Каримова. Мечеть имеет два купола и два минарета высотой 53 метра. Внутренняя часть куполов украшена сусальным золотом. При входе в мечеть имеется айван c с двадцатью резными колоннами из сандалового дерева. Оконные проёмы сконструированы таким образом, что позволяют солнечным лучам проникать внутрь мечети от восхода до заката."},
                {title: "Медресе Барак-хана", img: barakX, body:"Медресе Барак-хана построено в 1531—1532 гг. по указанию внука Улугбека — Науруз Ахмед-хана, имевшему прозвище «Барак-хан», что означает «удачливый». Внутри медресе есть два мавзолея — Мавзолей Суюнчходжа-хана, который был воздвигнут над захоронением Суюнчходжа-хан — первого правителя Ташкента из узбекской династии Шейбанидов. Название второго мавзолея — Безымянный. Он был построен для Барак-хана, однако Барак-хан был впоследствии погребен в Самарканде. Двери келий Медресе Баракхана украшены слоновой костью и цветными металлами."},
                {title: "Мавзолей Хазрати Имама", img: mXimam, body:"Мавзолей Хазрати Имама . Возведена в XVI веке в честь Хазрати Имама (Абу Бакра ибн Исмаил аль-Каффал аш-Шоший). Мавзолей или гробница построена из жжёного плиточного кирпича, украшен майоликой, имеет прямоугольную форму с большим голубым куполом сверху. Окна здания украшены ганчевой панджарой."},
                {title: "Медресе Кукельдаш", img: kukeldash, body:"В районе площади Чорсу располагается одно из крупнейших исламских достопримечательностей Ташкента – медресе Кукельдаш. Это медресе уже давно славится символом старой части столицы. В 10 веке здесь были расположены одни из трех городских ворот. Построено медресе в XVI веке в период правления Шейбанидов в Ташкенте.  Руководил строительством главный визирь, по прозвищу «кукальдош», в переводе с тюркского означает  «молочный брат». Он был приближенным Ташкентских правителей Барак-хана и Дервиш-хана.   Отсюда и появилось столь необычное название медресе."},
                {title: "Государственный музей прикладного искусства", img: gosmuzeyP, body:"Основан в 1937 году на базе временной выставки кустарных ремесел. В фондах выставки музея находится свыше 4 тыс. экспонатов, раскрывающих историю декоративного искусства Узбекистана: резьба по дереву, керамика, чеканка, искусство ювелиров,  вышивальщиц, образцы массового производства местной промышленности. До начала XXI века музей располагался в бывшем дворце русского дипломата А. А. Половцева. Здание было приобретено для А. А. Половцева его секретарём М. С. Андреевым по его поручению у ташкентского купца Иванова. Этот дом был известен в Ташкенте как «дом Половцева»."},
                {title: "Сквер Амира Тимура", img: amirT, body:"История сквера в центре Ташкента, который сегодня носит имя полководца и основателя огромной средневековой империи - Амира Тимура, началась еще в XIX веке, когда Ташкент стал центром Туркестанского Военного Округа в составе Российской Империи. Он был заложен по приказу генерала М. Черняева в 1882 году. Сквер представлял собой небольшой парк в центре города, вокруг которого располагались здания женской и мужской гимназии, учительская семинария и государственный банк."},
            ]
        },
        {
            id: 6,
            title: "Тур по городам великого шелкового пути",
            body: "В 1994 году в Самарканде была принята декларация 'О возрождении Шелкового пути'. Главный маршрут пересекается 32 большими и малыми городами Центральной Азии. Ташкент, Самарканд, Бухара, Хива и города Ферганской долины являются драгоценными камнями Великого шелкового пути.",
            price: "Цена тура по запросу",
            img: tash,
            img2: "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/da19747169d87b7b39d0863c38c9bf88/",
            places: [
                {title:"1 день Ташкент", img: tash2, body: "Встреча в аэропорту Ташкента, размещение в гостинице."},
                {title:"2 день  Ташкент", img: kukeldash, body: "В 10.00 – экскурсия по «Старому городу»: площадь Хаст-Имам, медресе Барак-Хана, мавзолей Кафал-аль-Шаши Мазар, медресе Кукельдаш, старейший базар Ташкента – Чорсу. Экскурсия по современной части Ташкента:  музей прикладного искусства ,    площадь Независимости, сквер Амира Темура. Ночь в гостинице."},
                {title: "3 день Ташкент - Самарканд . Самарканд (экскурсия).", img: registan, body:"Завтрак в гостинице. Переезд в Самарканд. В 11:00 экскурсия по Самарканду: самая известная площадь Центральной Азии - Регистан (медресе Улугбека, медресе Шер-Дор, медресе Тилля-Кари), мавзолей Гур-Эмир - усыпальница Великого Тамерлана. После обеда продолжение экскурсии по Самарканду: мечеть Биби-Ханум, архитектурный ансамбль Шахи-Зинда, обсерватория Улугбека. Ночь в гостинице."},
                {title: "4 день  Самарканд - Гиждуван - Бухара. Бухара (экскурсия).", img: labiXauz, body:"Переезд и размещение в гостинице. После обеда экскурсия по Бухаре: посещение ансамбля Ляби-Хауз, медресе Кукельдаш, медресе Надира Диванбеги, торговых куполов,мавзолей Саманидов, усыпальница Чашма Аюб, комплекс Боло-Хауз, старинная крепость Арк, комплекс Пой-Калян. Ужин в национальном доме - мастер класс по приготовлению плова. Ночь в гостинице."},
                {title: "5 день Бухара", img: ark, body:"Завтрак в гостинице. Продолжение экскурсии по древней Бухаре .Свободное время"},
                {title: "6 день  Бухара - Хива (автобус 440 км).", img: "http://sreda.uz/wp-content/uploads/posts/2015-11/1447435571_img_5433.jpg", body:"Завтрак в гостинице. В 08:00 переезд через известную пустыню Кызылкум вдоль реки Амударьи.  Пикник в дороге. Прибытие в Хиву. Свободное время, посещение сувенирных лавок и мастерских. Ночь в гостинице."},
                {title: "7 день  Хива (экскурсия).", img: "https://canaan.travel/wp-content/uploads/2020/12/ichan-kala.jpg", body:"Завтрак в гостинице. В 09:00 - экскурсия по Хиве (Ичан-Кале - внутреннему городу): комплекс Пахлавана Махмуда, крепость Куня-Арк, медресе и минарет Ислам Ходжи, дворец Таш Хаули, медресе Алакули-хана, мечеть Джума, минарет и медресе Мухаммад Амин-хана.  Ночь в гостинице."},
                {title: "8 день Хива - Ургенч", img: "https://gulaytour.ru/wp-content/uploads/2017/07/1494142.jpg", body:"Переезд в международный аэропорт Ургенча. Вылет из Ургенча. Завершение программы тура."},
            ]
        }
    ]
}

export const toursSlice = createSlice({
    name: 'toursRU',
    initialState,
    reducers: {}
})

export default toursSlice.reducer
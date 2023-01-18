import { createSlice } from "@reduxjs/toolkit";
import bukhara from '../../../resources/bukhara.jpg'
import bukhara2 from '../../../resources/bukhara2.jpeg'
import xiva from '../../../resources/khiva2.jpg'
import xiva2 from '../../../resources/night-khiva.jpeg'
import tash from '../../../resources/night-tash.jpeg'
import tash2 from '../../../resources/tashkent-amir-timur-square.webp'

const initialState = {
    tours: [
        {
            id: 1,
            title: "Tour in Samarkand",
            body: "Samarkand - one of the oldest cities in the world, founded, according to archaeological data, in the middle of the 8th century B.C. (Ancient Marakand), the capital of the state of Timurids, became the first capital of Soviet Uzbekistan in 1924. For more than two millennia, the city has been a key point on the Silk Road between China and Europe, as well as a major center.",
            price: "100$",
            img: "http://www.opts.tours/images/slider/slide3.jpg",
            img2: "http://www.opts.tours/images/slider/slide3.jpg",
            places: [
                {title:"Gur Emir mausoleum", img: "https://cdn.tripster.ru/thumbs2/84e2ae84-594f-11ed-a372-deb9864510e4.800x600.jpeg", body: "Visiting the city we will start with the mausoleum Gur - Emir, the tomb of Tamerlan and members of the Timurid dynasty."},
                {title:"Registan square", img: "https://cdn.tripster.ru/thumbs2/9dd3cdca-594e-11ed-865b-deb9864510e4.800x600.jpeg", body: "We will continue our excursion on one of the most famous Registan Square, which has been the shopping and scientific center of Samarkand for centuries."},
                {title:"Bibi - Khanum mosque", img: "https://cdn.tripster.ru/thumbs2/dc1839fe-594e-11ed-bfbb-ee13dcd0c4e0.800x600.jpeg", body: "Next, we will walk along the famous shopping street and find ourselves in the largest cathedral mosque in Samarkand. This Bibi mosque is Hanym."},
                {title:"Siyab bazaar", img: "https://www.advantour.com/img/uzbekistan/samarkand/siab-bazaar1.jpg", body: "Next to the Bibi-Hanym Mosque is one of the oldest bazaars of Samarkand - Siyab bazaar."},
                {title:"Ulugbek's Observotory", img: "https://www.orexca.com/img/uzbekistan/samarkand/ulugbek-observatory.jpg", body: "We will visit the Ulugbek Observatory, which was built unique and progressive in the Middle Ages. During the visit to the Ulugbek Observatory we will see with you the preserved part of the sextant."},
                {title:"Shakhi-Zinda necropolis", img: "https://www.orexca.com/img/uzbekistan/samarkand/shahi_zinda2.jpg", body: "And let’s finish our program with a walk of the mysterious necropolis of Shahi - Zinda. This is a ensemble of tombs of Samarkand nobility."},
            ]
        },
        {
            id: 2,
            title: "Тур по Бухаре",
            body: "Бухара — единственный город Средней Азии, чья пред- и раннеисламская история была подробно описана в известном труде Наршахи, историка, жившего в X веке.На протяжении столетий город не менял своего местоположения[значимость факта?] и был центром владений бухархудатов, столицей государств Саманидов, Шейбанидов, Аштарханидов, Мангытов и Бухарской народной советской республики.На протяжении многих веков Бухара играла роль крупного административного, торгово-ремесленного и культурного центра Центральной Азии. Через город проходила одна из трасс Великого шёлкового пути, соединявшего страны Средиземноморья с Дальним Востоком.",
            price: "100$",
            img: bukhara,
            img2: bukhara2,
            places: [
                {title:"Медресе Мири Араб", img:"https://www.turkestantravel.com/wp-content/uploads/2020/12/Medrese-Miri-Arab.jpg", body: "Это медресе одно из наиболее почитаемых исламских учебных заведений на постсоветском пространстве. Построено в первой половине шестнадцатого века и действует на протяжении пяти столетий. Здание впечатляет великолепной архитектурой, замечательным интерьером."},
                {title:"Чор-Минор", img:"https://canaan.travel/wp-content/uploads/2021/01/medrese-chor-minor.jpg" , body: "Медресе являлось высшим учебным заведением, имеющее богатую библиотеку, и одним из суфийских центров Бухары. Функционировало в плоть до установления Советской власти. Позже, его худжры использовались под жильё."},
                {title:"Цитадель Арк", img: "https://cs10.pikabu.ru/post_img/big/2020/08/24/3/1598239149144021064.png", body: "Археологами было доказано, что Бухара возникла южнее нижнего течения Зеравшана, который распадается здесь на несколько протоков, на низкой болотистой равнине, над которой и ныне возвышается массивный искусственный холм городской цитадели — Арк. "},
                {title:"Минарет Калян", img:"https://adrastravel.com/wp-content/uploads/2021/05/bukhara.webp", body: "Минарет Калян входит в состав ансамбля Пои - Калян, что в переводе означает Пьедестал Великого. Минарет находится между мечетью Калян и медресе Мири-Араб. Все 3 эти потрясающие объекта и составляют ансамбль, который называют религиозным сердцем священной Бухары."},
            ]
        },
        {
            id: 3,
            title: "Тур по Хиве",
            body: "Хива была одним из городов древнего Хорезма, который представлял собой крупное государство, расположенное на западе Центральной Азии, южнее Аральского моря. Согласно археологическим данным, Хива была основана более 2500 лет назад. В древности город был известен под сакским названием Хейвак. Сведения письменных источников об основании Хивы чаще всего легендарны. В них появление города связывают с именем библейского Соломона, а по другим версиям Ноя. Легенды о Хиве попадали в очерки русских и европейских путешественников (А. Вамбери, Е. Желябужский).",
            price: "100$",
            img: xiva,
            img2: xiva2,
            places: [
                {title:"ИЧАН-КАЛА", img: "https://canaan.travel/wp-content/uploads/2020/12/ichan-kala.jpg", body: "Древний комплекс Ичан-Кала («внутренний оборонительный круг») - практически нетронутый временем целый средневековый город внутри Хивы, который первым в Средней Азии был целиком внесен в список Всемирного наследия ЮНЕСКО. Ичан-Кала представляет собой густо застроенный древний город, который за историю своего существования не раз разрушался и восстанавливался вновь."},
                {title:"КРЕПОСТЬ КУНЯ-АРК", img: "https://ru.travelornament.com/thumb/2/SyEGCNeSfDS2TDZx5AaYHg/580r450/d/%D0%9A%D1%83%D0%BD%D1%8F_%D0%B0%D1%80%D0%BA.png", body: "Куня-Арк (в переводе «старая крепость») - это цитадель правителя, которая была в каждом крупном городе. Здесь, говоря современным языком, существовала хорошо развитая инфраструктура."},
                {title:"КОМПЛЕКС ПАХЛАВАНА МАХМУДА", img: "https://www.gid.travel/uploads/countries/uzbekistan/hiva/attraction/119/content/3654600519_0500fb94d4_b.jpg", body: "Пахлаван Махмуд был выдающимся сыном Хорезма. По профессии он был скорняком (мастером по выделке мехов), что приносило ему средства на существование, а по призванию - выдающимся борцом, талантливым поэтом и мудрейшим философом."},
                {title:"КОМПЛЕКС ИСЛАМ-ХОДЖИ", img: "https://adrastravel.com/wp-content/uploads/2021/11/islam-khodja.jpg", body: "Комплекс был возведен только в 1908-1910 годах и по своим формам восходит к сооружениям XI-XII веков. Своей славе он обязан нетипичностью и своеобразной игре на контрастах - по задумке архитектора самый высокий минарет Хивы соседствует с самым маленьким медресе. Таким образом, минарет выглядит еще величественнее и виден издалека."},
            ]
        },
        {
            id: 4,
            title: "Тур по Ташкенту",
            body: "В письменных источниках упоминается с IV—V веков нашей эры под названиями Джадж, Чачкент, Шашкент, Бинкент. Только в XI веке в трудах среднеазиатских ученых Аль-Бируни и Махмуда Кашгари впервые встречается форма Ташкент. Аль-Кашгари первым объяснил Ташкент как «каменный город» (тюркское таш — «камень», кент — «город»), а Бируни, поддерживая это толкование, отмечал, что Шашкент — это искажённая форма тюркского Ташкент; очевидно, что и Чачкент является другой формой искажения того же названия.",
            price: "100$",
            img: tash2,
            img2: tash,
            places: [
                {title:"Ансамбль Хазрати Имам", img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Barakhan_Madrasah_Tashkent.jpg", body: "Этот религиозный комплекс находится в старом городе, построен возле места захоронения первого ташкентского имама, который являлся ученым, поэтом, знатоком Корана, одним из первых проповедников ислама в Ташкенте. Звали его Хазрати Имам, а его настоящее полное имя Абу Бакр ибн Исмаил аль-Каффал аш-Шоший."},
                {title:"Мечеть Минор", img: "https://www.advantour.com/img/uzbekistan/tashkent/minor-mosque1.jpg", body: "Мечеть Минор была открыта 1 октября 2014 года и сразу стала популярной достопримечательностью Ташкента. Мечеть Минор отличается от старинных мечетей из кирпича своей отделкой из белого мрамора, поэтому имеет и другое название Ак-мечеть (Белая мечеть). В ясный день она вся сверкает, а ее голубой купол будто растворяется в небе."},
                {title: "Дворец Романовых", img: "https://www.gazeta.uz/media/img/2020/02/2Hyu9o15808911315639_l.jpg", body:"Дворец Романовых в Ташкенте построен в 1891 году по проекту архитекторов В. С. Гейнцельмана и А. Л. Бенуа для великого князя Николая Константиновича, сосланного на окраину империи — в Туркестанский край. В левом крыле дворца располагались апартаменты великого князя, а в правом крыле — апартаменты его жены."},
            ]
        },
        {
            id: 5,
            title: "Тур по Самарканду",
            body: "Самарканд — один из древнейших городов мира, основанный, по археологическим данным, в середине VIII века до н. э. (Древняя Мараканда), столица государства Тимуридов, стал первой столицей советского Узбекистана в 1924 году. Более 2 тысячелетий город являлся ключевым пунктом на Великом шёлковом пути между Китаем и Европой, а также одним из главных центров науки средневекового Востока.",
            price: "100$",
            img: "http://www.opts.tours/images/slider/slide3.jpg",
            img2: "http://www.opts.tours/images/slider/slide3.jpg",
            places: [
                {title:"Минарет Калян", img:"http://www.opts.tours/images/slider/slide3.jpg", body: "Минарет Калян входит в состав ансамбля Пои - Калян, что в переводе означает Пьедестал Великого. Минарет находится между мечетью Калян и медресе Мири-Араб. Все 3 эти потрясающие объекта и составляют ансамбль, который называют религиозным сердцем священной Бухары."}
            ]
        },
        {
            id: 6,
            title: "Тур по Самарканду",
            body: "Самарканд — один из древнейших городов мира, основанный, по археологическим данным, в середине VIII века до н. э. (Древняя Мараканда), столица государства Тимуридов, стал первой столицей советского Узбекистана в 1924 году. Более 2 тысячелетий город являлся ключевым пунктом на Великом шёлковом пути между Китаем и Европой, а также одним из главных центров науки средневекового Востока.",
            price: "100$",
            img: "http://www.opts.tours/images/slider/slide3.jpg",
            img2: "http://www.opts.tours/images/slider/slide3.jpg",
            places: [
                {title:"Минарет Калян", img:"http://www.opts.tours/images/slider/slide3.jpg", body: "Минарет Калян входит в состав ансамбля Пои - Калян, что в переводе означает Пьедестал Великого. Минарет находится между мечетью Калян и медресе Мири-Араб. Все 3 эти потрясающие объекта и составляют ансамбль, который называют религиозным сердцем священной Бухары."}
            ]
        }
    ]
}

export const toursSlice = createSlice({
    name: 'toursEN',
    initialState,
    reducers: {}
})

export default toursSlice.reducer
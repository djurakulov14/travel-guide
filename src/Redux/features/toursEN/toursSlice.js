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
            title: "Tour in Samarkand",
            body: "Samarkand - one of the oldest cities in the world, founded, according to archaeological data, in the middle of the 8th century B.C. (Ancient Marakand), the capital of the state of Timurids, became the first capital of Soviet Uzbekistan in 1924. For more than two millennia, the city has been a key point on the Silk Road between China and Europe, as well as a major center.",
            price: "70$",
            img: "https://www.advantour.com/img/uzbekistan/images/samarkand.jpg",
            img2: samarkand,
            places: [
                {title:"Gur Emir mausoleum", img: gurEmir, body: "Gur-Emir «Tomb of the Emir» - Mausoleum of Tamerlan (Amir Timur), his mentor Mir Sayyid Barak, and some members of the Timur family - (Timurids) in Samarkand.  Built on Timur’s initiative and with funds in 1403, the masterpiece of Persian architecture of the Timurid era occupies an important place in the history of world Islamic architecture. The main architect of the mausoleum was Mahmud Isfahani, an Iranian town."},
                {title:"Registan square", img: registan, body: "Registan Square is a square in the center of Samarkand. «Registan» called the main squares in the cities of the Middle East. Samarkand Square is the most famous Registan thanks to the famous architectural ensemble located on it, the center of which are the madrassa Ulugbek (1417-1420), madrasah Sherdor (1619-1636) and madrassah Tilla-Kari (1646-1660). The ensemble of three madrasahs is a unique example of urban art and a remarkable example of architectural design of the main square of the city. It is one of the brightest examples of Islamic architecture."},
                {title:"Bibi - Khanum mosque", img: bibi, body: "Bibi-Hanym Mosque (letters. «Senior Princess») - architectural monument 1399-1404 in Samarkand, grandiose Tamerlan Cathedral, richly decorated with tiles, carved marble and paintings. Partially rebuilt from the ruins in the late 20th century. The mosque was built by order of Tamerlane after his victorious campaign to India. The location of the future mosque was chosen by Timur himself. In construction were involved masters from different countries: India, Iran, Khorezm, Golden Horde. By September 1404, the main part of the complex had already been built. In the courtyard of the mosque, 10,000 people could pray simultaneously."},
                {title:"Siyab bazaar", img: siyab, body: "One of the main attractions of Samarkand - huge, noisy, aromatic, attracts the Siaba Bazaar. The whole world! Stop by for a moment - and a couple of hours as it was not. Look!! The market or, as they say in Uzbekistan, the bazaar is the soul of the city, the place where its heart beats the most, the place where the city appears before you real, as its citizens see it. The bazaar in Samarkand is a special place. First, it is huge - covers an area of several hectares. Secondly, it is located in the center, one step from the main attractions, and therefore miss it is unlikely to pass any tourist. Third, the bazaar retains, despite all its tourist attraction, its real, eastern, Uzbek soul."},
                {title:"Ulugbek's Observotory", img: ulugbek, body: "The Ulugbek Observatory is one of the most significant observatories of the Middle Ages built by Ulugbek on Kuhak hill in the vicinity of Samarkand from 1424 to 1428. The remains of the observatory were discovered and investigated by archaeologist V. L. Vyatkin in 1908."},
                {title:"Shakhi-Zinda necropolis", img: Shaxi, body: "Shahi -Zinda   «living king» - a monument of medieval architecture in Samarkand ensemble of mausoleums of Karakhanid and Timurid nobility. The surviving complex consists of eleven mausoleums, successively attached to each other during the 14th-15th centuries."},
            ],
            extraTitle: "What can be further seen in Samarkand",
            extraPlaces: [
                {title:"Mausoleum of Saint Daniel or Hodja Donier", img: donior, body: "Mausoleum of Khoja Doniyor in Samarkand above the grave of one of the saints. According to legendary information of the XVIII century, the mausoleum buried the ashes of the Old Testament biblical prophet Daniyar (Daniel), whose remains were brought to Samarkand and buried by the Middle Asian medieval commander and conqueror Amir Timur (Tamerlan)."},
                {title:"Museum of Winery. Hovrenko", img: vino, body: "Samarkand, famous for its historical attractions, can surprise and its museums, among which a special place is occupied by the Museum of Winemaking, which has been more than 150 years. Here wine tasting is held. In Samarkand, an excellent grape variety, which was distinguished by a high sugar content, was grown. Arriving here Russian winemaker and businessman D.M. Filatov opened the first winery in Uzbekistan. For 15 years of work he brought the plant to the world level - the developed wine variety «Biishta» (which translates as «paradise») received a gold medal at the International Wine and Cognac Exhibition in Paris, after which collectors from all over the world began to come to Samarkand for this amazing wine. "},
                {title:"Samarkand paper -  Manual production at the paper mill 'Meros'", img: bumaga, body: "Today in Konigil Kishlak near Samarkand there is a paper factory «Meros», the founders of which are famous masters of Mukhtarov brothers. Thanks to their efforts, the ancient tradition of making paper using old Samarkand technologies was revived in the local factory.  It is interesting that all production is done manually and every guest of the factory can personally observe the production of paper."},
                {title:"Theatre of historical costume «El Merosi»", img: teatr, body: "Theatre of historical costume «El Merosi» («Folk Heritage») has been functioning in Samarkand since 2005. Today the theater «El Merosi» offers to your attention costumes of different historical eras, which in the language of ornamentation, colors and forms reveal to us many secret and beauty laws of folk art. According to the beliefs, the costume not only isolates the person from the external environment, but also strengthens it with magical actions, often encrypted in drawings, ornaments, etc. In the Samarkand Theatre of the historical costume 'El Merosi' you can get acquainted with life, the way of life, customs and traditions of the inhabitants of our region from ancient times to the present. Here are the costumes of different historical periods"},
                {title:"Master class of preparation of Samarkand Plov", img: plov, body: "Plov is the calling card of Uzbekistan! But they prepare it in different areas of our country in different ways. We suggest you prepare Samarkand pilaf according to our video recipe. The peculiarity of plov in Samarkand is that when serving it is not mixed, but laid on the dish layers. This allows you to choose the ratio of rice, carrots and meat falling into the spoon and get a different taste."},
            ]
        },
        {
            id: 2,
            title: "Tour in Bukhara",
            body: "Bukhara - oasis city, the largest settlement, is located right in the middle of the desert. The city, once located on the Great Silk Road, is one of the oldest - its history exceeds 2500 years. Bukhara embodies the centuries-old history of ancient traditions with Islam. The city with an incredible atmosphere of wisdom, sanctity and teachings. Once you’re in this city, it’s like you’re on another world and another planet. The incredible mixing of cultural, religious, and ethnic civilizations made Bukhara a city of indelible impressions.",
            price: "60$",
            img: bukhara,
            img2: bukhara2,
            places: [
                {title:"Liabi - Hauz Ensemble", img:labiXauz, body: "The ancient city still preserves centuries-old traditions and amazing rites. Bukhara is often called the mainstay of Islam, as there are a huge number of mosques, minarets, Muslim tombs. Ancient buildings still remember the events that took place on this land decades ago, because of this attractions of Bukhara have a special color. The museum city is like a magnet, attracting travelers from all over the world who want to see the eastern fairy tale in the open air. Lyabi House Ensemble - the central square of the city. Lyabi House Square is always crowded, with visitors coming from the city, locals with children - an ideal place for walks. Once upon a time, the Laby House was a busy shopping area. Today it is one of the oldest and most beautiful architectural ensembles built in the 16th and 17th centuries."},
                {title:"Magoki Attori Mosque", img:magoki , body: "The Magoki-Attori Mosque is a monument with an interesting history. The Magoki-Attori Mosque is built on the site of the destroyed pagan temple. A major fire in the early 10th century almost completely destroyed the building, but the authorities decided to rebuild the temple and build a new mosque according to a similar plan. The mastery of the architects was demonstrated by the fact that they used brick not only as a building material, but also as a finishing material."},
                {title:"Bukhara shopping domes", img: kupal, body: "Bukhara was famous not only for the abundance of madrasahs, but also for the number of caravanserais. The crossroads, which were the most vigorous trades, were covered with domes for protection from the sun and rain - such a service offered no other city on the Silk Road. These medieval shopping malls stand to this day, without changing their purpose. Walking through Bukhara’s shopping enfilades - not so much shopping as cultural experience: you can spend hours going through bathrobes and skullcaps, smoothing silk carpets and susans, looking at painted caps and beaten dishes, silver ornaments and shaggy fur caps. "},
                {title:"Poi Kalyan Ensemble", img:kalyan, body: "In Bukhara, madrassahs and mosques stand in pairs opposite each other - this ancient Central Asian architectural device is called kosh. It creates an incredible stereo effect: being between two richly decorated arched facades, you feel lost in the kaleidoscope. Poi-Kalyan («Foot of the Great»), perhaps the most beautiful Bukhara kosh. On one side stands a 500-year-old Juma Mosque with a huge lazor dome - the second largest in Central Asia, it holds 12,000 people. The madrasah Miri Arab is showing itself."},
                {title:"Ark Citadel", img:ark, body: "The heart of Bukhara and the starting point of its long history, the fortress of Ark stands on a high mound surrounded by brick walls. According to the legends, the first palace on this site was built by the hero of the ancient Iranian epic Siyavush to win the heart of the daughter of King Afrasiab: having received permission from the harmful ruler to take as much land as fit into one bull’s hide, The clever young man cut the skin into strips and tied it together. Enough cord to secure a huge perimeter."},
                {title:"Bolo - Hauz Mosque", img:boloXauz, body: "Bolo-Hauz Mosque is a favorite mosque of local rulers. In the 18th century, the Bukhara Khanate experienced a general decline of economy and culture. But despite this, the Emir who ruled at the time decided to build a mosque to pray in with his people. The mosque turned out to be incredibly beautiful and richly decorated. A luxurious ensemble with many columns and amazing wall paintings is reflected in the waters of a small pond - house. The high ceilings are decorated with carvings and exquisite ornaments. Here the rulers of the city often came to pray at different times."},
                {title:"Samanid Mausoleum", img:samanid, body: "The outstanding monument of medieval architecture, built at the turn of the IX-X centuries, was for a long time completely hidden under the cultural layer, it was discovered and restored only at the beginning of the XX century. The tomb of the ancient rulers of Bukhara from the Samanid dynasty stands in the park, broken down on the site of the former cemetery. The small cubic building impresses with the complexity of the decoration and lacy patterns created from a simple burnt brick. Their pattern varies depending on the height of the sun above the horizon."},
                {title:"Mausoleum Chashma - Ayyub", img:ayub, body: "One of the most important places of pilgrimage in Bukhara - holy places for Muslims. Located here a holy source, according to legend, appeared from a blow of the staff of the prophet Job (Ayyuba). The mausoleum began to be built in the XII century, later repeatedly rebuilt and erected on the territory of the complex additional buildings. In Chashma - Ayyub many tombs of theologians and righteous, the oldest of them about a thousand years."},
            ],
            extraTitle: "What can be further seen in Bukhara",
            extraPlaces: [
                {title:"Madrasah Chor Minor", img: chorMinor, body: "The most unusual madrasah of Bukhara is located outside shahristan - in rabat, working suburb of the ancient city. Its unofficial but more popular name Chor Minor means «four minarets»: a building with four turrets under blue domes resembles both a toy fortress and an inverted stool. Impressions add that each tower has its own patterns and decorations"},
                {title:"Sitorai Mohi Xosa Palace", img: moxiXosa, body: "The name of the country palace of the last Bukhara emir means «similar to stars and moon». It is located on the outskirts of Bukhara, 4 km from the city center: during construction, a place was chosen in which a rose of winds provides cool on the hottest days. The architecture of the building, built at the end of the XIX century, intertwines European and Central Asian traditions, and interior decoration impresses with luxury: Venetian mirrors, Dutch furnaces, crystal chandeliers, gold embroidery and fine patterns on the walls, There are lions of marble guarding the entrance. "},
                {title:"House museum of the rich merchant", img: boy, body: "The rich merchant house is located in the historic part of the old town, in the Goziyong quarter. The house belonged to the father of Fayzulla Khodjaev Ubaydullo Khodja Khojaev - a merchant millionaire who traded in karakul in Russia, Germany and other countries. The house of a rich merchant is a beautiful example of Bukhara residential architecture of the XIX century. House size is 3 hectares and consists of three parts: economic, male and female half. Aivans, living rooms, living rooms are decorated with magnificent carving and painting on wood and alabaster."},
                {title:"Historical hammams of Bukhara", img: xammam, body: "The old Bukhara Bath 'Bozori Kord Hammam' was built in the XVI century. and still has not lost its unique traditions and healing properties. Visiting the hammam will be the most memorable event of your trip to Bukhara. You will plunge into the world of ancient traditions, feel 'real Bukhara'. This world will take you far from souvenir shops, sights, guides, excursions and show the real life of Bukharians, real daily life, which is inextricably linked to the rich history of this city."},
                {title:"Bahauddin Naxbandi Komlex", img: nakshband, body: "The cult-memorial complex of Bahauddin Naqshbandi (1318-1389) is located 12 km north-east of Bukhara in the village of Kasri Orifon, where he was born and buried. Khoja Bahauddin Naqshbandi is a famous Sufi, contemporary of Timur, who lived in the 14th century. His tomb became popular many years after his death, and his mother, close relatives, and disciples and followers were buried there. The cult of Bahauddin Naqshbandi enjoyed great fame among the people, and the rulers of the ensemble paid great attention."},
            ]
        },
        {
            id: 3,
            title: "Tour in Xiva",
            body: "Khiva is one of the oldest cities in Uzbekistan. Its history spans more than two and a half thousand years.  Khiva city, one of the few cities that managed to maintain its identity, as originally conceived by architects. Khiva is a «living» monument, a city-museum. The oldest city according to one of the legends was founded by the son of the biblical Noah Sim. He started by digging a well in the middle of the desert. Caravans and merchants passed by, tasted amazing tasty water and sentenced «hayvak», that is «as well». And this incredible city appeared. Majestic buildings, carved doors and columns, the incredible beauty of the building are books with coded messages from the depths of time. In its history Khiva experienced blossoms and falls. Khiva was one of the largest cities of the ancient Khorezm state. The city has hundreds of attractions, most of them religious and architectural buildings with rich history. In 1990 it was included in the UNESCO World Heritage List.",
            price: "60$",
            img: xiva,
            img2: xiva2,
            places: [
                {title:"Ichan - Kala", img: "https://canaan.travel/wp-content/uploads/2020/12/ichan-kala.jpg", body: "Ichan-Kala - «city in the city», medieval defensive circle inside Khiva. This complex was included in the UNESCO list as a whole, as it is perfectly preserved - the streets of the city are almost untouched by time. Ichan-Kala is surrounded by powerful fortress walls, built, as legend has it, from the same clay as the ancient Medina, based by the prophet Muhammad. Ichan-Kala - a city-monument, literally every structure in it represents historical and architectural value."},
                {title:"Citadel of Kunya Ark", img: kuynaArk, body: "The Citadel of Kunya Ark is an area where there is a small ceremonial courtyard, the foundation for the installation of the yurt and aivan (a niche with a canopy). Until 1920, Khiva Khan Kunya Ark was the official residence of the ruler. The most interesting place for visitors to the citadel is the observation deck, which offers a stunning view of Ichan-Kala."},
                {title:"Madrasah Muhammad Amin Khan", img: aminXan, body: "Amin Khan Madrassah is an Eastern religious school. Many years ago, students studying the philosophy of Islam lived here. Today it is a unique combination of history and modernity. The complex turned into a hotel and now in cells, where once lived students - tourists. The former madrassah is located next to the Kalta minaret building, which only adds to his popularity."},
                {title:"Calta minaret", img:kalta , body: "Kalta Minaret is one of the most recognizable symbols of the city of Khiva. It was and will remain unfinished - the planned height was 80 meters, but only 29 meters were built. The minaret is covered with an unusual glazed mosaic of blue and sky-blue flowers. Complex tiles give the building an unusual look, the poet «thick minaret», as the locals call it - a favorite place for photo shoots."},
                {title:"Friday mosque", img:pyatnitsa , body: "The Friday Mosque is one of the most famous buildings in the city. It is located on the central street connecting the West and East Gates. It is mentioned for the first time in written sources dating back to the 10th century AD. The building is decorated with numerous carved columns that were created in different years of the mosque’s existence. Carved patterns on columns often contain hidden symbols telling the story of the Friday Mosque."},
                {title:"Mausoleum of Pahlavan Mahmud", img:paxlavan , body: "Pakhlavan Mahmud, after whom the mausoleum was built, lived in the 8th century, came from a family of a simple artisan. He was famous for his poetic gift, great strength and ability to heal sick people. Mausoleum of Mahmud - a building crowned with a large dome. The walls are covered with inscriptions of Arabic knitting - a poem created by Pakhlavan. Inside the building is a crypt. The interior of the wall is covered with complex plant patterns."},
                {title:"Tash-Howli (Stone Palace)", img:tashX , body: "Stone palace was built in the 30s-40s of the 19th century by Allakuli Khan. Inside the building there is a small patio, which overlooks numerous balconies, terraces and quinces. Tiled walls are covered with rich openwork, massive wooden columns are decorated with complex wood carving. The ceilings are also covered with murals. Visiting Tash Howley, you can also enter the rooms where the Khan once lived. By today’s standards, the rooms are quite modest - these are just two rooms in which you can see the authentic throne and other furniture and household items belonging to the ruler."},
                {title:"Islam Khoja minaret", img:islamXoja , body: "One of the most famous sights of Khiva, is the minaret of Islam Khoja. This masterpiece of architecture was built in the early 20th century. Its height reaches 57 meters, and exceeds the Kalyan minaret in Bukhara. Islam Khoja complex was named after the vizier Khiva Islam Khoja. He served under Muhammad Rahimkhan and his son Esfandiyar Khan. And on his initiative this architectural ensemble was built."},
            ]
        },
        {
            id: 4,
            title: "Tour in Shahrisabz",
            body: "Shahrisabz is one of the most beautiful and colorful cities in Uzbekistan. Its name translated from Persian means «Green City», and this definition for Shakhrisabz is quite applicable, as the city really drowns in the emerald greenery of gardens and vineyards. Shahrisabz lies only 80 km south of Samarkand, at the foot of the Gissar and Zeravshansky ranges, at the confluence of the Aksu and Tankhoz rivers. The city is 622 meters above sea level. Shahrisabz is also famous for magnificent monuments of history and architecture, many of which were erected under the Timurid dynasty in the 15th century. Great ruler Timur has turned Shahrizabz into the most real second capital of the state, having built in the city truly luxurious buildings and constructions, such as Ak-Saray, a palace with snow-white walls, Dorut-Tillawat and other impressive architectural ensembles, that impress the guests to this day.",
            price: "60$",
            img: shaxrisabs,
            img2: shaxrisabs,
            places: [
                {title:"Ak Saray Palace", img: akSaray, body: "Timur dreamed of building a much larger palace in his homeland in Kesha (Shakhrisabz). Its construction began in 1380, immediately after the consolidation of the autocrat’s power in Maverannahr. The construction work lasted 24 years, almost until the death of the conqueror. The palace included several courtyards around which residences and public rooms were located. The rooms were decorated with gold azure, the facades of the buildings were covered with colored tiles, the yards were paved with white plates."},
                {title:"Dorut - Tilavat Ensemble", img: tilavat, body: "In the heart of Shahrisabz, next to the necropolis of the 14th-15th centuries Barcal nobility, is the ensemble Dorut Tillovat - a memorial complex and architectural monument. The name of the complex is translated as «House of reflection or meditation», was formed in 1370-1371. Today you can see three buildings of this ensemble - a cathedral mosque and two mausoleums, united by one yard."},
                {title: "Dorus - Saodat Ensemble", img: saodat, body:"In 1380, at Shahrisabz, in parallel with the construction of the Ak-Saray Palace, construction of another monumental ensemble, known as Dorus-Saodat, began. To this day, the mausoleum of Jahangir and the crypt of Temur, in which he was never buried, have survived from the ensemble of Dorus-Saodat. The reason for the erection of the memorial complex was a sad event - in 1376 suddenly, in the twenty-second year of life, died the eldest son of Temur Jahangir, whom the lord fervently loved and prepared for his heirs. Residents of Samarkand mourned the unexpected death of the heir to the throne, «just prince, brave warrior, flashed on the ground like a rose». The lord himself fell into a deep depression."},
            ]
        },
        {
            id: 5,
            title: "Tour in Tashkent",
            body: "Tashkent - the capital of Uzbekistan, a metropolis with a population of more than 2.5 million people, strung a grid of straight and wide streets and avenues, decorated with «emerald placers» parks, squares, gardens, riddled with crystal threads of fountains... This wonderful city is the embodiment of the most modern elegance, which is inherent in many capitals of the world, but at the same time, being a city of the east, Tashkent has its own unique flavor. It exquisitely combines medieval buildings, as if descended from the pages of ancient Eastern fairy tales, graceful European architecture, the remnant of the Turkestan General Governorship, standard concrete «boxes» of the Soviet era and, finally, Sparkling glass and concrete high-rises - the buildings of modern business centers and banks - as evidence of a new era of independent Uzbekistan.",
            price: "60$",
            img: tash2,
            img2: tash,
            places: [
                {title:"Chorsu Bazaar", img: chorsu, body: "Bazaar «Eski Zhuva , or «Chorsu» is one of the largest bazaars of Uzbekistan and Central Asia, located in the old part of Tashkent called «Eski Shahar», which was of great importance for the Great Silk Road. And even the name of the market is translated from the Persian language as «four roads» or «four streams», as in ancient times it was in this place that all the trade routes of the East were connected. And in modern times, the Chorsu bazaar stands in the center of the intersection of four main shopping streets of Tashkent. Chorsu is a huge central dome surrounded by seven smaller domes. As a result, a complex space is created with alternations of indoor, open and semi-open spaces."},
                {title:"Hazrati Imam Ensemble", img: imamX, body: "The Khazrati Imam Ensemble is a religious complex in Tashkent. The ensemble was erected near the tomb of the imam of the city of Tashkent, scholar, Koranic scholar and Hadith scholar, one of the first preachers of Islam in Tashkent, poet and artisan Hazrati Imam (his full name - Abu Bakr ibn Ismail al-Kaffal-Shoshy). According to historical sources, he was also a master at making locks and keys for which he received the nickname «Kaffal», meaning «Zamochnik», spoke 72 languages and translated the Old Testament (Toru) into Arabic."},
                {title: "Hazrati Imam Mosque", img: mXimam, body:"The Hazrati Imam Mosque was built in 2007 on the initiative and project of the President of the Republic of Uzbekistan Islam Karimov. The mosque has two domes and two 53 meters high minarets. The inner part of the domes is decorated with gold leaf. At the entrance to the mosque there is an aivan c with twenty carved sandalwood columns. Window openings are designed to allow sunlight to enter the mosque from sunrise to sunset."},
                {title: "Barak-Khan Madrasah", img: barakX, body:"Barak Khan’s madrasah was built in 1531-1532 on the instructions of Ulugbek’s grandson - Nauruz Ahmed Khan, who had the nickname «Barak Khan», which means «lucky». Inside the madrasah there are two mausoleums - the Mausoleum of Suyunchhoja Khan, which was erected over the burial of Suyunchhoja Khan - the first ruler of Tashkent from the Uzbek Sheibanid dynasty. The name of the second mausoleum is Nameless. It was built for Barak Khan, but Barak Khan was subsequently buried in Samarkand. The doors of the Barakhan Madrassah cells are decorated with ivory and colored metals."},
                {title: "Mausoleum of Hazrati Imam", img: mXimam, body:"Mausoleum of Hazrati Imam. Erected in the 16th century in honor of Hazrati Imam (Abu Bakr ibn Ismail al-Kaffal al al-Shoshi). The mausoleum or tomb is built of burnt tile brick, decorated with mayolic, has a rectangular shape with a large blue dome on top. Windows of the building are decorated with ganch Panjara."},
                {title: "Kukeldash Madrasah", img: kukeldash, body:"In the area of Chorsu Square is one of the largest Islamic attractions of Tashkent - Kukeldash Madrassa. This madrasah has long been famous for the symbol of the old part of the capital. In the 10th century, one of the three city gates were located here. It was built in the 16th century during the reign of the Sheibanids in Tashkent.   Supervised the construction of the chief vizier, nicknamed «kukaldosh», in translation from Turkic means «baby brother». He was an acquaintance of the Tashkent rulers of Barak Khan and Dervish Khan.   This is where the unusual name of the madrassa came from."},
                {title: "National Museum of Applied Arts", img: gosmuzeyP, body:"It was founded in 1937 on the basis of a temporary exhibition of handicrafts. The Museum’s collections contain more than 4,000 exhibits that reveal the history of decorative art in Uzbekistan: wood carving, ceramics, coinage, jewellery,  embroiderers, samples of mass production of local industry. Until the beginning of the 21st century, the museum was located in the former palace of the Russian diplomat A. A. Polovtsev. The building was purchased for A. A. Polovtsev by his secretary M. S. Andreev on his behalf from the Tashkent merchant Ivanov. This house was known in Tashkent as the «house of Polovtsev»."},
                {title: "Amir Temur Square", img: amirT, body:"The history of the square in the center of Tashkent, which today bears the name of the commander and founder of a huge medieval empire - Amir Timur, began in the XIX century, when Tashkent became the center of the Turkestan Military District within the Russian Empire. It was laid by order of General M. Chernyaev in 1882. The square was a small park in the center of the city, surrounded by buildings of the gymnasium for women and men, a teacher’s seminary and a state bank."},
            ]
        },
        {
            id: 6,
            title: "Tour the cities of the great silk road",
            body: "In 1994, Samarkand adopted a declaration 'On the revival of the Silk Road'. The main route crosses 32 large and small cities of Central Asia. Tashkent, Samarkand, Bukhara, Khiva and the cities of the Fergana valley are precious stones of the Silk Road.",
            price: "Tour price on request",
            img: tash,
            img2: "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/da19747169d87b7b39d0863c38c9bf88/",
            places: [
                {title:"Day 1 Tashkent", img: tash2, body: "Встреча в аэропорту Ташкента, размещение в гостинице."},
                {title:"Day 2 Tashkent", img: kukeldash, body: "At 10.00 - excursion to «Old City»: Khast-Imam Square, Barak-Khan Madrassah, Kafal-al-Shashi Mazar Mausoleum, Kukeldash Madrassah, Tashkent’s oldest bazaar - Chorsu. Excursion to the modern part of Tashkent:  Museum of Applied Arts ,  Independence Square, Amir Temur Square. Night in hotel."},
                {title: "Day 3 Tashkent - Samarkand . Samarkand (excursion).", img: registan, body:"Breakfast in the hotel. Transfer to Samarkand. At 11:00, a tour of Samarkand: the most famous area of Central Asia - Registan (madrassah Ulugbek, madrassah Sher-Dor, madrassah Till-Kari), mausoleum Gur-Emir - tomb of Grand Tamerlan. In the afternoon, the continuation of the tour of Samarkand: Bibi-Khanum Mosque, architectural ensemble of Shahi-Zinda, Ulugbek Observatory. Night in the hotel."},
                {title: "Day 4 Samarkand - Gijduvan - Bukhara. Bukhara (excursion).", img: labiXauz, body:"Transfer and accommodation in a hotel. After lunch, a tour of Bukhara: visit to the Lyabi-Hauz Ensemble, Kukeldash Madrassa, Nadir Divanbegi Madrassa, shopping domes, Samanid Mausoleum, Chashma Ayub Tomb, Bolo-Haus Complex, Ancient Ark Fortress, Poy-Kalyan Complex. Dinner at the national house - master class on cooking pilaf. Night in the hotel."},
                {title: "Day 5 Bukhara ", img: ark, body:"Breakfast in the hotel. Continuation of the tour of ancient Bukhara. Free time"},
                {title: "Day 6 Bukhar - Khiva (bus 440 km).", img: "http://sreda.uz/wp-content/uploads/posts/2015-11/1447435571_img_5433.jpg", body:"Breakfast in the hotel. At 08:00 transfer through the famous desert Kyzylkum along the Amu Darya River.  Picnic on the way. Arrival in Khiva. Free time, visiting souvenir shops and workshops. Overnight in the hotel."},
                {title: "Day 7 Khiva (excursion).", img: "https://canaan.travel/wp-content/uploads/2020/12/ichan-kala.jpg", body:"Hotel Breakfast. At 09:00 - tour of Khiva (Ichan-Kale - inner city): Pakhlavan Mahmud complex, fortress of Kunya-Arkh, madrassah and minaret of Islam Khoja, Tash Khauli palace, madrassah of Alakuli Khan, Mosque of Juma, minaret and madrassah of Muhammad Amin.  Night in the Hotel."},
                {title: "Day 8 Khiva - Urgench", img: "https://gulaytour.ru/wp-content/uploads/2017/07/1494142.jpg", body:"Transfer to Urgench International Airport. Departure from Urgench. Completion of the tour program."},
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
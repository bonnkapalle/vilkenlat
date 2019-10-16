var latnamn = ['rullan går',
'Uti Vikingstad',
'Balladen om Theobald Thor',
'Gonorre',
'Jag har aldrig',
'I ett fönster',
'Ovan där',
'Pärleporten',
'Saltkråkan',
'En flicka ung och fager',
'Gamle Niklas'
]

function newSong(){
 
  var randomNumber = Math.floor(Math.random()* (latnamn.length));
  console.log(latnamn[randomNumber])
    switch (latnamn[randomNumber]) {
        case 'rullan går':
                document.getElementById('latnamn').innerHTML = "Rullan går";
                document.getElementById('lattext').innerHTML = "Rullan går på Bomans vind, rullan går, rullan går. Kjolar upp och kukar in, rullan går, rullan går. Rullan går över stenar och stubbar, kuken står på gamla gubbar, rullan går, rullan går, Kom får du se vad knullspö står!<br><br> \
                Det kom ett skepp från Nordanland, rullan går, rullan går. Det lastade skit i varenda hamn, rullan går, rullan går. å seglen de voro av måntadukar, å masterna höga som rallarekukar, rullan går, rullan går. Kom får du se vad knullspö står!<br><br>\
                Israels barn hade kukar små, rullan går, rullan går. Krullade gjorde dom ändå, rullan går, rullan går. Dom runkade kuken på Gyllene kalven och krullade luder i Tempelvalven, rullan går, rullan går. Kom får du se vad kullspöt står!<br><br>\
                Jungfru Maria var helig och kåt, rullan går, rullan går. Krullade gjorde hon så fort hon kom åt, rullan går, rullan går. Hon sprang med den ene, hon sprang med den andre, skyllde sen på helige ande, rullan går, rullan går. Kom får du se vad kullspö står!<br><br>\
                Jonas han hamna i valfiskens buk, rullan går, rullan går. Han skala' potatis å runkade kuk, rullan går, rullan går. Bäst som han satt där och runka å titta, trilla han ut genom valfiskens fitta, rullan går, rullan går. Kom får du se vad knullspö står!<br><br>\
                Adam var ett riktigt fä, ett riktigt fä, ett riktigt fä. Han knulla Eva mot ett träd, mot ett träd, mot ett träd. Först i fittan sen i röven, torka sig på fikonlöven, rullan går, rullan går. Kom får du se vad knullspö står!<br><br>\
                Har ni sett Lovisa Rask, Lovisa Rask, Lovisa Rask. Hon har fittan full av mask, full av mask, full av mask. Sist hon tvätta fittan ren, hitta hon en tegelsten, rullan går, rullan går. Kom får du se vad knullspö står!<br><br>\
                Har ni sett Lovisas bror, lovisas bror, lovisas bror. Han har öppnat horkontor, horkontor, horkontor. Dit är inte svårt att hitta, HELA STÄLLET STINKER FITTA";
                break;

        case 'Uti Vikingstad':
                document.getElementById('latnamn').innerHTML = "Uti Vikingstad";
                document.getElementById('lattext').innerHTML = "Kom skall jag ränna dit den, tasken och hela skiten.<br> Arslet det går i vågor och ballama slår i berg.<br>\
                För långt uti fittetrakten står fiatlöss och stampar takten, ollonet blänker som koppar i juletid<br><br>\
                Ref: För uti Vikingstad finns, de allra fagraste kvinns. Med tjocka feta lår och fittan full med hår Uti Vikingstad går.<br><br>\
                Kom ä ta mig då, kom åta mig då, kom å ta mig då, kom å ta mig då. Kom å ta mig då, kom å ta mig då, kom å ta mig då Uti Vikingstad går!";
               break;
         case 'Balladen om Theobald Thor':
                document.getElementById('latnamn').innerHTML = "Balladen om Theobald Thor";
                document.getElementById('lattext').innerHTML = "Det var en man vid namn Theobald Thor han var en skicklig tamburmajor. Succ. han gjorde var alltid stor, för han snurra och svängde sin kuk <br>\
                <br>Ref: Det var en stor kuk, en lång kraftig och tung. Från dess topp till dess rot var det tre, fyra fot och en medelstor ryggsäck till pung.<br> \
                <br>En dag gick Theobald ut en stund att gå en tur i en lummig lund. H. mötte söt liten dam med en hund, som fick se honom svänga sin kuk.<br> \
                Ref:<br>\
                Och Theobald prova ett trick han lärt, han släppte sin kuk med en kraftig snärt i huvet på hunden som avled tvärt mens han snurra och svängde sin kuk.<br> \
                Ref:<br>\
                Men damen hon blev helt bestört hon svor och skrek nå't oerhört. Så det var ingen lyckad flirt att snurra och svänga sin kuk.<br>\
                Till följd av damens arga gnäll han anhölls redan samma kväll och sattes i en ensamcell att svänga och snurra sin kuk.<br> \
                Ref:<br>\
                När målet kom i rätten opp sa åklagar'n: -Det får bli stopp! Man får ej svänga med sin snopp och snurra och svänga sin kuk.<br>\
                Ref:<br>\
                Men domarn han var tolerant, han sa: -Själv gör jag likadant, jag tycker det är intressant att snurra och svänga min kuk.<br>\
                Ref:<br> \
                Så Theobald han släpptes fri och liksom honom tycka vi, att kärringar skall skita i, att man snurrar och svänger sin kuk.<br>\
                Ref:";
                break;   
        case 'Gonorre':
                        document.getElementById('latnamn').innerHTML = "Gonorre’";
                        document.getElementById('lattext').innerHTML = "Gonorre' gonorre' här är vår runkarklubb, dra ollon, dra ollon, i smör.<br>\
                        Jag smörjer in mitt ollon med en klick av margarin. Då blänker det så vackert å jag tycker den är fin.<br>\
                        Gonorre' gonorre' här är vår runkarklubb, dra ollon, dra ollon, i smör.";

                break;
         case 'Jag har aldrig':
                        document.getElementById('latnamn').innerHTML = "Jag har aldrig";
                        document.getElementById('lattext').innerHTML = "Jag har aldrig vart på snusen, Aldrig rökat en cigarr, haleluja Mina dygder äro tusen Inga syndiga laster jag har <br>\
                        Jag har aldrig sett nå't naket Inte ens ett litet nyfött barn Mina blickar går mot taket Därmed undgår jag frestarens garn Haleluja, haleluja...<br>\
                        Bacchus spelar på gitarren Satan spelar på sitt handklaver Alla djävlar dansar tango Säg vad kan man väl önska sig mer? <br>\
                        Jo, att alla bäckar vore brännvin Riddarfjärden full av bayerskt öl Konjak i varenda rännsten Och punsch i varenda vattenpöl Och mera öl, och mera öl...";

                break;
         case 'I ett fönster':
                        document.getElementById('latnamn').innerHTML = "I ett fönster";
                        document.getElementById('lattext').innerHTML = "I ett fönster satt en flicka, onanerade så glatt hon hade uppfört en vibrerade massagestav i sin tratt. <br>\
                        Nedanför där stod en gosse, dolmen pekade rakt ut. Han drog förhuden tills det ur urinröret kom ett sprut (Med stor salut)<br>\
                        Ref: :/Säg inte nej, säg pulla, pulla, pulla mig! Så ska jag knulla dig, jag är så kåt! :/";

                break;   
        case 'Pärleporten':
                        document.getElementById('latnamn').innerHTML = "Pärleporten";
                        document.getElementById('lattext').innerHTML = "Som en härlig gudomskälla, rik och mäktig, djup och stor<br>\
                        är den kärlek, nåd och sanning som i Jesus hjärta bor.<br>\
                        Ref: Han har öppnat pärleporten så att jag kan komma in.<br><br>\
                        Genom blodet har han frälst mig och bevarat mig som sin.<br>\
                        Under över alla under, allt förlat han mig en gång.<br>\
                        Om hans underbara godhet glad jag sjunger nu min sång.<br>\
                        Ref:<br>\
                        När en gång i livets morgon till den gyllene port jag når,<br>\
                        då för Jesus stora kärlek och för mig den öppen står.<br>\
                        Ref:";
        
                        break; 
 
         case 'Ovan där':
                        document.getElementById('latnamn').innerHTML = "Ovan där";
                        document.getElementById('lattext').innerHTML = "Prövningar vi möta få, och vi ofta ej förstå, herrens vägar när han önskar att vi himlen skola nå. Sina barn han leder här, genom sorger och besvär. Vi förstå hans vägar bättre ovan där.<br>\
                        Ref: Ovan där, randas morgonen, och här hemma samlas helgon.<br>\
                        Vi skall då förtälja om vår resa här. För vi förstå hans vägar bättre ovan där.<br>\
                        Här vi känna brist och nöd, sakna ofta hjälp och stöd. Trötta anden hungrar törstar genom ökenfärden här. Men vi tro på herren gud vi litar helt uppå hans bud. Vi förstå hans vägar bättre ovan där.<br>\
                        Ref:<br>\
                        Frestar'n lägger ut försåt, snaror på vårt levnadsstråt. Hjärtat gråter för vart fåfängt ord och tanklös gärning här. Och i prövningarnas ugn är ej lätt att vara lugn men vi förstå hans vägar bättre ovan där.<br>\
                        Ref:";
                        
                        break;
        case 'Saltkråkan':
                        document.getElementById('latnamn').innerHTML = "Saltkråkan";
                        document.getElementById('lattext').innerHTML = "Det är så skönt att stå här ner vid sjön å dra kuk, det är så skönt att stå här ner vid sjön å dra kuk. Melkers stora balle, Melkers stora balle. Båtsman, Båtsman har en jävla jättekuk!<br>\
                        Och lilla Stina vet ej att en kuk smakar bra, ja lilla Stina vet ej att en kuk smakar bra. För hon har inget könshår, ja hon har inget könshår. Men hon, men hon knullar med sin säl var dag!<br>\
                        Och Malin käkar flänsost varje da', tralla-la, och Malin käkar flänsost varje da', tralla-la. ollonet det blänker, ja ollonet det blänker. Pelle njuter när hon tar hans kuk i mun!<br>\
                        Och österman han njuter av en ål i sitt hål, ja österman han njuter av en ål i sitt hål. Han känner hur det krälar, han känner hur det krälar. Skiten sprätter när han drar den ut och in!<br>\
                        Och Båtsman våldtog Skrållan här om dan stackars barn, ja Båtsman våldtog Skrållan här om dan stackars barn. Han har nästan spräckt na', ja han har nästan spräckt na'. Stackars Skrållan spräckt utav en jätte kuk!";
                                        
                        break; 
        case 'En flicka ung och fager':
                        document.getElementById('latnamn').innerHTML = "En flicka ung och fager";
                        document.getElementById('lattext').innerHTML = "En flicka ung och fager, en gosse stor och stark omfamnade varandra uti en lummig park. Men bäst de båda njöto, så kom där en polis, han vaknar ur sin slummer utav en jubelfis.<br>\
                        Han störta' in i snåret, fick tag i gossens ben, drog honom ut ur hålet och för till finkan sen. Där fick han sova av sig sitt sköna kärleksrus, men kanske flickan sitter ännu kvar på Tavasthus.<br>\
                        Men gossen svor att hämnas, han tänkte ut en plan, som skulle drabba alla, båd' hög och låg i stan. Han kokade en soppa på kuttan av ett bi och lade femton tuppkukar och stånkanpulver i.<br>\
                        I stadens alla brunnar han hällde sin mixtur, och snart så märktes verkan på människor och djur. På varje gammal kärring, på varje gammal märr stod kuttan våt och slaskig och alltid uppå spärr.<br>\
                        Det knullades på gator, det knullades i hus, och horor blevo rika och priset steg på ljus. Prostinnan satt i trappan ihop med sin adjunkt, och prosten stod på torget och tog en stilla runk.<br>\
                        På rådhusporten spikades en kutta och en kuk, som stodo mot betalning till alllmänhetens bruk. De unga och de gamla, de ställde sig i kö, de voro fast beslutna att knulla eller dö.";
                                                                        
                        break; 
        case 'Gamle Niklas':
                        document.getElementById('latnamn').innerHTML = "Gamle Niklas";
                        document.getElementById('lattext').innerHTML = "Å farbror Niklas tog fram kondongen den som han använt för sjunde gången. Han sa till Hulda jag har dig kär: -Säg får jag knulla dig med den här<br>\
                        Han knulla luder å religiösa å Katoliker å barnalösa Och bögars kukar han sög ibland, uppå ett pisshål i Mälarstrand<br><br>\
                        Hon va 27 år å hette Britta Hon hade Mullbergets störtsta fitta Hon hade pattar av marsipan Hon var ju hora den stackars fan<br><br>\
                        Å jag drog in 'an i mulebingen å körde in en i fitteringen jag var i himlen en kort minut Och sedan gick det och jag drog ut<br><br>\
                        Men blott en vecka efter kärleksleken det börja värka i själva veken. Först vart den grön sedan gredelin å måste smörjas med vaselin.<br><br>\
                        Så gamle Niklas gick till kliniken å drämde banan i skrivbordsteaken å syster rodna och doktorn sa: Den lille jäveln må kapas av!<br><br>\
                        Så medan doktorn tog fram skalpellen så sade syster som hette Ellen: Det var ju synd på en så fin kuk, Den skulle passa uti min buk.<br><br>\
                        Så gamle Niklas han miste pålen nu får han hålla i själva pålen och vad som skiljer honom från en tjej det är att blygdläppar har han ej!";
                                                                                                                                        
                        break;                         
                                         
        default:
            break;
    }

  

}
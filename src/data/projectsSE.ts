import Project from "../types/Project"

// NOTE: File type is omitted in the paths to images.
// It is added later in the Markdown component.

export const projectsSE: Project[] = [{
	id: 'chare',
	name: 'Chare',
	title: 'Hur kan man göra samåkning lika smidigt som att boka en tåg eller bussbiljett?',
	thumbnail: '../img/chare/Hero',
	colors: ['#1C1893', '#AC6649', '#332FA4'],
	content: `
	![Alttext](../img/chare/Hero "Det blev många olika Hi-Fi-prototyper som dessa.")
	## Uppgiften
	Projekt i kursen "Prototyputveckling för mobila applikationer” (PUMA:an). I teamet var vi 5 studenter som skulle ta fram ett koncept, en design och en MVP för en mobilapplikation. Med andra ord, så skulle vi jobba genom hela designprocessen - från idé till implementation. Från kursens sida fanns inga krav på hur vi skulle arbeta eller vilka tekniker som skulle användas.

	## Idé & Koncept
	Tidigt bestod processen av ett intensivt idéarbete, vilket innebar utforskande av idéer, brainstorming och diskussion inom gruppen. Under denna fas diskuterades allt från prissättningsmodeller och genomförbarhet till grafisk utformning och användarflöden. Inte helt förvånansvärt resulterade idéarbetet i en idé: Chare, en app för att förenkla samåkande. Tanken var att personer som skulle köra bil till en destination, kunde publicera deras resa i appen. Personer som behöver resa till samma eller en närliggande destination kunde då kunna skicka en förfrågan om att få följa med mot en liten slant. Det är något som skulle gynna både föraren, passageraren och miljön.

	## Prototyping
	Efter idéarbetet satte vi igång med rapid prototyping - en metod för att ta fram en stor bredd idéer snabbt. En timer på 10 minuter sattes igång och varje gruppmedlem skulle skissa på hur de tänkte hur appen kunde utformas. Varje medlem fick presentera sina skisser, som sedan diskuteras inom gruppen. Detta upprepades tills vi kände att vi hade samsyn och en bra grund att arbeta vidare från. Fördelen med denna metod är att dåliga idéer och designs snabbt filtreras ut, vilket skapar utrymme för nya idéer och utveckling av dem som blir kvar.
	\n
	En grundläggande struktur för appens navigation skapades tillsammans, och olika områden av appen tilldelades olika gruppmedlemmar. Därefter skapades wireframes (mid-fi:s) av respektive del av appen. Dessa diskuterades, och förbättrades iterativt. Därefter utvecklade vi Hi-Fi-prototyper i Figma, som skulle ligga till grund för implementationen.

	![Alttext](../img/chare/Search "Hi-Fi-prototyper över sök, resultat och filtervy.")
	![Alttext](../img/chare/Profile "Hi-Fi-prototyper över profil och inställningar.")
	![Alttext](../img/chare/Trip Detail "Hi-Fi-prototyper över resedetaljvyn.")
	![Alttext](../img/chare/4-6 "Lo-Fi-prototyper, resultat och detaljvy.")
	![Alttext](../img/chare/1-3 "Lo-Fi-prototyper, sök och skapa resa.")

	## Problem & Lösningar
	Ett problem som diskuterades var vare sig förare verkligen var villiga att ta in en främling i sin bil - och om passagerare skulle vara villiga att sätta sig i en främlings bil. Scenariot "ung tjej som reser sent på kvällen i en främlings bil" visade på att idén aldrig skulle fungera.

	Problemet löstes genom att på olika sätt skapa legitimitet och tillit. Vi utvecklade profil-delen av appen, och la till information som är svårare att fejka, exempelvis hur många resor man har gjort, recensioner från andra användare och när man skapade profilen. Vidare så diskuterades verifiering med BankID eller andra ID-handlingar som ett sätt att styrka säkerheten och tilliten bland plattformens användare.

	## Utveckling
	Under utvecklingsfasen så arbetade vi i sprintar och försökte till så stor mån som möjligt att följa agil utvecklingsmetodik. Vi hade en strikt deadline på när vår MVP skulle vara klar, så i praktiken blev det någon slags blandning mellan vattenfallsmodellen och agila metoder.

	Vi valde att implementera själva appen i Android, av den enkla anledningen att vi ville lära oss mer om Androidutveckling. Backenden bestod av ett REST-API skrivet med .NET MVC. Databasen blev MySQL, tillsammans med Entity Framework för datamodellering och gränssnitt till databasen.

	![Diagram på dataflödet inom appen](../img/chare/df "Tekniker som användes för projektet(vänster) och dataflödesmodellen för hela applikationen (höger).")

	## Resultatet
	Klar med MVP:n blev vi inte, men vi kom en god bit på vägen, något som ändå var otroligt i och med att vi hade nästan noll erfarenhet av Androidutveckling sedan tidigare. Det viktiga var trots allt att vi lärde oss om utveckling av mobila applikationer - vilket vi gjorde.
	`,
	position: 60,
	resources: [{
		type: "figma",
		text: "Designfil",
		href: "https://www.figma.com/design/UMugzTm8x48Fu1xmzCQd6I/Chare?node-id=4-190&t=ZqeKUEdO6aV3eDI9-1"
	},{
		type: "code",
		text: "Källkod",
		href: "https://github.com/Savalige/Chare/"
	}]
}, {
	id: 'labplant',
	name: 'Labbplantan',
	title: 'Smart och uppkopplad bevattning av krukväxter',
	thumbnail: '../img/lab-plant/setup',
	colors: ['#428c29', '#298c4f', '#578c29', '#1bab2e'],
	content: `
	![En krukväxt med sensorer och elektronik fastsatt på sig](../img/lab-plant/setup "Ett elefantöra blev försökskanin för våra experiment.")
	## Bakgrund
	Tillsammans med tre andra studenter, byggde vi ett system för automatisk bevattning och övervakning av krukväxter. Systemet byggdes som del av slutprojektet i kursen “Design och Tjänsteutveckling för IoT”, där vi fick välja vad vi ville göra helt fritt. Enda kravet var att det skulle vara en IoT-lösning.

	## Idéen
	Bakgrunden till idén var att vi gick kursen mitt i covid-19-pandemin. I tristessen med hemstudier, hade jag tagit på mig ett intresse för växter. Jag föreslog därför idén, och resten av gruppen tyckte också att det lät roligt - så vi körde på det.

	## Systemet
	Systemet bestod av en ESP 32-mikrokontroller, som var kopplad till olika sensorer (luftfuktighet, jordfuktighet, ljusstyrka, m.m.). Denna kommunicerade med en brygga (en Raspberry Pi 4), över MQTT, ett kommunikationsprotokoll för IoT. Bryggan exponerade även ett webbgränssnitt, som kunde nås via en dator eller mobiltelefon.

	Vidare körde ESP 32:n Mongoose OS, en samling API:er ovanpå de inbyggda i C. Detta gjorde det möjligt att programmera mikrokontrollern med Javascript. På så sätt kunde vi köra Javascript över hela stacken, vilket förenklade utvecklingsarbetet enormt.

	![Ett diagram över hur systemet ser ut](../img/lab-plant/schematic "Hela stacken var byggd på Javascript. Kommunikation mellan de olika delarna skedde med MQTT och HTTP.")

	## Webbgränssnittet
	Via webbgränssnittet så kunde man se all data som sensorerna samlade in - men en lista med datapunkter från olika sensorer är kanske inte så användarvänligt. Därför gjorde vi det möjligt att ange vilken typ av krukväxt man placerat enheten på. På så sätt visste systemet precis vilka behov som växten har, och kunde baserat på sensorvärden ge användaren en indikation över vad den behöver mer eller mindre av.

	Med hjälp av jordfuktighetssensorn och vattenpumpen, kunde även krukväxten bevattnas automatiskt, baserat på hur torr jorden är. Användaren kunde även välja att vattna växten själv, där de fick ange antalet milliliter som skulle vattnas.

	![Alttext](../img/lab-plant/webapp "Olika delar av webbgränssnittet.")

	## Takeaways
	Framförallt var det väldigt roligt att få testa på att jobba med riktig elektronik och hårdvara, istället för bara mjukvara. Det var spännande att se att mjukvara och kod man skriver kan leda till att saker händer i den fysiska, verkliga världen.
	`,
	position: 50
}, {
	id: 'thesis',
	name: 'Examensarbete',
	title: 'Finns det ett samband mellan användbarhet och upplevd säkerhet?',
	thumbnail: '../img/thesis/promo',
	colors: ['#001650', '#00C2FF', '#108CFF', '#108CFF'],
	content: `
	![Olika grafiska element som svävar runt texten "DinBank"](../img/thesis/promo "Den påhittade internetbanken som användes som del av arbetet.")
	## Vad?
	Mitt examensarbete skrev jag i samarbete med Omegapoint, ett av de ledande konsultbolagen inom IT-säkerhet i Norden. Från deras sida, fanns det inget krav eller önskemål på vad mitt examensarbete skulle innehålla eller handla om. Jag kände däremot att jag ville göra något som hade en koppling till deras verksamhet.

	Efter mycket funderande, så kom jag fram till att jag skulle kika närmare på om det finns någon koppling mellan användbarheten och den upplevda säkerheten hos webbplatser. Någon tydlig hypotes för hur det sambandet såg ut fanns inte, det vill säga om hög användbarhet var associerad med hög upplevd säkerhet, eller låg upplevd säkerhet.

	Tidigt i processen fastställdes det att en prototyp skulle användas utifrån något slags scenario och sedan utvärderas av testpersoner. Det fastställdes att prototypen skulle vara en internetbank, och scenariot en äldre släkting som skulle ha hjälp med bankärenden.

	## Hur?
	De första veckorna bestod arbetet nästan uteslutande av litteraturstudier. Därefter tog den praktiska biten av arbetet fart på riktigt, som innebar att först skapa en prototyp av en fiktiv internetbank. Det blev arbete med pappersprototyper (Lo-Fi) hela vägen till färdiga prototyper som var redo för implementation (Hi-Fi). Denna design förbättrades sedan ytterligare med hjälp av klasskompisar och alumner på programmet, där de fick utföra s.k. heuristiska analyser.

	Baserat på den färdiga prototypen, skapades en ny, som försämrades på olika sätt för att sänka användbarheten. Det fanns nu två varianter, en med hög och en med låg användbarhet.

	Båda dessa implementerades sedan som en webbapplikation i React. Webbappen förklarade scenariot, och gav medverkande ett antal bankärenden att slutföra i den fiktiva internetbanken. Varannan medverkande fick använda varianten med hög respektive låg användbarhet. Efter de slutfört alla uppgifter, så fick de svara på två formulär, ett som skulle ta reda på hur användbar prototypen var, och ett som skulle ta reda på hur säker prototypen upplevdes.

	![Diagram som visar de olika delarna i processen. Skapa prototyp -> Heuristiska analyser -> Bygg och skicka ut enkät.](../img/thesis/processSE "De övergripande stegen i arbetsprocessen.")

	## Resultatet
	Baserat på frågorna om hur användbara prototyperna var, så gick det att fastställa att de faktiskt hade olika användbarhet, en förutsättning för att kunna säga om det fanns något samband. I stort så gick det att säga att de medverkande hade högre tillit till varianten med hög användbarhet, även om skillnaden var liten. Feedback och synliggörande av olika säkerhetsåtgärder ökar den upplevda säkerheten. En reflektion som uppkom under arbetets gång var att aspekter såsom autentiseringsprocedur och rykte förmodligen har en större inverkan på den upplevda säkerheten än användbarheten.

	## Vad tar jag med mig?
	En av lärdomarna från examensarbetet hade med beslutstagande att göra. Under arbetets gång så övervägde jag en mängd olika tillvägagångssätt och alternativ - och hade beslutsångest kring dessa. Att överväga och utforska alla alternativ har utan tvekan tjänat mig väl - men jag hade förmodligen fått mer gjort och snabbare om jag inte skjutit upp vissa beslut.
	`,
	position: 10,
	resources: [{
		type: "pdf",
		text: "Slutpresentation",
		href: "../Examensarbete slutpresentation.pdf"
	},{
		type: "webpage",
		text: "Rapport i DiVA (Digitala Vetenskapliga Arkivet)",
		href: "https://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-225743"
	}]
}, {
	id: 'wiki',
	name: 'Wikisajt',
	title: 'Dokumentation av roleplaying och händelser på en Minecraftserver',
	thumbnail: '../img/wiki/promo',
	colors: ['#313131', '#3B97D9', '#313131', '#313131'],
	content: `
	![Bild på olika UI-komponenter runt texten "stocken.wiki"](../img/wiki/promo "Wikisajten har lite oklart namn. Namnet blev stocken.wiki för att servern hette stocken.")
	## Wikisajt?.. varför?
	Jag och några vänner startade en Minecraftserver där vi byggde upp nationer, krigade och rollspelade. För att dokumentera allt som hände på servern ville jag skapa en egen lösning, istället för att använda en färdig som Fandom, och såg det som en rolig utmaning.

	## Utvecklingsprocessen
	Precis innan terminsstart påbörjade jag projektet, och satte en deadline på en vecka. Den första dagen ägnades åt att brainstorma idéer och koncept, som diskuterades med de vänner som spelade på servern. Empati och förståelse för målgruppen är centralt inom interaktionsdesign, så jag såg till att löpande samla feedback från dem. På dag två gick jag över till utvecklingen, och fortsatte i rask takt med det resten av tiden.

	Som med många andra av mina projekt, använde jag mig av ett GitHub-actions workflow för att deploy:a projektet på push till main-grenen. Det gav fördelen att mina vänner kunde följa utvecklingen live, och ge feedback så fort olika funktioner implementerats.

	Ett år senare återupptog jag projektet och vidareutvecklade det till att bli en öppen plattform där vem som helst kunde skapa ett konto och bygga en egen wiki, inte bara de av oss som spelade på servern. Jag bestämde mig även för att skriva om API:et i backenden från REST till GraphQL, för att det är något jag velat testa på.
	
	![](../img/wiki/hifi1 "Förstasidan för en Wiki.")
	![](../img/wiki/hifi2 "Sökvy.")
	![](../img/wiki/hifi3 "Ett exempel på en wikisida och vad den innehåller.")

	## Problem & Lösningar
	Från början hostades frontenden på GitHub Pages och backenden på en personlig dator, vilket orsakade CORS-problem eftersom de låg på olika domäner. Hanteras de på fel sätt kan det leda till säkerhetsproblem, vilket det definitivt gjorde i mitt fall. För att slippa hantera dessa skrev jag senare om koden så att både front- och backend hostades på samma IP-adress, på en AWS EC2-instans.

	Initialt försökte jag även att bygga redigera-läget för wikisidor som en WYSIWYG-editor (what you see is what you get), något som visade sig vara för mycket att implementera helt själv. Att få till en sådan hade varit en bra möjlighet för vidareutveckling!

	![Jämförelse mellan en wysiwyg-editor och en vanlig editor."](../img/wiki/wysiwyg "Notions WYSIWYG-editor (vänster), och den som finns på wikisajten - en vanlig editor (höger).")

	## Nutid
	I skrivande stund så är projektet vilande och ligger nere. Det ansågs inte värt att hosta den, då ingen använde applikationen längre.
`,
	position: 20,
	resources: [{
		type: 'code',
		text: 'Källkod',
		href: "https://github.com/ChristofferBillman/wiki-app"
	}
]
}
	, {
		id: 'tip',
		name: 'TIP',
		title: 'Inspireras, planera, res!',
		thumbnail: '../img/tip/key',
		colors: ['#2A2A2A', '#181818', '#D8005B'],
		content: `
	![alttext](../img/tip/promo "En reklambild som bl.a. användes i vår slutpresentation för lärare och studenter.")
	## Uppgiften
	Som del av kursen “affärsmässig tjänstedesign och teknikutveckling” utvecklade jag och en annan student en affärsidé, koncept och första prototyp för en app. Fokuset genom hela kursen var de affärsmässiga aspekterna, såsom kundsegment, värdeerbjudande, intäktsmodell, med mera.

	## Idé & Koncept
	Vår idé var TIP, Travel Inspire Plan! Det beskriver sig självt lite, men kort och gott en app för att hitta inspiration för resor, planera resor och för att vara ett stöd under resan.

	## Processen
	Processen var iterativ och cyklisk. I flera iterationer förbättrade och förfinades både affärsmodellen och prototypen.

	Som stöd för utvecklingen av affärsmodell så använde vi Business Model Canvas (BMC) och Value Proposition Canvas, båda ramverk för att utveckla affärsmodeller.

	Efter att vi hade en första iteration av vår affärsmodell, testades alla delar av den. Detta gjordes genom att skicka ut ett formulär, med frågor som täckte alla delar av vår BMC. Från detta erhölls en hel del insikter, som låg till grund för nästa iteration av affärsmodellen.

	![Vår färdiga Business Model Canvas.](../img/tip/bmc_final "Den sista iterationen av vår Business Model Canvas, alltså vår affärsmodell.")

	Parallellt med att vi utvecklade affärsmodellen, jobbade vi med prototypen. Framförallt i form av Lo-Fis och Wireframes över applikationen. När både affärsmodell och wireframes var relativt förfinade, gick vi vidare och skapade Hi-Fi-prototyper av vår tänkta app.

	![Tre Lo-Fi-prototyper](../img/tip/wireframes "Wireframes över en funktion där användaren ställdes ett par frågor, för att sedan presenteras med resor som passar den.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi "Hi-Fi-prototyper över samma flöde som visades tidigare.")

	## Pitch
	Det sista momentet i kursen var att individuellt sälja in idéen under 90 sekunder för investerare. Ungefär som i Draknästet. I vårt fall pitchade vi inför en panel av 5 personer, anställda på Nordea och som hade erfarenhet med investeringar. Det var minst sagt nervöst!
	
	## Takeaways
	Att få utveckla en affärsmodell var inte bara roligt, men oerhört lärorikt. Att jobba och tänka över alla de olika delarna i en affärsmodell är inget man gjort så grundligt och utförligt förut. Man har fått större insikt och hur man jobbar med affärsmodeller, och vilka frågor man ställer sig i sådana sammanhang.

	Att få pitcha i skarpt läge var även lärorikt. Att få göra det har bidragit till ett bättre självförtroende, att man kan tänka “jo, jag kan faktiskt”, även om det känns svårt och utmanande.

	![Tre Hi-Fi-prototyper](../img/tip/result "Diverse vyer i appen.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi1 "Diverse vyer i appen.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi2 "Diverse vyer i appen.")
`,
		position: 30,
		resources: [{
			type: 'pdf',
			text: 'Slutpresentation',
			href: "../Affärsmässiga slutpresentation.pdf"
		},{
			type: 'figma',
			text: 'Designfil',
			href: "https://www.figma.com/design/xwBHlfcGjGoFS9eCydm8iX/Aff%C3%A4rsm%C3%A4ssiga?node-id=0-1&t=zOjFTqS7XHVp1bq5-1"
		}]
	}
	, {
		id: 'transit',
		name: 'Umeå Lokaltrafik - Redesign',
		title: 'Omdesignad linjekarta för Umeås Lokaltrafik',
		thumbnail: '../img/transit/hero',
		colors: ['#2C2B2B', '#E52F2F', '#E5862F', '#2F78E5', '#E9C400'],
		content: `
	![Ett diagram över Umeås lokaltrafik.](../img/transit/map_dark "")
	## Bakgrund
	Varje morgon på väg till universitetet, stod jag i busskuren och väntade på min buss. För att få tiden att gå, så ställde jag mig en dag och glodde framför linjekartan som är uppsatt i busskuren. Jag såg skeva vinklar, olika typsnitt, och grafiska element som inte var i linje med varandra. Då tänkte jag, det här skriker ju bara "hej kom och hjälp mig” - så då gjorde jag det!

	## En ny utformning och stil
	I mina ögon fanns det två tillvägagångssätt, att (1) fokusera på den geografiska kopplingen och  förankra den ytterligare, eller (2) koppla lös från det geografiska och fokusera på relationerna mellan busslinjer och hållplatser. Båda har sina för och nackdelar, men jag valde det andra alternativet - framförallt för att det ger mer kreativ frihet i hur man kan utforma kartan.

	![En bild på Londons tunnelbana och bussnätet i Stockholms innerstad](../img/transit/comparison "Kartan för Londons tunnelbana (vänster) har låg geografisk anknytning. Kartorna över bussarna i Stockholm har hög geografisk anknytning (höger).")

	Jag inspirerades mycket av hur tunnelbanekartor är konstruerade. Jag tog inspiration från bl.a. Stockholms, Oslos och Londons tunnelbanor. Jag rätade ut busslinjer så gott det gick, och låste dem till 45 graders vinklar.

	## Nutid & vidareutveckling
	Kartan finns att kika på online, men live-aspekten av kartan är inte implementerad ännu. Just nu ligger projektet lite vilande, men jag planerar att fortsätta när jag har tid.

	Om det är något jag skulle vilja förbättra med kartan är det nog dess igenkännbarhet och personlighet. Jag vill att man direkt ska känna “det här är Umeå” när man ser den.
`,
	position: 40,
	resources: [{
			type: 'webpage',
			text: 'Webbplats',
			href: "https://transit.christofferbillman.se"
		},
		{
			type: 'code',
			text: 'Källkod',
			href: "https://github.com/ChristofferBillman/umea-transit-map"
		},
	]
	}
	, {
		id: 'knap',
		name: 'Knåp',
		title: 'Dagliga uppdrag för äldre och familjen',
		thumbnail: '../img/knap/promo',
		colors: ['#141414', '#F6B96D', '#3C3C3C'],
		content: `
	![Olika vyer i appen.](../img/knap/showcase "")
	## Vad var uppgiften?
	Som del av kursen “Innovativa mobila tjänster och system”, byggde vi i ett team på 6 personer en app. Temat som helhet under kursen var “agetech”, dvs. teknik för äldre personer. Just vårt team fick frågeställningen “how do we empower elderly in their daily lives” att utgå ifrån.

	## Idé & Koncept
	Vi utvecklade en app som vi kallade Knåp. I Knåp så får man dagliga uppdrag, exempelvis att ta en promenad, ta en bild med en vän eller lösa ett korsord. Som bevis ska man då ta en bild kopplat till uppdraget och lägga ut. Denna bild blir då synlig för alla ens vänner. Tanken var även att familj och barnbarn också kan ha Knåp, något som kan öka samhörigheten inom familjen, och göra de äldre mindre ensamma.

	## Utveckling
	Vi gav alla personer i teamet en tydlig och avgränsad roll, med ett basansvar. Rollerna var “Scrum Master, Design Lead, Frontend, Backend, Gen. AI Prompt Expert 😎 och AI Classification Pro 😎”. Givetvis fick man jobba med annat också, men givet att man skötte sina basansvar.

	![Rollerna Scrum master och frontend och respektive ansvarsområden.](../img/knap/responsibilities "Rollerna och ansvaren som tilldelades mig")

	För planering och under sprintretron använde vi oss mycket av FigJam i Figma, vilket är ungefär som en digital whiteboard. För att styra och samordna utvecklingen av appen, använde vi oss av Azure DevOps. Själva appen skapade vi med Expo och React Native, och som backend använde vi Googles Firebase.

	## AI-integrationer
	Ännu ett tema på kursen var AI. Därför försökte vi smyga in olika AI-funktioner i olika delar av vår app. Exempelvis när man tog en bild så fick man en vitsig kommentar på dess innehåll. Objektigenkänning i bilden skedde med en förtränad modell som körde på användarens enhet. Den gav tillbaka en lista på objekt och hur säker den var. Objektet högst i listan inkluderades i en prompt till ChatGPT, som då genererade en vitsig kommentar.

	En annan AI-integration var att “dagens uppdrag” (eller “knåpen”), genererades av ChatGPT, så att de var nya och unika varje dag.

	![Tre bilder på en AI-funktion, Lo-Fi, Mid-Fi och Hi-Fi](../img/knap/progression "Vyn där man får välja dagens uppdrag. Progressionen från Lo-Fi, Mid-Fi till Hi-Fi syns från vänster till höger.")
`,
	position: 70
	}, {
		id: 'greetup',
		name: 'GreetUp',
		title: 'En app för att minska ensamhet hos äldre i Australien',
		thumbnail: '../img/greetup/cover',
		colors: ['#167F56', '#1EAE75', '#79C2A5'],
		content: `
	![alt](../img/greetup/promo "")
	## Uppgiften
	Genomfördes som del av kursen Teknik för sociala medier, där vi samarbetade med marknadsföringsstudenter från Edith Cowan University i Australien. De stod för marknadsundersökning och affärsidé, medan vi i Sverige agerade utvecklarteam. Från kursens sida var det ett krav att vi skulle förverkliga en idé som minskade ensamheten hos äldre i Australien.

	Alla medlemmar i mitt team gick samtidigt kursen “Applikationsutveckling för internet”. Det gjorde det möjligt för oss att göra slutprojekten i båda kurserna som ett och samma. Det gav oss totalt 5 veckor heltid att förverkliga en idé.

	## Idé & Koncept
	Vår idé var GreetUp - utforska ditt grannskap idag! Tanken var att användare skulle kunna skapa och delta i olika evenemang i appen. Eftersom målgruppen var så tydlig och avgränsad, kunde vi fokusera på att anpassa appen till fullo mot dem. Hög kontrast, stora knappar och tydlig navigationshierarki var sådant vi la extra krut på för att få till.

	## Den tekniska biten då?
	Frontenden byggde vi som en PWA (Progressive Web Application) i React. För användaren innebär det att de kan trycka “lägg till på hemskärm” när de är inne på hemsidan. Hemsidan fungerar då mycket mer likt en faktiskt app, utan de grafiska element som finns i en webbläsare, ex. sökruta och navigationsknappar.

	API:et byggdes i C#, med ASP.NET MVC. Vi använde oss även av Entity Framework, vilket är en sk. ORM (Object Relational Mapper). Det gjorde så att vi kunde skriva datamodeller och deras relationer i C#. Baserat på datamodellerna, så genererade Entity Framework en SQL-databas åt oss, en metod som kallas “Code First”.

	## Reflektion
	Eftersom projektet var så omfattande, så krävde det att vi hade mer ordentliga arbetssätt och metoder. Det var första gången jag fick jobba ordentligt med agil arbetsmetodik, bl.a. daily standups, sprintar och retrospectives. Vidare så krävde det att vi använde oss av git och GitHub på ett helt annat sätt än förut. Vi lärde oss om bl.a. merging-strategier, branching, pull requests, CI/CD, m.m.
`,
		position: 80,
		resources: [{
			type: 'code',
			text: 'Källkod',
			href: "https://github.com/emmylindgren/GreetUp"
		},{
			type: 'figma',
			text: 'Designfil',
			href: "https://www.figma.com/design/7O1ugqdH0yDd0b9ZtMeNPQ/GreetUP?node-id=2-4&t=mbe8sO5F79Lbaz3H-1"
		}]
	}, {
		id: 'yotei',
		name: 'Yotei',
		title: 'Planeringsverktyg för en Budoklubb i Umeå',
		thumbnail: '../img/yotei/promo',
		colors: ['#A73439','#761818', '#A73439', '#282828'],
		content: `
	![alt](../img/yotei/promo_big "")
	## Vad?
	Som del av kursen “Programvaruteknik”, utvecklade jag tillsammans med 50 andra studenter ett planeringsverktyg för en Budoklubb i Umeå. Kursen bestod av 3 veckors intensiv teori kring programvaruteknik och 7 veckors utvecklingstid. Något som var unikt för kursen var att efter teoridelen sköttes arbetet nästan uteslutande av studenterna - med minimal styrning från kursens lärare och handledare.

	Ännu en intressant förutsättning var att vi fick ärva förra årets kodbas. Att förstå, utöka och förbättra en existerande kodbas - med minimal dokumentation, var en erfarenhet som var mycket värdefull.

	## Hur fick vi ihop samarbetet?
	För att organisera hela utvecklingsarbetet, användes Spotifys modell för agil projektledning. Gruppen delades upp i olika teams (eller squads), som sedan fick ansvar över en särskild del, till exempel huvudmeny eller inställningar. Medlemmarna i varje squad tilldelades även ansvar inom ett särskilt kompetensområde, exempelvis backend, test/pipeline, frontend, design, mm. Alla personer inom kompetensområdet bildade en ny grupp, ett s.k. chapter.

	Det här tillvägagångssättet gjorde det möjligt för varje squad att jobba relativt oberoende, samtidigt som man kunde dela med sig av kunskap och lärdomar inom sitt chapter.

	Jag var del av squadet som hade ansvar över “tekniker”-delen. Jag var även del av frontend-chaptret för det mesta, men hoppade även in med scrum master/PO-chaptret under en sprint.

	## Tekniken
	Frontenden bestod av en webbapplikation skriven i Javascript och React. Backenden var byggd som ett REST-API skrivet med Java Springboot. Det hela deployades i en docker-container, på en server som tillhandahölls av universitetet. På denna server körde även CI/CD-pipelinen, som innehöll enhetstester, E2E-tester och deploy-script.

	Projektet drevs som ett multi-repo, som var uppdelat i “backend”, “frontend”, “infra” och “docs”. När kursen var slut hade totalt 782 (!!!) merge requests godkänts och mergats inom dessa.

	## Workshop
	Den stora majoriteten av studenterna hade aldrig jobbat med React eller Frontendutveckling över huvud taget. Det var även där som det fanns störst behov för förbättringar. Det var med denna bakgrund som jag tog eget initiativ och anordnade en workshop inom React. Mer än hälften av kursens studenter deltog, och många uppskattade workshopen, och tyckte att det gjorde dem redo att sätta igång med utvecklingsarbetet.

	## Min roll
	Tidigt i arbetet spenderade jag en del tid med designteamet, för att ta fram en ny grafisk profil och identitet. Jag hade tagit fram ett förslag, som i slutändan inte blev del av projektet, därför att komma igång med utvecklingsarbetet tidigt var något som prioriterades högre.

	I och med att jag var en av de få som kunde React, så blev jag tillsammans med en annan student de facto handledare inom frontend. Vi två sprang runt mycket och hjälpte olika team med frontend-relaterade problem, något jag tror bidrog mycket till att vi kom så långt vi gjorde.

	![3 vyer av mitt desingnförslag](../img/yotei/myversion "Tre vyer i mitt designförslag. En huvudtanke med designen var att samla alla åtgärder i en åtgärdslist högst upp.")

	## Takeaways
	Den här perioden under mina studier kan ha varit en av de mest intensiva och utmanande - men också en av de roligaste och mest lärorika. Jag fick arbeta med en bredd olika uppgifter, under stort eget ansvar och styrning, något som jag gärna gör igen. Det var också väldigt roligt och givande att ha en handledarroll.

	Att arbeta så många i ett och samma utvecklingsprojekt var en otroligt stor utmaning rent organisatoriskt. Det är otroligt att det hela gick ihop - men det gjorde det.
`,
		position: 90,
		resources: [{
			type: 'figma',
			text: 'Designfil',
			href: "https://www.figma.com/design/64zymyGJSp7BuQthnOhvMt/PVT?node-id=1-68&t=BWnl0eXCgXBLfSoa-1"
		},{
			type: 'figma',
			text: 'Designfil (mitt förslag)',
			href: "..."
		},{
			type: 'pdf',
			text: 'Nybörjarguide för Hooks',
			href: "../React Hooks Cheatsheet.pdf"
		},{
			type: 'pdf',
			text: 'Presentationsfil för workshop i React',
			href: "../React Workshop.pdf"
		}]
	}
]
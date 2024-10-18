import Project from "../types/Project"

export const projectsSE: Project[] = [{
	name: 'Chare',
	title: 'Hur kan man göra samåkning lika smidigt som att boka en tåg eller bussbiljett?',
	thumbnail: '../img/chare/Hero.png',
	colors: ['#8884FF', '#EB8258', '#D8D6FF'],
	content: `
	![Alttext](../img/chare/Hero.png "Det blev många olika Hi-Fi-prototyper som dessa.")
	## Uppgiften
	Projekt i kursen "Prototyputveckling för mobila applikationer” (PUMA:an). I teamet var vi 5 studenter som skulle ta fram ett koncept, en design och en MVP för en mobilapplikation. Med andra ord, så skulle vi jobba genom hela designprocessen - från idé till implementation. Från kursens sida fanns inga krav på hur vi skulle arbeta eller vilka tekniker som skulle användas.

	## Idé & Koncept
	Tidigt bestod processen av ett intensivt idéarbete, vilket innebar utforskande av idéer, brainstorming och diskussion inom gruppen. Under denna fas diskuterades allt från prissättningsmodeller och genomförbarhet till grafisk utformning och användarflöden. Inte helt förvånansvärt resulterade idéarbetet i en idé: Chare, en app för att förenkla samåkande. Tanken var att personer som skulle köra bil till en destination, kan publicera att de kommer göra det i appen. Personer som behöver resa till samma eller en destination skulle då kunna skicka en förfrågan om att få följa med, mot en liten slant - något som skulle gynna både föraren, passageraren och miljön.

	## Prototyping
	Efter idéarbetet satte vi igång med rapid prototyping - en metod för att ta fram en stor bredd idéer snabbt. En timer på 10 minuter sattes igång och varje gruppmedlem skulle skissa på hur de tänkte hur appen kunde utformas. Varje medlem fick presentera sina skisser, som sedan diskuteras inom gruppen. Detta upprepades tills vi kände att vi hade samsyn och en bra grund att arbeta vidare från. Fördelen med denna metod är att dåliga idéer och designs snabbt filtreras ut, vilket skapar utrymme för nya idéer och utveckling av dem som blir kvar. En grundläggande struktur för appens navigation skapades tillsammans, och olika områden av appen tilldelades olika gruppmedlemmar. Därefter skapades wireframes (mid-fi:s) av respektive del av appen. Dessa diskuterades, och förbättrades iterativt. Därefter utvecklade vi Hi-Fi-prototyper i Figma, som skulle ligga till grund för implementationen.

	## Problem & Lösningar
	Något som diskuterades hett var hur man skulle få till en prismodell som gynnade både förare, medåkande och de som driver appen. ???

	Ett annat problem som diskuterades var vare sig förare verkligen var villiga att ta in en främling i sin bil - och om passagerare skulle vara villiga att sätta sig i en främlings bil. Scenariot att en ung tjej ska resa sent på kvällen, och göra det ensam med en främling, var det som visade på att idén aldrig skulle fungera.

	Problemet löstes genom att på olika sätt skapa legitimitet och tillit. Vi utvecklade profil-delen av appen, och la till information som är svårare att fejka, exempelvis hur många resor man har gjort, recensioner från andra användare och när man skapade profilen. Vidare så diskuterades verifiering med BankID eller andra ID-handlingar som ett sätt att styrka säkerheten och tilliten till plattformen.

	## Utveckling
	Under utvecklingsfasen så arbetade vi i sprintar och försökte till så stor mån som möjligt att följa agil utvecklingsmetodik. Vi hade en strikt deadline på när vår MVP skulle vara klar, så i praktiken blev det någon slags blandning mellan vattenfallsmodellen och agila metoder.

	Vi valde att implementera själva appen i Android, av den enkla anledningen att vi ville lära oss mer om Androidutveckling. Backenden bestod av ett REST-API skrivet med .NET MVC. Databasen blev MySQL, tillsammans med Entity Framework för datamodellering och gränssnitt till databasen.

	![Diagram på dataflödet inom appen](../img/chare/Data Flow.png "Tekniker som användes för projektet(vänster) och dataflödesmodellen för hela applikationen, MVVM (Model - View - Viewmodel) (höger).")

	## Resultatet
	Klar med MVP:n blev vi inte, men vi kom en god bit på vägen, något som ändå var otroligt i och med att vi hade nästan noll erfarenhet av Androidutveckling sedan tidigare. Framförallt så lärde vi oss mycket om utveckling av mobila applikationer.

	[Bild på färdig app]
	`
}]
export const wandQuestions=[
 ['Wat wil je als eerste met magie doen?',['Een verborgen plek ontdekken','Iets moois tot leven brengen','Iemand helpen herstellen','Een ingewikkelde spreuk beheersen']],
 ['Welke werkplek kies je?',['Een oude werkbank onder de bomen','Een lichte kamer vol kleuren','Een rustig plekje aan het water','Een torenkamer met boeken']],
 ['Een spreuk lukt niet. Wat doe je?',['Ik probeer een andere aanpak','Ik geef er mijn eigen draai aan','Ik oefen rustig verder','Ik zoek uit waar het misgaat']],
 ['Wat neem je mee op avontuur?',['Een stevig kompas','Een leeg schetsboek','Een klein EHBO-tasje','Een boek met geheime tekens']],
 ['Welke magie trekt je aan?',['Beschermen en verdedigen','Vormgeven en veranderen','Verzorgen en verbinden','Raadsels en verborgen kennis']],
 ['Hoe leer je iets nieuws?',['Door meteen te proberen','Door te experimenteren','Door samen te oefenen','Door eerst goed te begrijpen']],
 ['Een onverwachte omweg…',['Maakt het avontuur interessanter','Brengt me op nieuwe ideeën','Geeft me tijd om rond te kijken','Vraagt om een slim nieuw plan']],
 ['Wat wil je dat je toverstok uitstraalt?',['Kracht en warmte','Eigenzinnigheid en levenslust','Rust en vertrouwen','Precisie en mysterie']]
];
export const woods=[['Eikenhout','Stevig en warm','Je kiest vaak voor ontdekken, proberen en beschermen.'],['Kersenhout','Levendig en sierlijk','Je geeft ruimte aan eigen ideeën, verbeelding en experimenten.'],['Wilgenhout','Licht en soepel','Geduld, aandacht en samen oefenen komen terug in je keuzes.'],['Walnoothout','Donker en verfijnd','Je wilt begrijpen hoe iets werkt en zoekt graag een slimme oplossing.']];
export function wandResult(a){if(a.length!==8||a.some(x=>!Number.isInteger(x)||x<0||x>3))throw Error('Onvolledige antwoorden');const scores=[0,0,0,0];a.forEach(x=>scores[x]++);const max=Math.max(...scores);const tied=scores.map((v,i)=>v===max?i:-1).filter(i=>i>=0);const wood=[...a].reverse().find(x=>tied.includes(x));const cores=['Feniksveer','Eenhoornhaar','Drakenhartvezel'];return {wood,core:cores[(a[0]+a[4]+a[5])%3],length:26+(a[1]+a[3])*.5,flex:['Veerkrachtig','Soepel','Stevig','Licht buigzaam'][a[6]]};}
export const patronusQuestions=[
 ['Waar voel jij je het meest op je gemak?',['In een bos met verborgen paadjes','Bij open water en veel ruimte','Op een gezellige plek met anderen','Hoog op een uitkijkpunt']],
 ['Je vriend durft iets niet. Hoe help je?',['Ik ga als eerste en blijf in de buurt','Ik luister en geef hem de tijd','Ik maak samen een slim plan','Ik breng luchtigheid met een grapje']],
 ['Wat geeft jou nieuwe energie?',['Bewegen en op ontdekking gaan','Rust en een vertrouwde omgeving','Samen iets beleven','Iets nieuws leren of maken']],
 ['Wat doe je als iets tegenzit?',['Ik blijf proberen','Ik neem afstand en kijk opnieuw','Ik zoek steun bij iemand','Ik verander mijn aanpak']],
 ['Welke rol past bij jou in een groep?',['De aanmoediger','De rustige steun','De ideeënmaker','De oplettende verkenner']],
 ['Wat zou je het liefst beschermen?',['De vrijheid om jezelf te zijn','De mensen die je dierbaar zijn','Kwetsbare dieren en natuur','Wat eerlijk en rechtvaardig is']],
 ['Hoe ziet een fijn avontuur eruit?',['Snel, verrassend en vol beweging','Klein, warm en met fijne mensen','Een onbekende wereld onderzoeken','Iets moeilijks samen overwinnen']],
 ['Welke combinatie herken je in jezelf?',['Speels én moedig','Rustig én vastberaden','Nieuwsgierig én zelfstandig','Zorgzaam én vindingrijk']]
];

export const animals=['lion','snake','badger','eagle'];
export const questions=[
 ['Je vindt een deur die gisteren nog niet bestond. Wat doe je eerst?',[
  ['Ik klop aan en kijk wie er antwoordt.','lion'],['Ik zoek uit waar de deur naartoe kan leiden.','snake'],['Ik haal iemand erbij om samen te kijken.','badger'],['Ik onderzoek de tekens op het slot.','eagle']]],
 ['Jullie mogen één middag zelf invullen. Jij stelt voor:',[
  ['Iets proberen wat niemand van ons eerder durfde.','lion'],['Werken aan een plan waar we al lang van dromen.','snake'],['Iets doen waar iedereen aan mee kan doen.','badger'],['Een onbekende plek ontdekken en uitpluizen.','eagle']]],
 ['Een groepsopdracht loopt vast. Wat helpt volgens jou het meest?',[
  ['De eerste stap zetten, ook al is nog niet alles duidelijk.','lion'],['Een andere aanpak kiezen die ons doel haalbaar maakt.','snake'],['Luisteren naar wie nog niets heeft kunnen zeggen.','badger'],['Uitzoeken welke aanname misschien niet klopt.','eagle']]],
 ['Een magisch voorwerp werkt één keer. Je gebruikt het om…',[
  ['Iets te doen waarvoor je normaal terugdeinst.','lion'],['Een belangrijke kans te pakken die anders voorbijgaat.','snake'],['Een moeilijke dag voor iemand fijner te maken.','badger'],['Het antwoord op een groot raadsel te vinden.','eagle']]],
 ['Je vriend wil stoppen met een lastig project. Jij zegt:',[
  ['Zullen we dat spannendste stukje samen proberen?','lion'],['Misschien bereiken we je doel via een andere weg.','snake'],['Ik blijf even bij je; we hoeven niet te haasten.','badger'],['Laat zien waar het misgaat, dan zoeken we het uit.','eagle']]],
 ['Welk compliment zou jou het meest bijblijven?',[
  ['Door jou durfde ik het toch.','lion'],['Jij zag een mogelijkheid die wij misten.','snake'],['Bij jou voelde ik me echt welkom.','badger'],['Jouw idee liet me anders naar iets kijken.','eagle']]],
 ['Je hebt een fout gemaakt tijdens een spel met je team. Wat doe je?',[
  ['Meteen zeggen dat ik het was.','lion'],['Een plan bedenken om ons weer op weg te helpen.','snake'],['Bij de anderen checken hoe het met ze gaat.','badger'],['Terugkijken om te begrijpen hoe het gebeurde.','eagle']]],
 ['In een onbekend dorp valt jou het eerst iets op aan…',[
  ['Het smalle pad naar een spannend uitzichtpunt.','lion'],['Het bord waarop iemand hulp vraagt bij een groot plan.','snake'],['De mensen die samen aan een lange tafel zitten.','badger'],['De vreemde klok die achteruit lijkt te lopen.','eagle']]],
 ['Je mag een nieuwe vaardigheid leren. Wat trekt je het meest?',[
  ['Een vaardigheid waarvoor ik mijn zenuwen moet overwinnen.','lion'],['Iets waarmee ik een eigen droom dichterbij breng.','snake'],['Iets waarmee ik anderen kan helpen of iets samen kan maken.','badger'],['Iets wat me laat begrijpen hoe de wereld werkt.','eagle']]],
 ['Je bent het niet eens met een regel. Wat past het best bij je?',[
  ['Ik spreek uit waarom ik het er niet mee eens ben.','lion'],['Ik zoek wie kan helpen om de regel te veranderen.','snake'],['Ik kijk wie er last van heeft en luister naar hen.','badger'],['Ik onderzoek waarom de regel ooit is bedacht.','eagle']]],
 ['Jullie vinden een kaart met een ontbrekend stukje. Jij wilt…',[
  ['Alvast op pad en onderweg verder kijken.','lion'],['Bedenken welke route ons het meeste oplevert.','snake'],['Zorgen dat iedereen mee kan en zich prettig voelt.','badger'],['De ontbrekende route afleiden uit de aanwijzingen.','eagle']]],
 ['Aan het einde van een avontuur ben je vooral blij als…',[
  ['Ik iets durfde wat ik eerst eng vond.','lion'],['Ik iets heb bereikt wat ik graag wilde.','snake'],['We goed voor elkaar hebben gezorgd.','badger'],['Ik iets nieuws heb ontdekt dat ik niet verwachtte.','eagle']]],
];
// One deliberately decisive choice for every unordered pair. No random tie winner.
export const tieQuestions={
 'lion:snake':['Er is maar tijd voor één aanpak om een vastgelopen plan te redden. Wat kies je?','Zelf het moeilijke gesprek aangaan, ook als het spannend wordt.','Eerst een slimme afspraak regelen waardoor het plan alsnog kan slagen.'],
 'lion:badger':['Een vriend staat voor een enge eerste stap. Je kunt nu één ding doen:','Voordoen dat je het zelf ook spannend vindt, en samen de stap zetten.','Naast je vriend blijven en de ruimte geven om op eigen tempo te beginnen.'],
 'lion:eagle':['Een raadselachtige brug lijkt veilig, maar niemand weet hoe hij werkt. Wat trekt jou meer?','Voorzichtig de eerste stap proberen om te zien wat er gebeurt.','Eerst de patronen onderzoeken om de werking te begrijpen.'],
 'snake:badger':['Jullie project kan een bijzondere kans krijgen, maar dan moet de planning veranderen. Wat weegt voor jou zwaarder?','De kans benutten en een nieuwe verdeling regelen die het mogelijk maakt.','Het gezamenlijke tempo behouden, ook als die kans dan voorbijgaat.'],
 'snake:eagle':['Je ontdekt een geheime doorgang. Waar besteed je je tijd het liefst aan?','Bedenken wat je dankzij die doorgang mogelijk kunt maken.','Uitzoeken hoe en waarom die doorgang is gebouwd.'],
 'badger:eagle':['Tijdens een vrije middag kun je maar op één uitnodiging ingaan. Welke kies je?','Samen met iemand iets afmaken waar die al lang mee worstelt.','Samen met iemand een raadsel onderzoeken waar nog niemand uit is.'],
};
export function leaders(answers){const scores=Object.fromEntries(animals.map(a=>[a,0]));for(const a of answers)if(a in scores)scores[a]++;const top=Math.max(...Object.values(scores));return animals.filter(a=>scores[a]===top);}
export function pair(a,b){const ordered=animals.filter(x=>x===a||x===b);return {animals:ordered,question:tieQuestions[ordered.join(':')]};}
export function result(answers,tieAnswers=[]){let remaining=leaders(answers);for(const choice of tieAnswers){if(remaining.length<2)break;const first=remaining.slice(0,2);if(!first.includes(choice))throw Error('Invalid tiebreak');remaining=remaining.filter(x=>!first.includes(x)||x===choice);}return remaining;}
export const descriptions={
 lion:['Jij durft de eerste stap te zetten.','In jouw keuzes komen moed, initiatief en voor anderen opkomen naar voren. Spannend vinden en toch proberen kunnen prima samengaan.'],
 snake:['Jij ziet wat er mogelijk is.','Jouw keuzes laten vindingrijkheid, ambitie en gevoel voor een goede aanpak zien. Je denkt graag na over hoe je een idee echt voor elkaar krijgt.'],
 badger:['Jij maakt ruimte voor anderen.','In jouw keuzes vallen zorgzaamheid, geduld en samenwerken op. Je vindt niet alleen de finish belangrijk, maar ook hoe iedereen daar samen komt.'],
 eagle:['Jij kijkt graag een stapje verder.','Jouw keuzes laten nieuwsgierigheid, verbeelding en zelfstandig nadenken zien. Je wilt niet alleen weten dát iets werkt, maar ook waarom.'],
};

import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {questions,animals} from './quiz.mjs';
const browser=await chromium.launch({executablePath:'/home/maartenbreddels/.cache/ms-playwright/chromium-1140/chrome-linux/chrome',headless:true,args:['--no-sandbox']});
const base=process.env.TEST_URL||'http://127.0.0.1:8791/';
for(const width of [390,280]){
 const page=await browser.newPage({viewport:{width,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.getByRole('button',{name:'Ontdek mijn diertje'}).click();
 for(let i=0;i<12;i++){
  const text=questions[i][1].find(x=>x[1]===animals[i%4])[0];
  await page.getByRole('button',{name:text,exact:false}).click();
  await page.waitForTimeout(260);
 }
 assert.match(await page.locator('#app').innerText(),/Nog even verder kijken/i);
 for(let i=0;i<3;i++){await page.locator('.answer').first().click();await page.waitForTimeout(260);}
 await page.getByRole('button',{name:'Mijn antwoorden bekijken'}).waitFor();
 const winner=await page.locator('.result-animal').getAttribute('aria-label');
 await page.reload();assert.equal(await page.locator('.result-animal').getAttribute('aria-label'),winner);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Horizontal overflow');
 assert(await page.evaluate(async()=>{const i=new Image();i.src='animals.png';await i.decode();return i.naturalWidth>0;}));
 await page.screenshot({path:`/tmp/afdeling-${width}.png`,fullPage:true});
 await page.getByRole('button',{name:'Mijn antwoorden bekijken'}).click();assert.equal(await page.locator('#choices h2').count(),12);
 await page.getByRole('button',{name:'Terug naar mijn diertje'}).click();
 page.on('dialog',d=>d.accept());await page.getByRole('button',{name:'Opnieuw proberen'}).click();
 await page.getByRole('button',{name:'Ontdek mijn diertje'}).click();
 await page.locator('.answer').first().click();await page.waitForTimeout(260);
 await page.getByRole('button',{name:'Vorige vraag'}).click();assert.match(await page.locator('#app').innerText(),/Vraag 1 van 12/i);
 assert.deepEqual(errors,[]);await page.close();console.log('PASS browser '+width+'px: 4-way tie, reload, images, answers, reset, back, layout.');
}
await browser.close();

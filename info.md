# KliensoldaliWebProgHazi_ElsoReactHazi
 First React homework for Frontend programing course

## Context
Képzeljünk el egy olyan alkalmazást, ahol egy kiírt feladatot kell úgy megoldani, hogy egy JavaScript függvényt írunk rá. Pl: "bemenetként adott két szám és add meg az összegüket". A felületen megírjuk a függvényünket (({a, b}) => a + b szövegként, majd abból igazi JS függvényt készítünk, mindegy, hogyan), majd szeretnénk letesztelni, hogy jó-e a megoldásunk. Innen kezdődik a feladat.

## Exercise
Készíts egy függvénytesztelő komponenst! A komponens paraméterül megkapja

a függvényt,
bemeneti paramétereinek leírását,
kimeneti paramétereinek leírását,
előre megadott teszteket, valamint
egy végén meghívandó eseménykezelőt.
A komponensnek a következő feladatokat kell tudnia elvégeznie:

Meg kell jelenítenie a függvény kódját (toString metódust hívva a függvényen).

Az előre megadott teszteket meg kell tudni jeleníteni, és egyesével vagy az összeset le kell tudni futtatni. Vizuálisan jelezni kell a teszt helyességének az eredményét a felületen, és az értük kapott összpontszámot. Az előre megadott tesztek függvényként vannak definiálva (ld a lenti példákat!).

Létre kell tudni hozni manuális teszteseteket is. Egy tesztesetnél meg kell adni

a teszt nevét
a bemeneti adatokat
a kimeneti adatokat.
A tesztek között tudni kell váltani, az aktuálisan megjelenő tesztet tudni kell szerkeszteni, új tesztet kell tudni létrehozni, és meglévőt törölni. A teszteket egyesével vagy akár az összeset egyszerre tudni kell futtatni, és a tesztek helyességéről vizuális visszajelzést adni.

Egy "OK" gombot megnyomva a komponens visszatér az előre megadott tesztekkel és a manuálisan megadott tesztekkel, kiegészítve a teszteket a tesztelési eredményekkel.

## Examples

<FunctionTester  
  fn={({ a, b }) => a + b}
  input={{ a: "number", b: "number" }}
  output={"number"}
  tests={[
    { name: "1 + 0",    testFn: (fn) => fn({ a:1,  b:0   }) === 1  , points: 25 },
    { name: "0 + 10",   testFn: (fn) => fn({ a:0,  b:10  }) === 10 , points: 25 },
    { name: "1 + -1",   testFn: (fn) => fn({ a:1,  b:-1  }) === 0  , points: 25 },
    { name: "10 + -20", testFn: (fn) => fn({ a:10, b:-20 }) === -10, points: 25 },
  ]}
  onFinish={result => console.log(result)}
/>

<FunctionTester  
  fn={({ x, limit }) => x.filter(e => e.grade >= limit).map(e => e.name)}
  input={{ x: [{ name: "string", grade: "number" }], limit: "number" }}
  output={["string"]}
  tests={[
    { 
      name: "empty input",     
      testFn: (fn) => {
        const input = {
          x: [], 
          limit: 0
        };
        const output = fn(input);
        return Array.isArray(output) && output.length === 0;
      },
      points: 25,
    },
    { 
      name: "one element, OK", 
      testFn: (fn) => {
        const input = {
          x: [{ name: "Győző", grade: 5 }], 
          limit: 5
        };
        const output = fn(input);
        return Array.isArray(output) && 
          output.length === 1 && 
          output[0] === "Győző";
      },
      points: 25,
    },
    { 
      name: "one element, not OK", 
      testFn: (fn) => {
        const input = {
          x: [{ name: "Győző", grade: 4 }], 
          limit: 5
        };
        const output = fn(input);
        return Array.isArray(output) && 
          output.length === 0;
      },
      points: 25,
    },
    { 
      name: "multiple elements", 
      testFn: (fn) => {
        const input = {
          x: [
            { name: "Győző", grade: 2 },
            { name: "Dávid", grade: 4 },
            { name: "Bendegúz", grade: 5 },
            { name: "Imre", grade: 3 },
          ], 
          limit: 4
        };
        const output = fn(input);
        const expectedOutput = ["Dávid", "Bendegúz"];
        return JSON.stringify(output) === JSON.stringify(expectedOutput);
      },
      points: 25,
    },
  ]}
  onFinish={result => console.log(result)}
/>

## Parameters of component
fn: a függvény
A függvény sima JavaScript függvény. Paramétereit az egyszerűség kedvéért úgy adjuk meg, hogy a bemeneti paramétere egyetlen objektum, ami tartalmazza a különböző paramétereket. Ezt azért tesszük így, hogy könnyebben tudjuk meghívni a függvényt és használhassuk az objektum destrukturálást a paraméterlistában, és így ne legyünk kötve a paraméterek sorrendjéhez.

input: a bemenet leírása
A bemenet típusát -- explicit típusok hiánya miatt -- egyedi formában adjuk meg, ami igazodik a JavaScript literálformáihoz.

szöveg: "string"
szám: "number"
logikai: "boolean"
tömb: [<tömb elemének típusa>]
rekord/objetum: { mezo1: <mezőtípus1>, mezo2: <mezőtípus2> }
Ezeket egymásba is lehet ágyazni, ahogy a fenti bonyolultabb példa mutatja.

A bemeneten mindig egy objektum jelenik meg. A kimenet bármi lehet.

output: a kimenet leírása
Ld. az input paraméternél.

tests: az előre megadott tesztek
A teszteket egy tömbben adjuk meg. A tömb egy eleme tartalmazza:

a teszt nevét, amit megjeleníthetünk a felületen
a tesztelő függvényt, ami paraméterül kapja meg a tesztelendő függvényt; visszatérési értéke igaz vagy hamis lehet
a teszt pontértékét
onFinish: a végén meghívandó függvény
A függvényt a hívó rész definiálja, egyetlen paramétert vár az előre megadott és manuális teszteket az eredményekkel kiegészítve. Ennek formátuma a megoldóra van bízva, pl. kinézhet így:

{
  "givenTests": [
    { "name": "1 + 0",    "result": true },
    { "name": "0 + 10",   "result": true },
    { "name": "1 + -1",   "result": true },
    { "name": "10 + -20", "result": true }
  ],
  "testResult": {
    "achieved": 100,
    "all": 100
  },
  "customTests": [
    { "name": "test1", "input": { "a": 12, "b": 32 }, "output": 44,  "result": true },
    { "name": "test2", "input": { "a": 0, "b": -32 }, "output": -32, "result": true }
  ]
}

## Components
esztelendő függvény
Egy információs panel a tesztelendő függvényről. A függvény toString metódusát meghívva ki lehet írni.

Előre megadott tesztek
Mivel a tesztek függvényként vannak megírva, így elég csak a nevüket feltüntetni. Mindegyik tesztet egyenként lehet futtatni, vagy az összeset egyszerre. A tesztek igazzal vagy hamissal térnek vissza helyességüktől függően. A tesztek eredményét a teszt nevei mellett vizuálisan jelezni kell (pl üres kör - még nem lett lefuttatva, piros kör - sikertelen, zöld kör - sikeres). Futtatás után a kapott pontszámot egyenként és összesítve is írjuk ki (pl. 0/2 vagy 2/2)!

Egyedi tesztek
A felület legtöbb interaktivitást igénylő eleme. Itt lehet "kézi" teszteket megadni. Az input paraméterben megadott típusfának megfelelően a tesztadatok hierarchikus megjelenítését kell megadni, pl úgy, mint az intéző könytárstruktúráját mutató része, az alacsonyabb szintek egyre beljebb húzva jelennek meg. A tesztnek kell tudni nevet adni, majd meg kell tudni adni az input és output adatokat:

egyszerű típusoknál (szöveg, szám, logikai): a mező nevét és a megfelelő űrlapelemet kell kitenni:
szövegnél <input type="text">
számnál <input type="number">
logikainál <input type="radio"> vagy <input type="checkbox">
tömbnél: a mező neve mellett jelenjen meg az "array" szó, majd alatta legyenek beljebb húzva felsorolva az elemek. Legyen lehetőség új tömbelem hozzáadására, és meglévő törlésére.
objektumnál: a mező neve mellett jelenjen meg az "object" szó, majd alatta legyenek beljebb húzva felsorolva az objektum mezőnevei.
Ellenőrizni kell, hogy mindegyik mező ki van-e töltve! Az üres mezőkről készüljön egy hibalista, amely tartalmazza az összes érintett mezőt. A lista egy elemére kattintva a fókusz a hibás bemeneti mezőhöz kerül.

Tudni kell új tesztet létrehozni, meglévőt módosítani és törölni. A tesztek között valamilyen módon lehet lapozni, ez lehet jobbra-balra gomb, vagy lista, vagy accordion.

Mindegyik tesztet egyenként lehet futtatni, vagy az összeset egyszerre. A tesztek eredményét a teszt nevei mellett vizuálisan jelezni kell (pl üres kör - még nem lett lefuttatva, piros kör - sikertelen, zöld kör - sikeres). A teszt helyességének ellenőrzését úgy végezzük el, hogy felépítünk egy input objektumot a felületen megadott tesztadatokból, majd ezzel az input objektummal meghívjuk a tesztelendő függvényt, aminek visszatérési értékét összehasonlítjuk a felületen megadott kimenettel. Mivel ez utóbbi általános esetben, például amikor egy összetett objektum van megadva a kimeneten, bonyolult is lehet, egyszerűsítsük ezt úgy le, hogy mind a valódi kimenetet, mind az elvárt kimenetet JSON-né sorosítjuk, és azt hasonlítjuk össze (ilyen megoldást láthattok a fenti, bonyolultabb példánál).

Megjegyzés: a bemenet és kimenet általános famegjelenítését csak plusz pontokért várjuk el, azaz nem része az alap feladatnak. Ld. pontozás.

Technikai segítség: hierarchikus adatszerkezetek feldolgozásához, így megjelenítéséhez is rekurzív feldolgozást érdemes használni. React-ben tudunk rekurzív komponenseket létrehozni, ld. az alábbi leírásokat:

https://blog.logrocket.com/recursive-components-react-real-world-example/ (Linkek egy külső oldalra)
https://www.freecodecamp.org/news/how-to-use-recursion-in-react/ (Linkek egy külső oldalra)
https://dev.to/knowit-development/recursive-components-in-react-37ka

## "OK" button
Ha nincs szintaktikai hiba az egyedi teszteknél, akkor az OK gomb aktív lesz és megnyomására meghívjuk az onFinish függvényt átadva neki az előre megadott és az egyedi tesztek összesített objektumát az eredményekkel kiegészítve, ennek leírását ld. fönt.

## Implementation
A feladathoz egy előkészített keretprogram (Linkek egy külső oldalra) is tartozik. A feladatot abban kell megvalósítani. Minden ahhoz kapcsolódó információ a keretprogram README fájljában van leírva.








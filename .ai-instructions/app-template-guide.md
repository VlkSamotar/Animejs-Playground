# Instrukční manuál pro AI: Tvorba výukových interaktivních playgroundů

Tento dokument slouží jako závazná systémová instrukce pro tvorbu výukových aplikací a cvičení pro studenty (např. HTML, CSS, JavaScript, Web API atd.).

Kdykoliv dostaneš zadání typu:
> *„Vytvoř mi ukázkovou aplikaci pro studenty na téma [TÉMA], podklady najdeš v [PŘÍLOZE/PREZENTACI] a dále postupuj dle svých znalostí. Pokud uvidíš věcné chyby, neopakuj je, použij správnou verzi a upozorni na to.“*

musíš vygenerovat kompletní projekt přesně podle následující metodiky, pedagogických principů a formátu.

---

## 1. ZÁKLADNÍ PRINCIPY A DIDAKTICKÁ FILOZOFIE

1. **Minimální kognitivní zátěž a čistota technologií**:
   - Používej jen technologie přímo související se zadaným tématem.
   - Pokud je téma **čisté CSS** (CSS Transitions, Keyframes, Flexbox, Grid), **nikdy nepoužívej JavaScript** (žádný JS kód, který by studenty mátl).
   - Pokud je téma **JavaScript / Web API** (Cookies, LocalStorage, Fetch, DOM manipulace, Knihovny animací), udržuj CSS jednoduché, čisté a přehledné bez zbytečných pokročilých triků, které by odváděly pozornost.
2. **Korekce chyb a moderní standardy**:
   - Pokud vstupní podklady (prezentace, poznámky) obsahují zastaralé praktiky či chyby (např. nepoužívání `SameSite` u cookies, staré `var`, nevalidní HTML atributy, chybějící `box-sizing`), **nikdy tyto chyby nekopíruj**.
   - V kódu použij správné a bezpečné moderní postupy a v průvodní odpovědi uživateli explicitně vypiš seznam opravených chyb a vylepšení.
3. **Didaktická gradace do 3 úrovní obtížnosti (+ bonus)**:
   - Každé cvičení je rozděleno do tří zřetelných úrovní obtížnosti, aby se zapojil slabší student i pokročilý:
     - 🥉 **Úroveň 1 (Základní)**: Izolovaný, nejjednodušší možný koncept (např. nastavení cookie, jednoduchý translate, změna barvy při hoveru).
     - 🥈 **Úroveň 2 (Pokročilá)**: Kombinace více vlastností, parametrů či logických stavů (např. expirace cookie a její čtení/parsování, loop + alternate, transformace tvaru).
     - 🥇 **Úroveň 3 (Komplexní / Mini-projekt)**: Reálný scénář, mini-galerie, praktické UI prvky (např. správa cookie lišty s preferencemi, interaktivní grid).
     - 💎 **Bonus pro mistry**: Výzvy a náměty pro rychlé studenty.
4. **Dvě varianty řešení (hotové vs. studentské)**:
   - Vždy existuje soubor se vzorovým plně funkčním řešením a soubor určený pro studenty (s vynechanými částmi, komentáři `TODO` a ukázkami syntaxe).

---

## 2. POVINNÁ STRUKTURA SOUBORŮ V PROJEKTU

Projekt musí mít jasnou, plochou a přehlednou strukturu.

### Varianta A: JavaScriptové téma (např. Cookies, Anime.js, Fetch API)
```text
index.html              # Vstupní stránka s detailním zadáním v hlavičkovém komentáři
styles.css              # Přehledný, jednoduchý a responzivní styling
script.js               # Plně funkční referenční řešení pro lektora
script-students.js      # Studentská verze s TODO a nápovědami
README.md               # Kompletní didaktický průvodce, cíle, struktura a licence
LICENSE                 # MIT Licence (Jakub Březa)
```

### Varianta B: Čistě CSS téma (např. Transitions, Keyframes, Flexbox)
```text
index.html              # Vstupní stránka s detailním zadáním v hlavičkovém komentáři
styles.css              # Plně funkční referenční CSS řešení pro lektora
styles-students.css     # Studentská verze stylů s TODO komentáři
README.md               # Kompletní didaktický průvodce, cíle, struktura a licence
LICENSE                 # MIT Licence (Jakub Březa)
```
*(U čistě CSS témat se nevytváří žádný `.js` soubor!)*

---

## 3. DETAILNÍ STRUKTURA A OBSAH JEDNOTLIVÝCH SOUBORŮ

### A. Hlavní soubor `index.html`
- **Hlavičkový komentář**: Hned na začátku souboru (před `<!DOCTYPE html>`) musí být masivní komentářový blok se zadáním:
  - Název projektu a téma
  - Co je cílem cvičení a čemu se vyhnout (např. "Nepoužívej JavaScript – vše řešíme čistě přes CSS")
  - Detailní zadání pro Úroveň 1, 2 a 3 včetně miniaturních syntaxových ukázek
  - Bonusové úkoly pro mistry
  - Povzbuzující heslo na závěr (např. `Kódování zdar, weboví inženýři!`)
- **Tělo HTML**:
  - Sémantická struktura, přehledné nadpisy `<h1>`, `<h2>` odpovídající úrovním
  - Jasné třídy a id selektorů odpovídající zadání
  - Výchozí načtení vzorového souboru (s možností jednoduchého přepnutí na studentskou verzi)

#### Vzorová šablona komentáře v `index.html`:
```html
<!-- 
======================================================================
PROJEKT: INTERAKTIVNÍ LABORATOŘ – [NÁZEV TÉMATU]
Tvým úkolem je vytvořit...

Cílem je pochopit:
- jak funguje [princip A]
- jak správně použít [princip B]
- jak kombinovat [vlastnost 1, 2 a 3]
- jak řešit praktické situace z webového vývoje

[DŮLEŽITÉ UPOZORNĚNÍ: např. Nepoužívej externí knihovny / Nepoužívej JS]

======================================================================

🥉 ÚROVEŇ 1: Základní principy ([stručný souhrn])
----------------------------------------------------------------------
1. Najdi prvek s třídou/selektorem "...".
2. Proveď základní operaci...
Ukázka:
[stručný kus kódu s nápovědou]

🥈 ÚROVEŇ 2: Pokročilá práce ([stručný souhrn])
----------------------------------------------------------------------
1. Najdi prvek...
2. Implementuj složitější chování / validaci...
Ukázka:
[stručný kus kódu s nápovědou]

🥇 ÚROVEŇ 3: Praktický scénář / Mini-projekt ([stručný souhrn])
----------------------------------------------------------------------
1. Vytvoř funkční komponentu...
2. Propoj jednotlivé části do uceleného celku...
Ukázka:
[stručný kus kódu s nápovědou]

💎 BONUS PRO MISTRY:
----------------------------------------------------------------------
- Výzva 1: ...
- Výzva 2: ...
- Výzva 3: ...

======================================================================
Kódování zdar, [role]!
======================================================================
-->
```

---

### B. Soubor `styles.css`
- Čistý, moderní a dobře čitelný kód s rozdělením sekcí pomocí výrazných komentářů:
  ```css
  /* ============================
     ÚROVEŇ 1 – Základní část
  ============================ */
  ```
- Nastavení základního box-sizingu a fontů (`system-ui`, `Arial`, apod.).
- Odpovídá přesně třídám v HTML.

---

### C. Soubory řešení vs. Studentská verze

#### 1. Pro JavaScript (`script.js` vs. `script-students.js`)
- **`script.js`**: Kompletní a plně odladěný kód rozdělený do sekcí podle úrovní (Úroveň 1, Úroveň 2, Úroveň 3, Bonus).
- **`script-students.js`**: 
  - Zachovává selektory, posluchače událostí nebo základní signatury funkcí.
  - Vnitřky funkcí obsahují komentáře `// TODO: ...` a zakomentované ukázky kódu s vysvětlením parametrů.

#### 2. Pro CSS (`styles.css` vs. `styles-students.css`)
- **`styles.css`**: Všechna pravidla, animace a responzivita hotová.
- **`styles-students.css`**: Vynechaná těla klíčových selektorů, ponechána základní geometrie a layout, vloženy nápovědy a `/* TODO: ... */`.

---

### D. Soubor `README.md`
Musí přesně dodržovat následující osnovu:
1. **Název projektu** (jako H1)
2. **Úvodní popis projektu** a cíl cvičení (pro koho je určeno a jaké praktické dovednosti předává)
3. **Seznam 3 úrovní obtížnosti**
4. **🧩 Struktura projektu** (ASCII strom souborů)
5. **🚀 Jak projekt použít** (krokový návod pro studenta: otevření, volba studentské verze, postup dle zadání)
6. **🎯 Co si uživatel osvojí** (odrážkový přehled konkrétních znalostí)
7. **⚙️ Použité technologie / Požadavky** (např. moderní prohlížeč, vanilla JS, bez nutnosti instalace)
8. **📜 Licence**: MIT (viz LICENSE)
9. **✉️ Autor**: Jakub Březa (Vlk samotář) s odkazem `[VlkSamotar.cz](https://vlksamotar.cz) | Informatika | Trading | Elektrotechnika`

---

### E. Soubor `LICENSE`
Standardní MIT licence:
```text
MIT License

Copyright (c) 2026 Jakub Březa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

## 4. ILUSTRATIVNÍ PŘÍKLAD ZADÁNÍ A STRUKTURY PRO TÉMA „COOKIES V JAVASCRIPTU“

Pokud přijde pokyn: *„Vytvoř aplikaci na téma Cookies v JS...“*, AI vytvoří:

- **Úroveň 1**: Nastavení jednoduché session cookie (`document.cookie = "username=Jan; path=/; SameSite=Lax"`) a zobrazení celé hodnoty `document.cookie`.
- **Úroveň 2**: Nastavení cookie s expirací (`max-age` / `expires`), bezpečná práce (`Secure`, `SameSite=Strict`), smazání cookie (nastavením max-age do minulosti) a napsání pomocné funkce `getCookie(name)`.
- **Úroveň 3 (Mini-projekt)**: Funkční cookie lišta (Cookie Consent Banner), která si pamatuje volbu uživatele (např. `consent=accepted`, trvání 30 dní) a při příští návštěvě se již nezobrazí.
- **Bonus**: Tmavý režim (Dark/Light mode) uložený v cookie, parsování všech cookies do přehledné tabulky v UI.

---

## 5. KONTROLNÍ SEZNAM (CHECKLIST) PRO AI PŘED ODESLÁNÍM

Před odesláním výsledného kódu si ověř:
- [ ] Jsou v HTML hlavičkovém komentáři všechny 3 úrovně + bonus + ukázky kódu?
- [ ] Jsou vytvořeny dva soubory pro studenty vs. hotové řešení (`script.js` / `script-students.js` nebo `styles.css` / `styles-students.css`)?
- [ ] Neobsahuje projekt žádné zbytečné technologie navíc (např. JS u čistě CSS úkolu)?
- [ ] Byly v podkladech nalezeny chyby a jsou v odpovědi srozumitelně vysvětleny?
- [ ] Obsahuje README.md povinnou strukturu, strom souborů a údaje o autorovi (Jakub Březa / VlkSamotar.cz)?
- [ ] Obsahuje LICENSE rok 2026 a jméno Jakuba Březy?

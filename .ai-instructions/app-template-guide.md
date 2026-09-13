# Instrukční manuál pro AI: Tvorba výukových interaktivních playgroundů

Tento dokument slouží jako závazná systémová instrukce pro tvorbu výukových aplikací a cvičení pro studenty (např. HTML, CSS, JavaScript, Web API atd.).

Kdykoliv dostaneš zadání typu:
> *„Vytvoř mi ukázkovou aplikaci pro studenty na téma [TÉMA], podklady najdeš v [PŘÍLOZE/PREZENTACI] a dále postupuj dle svých znalostí. Pokud uvidíš věcné chyby, neopakuj je, použij správnou verzi a upozorni na to.“*

musíš vygenerovat kompletní projekt přesně podle následující metodiky, pedagogických principů a formátu.

---

## 1. ZÁKLADNÍ PRINCIPY A DIDAKTICKÁ FILOZOFIE

1. **Minimální kognitivní zátěž**:
   - Používej jen technologie přímo související s tématem.
   - Pokud je téma čisté CSS (Transitions, Keyframes, Flexbox), **nepoužívej JavaScript**.
   - Pokud je téma JavaScriptové API (Cookies, Fetch, LocalStorage), udržuj CSS jednoduché, čisté a přehledné.
2. **Korekce chyb v podkladech**:
   - Pokud vstupní materiály (prezentace, poznámky) obsahují zastaralé praktiky (např. `var`, nepodporované syntaxe, chybějící `SameSite` u cookies), použij moderní standardy a ve své odpovědi na to explicitně upozorni.
3. **Didaktická gradace (3 úrovně + bonus)**:
   - Každé cvičení je rozděleno do tří úrovní obtížnosti, aby se zapojil slabší student i pokročilý:
     - 🥉 **Úroveň 1 (Základní)**: Izolovaný, nejjednodušší možný koncept (např. nastavení cookie, jednoduchý translate, změna barvy).
     - 🥈 **Úroveň 2 (Pokročilá)**: Kombinace více vlastností, parametrů či logických stavů (např. expirace cookie a čtení, loop + alternate, transformace tvaru).
     - 🥇 **Úroveň 3 (Komplexní / Mini-projekt)**: Reálný scénář, mini-galerie, praktické UI prvky (např. správa cookie lišty s preferencemi, interaktivní grid).
     - 💎 **Bonus pro mistry**: Výzvy a náměty pro rychlé studenty.
4. **Oddělení řešení a studentské verze**:
   - Vždy existuje soubor se vzorovým řešením a soubor určený pro studenty (s vynechanými částmi, komentáři `TODO` a ukázkami syntaxe).

---

## 2. POVINNÁ STRUKTURA SOUBORŮ V PROJEKTU

Projekt musí mít jasnou a přehlednou strukturu. Návrh souborů:

```text
index.html              # Vstupní stránka s detailním zadáním v komentáři
styles.css              # Přehledný, jednoduchý styling
script.js               # Plně funkční referenční řešení (pokud je tématem JS)
script-students.js      # Studentská verze s TODO a nápovědami (pokud je tématem JS)
README.md               # Kompletní průvodce, cíle, struktura a licence
LICENSE                 # MIT Licence (Jakub Březa)
```

*(Poznámka: U čistě CSS témat je logika studentské verze vložena např. do `styles-students.css` nebo přímo zakomentována v CSS/HTML).*

---

## 3. DETAILNÍ STRUKTURA A OBSAH JEDNOTLIVÝCH SOUBORŮ

### A. Hlavní soubor `index.html`
- **Hlavičkový komentář**: Hned na začátku souboru (před `<!DOCTYPE html>`) musí být masivní komentářový blok se zadáním:
  - Název projektu
  - Cíl cvičení (co se má student naučit a čemu se vyhnout)
  - Zadání pro Úroveň 1, 2 a 3 včetně miniaturních syntaxových ukázek
  - Bonusové úkoly pro mistry
  - Povzbuzující heslo na závěr (např. `Kódování zdar!`)
- **Tělo HTML**:
  - Přehledné nadpisy `<h1>`, `<h2>` odpovídající úrovním
  - Jasné třídy a id selektorů odpovídající zadání
  - Na konci volitelně přepnutí / připojení studentského nebo plného skriptu

#### Příklad hlavičkového komentáře v HTML:
```html
<!-- 
======================================================================
PROJEKT: INTERAKTIVNÍ LABORATOŘ – [NÁZEV TÉMATU]
Tvým úkolem je...

Cílem je pochopit:
- princip A...
- princip B...

======================================================================

🥉 ÚROVEŇ 1: Základní principy (...)
----------------------------------------------------------------------
1. Najdi prvek...
2. Proveď akci...
Ukázka kódu:
...

🥈 ÚROVEŇ 2: Pokročilá práce (...)
----------------------------------------------------------------------
1. ...
Ukázka kódu:
...

🥇 ÚROVEŇ 3: Praktický scénář (...)
----------------------------------------------------------------------
1. ...
Ukázka kódu:
...

💎 BONUS PRO MISTRY:
----------------------------------------------------------------------
- Výzva 1...
- Výzva 2...

======================================================================
Kódování zdar!
======================================================================
-->
```

---

### B. Soubor `styles.css`
- Čistý, moderní, č
# Interaktivní laboratoř animací – Anime.js Playground

Tento projekt slouží jako praktická ukázka práce s knihovnou **anime.js** a tvorby interaktivních animací pomocí funkce `anime()` v JavaScriptu.

Studenti si zde mohou vyzkoušet různé typy animací — změny pozice, velikosti, tvaru, barvy, průhlednosti, rotace, sekvenční animace pomocí timeline a mnoho dalšího.

Cílem projektu je pochopit rozdíl mezi:
- **CSS transition / keyframes** → animace řízené CSS
- **JavaScript animacemi pomocí anime.js** → animace řízené skriptem, s větší kontrolou, možností řetězení, timeline, fyzikálních křivek a komplexních efektů

Projekt obsahuje tři úrovně obtížnosti:
1. **Základní box** – jednoduché animace (translate, scale, opacity)  
2. **Pokročilý box** – rotace, změna tvaru, loop, direction  
3. **Mini galerie** – více prvků, každý s jiným typem animace

Součástí HTML je rozsáhlé komentářové zadání, které vede uživatele krok za krokem.  
JavaScript existuje ve dvou verzích:
- **hotová verze** (`script.js`)
- **studentská verze** (`script-students.js`), kde si studenti doplňují animace sami

---

## 🧩 Struktura projektu

```
    index.html
    README.md
    script-students.js
    script.js
    styles.css
```

---

## 🚀 Jak projekt použít

1. Otevři soubory v libovolném editoru nebo na CodePen.io  
2. Pro studijní účely použij **studentskou verzi JS**  
3. Postupuj podle zadání v HTML komentáři  
4. Experimentuj s různými hodnotami `translate`, `rotate`, `scale`, `opacity`, `backgroundColor`, `borderRadius`, `duration`, `easing` atd.  
5. Zkoušej i pokročilé funkce:
   - `anime.timeline()`
   - `loop`
   - `direction: 'alternate'`
   - sekvenční animace více prvků

---

## 🎯 Co si uživatel osvojí

- práci s funkcí `anime()`  
- animace transformací: `translate`, `rotate`, `scale`  
- animace vizuálních vlastností: `opacity`, `backgroundColor`, `borderRadius`  
- tvorbu interaktivních UI prvků pomocí JavaScriptu  
- použití timeline pro sekvenční animace  
- rozdíl mezi CSS animacemi a JS animacemi  
- práci s událostmi (`click`, `mousedown`, `mouseup`)  
- tvorbu hravých efektů a mikrointerakcí

---

## 📦 Knihovna anime.js

Projekt používá anime.js přes CDN, takže není potřeba instalovat žádné balíčky:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

---

## 📜 Licence

Projekt je dostupný pod licencí MIT (viz soubor LICENSE).

---

## ✉️ Autor  
**Jakub Březa (Vlk samotář)**

[VlkSamotar.cz](https://vlksamotar.cz) | Informatika | Trading | Elektrotechnika

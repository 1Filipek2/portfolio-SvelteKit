<script>
  import { onMount } from "svelte";

  let fadeIn = false;
  let lang = "en";
  let skillsOpen = [false, false, false, false, false];

  const translations = {
    en: {
      about: `Hi! I'm a developer from Slovakia. I focus on low-level programming, networking, and web development. I mainly work with C, C++, HTML, CSS, and PHP, and I'm currently diving deeper into JavaScript. I love learning new tech, contributing to open source, and building efficient, practical tools. Feel free to reach out if you'd like to connect or collaborate!`,
      skills: "Skills",
      web: `I have a solid grasp of HTML and CSS, and I'm currently learning JavaScript to expand my frontend skills. I also have experience with PHP, where I learned to create and manage databases, as well as write backend scripts for dynamic websites. Over the years, I've worked on various projects, from simple personal pages to more complex web applications. I'm always eager to learn new technologies and improve my workflow.`,
      low: `My main experience is with C and C++, which I use for systems programming, embedded projects, and performance-critical applications. I also have beginner experience with C#, which I’m gradually exploring. I enjoy learning how computers work under the hood and writing code that interacts directly with the operating system or hardware.`,
      linux: `Linux has been my daily driver for more than 2 years, and I’m passionate about open-source software. I’m comfortable working with a variety of distributions, especially Fedora Server, where I’ve set up automated deployments and managed server environments. I’m always looking for ways to make systems more efficient, secure, and reliable.`,
      net: `I have a solid grasp of computer networking, including the OSI and TCP/IP models, key protocols (Ethernet, IP, TCP, UDP, DNS, DHCP), and both IPv4 and IPv6 addressing. I can configure and troubleshoot routers, switches, and basic network services on Linux. My skills cover subnetting, routing, VLANs, and essential network security concepts.`,
      game: `I enjoy experimenting with game development, mainly using C++. As a semester project, I created a console-based RPG game in C++, where I focused on game logic, turn-based mechanics, and user interaction in the terminal. I'm interested in exploring more advanced frameworks and engines in the future to expand my skills beyond console applications.`,
    },
    sk: {
      about: `Ahoj! Som vývojár zo Slovenska s vášňou pre čistý kód a chytré riešenia. Zameriavam sa na nízkoúrovňové programovanie, siete a web development. Najviac pracujem s jazykmi C, C++, HTML, CSS a PHP, aktuálne sa viac venujem aj JavaScriptu. Rád sa učím nové technológie, prispievam do open source a budujem efektívne, praktické nástroje. Ak chceš nadviazať kontakt alebo spolupracovať, neváhaj ma osloviť!`,
      skills: "Skills",
      web: `Mám dobré základy v HTML a CSS a momentálne sa učím JavaScript, aby som rozšíril svoje frontendové schopnosti. Mám aj skúsenosti s PHP, kde som sa naučil vytvárať a spravovať databázy a písať backendové skripty pre dynamické weby. Počas rokov som pracoval na rôznych projektoch – od jednoduchých osobných stránok až po komplexnejšie webové aplikácie. Neustále sa snažím učiť nové technológie a zlepšovať svoj workflow.`,
      low: `Moje hlavné skúsenosti sú s jazykmi C a C++, ktoré používam na systémové programovanie, embedded projekty a výkonnostne náročné aplikácie. Mám aj začiatočnícke skúsenosti s C#, ktorý postupne objavujem. Baví ma učiť sa, ako počítače fungujú "pod kapotou" a písať kód, ktorý komunikuje priamo s operačným systémom alebo hardvérom.`,
      linux: `Linux používam ako svoj hlavný operačný systém už viac ako 2 roky a som nadšenec open-source softvéru. Som zvyknutý pracovať s rôznymi distribúciami, najmä s Fedora Serverom, kde som nastavoval automatizované nasadzovanie a spravoval serverové prostredia. Neustále hľadám spôsoby, ako robiť systémy efektívnejšie, bezpečnejšie a spoľahlivejšie.`,
      net: `Mám dobré základy v počítačových sieťach, vrátane modelov OSI a TCP/IP, kľúčových protokolov (Ethernet, IP, TCP, UDP, DNS, DHCP) a adresovania IPv4 aj IPv6. Viem konfigurovať a riešiť problémy so smerovačmi, prepínačmi a základnými sieťovými službami v Linuxe. Ovládam subnetovanie, smerovanie, VLANy a základné koncepty sieťovej bezpečnosti.`,
      game: `Rád experimentujem s tvorbou hier, najmä v jazyku C++. Ako semestrálny projekt som vytvoril konzolovú RPG hru v C++, kde som sa zameral na hernú logiku, ťahové mechaniky a interakciu v termináli. Do budúcna by som rád preskúmal aj pokročilejšie frameworky a enginy, aby som rozšíril svoje schopnosti aj mimo konzolových aplikácií.`,
    },
  };

  const skillTitles = [
    { en: "Web Development", sk: "Web Development" },
    { en: "Low Level Development", sk: "Low Level Development" },
    { en: "Linux Administration", sk: "Linux Administration" },
    { en: "Networking", sk: "Networking" },
    { en: "Game Development", sk: "Game Development" },
  ];

  onMount(() => {
    setTimeout(() => {
      fadeIn = true;
      document.body.classList.add("fade-in");
    }, 400);
  });

  function toggleSkill(idx) {
    skillsOpen[idx] = !skillsOpen[idx];
  }
</script>

<div class="bg-anim-1"></div>
<div class="bg-anim-2"></div>
<div class="bg-anim-3"></div>
<div
  id="black-overlay"
  style="opacity: {fadeIn
    ? 0
    : 1}; pointer-events: none; transition: opacity 2s;"
></div>
<div class="lang-switch">
  <button
    class:active={lang === "en"}
    on:click={() => (lang = "en")}
    id="en-btn">EN</button
  >
  <button
    class:active={lang === "sk"}
    on:click={() => (lang = "sk")}
    id="sk-btn">SK</button
  >
</div>
<div class="container">
  <h1>Filip Rybakov</h1>
  <section class="about">
    <p>{translations[lang].about}</p>
  </section>
  <section class="skills-section">
    <h2>Skills</h2>
    <div class="skills-list">
      {#each skillTitles as title, i}
        <div class="skill">
          <div
            class="skill-title"
            class:open={skillsOpen[i]}
            on:click={() => toggleSkill(i)}
          >
            &gt; {title[lang]}
          </div>
          <div
            class="skill-desc"
            class:show={skillsOpen[i]}
            class:hide={!skillsOpen[i]}
          >
            {translations[lang][Object.keys(translations[lang]).slice(2)[i]]}
          </div>
        </div>
      {/each}
    </div>
    <h2 class="references-title">References</h2>
    <div class="references-coming-soon">Coming soon...</div>
    <div class="contact-links">
      <a href="mailto:rybakovfilip12@gmail.com" target="_blank" title="Gmail">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Gmail</title>
          <path
            fill="currentColor"
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          />
        </svg>
      </a>
      <a href="https://github.com/1Filipek2" target="_blank" title="GitHub">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/filip-rybakov-13a28b323/"
        target="_blank"
        title="LinkedIn"
      >
        <svg
          class="icon"
          viewBox="0 0 260.366 260.366"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <g fill="currentColor">
            <circle cx="34.703" cy="34.884" r="34.704" />
            <rect
              x="4.166"
              y="83.531"
              width="56.905"
              height="176.183"
              rx="4.489"
            />
            <path
              d="M193.924 81.557c-19.064 0-35.817 5.805-46.04 15.271V88.02a4.489 4.489 0 0 0-4.489-4.489H93.424a4.489 4.489 0 0 0-4.489 4.489v167.675a4.489 4.489 0 0 0 4.489 4.488h52.044a4.489 4.489 0 0 0 4.489-4.488v-82.957c0-23.802 4.378-38.555 26.227-38.555 21.526.026 23.137 15.846 23.137 39.977v81.535a4.489 4.489 0 0 0 4.49 4.488h52.068a4.489 4.489 0 0 0 4.488-4.488v-91.977c0-37.089-7.552-81-66.442-81z"
            />
          </g>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/1findo2/"
        target="_blank"
        title="Instagram"
      >
        <svg
          class="icon"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Instagram</title>
          <path
            fill="currentColor"
            d="M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388-.665.668-1.075 1.337-1.38 2.127-.295.764-.496 1.637-.552 2.914C.008 8.843-.005 9.254 0 12.513c.006 3.259.021 3.667.083 4.947.061 1.277.264 2.148.564 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.074 2.129 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.081 1.28-.061 2.147-.265 2.91-.563.789-.309 1.458-.72 2.123-1.388.665-.668 1.075-1.338 1.38-2.128.296-.763.497-1.636.552-2.912.056-1.281.069-1.69.063-4.948-.006-3.258-.021-3.667-.082-4.947-.061-1.28-.264-2.149-.563-2.912-.308-.789-.72-1.457-1.388-2.123C21.298 1.33 20.628.921 19.838.616c-.763-.295-1.635-.497-2.913-.552C15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084zm.14 21.693c-1.17-.051-1.805-.245-2.229-.408-.56-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.265-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.476-.96.895-1.382.419-.422.818-.681 1.378-.9.423-.165 1.058-.361 2.227-.417 1.266-.06 1.645-.072 4.848-.079 3.203-.007 3.584.005 4.85.061 1.169.051 1.805.245 2.228.408.561.216.96.475 1.382.895.422.419.682.818.901 1.379.165.422.362 1.056.417 2.226.06 1.266.074 1.645.08 4.848.006 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.229-.216.56-.476.96-.895 1.381-.419.422-.818.681-1.378.9-.422.165-1.058.362-2.226.417-1.266.06-1.645.072-4.849.079-3.205.007-3.583-.006-4.848-.061zm9.783-16.191a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442zm-11.115 6.426c.007 3.403 2.77 6.156 6.173 6.149 3.403-.007 6.157-2.77 6.151-6.173-.007-3.403-2.771-6.157-6.174-6.15-3.403.007-6.156 2.771-6.15 6.174zm2.161-.004a4 4 0 1 1 4.008 3.992A3.999 3.999 0 0 1 8 12.008z"
          />
        </svg>
      </a>
    </div>
  </section>
  <footer>Made with SvelteKit, Filip Rybakov &copy; 2025.</footer>
</div>

<style src="/styles/main.css"></style>

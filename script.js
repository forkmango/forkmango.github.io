      // ──────────────────────────────────────────
      //  DATA — remplace les placeholders ici
      // ──────────────────────────────────────────
      const SECTIONS = {
        intro: {
          query: "Profil",
          stats: "Environ 1 résultat (0,00042 seconde)",
          featured: {
            label: "Profil",
            title: "Qui suis-je ?",
            text: "Étudiante en informatique passionné par l'IA, les bases de données et les systèmes réseaux.",
          },
          results: [
            {
              domain: "Github",
              letter: "P",
              url: "Github",
              title: "[Ton Prénom Nom] – Développeur & [Titre]",
              snippet:
                "[Placeholder] Résumé de ta situation actuelle. Université, poste, ville. Ce que tu cherches. <span class='highlight'>[Disponible pour des stages / alternances / CDI]</span> à partir de [date].",
              date: "Mis à jour récemment · ",
              sitelinks: [
                {
                  text: "Mon parcours",
                  desc: "Formation académique et expériences",
                },
                { text: "Projets", desc: "Mes réalisations techniques" },
                { text: "Skills", desc: "Langages et outils maîtrisés" },
                { text: "Contact", desc: "Envoyer un message" },
              ],
            },
            {
              domain: "linkedin.com",
              letter: "in",
              color: "#0077B5",
              url: "linkedin.com › in › nina-schoellhammer",
              title: "Nina SCHOELLHAMMER",
              snippet:
                "Lieu : Orsay · 282 relations sur LinkedIn. Consultez le profil de Nina SCHOELLHAMMER sur LinkedIn, une communauté professionnelle d'un milliard de membres.",
            },
          ],
          paa: [
            {
              q: "Quelles sont mes disponibilités ?",
              a: "Disponible à partir de septembre 2026 pour une <b>alternance<b>. N'hésitez pas à me contacter pour en discuter.",
            },
            {
              q: "Quels langages de programmation je maîtrise ?",
              a: "Voir la section Skills pour la liste complète.",
            },
            {
              q: "Comment me contacter ?",
              a: "Par email à ninachoellhammer@outlook.com ou via LinkedIn. Je réponds généralement sous 24h.",
            },
          ],
          related: [
            "Parcours académique et expériences",
            "Projets",
            "Stage 2026",
            "Skills"
          ],
          card: {
            emoji: "👤",
            name: "[Ton Prénom Nom]",
            subtitle: "Étudiant · [École] · [Ville]",
            desc: "[Placeholder] Bio courte. 2-3 phrases sur ta personnalité, tes valeurs, ce qui te motive dans la tech ou ton domaine.",
            rows: [
              { label: "Formation", value: "[École, Université]" },
              { label: "Année", value: "[ex. M1 / L3 / 3ème année]" },
              { label: "Localisation", value: "[Ville, Pays]" },
              { label: "Email", value: "[email@exemple.com]" },
            ],
            socials: ["LinkedIn", "GitHub", "Email"],
          },
        },

        parcours: {
          query: "Parcours académique [Nom]",
          stats: "Environ 4 résultats (0,00031 seconde)",
          featured: {
            label: "Éducation · portfolio.dev",
            title: "Formation & Expériences",
            text: "[Placeholder] Résumé de ton parcours. École d'ingénieur / université, spécialisation, années. Éventuellement un mot sur tes expériences pro.",
          },
          results: [
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › parcours › formation",
              title: "Formation académique – [Ton Nom]",
              snippet:
                "📚 <span class='highlight'>[20XX–20XX] [Diplôme], [École / Université]</span> – [Ville]. Spécialisation en [domaine]. Mention [résultat]. Cours principaux : [matières].",
            },
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › parcours › experiences",
              title: "Expériences professionnelles – [Ton Nom]",
              snippet:
                "💼 <span class='highlight'>[20XX] Stage chez [Entreprise]</span> – [Ville] · [Durée]. Mission : [description]. Technologies utilisées : [stack]. <br>💼 [20XX] [Autre expérience]...",
            },
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › parcours › certifications",
              title: "Certifications & Formations complémentaires",
              snippet:
                "🏆 [Placeholder] Liste tes certifications, MOOC, formations en ligne. Ex : [Certification AWS, Google Analytics, TOEIC score]...",
            },
          ],
          paa: [
            {
              q: "Dans quelle école j'étudie ?",
              a: "[Placeholder] J'étudie à [Nom de l'école / université] depuis [année], en [spécialité].",
            },
            {
              q: "Ai-je des expériences à l'international ?",
              a: "[Placeholder] [Oui/Non]. [Si oui : décris ici un séjour, échange, ou expérience à l'étranger.]",
            },
            {
              q: "Quels sont mes projets académiques marquants ?",
              a: "[Placeholder] Parmi mes projets d'école, je retiens [projet] qui m'a permis d'apprendre [compétence].",
            },
          ],
          related: [
            "[Nom] formation ingénieur",
            "[Nom] expérience stage",
            "[Nom] certifications",
            "parcours [domaine] France",
          ],
          card: {
            emoji: "🎓",
            name: "Parcours",
            subtitle: "Formation & Expériences",
            desc: "[Placeholder] Vue d'ensemble de ton cursus. Grandes étapes chronologiques.",
            rows: [
              { label: "Diplôme", value: "[Titre visé]" },
              { label: "École", value: "[Nom de l'école]" },
              { label: "Période", value: "[20XX – 20XX]" },
              { label: "Spé.", value: "[Spécialisation]" },
            ],
            socials: ["CV PDF", "LinkedIn", "Email"],
          },
        },

        projets: {
          query: "Projets [Nom] – Réalisations",
          stats: "Environ 6 résultats (0,00028 seconde)",
          featured: {
            label: "Projets · portfolio.dev",
            title: "Mes projets & réalisations",
            text: "[Placeholder] Résumé de tes projets. Technologies favorites, types de projets (web, data, IA, mobile...). Lien GitHub si pertinent.",
          },
          results: [
            {
              domain: "github.com",
              letter: "G",
              color: "#333",
              url: "github.com › [ton-username] › [projet-1]",
              title: "[Projet 1] – [Description courte]",
              snippet:
                "⭐ [Placeholder] Description du projet 1. Technologies : <span class='highlight'>[React, Node.js, etc.]</span>. Contexte : personnel / scolaire / hackathon. Résultat : [impact, démo, users...]",
            },
            {
              domain: "github.com",
              letter: "G",
              color: "#333",
              url: "github.com › [ton-username] › [projet-2]",
              title: "[Projet 2] – [Description courte]",
              snippet:
                "🚀 [Placeholder] Description du projet 2. Technologies : <span class='highlight'>[Python, TensorFlow, etc.]</span>. [Résultat, métriques, lien démo si dispo]",
            },
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › projets › [projet-3]",
              title: "[Projet 3] – [Description courte]",
              snippet:
                "💡 [Placeholder] Description du projet 3. Problème résolu, approche technique, apprentissages. <span class='highlight'>[Prix / reconnaissance éventuelle]</span>.",
            },
          ],
          paa: [
            {
              q: "Quel est mon projet le plus ambitieux ?",
              a: "[Placeholder] Mon projet le plus complexe est [nom] car [raison : scalabilité, algo, équipe...].",
            },
            {
              q: "Est-ce que je contribue à l'open source ?",
              a: "[Placeholder] [Oui/Non]. [Si oui : décris tes contributions, repos, communautés.]",
            },
            {
              q: "Puis-je voir mes projets en ligne ?",
              a: "[Placeholder] Oui ! Retrouve toutes mes démos et repos sur github.com/[username] ou sur [lien portfolio].",
            },
          ],
          related: [
            "[Nom] GitHub projets",
            "[Nom] application web",
            "[Nom] projet IA",
            "portfolio développeur [domaine]",
          ],
          card: {
            emoji: "🛠️",
            name: "Projets",
            subtitle: "[X] projets · [X] repos publics",
            desc: "[Placeholder] Technologies de prédilection, type de projets, philosophie de développement.",
            rows: [
              { label: "Projets", value: "[X] réalisés" },
              { label: "Stack fav.", value: "[ex. React / Python]" },
              { label: "GitHub", value: "github.com/[username]" },
              { label: "Hackathons", value: "[X] participations" },
            ],
            socials: ["GitHub", "Portfolio", "Email"],
          },
        },

        skills: {
          query: "Skills & compétences [Nom]",
          stats: "Environ 3 résultats (0,00019 seconde)",
          featured: {
            label: "Compétences · portfolio.dev",
            title: "Mes compétences techniques & soft skills",
            text: "[Placeholder] Vue d'ensemble de tes compétences. Langages maîtrisés, frameworks, outils DevOps, bases de données. Niveau de maîtrise général.",
          },
          results: [
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › skills › langages",
              title: "Langages de programmation – [Ton Nom]",
              snippet:
                "💻 <span class='highlight'>Avancé :</span> [Python, JavaScript, Java...] · <span class='highlight'>Intermédiaire :</span> [C++, Rust, Go...] · <span class='highlight'>Notions :</span> [Haskell, Erlang...]",
            },
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › skills › outils",
              title: "Frameworks, outils & DevOps",
              snippet:
                "🔧 <span class='highlight'>Frontend :</span> [React, Vue, TailwindCSS] · <span class='highlight'>Backend :</span> [Node, Django, FastAPI] · <span class='highlight'>DevOps :</span> [Docker, Git, CI/CD, AWS...]",
            },
            {
              domain: "portfolio.dev",
              letter: "P",
              url: "portfolio.dev › skills › soft-skills",
              title: "Soft skills & langues",
              snippet:
                "🌍 <span class='highlight'>Langues :</span> Français (natif), Anglais ([niveau, ex. C1]), [autres]. <span class='highlight'>Soft skills :</span> travail en équipe, autonomie, curiosité, [autres].",
            },
          ],
          paa: [
            {
              q: "Quel est mon niveau en anglais ?",
              a: "[Placeholder] Mon niveau est [niveau, ex. C1/B2]. TOEIC : [score] / 990. [Expériences anglophones : cours, voyages, projets...]",
            },
            {
              q: "Je suis plutôt frontend ou backend ?",
              a: "[Placeholder] Je me considère [full-stack / orienté backend / passionné frontend]. Ma préférence va vers [raison].",
            },
            {
              q: "Est-ce que j'apprends vite de nouvelles technos ?",
              a: "[Placeholder] Oui, par exemple j'ai appris [techno] en [durée] pour [projet]. La curiosité est l'une de mes forces.",
            },
          ],
          related: [
            "[Nom] Python niveau",
            "[Nom] React portfolio",
            "développeur [domaine] compétences",
            "[Nom] CV télécharger",
          ],
          card: {
            emoji: "⚡",
            name: "Skills",
            subtitle: "Compétences techniques & humaines",
            desc: "[Placeholder] Ce qui te différencie : une compétence rare, une combinaison unique, une façon d'apprendre.",
            rows: [
              { label: "Langages", value: "[X] maîtrisés" },
              { label: "Frameworks", value: "[liste courte]" },
              { label: "Langues", value: "[ex. FR, EN, ES]" },
              { label: "Certifs", value: "[ex. AWS, TOEIC]" },
            ],
            socials: ["CV PDF", "GitHub", "LinkedIn"],
          },
        },
      };

      const SUGGESTIONS = [
        {
          key: "intro",
          icon: "👤",
          label: "Prénom Nom – qui suis-je ?",
          tag: "Intro",
        },
        {
          key: "parcours",
          icon: "🎓",
          label: "Parcours académique & expériences",
          tag: "Parcours",
        },
        {
          key: "projets",
          icon: "🛠️",
          label: "Projets & réalisations",
          tag: "Projets",
        },
        {
          key: "skills",
          icon: "⚡",
          label: "Skills & compétences",
          tag: "Skills",
        },
      ];

      // ──────────────────────────────────────────
      //  SEARCH INPUT — autocomplete
      // ──────────────────────────────────────────
      function setupSearchBar(inputId, barId, dropdownId, onSelect) {
        const input = document.getElementById(inputId);
        const bar = document.getElementById(barId);
        const drop = document.getElementById(dropdownId);
        let activeIdx = -1;

        function renderDrop(items) {
          drop.innerHTML = items
            .map(
              (s, i) => `
      <div class="suggestion" data-key="${s.key}" tabindex="-1">
        <span class="sug-icon">${s.icon}</span>
        <span class="sug-query">${s.label}</span>
        <span class="sug-tag">${s.tag}</span>
      </div>
    `,
            )
            .join("");
          drop.querySelectorAll(".suggestion").forEach((el) => {
            el.addEventListener("mousedown", (e) => {
              e.preventDefault();
              onSelect(el.dataset.key);
            });
          });
        }

        function openDrop(items) {
          renderDrop(items);
          drop.classList.add("open");
          bar.classList.add("focused");
          activeIdx = -1;
        }
        function closeDrop() {
          drop.classList.remove("open");
          bar.classList.remove("focused");
          activeIdx = -1;
        }

        input.addEventListener("focus", () => openDrop(SUGGESTIONS));
        input.addEventListener("input", () => {
          const v = input.value.toLowerCase().trim();
          const filtered = v
            ? SUGGESTIONS.filter(
                (s) =>
                  s.label.toLowerCase().includes(v) ||
                  s.tag.toLowerCase().includes(v) ||
                  s.key.includes(v),
              )
            : SUGGESTIONS;
          if (filtered.length) openDrop(filtered);
          else closeDrop();
        });
        input.addEventListener("blur", () => setTimeout(closeDrop, 150));
        input.addEventListener("keydown", (e) => {
          const items = drop.querySelectorAll(".suggestion");
          if (e.key === "ArrowDown") {
            e.preventDefault();
            activeIdx = Math.min(activeIdx + 1, items.length - 1);
            items.forEach((el, i) =>
              el.classList.toggle("active", i === activeIdx),
            );
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            activeIdx = Math.max(activeIdx - 1, -1);
            items.forEach((el, i) =>
              el.classList.toggle("active", i === activeIdx),
            );
          } else if (e.key === "Enter") {
            if (activeIdx >= 0 && items[activeIdx]) {
              onSelect(items[activeIdx].dataset.key);
            } else {
              const v = input.value.toLowerCase().trim();
              const match = SUGGESTIONS.find(
                (s) => s.key.includes(v) || s.label.toLowerCase().includes(v),
              );
              onSelect(match ? match.key : "intro");
            }
          } else if (e.key === "Escape") {
            closeDrop();
          }
        });
      }

      // ──────────────────────────────────────────
      //  NAVIGATION
      // ──────────────────────────────────────────
      function goHome() {
        document.getElementById("page-home").style.display = "flex";
        document.getElementById("page-results").classList.remove("active");
        document.getElementById("search-input").value = "";
      }

      function doSearch(key) {
        if (key === "lucky") key = "intro";
        if (!SECTIONS[key]) key = "intro";
        showResults(key);
      }

      function showResults(key) {
        const data = SECTIONS[key];
        document.getElementById("page-home").style.display = "none";
        document.getElementById("page-results").classList.add("active");
        document.getElementById("top-search-input").value = data.query;
        renderResults(data);
        window.scrollTo(0, 0);
      }

      // ──────────────────────────────────────────
      //  RENDER RESULTS
      // ──────────────────────────────────────────
      function renderResults(data) {
        const main = document.getElementById("results-main");
        const card = document.getElementById("knowledge-card");

        // Stats
        let html = `<div class="results-stats animate-in">${data.stats}</div>`;

        // Featured snippet
        html += `
  <div class="featured-snippet animate-in" style="animation-delay:.04s">
    <div class="featured-snippet-label">${data.featured.label}</div>
    <h2>${data.featured.title}</h2>
    <p>${data.featured.text}</p>
    <div class="source-pill"><span class="favicon"></span> portfolio.dev</div>
  </div>`;

        // Regular results
        data.results.forEach((r, i) => {
          const delay = 0.06 + i * 0.04;
          const fav = `<div class="result-favicon" style="background:${r.color || "var(--g-blue)"};">${r.letter}</div>`;
          const sitelinks = r.sitelinks
            ? `
      <div class="sitelinks">
        ${r.sitelinks
          .map(
            (s) => `
          <div class="sitelink">
            <a onclick="return false">${s.text}</a>
            <p>${s.desc}</p>
          </div>`,
          )
          .join("")}
      </div>`
            : "";
          html += `
    <div class="result-item animate-in" style="animation-delay:${delay}s">
      <div class="result-source">${fav}<span class="result-domain">${r.domain}</span><span class="result-url"> › ${r.url.split(" › ").slice(1).join(" › ")}</span></div>
      <div class="result-title">${r.title}</div>
      <div class="result-snippet"><span class="result-date">${r.date || ""}</span>${r.snippet}</div>
      ${sitelinks}
    </div>`;
        });

        // People also ask
        if (data.paa && data.paa.length) {
          html += `<div class="paa-section animate-in" style="animation-delay:.2s"><div class="paa-title">Les gens demandent aussi</div>`;
          data.paa.forEach((item, i) => {
            html += `
      <div class="paa-item" id="paa-${i}">
        <div class="paa-question" onclick="togglePAA(${i})">
          ${item.q}
          <svg class="paa-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="paa-answer">${item.a}</div>
      </div>`;
          });
          html += `</div>`;
        }

        // Related searches
        if (data.related && data.related.length) {
          html += `<div class="related-section animate-in" style="animation-delay:.26s"><div class="related-title">Recherches associées</div><div class="related-grid">`;
          data.related.forEach((r) => {
            html += `
      <div class="related-item" onclick="searchRelated('${r}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        ${r}
      </div>`;
          });
          html += `</div></div>`;
        }

        main.innerHTML = html;

        // Knowledge card
        const c = data.card;
        card.innerHTML = `
    <div class="kc-image">${c.emoji}</div>
    <div class="kc-body">
      <div class="kc-name">${c.name}</div>
      <div class="kc-subtitle">${c.subtitle}</div>
      <div class="kc-desc">${c.desc}</div>
      <hr class="kc-divider">
      ${c.rows.map((r) => `<div class="kc-row"><span class="kc-label">${r.label}</span><span class="kc-value">${r.value}</span></div>`).join("")}
      <hr class="kc-divider">
      <div class="kc-socials">
        ${c.socials.map((s) => `<div class="kc-social-btn">${s}</div>`).join("")}
      </div>
    </div>`;
      }

      function togglePAA(i) {
        document.getElementById("paa-" + i).classList.toggle("open");
      }

      function searchRelated(q) {
        const match = SUGGESTIONS.find((s) => q.toLowerCase().includes(s.key));
        doSearch(match ? match.key : "intro");
      }

      function clearTopSearch() {
        document.getElementById("top-search-input").value = "";
        document.getElementById("top-search-input").focus();
      }

      // ──────────────────────────────────────────
      //  INIT
      // ──────────────────────────────────────────
      window.addEventListener("DOMContentLoaded", () => {
        setupSearchBar(
          "search-input",
          "home-search-bar",
          "autocomplete",
          doSearch,
        );
        setupSearchBar(
          "top-search-input",
          "top-search-bar",
          "top-autocomplete",
          doSearch,
        );
      });


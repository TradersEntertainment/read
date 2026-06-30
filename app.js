// Academic Layer Reader Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- Application State ---
  const state = {
    language: "tr", // Default is Turkish as requested
    mode: "cognitive", // Default is Cognitive Layer
    theme: "light", // Default is Light Theme
    depth: "full", // Default is Full Word-for-Word
    activeSection: "abstract",
    activeTab: "interactive"
  };

  // --- DOM Elements ---
  const elements = {
    body: document.body,
    readerPane: document.getElementById("reader-pane"),
    articleTitle: document.getElementById("article-title"),
    articleAuthor: document.getElementById("article-author"),
    articleAffiliation: document.getElementById("article-affiliation"),
    articleEmail: document.getElementById("article-email"),
    articleJournal: document.getElementById("article-journal"),
    articleBody: document.getElementById("article-body"),
    
    // Sidebar elements
    sidebar: document.getElementById("sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    sidebarArticleTitle: document.getElementById("sidebar-article-title"),
    sidebarArticleAuthor: document.getElementById("sidebar-article-author"),
    tocList: document.getElementById("toc-list"),
    btnOriginalPdf: document.getElementById("btn-original-pdf"),
    
    // Stats dashboard
    statReduction: document.getElementById("stat-reduction"),
    statReductionFill: document.getElementById("stat-reduction-fill"),
    statHiddenBlocks: document.getElementById("stat-hidden-blocks"),
    statTimeSaved: document.getElementById("stat-time-saved"),
    
    // Tooltip popup
    tooltip: document.getElementById("popup-tooltip"),
    tooltipBody: document.getElementById("popup-body-content"),
    tooltipCloseBtn: document.getElementById("popup-close-btn"),
    
    // Control switches
    themeToggleBtn: document.getElementById("theme-toggle"),
    sunIcon: document.querySelector(".sun-icon"),
    moonIcon: document.querySelector(".moon-icon"),
    modeButtons: document.querySelectorAll(".mode-selector .btn-control"),
    langButtons: document.querySelectorAll(".lang-selector .btn-control"),
    depthButtons: document.querySelectorAll(".depth-selector .btn-control"),
    
    // Tab selectors
    tabButtons: document.querySelectorAll(".reader-tabs .tab-btn"),
    readerHeader: document.querySelector(".reader-header")
  };

  // --- Static UI Translations ---
  const uiTranslations = {
    appTagline: {
      en: "Academic Optimizer",
      tr: "Akademik Optimizasyon"
    },
    activeArticle: {
      en: "Active Article",
      tr: "Aktif Makale"
    },
    tocTitle: {
      en: "Table of Contents",
      tr: "Metin Haritası"
    },
    statsTitle: {
      en: "Cognitive Dashboard",
      tr: "Bilişsel Gösterge"
    },
    statLabelReduction: {
      en: "Cognitive Load Reduction",
      tr: "Bilişsel Yük Azaltma"
    },
    statLabelHidden: {
      en: "Definitions Hidden",
      tr: "Gizlenen Tanım"
    },
    statLabelTime: {
      en: "Est. Time Saved",
      tr: "Kazanılan Süre"
    },
    btnPdfText: {
      en: "Full Original PDF",
      tr: "Orijinal PDF Sürümü"
    },
    controlMode: {
      en: "Reading Mode",
      tr: "Okuma Modu"
    },
    controlLang: {
      en: "Language",
      tr: "Dil"
    },
    popupTitle: {
      en: "Layer Info (Background)",
      tr: "Katman Bilgisi (Arka Plan)"
    }
  };

  // --- Words per Minute Reading Speed ---
  const WPM = 200;

  // --- Initialize Application ---
  function init() {
    setupEventListeners();
    updateTheme();
    updateLanguageUI();
    renderSidebarTOC();
    renderContent();
    calculateStats();
    setupIntersectionObserver();
  }

  // --- Bind Event Listeners ---
  function setupEventListeners() {
    // Theme toggle
    elements.themeToggleBtn.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      updateTheme();
    });

    // Language selector buttons
    elements.langButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (state.language !== lang) {
          state.language = lang;
          elements.langButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          updateLanguageUI();
          if (state.activeTab === "interactive") {
            renderContent();
          } else {
            renderFullText();
          }
          calculateStats();
        }
      });
    });

    // Reading mode buttons
    elements.modeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-mode");
        if (state.mode !== mode) {
          state.mode = mode;
          elements.modeButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          // Update body class
          elements.body.classList.remove("mode-cognitive", "mode-highlight", "mode-classic");
          elements.body.classList.add(`mode-${mode}`);
          
          calculateStats();
          closeTooltip();
        }
      });
    });

    // Sidebar toggle (Mobile)
    elements.sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      elements.sidebar.classList.toggle("sidebar-open");
    });

    // Close sidebar clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        if (!elements.sidebar.contains(e.target) && e.target !== elements.sidebarToggle) {
          elements.sidebar.classList.remove("sidebar-open");
        }
      }
    });

    // Tooltip close button
    elements.tooltipCloseBtn.addEventListener("click", closeTooltip);

    // Escape key closes tooltip
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeTooltip();
      }
    });

    // Handle scroll events in reader pane to close active tooltip
    elements.readerPane.addEventListener("scroll", closeTooltip);

    // Text depth selector buttons
    elements.depthButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const depth = btn.getAttribute("data-depth");
        if (state.depth !== depth) {
          state.depth = depth;
          elements.depthButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          renderSidebarTOC();
          renderContent();
          calculateStats();
          closeTooltip();
        }
      });
    });

    // Reader tab buttons
    elements.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        if (state.activeTab !== tab) {
          state.activeTab = tab;
          elements.tabButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          if (tab === "interactive") {
            elements.readerHeader.style.display = "block";
            // Show mode & depth controls in header (remove inactive styling)
            document.querySelectorAll(".mode-selector, .depth-selector").forEach(el => {
              el.style.opacity = "1";
              el.style.pointerEvents = "auto";
            });
            renderContent();
            calculateStats();
          } else {
            elements.readerHeader.style.display = "none";
            // Dim mode & depth controls in header to indicate they don't apply
            document.querySelectorAll(".mode-selector, .depth-selector").forEach(el => {
              el.style.opacity = "0.3";
              el.style.pointerEvents = "none";
            });
            renderFullText();
            // Reset stats display in sidebar to 0% / 0m
            elements.statReduction.textContent = "0%";
            elements.statReductionFill.style.width = "0%";
            elements.statHiddenBlocks.textContent = "0";
            elements.statTimeSaved.textContent = "0m";
          }
          closeTooltip();
        }
      });
    });
  }

  // --- Update Light/Dark Theme ---
  function updateTheme() {
    if (state.theme === "dark") {
      elements.body.classList.remove("theme-light");
      elements.body.classList.add("theme-dark");
      elements.sunIcon.style.display = "none";
      elements.moonIcon.style.display = "block";
    } else {
      elements.body.classList.remove("theme-dark");
      elements.body.classList.add("theme-light");
      elements.sunIcon.style.display = "block";
      elements.moonIcon.style.display = "none";
    }
  }

  // --- Translate Static UI Elements ---
  function updateLanguageUI() {
    const lang = state.language;

    // Apply text content based on translations
    document.querySelectorAll("[data-en]").forEach(el => {
      const enText = el.getAttribute("data-en");
      const trText = el.getAttribute("data-tr");
      el.textContent = lang === "tr" ? trText : enText;
    });

    // Update metadata from window.ARTICLE_DATA
    const meta = window.ARTICLE_DATA.metadata;
    elements.articleTitle.textContent = lang === "tr" ? meta.titleTr : meta.titleEn;
    elements.sidebarArticleTitle.textContent = lang === "tr" ? meta.titleTr : meta.titleEn;
    elements.articleJournal.textContent = lang === "tr" ? meta.journalTr : meta.journalEn;
    
    elements.articleAuthor.textContent = meta.author;
    elements.sidebarArticleAuthor.textContent = meta.author;
    elements.articleAffiliation.textContent = lang === "tr" ? meta.authorAffiliationTr : meta.authorAffiliationEn;
    
    elements.articleEmail.href = `mailto:${meta.authorEmail}`;
    elements.articleEmail.textContent = meta.authorEmail;
    
    elements.btnOriginalPdf.href = meta.pdfUrl;
    elements.btnOriginalPdf.setAttribute("target", "_blank");

    // Refresh TOC titles in sidebar
    renderSidebarTOC();
  }

  // --- Render Sidebar Table of Contents ---
  function renderSidebarTOC() {
    const lang = state.language;
    elements.tocList.innerHTML = "";

    const activeSections = window.ARTICLE_DATA[state.depth === "full" ? "sections" : "sectionsSimplified"];
    activeSections.forEach(section => {
      const li = document.createElement("li");
      li.className = `toc-item ${state.activeSection === section.id ? "active" : ""}`;
      li.setAttribute("data-section-id", section.id);

      const a = document.createElement("a");
      a.textContent = lang === "tr" ? section.titleTr : section.titleEn;
      
      a.addEventListener("click", (e) => {
        e.preventDefault();
        
        // If in full text mode, switch back to interactive reader first
        if (state.activeTab !== "interactive") {
          state.activeTab = "interactive";
          elements.tabButtons.forEach(b => b.classList.remove("active"));
          const btnInteractive = document.querySelector('.tab-btn[data-tab="interactive"]');
          if (btnInteractive) btnInteractive.classList.add("active");
          
          elements.readerHeader.style.display = "block";
          document.querySelectorAll(".mode-selector, .depth-selector").forEach(el => {
            el.style.opacity = "1";
            el.style.pointerEvents = "auto";
          });
          renderContent();
          calculateStats();
          closeTooltip();
        }
        
        const targetSection = document.getElementById(`section-${section.id}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          
          // Toggle mobile sidebar if open
          elements.sidebar.classList.remove("sidebar-open");
          
          // Set active TOC class
          document.querySelectorAll(".toc-item").forEach(item => item.classList.remove("active"));
          li.classList.add("active");
          state.activeSection = section.id;
        }
      });

      li.appendChild(a);
      elements.tocList.appendChild(li);
    });
  }

  // --- Render Dynamic Article Content ---
  function renderContent() {
    const lang = state.language;
    elements.articleBody.innerHTML = "";

    const activeSections = window.ARTICLE_DATA[state.depth === "full" ? "sections" : "sectionsSimplified"];
    activeSections.forEach(section => {
      const secEl = document.createElement("section");
      secEl.id = `section-${section.id}`;
      secEl.className = "article-section";

      // Render Section Title
      const h3 = document.createElement("h3");
      h3.textContent = lang === "tr" ? section.titleTr : section.titleEn;
      secEl.appendChild(h3);

      // Render Section Blocks
      section.blocks.forEach(block => {
        if (block.type === "core" || block.type === "background") {
          const div = document.createElement("div");
          div.id = block.id;
          div.className = block.type === "background" ? "background-info" : "core-block";
          
          // Set text depending on language selection
          div.innerHTML = lang === "tr" ? block.textTr : block.textEn;
          secEl.appendChild(div);
        } else if (block.type === "table") {
          // Render dynamic interactive tables
          const tableWrapper = renderTableBlock(block.tableName);
          secEl.appendChild(tableWrapper);
        }
      });

      elements.articleBody.appendChild(secEl);
    });

    // Re-attach triggers popup logic
    attachTriggerEvents();
  }

  // --- Render Full PDF Text Page-by-Page ---
  function renderFullText() {
    elements.articleBody.innerHTML = "";
    const rawText = state.activeTab === "full-en" ? window.ARTICLE_FULL_TEXT.en : window.ARTICLE_FULL_TEXT.tr;
    
    const div = document.createElement("div");
    div.className = "full-text-content";
    
    // Split on separator syntax like "--- PAGE 1 ---" or similar
    const parts = rawText.split(/--- PAGE (\d+) ---\r?\n?/);
    
    if (parts[0] && parts[0].trim()) {
      const p = document.createElement("p");
      p.textContent = parts[0].trim();
      div.appendChild(p);
    }
    
    for (let i = 1; i < parts.length; i += 2) {
      const pageNum = parts[i];
      const pageText = parts[i+1];
      
      const sep = document.createElement("div");
      sep.className = "full-text-page-separator";
      sep.textContent = state.language === "tr" ? `Sayfa ${pageNum}` : `Page ${pageNum}`;
      div.appendChild(sep);
      
      const pageContent = document.createElement("div");
      
      // Inject clean interactive tables instead of mangled text on table pages
      const activeTabLang = state.activeTab === "full-en" ? "en" : "tr";
      if (pageNum === "12") {
        const tableWrapper = renderTableBlock("rescissions", activeTabLang);
        pageContent.appendChild(tableWrapper);
      } else if (pageNum === "13") {
        const note = document.createElement("div");
        note.style.fontStyle = "italic";
        note.style.color = "var(--color-text-secondary)";
        note.style.textAlign = "center";
        note.style.padding = "24px 0";
        note.style.fontFamily = "var(--font-ui)";
        note.style.fontSize = "0.9rem";
        note.textContent = activeTabLang === "tr"
          ? "[Tablo 1'in devamı - Sayfa 12'deki orijinal tablo ile birleştirilmiştir]"
          : "[Continuation of Table 1 - Consolidated with the main table on Page 12]";
        pageContent.appendChild(note);
      } else if (pageNum === "20") {
        const tableWrapper = renderTableBlock("comparison", activeTabLang);
        pageContent.appendChild(tableWrapper);
      } else {
        pageContent.className = "page-text-block";
        pageContent.textContent = pageText ? pageText.trim() : "";
      }
      
      div.appendChild(pageContent);
    }
    
    elements.articleBody.appendChild(div);
  }

  // --- Render Tables dynamically ---
  function renderTableBlock(tableName, tableLang) {
    const lang = tableLang || state.language;
    const tableData = window.ARTICLE_DATA.tables[tableName];

    const wrapper = document.createElement("div");
    wrapper.className = "interactive-table-wrapper";

    const h4 = document.createElement("h4");
    h4.className = "table-title";
    h4.textContent = tableName === "rescissions" 
      ? (lang === "tr" ? "Tablo 1. İptal Edilen Başkanlık Kararnameleri" : "Table 1. Repealed Executive Orders")
      : (lang === "tr" ? "Tablo 2. ABD ve AB Çerçevelemelerinin Karşılaştırılması" : "Table 2. Comparative Framing of Climate Change");
    wrapper.appendChild(h4);

    const table = document.createElement("table");
    table.className = "interactive-table";

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    if (tableName === "rescissions") {
      trHead.innerHTML = `
        <th>${lang === "tr" ? "Yürütme Emri" : "Executive Order"}</th>
        <th>${lang === "tr" ? "Özet ve Etki" : "Summary and Impact"}</th>
      `;
      thead.appendChild(trHead);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      const rows = lang === "tr" ? tableData.tr : tableData.en;
      
      rows.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${item.order}</strong></td>
          <td>${item.summary}</td>
        `;
        // Row interaction
        tr.addEventListener("click", () => {
          tbody.querySelectorAll("tr").forEach(r => r.classList.remove("row-highlight"));
          tr.classList.add("row-highlight");
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

    } else if (tableName === "comparison") {
      trHead.innerHTML = `
        <th>${lang === "tr" ? "Çerçeveleme İşlevi" : "Framing Function"}</th>
        <th>${lang === "tr" ? "ABD / Trump Yönetimi" : "U.S. / Trump Administration"}</th>
        <th>${lang === "tr" ? "Avrupa Birliği" : "European Union"}</th>
      `;
      thead.appendChild(trHead);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      const rows = lang === "tr" ? tableData.tr : tableData.en;

      rows.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${item.function}</strong></td>
          <td>${item.us}</td>
          <td>${item.eu}</td>
        `;
        // Row interaction
        tr.addEventListener("click", () => {
          tbody.querySelectorAll("tr").forEach(r => r.classList.remove("row-highlight"));
          tr.classList.add("row-highlight");
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
    }

    wrapper.appendChild(table);

    const caption = document.createElement("p");
    caption.className = "table-caption";
    caption.textContent = lang === "tr" 
      ? "Kaynak: Yazarın çalışmaya özel geliştirdiği karşılaştırma verisi. Satıra tıklayarak vurgulayabilirsiniz."
      : "Source: Author's compiled research data. Click on any row to highlight.";
    wrapper.appendChild(caption);

    return wrapper;
  }

  // --- Attach popup logic to .info-trigger elements ---
  function attachTriggerEvents() {
    const triggers = document.querySelectorAll(".info-trigger");
    
    triggers.forEach(trigger => {
      // Mouse Enter / Hover
      trigger.addEventListener("mouseenter", (e) => {
        if (state.mode === "cognitive") {
          showTooltip(trigger, e);
        }
      });

      // Mouse Leave (with delay buffer so reader can move mouse into tooltip)
      let leaveTimeout;
      trigger.addEventListener("mouseleave", () => {
        if (state.mode === "cognitive") {
          leaveTimeout = setTimeout(() => {
            if (!elements.tooltip.matches(':hover')) {
              closeTooltip();
            }
          }, 150);
        }
      });

      elements.tooltip.addEventListener("mouseleave", () => {
        if (state.mode === "cognitive") {
          closeTooltip();
        }
      });

      // Click (for sticky/mobile reading)
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        
        if (state.mode === "cognitive") {
          showTooltip(trigger, e);
        } else if (state.mode === "highlight") {
          // In highlight mode, click will smooth scroll to the inline background block!
          const targetId = trigger.getAttribute("data-target");
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
            
            // Temporary flash effect on target block
            targetEl.style.outline = "2px solid var(--color-border-highlight)";
            targetEl.style.transition = "outline var(--transition-fast)";
            setTimeout(() => {
              targetEl.style.outline = "none";
            }, 1500);
          }
        }
      });
    });

    // Clicking anywhere else closes tooltip
    document.addEventListener("click", (e) => {
      if (!elements.tooltip.contains(e.target) && !e.target.classList.contains("info-trigger")) {
        closeTooltip();
      }
    });
  }

  // --- Show Floating Tooltip Card ---
  function showTooltip(trigger, event) {
    const targetId = trigger.getAttribute("data-target");
    const targetEl = document.getElementById(targetId);
    
    if (!targetEl) return;

    // Get background content HTML
    elements.tooltipBody.innerHTML = targetEl.innerHTML;
    
    // Render static title translation inside the popup
    const popupTitleEl = elements.tooltip.querySelector(".popup-title");
    popupTitleEl.textContent = state.language === "tr" ? uiTranslations.popupTitle.tr : uiTranslations.popupTitle.en;

    // Display first to get offset metrics
    elements.tooltip.style.display = "block";

    // Bounding rect calculations
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = elements.tooltip.getBoundingClientRect();
    const arrow = elements.tooltip.querySelector(".popup-arrow");
    
    // Position vertically: above the trigger word (with 12px margin)
    let top = triggerRect.top + window.scrollY - tooltipRect.height - 12;
    let arrowPos = "bottom";

    // Boundary check: if it goes off screen on top, show below the trigger instead
    if (triggerRect.top - tooltipRect.height - 12 < 80) {
      top = triggerRect.bottom + window.scrollY + 12;
      arrowPos = "top";
    }

    // Position horizontally: centered on the trigger word
    let left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2);
    
    // Boundary check: keep tooltip completely on the viewport horizontally
    const viewportWidth = window.innerWidth;
    const margin = 16;

    if (left < margin) {
      left = margin;
    } else if (left + tooltipRect.width > viewportWidth - margin) {
      left = viewportWidth - tooltipRect.width - margin;
    }

    // Position arrow correctly relative to tooltip body and trigger center
    const triggerCenter = triggerRect.left + (triggerRect.width / 2);
    const arrowLeft = triggerCenter - left - 6; // 6px offset for 12px width arrow

    // Apply styles
    elements.tooltip.style.top = `${top}px`;
    elements.tooltip.style.left = `${left}px`;

    arrow.style.left = `${arrowLeft}px`;
    if (arrowPos === "top") {
      arrow.style.top = "-6px";
      arrow.style.bottom = "auto";
      arrow.style.borderLeft = "1px solid rgba(255, 255, 255, 0.4)";
      arrow.style.borderTop = "1px solid rgba(255, 255, 255, 0.4)";
      arrow.style.borderRight = "none";
      arrow.style.borderBottom = "none";
      if (state.theme === "dark") {
        arrow.style.borderLeftColor = "rgba(255, 255, 255, 0.1)";
        arrow.style.borderTopColor = "rgba(255, 255, 255, 0.1)";
      }
    } else {
      arrow.style.bottom = "-6px";
      arrow.style.top = "auto";
      arrow.style.borderRight = "1px solid rgba(255, 255, 255, 0.4)";
      arrow.style.borderBottom = "1px solid rgba(255, 255, 255, 0.4)";
      arrow.style.borderLeft = "none";
      arrow.style.borderTop = "none";
      if (state.theme === "dark") {
        arrow.style.borderRightColor = "rgba(255, 255, 255, 0.1)";
        arrow.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
      }
    }
  }

  // --- Close Floating Tooltip ---
  function closeTooltip() {
    elements.tooltip.style.display = "none";
  }

  // --- Calculate Cognitive Dashboard Stats Dynamically ---
  function calculateStats() {
    const lang = state.language;
    let backgroundWords = 0;
    let totalWords = 0;
    let hiddenBlocksCount = 0;

    const activeSections = window.ARTICLE_DATA[state.depth === "full" ? "sections" : "sectionsSimplified"];
    activeSections.forEach(section => {
      section.blocks.forEach(block => {
        if (block.type === "core" || block.type === "background") {
          const text = lang === "tr" ? block.textTr : block.textEn;
          // Strip HTML tags for clean word count
          const cleanText = text.replace(/<[^>]*>/g, " ");
          const words = cleanText.trim().split(/\s+/).filter(w => w.length > 0).length;

          totalWords += words;

          if (block.type === "background") {
            backgroundWords += words;
            hiddenBlocksCount++;
          }
        }
      });
    });

    // Render stats based on current reading mode
    if (state.mode === "cognitive") {
      const reductionPercent = Math.round((backgroundWords / totalWords) * 100);
      const timeSaved = Math.round(backgroundWords / WPM);

      elements.statReduction.textContent = `${reductionPercent}%`;
      elements.statReductionFill.style.width = `${reductionPercent}%`;
      elements.statHiddenBlocks.textContent = hiddenBlocksCount;
      elements.statTimeSaved.textContent = `~${timeSaved}m`;
    } else {
      // In Highlight or Classic modes, no text is actually hidden from the flow
      elements.statReduction.textContent = "0%";
      elements.statReductionFill.style.width = "0%";
      elements.statHiddenBlocks.textContent = "0";
      elements.statTimeSaved.textContent = "0m";
    }
  }

  // --- Intersection Observer for Active Section Highlighter ---
  function setupIntersectionObserver() {
    const observerOptions = {
      root: elements.readerPane,
      rootMargin: "0px 0px -60% 0px", // Trigger when section occupies the top portion
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace("section-", "");
          
          state.activeSection = sectionId;
          
          // Update active TOC item
          document.querySelectorAll(".toc-item").forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("data-section-id") === sectionId) {
              item.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    // Observe each section
    document.querySelectorAll(".article-section").forEach(sec => {
      observer.observe(sec);
    });
  }

  // Run app
  init();
});

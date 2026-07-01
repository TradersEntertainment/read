// Academic Layer Reader Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- Application State ---
  const state = {
    language: "tr", // Default is Turkish as requested
    mode: "cognitive", // Default is Cognitive Layer
    theme: "dark", // Default is Dark Theme as requested
    depth: "full", // Default is Full Word-for-Word
    activeSection: "abstract",
    activeTab: "interactive",
    currentPage: 1
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
    btnFullTrHidden: document.getElementById("btn-full-tr-hidden"),
    
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
          
          // Deactivate hidden footer button
          if (elements.btnFullTrHidden) {
            elements.btnFullTrHidden.classList.remove("active");
          }
          
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

    // Hidden Full Turkish Text button in sidebar footer
    if (elements.btnFullTrHidden) {
      elements.btnFullTrHidden.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Secret password check
        const pwd = prompt("Şifre / Password:");
        if (pwd !== "123") {
          return; // Silently exit on wrong password
        }
        
        const tab = "full-tr";
        if (state.activeTab !== tab) {
          state.activeTab = tab;
          
          // Deactivate top tab buttons
          elements.tabButtons.forEach(b => b.classList.remove("active"));
          // Activate this footer button
          elements.btnFullTrHidden.classList.add("active");
          
          elements.readerHeader.style.display = "none";
          // Dim mode & depth controls in header
          document.querySelectorAll(".mode-selector, .depth-selector").forEach(el => {
            el.style.opacity = "0.3";
            el.style.pointerEvents = "none";
          });
          renderFullText();
          
          // Reset stats display in sidebar
          elements.statReduction.textContent = "0%";
          elements.statReductionFill.style.width = "0%";
          elements.statHiddenBlocks.textContent = "0";
          elements.statTimeSaved.textContent = "0m";
          
          closeTooltip();
        }
      });
    }

    // Keyboard eBook page turning
    document.addEventListener("keydown", (e) => {
      if (state.activeTab !== "interactive") {
        const rawText = state.activeTab === "full-en" ? window.ARTICLE_FULL_TEXT.en : window.ARTICLE_FULL_TEXT.tr;
        const totalPages = rawText.split("--- PAGE ").length - 1;
        const isDouble = window.innerWidth >= 1000;
        const step = isDouble ? 2 : 1;
        
        if (e.key === "ArrowRight") {
          const limit = isDouble ? totalPages - 1 : totalPages;
          if (state.currentPage < limit) {
            changeEbookPage(state.currentPage + step, "next");
          }
        } else if (e.key === "ArrowLeft" && state.currentPage > 1) {
          changeEbookPage(state.currentPage - step, "prev");
        }
      }
    });

    // Touch swiping gestures on mobile for page turning
    let touchstartX = 0;
    let touchendX = 0;

    elements.articleBody.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    }, {passive: true});

    elements.articleBody.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    }, {passive: true});

    function handleGesture() {
      if (state.activeTab === "interactive") return;
      const rawText = state.activeTab === "full-en" ? window.ARTICLE_FULL_TEXT.en : window.ARTICLE_FULL_TEXT.tr;
      const totalPages = rawText.split("--- PAGE ").length - 1;
      const isDouble = window.innerWidth >= 1000;
      const step = isDouble ? 2 : 1;
      
      const threshold = 50; // Minimum swipe distance in px
      if (touchendX < touchstartX - threshold) {
        // Swipe left -> Next Page
        const limit = isDouble ? totalPages - 1 : totalPages;
        if (state.currentPage < limit) {
          changeEbookPage(state.currentPage + step, "next");
        }
      }
      if (touchendX > touchstartX + threshold) {
        // Swipe right -> Prev Page
        if (state.currentPage > 1) {
          changeEbookPage(state.currentPage - 1, "prev");
        }
      }
    }

    // Re-render eBook when resizing window to adapt to single/double page layout
    window.addEventListener("resize", () => {
      if (state.activeTab !== "interactive") {
        renderFullText();
      }
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
          
          if (elements.btnFullTrHidden) {
            elements.btnFullTrHidden.classList.remove("active");
          }
          
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

  // --- Helper to strip running headers from page text ---
  function cleanPageText(text) {
    if (!text) return "";
    const lines = text.split("\n");
    const cleanedLines = [];
    let checkedHeaderLines = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      if (checkedHeaderLines < 3 && trimmed !== "") {
        const isHeader = 
          /^\d+\s*-+/.test(trimmed) || 
          /^-+\s*\d+/.test(trimmed) || 
          /^\d+$/.test(trimmed) ||     
          trimmed.includes("MARMARA JOURNAL OF EUROPEAN") ||
          trimmed.includes("MARMARA AVRUPA ÇALIŞMALARI") ||
          trimmed.includes("FRAMING CLIMATE CHANGE AS") ||
          trimmed.includes("İKLİM DEĞİŞİKLİĞİNİN İNSAN GÜVENLİĞİ");
          
        if (isHeader) {
          checkedHeaderLines++;
          continue;
        }
      }
      
      cleanedLines.push(line);
      if (trimmed !== "") {
        checkedHeaderLines++;
      }
    }
    
    return cleanedLines.join("\n").trim();
  }

  // --- Render Full PDF Text Page-by-Page as E-Book ---
  function renderFullText(targetPageNum) {
    elements.articleBody.innerHTML = "";
    
    const rawText = state.activeTab === "full-en" ? window.ARTICLE_FULL_TEXT.en : window.ARTICLE_FULL_TEXT.tr;
    const parts = rawText.split(/--- PAGE (\d+) ---\r?\n?/);
    
    // Parse into an array of page objects and store globally
    window.ARTICLE_FULL_TEXT_PAGES = {};
    const pagesList = [];
    for (let i = 1; i < parts.length; i += 2) {
      const pageNum = parseInt(parts[i]);
      let rawPageText = parts[i+1] ? parts[i+1].trim() : "";
      if (pageNum !== 1) {
        rawPageText = cleanPageText(rawPageText);
      }
      const pageObj = {
        num: pageNum,
        text: rawPageText
      };
      window.ARTICLE_FULL_TEXT_PAGES[pageNum] = pageObj;
      pagesList.push(pageObj);
    }
    
    const totalPages = pagesList.length;
    const isDouble = window.innerWidth >= 1000;
    
    // Validate target page
    if (targetPageNum) {
      state.currentPage = Math.max(1, Math.min(totalPages, targetPageNum));
    } else if (!state.currentPage || state.currentPage > totalPages) {
      state.currentPage = 1;
    }
    
    const leftPageNum = state.currentPage;
    const rightPageNum = leftPageNum + 1;
    
    const leftPageObj = pagesList.find(p => p.num === leftPageNum) || pagesList[0];
    const rightPageObj = pagesList.find(p => p.num === rightPageNum);
    
    // Render eBook controls (Top)
    const topControls = createEbookControls(leftPageNum, totalPages, isDouble);
    elements.articleBody.appendChild(topControls);
    
    // Render eBook Book Spread Container
    const spreadContainer = document.createElement("div");
    spreadContainer.className = "ebook-spread";
    spreadContainer.id = "ebook-page-content";
    
    // LEFT PAGE
    const leftPageWrapper = document.createElement("div");
    leftPageWrapper.className = "ebook-page ebook-page-left page-container";
    
    const leftSep = document.createElement("div");
    leftSep.className = "full-text-page-separator";
    leftSep.textContent = state.language === "tr" ? `Sayfa ${leftPageNum}` : `Page ${leftPageNum}`;
    leftPageWrapper.appendChild(leftSep);
    
    const leftPageContent = document.createElement("div");
    renderPageContentElement(leftPageNum, leftPageObj, leftPageContent);
    leftPageWrapper.appendChild(leftPageContent);
    spreadContainer.appendChild(leftPageWrapper);
    
    // RIGHT PAGE (Rendered but hidden by CSS on mobile)
    const rightPageWrapper = document.createElement("div");
    rightPageWrapper.className = "ebook-page ebook-page-right page-container";
    
    if (rightPageObj) {
      const rightSep = document.createElement("div");
      rightSep.className = "full-text-page-separator";
      rightSep.textContent = state.language === "tr" ? `Sayfa ${rightPageNum}` : `Page ${rightPageNum}`;
      rightPageWrapper.appendChild(rightSep);
      
      const rightPageContent = document.createElement("div");
      renderPageContentElement(rightPageNum, rightPageObj, rightPageContent);
      rightPageWrapper.appendChild(rightPageContent);
    } else {
      // Empty page indicator for open book look on odd page counts
      rightPageWrapper.classList.add("ebook-page-empty");
      const emptyNote = document.createElement("div");
      emptyNote.style.textAlign = "center";
      emptyNote.style.color = "var(--color-text-secondary)";
      emptyNote.style.padding = "100px 0";
      emptyNote.textContent = "";
      rightPageWrapper.appendChild(emptyNote);
    }
    spreadContainer.appendChild(rightPageWrapper);
    
    elements.articleBody.appendChild(spreadContainer);
    
    // Render eBook controls (Bottom)
    const bottomControls = createEbookControls(leftPageNum, totalPages, isDouble);
    elements.articleBody.appendChild(bottomControls);
  }

  // --- Render Page Content Helper ---
  function renderPageContentElement(pageNum, pageObj, targetElement) {
    const pageNumStr = String(pageNum);
    const activeTabLang = state.activeTab === "full-en" ? "en" : "tr";
    
    if (pageNumStr === "12") {
      const tableWrapper = renderTableBlock("rescissions", activeTabLang);
      targetElement.appendChild(tableWrapper);
    } else if (pageNumStr === "13") {
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
      targetElement.appendChild(note);
    } else if (pageObj && pageObj.text.includes("[TABLE_COMPARISON_PLACEHOLDER]")) {
      const parts = pageObj.text.split("[TABLE_COMPARISON_PLACEHOLDER]");
      
      // Part 1: Narrative text before Table 2
      const textBlock1 = document.createElement("div");
      textBlock1.className = "full-text-content";
      textBlock1.textContent = parts[0] ? parts[0].trim() : "";
      targetElement.appendChild(textBlock1);
      
      // Table 2 (comparison)
      const tableWrapper = renderTableBlock("comparison", activeTabLang);
      targetElement.appendChild(tableWrapper);
      
      // Part 2: Footnote / Text after Table 2
      if (parts[1] && parts[1].trim()) {
        const textBlock2 = document.createElement("div");
        textBlock2.className = "full-text-content";
        textBlock2.style.marginTop = "24px";
        textBlock2.style.paddingTop = "12px";
        textBlock2.style.borderTop = "1px solid var(--color-border)";
        textBlock2.style.fontSize = "0.85rem";
        textBlock2.style.color = "var(--color-text-secondary)";
        textBlock2.textContent = parts[1].trim();
        targetElement.appendChild(textBlock2);
      }
    } else if (pageNumStr === "20") {
      // Page 20 now contains clean narrative text following Table 2
      targetElement.className = "full-text-content";
      targetElement.textContent = pageObj ? pageObj.text : "";
    } else {
      targetElement.className = "full-text-content";
      targetElement.textContent = pageObj ? pageObj.text : "";
    }
  }

  // --- Create eBook Navigation Bar DOM Element ---
  function createEbookControls(currentPage, totalPages, isDouble) {
    const lang = state.language;
    const controls = document.createElement("div");
    controls.className = "ebook-controls";
    
    // Prev Button
    const btnPrev = document.createElement("button");
    btnPrev.className = "ebook-btn";
    btnPrev.disabled = currentPage === 1;
    btnPrev.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transform: rotate(180deg);">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <span>${lang === "tr" ? "Geri" : "Prev"}</span>
    `;
    
    const prevPageNum = isDouble ? currentPage - 2 : currentPage - 1;
    btnPrev.addEventListener("click", () => changeEbookPage(prevPageNum, "prev"));
    
    // Page Progress Display
    const progress = document.createElement("div");
    progress.className = "ebook-progress";
    
    const label = document.createElement("span");
    label.textContent = lang === "tr" ? "Sayfa" : "Page";
    
    const input = document.createElement("input");
    input.type = "text";
    input.className = "ebook-page-input";
    
    if (isDouble && currentPage < totalPages) {
      input.value = `${currentPage}-${currentPage + 1}`;
      input.style.width = "60px";
    } else {
      input.value = currentPage;
      input.style.width = "40px";
    }
    
    input.addEventListener("change", () => {
      const cleanVal = input.value.split("-")[0];
      const val = parseInt(cleanVal);
      if (!isNaN(val)) {
        changeEbookPage(val, val > currentPage ? "next" : "prev");
      } else {
        input.value = currentPage;
      }
    });
    
    const totalLabel = document.createElement("span");
    totalLabel.textContent = `/ ${totalPages}`;
    
    progress.appendChild(label);
    progress.appendChild(input);
    progress.appendChild(totalLabel);
    
    // Next Button
    const btnNext = document.createElement("button");
    btnNext.className = "ebook-btn";
    
    const nextPageNum = isDouble ? currentPage + 2 : currentPage + 1;
    btnNext.disabled = isDouble ? (currentPage >= totalPages - 1) : (currentPage === totalPages);
    
    btnNext.innerHTML = `
      <span>${lang === "tr" ? "İleri" : "Next"}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;
    btnNext.addEventListener("click", () => changeEbookPage(nextPageNum, "next"));
    
    controls.appendChild(btnPrev);
    controls.appendChild(progress);
    controls.appendChild(btnNext);
    
    return controls;
  }

  // --- Change Page instantly with zero animations ---
  function changeEbookPage(newPageNum, direction) {
    const rawText = state.activeTab === "full-en" ? window.ARTICLE_FULL_TEXT.en : window.ARTICLE_FULL_TEXT.tr;
    const totalPages = rawText.split("--- PAGE ").length - 1;
    const isDouble = window.innerWidth >= 1000;
    
    let targetPage = Math.max(1, Math.min(totalPages, newPageNum));
    
    if (isDouble && targetPage % 2 === 0 && targetPage > 1) {
      targetPage = targetPage - 1;
    }
    
    if (state.currentPage === targetPage) return;
    
    state.currentPage = targetPage;
    renderFullText();
    elements.readerPane.scrollTo({ top: 0, behavior: "instant" });
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

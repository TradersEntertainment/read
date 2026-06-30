// Academic Layer Reader - Article Data
// Modular block structure to support clean dynamic toggling between Cognitive Layer, Highlight, and Classic modes.

window.ARTICLE_DATA = {
  metadata: {
    titleEn: "Framing Climate Change as a Human Security Challenge: A Comparative Analysis of the U.S. under the Trump Administration and the European Union",
    titleTr: "İklim Değişikliğinin İnsan Güvenliği Sorunu Olarak Çerçevelenmesi: Trump Döneminde ABD ve Avrupa Birliği'nin Karşılaştırmalı Analizi",
    author: "Rabia UZUN",
    authorAffiliationEn: "PhD student, Beykent University, Department of Political Science and International Relations",
    authorAffiliationTr: "Doktora Öğrencisi, Beykent Üniversitesi, Siyaset Bilimi ve Uluslararası İlişkiler Bölümü",
    authorEmail: "rabiauzun1305@gmail.com",
    journalEn: "Marmara Journal of European Studies • Volume 34 • No: 1 • 2026",
    journalTr: "Marmara Avrupa Araştırmaları Dergisi • Cilt 34 • Sayı: 1 • 2026",
    pdfUrl: "https://dspace.marmara.edu.tr/" // Placeholder for original PDF
  },
  sections: [
    {
      id: "abstract",
      titleEn: "Abstract & Öz",
      titleTr: "Öz & Abstract",
      blocks: [
        {
          id: "abs-1",
          type: "core",
          textEn: "<p><strong>Abstract:</strong> This article examines how two major global actors—the United States (U.S.) and the European Union (EU)—have framed climate change from a human security perspective, with a particular focus on the Trump era. Drawing on Frame Theory, the study explains how political narratives and policy discourses construct the meaning of climate change and analyzes how this construction shapes public perception and policy priorities. Through a qualitative comparative analysis of official speeches and policy documents, significant differences are identified between the framing approaches of the U.S. and the EU. The Trump administration primarily addressed climate change within the context of economic interests and energy independence, whereas the EU framed it as a global and humanitarian security issue requiring multilateral cooperation. The article argues that determining whether global actors frame climate change within a human security paradigm is crucial for understanding how framing processes shape the conceptualization of security and redefine the relationship between the environmental and political spheres.</p>",
          textTr: "<p><strong>Öz:</strong> Bu makale, iki büyük küresel aktör olan Amerika Birleşik Devletleri (ABD) ile Avrupa Birliği’nin (AB) iklim değişikliğini insan güvenliği perspektifinden nasıl çerçevelediğini, özellikle de Trump dönemi odağında incelemektedir. Çerçeveleme Teorisi’nden yararlanan çalışma, politik anlatıların ve politika söylemlerinin iklim değişikliği olgusuna nasıl anlam kazandırdığını ve bu anlamlandırma sürecinin kamu algısını ve politika önceliklerini nasıl şekillendirdiğini açıklamaktadır. Resmî konuşmalar ve politika belgeleri üzerine yapılan nitel karşılaştırmalı analiz, ABD ile AB’nin çerçeveleme yaklaşımları arasında önemli farklar bulunduğunu ortaya koymaktadır. Trump yönetimi iklim değişikliğini ağırlıklı olarak ekonomik çıkarlar ve enerji bağımsızlığı bağlamında ele alırken, AB bunu çok taraflı iş birliği gerektiren, küresel ve insani güvenlik meselesi olarak çerçevelemiştir. Makale, küresel aktörlerin iklim değişikliğini bir insan güvenliği paradigması içinde çerçeveleyip çerçeveleyemediklerinin, çerçeveleme süreçlerinin güvenlik kavrayışını nasıl şekillendirdiğini ve çevresel alan ile siyasal alan arasındaki ilişkiyi nasıl yeniden tanımladığını anlamak açısından kritik olduğunu ileri sürmektedir.</p>"
        }
      ]
    },
    {
      id: "introduction",
      titleEn: "1. Introduction",
      titleTr: "1. Giriş",
      blocks: [
        {
          id: "intro-bg-1",
          type: "background",
          textEn: "The effects of climate change are becoming increasingly evident today, and the anticipated global consequences represent a multidimensional threat to international security. The security implications of climate change are not confined to state-centered threats alone; rather, climate change has emerged as an issue of “human security,” endangering individuals’ living conditions, livelihoods, health, and access to shelter. In this context, the multifaceted risks posed by climate change are redefining the scope of security and bringing the relationship between environmental sustainability and human well-being into contemporary security debates.",
          textTr: "Bugün iklim değişikliğinin etkileri giderek daha belirgin hale gelmekte ve öngörülen küresel sonuçlar uluslararası güvenlik için çok boyutlu bir tehdit oluşturmaktadır. İklim değişikliğinin güvenlik üzerindeki etkileri yalnızca devlet merkezli tehditlerle sınırlı değildir; aksine, iklim değişikliği bireylerin yaşam koşullarını, geçim kaynaklarını, sağlıklarını ve barınmaya erişimlerini tehlikeye atan bir “insan güvenliği” sorunu olarak ortaya çıkmıştır. Bu bağlamda, iklim değişikliğinin sunduğu çok yönlü riskler güvenliğin kapsamını yeniden tanımlamakta ve çevresel sürdürülebilirlik ile insan refahı arasındaki ilişkiyi çağdaş güvenlik tartışmalarına taşımaktadır."
        },
        {
          id: "intro-core-1",
          type: "core",
          textEn: "When discussing the impacts of <span class=\"info-trigger\" data-target=\"intro-bg-1\">climate change on human security</span>, it becomes crucial to examine how actors within the international system address this issue. Beyond the inherent relationship between climate change and human security, understanding how states perceive and interpret this phenomenon is essential for grasping the policies they pursue in response to this global threat.",
          textTr: "Aktörlerin bu konuyu nasıl ele aldığını incelemek, <span class=\"info-trigger\" data-target=\"intro-bg-1\">iklim değişikliğinin insan güvenliği üzerindeki etkilerini</span> tartışırken kritik bir önem kazanmaktadır. İklim değişikliği ile insan güvenliği arasındaki doğal ilişkinin ötesinde, devletlerin bu olguyu nasıl algıladıklarını ve yorumladıklarını anlamak, bu küresel tehdide yanıt olarak izledikleri politikaları kavramak açısından esastır."
        },
        {
          id: "intro-core-2",
          type: "core",
          textEn: "Building on this premise, this study comparatively analyzes how two major global actors—the United States and the European Union—framed climate change as a human security issue, with a particular focus on the two Trump administrations.",
          textTr: "Bu temelden hareketle, bu çalışma, iki önemli küresel aktörün —Amerika Birleşik Devletleri ve Avrupa Birliği— iklim değişikliğini bir insan güvenliği meselesi olarak nasıl çerçevelediğini, özellikle iki Trump yönetimi odağında karşılaştırmalı olarak analiz etmektedir."
        },
        {
          id: "intro-core-3",
          type: "core",
          textEn: "This article seeks to answer the following research question: How have the U.S. under the Trump administration and the EU framed climate change as a human security challenge? By addressing this question, the study aims to reveal how the framing approaches of these two actors have brought climate change onto their respective security agendas and shaped their conceptualizations of human security.",
          textTr: "Bu makale şu araştırma sorusuna cevap aramaktadır: Trump yönetimi altındaki ABD ve AB, iklim değişikliğini bir insan güvenliği sorunu olarak nasıl çerçevelemiştir? Çalışma, bu soruyu ele alarak, bu iki aktörün çerçeveleme yaklaşımlarının iklim değişikliğini kendi güvenlik gündemlerine nasıl taşıdığını ve insan güvenliği kavramsallaştırmalarını nasıl şekillendirdiğini ortaya koymayı amaçlamaktadır."
        },
        {
          id: "intro-bg-2",
          type: "background",
          textEn: "Robert Entman’s framing theory (1993) posits that to frame is to select some aspects of a perceived reality and make them more salient in a communicating text, in such a way as to promote a specific problem definition, causal interpretation, moral evaluation, and/or treatment recommendation.",
          textTr: "Robert Entman’ın çerçeveleme teorisi (1993), çerçevelemenin algılanan bir gerçekliğin bazı yönlerini seçip bunları bir iletişim metninde daha belirgin hale getirerek belirli bir sorun tanımını, nedensel yorumu, ahlaki değerlendirmeyi ve/veya çözüm önerisini teşvik etmek olduğunu öne sürer."
        },
        {
          id: "intro-core-4",
          type: "core",
          textEn: "This article adopts a qualitative comparative research design based on framing analysis. Drawing on <span class=\"info-trigger\" data-target=\"intro-bg-2\">Entman’s framing theory</span>, it examines how the United States under the Trump administration and the European Union frame climate change in relation to human security. The study focuses on Trump’s first presidential term (2016–2020) and his second presidential term, which began in 2025.",
          textTr: "Bu makale, çerçeveleme analizine dayalı nitel karşılaştırmalı bir araştırma tasarımı benimsemektedir. Çalışma, <span class=\"info-trigger\" data-target=\"intro-bg-2\">Entman’ın çerçeveleme teorisinden</span> yararlanarak, Trump dönemi altındaki Amerika Birleşik Devletleri ve Avrupa Birliği'nin iklim değişikliğini insan güvenliği ile ilişkili olarak nasıl çerçevelediğini incelemektedir. Çalışma, Trump’ın ilk başkanlık dönemine (2016–2020) ve 2025 yılında başlayan ikinci başkanlık dönemine odaklanmaktadır."
        },
        {
          id: "intro-bg-3",
          type: "background",
          textEn: "The U.S. material includes six texts: one presidential speech, one presidential proclamation, and four executive orders. The EU material includes 13 texts: one European Council presidency conclusion, five European Commission communications or notices, three European Commission institutional webpages, one European Commission audiovisual statement, one joint report by the European Commission and the High Representative, and two European External Action Service documents. The analysis follows Entman’s four framing functions: problem definition, causal interpretation, moral evaluation, and treatment recommendation.",
          textTr: "ABD materyalleri 6 metinden oluşmaktadır: bir başkanlık konuşması, bir başkanlık bildirisi ve dört başkanlık kararnamesi. AB materyalleri ise 13 metinden oluşmaktadır: bir Avrupa Konseyi dönem başkanlığı kararı, beş Avrupa Komisyonu bildirisi veya bildirimi, üç Avrupa Komisyonu kurumsal web sayfası, bir Avrupa Komisyonu görsel-işitsel açıklaması, Avrupa Komisyonu ve Yüksek Temsilci tarafından hazırlanan bir ortak rapor ve iki Avrupa Dış İlişkiler Servisi (EEAS) belgesi. Analiz, Entman'ın dört çerçeveleme işlevini (sorun tanımlama, nedensel yorumlama, ahlaki değerlendirme ve tedavi önerisi) takip etmektedir."
        },
        {
          id: "intro-core-5",
          type: "core",
          textEn: "The analysis is based on <span class=\"info-trigger\" data-target=\"intro-bg-3\">19 primary texts and institutional materials</span>. The selected documents were included because they are official or institutionally attributable texts that directly address the article’s research question. They reflect how the Trump administration and the EU define climate change, assign responsibility, make normative evaluations, and justify policy responses, providing a suitable basis for comparing how climate change is framed in relation to human security.",
          textTr: "Analiz, <span class=\"info-trigger\" data-target=\"intro-bg-3\">19 birincil metin ve kurumsal materyale</span> dayanmaktadır. Seçilen belgeler, makalenin araştırma sorusunu doğrudan ele alan resmi veya kurumsal olarak atfedilebilir metinler oldukları için dahil edilmiştir. Bu belgeler, Trump yönetiminin ve AB'nin iklim değişikliğini nasıl tanımladığını, sorumluluğu nasıl atfettiğini, normatif değerlendirmeleri nasıl yaptığını ve politika yanıtlarını nasıl gerekçelendirdiğini yansıtmaktadır."
        }
      ]
    },
    {
      id: "theory",
      titleEn: "2. Theoretical Framework",
      titleTr: "2. Kuramsal Çerçeve",
      blocks: [
        {
          id: "theory-bg-1",
          type: "background",
          textEn: "Framing is essentially a rhetorical tool used by communicators to delimit an argument. The purpose of strategic framing is to direct the audience’s attention toward a desired perspective. Therefore, framing constitutes a critical element in the construction of social reality by shaping perceptions (Hallahan, 2008). It plays a key role in the formation of social issues and the public discourses surrounding them. From a political standpoint, framing is strategically employed to influence public opinion and to guide the representation of political narratives (Gözkaman, 2025). Frames are defined not only by what they include but also by what they exclude. While drawing attention to certain aspects of reality, they simultaneously obscure others (Kahneman and Tversky, 1984). Politicians seek to mobilize voters behind their policies and encourage them to think along specific interpretive lines (Chong and Druckman, 2007).",
          textTr: "Çerçeveleme (framing), iletişimciler tarafından bir argümanı sınırlandırmak için kullanılan retorik bir araçtır. Stratejik çerçevelemenin amacı, dinleyicinin dikkatini istenen bir perspektife yönlendirmektir. Bu nedenle çerçeveleme, algıları şekillendirerek toplumsal gerçekliğin inşasında kritik bir unsur oluşturur (Hallahan, 2008). Toplumsal sorunların ve onları çevreleyen kamu söylemlerinin oluşumunda kilit bir rol oynar. Siyasi bir açıdan bakıldığında çerçeveleme, kamuoyunu etkilemek ve siyasi anlatıların temsilini yönlendirmek için stratejik olarak kullanılır (Gözkaman, 2025). Çerçeveler sadece neyi içerdikleriyle değil, aynı zamanda neyi dışarıda bıraktıklarıyla da tanımlanır ve gerçekliğin diğer yönlerini eşzamanlı olarak perdeler (Kahneman ve Tversky, 1984). Politikacılar, seçmenleri kendi politikalarının arkasında seferber etmeye ve onları belirli yorumlama çizgilerinde düşünmeye teşvik etmeye çalışırlar (Chong ve Druckman, 2007)."
        },
        {
          id: "theory-bg-2",
          type: "background",
          textEn: "According to Entman (1993), a frame typically fulfills four core functions: problem definition, diagnosing causes, making moral evaluations, and proposing solutions. Strategic framing is not a superficial discursive tool of political communication but rather a strategic practice that constructs power relations, generates legitimacy, and shapes public perception. Scholars in International Relations (IR) have adopted framing to examine foreign policy changes (Barnett, 1999), power (Sorkar, 2022), norm dynamics (Payne, 2001; Finnemore, 2015), media-policy interactions (Entman, 2009), securitization (Gözkaman, 2024; Sperling and Webber, 2017), and environmental politics (Broadhead, 2002; Martus, 2021; Rowe, 2013).",
          textTr: "Entman'a (1993) göre, bir çerçeve tipik olarak dört temel işlevi yerine getirir: sorun tanımlama, nedenleri teşhis etme, ahlaki değerlendirmeler yapma ve çözümler önerme. Stratejik çerçeveleme, siyasi iletişimin yüzeysel bir söylemsel aracı değil, aksine güç ilişkilerini inşa eden, meşruiyet üreten ve kamuoyu algısını şekillendiren stratejik bir uygulamadır. Uluslararası İlişkilerdeki (IR) birçok çalışma; dış politika değişikliklerini (Barnett, 1999), gücü (Sorkar, 2022), norm dinamiklerini (Payne, 2001; Finnemore, 2015), medya-politika etkileşimlerini (Entman, 2009), güvenlikleştirmeyi (Gözkaman, 2024; Sperling ve Webber, 2017) ve çevre politikalarını (Broadhead, 2002; Martus, 2021; Rowe, 2013) incelemek için çerçevelemeyi benimsemiştir."
        },
        {
          id: "theory-core-1",
          type: "core",
          textEn: "In this study, <span class=\"info-trigger\" data-target=\"theory-bg-1\">frame theory</span> is employed to analyze how the U.S. and the EU constructed their discourses on climate change under the two Trump administrations, and whether they framed the issue within the context of human security. By applying <span class=\"info-trigger\" data-target=\"theory-bg-2\">Entman's framing functions</span>, the study compares how the U.S. portrayed environmental regulations as obstacles to economic growth, whereas the EU linked climate action to human security, global justice, and sustainable development.",
          textTr: "Bu çalışmada, iki Trump dönemi altında ABD ve AB'nin iklim değişikliği söylemlerini nasıl inşa ettiklerini ve konuyu insan güvenliği bağlamında çerçeveleyip çerçevelemediklerini analiz etmek için <span class=\"info-trigger\" data-target=\"theory-bg-1\">çerçeveleme teorisi</span> kullanılmıştır. Çalışma, <span class=\"info-trigger\" data-target=\"theory-bg-2\">Entman'ın çerçeveleme işlevlerini</span> uygulayarak, ABD'nin çevresel düzenlemeleri ekonomik büyümenin önündeki engeller olarak nasıl sunduğunu, AB söyleminin ise iklim eylemini insan güvenliği, küresel adalet ve sürdürülebilir kalkınma ile nasıl ilişkilendirdiğini karşılaştırmaktadır."
        }
      ]
    },
    {
      id: "literature",
      titleEn: "3. Literature Review",
      titleTr: "3. Literatür Taraması",
      blocks: [
        {
          id: "lit-bg-1",
          type: "background",
          textEn: "The existing literature includes extensive studies on climate change and human security, highlighting the impacts of climate change on various dimensions of human well-being (Mason, 2015; Dalby, 2013; Barnett and Adger, 2007; O’Brien, 2010). Additionally, there is a substantial body of work examining how the U.S. and the EU frame the issue of climate change and shape their climate policies. The EU conceptualizes climate change as a global threat and a 'challenge to human security' (Dupont, 2023; Skovgaard, 2013; Baute, 2024). In contrast, the U.S., particularly under the Trump administration, has approached the issue through a lens dominated by political and economic priorities, often excluding references to 'climate change' from scientific research frameworks (Jacobs and Khan, 2025; Frumkin et al., 2025).",
          textTr: "Mevcut literatür, iklim değişikliğinin insan refahının çeşitli boyutları üzerindeki etkilerini vurgulayan geniş çalışmaları içermektedir (Mason, 2015; Dalby, 2013; Barnett ve Adger, 2007; O’Brien, 2010). Ayrıca, AB ve ABD'nin iklim değişikliği konusunu nasıl çerçevelediğini ve iklim politikalarını nasıl şekillendirdiğini inceleyen önemli çalışmalar mevcuttur. AB, iklim değişikliğini küresel bir tehdit ve 'insan güvenliğine yönelik bir sorun' olarak kavramsallaştırmaktadır (Dupont, 2023; Skovgaard, 2013; Baute, 2024). Buna karşılık ABD, özellikle Trump yönetimi döneminde, konuya siyasi ve ekonomik önceliklerin hakim olduğu bir mercekten yaklaşmış, hatta bazı bilimsel araştırma çerçevelerinden 'iklim değişikliği' atıflarını çıkarmıştır (Jacobs ve Khan, 2025; Frumkin ve diğerleri, 2025)."
        },
        {
          id: "lit-bg-2",
          type: "background",
          textEn: "Some comparative analyses have examined how the EU and the U.S. frame and construct their climate policies (Hayes and Knox-Hayes, 2014; Carlarne, 2006, 2010; Bakker and Francioni, 2016; Wendler, 2022). Wendler (2022) analyzes the distinct ways parliaments and executive bodies frame the issue. However, Wendler’s analysis was conducted before Trump’s return to the presidency. Wendler suggested that the aftermath of the Russia–Ukraine war and U.S. energy import shifts could potentially push the country toward sustainable energy. The political context examined in this article provides an opportunity to reassess this trajectory in light of the second Trump presidency.",
          textTr: "Literatürdeki bazı karşılaştırmalı analizler AB ve ABD'nin iklim politikalarını nasıl çerçevelediğini ve inşa ettiğini incelemiştir (Hayes ve Knox-Hayes, 2014; Carlarne, 2006, 2010; Bakker ve Francioni, 2016; Wendler, 2022). Wendler (2022), parlamentolar ile yürütme organlarının konuyu çerçeveleme ve siyasallaştırma biçimlerini analiz eder. Ancak Wendler’ın analizi, Trump’ın başkanlığa geri dönmesinden önce yapılmıştır. Wendler, Rusya-Ukrayna savaşı sonrası enerji ithalatındaki değişimlerin ABD'yi sürdürülebilir enerji kaynaklarına yönlendirebileceğini öngörmüştü. Bu makalede incelenen siyasi bağlam, ikinci Trump başkanlığı ışığında bu gidişatı yeniden değerlendirme fırsatı sunmaktadır."
        },
        {
          id: "lit-core-1",
          type: "core",
          textEn: "While existing <span class=\"info-trigger\" data-target=\"lit-bg-1\">literature on climate change framing</span> shows a fundamental opposition between the EU's securitized approach and the U.S.'s economic approach, comparative analyses remain limited. This article builds on <span class=\"info-trigger\" data-target=\"lit-bg-2\">previous comparative studies</span> by extending the comparison to the context of Trump’s second presidency.",
          textTr: "İklim değişikliği çerçevelemesi üzerine mevcut <span class=\"info-trigger\" data-target=\"lit-bg-1\">literatür</span>, AB'nin güvenlik eksenli yaklaşımı ile ABD'nin ekonomik yaklaşımı arasında temel bir zıtlık olduğunu gösterse de, karşılaştırmalı analizler sınırlı kalmıştır. Bu çalışma, karşılaştırmayı Trump’ın ikinci başkanlık dönemi bağlamına taşıyarak <span class=\"info-trigger\" data-target=\"lit-bg-2\">önceki karşılaştırmalı çalışmalara</span> dayanmaktadır."
        },
        {
          id: "lit-core-2",
          type: "core",
          textEn: "Its contribution lies in extending the comparison to the context of Trump’s second presidency and, more importantly, in shifting the analytical focus from climate policy contestation in general to the specific question of whether climate change is framed as a human security challenge, showing how these frames redefine the boundaries of security itself.",
          textTr: "Bu çalışmanın katkısı, karşılaştırmayı Trump'ın ikinci başkanlığı bağlamına genişletmesinde ve daha da önemlisi, analitik odağı genel olarak iklim politikası tartışmalarından iklim değişikliğinin bir insan güvenliği sorunu olarak çerçevelenip çerçevelenmediği sorusuna kaydırarak, bu çerçevelerin güvenliğin sınırlarını nasıl yeniden tanımladığını göstermesinde yatmaktadır."
        }
      ]
    },
    {
      id: "human-security",
      titleEn: "4. The Concept of Human Security and Its Role in Climate Change",
      titleTr: "4. İnsan Güvenliği Kavramı ve İklim Değişikliğindeki Rolü",
      blocks: [
        {
          id: "hs-bg-1",
          type: "background",
          textEn: "The concept of human security represents a shift beyond the traditional state-centered security understanding. Its primary subject is the individual, aiming to protect people from economic, food, health, environmental, personal, community, and political threats (UNDP, 1994; Gregoratti, 2025). Roland Paris (2001, 2005) criticized this all-encompassing conceptualization as 'expansive and vague' or a 'Rorschach ink blot' that risk meaning nothing, while Pettman (2005) defended it, arguing that narrowing it within rationalist or state-centric frameworks obscures communal, cultural, and sacred dimensions of human vulnerability.",
          textTr: "İnsan güvenliği kavramı, geleneksel devlet merkezli güvenlik anlayışının ötesine geçen bir değişimi temsil eder. Birincil konusu bireydir ve insanları ekonomik, gıda, sağlık, çevre, kişisel, toplumsal ve siyasi tehditlerden korumayı amaçlar (UNDP, 1994; Gregoratti, 2025). Roland Paris (2001, 2005) bu her şeyi kapsayan kavramsallaştırmayı 'geniş ve belirsiz' ya da hiçbir şey ifade etmeme riski taşıyan bir 'Rorschach mürekkep lekesi' olarak eleştirirken, Pettman (2005) bunu rasyonalist veya devlet merkezli çerçeveler içine daraltmanın insan kırılganlığının toplumsal ve kültürel boyutlarını göz ardı edeceği gerekçesiyle savunmuştur."
        },
        {
          id: "hs-bg-2",
          type: "background",
          textEn: "In 1990, the Intergovernmental Panel on Climate Change (IPCC) First Assessment Report identified threats climate change poses to humanity. Over time, UN Secretary-General António Guterres (2021) warned that climate change, as a 'threat multiplier,' exacerbates instability, conflict, and terrorism. The UN Climate Action identifies five pathways of climate impact on human security: 1) Intensifying competition over land/water due to droughts, 2) Decreasing food production, 3) Forced migration/displacement, 4) Exacerbating poverty and inequality, and 5) Increasing security risks for women and girls. The UN Trust Fund for Human Security and Agenda 2030 (2015) reinforce this, calling climate change 'the greatest challenge of our time.'",
          textTr: "1990 yılında, Hükümetlerarası İklim Değişikliği Paneli'nin (IPCC) İlk Değerlendirme Raporu, iklim değişikliğinin insanlığa yönelik tehditlerini tanımlamıştır. Zamanla BM Genel Sekreteri António Guterres (2021), iklim değişikliğinin bir 'tehdit çarpanı' olarak istikrarsızlığı, çatışmayı ve terörizmi şiddetlendirdiği uyarısında bulunmuştur. BM İklim Eylemi, iklim krizinin insan güvenliği üzerindeki 5 etkisini tanımlar: 1) Kuraklıklar nedeniyle toprak/su rekabetinin artması, 2) Gıda üretiminin azalması, 3) Zorunlu göç/yerinden edilme, 4) Yoksulluk ve eşitsizliğin artması, 5) Kadınlar/kız çocukları için güvenlik risklerinin artması. BM İnsan Güvenliği Güven Fonu ve 2030 Gündemi (2015) bu bağlantıyı pekiştirmektedir."
        },
        {
          id: "hs-core-1",
          type: "core",
          textEn: "The concept of <span class=\"info-trigger\" data-target=\"hs-bg-1\">human security</span> represents a critical shift beyond the traditional understanding of security. Today, its intersection with climate change is widely recognized, with <span class=\"info-trigger\" data-target=\"hs-bg-2\">multilateral frameworks outlining specific pathways</span> of environmental vulnerability.",
          textTr: "<span class=\"info-trigger\" data-target=\"hs-bg-1\">İnsan güvenliği</span> kavramı, geleneksel güvenlik anlayışının ötesine geçen kritik bir değişimi temsil eder. Bugün, kavramın iklim değişikliği ile kesişimi geniş çapta kabul görmekte ve <span class=\"info-trigger\" data-target=\"hs-bg-2\">BM gibi çok taraflı kuruluşlar belirli kırılganlık yollarını</span> ana hatlarıyla ortaya koymaktadır."
        }
      ]
    },
    {
      id: "us-frames",
      titleEn: "5. U.S. Climate Change Frames under the Trump Administration",
      titleTr: "5. Trump Yönetiminde ABD'nin İklim Değişikliği Çerçeveleri",
      blocks: [
        {
          id: "us-core-1",
          type: "core",
          textEn: "During Donald Trump’s first presidential term, the issue of climate change was treated by his administration as an ideological matter, marking a fundamental shift in U.S. climate policy. Federal climate policies and institutions were weakened, the legitimacy of climate science was questioned, and research sources came under threat (Jotzo et al., 2018).",
          textTr: "Donald Trump’ın ilk başkanlık döneminde iklim değişikliği konusu, yönetimi tarafından ideolojik bir mesele olarak ele alınmış ve ABD iklim politikasında köklü bir kırılmayı temsil etmiştir. Federal iklim politikaları ve kurumları zayıflatılmış, iklim biliminin meşruiyeti sorgulanmış ve araştırma kaynakları tehdit altına girmiştir (Jotzo ve diğerleri, 2018)."
        },
        {
          id: "us-bg-1",
          type: "background",
          textEn: "The Paris Climate Agreement is a legally binding international treaty on climate change adopted in 2015. In 2019, the U.S. formally notified the UN of its withdrawal, with Trump citing the 'unfair economic burden' the agreement allegedly imposed on American workers, businesses, and taxpayers, and claiming it placed the U.S. at a competitive disadvantage vis-à-vis China (Emran, 2024).",
          textTr: "Paris İklim Anlaşması, 2015 yılında kabul edilen, iklim değişikliği konusunda yasal olarak bağlayıcı uluslararası bir antlaşmadır. ABD, 2019 yılında resmi olarak anlaşmadan çekildiğini BM'ye bildirmiştir; Trump, anlaşmanın Amerikan işçilerine, işletmelerine ve vergi mükelleflerine getirdiği 'haksız ekonomik yükü' gerekçe göstermiş ve ABD'yi Çin karşısında rekabet açısından dezavantajlı duruma düşürdüğünü savunmuştur (Emran, 2024)."
        },
        {
          id: "us-core-2",
          type: "core",
          textEn: "Moreover, Trump withdrew from the <span class=\"info-trigger\" data-target=\"us-bg-1\">Paris Climate Agreement</span>, prioritizing traditional energy sources and delivering 'energy independence' through increased domestic fossil fuel production.",
          textTr: "Ayrıca Trump, yerel fosil yakıt üretimini artırarak 'enerji bağımsızlığı' sağlamaya ve geleneksel enerji kaynaklarına öncelik vermeye yönelerek ABD'yi <span class=\"info-trigger\" data-target=\"us-bg-1\">Paris İklim Anlaşması'ndan</span> çekmiştir."
        },
        {
          id: "us-bg-2",
          type: "background",
          textEn: "Under the Biden administration (2021-2025), U.S. policy refocused on climate as a top priority, rejoining the Paris Agreement and setting goals to cut greenhouse gas emissions by half by 2030, achieve carbon-free power by 2035, and reach net-zero emissions by 2050. This was backed by landmark legislations like the Inflation Reduction Act (IRA) and the Bipartisan Infrastructure Law, promoting renewable energy expansion and clean energy jobs.",
          textTr: "Biden yönetimi döneminde (2021-2025) ABD politikası iklimi en önemli öncelik olarak yeniden ele almış, Paris Anlaşması'na tekrar katılmış ve sera gazı emisyonlarını 2030'a kadar yarıya indirme, 2035'e kadar karbon kirliliğinden arınmış elektrik sektörüne ulaşma ve 2050'ye kadar net sıfır emisyona ulaşma hedeflerini belirlemiştir. Bu, yenilenebilir enerjinin yaygınlaşmasını ve temiz enerji istihdamını teşvik eden Enflasyonu Düşürme Yasası (IRA) gibi dönüm noktası niteliğindeki yasalarla desteklenmiştir."
        },
        {
          id: "us-core-3",
          type: "core",
          textEn: "In contrast, during the Biden administration, U.S. policy pursued a <span class=\"info-trigger\" data-target=\"us-bg-2\">'green transformation'</span> that combined environmental sustainability with economic growth.",
          textTr: "Buna karşılık, Biden yönetimi döneminde ABD politikası, çevresel sürdürülebilirlik ile ekonomik büyümeyi birleştiren bir <span class=\"info-trigger\" data-target=\"us-bg-2\">'yeşil dönüşüm'</span> izlemiştir."
        },
        {
          id: "us-core-4",
          type: "core",
          textEn: "However, upon taking office for a second term on January 20, 2025, Trump immediately acted to reverse these policies. He signed Executive Order 14148, <em>“Initial Rescissions of Harmful Executive Orders and Actions,”</em> declaring that 'climate extremism has exploded inflation and overburdened businesses with regulation.' Under this framework, 11 key climate-related executive orders and actions enacted by the Biden administration were rescinded.",
          textTr: "Ancak, 20 Ocak 2025'te ikinci dönemi için göreve başlayan Trump, hemen bu politikaları tersine çevirmek için harekete geçmiştir. Trump, 'iklim ekstremizminin enflasyonu patlattığını ve işletmeleri düzenlemelerle aşırı yüklediğini' beyan ederek 14148 sayılı <em>“Zararlı Yürütme Emirlerinin ve Eylemlerinin İlk İptalleri”</em> kararnamesini imzalamıştır. Bu çerçevede, Biden yönetimi tarafından yürürlüğe konan 11 kritik iklim kararı iptal edilmiştir."
        },
        {
          id: "us-table-1",
          type: "table",
          tableName: "rescissions"
        },
        {
          id: "us-bg-3",
          type: "background",
          textEn: "Representative Concentration Pathway (RCP) 8.5 is a greenhouse gas concentration trajectory adopted by the IPCC. It represents a high-emissions, business-as-usual scenario where emissions continue to rise throughout the 21st century. The Trump administration rejected it, claiming it represented an unrealistic worst-case scenario because of assumptions such as coal consumption exceeding extractable reserves by the end of the century, and arguing that scientific studies were politicized (Trump, 2025e).",
          textTr: "Temsili Konsantrasyon Yolu (RCP) 8.5, IPCC tarafından kabul edilen bir sera gazı konsantrasyon rotasıdır. Emisyonların 21. yüzyıl boyunca yükselmeye devam ettiği yüksek emisyonlu bir senaryoyu temsil eder. Trump yönetimi, yüzyılın sonuna kadar kömür tüketiminin çıkarılabilir rezervleri aşacağı gibi varsayımlara dayanarak bunun gerçekçi olmayan bir en kötü durum senaryosu olduğunu iddia etmiş ve bilimsel çalışmaların siyasallaştığını savunarak bu senaryoyu reddetmiştir (Trump, 2025e)."
        },
        {
          id: "us-core-5",
          type: "core",
          textEn: "Trump also issued the executive order 'Restoring Gold Standard Science,' rejecting scientific evidence by criticizing federal agencies for relying on the <span class=\"info-trigger\" data-target=\"us-bg-3\">RCP 8.5 scenario</span>. In another executive order, 'Protecting American Energy From State Overreach,' he attacked state-level climate policies as threats to 'American energy dominance and our economic and national security' (Trump, 2025d).",
          textTr: "Trump ayrıca, federal kurumların <span class=\"info-trigger\" data-target=\"us-bg-3\">RCP 8.5 senaryosuna</span> dayanmasını eleştirerek bilimsel kanıtları reddeden 'Altın Standart Bilimin Restorasyonu' kararnamesini çıkarmıştır. Başka bir kararname olan 'Amerikan Enerjisini Eyalet Müdahalesinden Korumak' başlıklı belgede, eyalet düzeyindeki iklim politikalarını 'Amerikan enerji hakimiyetine, ekonomik ve ulusal güvenliğimize' yönelik tehditler olarak nitelendirmiştir (Trump, 2025d)."
        },
        {
          id: "us-core-6",
          type: "core",
          textEn: "By defining 'energy security as national security,' Trump removes climate change from the realm of global and human security threats, instead portraying it as a 'Chinese hoax' (Wong, 2016), a 'Green New Scam,' and a political conspiracy designed to harm the U.S. economy. This framing makes short-term costs highly visible while rhetorically relegating long-term disasters, health risks, justice concerns, and infrastructure vulnerabilities to the background.",
          textTr: "Trump, 'enerji güvenliği ulusal güvenliktir' tanımını yaparak iklim değişikliğini küresel ve insani güvenlik tehditleri alanından çıkarmakta, bunun yerine 'Çin komplosu' (Wong, 2016), 'Yeşil Yeni Aldatmaca' (Green New Scam) ve ABD ekonomisine zarar vermek üzere tasarlanmış siyasi bir komplo olarak sunmaktadır. Bu çerçeveleme, kısa vadeli maliyetleri görünür kılarken, uzun vadeli felaketleri, sağlık risklerini, adalet endişelerini ve altyapı kırılganlıklarını retorik olarak arka plana itmektedir."
        }
      ]
    },
    {
      id: "eu-frames",
      titleEn: "6. The European Union’s Climate Change Frames",
      titleTr: "6. Avrupa Birliği'nin İklim Değişikliği Çerçeveleri",
      blocks: [
        {
          id: "eu-core-1",
          type: "core",
          textEn: "Since the 1990s, the European Union (EU) has progressively strengthened its position that climate change represents a significant threat. A major milestone in formalizing the link between climate and security was the 2008 joint report <em>“Climate Change and International Security”</em>, which officially framed climate change as a <strong>“threat multiplier”</strong> in direct connection with human security:",
          textTr: "Avrupa Birliği (AB), 1990'lardan bu yana iklim değişikliğinin önemli bir tehdit oluşturduğu yönündeki tutumunu kademeli olarak güçlendirmiştir. İklim ve güvenlik arasındaki bağlantıyı resmileştiren en önemli dönüm noktası, iklim değişikliğini doğrudan insan güvenliği ile ilişkilendirerek resmi olarak bir <strong>“tehdit çarpanı”</strong> (threat multiplier) olarak tanımlayan 2008 tarihli ortak rapordur:"
        },
        {
          id: "eu-quote-1",
          type: "core",
          textEn: "<blockquote class=\"article-blockquote\">“Climate change is best viewed as a threat multiplier which exacerbates existing trends, tensions and instability. The core challenge is that climate change threatens to overburden states and regions which are already fragile and conflict prone. It is important to recognise that the risks are not just of a humanitarian nature; they also include political and security risks that directly affect European interests...”<cite>— European Commission and High Representative, 2008</cite></blockquote>",
          textTr: "<blockquote class=\"article-blockquote\">“İklim değişikliği, mevcut eğilimleri, gerilimleri ve istikrarsızlığı artıran bir tehdit çarpanı olarak görülmelidir. Temel zorluk, iklim değişikliğinin zaten kırılgan ve çatışmaya eğilimli olan devletleri ve bölgeleri aşırı yük altına sokma tehdidi taşımasıdır. Risklerin yalnızca insani nitelikte olmadığını; doğrudan Avrupa çıkarlarını etkileyen siyasi ve güvenlik risklerini de içerdiğini kabul etmek önemlidir...”<cite>— Avrupa Komisyonu ve Yüksek Temsilci, 2008</cite></blockquote>"
        },
        {
          id: "eu-bg-1",
          type: "background",
          textEn: "The European Green Deal (2019) is a development model aiming to make Europe the first climate-neutral continent by 2050, decoupling growth from resource use. The Climate Change and Defence Roadmap (2020) by the EEAS and EDA outlines defence risks (food/water shortages, health, displacement, and resource loss). 'Fit for 55' (2021) set a target to cut emissions by 55% by 2030, supported by the Social Climate Plans (2025) and Social Climate Fund (SCF) to protect vulnerable groups from green transition costs.",
          textTr: "Avrupa Yeşil Mutabakatı (2019), büyümeyi kaynak kullanımından ayırarak Avrupa'yı 2050 yılına kadar ilk iklim-nötr kıta yapmayı amaçlayan bir kalkınma modelidir. İklim Değişikliği ve Savunma Yol Haritası (2020, EEAS ve EDA), savunma risklerini (gıda/su kıtlığı, sağlık, yerinden edilme ve kaynak kaybı) özetler. 'Fit for 55' (2021), emisyonları 2030'a kadar %55 azaltma hedefini koymuş, kırılgan grupları korumak amacıyla Sosyal İklim Planları (2025) ve Sosyal İklim Fonu (SCF) ile desteklenmiştir."
        },
        {
          id: "eu-core-2",
          type: "core",
          textEn: "The EU has translated this security framework into policy through major initiatives, starting with the <span class=\"info-trigger\" data-target=\"eu-bg-1\">European Green Deal</span> (2019) and the Climate Change and Defence Roadmap (2020), which was later operationalized through the 'Fit for 55' package.",
          textTr: "AB, bu güvenlik çerçevesini, <span class=\"info-trigger\" data-target=\"eu-bg-1\">Avrupa Yeşil Mutabakatı</span> (2019) ve İklim Değişikliği ve Savunma Yol Haritası (2020) gibi büyük girişimlerle başlayarak politikaya dönüştürmüştür. Bu süreç daha sonra 'Fit for 55' paketi ile işlevsel hale getirilmiştir."
        },
        {
          id: "eu-core-3",
          type: "core",
          textEn: "By applying Entman's framing functions, the EU defines the climate problem as a global threat that endangers human life. The causes are identified as harmful human activities and a lack of global cooperation. From a moral standpoint, justice, solidarity, and responsibility constitute the EU’s normative foundation. Finally, as a treatment recommendation, the EU plays an active role in global climate diplomacy, seeking to address climate change for the sake of humanity's future.",
          textTr: "Entman'ın çerçeveleme işlevleri uygulandığında, AB iklim sorununu insan yaşamını tehdit eden küresel bir sorun olarak tanımlar. Nedenler, zararlı insan faaliyetleri ve küresel iş birliği eksikliği olarak tanımlanır. Ahlaki açıdan bakıldığında, adalet, dayanışma ve sorumluluk AB'nin normatif temelini oluşturur. Son olarak, bir çözüm önerisi olarak AB, insanlığın geleceği adına iklim değişikliğiyle mücadele etmek için küresel iklim diplomasisinde aktif bir rol oynamaktadır."
        }
      ]
    },
    {
      id: "comparative",
      titleEn: "7. Comparative Analysis",
      titleTr: "7. Karşılaştırmalı Analiz",
      blocks: [
        {
          id: "comp-core-1",
          type: "core",
          textEn: "The U.S. and the EU present two distinct discursive universes in their framing of climate change. While one is grounded in economic nationalism and a short-term sovereignty discourse, the other is based on normative multilateralism and the principles of human security.",
          textTr: "ABD ve AB, iklim değişikliği çerçevelemelerinde iki farklı söylem evreni sunmaktadır. Biri ekonomik milliyetçilik ve kısa vadeli egemenlik söylemine dayanırken, diğeri normatif çok taraflılık ve insan güvenliği ilkelerine dayanmaktadır."
        },
        {
          id: "comp-table-1",
          type: "table",
          tableName: "comparison"
        },
        {
          id: "comp-bg-1",
          type: "background",
          textEn: "CSDDD (Corporate Sustainability Due Diligence Directive) is an EU directive that requires large EU and non-EU companies to conduct environmental and human rights due diligence across their global operations and supply chains. In 2025, Trump criticized EU's regulations like CSDDD, claiming they impose severe economic and regulatory burdens on U.S. companies doing business in Europe and undermine national competitiveness.",
          textTr: "CSDDD (Kurumsal Sürdürülebilirlik Özen Yükümlülüğü Direktifi), büyük AB ve AB dışı şirketlerin küresel operasyonlarında ve tedarik zincirlerinde çevre ve insan hakları özen yükümlülüğü süreçleri yürütmesini gerektiren bir AB yönergesidir. 2025 yılında Trump, CSDDD gibi AB düzenlemelerini eleştirerek, bunların Avrupa'da iş yapan ABD'li şirketlere ağır ekonomik ve düzenleyici yükler getirdiğini ve ulusal rekabet gücünü baltaladığını iddia etmiştir."
        },
        {
          id: "comp-core-2",
          type: "core",
          textEn: "During Trump's second presidency, the divergence becomes more pronounced. In his speech at the UN General Assembly in 2025, Trump criticized climate policies as a global conspiracy, calling them 'the greatest con job ever perpetrated on the world.' The Trump administration attacked EU's green regulations, such as the <span class=\"info-trigger\" data-target=\"comp-bg-1\">CSDDD directive</span>, as self-inflicted economic harm.",
          textTr: "Trump'ın ikinci başkanlığı döneminde bu ayrışma daha da belirginleşmiştir. Trump, 2025 yılında BM Genel Kurulu'nda yaptığı konuşmada iklim politikalarını küresel bir komplo olarak nitelendirmiş ve bunları 'dünyada yapılmış en büyük dolandırıcılık' olarak adlandırmıştır. Trump yönetimi, AB'nin <span class=\"info-trigger\" data-target=\"comp-bg-1\">CSDDD direktifi</span> gibi yeşil düzenlemelerini, sanayileşmiş ülkelerin kendilerine verdiği ekonomik zararlar olarak eleştirmiştir."
        },
        {
          id: "comp-core-3",
          type: "core",
          textEn: "Ultimately, while the Trump administration's frame focuses on the economic costs of climate policy and advocates for deregulation and fossil-fuel expansion, the EU frame foregrounds vulnerability, protection, justice, and collective responsibility, refusing to dilute its legislation under U.S. diplomatic pressure.",
          textTr: "Sonuç olarak, Trump yönetiminin çerçevesi iklim politikasının ekonomik maliyetlerine odaklanıp kuralsızlaştırmayı ve fosil yakıt genişlemesini savunurken; AB çerçevesi kırılganlığı, korumayı, adaleti ve ortak sorumluluğu ön plana çıkararak ABD'nin diplomatik baskıları altında yasalarını gevşetmeyi reddetmektedir."
        }
      ]
    },
    {
      id: "conclusion",
      titleEn: "8. Conclusion",
      titleTr: "8. Sonuç",
      blocks: [
        {
          id: "conc-core-1",
          type: "core",
          textEn: "This study has conducted a comparative analysis of how the U.S. and the EU frame climate change within the context of human security, revealing that two contrasting framings fundamentally shape their security perceptions and approaches to global climate governance. Frame theory has been instrumental in analyzing how these major actors highlight certain aspects of the same issue while disregarding others, subsequently transforming these framings into policy.",
          textTr: "Bu çalışma, ABD ve AB'nin iklim değişikliğini insan güvenliği bağlamında nasıl çerçevelediğine dair karşılaştırmalı bir analiz sunarak, iki zıt çerçevelemenin güvenlik algılarını ve küresel iklim yönetişimine yaklaşımlarını temelden şekillendirdiğini ortaya koymuştur. Çerçeveleme teorisi, bu büyük aktörlerin aynı konunun belirli yönlerini vurgularken diğerlerini nasıl göz ardı ettiklerini ve ardından bu çerçevelemeleri nasıl politikaya dönüştürdüklerini analiz etmede etkili olmuştur."
        },
        {
          id: "conc-core-2",
          type: "core",
          textEn: "Under the Trump administration, the U.S. did not frame climate change as a human security issue, as evidenced by policy documents and presidential speeches. On the contrary, climate policies were framed as threats to national security on the grounds that they allegedly harmed the economy and undermined energy independence. Despite the overwhelming scientific consensus on the climate crisis, the U.S. pursued a discourse that delegitimized science by claiming that it had been politicized, dismantling domestic and international policies and resuming intensive fossil fuel extraction.",
          textTr: "Trump yönetimi altında ABD, politika belgeleri ve başkanlık konuşmalarında görüldüğü üzere iklim değişikliğini bir insan güvenliği sorunu olarak çerçevelememiştir. Aksine, iklim politikaları, ekonomiye zarar verdiği ve enerji bağımsızlığını baltaladığı gerekçesiyle ulusal güvenliğe yönelik tehditler olarak çerçevelenmiştir. İklim krizine ilişkin ezici bilimsel fikir birliğine rağmen, ABD bilimin siyasallaştırıldığını iddia ederek meşruiyetini sarsan bir söylem izlemiş, yerel ve uluslararası politikaları yürürlükten kaldırmış ve yoğun fosil yakıt çıkarımına geri dönmüştür."
        },
        {
          id: "conc-core-3",
          type: "core",
          textEn: "The EU, on the other hand, perceives climate change as a threat to humanity and the planet as a whole, thereby framing it explicitly within the human security paradigm. The EU advocates that ensuring the planet’s sustainability requires inclusive and cooperative international policies that leave no one behind.",
          textTr: "Öte yandan AB, iklim değişikliğini bir bütün olarak insanlığa ve gezegene yönelik bir tehdit olarak algılamakta ve bunu açıkça insan güvenliği paradigması içinde çerçevelemektedir. AB, gezegenin sürdürülebilirliğini sağlamanın kimseyi geride bırakmayan kapsayıcı ve iş birlikçi uluslararası politikalar gerektirdiğini savunmaktadır."
        },
        {
          id: "conc-core-4",
          type: "core",
          textEn: "Ultimately, these fundamentally divergent framings have led to a profound weakening of global climate governance in the international arena, placing human security under greater threat. The U.S. denial of climate change and its economy-driven policies not only obstruct collective action but also intensify global crises that endanger human security.",
          textTr: "Sonuç olarak, bu temelden farklı çerçevelemeler küresel iklim yönetişiminin uluslararası alanda derin bir şekilde zayıflamasına yol açarak insan güvenliğini daha büyük bir tehdit altına sokmuştur. ABD'nin iklim değişikliğini reddetmesi ve ekonomiye dayalı politikaları yalnızca kolektif eylemi engellemekle kalmayıp, aynı zamanda insan güvenliğini tehlikeye atan küresel krizleri de şiddetlendirmektedir."
        }
      ]
    }
  ],
  tables: {
    rescissions: {
      en: [
        {
          order: "Protecting Public Health and the Environment and Restoring Science To Tackle the Climate Crisis",
          summary: "Biden's first executive order aimed at reinstating science-based policymaking. Trump's repeal halted federal-level measures against climate change."
        },
        {
          order: "Tackling the Climate Crisis at Home and Abroad",
          summary: "Comprehensive order placing climate change at the center of U.S. national security policy. Repeal removed domestic and international dimensions of U.S. climate security."
        },
        {
          order: "Establishment of the Climate Change Support Office",
          summary: "Its repeal removed the institutional support mechanism entirely."
        },
        {
          order: "Climate-Related Financial Risk",
          summary: "Required federal agencies and investors to incorporate climate risks in financial decisions. Repeal represents rejection of the economic security dimension of climate policy."
        },
        {
          order: "Strengthening American Leadership in Clean Cars and Trucks",
          summary: "Its repeal eliminates emission reduction strategies in the transportation sector."
        },
        {
          order: "Catalyzing Clean Energy Industries and Jobs Through Federal Sustainability",
          summary: "Aimed to transition federal agencies to carbon-neutral energy. Repeal halted the clean energy transition at the federal level."
        },
        {
          order: "Implementation of the Energy and Infrastructure Provisions of the Inflation Reduction Act of 2022",
          summary: "Implemented climate energy provisions of the IRA. Its repeal directly undermines green energy investments."
        },
        {
          order: "Withdrawal of Certain Areas off the U.S. Arctic Coast of the Outer Continental Shelf from Oil or Gas Leasing",
          summary: "Prohibited oil and gas drilling along the Arctic coast. Repeal reopened fossil fuel exploration in a highly sensitive climate region."
        },
        {
          order: "Revitalizing Our Nation's Commitment to Environmental Justice for All",
          summary: "Linked environmental justice to health of disadvantaged communities. Repeal eliminates environmental equity and human security perspectives."
        },
        {
          order: "Withdrawal of Certain Areas of the United States Outer Continental Shelf from Oil or Natural Gas Leasing",
          summary: "Limited oil/gas exploration in offshore coastal ecosystems. Repeal removed protections for marine ecosystems."
        },
        {
          order: "Rebuilding and Enhancing Programs To Resettle Refugees and Planning for the Impact of Climate Change on Migration",
          summary: "Recognized impact of climate change on migration. Repeal signifies denial of the link between climate-induced migration and human security."
        }
      ],
      tr: [
        {
          order: "Protecting Public Health and the Environment and Restoring Science To Tackle the Climate Crisis (Kamu Sağlığının ve Çevrenin Korunması ve İklim Kriziyle Mücadele İçin Bilimin Yeniden Tesis Edilmesi)",
          summary: "Biden yönetiminin bilimsel temelli politika yapımını geri getirmeyi amaçlayan ilk yürütme emri. Trump'ın iptali, federal düzeydeki iklim önlemlerini fiilen durdurmuştur."
        },
        {
          order: "Tackling the Climate Crisis at Home and Abroad (İklim Kriziyle Yurt İçinde ve Yurt Dışında Mücadele)",
          summary: "İklim değişikliğini ABD ulusal güvenlik politikasının merkezine yerleştiren kapsamlı bir kararname. İptali, ABD iklim güvenlik politikasının hem iç hem de uluslararası boyutlarını ortadan kaldırmıştır."
        },
        {
          order: "Establishment of the Climate Change Support Office (İklim Değişikliği Destek Ofisinin Kurulması)",
          summary: "İptali, bu kurumsal mekanizmayı tamamen ortadan kaldırmıştır."
        },
        {
          order: "Climate-Related Financial Risk (İklimle İlişkili Finansal Risk)",
          summary: "Federal kurumların ve yatırımcıların iklim risklerini finansal karar alma süreçlerine dahil etmesini gerektiriyordu. İptali, iklim politikasının ekonomik güvenlik boyutunun reddedilmesini temsil eder."
        },
        {
          order: "Strengthening American Leadership in Clean Cars and Trucks (Temiz Otomobil ve Kamyonlarda Amerikan Liderliğinin Güçlendirilmesi)",
          summary: "İptali, taşımacılık sektöründeki emisyon azaltma stratejilerini ortadan kaldırmıştır."
        },
        {
          order: "Catalyzing Clean Energy Industries and Jobs Through Federal Sustainability (Federal Sürdürülebilirlik Yoluyla Temiz Enerji Endüstrilerinin ve İstihdamının Katalize Edilmesi)",
          summary: "Federal kurumları karbon nötr enerjiye geçirmeyi amaçlıyordu. İptali, federal düzeydeki temiz enerji geçişini durdurmuştur."
        },
        {
          order: "Implementation of the Energy and Infrastructure Provisions of the Inflation Reduction Act of 2022 (2022 Enflasyonu Düşürme Yasasının Enerji ve Altyapı Hükümlerinin Uygulanması)",
          summary: "IRA'nın iklimle ilgili enerji ve altyapı hükümlerini uygulamıştır. İptali, yeşil enerji yatırımlarını doğrudan baltalamaktadır."
        },
        {
          order: "Withdrawal of Certain Areas off the U.S. Arctic Coast of the Outer Continental Shelf from Oil or Gas Leasing (Arktik Kıyısındaki Bazı Alanların Petrol veya Gaz Kiralamasından Çekilmesi)",
          summary: "Arktik kıyısı boyunca petrol ve gaz sondajını yasaklamıştı. İptali, iklim değişikliğine son derece duyarlı bir bölgede fosil yakıt aramasını yeniden açmıştır."
        },
        {
          order: "Revitalizing Our Nation's Commitment to Environmental Justice for All (Herkes İçin Çevresel Adalet Taahhüdümüzün Yeniden Canlandırılması)",
          summary: "Çevresel adalet kavramını dezavantajlı toplulukların sağlığı ve güvenliğiyle ilişkilendiriyordu. İptali, çevresel eşitlik ve insan güvenliği perspektiflerini ortadan kaldırmıştır."
        },
        {
          order: "Withdrawal of Certain Areas of the United States Outer Continental Shelf from Oil or Natural Gas Leasing (Dış Kıta Sahanlığındaki Bazı Alanların Petrol veya Doğal Gaz Kiralamasından Çekilmesi)",
          summary: "Kıyı ekosistemlerindeki petrol ve doğal gaz arama faaliyetlerini sınırlıyordu. İptali, deniz ekosistemleri için sağlanan korumaları kaldırmıştır."
        },
        {
          order: "Rebuilding and Enhancing Programs To Resettle Refugees and Planning for the Impact of Climate Change on Migration (Mültecilerin Yerleştirilmesi Programlarının Yeniden Yapılandırılması ve İklim Değişikliğinin Göç Üzerindeki Etkisinin Planlanması)",
          summary: "İklim değişikliğinin göç üzerindeki etkisini tanıyan ilk ABD politikalarından biriydi. İptali, iklim kaynaklı göç ile insan güvenliği arasındaki bağlantının reddedildiği anlamına gelir."
        }
      ]
    },
    comparison: {
      en: [
        {
          function: "Problem Definition",
          us: "Climate change itself is not framed as a human security threat. Instead, climate policy is defined as an economic burden, a constraint on energy independence, and a threat to national competitiveness.",
          eu: "Climate change is defined as a global and human security threat (a 'threat multiplier') that endangers lives, livelihoods, health, development, and political stability."
        },
        {
          function: "Causal Interpretation",
          us: "Responsibility for negative impacts is attributed to previous administrations' overregulation, international climate agreements, and politicized climate science.",
          eu: "Responsibility is attributed to human-induced emissions, fossil-fuel dependence, insufficient global cooperation, and existing social vulnerabilities."
        },
        {
          function: "Moral Evaluation",
          us: "Climate policies are evaluated as unfair, costly, ideologically driven, and harmful to American workers, businesses, and taxpayers.",
          eu: "Climate action is evaluated as a matter of global responsibility, solidarity, climate justice, and protection of vulnerable populations."
        },
        {
          function: "Treatment Recommendation",
          us: "Proposes withdrawal from international climate commitments (like the Paris Agreement), deregulation, expansion of domestic fossil-fuel production, and economic nationalism.",
          eu: "Proposes multilateral cooperation, binding emissions reduction, climate finance for developing countries, a just transition, and integrating climate into defence."
        }
      ],
      tr: [
        {
          function: "Sorun Tanımlama (Problem Definition)",
          us: "İklim değişikliğinin kendisi bir insan güvenliği tehdidi olarak çerçevelenmez. Bunun yerine iklim politikası; ekonomik bir yük, enerji bağımsızlığı önünde bir engel ve ulusal rekabetçiliğe bir tehdit olarak tanımlanır.",
          eu: "İklim değişikliği; yaşamı, geçimi, sağlığı, kalkınmayı ve siyasi istikrarı tehlikeye atan küresel ve insani bir güvenlik tehdidi (bir 'tehdit çarpanı') olarak tanımlanır."
        },
        {
          function: "Nedensel Yorumlama (Causal Interpretation)",
          us: "Olumsuz etkilerin sorumluluğu; önceki yönetimlerin aşırı düzenlemelerine, uluslararası iklim anlaşmalarına ve siyasallaştırılmış iklim bilimine atfedilir.",
          eu: "Sorumluluk; insan kaynaklı emisyonlara, fosil yakıtlara olan bağımlılığa, yetersiz küresel iş birliğine ve mevcut sosyal kırılganlıklara atfedilir."
        },
        {
          function: "Ahlaki Değerlendirme (Moral Evaluation)",
          us: "İklim politikaları; haksız, maliyetli, ideolojik olarak yönlendirilen ve Amerikalı işçilere, işletmelere ve vergi mükelleflerine zarar veren uygulamalar olarak değerlendirilir.",
          eu: "İklim eylemi; küresel sorumluluk, dayanışma, iklim adaleti ve kırılgan nüfusların korunması meselesi olarak değerlendirilir."
        },
        {
          function: "Çözüm Önerisi (Treatment Recommendation)",
          us: "Uluslararası iklim taahhütlerinden (Paris Anlaşması gibi) çekilmeyi, kuralsızlaştırmayı, yerli fosil yakıt üretiminin artırılmasını ve ekonomik milliyetçiliği önerir.",
          eu: "Çok taraflı iş birliğini, bağlayıcı emisyon azaltımını, gelişmekte olan ülkeler için iklim finansmanını, adil geçişi ve iklimin savunma politikalarına entegre edilmesini önerir."
        }
      ]
    }
  }
};

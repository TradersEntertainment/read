// Academic Layer Reader - Article Data
// Modular block structure supporting:
// 1. Full Word-for-Word Version (sections)
// 2. Simplified/Condensed Version (sectionsSimplified)
//
// In both versions, blocks are typed as "core", "background", or "table" to support
// Cognitive Layering (hiding background blocks), Highlight, and Classic modes.

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
    pdfUrl: "https://dergipark.org.tr/tr/download/article-file/5457662"
  },
  
  // ==========================================
  // 1. WORD-FOR-WORD VERSION (FULL METXT)
  // ==========================================
  sections: [
    {
      id: "abstract",
      titleEn: "Abstract & Öz",
      titleTr: "Öz & Abstract",
      blocks: [
        {
          id: "abs-f1",
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
          id: "intro-fbg-1",
          type: "background",
          textEn: "The effects of climate change are becoming increasingly evident today, and the anticipated global consequences represent a multidimensional threat to international security. The security implications of climate change are not confined to state-centered threats alone; rather, climate change has emerged as an issue of “human security,” endangering individuals’ living conditions, livelihoods, health, and access to shelter. In this context, the multifaceted risks posed by climate change are redefining the scope of security and bringing the relationship between environmental sustainability and human well-being into contemporary security debates.",
          textTr: "Günümüzde iklim değişikliğinin etkileri giderek daha belirgin hale gelmekte ve öngörülen küresel sonuçlar uluslararası güvenlik için çok boyutlu bir tehdit oluşturmaktadır. İklim değişikliğinin güvenlik üzerindeki etkileri yalnızca devlet merkezli tehditlerle sınırlı değildir; aksine, iklim değişikliği bireylerin yaşam koşullarını, geçim kaynaklarını, sağlıklarını ve barınmaya erişimlerini tehlikeye atan bir “insan güvenliği” sorunu olarak ortaya çıkmıştır. Bu bağlamda, iklim değişikliğinin sunduğu çok yönlü riskler güvenliğin kapsamını yeniden tanımlmakta ve çevresel sürdürülebilirlik ile insan refahı arasındaki ilişkiyi çağdaş güvenlik tartışmalarına taşımaktadır."
        },
        {
          id: "intro-fcore-1",
          type: "core",
          textEn: "When discussing the impacts of <span class=\"info-trigger\" data-target=\"intro-fbg-1\">climate change on human security</span>, it becomes crucial to examine how actors within the international system address this issue. Beyond the inherent relationship between climate change and human security, understanding how states perceive and interpret this phenomenon is essential for grasping the policies they pursue in response to this global threat.",
          textTr: "Aktörlerin bu konuyu nasıl ele aldığını incelemek, <span class=\"info-trigger\" data-target=\"intro-fbg-1\">iklim değişikliğinin insan güvenliği üzerindeki etkilerini</span> tartışırken kritik bir önem kazanmaktadır. İklim değişikliği ile insan güvenliği arasındaki doğal ilişkinin ötesinde, devletlerin bu olguyu nasıl algıladıklarını ve yorumladıklarını anlamak, bu küresel tehdide yanıt olarak izledikleri politikaları kavramak açısından esastır."
        },
        {
          id: "intro-fcore-2",
          type: "core",
          textEn: "Building on this premise, this study comparatively analyzes how two major global actors—the United States and the European Union—framed climate change as a human security issue, with a particular focus on the two Trump administrations.",
          textTr: "Bu temelden hareketle, bu çalışma, iki önemli küresel aktörün —Amerika Birleşik Devletleri ve Avrupa Birliği— iklim değişikliğini bir insan güvenliği meselesi olarak nasıl çerçevelediğini, özellikle iki Trump yönetimi odağında karşılaştırmalı olarak analiz etmektedir."
        },
        {
          id: "intro-fcore-3",
          type: "core",
          textEn: "This article seeks to answer the following research question: How have the U.S. under the Trump administration and the EU framed climate change as a human security challenge? By addressing this question, the study aims to reveal how the framing approaches of these two actors have brought climate change onto their respective security agendas and shaped their conceptualizations of human security.",
          textTr: "Bu makale şu araştırma sorusuna cevap aramaktadır: Trump yönetimi altındaki ABD ve AB, iklim değişikliğini bir insan güvenliği sorunu olarak nasıl çerçevelemiştir? Çalışma, bu soruyu ele alarak, bu iki aktörün çerçeveleme yaklaşımlarının iklim değişikliğini kendi güvenlik gündemlerine nasıl taşıdığını ve insan güvenliği kavramsallaştırmalarını nasıl şekillendirdiğini ortaya koymayı amaçlamaktadır."
        },
        {
          id: "intro-fbg-2",
          type: "background",
          textEn: "This article adopts a qualitative comparative research design based on framing analysis. Drawing on Entman’s framing theory, it examines how the United States under the Trump administration and the European Union frame climate change in relation to human security. The study focuses on Trump’s first presidential term (2016–2020) and his second presidential term, which began in 2025.",
          textTr: "Bu makale, çerçeveleme analizine dayalı nitel karşılaştırmalı bir araştırma tasarımı benimsemektedir. Entman’ın çerçeveleme teorisinden yararlanarak, Trump dönemi altındaki Amerika Birleşik Devletleri ve Avrupa Birliği'nin iklim değişikliğini insan güvenliği ile ilişkili olarak nasıl çerçevelediğini incelemektedir. Çalışma, Trump’ın ilk başkanlık dönemine (2016–2020) ve 2025 yılında başlayan ikinci başkanlık dönemine odaklanmaktadır."
        },
        {
          id: "intro-fbg-3",
          type: "background",
          textEn: "The analysis is based on 19 primary texts and institutional materials. The U.S. material includes six texts: one presidential speech, one presidential proclamation, and four executive orders. The EU material includes 13 texts: one European Council presidency conclusion, five European Commission communications or notices, three European Commission institutional webpages, one European Commission audiovisual statement, one joint report by the European Commission and the High Representative, and two European External Action Service documents. The selected documents were included because they are official or institutionally attributable texts that directly address the article’s research question. They reflect how the Trump administration and the EU define climate change, assign responsibility, make normative evaluations, and justify policy responses. Therefore, they provide a suitable basis for comparing how climate change is framed in relation to human security. The analysis follows Entman’s four framing functions: problem definition, causal interpretation, moral evaluation, and treatment recommendation. The texts were examined to identify how climate change was defined, explained, evaluated, and linked to policy responses, and whether it was framed as a human security issue.",
          textTr: "Analiz, 19 birincil metin ve kurumsal materyale dayanmaktadır. ABD materyalleri 6 metinden oluşmaktadır: bir başkanlık konuşması, bir başkanlık bildirisi ve dört başkanlık kararnamesi. AB materyalleri ise 13 metinden oluşmaktadır: bir Avrupa Konseyi dönem başkanlığı kararı, beş Avrupa Komisyonu bildirisi veya bildirimi, üç Avrupa Komisyonu kurumsal web sayfası, bir Avrupa Komisyonu görsel-işitsel açıklaması, Avrupa Komisyonu ve Yüksek Temsilci tarafından hazırlanan bir ortak rapor ve iki Avrupa Dış İlişkiler Servisi (EEAS) belgesi. Seçilen belgeler, makalenin araştırma sorusunu doğrudan ele alan resmi veya kurumsal olarak atfedilebilir metinler oldukları için dahil edilmiştir. Bu belgeler, Trump yönetiminin ve AB'nin iklim değişikliğini nasıl tanımladığını, sorumluluğu nasıl atfettiğini, normatif değerlendirmeleri nasıl yaptığını ve politika yanıtlarını nasıl gerekçelendirdiğini yansıtmaktadır. Analiz, Entman'ın dört çerçeveleme işlevini (sorun tanımlama, nedensel yorumlama, ahlaki değerlendirme ve tedavi önerisi) takip etmektedir. Metinler, iklim değişikliğinin nasıl tanımlandığını, açıklandığını, değerlendirildiğini, politika yanıtlarıyla nasıl ilişkilendirildiğini ve bir insan güvenliği sorunu olarak çerçevelenip çerçevelenmediğini belirlemek için incelenmiştir."
        },
        {
          id: "intro-fcore-4",
          type: "core",
          textEn: "To address this question, this study adopts a <span class=\"info-trigger\" data-target=\"intro-fbg-2\">qualitative comparative research design</span> based on framing analysis, examining the U.S. and the EU across <span class=\"info-trigger\" data-target=\"intro-fbg-3\">19 primary texts and institutional materials</span> covering the two Trump administrations and the EU's policies.",
          textTr: "Bu soruyu ele almak için bu çalışma, çerçeveleme analizine dayalı <span class=\"info-trigger\" data-target=\"intro-fbg-2\">nitel karşılaştırmalı bir araştırma tasarımı</span> benimsemekte ve iki Trump dönemi ile AB politikalarını kapsayan <span class=\"info-trigger\" data-target=\"intro-fbg-3\">19 birincil metin ve kurumsal materyal</span> üzerinden ABD ile AB'yi incelemektedir."
        }
      ]
    },
    {
      id: "theory",
      titleEn: "2. Theoretical Framework",
      titleTr: "2. Kuramsal Çerçeve",
      blocks: [
        {
          id: "theory-fbg-1",
          type: "background",
          textEn: "The conceptual framework of this study is grounded in frame theory. Framing is essentially a rhetorical tool used by communicators to delimit an argument. The purpose of strategic framing is to direct the audience’s attention toward a desired perspective. Therefore, framing constitutes a critical element in the construction of social reality by shaping perceptions (Hallahan, 2008). It plays a key role in the formation of social issues and the public discourses surrounding them. From a political standpoint, framing is strategically employed to influence public opinion and to guide the representation of political narratives (Gözkaman, 2025).",
          textTr: "Bu çalışmanın kavramsal çerçevesi çerçeveleme teorisine dayanmaktadır. Çerçeveleme, esas olarak iletişimciler tarafından bir argümanı sınırlandırmak için kullanılan retorik bir araçtır. Stratejik çerçevelemenin amacı, dinleyicinin dikkatini istenen bir perspektife yönlendirmektir. Bu nedenle çerçeveleme, algıları şekillendirerek toplumsal gerçekliğin inşasında kritik bir unsur oluşturur (Hallahan, 2008). Toplumsal sorunların ve onları çevreleyen kamu söylemlerinin oluşumunda kilit bir rol oynar. Siyasi bir açıdan bakıldığında çerçeveleme, kamuoyunu etkilemek ve siyasi anlatıların temsilini yönlendirmek için stratejik olarak kullanılır (Gözkaman, 2025)."
        },
        {
          id: "theory-fbg-2",
          type: "background",
          textEn: "Frames are defined not only by what they include but also by what they exclude. While drawing attention to certain aspects of reality, they simultaneously obscure others (Kahneman and Tversky, 1984). In the political context, actors approach an issue not in its entirety but by emphasizing the elements that serve their objectives, thereby engaging in targeted propaganda. Selecting certain aspects of an issue while disregarding others plays a fundamental role in shaping public opinion and decision-making processes (Gözkaman, 2025a). From this standpoint, a frame establishes the boundaries of interpretation and provides the lens through which reality is perceived (Gözkaman, 2025b). Politicians seek to mobilize voters behind their policies and encourage them to think along specific interpretive lines (Chong and Druckman, 2007).",
          textTr: "Çerçeveler sadece neyi içerdikleriyle değil, aynı zamanda neyi dışarıda bıraktıklarıyla da tanımlanır. Gerçekliğin belirli yönlerine dikkat çekerken, diğerlerini eşzamanlı olarak perdelerler (Kahneman ve Tversky, 1984). Siyasi bağlamda aktörler bir konuyu bütünüyle değil, kendi hedeflerine hizmet eden unsurları vurgulayarak ele alırlar ve böylece hedefli bir propaganda yürütürler. Bir konunun belirli yönlerini seçip diğerlerini göz ardı etmek, kamuoyunu ve karar alma süreçlerini şekillendirmede temel bir rol oynar (Gözkaman, 2025a). Bu açıdan bakıldığında bir çerçeve, yorumlama sınırlarını çizer ve gerçekliğin algılanmasını sağlayan merceği sunar (Gözkaman, 2025b). Politikacılar seçmenleri kendi politikalarının arkasında birleştirmeye ve onları belirli yorumlama çizgilerinde düşünmeye teşvik etmeye çalışırlar (Chong ve Druckman, 2007)."
        },
        {
          id: "theory-fbg-3",
          type: "background",
          textEn: "Framing can be evaluated in both positive and negative terms. On one hand, it may be viewed as a strategy for manipulating or deceiving individuals; on the other, it can neutrally refer to a learning process through which people develop shared beliefs. However, within the public sphere, framing often carries negative connotations. The effects of framing suggest that public preferences are arbitrarily distributed and that political elites may manipulate these preferences to serve their own interests. The aim here is not to determine what the information itself is, but rather how the same information is contextualized or presented. For instance, framing outcomes in terms of “gains” or “losses” can alter individuals’ responses to risk (Cacciatore et al., 2016). In other words, when two actors emphasize opposing aspects of the same situation in ways that serve their respective interests and use these for propaganda, it can be observed that their publics perceive the very same situation in entirely opposite ways.",
          textTr: "Çerçeveleme hem olumlu hem de olumsuz terimlerle değerlendirilebilir. Bir yandan bireyleri manipüle etme veya aldatma stratejisi olarak görülebilir; diğer yandan insanların ortak inançlar geliştirdikleri bir öğrenme sürecine nötr olarak atıfta bulunabilir. Ancak kamusal alanda çerçeveleme genellikle olumsuz çağrışımlar taşır. Çerçevelemenin etkileri, kamu tercihlerinin keyfi olarak dağıtıldığını ve siyasi elitlerin bu tercihleri kendi çıkarlarına hizmet edecek şekilde manipüle edebileceğini göstermektedir. Burada amaç bilginin kendisinin ne olduğunu belirlemek değil, aynı bilginin nasıl bağlamlaştırıldığı veya sunulduğudur. Örneğin, çerçeveleme sonuçlarının \"kazanımlar\" veya \"kayıplar\" şeklinde sunulması bireylerin riske verdikleri yanıtları değiştirebilir (Cacciatore ve diğerleri, 2016). Başka bir deyişle, iki aktör aynı durumun zıt yönlerini kendi çıkarlarına hizmet edecek şekilde vurgulayıp bunları propaganda için kullandıklarında, halklarının aynı durumu tamamen zıt şekillerde algıladığı gözlemlenebilir."
        },
        {
          id: "theory-fbg-4",
          type: "background",
          textEn: "A frame typically fulfills four core functions. The first is problem definition, which identifies the agents responsible for an issue and the consequences of their actions. The second is diagnosing causes, the third involves making moral evaluations, and the fourth is proposing solutions. The concept of salience is crucial in framing. In framing, it is not only important to select certain aspects of perceived reality but also to make them more prominent within a communicating text. This is done in such a way as to promote a specific problem definition, causal interpretation, moral evaluation, or proposed remedy for the issue at hand (Entman, 1993). In conclusion, framing is not a superficial discursive tool of political communication but rather a strategic practice that constructs power relations, generates legitimacy, and shapes public perception. For politicians, framing involves not merely conveying ideas but also defining and reconstructing social reality. Hence, framing should be regarded as one of the fundamental instruments of power in contemporary democratic politics.",
          textTr: "Bir çerçeve tipik olarak dört temel işlevi yerine getirir. Birincisi, bir sorundan sorumlu olan aktörleri ve eylemlerinin sonuçlarını belirleyen sorun tanımlamadır. İkincisi nedenleri teşhis etmek, üçüncüsü ahlaki değerlendirmeler yapmak ve dördüncüsü çözümler önermektir. Belirginlik (salience) kavramı çerçevelemede çok önemlidir. Çerçevelemede, algılanan gerçekliğin sadece belirli yönlerini seçmek değil, aynı zamanda bunları bir iletişim metni içinde daha belirgin hale getirmek de önemlidir. Bu, ele alınan konu için belirli bir sorun tanımını, nedensel yorumu, ahlaki değerlendirmeyi veya önerilen çözümü teşvik edecek şekilde yapılır (Entman, 1993). Sonuç olarak çerçeveleme, siyasi iletişimin yüzeysel bir söylemsel aracı değil, aksine güç ilişkilerini inşa eden, meşruiyet üreten ve kamuoyu algısını şekillendiren stratejik bir uygulamadır. Politikacılar için çerçeveleme sadece fikirleri iletmeyi değil, aynı zamanda toplumsal gerçekliği tanımlamayı ve yeniden inşa etmeyi içerir. Dolayısıyla çerçeveleme, çağdaş demokratik siyasette gücün temel araçlarından biri olarak kabul edilmelidir."
        },
        {
          id: "theory-fbg-5",
          type: "background",
          textEn: "It is therefore unsurprising that many studies in International Relations (IR) have adopted framing as an analytical lens. Scholars have employed the paradigm to examine a wide range of phenomena, including foreign policy change (Barnett, 1999) and legitimation (Goddard, 2009), power (Sorkar, 2022), norm dynamics (Payne, 2001; Finnemore, 2015), media-foreign policy interactions (Entman, 2009) and the role of non-state actors in international relations (Bob, 2005). A particularly vibrant area of inquiry has been securitization studies (Vultee, 2010; Rushton, 2010) including those that focus on areas that prioritize collective securitization (Gözkaman, 2024; Sperling and Webber, 2017; Sperling and Webber, 2019). Closely related to the focus of this article, it is also worth noting that framing has been extensively applied to environmental politics, encompassing country-specific analyses (Martus, 2021; Rowe, 2013), NGO-focused research (Allan and Hadden, 2017) and studies on green diplomacy (Broadhead, 2002).",
          textTr: "Bu nedenle, Uluslararası İlişkilerdeki (IR) birçok çalışmanın çerçevelemeyi analitik bir mercek olarak benimsemesi şaşırtıcı değildir. Akademisyenler bu paradigmayı, dış politika değişikliği (Barnett, 1999) ve meşrulaştırma (Goddard, 2009), güç (Sorkar, 2022), norm dinamikleri (Payne, 2001; Finnemore, 2015), medya-dış politika etkileşimleri (Entman, 2009) ve uluslararası ilişkilerde devlet dışı aktörlerin rolü (Bob, 2005) dahil olmak üzere geniş bir yelpazedeki olguları incelemek için kullanmışlardır. Özellikle hareketli bir araştırma alanı, kolektif güvenlikleştirmeyi önceliklendiren çalışmalara odaklananlar da dahil olmak üzere güvenlikleştirme çalışmaları (Vultee, 2010; Rushton, 2010) olmuştur (Gözkaman, 2024; Sperling ve Webber, 2017; Sperling ve Webber, 2019). Bu makalenin odağıyla yakından ilişkili olarak, çerçevelemenin ülkeye özel analizleri (Martus, 2021; Rowe, 2013), STK odaklı araştırmaları (Allan ve Hadden, 2017) ve yeşil diplomasi çalışmalarını (Broadhead, 2002) kapsayacak şekilde çevre siyasetine de yaygın olarak uygulandığını belirtmek gerekir."
        },
        {
          id: "theory-fcore-1",
          type: "core",
          textEn: "In this study, <span class=\"info-trigger\" data-target=\"theory-fbg-1\">frame theory</span> is employed to analyze how the U.S. and the EU constructed their discourses on climate change under the two Trump administrations, and whether they framed the issue within the context of human security. Since the Trump administration portrayed environmental regulations as obstacles to economic growth, its framing did not conceptualize climate change as a security threat. In contrast, the EU’s discourse adopted a human security and collective responsibility framework, linking climate action to the protection of human life, global justice, and sustainable development.",
          textTr: "Bu çalışmada, iki Trump dönemi altında ABD ve AB'nin iklim değişikliği söylemlerini nasıl inşa ettiklerini ve konuyu insan güvenliği bağlamında çerçeveleyip çerçevelemediklerini analiz etmek için <span class=\"info-trigger\" data-target=\"theory-fbg-1\">çerçeveleme teorisi</span> kullanılmıştır. Trump yönetimi çevresel düzenlemeleri ekonomik büyümenin önündeki engeller olarak sunduğundan, çerçevelemesi iklim değişikliğini bir güvenlik tehdidi olarak kavramsallaştırmamıştır. Buna karşılık, AB’nin söylemi insan güvenliği ve ortak sorumluluk çerçevesini benimsemiş; iklim eylemini insan hayatının korunması, küresel adalet ve sürdürülebilir kalkınma ile ilişkilendirmiştir."
        },
        {
          id: "theory-fcore-2",
          type: "core",
          textEn: "Accordingly, frame theory provides a robust theoretical foundation for this comparative analysis by revealing how meaning is constructed, communicated, and contested in climate change politics. Guided by <span class=\"info-trigger\" data-target=\"theory-fbg-2\">strategic exclusion principles</span> and <span class=\"info-trigger\" data-target=\"theory-fbg-3\">elite representation frameworks</span>, we apply <span class=\"info-trigger\" data-target=\"theory-fbg-4\">Entman's four core functions</span>, building upon a rich body of <span class=\"info-trigger\" data-target=\"theory-fbg-5\">International Relations and environmental politics studies</span> that utilize framing to understand global discourse.",
          textTr: "Buna göre çerçeveleme teorisi, iklim değişikliği politikasında anlamın nasıl inşa edildiğini, iletildiğini ve tartışıldığını ortaya koyarak bu karşılaştırmalı analiz için sağlam bir teorik temel sağlamaktadır. <span class=\"info-trigger\" data-target=\"theory-fbg-2\">Stratejik dışlama ilkeleri</span> ve <span class=\"info-trigger\" data-target=\"theory-fbg-3\">seçkin temsil çerçevelerinin</span> rehberliğinde, küresel söylemi anlamak için çerçevelemeyi kullanan zengin bir <span class=\"info-trigger\" data-target=\"theory-fbg-5\">Uluslararası İlişkiler ve çevre siyaseti çalışmaları</span> birikimine dayanarak <span class=\"info-trigger\" data-target=\"theory-fbg-4\">Entman'ın dört temel işlevini</span> uyguluyoruz."
        }
      ]
    },
    {
      id: "literature",
      titleEn: "3. Literature Review",
      titleTr: "3. Literatür Taraması",
      blocks: [
        {
          id: "lit-fbg-1",
          type: "background",
          textEn: "The existing literature includes extensive studies on climate change and human security, which highlight the impacts of climate change on various dimensions of human well-being (Mason, 2015; Dalby, 2013; Barnett and Adger, 2007; O’Brien, 2010; Saul and McAdam, 2009). Additionally, there is a substantial body of work examining how the U.S. and the EU frame the issue of climate change and shape their respective climate policies. Drawing on this literature, it is evident that the EU conceptualizes climate change as a global threat and a “challenge to human security”. Accordingly, EU policy documents allocate significant attention to climate change within their broader security and environmental agendas (Dupont, 2023; Skovgaard, 2013; Rayner, 2016; Jordan et al., 2012; Baute, 2024; Richter and Wanner, 2025).",
          textTr: "Mevcut literatür, iklim değişikliğinin insan refahının çeşitli boyutları üzerindeki etkilerini vurgulayan geniş çalışmaları içermektedir (Mason, 2015; Dalby, 2013; Barnett ve Adger, 2007; O’Brien, 2010; Saul ve McAdam, 2009). Ayrıca, ABD ve AB'nin iklim değişikliği konusunu nasıl çerçevelediğini ve iklim politikalarını nasıl şekillendirdiğini inceleyen önemli çalışmalar mevcuttur. Bu literatüre dayanarak, AB'nin iklim değişikliğini küresel bir tehdit ve \"insan güvenliğine yönelik bir sorun\" olarak kavramsallaştırdığı açıktır. Buna göre, AB politika belgeleri, daha geniş güvenlik ve çevre gündemleri içinde iklim değişikliğine önemli yer ayırmaktadır (Dupont, 2023; Skovgaard, 2013; Rayner, 2016; Jordan ve diğerleri, 2012; Baute, 2024; Richter ve Wanner, 2025)."
        },
        {
          id: "lit-fbg-2",
          type: "background",
          textEn: "In contrast, the U.S., particularly under the Trump administration, has approached the issue of climate change through a lens dominated by political and economic priorities. In recent years, references to “climate change” have even been excluded from certain scientific research frameworks. The U.S. tends to frame climate change not as a matter of national or human security, but rather as a political issue that restricts economic freedoms (Jacobs and Khan, 2025; Frumkin et al., 2025). From this perspective, the EU and the U.S. represent two fundamentally opposing approaches.",
          textTr: "Buna karşılık ABD, özellikle Trump yönetimi altında, iklim değişikliği konusuna siyasi ve ekonomik önceliklerin hakim olduğu bir mercekten yaklaşmıştır. Son yıllarda, bazı bilimsel araştırma çerçevelerinden \"iklim değişikliği\" atıfları bile çıkarılmıştır. ABD, iklim değişikliğini ulusal veya insan güvenliği meselesi olarak değil, daha ziyade ekonomik özgürlükleri kısıtlayan siyasi bir sorun olarak çerçeveleme eğilimindedir (Jacobs ve Khan, 2025; Frumkin ve diğerleri, 2025). Bu açıdan bakıldığında, AB ve ABD temelde iki karşıt yaklaşımı temsil etmektedir."
        },
        {
          id: "lit-fbg-3",
          type: "background",
          textEn: "Although limited, some comparative analyses in the literature have examined how the EU and the U.S. frame and construct their climate policies (Hayes and Knox-Hayes, 2014; Carlarne, 2006; Bakker and Francioni, 2016; Carlarne, 2010; Wendler, 2022). Wendler (2022), for instance, analyzes the interactions between parliaments and executive bodies in both the EU and the U.S., demonstrating how the issue of climate change is framed and politicized in distinct ways. However, Wendler’s analysis was conducted before Trump’s return to the presidency for a second term. Indeed, Wendler notes that, in the aftermath of the Russia–Ukraine war, the trajectory of U.S. climate policy remained difficult to predict and suggests that the suspension of U.S. energy imports from Russia could potentially push the country toward greater reliance on sustainable energy sources (Wendler, 2022: 226). The political context examined in this article therefore provides an opportunity to reassess this trajectory in light of the second Trump presidency.",
          textTr: "Sınırlı da olsa, literatürdeki bazı karşılaştırmalı analizler AB ve ABD'nin iklim politikalarını nasıl çerçevelediğini ve inşa ettiğini incelemiştir (Hayes ve Knox-Hayes, 2014; Carlarne, 2006; Bakker ve Francioni, 2016; Carlarne, 2010; Wendler, 2022). Örneğin Wendler (2022), hem AB hem de ABD'deki parlamentolar ile yürütme organları arasındaki etkileşimleri analiz ederek iklim değişikliği konusunun farklı şekillerde nasıl çerçevelendiğini ve siyasallaştırıldığını göstermektedir. Ancak Wendler’ın analizi, Trump’ın ikinci dönem başkanlığına geri dönmesinden önce yapılmıştır. Nitekim Wendler, Rusya-Ukrayna savaşı sonrasında ABD iklim politikasının gidişatını tahmin etmenin zor olduğunu belirtmekte ve ABD'nin Rusya'dan enerji ithalatını durdurmasının ülkeyi sürdürülebilir enerji kaynaklarına daha fazla bağımlı olmaya itebileceğini öne sürmektedir (Wendler, 2022: 226). Dolayısıyla bu makalede incelenen siyasi bağlam, ikinci Trump başkanlığı ışığında bu gidişatı yeniden değerlendirme fırsatı sunmaktadır."
        },
        {
          id: "lit-fcore-1",
          type: "core",
          textEn: "This article builds on these studies rather than departing from them. Its contribution lies in extending the comparison to the context of Trump’s second presidency and, more importantly, in shifting the analytical focus from climate policy contestation in general to the specific question of whether climate change is framed as a human security challenge.",
          textTr: "Bu makale, söz konusu çalışmalardan ayrılmaktan ziyade onların üzerine inşa edilmektedir. Makalenin katkısı, karşılaştırmayı Trump’ın ikinci başkanlığı bağlamına genişletmesinde ve daha da önemlisi, analitik odağı genel olarak iklim politikası tartışmalarından iklim değişikliğinin bir insan güvenliği sorunu olarak çerçevelenip çerçevelenmediği sorusuna kaydırmasında yatmaktadır."
        },
        {
          id: "lit-fcore-2",
          type: "core",
          textEn: "In this respect, the study shows not only that the EU and the U.S. frame climate change differently, but also how these frames redefine the boundaries of security itself. While the EU frames it as a <span class=\"info-trigger\" data-target=\"lit-fbg-1\">global human security challenge</span>, the U.S. under Trump frames it as an <span class=\"info-trigger\" data-target=\"lit-fbg-2\">economic barrier</span>. By analyzing this divergence in light of <span class=\"info-trigger\" data-target=\"lit-fbg-3\">recent comparative research gaps</span>, the article demonstrates how each actor defines the problem, attributes responsibility, constructs moral legitimacy, and proposes remedies in ways that either institutionalize or exclude the human security dimension of climate change.",
          textTr: "Bu bağlamda çalışma, sadece AB ve ABD'nin iklim değişikliğini farklı çerçevelediğini göstermekle kalmayıp, aynı zamanda bu çerçevelerin güvenliğin sınırlarını nasıl yeniden tanımladığını da ortaya koymaktadır. AB bunu <span class=\"info-trigger\" data-target=\"lit-fbg-1\">küresel bir insan güvenliği sorunu</span> olarak çerçevelerken, Trump yönetimindeki ABD <span class=\"info-trigger\" data-target=\"lit-fbg-2\">ekonomik bir engel</span> olarak sunmaktadır. Bu ayrışmayı <span class=\"info-trigger\" data-target=\"lit-fbg-3\">yakın dönemdeki karşılaştırmalı araştırma boşlukları</span> ışığında analiz eden makale, her bir aktörün sorunu nasıl tanımladığını, sorumluluğu nasıl atfettiğini, ahlaki meşruiyeti nasıl inşa ettiğini ve çözümleri iklim değişikliğinin insan güvenliği boyutunu kurumsallaştıracak veya dışlayacak şekilde nasıl önerdiğini göstermektedir."
        }
      ]
    },
    {
      id: "human-security",
      titleEn: "4. The Concept of Human Security and Its Role in Climate Change",
      titleTr: "4. İnsan Güvenliği Kavramı ve İklim Değişikliğindeki Rolü",
      blocks: [
        {
          id: "hs-fbg-1",
          type: "background",
          textEn: "The concept of human security represents a shift beyond the traditional understanding that centers on the security of the state. Its primary subject is the individual, and its main objective is to protect people from both conventional and non-conventional threats. Expanding the focus of the security agenda beyond the state-centered approach does not imply excluding state security; rather, it complements and broadens it (Gregoratti, 2025).",
          textTr: "İnsan güvenliği kavramı, devletin güvenliğine odaklanan geleneksel anlayışın ötesine geçen bir değişimi temsil eder. Birincil konusu bireydir ve temel amacı insanları hem geleneksel hem de geleneksel olmayan tehditlerden korumayı amaçlar. Güvenlik gündeminin odağını devlet merkezli yaklaşımın ötesine genişletmek, devlet güvenliğini dışlamak anlamına gelmez; aksine onu tamamlar ve genişletir (Gregoratti, 2025)."
        },
        {
          id: "hs-fbg-2",
          type: "background",
          textEn: "In 1990, the United Nations Development Programme (UNDP) began publishing annual reports on the human dimension of development. The 1990 Human Development Report marked the first step in this direction (UNDP, 1990). Building on this, the 1994 Human Development Report officially introduced an expansive framework for human security, categorizing threats into seven broad dimensions: economic, food, health, environmental, personal, community, and political security (UNDP, 1994).",
          textTr: "1990 yılında Birleşmiş Milletler Kalkınma Programı (UNDP), kalkınmanın insani boyutu üzerine yıllık raporlar yayınlamaya başlamıştır. 1990 İnsani Gelişme Raporu bu yöndeki ilk adımı oluşturmuştur (UNDP, 1990). Bunun üzerine inşa edilen 1994 İnsani Gelişme Raporu, tehditleri yedi geniş boyuta ayırarak insan güvenliği için geniş kapsamlı bir çerçeveyi resmen tanıtmıştır: ekonomik, gıda, sağlık, çevre, kişisel, toplumsal ve siyasi güvenlik (UNDP, 1994)."
        },
        {
          id: "hs-fbg-3",
          type: "background",
          textEn: "However, this all-encompassing conceptualization has been debated particularly in relation to the distinction between broad and narrow definitions of human security. In this context, Roland Paris (2001: 88) criticized existing definitions as “expansive and vague” and argued that such “cultivated ambiguity” made human security effective as a political campaign slogan but less useful as a practical guide for academic research and policymaking. By contrast, Pettman (2005: 140–141) warned that attempts to narrow the concept within rigid rationalist or state-centric frameworks may obscure the communal, cultural, and sacred dimensions of human vulnerability. Criticizing Pettman’s position, Paris (2005: 481) argued that a concept formulated in such a way as to potentially encompass everything risks becoming an “empty container” or a “Rorschach ink blot.” He further stated that if human security means everything, then it effectively means nothing. These debates show that human security is shaped by a tension between clarity and breadth.",
          textTr: "Ancak, bu her şeyi kapsayan kavramsallaştırma, özellikle insan güvenliğinin geniş ve dar tanımları arasındaki ayrım bağlamında tartışılmıştır. Bu doğrultuda Roland Paris (2001: 88), mevcut tanımları \"geniş ve belirsiz\" olarak eleştirmiş ve bu tür \"bilinçli belirsizliklerin\" insan güvenliğini siyasi bir kampanya sloganı olarak etkili kıldığını ancak akademik araştırmalar ve politika yapımı için pratik bir rehber olarak daha az kullanışlı hale getirdiğini savunmuştur. Buna karşılık Pettman (2005: 140-141), kavramı katı rasyonalist veya devlet merkezli çerçeveler içinde daraltma girişimlerinin, insani kırılganlığın toplumsal, kültürel ve kutsal boyutlarını gölgeleyebileceği uyarısında bulunmuştur. Pettman’ın bu duruşunu eleştiren Paris (2005: 481), potansiyel olarak her şeyi kapsayacak şekilde formüle edilen bir kavramın \"boş bir kap\" veya bir \"Rorschach mürekkep lekesi\" olma riski taşıdığını savunmuştur. Paris ayrıca, insan güvenliği her şey anlamına geliyorsa, aslında hiçbir şey ifade etmediğini belirtmiştir. Bu tartışmalar, insan güvenliğinin netlik ile genişlik arasındaki bir gerilimle şekillendiğini göstermektedir."
        },
        {
          id: "hs-fbg-4",
          type: "background",
          textEn: "Against this background, during the same year as the inaugural 1990 UNDP report, the Intergovernmental Panel on Climate Change (IPCC) released its First Assessment Report (FAR). Although the report did not yet refer explicitly to the concept of human security, it identified the threats that climate change poses to humanity (IPCC, 1992). The 1994 Human Development Report elaborated on the nature and global dimensions of human security (UNDP, 1994). The report emphasized that environmental problems constitute a global threat to human security. Over time, the significance of human security in relation to climate change has grown substantially. UN Secretary-General António Guterres, in his speech at the Security Council open debate on 9 December 2021 titled “Maintenance of international peace and security: Security in the context of terrorism and climate change,” warned that climate change, through its “multiplier effect,” exacerbates instability, conflict, and terrorism (United Nations, 2021).",
          textTr: "Bu arka plan altında, ilk 1990 UNDP raporuyla aynı yıl, Hükümetlerarası İklim Değişikliği Paneli (IPCC) İlk Değerlendirme Raporunu (FAR) yayınlamıştır. Rapor henüz insan güvenliği kavramına açıkça atıfta bulunmasa da, iklim değişikliğinin insanlığa yönelik tehditlerini tanımlamıştır (IPCC, 1992). 1994 İnsani Gelişme Raporu, insan güvenliğinin doğasını ve küresel boyutlarını detaylandırmıştır (UNDP, 1994). Rapor, çevresel sorunların insan güvenliğine yönelik küresel bir tehdit oluşturduğunu vurgulamıştır. Zamanla, iklim değişikliği ile ilişkili olarak insan güvenliğinin önemi önemli ölçüde artmıştır. BM Genel Sekreteri António Guterres, 9 Aralık 2021'de Güvenlik Konseyi açık oturumunda yaptığı \"Uluslararası barış ve güvenliğin korunması: Terörizm ve iklim değişikliği bağlamında güvenlik\" başlıklı konuşmasında, iklim değişikliğinin \"tehdit çarpanı\" etkisiyle istikrarsızlığı, çatışmayı ve terörizmi şiddetlendirdiği uyarısında bulunmuştur (Birleşmiş Milletler, 2021)."
        },
        {
          id: "hs-fbg-5",
          type: "background",
          textEn: "The UN Climate Action outlined five ways the climate crisis impacts human security. Accordingly, climate change intensifies competition over land and water. As the planet warms, longer and more severe droughts lead to soil erosion, dried pastures, and reduced crop yields. Floods and landslides destroy farmland and infrastructure, while water resources become increasingly scarce. Secondly, climate change leads to a decrease in food production and thus increases hunger. Thirdly, it forces people to migrate, as the effects of climate change are displacing more people worldwide. Fourthly, climate change exacerbates poverty and inequality. It disproportionately affects the poorest and most vulnerable. In the poorest countries, a large proportion of the population depends directly on activities most affected by climate change, particularly agriculture, forestry, and fisheries. Lastly, it is stated that climate change increases security risks for women and girls. It is argued that unequal access to resources, combined with conflict and the climate crisis, can leave women and girls disproportionately vulnerable (United Nations, n.d.).",
          textTr: "BM İklim Eylemi, iklim krizinin insan güvenliğini etkilediği beş yolu ana hatlarıyla açıklamıştır. Buna göre, iklim değişikliği toprak ve su üzerindeki rekabeti yoğunlaştırmaktadır. Gezegen ısındıkça, daha uzun ve daha şiddetli kuraklıklar toprak erozyonuna, meraların kurumasına ve ürün veriminin düşmesine neden olmaktadır. Seller ve heyelanlar tarım arazilerini ve altyapıyı tahrip ederken, su kaynakları giderek kıtlaşmaktadır. İkinci olarak, iklim değişikliği gıda üretiminde azalmaya yol açmakta ve bu da açlığı artırmaktadır. Üçüncü olarak, iklim değişikliğinin etkileri dünya genelinde daha fazla insanı yerinden ettiği için insanları göçe zorlamaktadır. Dördüncü olarak, iklim değişikliği yoksulluğu ve eşitsizliği şiddetlendirmektedir. En yoksul ve en kırılgan kesimleri orantısız bir şekilde etkilemektedir. En yoksul ülkelerde, nüfusun büyük bir kısmı doğrudan iklim değişikliğinden en çok etkilenen faaliyetlere (özellikle tarım, ormancılık ve balıkçılık) bağımlıdır. Son olarak, iklim değişikliğinin kadınlar ve kız çocukları için güvenlik risklerini artırdığı belirtilmektedir. Kaynaklara haksız erişimin, çatışma ve iklim kriziyle birleştiğinde kadınları ve kız çocuklarını orantısız bir şekilde savunmasız bırakabileceği savunulmaktadır (Birleşmiş Milletler, t.y.)."
        },
        {
          id: "hs-fbg-6",
          type: "background",
          textEn: "The UN Trust Fund for Human Security currently highlights only the concepts of climate change and migration under the “priority issues” section of its official website. The 2030 Agenda is also included in this section (United Nations Trust Fund for Human Security, n.d.). In the 2030 Agenda, published in 2015, the section titled “Our world today” identifies climate change as “the greatest challenge of our time,” emphasizing that “the survival of many societies, and of the biological support systems of the planet, is at risk. (United Nations General Assembly, 2015)”. Similarly, the Human Security Handbook published by the UN Trust Fund for Human Security in 2016 provides an extensive discussion on the ways in which climate change poses threats to human security (United Nations Trust Fund for Human Security, 2016).",
          textTr: "BM İnsan Güvenliği Güven Fonu şu anda resmi web sitesinin \"öncelikli konular\" bölümünde yalnızca iklim değişikliği ve göç kavramlarını öne çıkarmaktadır. 2030 Gündemi de bu bölüme dahildir (Birleşmiş Milletler İnsan Güvenliği Güven Fonu, t.y.). 2015 yılında yayınlanan 2030 Gündemi'nin \"Bugünkü dünyamız\" başlıklı bölümünde iklim değişikliği \"çağımızın en büyük sorunu\" olarak tanımlanmakta ve \"birçok toplumun ve gezegenin biyolojik destek sistemlerinin hayatta kalmasının risk altında olduğu\" vurgulanmaktadır (Birleşmiş Milletler Genel Kurulu, 2015). Benzer şekilde, BM İnsan Güvenliği Güven Fonu tarafından 2016 yılında yayınlanan İnsan Güvenliği El Kitabı, iklim değişikliğinin insan güvenliğine tehdit oluşturma yolları hakkında kapsamlı bir tartışma sunmaktadır (Birleşmiş Milletler İnsan Güvenliği Güven Fonu, 2016)."
        },
        {
          id: "hs-fcore-1",
          type: "core",
          textEn: "The concept of <span class=\"info-trigger\" data-target=\"hs-fbg-1\">human security</span> represents a shift beyond the traditional understanding that centers on the security of the state. Starting from its <span class=\"info-trigger\" data-target=\"hs-fbg-2\">conceptualization in 1990 and 1994 UNDP reports</span>, the definition has been shaped by <span class=\"info-trigger\" data-target=\"hs-fbg-3\">academic debates between broad and narrow scopes</span>.",
          textTr: "<span class=\"info-trigger\" data-target=\"hs-fbg-1\">İnsan güvenliği</span> kavramı, devletin güvenliğine odaklanan geleneksel anlayışın ötesine geçen bir değişimi temsil eder. <span class=\"info-trigger\" data-target=\"hs-fbg-2\">1990 ve 1994 UNDP raporlarındaki kavramsallaştırmasından</span> başlayarak, tanım, <span class=\"info-trigger\" data-target=\"hs-fbg-3\">geniş ve dar kapsamlar arasındaki akademik tartışmalarla</span> şekillenmiştir."
        },
        {
          id: "hs-fcore-2",
          type: "core",
          textEn: "Over time, <span class=\"info-trigger\" data-target=\"hs-fbg-4\">the link between climate change and human security</span> has grown substantially, leading global institutions like the UN to specify <span class=\"info-trigger\" data-target=\"hs-fbg-5\">five direct pathways of climate crisis impact</span> on human well-being, which are now firmly embedded in <span class=\"info-trigger\" data-target=\"hs-fbg-6\">current policy handbooks and global agendas</span>.",
          textTr: "Zamanla, <span class=\"info-trigger\" data-target=\"hs-fbg-4\">iklim değişikliği ile insan güvenliği arasındaki bağlantı</span> önemli ölçüde büyümüş ve BM gibi küresel kuruluşların, insan refahı üzerindeki <span class=\"info-trigger\" data-target=\"hs-fbg-5\">iklim krizinin doğrudan beş etki yolunu</span> belirlemesine yol açmıştır. Bu yollar artık <span class=\"info-trigger\" data-target=\"hs-fbg-6\">güncel politika el kitaplarında ve küresel gündemlerde</span> sağlam bir şekilde yer almaktadır."
        }
      ]
    },
    {
      id: "us-frames",
      titleEn: "5. U.S. Climate Change Frames under the Trump Administration",
      titleTr: "5. Trump Yönetiminde ABD'nin İklim Değişikliği Çerçeveleri",
      blocks: [
        {
          id: "us-fcore-1",
          type: "core",
          textEn: "During Donald Trump’s first presidential term, the issue of climate change was treated by his administration and supporters as an ideological matter, marking a fundamental shift in U.S. climate policy. Federal climate policies and institutions were weakened, the legitimacy of climate science was questioned, and research and funding sources came under threat (Jotzo et al., 2018).",
          textTr: "Donald Trump’ın ilk başkanlık döneminde iklim değişikliği konusu, yönetimi ve destekçileri tarafından ideolojik bir mesele olarak ele alınmış ve ABD iklim politikasında köklü bir kırılmayı temsil etmiştir. Federal iklim politikaları ve kurumları zayıflatılmış, iklim biliminin meşruiyeti sorgulanmış, araştırma ve fon kaynakları tehdit altına girmiştir (Jotzo ve diğerleri, 2018)."
        },
        {
          id: "us-fbg-1",
          type: "background",
          textEn: "Moreover, Trump withdrew from the Paris Climate Agreement—widely regarded as one of Barack Obama’s most significant international achievements. In 2019, the United States formally notified the United Nations of its intent to withdraw, citing the “unfair economic burden” the agreement allegedly imposed on American workers, businesses, and taxpayers (United States Department of State, 2019). Trump also justified this decision on the grounds that the agreement placed the U.S. at a competitive disadvantage vis-à-vis China (Emran, 2024).",
          textTr: "Ayrıca Trump, Barack Obama’nın en önemli uluslararası başarılarından biri olarak kabul edilen Paris İklim Anlaşması’ndan çekilmiştir. 2019 yılında Amerika Birleşik Devletleri, anlaşmanın Amerikan işçilerine, işletmelerine ve vergi mükelleflerine getirdiği \"haksız ekonomik yükü\" gerekçe göstererek çekilme niyetini Birleşmiş Milletler’e resmen bildirmiştir (Amerika Birleşik Devletleri Dışişleri Bakanlığı, 2019). Trump bu kararı ayrıca anlaşmanın ABD'yi Çin karşısında rekabet açısından dezavantajlı duruma düşürdüğü gerekçesiyle savunmuştur (Emran, 2024)."
        },
        {
          id: "us-fcore-2",
          type: "core",
          textEn: "A primary expression of this shift was when the United States <span class=\"info-trigger\" data-target=\"us-fbg-1\">withdrew from the Paris Climate Agreement</span>, which was justified through economic discourse rather than environmental risk considerations.",
          textTr: "Bu değişimin temel bir göstergesi, Amerika Birleşik Devletleri'nin çevresel risk faktörlerinden ziyade ekonomik söylemlerle gerekçelendirilerek <span class=\"info-trigger\" data-target=\"us-fbg-1\">Paris İklim Anlaşması'ndan çekilmesi</span> olmuştur."
        },
        {
          id: "us-fbg-2",
          type: "background",
          textEn: "Characterized by his steadfast defense of fossil fuels, Trump’s presidency (2017–2021) was marked by a regression in climate change policies and a renewed prioritization of traditional energy sources. During this period, the United States became the world’s largest producer of oil and natural gas, achieving “energy independence” and delivering historically low prices for oil, gas, diesel, and electricity to consumers and businesses. However, when viewed from a long-term perspective, the outlook for combating climate change during this era appears rather bleak (Emran, 2024).",
          textTr: "Fosil yakıtları kararlı bir şekilde savunmasıyla öne çıkan Trump’ın başkanlığı (2017-2021), iklim değişikliği politikalarında bir gerileme ve geleneksel enerji kaynaklarının yeniden önceliklendirilmesi ile damgalanmıştır. Bu dönemde Amerika Birleşik Devletleri, petrol ve doğal gazda dünyanın en büyük üreticisi haline gelmiş, \"enerji bağımsızlığına\" ulaşmış ve tüketiciler ile işletmelere petrol, gaz, motorin ve elektrik için tarihsel olarak düşük fiyatlar sunmuştur. Ancak uzun vadeli bir perspektiften bakıldığında, bu dönemde iklim değişikliğiyle mücadele beklentisi oldukça kasvetli görünmektedir (Emran, 2024)."
        },
        {
          id: "us-fcore-3",
          type: "core",
          textEn: "This period was heavily <span class=\"info-trigger\" data-target=\"us-fbg-2\">characterized by a defense of fossil fuels</span>, with the administration dismantling climate frameworks in favor of short-term domestic energy extraction dominance.",
          textTr: "Bu dönem, yönetimin kısa vadeli yerli enerji çıkarma hakimiyeti adına iklim çerçevelerini ortadan kaldırmasıyla, yoğun bir şekilde <span class=\"info-trigger\" data-target=\"us-fbg-2\">fosil yakıt savunuculuğu ile karakterize edilmiştir</span>."
        },
        {
          id: "us-fbg-3",
          type: "background",
          textEn: "In contrast, during the Biden administration, U.S. policy became more focused on climate change than ever before. President Biden framed the climate crisis as a top national priority, acting with the urgency that scientific evidence demanded. His administration sought to accelerate the transition to clean energy while simultaneously generating economic opportunities. To this end, the U.S. set ambitious goals: cutting greenhouse gas emissions by half by 2030, achieving a carbon pollution–free power sector by 2035, and reaching net-zero emissions by 2050. Additionally, the Biden administration aimed to ensure that the benefits of climate investments extended to disadvantaged communities. Through landmark legislation such as the Inflation Reduction Act and the Bipartisan Infrastructure Law, the administration implemented the most comprehensive climate investments in U.S. history. These policies reduced energy costs, created millions of jobs in the clean energy sector, and significantly expanded renewable energy capacity. On the international stage, Biden rejoined the Paris Agreement, increased U.S. climate finance, and reasserted the country’s leadership in promoting a global shift away from fossil fuels. Overall, the Biden era has been characterized by a “green transformation” in which the United States simultaneously pursued environmental sustainability and economic growth (The White House, 2021).",
          textTr: "Aksine, Biden yönetimi döneminde ABD politikası iklim değişikliğine hiç olmadığı kadar odaklanmıştır. Başkan Biden, iklim krizini en önemli ulusal öncelik olarak çerçevelemiş ve bilimsel kanıtların gerektirdiği aciliyetle hareket etmiştir. Yönetimi, temiz enerjiye geçişi hızlandırırken aynı zamanda ekonomik fırsatlar yaratmayı amaçlamıştır. Bu doğrultuda ABD iddialı hedefler belirlemiştir: sera gazı emisyonlarını 2030'a kadar yarıya indirmek, 2035'e kadar karbon kirliliğinden arınmış elektrik sektörüne ulaşmak ve 2050'ye kadar net sıfır emisyona ulaşmak. Ayrıca Biden yönetimi, iklim yatırımlarının faydalarının dezavantajlı topluluklara da ulaşmasını sağlamayı hedeflemiştir. Enflasyonu Düşürme Yasası (IRA) ve İki Partili Altyapı Yasası gibi dönüm noktası niteliğindeki yasalar aracılığıyla, yönetim ABD tarihindeki en kapsamlı iklim yatırımlarını hayata geçirmiştir. Bu politikalar enerji maliyetlerini düşürmüş, temiz enerji sektöründe milyonlarca istihdam yaratmış ve yenilenebilir enerji kapasitesini önemli ölçüde genişletmiştir. Uluslararası alanda Biden, Paris Anlaşması'na yeniden katılmış, ABD'nin iklim finansmanını artırmıştır. Genel olarak Biden dönemi, Amerika Birleşik Devletleri'nin çevresel sürdürülebilirlik ile ekonomik büyümeyi eşzamanlı olarak sürdürdüğü bir \"yeşil dönüşüm\" ile karakterize edilmiştir (Beyaz Saray, 2021)."
        },
        {
          id: "us-fcore-4",
          type: "core",
          textEn: "In stark contrast, the intervening Biden administration pursued a <span class=\"info-trigger\" data-target=\"us-fbg-3\">comprehensive green transformation agenda</span>, aligning U.S. policies with international science-based targets.",
          textTr: "Tam tersine, araya giren Biden yönetimi, ABD politikalarını uluslararası bilim temelli hedeflerle uyumlu hale getirerek kapsamlı bir <span class=\"info-trigger\" data-target=\"us-fbg-3\">yeşil dönüşüm gündemi</span> izlemiştir."
        },
        {
          id: "us-fcore-5",
          type: "core",
          textEn: "However, upon taking office for a second term on January 20, 2025, Trump immediately acted to reverse these policies. He signed Executive Order 14148, <em>“Initial Rescissions of Harmful Executive Orders and Actions,”</em> declaring that 'the previous administration has embedded deeply unpopular, inflationary, illegal, and radical practices within every agency and office of the Federal Government' and that 'climate extremism has exploded inflation and overburdened businesses with regulation.' Within this framework, 11 key climate-related executive orders and actions enacted by the Biden administration were rescinded.",
          textTr: "Ancak, 20 Ocak 2025'te ikinci dönemi için göreve başlayan Trump, hemen bu politikaları tersine çevirmek için harekete geçmiştir. Trump, 'önceki yönetimin Federal Hükümetin her kurum ve ofisine son derece popüler olmayan, enflasyonist, yasa dışı ve radikal uygulamalar yerleştirdiğini' ve 'iklim ekstremizminin enflasyonu patlattığını ve işletmeleri düzenlemelerle aşırı yüklediğini' beyan ederek 14148 sayılı <em>“Zararlı Yürütme Emirlerinin ve Eylemlerinin İlk İptalleri”</em> kararnamesini imzalamıştır. Bu çerçevede, Biden yönetimi tarafından yürürlüğe konan 11 kritik iklim kararı iptal edilmiştir."
        },
        {
          id: "us-ftable-1",
          type: "table",
          tableName: "rescissions"
        },
        {
          id: "us-fbg-4",
          type: "background",
          textEn: "In the executive order titled “Protecting American Energy From State Overreach,” it is stated that “Many States have enacted, or are in the process of enacting, burdensome and ideologically motivated ‘climate change’ or energy policies that threaten American energy dominance and our economic and national security. (Trump, 2025d)”. This expression reflects an attempt to disregard climate change at the state level as well. Building upon this, the executive order “Restoring Gold Standard Science” is particularly noteworthy. The Trump administration sought to reject the scientifically well-established evidence of climate change and its consequences by portraying science itself as misleading. In this context, the administration criticized federal agencies for relying on the Representative Concentration Pathway (RCP) 8.5 scenario. This scenario is used to assess the potential impacts of climate change under a high-warming trajectory. The administration claimed that RCP 8.5 represented an unrealistic worst-case scenario because of assumptions such as coal consumption exceeding extractable reserves by the end of the century. Thus, the administration once again dismissed climate change by advancing the argument that scientific studies were misleading and that science had been politicized (Trump, 2025e).",
          textTr: "“Amerikan Enerjisini Eyalet Müdahalesinden Korumak” başlıklı başkanlık kararnamesinde, “Birçok eyaletin, Amerikan enerji hakimiyetini ve ekonomik ve ulusal güvenliğimizi tehdit eden yükümlülük getiren ve ideolojik olarak motive edilmiş 'iklim değişikliği' veya enerji politikalarını yasalaştırdığı veya yasalaştırma sürecinde olduğu (Trump, 2025d)” belirtilmektedir. Bu ifade, eyalet düzeyinde de iklim değişikliğini göz ardı etme çabasını yansıtmaktadır. Bunun üzerine inşa edilen “Altın Standart Bilimin Restorasyonu” kararnamesi özellikle dikkat çekicidir. Trump yönetimi, bilimin kendisini yanıltıcı olarak göstererek iklim değişikliğinin ve sonuçlarının bilimsel olarak iyi kurulmuş kanıtlarını reddetmeye çalışmıştır. Bu bağlamda yönetim, federal kurumları Temsili Konsantrasyon Yolu (RCP) 8.5 senaryosuna dayandıkları için eleştirmiştir. Bu senaryo, yüksek ısınma rotası altında iklim değişikliğinin potansiyel etkilerini değerlendirmek için kullanılır. Yönetim, kömür tüketiminin yüzyılın sonuna kadar çıkarılabilir rezervleri aşacağı gibi varsayımlar nedeniyle RCP 8.5'in gerçekçi olmayan en kötü durum senaryosunu temsil ettiğini iddia etmiştir. Böylece yönetim, bilimsel çalışmaların yanıltıcı olduğunu ve bilimin siyasallaştırıldığını öne sürerek iklim değişikliğini bir kez daha reddetmiştir (Trump, 2025e)."
        },
        {
          id: "us-fcore-6",
          type: "core",
          textEn: "To dismantle the remaining structures, the administration targeted state-level regulations and delegitimized climate science, utilizing <span class=\"info-trigger\" data-target=\"us-fbg-4\">directives targeting state policies and scientific scenarios like RCP 8.5</span> to portray scientific consensus as politicized and misleading.",
          textTr: "Geriye kalan yapıları ortadan kaldırmak için yönetim, eyalet düzeyindeki düzenlemeleri hedef almış ve bilimsel fikir birliğini siyasallaşmış ve yanıltıcı olarak sunmak amacıyla <span class=\"info-trigger\" data-target=\"us-fbg-4\">eyalet politikalarını ve RCP 8.5 gibi bilimsel senaryoları hedef alan kararnameler</span> kullanarak iklim biliminin meşruiyetini sarsmıştır."
        },
        {
          id: "us-fbg-5",
          type: "background",
          textEn: "In this context, it is observed that the Trump administration sought to steer the public entirely toward considerations of the existing economy and energy independence. It framed the reality of climate change in a way that portrayed climate change measures merely as harmful actions that undermine the economy. According to Entman, framing simultaneously performs four functions that determine how an event should be interpreted: it defines a problem, diagnoses its causes, makes a moral evaluation, and suggests remedies. Based on this, the Trump administration, while framing climate policies as an economic threat, also perceives restrictions on fossil fuel production as a threat to national security. At the same time, it defines scientific data on climate change as misleading by claiming that science itself has been politicized. These constitute the problem definitions. The causal interpretations of these problems are attributed to previous administrations, state governments, and the scientific elite. The former administrations are portrayed as having taken measures that weakened the economy and security because they treated climate change as a global threat to human security. Similarly, current state leaders, in Trump’s rhetoric, are accused of engaging in “climate extremism,” while scientific elites are said to be “politicizing science.” Trump’s moral evaluation frames climate policies as a source of economic injustice. Finally, as a treatment recommendation, he argued for — and implemented — the reversal of all previous climate policy decisions. The federal governance structure was thus freed from clean energy commitments. The Department of Justice was tasked with declaring state-level climate laws “illegal” and filing lawsuits, while the standardization of science under government authority effectively closed the climate change issue. This framing makes short-term costs visible, while rhetorically relegating to the background the long-term disasters, health risks, justice concerns, and infrastructure vulnerabilities that pose serious threats to human security. At the same time, it weakened the institutional embeddedness of human security policies and rendered their potential reconstruction in the future more costly.",
          textTr: "Bu bağlamda, Trump yönetiminin halkı tamamen mevcut ekonomi ve enerji bağımsızlığı konularına yönlendirmeye çalıştığı gözlemlenmektedir. İklim değişikliği gerçeğini, iklim değişikliği önlemlerini sadece ekonomiyi baltalayan zararlı eylemler olarak sunacak şekilde çerçevelemiştir. Entman'a göre çerçeveleme, bir olayın nasıl yorumlanacağını belirleyen dört işlevi eşzamanlı olarak yerine getirir: sorun tanımlar, nedenlerini teşhis eder, ahlaki değerlendirme yapar ve çözümler önerir. Buna dayanarak Trump yönetimi, iklim politikalarını ekonomik bir tehdit olarak çerçevelerken, fosil yakıt üretimine getirilen kısıtlamaları da ulusal güvenliğe yönelik bir tehdit olarak algılamaktadır. Aynı zamanda, bilimin kendisinin siyasallaştırıldığını iddia ederek iklim değişikliğine ilişkin bilimsel verileri yanıltıcı olarak tanımlamaktadır. Bunlar sorun tanımlarını oluşturur. Bu sorunların nedensel yorumları önceki yönetimlere, eyalet hükümetlerine ve bilimsel elitlere atfedilir. Önceki yönetimler, iklim değişikliğini insan güvenliğine yönelik küresel bir tehdit olarak ele aldıkları için ekonomiyi ve güvenliği zayıflatan önlemler almış olarak gösterilir. Benzer şekilde, mevcut eyalet liderleri Trump'ın retoriğinde \"iklim ekstremizmi\" yapmakla suçlanırken, bilimsel elitlerin \"bilimi siyasallaştırdığı\" söylenir. Trump’ın ahlaki değerlendirmesi iklim politikalarını ekonomik adaletsizlik kaynağı olarak çerçeveler. Son olarak, bir çözüm önerisi olarak, önceki tüm iklim politikası kararlarının tersine çevrilmesini savunmuş ve uygulamıştır. Böylece federal yönetim yapısı temiz enerji taahhütlerinden kurtulmuştur. Adalet Bakanlığı, eyalet düzeyindeki iklim yasalarını \"yasa dışı\" ilan etmek ve davalar açmakla görevlendirilirken, bilimin hükümet yetkisi altında standartlaştırılması iklim değişikliği konusunu etkili bir şekilde kapatmıştır. Bu çerçeveleme, kısa vadeli maliyetleri görünür kılarken; insan güvenliğine ciddi tehdit oluşturan uzun vadeli felaketleri, sağlık risklerini, adalet endişelerini ve altyapı kırılganlıklarını retorik olarak arka plana itmektedir. Aynı zamanda, insan güvenliği politikalarının kurumsal yerleşikleşmesini zayıflatmış ve gelecekte potansiyel olarak yeniden inşa edilmelerini daha maliyetli hale getirmiştir."
        },
        {
          id: "us-fcore-7",
          type: "core",
          textEn: "Ultimately, the administration's discourse constructs a <span class=\"info-trigger\" data-target=\"us-fbg-5\">complete alternative reality</span> through Entman's four functions, making short-term compliance costs highly visible while completely backgrounding the long-term human security risks of environmental inaction.",
          textTr: "Sonuç olarak, yönetimin söylemi, Entman'ın dört işlevi aracılığıyla <span class=\"info-trigger\" data-target=\"us-fbg-5\">tamamen alternatif bir gerçeklik</span> inşa etmekte, kısa vadeli uyum maliyetlerini son derece görünür kılarken çevresel eylemsizliğin uzun vadeli insan güvenliği risklerini tamamen arka plana itmektedir."
        }
      ]
    },
    {
      id: "eu-frames",
      titleEn: "6. The European Union’s Climate Change Frames",
      titleTr: "6. Avrupa Birliği'nin İklim Değişikliği Çerçeveleri",
      blocks: [
        {
          id: "eu-fcore-1",
          type: "core",
          textEn: "Since the 1990s, the European Union (EU) has acknowledged climate change as a global environmental issue. Initially, however, the member states did not support this stance. For instance, the European Commission’s 1992 proposal to establish a council responsible for introducing and regulating a carbon dioxide and energy tax was withdrawn in 2001 (European Commission, 2001).",
          textTr: "1990'lardan bu yana Avrupa Birliği (AB), iklim değişikliğini küresel bir çevre sorunu olarak kabul etmiştir. Ancak başlangıçta üye devletler bu tutumu desteklememiştir. Örneğin, Avrupa Komisyonu'nun karbondioksit ve enerji vergisi getirmek ve düzenlemekle yükümlü bir konsey kurulmasına yönelik 1992 tarihli teklifi 2001 yılında geri çekilmiştir (Avrupa Komisyonu, 2001)."
        },
        {
          id: "eu-fbg-1",
          type: "background",
          textEn: "Nevertheless, the EU has progressively strengthened its position that climate change represents a significant threat. Indeed, in the same year the proposal was rejected, the European Council recognized climate change as a global threat to future prosperity and economic development, emphasizing the importance of taking effective international action to reduce emissions. Reaffirming its commitment to the Kyoto Protocol, the European Council expressed deep concern over any attempts to undermine the agreement. Furthermore, it called upon all negotiating partners to engage in a constructive dialogue to reach consensus on the procedures for implementing the Kyoto Protocol (European Council, 2001). From the perspective of Entman’s framing functions, this early position already indicates the EU’s initial problem definition: climate change is not framed as a purely technical environmental matter, but as a global threat to prosperity, development, and collective security. At the same time, the EU’s emphasis on emission reduction and the implementation of the Kyoto Protocol identifies insufficient international action as a central cause of the problem and presents multilateral cooperation as the appropriate remedy.",
          textTr: "Buna rağmen AB, iklim değişikliğinin önemli bir tehdit oluşturduğu yönündeki tutumunu kademeli olarak güçlendirmiştir. Nitekim teklifin reddedildiği aynı yıl, Avrupa Konseyi iklim değişikliğini gelecekteki refah ve ekonomik kalkınmaya yönelik küresel bir tehdit olarak tanımış ve emisyonları azaltmak için etkili uluslararası adımlar atılmasının önemini vurgulamıştır. Kyoto Protokolü'ne olan bağlılığını yeniden teyit eden Avrupa Konseyi, anlaşmayı baltalamaya yönelik her türlü girişimden duyduğu derin endişeyi dile getirmiştir. Ayrıca, tüm müzakere ortaklarını Kyoto Protokolü'nün uygulanmasına yönelik prosedürler üzerinde uzlaşmaya varmak için yapıcı bir diyalog kurmaya çağırmıştır (Avrupa Konseyi, 2001). Entman’ın çerçeveleme işlevleri açısından bakıldığında, bu erken tutum AB’nin ilk sorun tanımını göstermektedir: iklim değişikliği sadece teknik çevresel bir konu olarak değil, refaha, kalkınmaya ve kolektif güvenliğe yönelik küresel bir tehdit olarak çerçevelenmiştir. Aynı zamanda AB'nin emisyon azaltımı ve Kyoto Protokolü'nün uygulanması üzerindeki vurgusu, yetersiz uluslararası eylemi sorunun temel nedeni olarak tanımlamakta ve çok taraflı iş birliğini uygun bir çözüm olarak sunmaktadır."
        },
        {
          id: "eu-fcore-2",
          type: "core",
          textEn: "Despite early gridlocks, the Union progressively <span class=\"info-trigger\" data-target=\"eu-fbg-1\">strengthened its position on global emissions and treaties like the Kyoto Protocol</span>, shifting the framing from a technical environmental issue to a threat to collective security and development.",
          textTr: "Erken dönemdeki tıkanıklıklara rağmen, Birlik, çerçevelemeyi teknik çevresel bir konudan kolektif güvenlik ve kalkınmaya yönelik bir tehdide kaydırarak <span class=\"info-trigger\" data-target=\"eu-fbg-1\">küresel emisyonlar ve Kyoto Protokolü gibi anlaşmalar üzerindeki tutumunu kademeli olarak güçlendirmiştir</span>."
        },
        {
          id: "eu-fcore-3",
          type: "core",
          textEn: "The 2008 report titled “Climate Change and International Security”, jointly submitted by the European Commission and the High Representative to the European Council, holds significant importance in understanding the process that brought climate change to the forefront of the EU’s current policies. This paragraph from the report is particularly important, as it illustrates how the EU frames climate change in direct connection with human security:",
          textTr: "Avrupa Komisyonu ve Yüksek Temsilci tarafından Avrupa Konseyi'ne ortaklaşa sunulan 2008 tarihli “İklim Değişikliği ve Uluslararası Güvenlik” başlıklı rapor, iklim değişikliğini AB'nin mevcut politikalarının ön saflarına taşıyan süreci anlamada büyük önem taşımaktadır. Rapordan alınan şu paragraf, AB'nin iklim değişikliğini doğrudan insan güvenliğiyle nasıl ilişkilendirdiğini göstermesi açısından özellikle önemlidir:"
        },
        {
          id: "eu-fquote-1",
          type: "core",
          textEn: "<blockquote class=\"article-blockquote\">“Climate change is best viewed as a threat multiplier which exacerbates existing trends, tensions and instability. The core challenge is that climate change threatens to overburden states and regions which are already fragile and conflict prone. It is important to recognise that the risks are not just of a humanitarian nature; they also include political and security risks that directly affect European interests. Moreover, in line with the concept of human security, it is clear that many issues related to the impact of climate change on international security are interlinked requiring comprehensive policy responses. For example, the attainment of the Millennium Development Goals would be at considerable risk because climate change, if unmitigated, may well wipe out years of development efforts (European Commission and the High Representative, 2008).”</blockquote>",
          textTr: "<blockquote class=\"article-blockquote\">“İklim değişikliği en iyi şekilde, mevcut eğilimleri, gerilimleri ve istikrarsızlığı artıran bir tehdit çarpanı olarak görülmelidir. Temel zorluk, iklim değişikliğinin zaten kırılgan ve çatışmaya eğilimli olan devletleri ve bölgeleri aşırı yük altına sokma tehdidi taşımasıdır. Risklerin yalnızca insani nitelikte olmadığını; doğrudan Avrupa çıkarlarını etkileyen siyasi ve güvenlik risklerini de içerdiğini kabul etmek önemlidir. Ayrıca, insan güvenliği kavramı doğrultusunda, iklim değişikliğinin uluslararası güvenlik üzerindeki etkisine ilişkin pek çok konunun birbiriyle bağlantılı olduğu ve kapsamlı politika yanıtları gerektirdiği açıktır. Örneğin, iklim değişikliği hafifletilmezse, yıllar süren kalkınma çabalarını tamamen yok edebileceğinden, Binyıl Kalkınma Hedeflerine ulaşılması ciddi bir risk altında olacaktır (Avrupa Komisyonu ve Yüksek Temsilci, 2008).”</blockquote>"
        },
        {
          id: "eu-fbg-2",
          type: "background",
          textEn: "When read through Entman’s framework, this passage enables a systematic analysis of the EU’s climate change discourse in terms of problem definition, causal interpretation, moral evaluation, and treatment recommendation. First, it defines climate change as a security problem by describing it as a “threat multiplier” that exacerbates instability, fragility, and conflict. Second, it diagnoses the causes of insecurity not only in climate change itself, but also in the interaction between climate impacts and pre-existing political, social, and developmental vulnerabilities. Third, it makes a moral evaluation by linking climate change to human security and to the possible reversal of development gains. Finally, it recommends a comprehensive policy response, since the report stresses that climate-related risks are interlinked and cannot be addressed through narrow or sectoral policies alone.",
          textTr: "Entman'ın çerçevesi üzerinden okunduğunda bu pasaj, AB'nin iklim değişikliği söyleminin sorun tanımlama, nedensel yorumlama, ahlaki değerlendirme ve çözüm önerisi açısından sistematik bir analizine olanak tanır. İlk olarak, iklim değişikliğini istikrarsızlığı, kırılganlığı ve çatışmayı şiddetlendiren bir \"tehdit çarpanı\" olarak tanımlayarak bir güvenlik sorunu olarak ortaya koyar. İkinci olarak, güvensizliğin nedenlerini yalnızca iklim değişikliğinin kendisinde değil, aynı zamanda iklim etkileri ile önceden var olan siyasi, sosyal ve gelişimsel kırılganlıklar arasındaki etkileşimde de teşhis eder. Üçüncüsü, iklim değişikliğini insan güvenliğiyle ve kalkınma kazanımlarının tersine çevrilmesi olasılığıyla ilişkilendirerek ahlaki bir değerlendirme yapar. Son olarak, iklimle ilgili risklerin birbiriyle bağlantılı olduğunu ve tek başına dar veya sektörel politikalarla ele alınamayacağını vurgulayarak kapsamlı bir politika yanıtı önerir."
        },
        {
          id: "eu-fcore-4",
          type: "core",
          textEn: "This landmark report provides a complete paradigm for <span class=\"info-trigger\" data-target=\"eu-fbg-2\">applying Entman's four functions to EU climate discourse</span>, structuring the threat as an interconnected, multi-sectoral challenge to global stability.",
          textTr: "Bu tarihi rapor, tehdidi küresel istikrara yönelik birbirine bağlı, çok sektörlü bir meydan okuma olarak yapılandırarak <span class=\"info-trigger\" data-target=\"eu-fbg-2\">Entman'ın dört işlevini AB iklim söylemine uygulamak</span> için eksiksiz bir paradigma sunmaktadır."
        },
        {
          id: "eu-fbg-3",
          type: "background",
          textEn: "In its 2013 communication entitled “The 2015 International Climate Change Agreement: Shaping International Climate Policy Beyond 2020,” issued prior to the 2015 Paris Agreement, the European Commission stated that the first decade of the 21st century had been the warmest on record, and that the summer of 2012 had witnessed an unprecedented decline in Arctic sea ice. Emphasizing the increasing frequency of extreme weather events worldwide, the Commission underscored that if climate change were addressed with greater urgency and determination, the most severe consequences of a warming planet could still be averted (European Commission, 2013). In framing terms, this communication increases the salience of climate change by presenting concrete indicators such as rising temperatures, Arctic ice loss, and extreme weather events. It therefore strengthens the EU’s problem definition by portraying climate change as an empirically observable and worsening global crisis. At the same time, its emphasis on urgency and determination reinforces the EU’s treatment recommendation: severe climate impacts can still be prevented, but only if collective action is taken in time. In a video published by the European Commission in 2015, the EU highlighted its actions in combating climate change and emphasized that it continues to play the role of a global champion by assisting developing countries that are more vulnerable to the effects of a changing climate. By providing public climate finance to partners beyond Europe, the EU underscores its belief that the entire world and humanity are under threat and must be protected (European Commission, 2015). This framing contributes especially to the EU’s moral evaluation of the issue. Climate action is presented not only as a policy necessity but also as a responsibility toward vulnerable societies. In this respect, the EU’s climate frame is closely linked to solidarity, responsibility, and the protection of human life beyond Europe’s borders.",
          textTr: "Avrupa Komisyonu, 2015 Paris Anlaşması öncesinde yayınlanan “2015 Uluslararası İklim Değişikliği Anlaşması: 2020 Sonrası Uluslararası İklim Politikasını Şekillendirmek” başlıklı 2013 tarihli bildirisinde, 21. yüzyılın ilk on yılının kayıtlardaki en sıcak dönem olduğunu ve 2012 yazında Arktik deniz buzunda eşi benzeri görülmemiş bir düşüş yaşandığını belirtmiştir. Dünya genelinde aşırı hava olaylarının artan sıklığını vurgulayan Komisyon, iklim değişikliğinin daha büyük bir aciliyet ve kararlılıkla ele alınması halinde ısınan gezegenin en vahim sonuçlarının hala önlenebileceğinin altını çizmiştir (Avrupa Komisyonu, 2013). Çerçeveleme açısından bu bildiri; yükselen sıcaklıklar, Arktik buz kaybı ve aşırı hava olayları gibi somut göstergeler sunarak iklim değişikliğinin belirginliğini artırır. Dolayısıyla iklim değişikliğini ampirik olarak gözlemlenebilen ve kötüleşen küresel bir kriz olarak sunarak AB'nin sorun tanımlamasını güçlendirir. Aynı zamanda, aciliyet ve kararlılık üzerindeki vurgusu AB'nin çözüm önerisini pekiştirir: ciddi iklim etkileri hala önlenebilir, ancak yalnızca kolektif eylem zamanında alınırsa. Avrupa Komisyonu tarafından 2015 yılında yayınlanan bir videoda AB, iklim değişikliğiyle mücadeledeki eylemlerini vurgulamış ve değişen iklimin etkilerine karşı daha kırılgan olan gelişmekte olan ülkelere yardımcı olarak küresel bir şampiyon rolünü oynamaya devam ettiğini belirtmiştir. Avrupa dışındaki ortaklara kamu iklim finansmanı sağlayarak AB, tüm dünyanın ve insanlığın tehdit altında olduğuna ve korunması gerektiğine olan inancının altını çizer (Avrupa Komisyonu, 2015). Bu çerçeveleme özellikle AB'nin konuya ilişkin ahlaki değerlendirmesine katkıda bulunur. İklim eylemi sadece bir politika gerekliliği olarak değil, aynı zamanda savunmasız topluluklara karşı bir sorumluluk olarak sunulur. Bu bakımdan AB'nin iklim çerçevesi dayanışma, sorumluluk ve Avrupa sınırlarının ötesindeki insan hayatının korunmasıyla yakından bağlantılıdır."
        },
        {
          id: "eu-fcore-5",
          type: "core",
          textEn: "This institutional stance was reinforced by the <span class=\"info-trigger\" data-target=\"eu-fbg-3\">Commission's 2013 and 2015 public and policy communications</span>, establishing empirical markers of crisis and positioning the EU as a global champion with a moral responsibility to fund global climate mitigation.",
          textTr: "Bu kurumsal duruş, krizin ampirik göstergelerini belirleyen ve AB'yi küresel iklim azaltımını finanse etme konusunda ahlaki sorumluluğa sahip küresel bir şampiyon olarak konumlandıran <span class=\"info-trigger\" data-target=\"eu-fbg-3\">Komisyonun 2013 ve 2015 tarihli kurumsal ve politika bildirileriyle</span> pekiştirilmiştir."
        },
        {
          id: "eu-fbg-4",
          type: "background",
          textEn: "One of the key milestones in formalizing the link between climate and security was the publication of A Global Strategy for the European Union’s Foreign and Security Policy by the European External Action Service (EEAS) in 2016. In the section titled The Security of Our Union, the document stresses that climate change endangers the EU’s people and territories (EEAS, 2016). This document further strengthens the security dimension of the EU’s climate frame. By stating that climate change threatens the EU’s own people and territories, the EU connects global climate risks with the direct security of European societies. Thus, the problem is defined simultaneously as external and internal, global and European, humanitarian and strategic. In 2019, the European Union signed the European Green Deal, which was developed based on the understanding that Europe’s future depends on a healthy planet. The European Green Deal was conceived as a new development model aimed at achieving climate neutrality by 2050 by decoupling economic growth from resource use. Within this framework, climate action is viewed not as a cost but as an opportunity for employment and innovation. Guided by the principle of “leaving no one behind,” it seeks a just and inclusive transition, providing support for vulnerable regions and workers. Moreover, it places public health and well-being at the center by reducing air, water, and soil pollution. A holistic governance approach is adopted to ensure that all EU policies align with these objectives (European Commission, 2019). From a framing perspective, the European Green Deal translates the EU’s climate-security frame into policy. It identifies unsustainable production and consumption as the source of the crisis, emphasizes justice and public well-being, and promotes broad economic and governance transformation as the solution.",
          textTr: "İklim ve güvenlik arasındaki bağlantıyı resmileştiren temel dönüm noktalarından biri, 2016 yılında Avrupa Dış İlişkiler Servisi (EEAS) tarafından Avrupa Birliği'nin Dış ve Güvenlik Politikası için Küresel Bir Strateji'nin yayınlanması olmuştur. \"Birliğimizin Güvenliği\" başlıklı bölümde, belge iklim değişikliğinin AB halkını ve topraklarını tehlikeye attığını vurgulamaktadır (EEAS, 2016). Bu belge AB'nin iklim çerçevesinin güvenlik boyutunu daha da güçlendirmektedir. İklim değişikliğinin AB'nin kendi halkını ve topraklarını tehdit ettiğini belirterek AB, küresel iklim risklerini doğrudan Avrupa toplumlarının güvenliğiyle ilişkilendirir. Böylece sorun aynı anda hem dışsal hem içsel, hem küresel hem Avrupalı, hem insani hem de stratejik olarak tanımlanmaktadır. 2019 yılında Avrupa Birliği, Avrupa'nın geleceğinin sağlıklı bir gezegene bağlı olduğu anlayışıyla geliştirilen Avrupa Yeşil Mutabakatı'nı imzalamıştır. Avrupa Yeşil Mutabakatı, ekonomik büyümeyi kaynak kullanımından ayırarak 2050 yılına kadar iklim nötrlüğe ulaşmayı amaçlayan yeni bir kalkınma modeli olarak tasarlanmıştır. Bu çerçevede, iklim eylemi bir maliyet olarak değil, istihdam ve inovasyon için bir fırsat olarak görülmektedir. \"Kimseyi geride bırakmama\" ilkesinden hareketle, kırılgan bölgeler ve işçiler için adil ve kapsayıcı bir geçiş aramakta, destek sağlamaktadır. Dahası, hava, su ve toprak kirliliğini azaltarak halk sağlığını ve refahını merkeze yerleştirmektedir. Tüm AB politikalarının bu hedeflerle uyumlu olmasını sağlamak için bütüncül bir yönetişim yaklaşımı benimsenmiştir (Avrupa Komisyonu, 2019). Çerçeveleme perspektifinden bakıldığında, Avrupa Yeşil Mutabakatı AB'nin iklim-güvenlik çerçevesini politikaya dönüştürmektedir. Sürdürülemez üretim ve tüketimi krizin kaynağı olarak tanımlar, adalet ve toplumsal refahı vurgular ve çözüm olarak geniş bir ekonomik ve kurumsal dönüşümü teşvik eder."
        },
        {
          id: "eu-fbg-5",
          type: "background",
          textEn: "In 2020, the EEAS, in cooperation with the European Defence Agency (EDA), published the Climate Change and Defence Roadmap. The document summarizes how climate change poses threats to the entire world and humanity, stating: “The EU has long recognised that climate change acts as a threat multiplier with serious implications for peace and security across the globe. … They will limit the availability of food and water, undermine human health, cause people displacement and degrade infrastructure and economies, biodiversity and resources. (EEAS, 2020)”. This document frames climate change as a defence and security issue while highlighting its impacts on food and water security, health, displacement, infrastructure, economies, biodiversity, and resources. In 2021, the document titled “'Fit for 55': Delivering the EU’s 2030 Climate Target on the Way to Climate Neutrality” was published, outlining the goal of reducing carbon emissions by 55 percent by 2030 compared to 1990 levels (European Commission, 2021). In Entman’s terms, Fit for 55 reflects the policy remedy dimension of the EU’s climate frame by translating climate neutrality goals into concrete emission reduction targets. The “Guidance on the Social Climate Plans”, published in 2025, details the EU’s efforts to ensure human security and social justice while combating climate change. The main focus of the communication is to make the EU’s transition toward climate neutrality socially equitable. It also highlights the establishment of the Social Climate Fund (SCF) in 2023 as a key mechanism to ensure a socially fair transition toward the EU’s climate neutrality (European Commission, 2025). This document is important for the moral evaluation and treatment recommendation dimensions of the EU’s frame. It presents climate action as both emission reduction and distributive justice, emphasizing support for vulnerable groups through measures that reduce the social costs of the green transition.",
          textTr: "2020 yılında EEAS, Avrupa Savunma Ajansı (EDA) ile iş birliği içinde İklim Değişikliği ve Savunma Yol Haritası'nı yayınlamıştır. Belge, iklim değişikliğinin tüm dünya ve insanlık için nasıl tehditler oluşturduğunu şu şekilde özetlemektedir: “AB, iklim değişikliğinin dünya genelinde barış ve güvenlik üzerinde ciddi etkileri olan bir tehdit çarpanı olarak hareket ettiğini uzun süredir kabul etmektedir. … Gıda ve su kaynaklarını sınırlayacak, insan sağlığını baltalayacak, insanların yerinden edilmesine neden olacak ve altyapı ile ekonomileri, biyolojik çeşitliliği ve kaynakları bozacaktır. (EEAS, 2020)”. Bu belge, iklim değişikliğini bir savunma ve güvenlik meselesi olarak çerçevelerken gıda ve su güvenliği, sağlık, yerinden edilme, altyapı, ekonomiler, biyolojik çeşitlilik ve kaynaklar üzerindeki etkilerini vurgulamaktadır. 2021 yılında, \"'Fit for 55': İklim Nötrlüğü Yolunda AB’nin 2030 İklim Hedefine Ulaşmak\" başlıklı belge yayınlanmış ve karbon emisyonlarının 1990 seviyelerine kıyasla 2030 yılına kadar yüzde 55 oranında azaltılması hedefi özetlenmiştir (Avrupa Komisyonu, 2021). Entman'ın terimleriyle Fit for 55, iklim nötrlüğü hedeflerini somut emisyon azaltma hedeflerine dönüştürerek AB’nin iklim çerçevesinin politika çözümü boyutunu yansıtır. 2025 yılında yayınlanan “Sosyal İklim Planlarına İlişkin Kılavuz”, AB'nin iklim değişikliğiyle mücadele ederken insan güvenliğini ve sosyal adaleti sağlama çabalarını detaylandırmaktadır. Bildirinin temel odak noktası, AB'nin iklim nötrlüğüne geçişini sosyal açıdan adil hale getirmektir. Ayrıca, AB’nin iklim nötrlüğüne yönelik sosyal açıdan adil bir geçiş sağlamak için temel bir mekanizma olarak 2023 yılında Sosyal İklim Fonu’nun (SCF) kurulmasını vurgulamaktadır (Avrupa Komisyonu, 2025). Bu belge, AB’nin çerçevesinin ahlaki değerlendirme ve çözüm önerisi boyutları açısından önemlidir. İklim eylemini hem emisyon azaltımı hem de dağıtıcı adalet olarak sunar; yeşil geçişin sosyal maliyetlerini azaltan önlemler yoluyla kırılgan gruplara desteği vurgular."
        },
        {
          id: "eu-fcore-6",
          type: "core",
          textEn: "To transition these threat framings into concrete frameworks, the EU signed the <span class=\"info-trigger\" data-target=\"eu-fbg-4\">2016 Global Strategy and 2019 European Green Deal</span>, later operationalizing them through the <span class=\"info-trigger\" data-target=\"eu-fbg-5\">2020 Defence Roadmap, 2021 'Fit for 55' package, and 2025 Social Climate Plans</span>.",
          textTr: "Bu tehdit çerçevelemelerini somut yapılara dönüştürmek için AB, <span class=\"info-trigger\" data-target=\"eu-fbg-4\">2016 Küresel Stratejisini ve 2019 Avrupa Yeşil Mutabakatını</span> imzalamış, daha sonra bunları <span class=\"info-trigger\" data-target=\"eu-fbg-5\">2020 Savunma Yol Haritası, 2021 'Fit for 55' paketi ve 2025 Sosyal İklim Planları</span> aracılığıyla işlevsel hale getirmiştir."
        },
        {
          id: "eu-fbg-6",
          type: "background",
          textEn: "According to the EU, climate change is a threat multiplier that exacerbates existing crises and triggers conflict and migration. The lives, livelihoods, health, and dignity of individuals are considered to be deeply intertwined with climate-related threats. The green transition is presented as an area of opportunity consistent with the EU’s vision of sustainable development, employment, and resilience. From the perspective of framing theory and in light of Entman’s four functions of framing, the EU defines the problem primarily in terms of climate change being a global threat that endangers human life. The causes and culprits of the problem are identified as harmful human activities and the lack of global cooperation, which together deepen the crisis. From a moral standpoint, justice, solidarity, and responsibility constitute the EU’s normative foundation. Finally, as a treatment recommendation, the EU conducts all of its policies through the lens of climate change. Believing that international cooperation is critical to combating climate change, the EU plays an active role in global climate diplomacy. Through policies such as the European Green Deal and Fit for 55, it seeks to address climate change for the sake of humanity’s future. By framing climate change through the lens of human security, the EU renders it a salient, existential, and urgent threat. In this way, an environmental issue is elevated to the center of the security agenda. The human impacts of climate change become the foundation of political legitimacy, while the EU’s image as a normative power is reproduced and reinforced through the discourse of climate security.",
          textTr: "AB'ye göre iklim değişikliği, mevcut krizleri şiddetlendiren ve çatışma ile göçü tetikleyen bir tehdit çarpanıdır. Bireylerin yaşamları, geçimleri, sağlıkları ve onurları iklimle ilgili tehditlerle derinden iç içe geçmiş olarak kabul edilir. Yeşil geçiş, AB'nin sürdürülebilir kalkınma, istihdam ve dayanıklılık vizyonuyla uyumlu bir fırsat alanı olarak sunulmaktadır. Çerçeveleme teorisi perspektifinden ve Entman'ın dört çerçeveleme işlevi ışığında AB, sorunu öncelikle iklim değişikliğinin insan hayatını tehlikeye atan küresel bir tehdit olması temelinde tanımlamaktadır. Sorunun nedenleri ve suçluları, krizi birlikte derinleştiren zararlı insan faaliyetleri ve küresel iş birliği eksikliği olarak belirlenmektedir. Ahlaki açıdan bakıldığında adalet, dayanışma ve sorumluluk AB'nin normatif temelini oluşturur. Son olarak, bir çözüm önerisi olarak AB, tüm politikalarını iklim değişikliği merceğinden yürütmektedir. İklim değişikliğiyle mücadelede uluslararası iş birliğinin kritik olduğuna inanan AB, küresel iklim diplomasisinde aktif bir rol oynamaktadır. Avrupa Yeşil Mutabakatı ve Fit for 55 gibi politikalarla iklim değişikliğini insanlığın geleceği adına ele almaya çalışmaktadır. AB, iklim değişikliğini insan güvenliği merceğinden çerçeveleyerek belirgin, varoluşsal ve acil bir tehdit haline getirmektedir. Bu şekilde çevresel bir sorun güvenlik gündeminin merkezine yükseltilmektedir. İklim değişikliğinin insani etkileri siyasi meşruiyetin temeli haline gelirken, AB'nin normatif bir güç olarak imajı iklim güvenliği söylemi aracılığıyla yeniden üretilmekte ve güçlendirilmektedir."
        },
        {
          id: "eu-core-7",
          type: "core",
          textEn: "In summary, the EU's framing processes <span class=\"info-trigger\" data-target=\"eu-fbg-6\">securitize climate change as a threat multiplier</span>, building political legitimacy on humanitarian mitigation and international climate diplomacy.",
          textTr: "Özetle, AB'nin çerçeveleme süreçleri, insani azaltım ve uluslararası iklim diplomasisi üzerinden siyasi meşruiyet inşa ederek <span class=\"info-trigger\" data-target=\"eu-fbg-6\">iklim değişikliğini bir tehdit çarpanı olarak güvenlikleştirmektedir</span>."
        }
      ]
    },
    {
      id: "comparative",
      titleEn: "7. Comparative Analysis",
      titleTr: "7. Karşılaştırmalı Analiz",
      blocks: [
        {
          id: "comp-fcore-1",
          type: "core",
          textEn: "The U.S. and the EU present two distinct discursive universes in their framing of climate change. While one is grounded in economic nationalism and a short-term sovereignty discourse, the other is based on normative multilateralism and the principles of human security. Within the framework of framing theory, these two actors construct different meanings of climate change, which they employ to legitimize divergent policy pathways and political identities. This comparative analysis reveals how climate change is either excluded from or, conversely, placed at the center of the human security lens.",
          textTr: "ABD ve AB, iklim değişikliği çerçevelemelerinde iki farklı söylem evreni sunmaktadır. Biri ekonomik milliyetçilik ve kısa vadeli egemenlik söylemine dayanırken, diğeri normatif çok taraflılık ve insan güvenliği ilkelerine dayanmaktadır. Çerçeveleme teorisi çerçevesinde, bu iki aktör iklim değişikliğine farklı anlamlar yüklemekte ve bunu farklı politika yollarını ve siyasi kimlikleri meşrulaştırmak için kullanmaktadır. Bu karşılaştırmalı analiz, iklim değişikliğinin insan güvenliği merceğinden nasıl dışlandığını veya tam tersine merkezine yerleştirildiğini ortaya koymaktadır."
        },
        {
          id: "comp-ftable-1",
          type: "table",
          tableName: "comparison"
        },
        {
          id: "comp-fbg-2",
          type: "background",
          textEn: "When examining the problem definitions of climate change by the two actors, a contrast emerges between an “economic conspiracy” and an “existential threat.” In his lengthy speech at the UN General Assembly on 23 September 2025, Trump harshly criticized climate change policies and strongly attacked major powers such as the EU that actively pursue them. He adopted a framework that completely rejects climate change as a security or human life threat. In Trump’s discourse, climate change is reframed from being a security issue into a global conspiracy against national development — or, in his own words, “the greatest con job ever perpetrated on the world” (ABC News, 2025). The Trump administration characterized climate policies merely as an “unfair economic burden” imposed on the U.S. (Trump, 2025a). This framing shifts a scientifically urgent security issue entirely into the realm of economics.",
          textTr: "İki aktörün iklim değişikliğine ilişkin sorun tanımları incelendiğinde, \"ekonomik bir komplo\" ile \"varoluşsal bir tehdit\" arasında bir tezat ortaya çıkmaktadır. Trump, 23 Eylül 2025'te BM Genel Kurulu'nda yaptığı uzun konuşmada, iklim değişikliği politikalarını sert bir şekilde eleştirmiş ve bunları aktif olarak sürdüren AB gibi büyük güçlere güçlü bir şekilde saldırmıştır. İklim değişikliğini bir güvenlik veya insan hayatı tehdidi olarak tamamen reddeden bir çerçeve benimsemiştir. Trumpretoriğinde iklim değişikliği, bir güvenlik sorunu olmaktan çıkarılıp ulusal kalkınmaya karşı küresel bir komploya dönüştürülmüştür - ya da kendi ifadesiyle \"dünyada yapılmış en büyük dolandırıcılık\" (ABC News, 2025). Trump yönetimi, iklim politikalarını yalnızca ABD'ye yüklenen \"haksız bir ekonomik yük\" olarak nitelendirmiştir (Trump, 2025a). Bu çerçeveleme, bilimsel olarak acil bir güvenlik konusunu tamamen ekonomi alanına kaydırmaktadır."
        },
        {
          id: "comp-fbg-3",
          type: "background",
          textEn: "The EU, by contrast, defines climate change as a “very serious threat” (European Commission, n.d.a). Since 2008 in particular, the EU has explicitly framed climate change as a threat multiplier (European Commission and the High Representative, 2008) — that is, as a phenomenon that exacerbates existing tensions and instability. From the perspective of the U.S. under the Trump administration, however, the EU’s vital climate measures represent a form of self-inflicted economic harm by successful industrialized nations, radically disrupting their own economies (ABC News, 2025). According to Trump, the real issue lies in EU regulations such as the Corporate Sustainability Due Diligence Directive (CSDDD) (European Commission, n.d.b), which require companies to identify and address adverse human rights and environmental impacts of their activities both within and outside Europe. In his view, such rules not only harm EU markets but also impose significant economic and regulatory burdens on American companies (Lefebvre and Colman, 2025).",
          textTr: "AB ise aksine iklim değişikliğini \"çok ciddi bir tehdit\" olarak tanımlamaktadır (Avrupa Komisyonu, t.y.a). Özellikle 2008'den bu yana AB, iklim değişikliğini açıkça bir tehdit çarpanı (Avrupa Komisyonu ve Yüksek Temsilci, 2008) -yani mevcut gerilimleri ve istikrarsızlığı şiddetlendiren bir olgu- olarak çerçevelemiştir. Ancak Trump yönetimi altındaki ABD perspektifinden bakıldığında, AB'nin hayati önem taşıyan iklim önlemleri, başarılı sanayileşmiş ulusların kendi ekonomilerini radikal bir şekilde kesintiye uğratarak kendilerine verdikleri bir tür ekonomik zarar anlamına gelmektedir (ABC News, 2025). Trump'a göre asıl sorun, şirketlerin hem Avrupa içindeki hem de dışındaki faaliyetlerinin olumsuz insan hakları ve çevresel etkilerini tespit etmesini ve ele almasını gerektiren Kurumsal Sürdürülebilirlik Özen Yükümlülüğü Direktifi (CSDDD) (Avrupa Komisyonu, t.y.b) gibi AB düzenlemelerinde yatmaktadır. Trump'ın görüşüne göre bu tür kurallar sadece AB pazarlarına zarar vermekle kalmamakta, aynı zamanda Avrupa'da iş yapan Amerikan şirketlerine de önemli ekonomik ve düzenleyici yükler getirmektedir (Lefebvre ve Colman, 2025)."
        },
        {
          id: "comp-fbg-4",
          type: "background",
          textEn: "According to framing theory, the two actors exhibit a significant divergence in how they identify the cause and culprit of the problem. The Trump administration attributes the reason for climate change measures to previous administrations, state governments, and the scientific elite. Former administrations (Obama and Biden) are accused of adopting measures that weakened national security, while science itself is dismissed as misleading and politicized. For Trump, the perpetrators of the climate change “conspiracy” are “hoaxes” fabricated by “people with evil intentions,” as well as “stupid people” who previously made false predictions such as “global cooling” and “global warming.” He also blames those who follow the “globalist concept,” such as the EU, and EU regulatory bodies that impose “significant economic and regulatory burdens” on American companies (ABC News, 2025). In contrast, the EU attributes the cause of the problem to harmful human activities, dependence on fossil fuels, and the lack of global cooperation. Therefore, one of the fundamental differences in framing between the two actors lies in whether they view climate change as a systemic and collective problem or as a deception created by external actors.",
          textTr: "Çerçeveleme teorisine göre iki aktör, sorunun nedenini ve suçlusunu belirleme biçimlerinde önemli bir farklılık sergilemektedir. Trump yönetimi, iklim değişikliği önlemlerinin nedenini önceki yönetimlere, eyalet hükümetlerine ve bilimsel elitlere bağlamaktadır. Önceki yönetimler (Obama ve Biden) ulusal güvenliği zayıflatan önlemler almakla suçlanırken, bilimin kendisi yanıltıcı ve siyasallaştırılmış olarak reddedilmektedir. Trump'a göre iklim değişikliği \"komplosunun\" failleri, \"kötü niyetli insanlar\" tarafından uydurulan \"yalanlar\" ve daha önce \"küresel soğuma\" ve \"küresel ısınma\" gibi yanlış tahminlerde bulunan \"aptal insanlar\"dır. Trump ayrıca, AB gibi \"küreselleşmeci konsepti\" izleyenleri ve Amerikalı şirketlere \"önemli ekonomik ve düzenleyici yükler\" getiren AB düzenleyici kurumlarını da suçlamaktadır (ABC News, 2025). Buna karşılık AB, sorunun nedenini zararlı insan faaliyetlerine, fosil yakıtlara olan bağımlılığa ve küresel iş birliği eksikliğine bağlamaktadır. Bu nedenle iki aktör arasındaki çerçevelemedeki temel farklardan biri, iklim değişikliğini sistemik ve kolektif bir sorun olarak mı yoksa dış aktörler tarafından yaratılmış bir aldatmaca olarak mı gördüklerinde yatmaktadır."
        },
        {
          id: "comp-fbg-5",
          type: "background",
          textEn: "The moral evaluation in the U.S. under the Trump administration depicted climate policies as “producing economic injustice” and placing an “unfair burden” on American workers, businesses, and taxpayers. According to Trump, green energy agendas were “suicidal energy ideas” that had brought European countries “to the brink of destruction,” meaning that “all green is all bankrupt” (ABC News, 2025). In contrast, the EU views the fight against climate change through the normative values of justice, solidarity, and responsibility. The EU never regards climate action as a financial cost but as an opportunity for innovation guided by the principle of “leaving no one behind” (European Commission, n.d.c). This enables the EU to reproduce its image as a normative power through climate security. By providing climate finance to developing countries, the EU claims to assume the role of a global champion, thereby reinforcing a framework centered on protecting all humanity under threat.",
          textTr: "Trump yönetimindeki ABD'de yapılan ahlaki değerlendirme, iklim politikalarını \"ekonomik adaletsizlik yaratmak\" ve Amerikalı işçilere, işletmelere ve vergi mükelleflerine \"haksız bir yük\" getirmek olarak tasvir etmiştir. Trump'a göre yeşil enerji gündemleri, Avrupa ülkelerini \"yıkımın eşiğine\" getiren \"intihara meyilli enerji fikirleri\" idi ve bu \"tüm yeşillerin iflas etmesi\" anlamına geliyordu (ABC News, 2025). Buna karşılık AB, iklim değişikliğiyle mücadeleyi adalet, dayanışma ve sorumluluk gibi normatif değerler üzerinden görmektedir. AB, iklim eylemini hiçbir zaman finansal bir maliyet olarak değil, \"kimseyi geride bırakmama\" ilkesinin rehberliğinde bir inovasyon fırsatı olarak kabul etmektedir (Avrupa Komisyonu, t.y.c). Bu, AB'nin iklim güvenliği aracılığıyla normatif bir güç olarak imajını yeniden üretmesini sağlamaktadır. Gelişmekte olan ülkelere iklim finansmanı sağlayarak AB, küresel bir şampiyon rolünü üstlendiğini iddia etmekte ve böylece tehdit altındaki tüm insanlığı korumayı merkezine alan bir çerçeveyi pekiştirmektedir."
        },
        {
          id: "comp-fbg-6",
          type: "background",
          textEn: "In the U.S. proposal for a solution, climate policies and the globalist concept “must be completely and immediately rejected.” Trump had already annulled all climate policies on the first day of his second presidential term, thereby disregarding all measures related to human security. He demands not only that the U.S. but all states abandon such policies. According to him, European countries should stay away from this “green scam.” Through diplomatic pressure, the U.S. seeks the total repeal of the EU’s green regulations, such as the CSDDD (Milman, 2025). In contrast, the EU’s proposed solution is to conduct all of its policies within the framework of climate change and to play an active role in international cooperation. Moreover, the EU refuses to yield to U.S. pressure to “tear up” its green rules. The Union will not retract or dilute any of its legislation (Gavin and Gros, 2025).",
          textTr: "ABD'nin çözüm önerisinde iklim politikaları ve küreselleşmeci konsept \"tamamen ve derhal reddedilmelidir.\" Trump, ikinci başkanlık döneminin ilk gününde tüm iklim politikalarını iptal etmiş ve böylece insan güvenliğiyle ilgili tüm önlemleri göz ardı etmiştir. Sadece ABD'nin değil, tüm devletlerin bu tür politikaları terk etmesini talep etmektedir. Ona göre Avrupa ülkeleri bu \"yeşil aldatmacadan\" uzak durmalıdır. Diplomatik baskı yoluyla ABD, AB'nin CSDDD gibi yeşil düzenlemelerinin tamamen yürürlükten kaldırılmasını istemektedir (Milman, 2025). Buna karşılık AB'nin önerdiği çözüm, tüm politikalarını iklim değişikliği çerçevesinde yürütmek ve uluslararası iş birliğinde aktif bir rol oynamaktır. Dahası AB, yeşil kurallarını \"yırtıp atmak\" yönündeki ABD baskısına boyun eğmeyi reddetmektedir. Birlik, mevzuatının hiçbirini geri çekmeyecek veya yumuşatmayacaktır (Gavin ve Gros, 2025)."
        },
        {
          id: "comp-fcore-2",
          type: "core",
          textEn: "This profound divergence manifests across their problem definitions, contrasting Trump's view of an <span class=\"info-trigger\" data-target=\"comp-fbg-2\">'economic conspiracy'</span> with the EU's view of an <span class=\"info-trigger\" data-target=\"comp-fbg-3\">'existential threat'</span>, which extends into their identification of <span class=\"info-trigger\" data-target=\"comp-fbg-4\">causes and culprits</span>.",
          textTr: "Bu derin sapma, Trump'ın <span class=\"info-trigger\" data-target=\"comp-fbg-2\">\"ekonomik bir komplo\"</span> görüşü ile AB'nin <span class=\"info-trigger\" data-target=\"comp-fbg-3\">\"varoluşsal bir tehdit\"</span> görüşünü karşı karşıya getiren sorun tanımlarında kendini gösterir ve bu durum <span class=\"info-trigger\" data-target=\"comp-fbg-4\">nedenler ve suçluları</span> belirleme biçimlerine kadar uzanır."
        },
        {
          id: "comp-fcore-3",
          type: "core",
          textEn: "Similarly, their <span class=\"info-trigger\" data-target=\"comp-fbg-5\">moral evaluations</span> clash between economic injustice claims and normative solidarity, leading to opposing <span class=\"info-trigger\" data-target=\"comp-fbg-6\">treatment recommendations</span> of total policy rejection versus institutionalized international cooperation.",
          textTr: "Benzer şekilde, tarafların <span class=\"info-trigger\" data-target=\"comp-fbg-5\">ahlaki değerlendirmeleri</span>, ekonomik adaletsizlik iddiaları ile normatif dayanışma arasında çatışır ve bu durum, politikaların tamamen reddedilmesi ile kurumsallaşmış uluslararası iş birliği gibi birbirine taban tabana zıt <span class=\"info-trigger\" data-target=\"comp-fbg-6\">çözüm önerilerine</span> yol açar."
        },
        {
          id: "comp-fcore-4",
          type: "core",
          textEn: "This fundamentally divergent framings of climate change by these two actors have led to a profound weakening of global climate governance in the international arena, thereby placing human security under greater threat. The withdrawal of the world’s largest economy from the Paris Climate Agreement weakened global climate governance. This effect was reinforced by the cancellation of climate mitigation policies and the expansion of environmentally harmful activities in climate-sensitive regions such as the Arctic. Moreover, this action appears particularly detrimental as it may serve as a potential precedent for other states to retreat from their own climate commitments.",
          textTr: "Bu iki aktörün iklim değişikliğini temelden farklı çerçevelemesi, uluslararası alanda küresel iklim yönetişiminin derin bir şekilde zayıflamasına yol açmış ve böylece insan güvenliğini daha büyük bir tehdit altına sokmuştur. Dünyanın en büyük ekonomisinin Paris İklim Anlaşması'ndan çekilmesi, küresel iklim yönetişimini zayıflatmıştır. Bu etki, iklim azaltım politikalarının iptal edilmesi ve Arktik gibi iklime duyarlı bölgelerde çevreye zararlı faaliyetlerin genişletilmesiyle pekiştirilmiştir. Dahası bu eylem, diğer devletlerin de kendi iklim taahhütlerinden geri çekilmeleri için potansiyel bir emsal teşkil edebileceğinden özellikle zararlı görünmektedir."
        }
      ]
    },
    {
      id: "conclusion",
      titleEn: "8. Conclusion",
      titleTr: "8. Sonuç",
      blocks: [
        {
          id: "conc-fcore-1",
          type: "core",
          textEn: "This study has conducted a comparative analysis of how the U.S. and the EU frame climate change within the context of human security, revealing that two contrasting framings fundamentally shape their security perceptions and approaches to global climate governance. Frame theory has been instrumental in analyzing how these major actors highlight certain aspects of the same issue while disregarding others, subsequently transforming these framings into policy. The key factor determining whether climate change is perceived as a negligible concern or as a comprehensive human security challenge requiring international cooperation lies in how it is framed by the actors.",
          textTr: "Bu çalışma, ABD ve AB'nin iklim değişikliğini insan güvenliği bağlamında nasıl çerçevelediğine dair karşılaştırmalı bir analiz sunarak, iki zıt çerçevelemenin güvenlik algılarını ve küresel iklim yönetişimine yaklaşımlarını temelden şekillendirdiğini ortaya koymuştur. Çerçeveleme teorisi, bu büyük aktörlerin aynı konunun belirli yönlerini vurgularken diğerlerini nasıl göz ardı ettiklerini ve ardından bu çerçevelemeleri nasıl politikaya dönüştürdüklerini analiz etmede etkili olmuştur. İklim değişikliğinin önemsiz bir endişe kaynağı mı yoksa uluslararası iş birliği gerektiren kapsamlı bir insan güvenliği sorunu mu olarak algılandığını belirleyen temel faktör, aktörler tarafından nasıl çerçevelendiğinde yatmaktadır."
        },
        {
          id: "conc-fcore-2",
          type: "core",
          textEn: "Under the Trump administration, the U.S. did not frame climate change as a human security issue, as evidenced by policy documents and presidential speeches. On the contrary, climate policies were framed as threats to national security on the grounds that they allegedly harmed the economy and undermined energy independence. Despite the overwhelming scientific consensus on the climate crisis, the administration pursued a discourse that delegitimized science by claiming that it had been politicized. It dismantled nearly all domestic and international climate-related policies and resumed intensive fossil fuel extraction, including in environmentally vulnerable areas.",
          textTr: "Trump yönetimi altında ABD, politika belgeleri ve başkanlık konuşmalarında görüldüğü üzere iklim değişikliğini bir insan güvenliği sorunu olarak çerçevelememiştir. Aksine, iklim politikaları, ekonomiye zarar verdiği ve enerji bağımsızlığını baltaladığı gerekçesiyle ulusal güvenliğe yönelik tehditler olarak çerçevelenmiştir. İklim krizine ilişkin ezici bilimsel fikir birliğine rağmen, yönetim bilimin siyasallaştırıldığını iddia ederek meşruiyetini sarsan bir söylem izlemiştir. Neredeyse tüm yerel ve uluslararası iklim politikalarını yürürlükten kaldırmış ve çevre açısından hassas alanlar da dahil olmak üzere yoğun fosil yakıt çıkarımına geri dönmüştür."
        },
        {
          id: "conc-fcore-3",
          type: "core",
          textEn: "The EU, on the other hand, perceives climate change as a threat to humanity and the planet as a whole, thereby framing it explicitly within the human security paradigm. The EU advocates that ensuring the planet’s sustainability requires inclusive and cooperative international policies that leave no one behind. In this regard, it is evident that the EU’s policy framework consistently treats climate change as a human security issue.",
          textTr: "Öte yandan AB, iklim değişikliğini bir bütün olarak insanlığa ve gezegene yönelik bir tehdit olarak algılamakta ve bunu açıkça insan güvenliği paradigması içinde çerçevelemektedir. AB, gezegenin sürdürülebilirliğini sağlamanın kimseyi geride bırakmayan kapsayıcı ve iş birlikçi uluslararası politikalar gerektirdiğini savunmaktadır. Bu bağlamda, AB'nin politika çerçevesinin iklim değişikliğini tutarlı bir şekilde bir insan güvenliği sorunu olarak ele aldığı açıktır."
        },
        {
          id: "conc-fcore-4",
          type: "core",
          textEn: "As has long been established, climate change is a global problem that cannot be resolved without international cooperation, particularly among major powers and highly polluting states. Although the EU exerts significant global efforts through its climate policies, the absence of cooperation from the U.S., as a superpower, exacerbates climate-related threats. The U.S.’s denial of climate change and its economy-driven policies not only obstruct collective action but also intensify global crises that endanger human security. Future studies may further develop this analysis by including additional actors such as China and Russia, by examining media and public opinion frames alongside official policy documents, and by assessing how competing climate-security frames influence concrete policy outcomes over time.",
          textTr: "Uzun süredir kabul edildiği gibi iklim değişikliği, özellikle büyük güçler ve yüksek düzeyde kirletici devletler arasında uluslararası iş birliği olmadan çözülemeyecek küresel bir sorundur. AB iklim politikalarıyla küresel düzeyde önemli çabalar gösterse de, bir süper güç olarak ABD'nin iş birliği yapmaması iklimle ilgili tehditleri şiddetlendirmektedir. ABD'nin iklim değişikliğini reddetmesi ve ekonomiye dayalı politikaları sadece kolektif eylemi engellemekle kalmayıp, aynı zamanda insan güvenliğini tehlikeye atan küresel krizleri de yoğunlaştırmaktadır. Gelecekteki çalışmalar, resmi politika belgelerinin yanı sıra medya ve kamuoyu çerçevelerini inceleyerek ve rekabet halindeki iklim-güvenlik çerçevelerinin zaman içinde somut politika sonuçlarını nasıl etkilediğini değerlendirerek, Çin ve Rusya gibi ek aktörleri dahil edip bu analizi daha da geliştirebilir."
        }
      ]
    }
  ],
  
  // ==========================================
  // 2. SIMPLIFIED/CONDENSED VERSION (SECTIONS SIMPLIFIED)
  // ==========================================
  sectionsSimplified: [
    {
      id: "abstract",
      titleEn: "Abstract / Öz",
      titleTr: "Öz / Abstract",
      blocks: [
        {
          id: "abs-s1",
          type: "core",
          textEn: "<p><strong>Abstract:</strong> This article examines how two major global actors—the United States (U.S.) and the European Union (EU)—have framed climate change from a human security perspective, with a particular focus on the Trump era. Drawing on Frame Theory, the study explains how political narratives and policy discourses construct the meaning of climate change and analyzes how this construction shapes public perception and policy priorities. Through a qualitative comparative analysis of official speeches and policy documents, significant differences are identified between the framing approaches of the U.S. and the EU. The Trump administration primarily addressed climate change within the context of economic interests and energy independence, whereas the EU framed it as a global and humanitarian security issue requiring multilateral cooperation. The article argues that determining whether global actors frame climate change within a human security paradigm is crucial for understanding how framing processes shape the conceptualization of security and redefine the relationship between the environmental and political spheres.</p>",
          textTr: "<p><strong>Öz:</strong> Bu makale, iki büyük küresel aktör olan Amerika Birleşik Devletleri (ABD) ile Avrupa Birliği’nin (AB) iklim değişikliğini insan güvenliği perspektifinden nasıl çerçevelediğini, özellikle de Trump dönemi odağında incelemektedir. Çerçeveleme Teorisi’nden yararlanan çalışma, politik anlatıların ve politika söylemlerinin iklim değişikliği olgusuna nasıl anlam kazandırdığını ve bu anlamlandırma sürecinin kamu algısını ve politika önceliklerini nasıl şekillendirdiğini açıklamaktadır. Resmî konuşmalar ve politika belgeleri üzerine yapılan nitel karşılaştırmalı analiz, ABD ile AB’nin çerçeveleme yaklaşımları arasında önemli farklar bulunduğunu ortaya koymaktadır. Trump yönetimi iklim değişikliğini ağırlıklı olarak ekonomik çıkarlar ve enerji bağımsızlığı bağlamında ele alırken, AB bunu çok taraflı iş birliği gerektiren, küresel ve insani güvenlik meselesi olarak çerçevelemiştir. Makale, küresel aktörlerin iklim değişikliğini bir insan güvenliği paradigması içinde çerçeveleyip çerçeveleyemediklerinin, çerçeveleme süreçlerinin güvenlik kavrayışını nasıl şekillendirdiğini ve çevresel alan ile siyasal alan arasındaki ilişkiyi nasıl yeniden tanımladığını anlamak açısından kritik olduğunu ileri sürmektedir.</p>"
        }
      ]
    },
    {
      id: "introduction",
      titleEn: "1. Introduction (Simplified)",
      titleTr: "1. Giriş (Sadeleştirilmiş)",
      blocks: [
        {
          id: "intro-sbg-1",
          type: "background",
          textEn: "The effects of climate change are becoming increasingly evident today, and the anticipated global consequences represent a multidimensional threat to international security. The security implications of climate change are not confined to state-centered threats alone; rather, climate change has emerged as an issue of “human security,” endangering individuals’ living conditions, livelihoods, health, and access to shelter. In this context, these multifaceted risks are redefining the scope of security and bringing environmental sustainability and human well-being into contemporary security debates.",
          textTr: "Günümüzde iklim değişikliğinin etkileri giderek daha belirgin hale gelmekte ve öngörülen küresel sonuçlar uluslararası güvenlik için çok boyutlu bir tehdit oluşturmaktadır. İklim değişikliği; bireylerin yaşam koşullarını, geçim kaynaklarını, sağlıklarını ve barınmaya erişimlerini tehlikeye atan bir 'insan güvenliği' sorunu olarak ortaya çıkmıştır. Bu çok yönlü riskler, güvenliğin kapsamını yeniden tanımlamakta ve çevresel sürdürülebilirlik ile insan refahı arasındaki ilişkiyi çağdaş güvenlik tartışmalarına taşımaktadır."
        },
        {
          id: "intro-score-1",
          type: "core",
          textEn: "When discussing the impacts of <span class=\"info-trigger\" data-target=\"intro-sbg-1\">climate change on human security</span>, it becomes crucial to examine how actors within the international system address this issue. Beyond the inherent relationship between climate change and human security, understanding how states perceive and interpret this phenomenon is essential for grasping the policies they pursue in response to this global threat.",
          textTr: "Aktörlerin bu konuyu nasıl ele aldığını incelemek, <span class=\"info-trigger\" data-target=\"intro-sbg-1\">iklim değişikliğinin insan güvenliği üzerindeki etkilerini</span> tartışırken kritik bir önem kazanmaktadır. İklim değişikliği ile insan güvenliği arasındaki doğal ilişkinin ötesinde, devletlerin bu olguyu nasıl algıladıklarını ve yorumladıklarını anlamak, bu küresel tehdide yanıt olarak izledikleri politikaları kavramak açısından esastır."
        },
        {
          id: "intro-score-2",
          type: "core",
          textEn: "Building on this premise, this study comparatively analyzes how two major global actors—the United States and the European Union—framed climate change as a human security issue, with a particular focus on the two Trump administrations.",
          textTr: "Bu temelden hareketle, bu çalışma, iki önemli küresel aktörün —Amerika Birleşik Devletleri ve Avrupa Birliği— iklim değişikliğini bir insan güvenliği meselesi olarak nasıl çerçevelediğini, özellikle iki Trump yönetimi odağında karşılaştırmalı olarak analiz etmektedir."
        },
        {
          id: "intro-score-3",
          type: "core",
          textEn: "This article seeks to answer the following research question: How have the U.S. under the Trump administration and the EU framed climate change as a human security challenge? By addressing this question, the study aims to reveal how the framing approaches of these two actors have brought climate change onto their respective security agendas and shaped their conceptualizations of human security.",
          textTr: "Bu makale şu araştırma sorusuna cevap aramaktadır: Trump yönetimi altındaki ABD ve AB, iklim değişikliğini bir insan güvenliği sorunu olarak nasıl çerçevelemiştir? Çalışma, bu soruyu ele alarak, bu iki aktörün çerçeveleme yaklaşımlarının iklim değişikliğini kendi güvenlik gündemlerine nasıl taşıdığını ve insan güvenliği kavramsallaştırmalarını nasıl şekillendirdiğini ortaya koymayı amaçlamaktadır."
        },
        {
          id: "intro-sbg-2",
          type: "background",
          textEn: "Entman’s framing theory (1993) posits that to frame is to select some aspects of a perceived reality and make them more salient in a communicating text, in such a way as to promote a specific problem definition, causal interpretation, moral evaluation, and/or treatment recommendation.",
          textTr: "Entman’ın çerçeveleme teorisi (1993), çerçevelemenin algılanan bir gerçekliğin bazı yönlerini seçip bunları bir iletişim metninde daha belirgin hale getirerek belirli bir sorun tanımını, nedensel yorumu, ahlaki değerlendirmeyi ve/veya çözüm önerisini teşvik etmek olduğunu öne sürer."
        },
        {
          id: "intro-score-4",
          type: "core",
          textEn: "This article adopts a qualitative comparative research design based on framing analysis. Drawing on <span class=\"info-trigger\" data-target=\"intro-sbg-2\">Entman’s framing theory</span>, it examines how the United States under the Trump administration and the European Union frame climate change in relation to human security. The study focuses on Trump’s first presidential term (2016–2020) and his second presidential term, which began in 2025.",
          textTr: "Bu makale, çerçeveleme analizine dayalı nitel karşılaştırmalı bir araştırma tasarımı benimsemektedir. Çalışma, <span class=\"info-trigger\" data-target=\"intro-sbg-2\">Entman’ın çerçeveleme teorisinden</span> yararlanarak, Trump dönemi altındaki Amerika Birleşik Devletleri ve Avrupa Birliği'nin iklim değişikliğini insan güvenliği ile ilişkili olarak nasıl çerçevelediğini incelemektedir. Çalışma, Trump’ın ilk başkanlık dönemine (2016–2020) ve 2025 yılında başlayan ikinci başkanlık dönemine odaklanmaktadır."
        },
        {
          id: "intro-sbg-3",
          type: "background",
          textEn: "The U.S. material includes six texts: one presidential speech, one presidential proclamation, and four executive orders. The EU material includes 13 texts: one European Council presidency conclusion, five European Commission communications or notices, three European Commission institutional webpages, one European Commission audiovisual statement, one joint report by the European Commission and the High Representative, and two European External Action Service documents.",
          textTr: "ABD materyalleri 6 metinden oluşmaktadır: bir başkanlık konuşması, bir başkanlık bildirisi ve dört başkanlık kararnamesi. AB materyalleri ise 13 metinden oluşmaktadır: bir Avrupa Konseyi dönem başkanlığı kararı, beş Avrupa Komisyonu bildirisi veya bildirimi, üç Avrupa Komisyonu kurumsal web sayfası, bir Avrupa Komisyonu görsel-işitsel açıklaması, Avrupa Komisyonu ve Yüksek Temsilci tarafından hazırlanan bir ortak rapor ve iki Avrupa Dış İlişkiler Servisi (EEAS) belgesi."
        },
        {
          id: "intro-score-5",
          type: "core",
          textEn: "The analysis is based on <span class=\"info-trigger\" data-target=\"intro-sbg-3\">19 primary texts and institutional materials</span>. The selected documents were included because they are official or institutionally attributable texts that directly address the article’s research question. They reflect how the Trump administration and the EU define climate change, assign responsibility, make normative evaluations, and justify policy responses, providing a suitable basis for comparing how climate change is framed in relation to human security.",
          textTr: "Analiz, <span class=\"info-trigger\" data-target=\"intro-sbg-3\">19 birincil metin ve kurumsal materyale</span> dayanmaktadır. Seçilen belgeler, makalenin araştırma sorusunu doğrudan ele alan resmi veya kurumsal olarak atfedilebilir metinler oldukları için dahil edilmiştir. Bu belgeler, Trump yönetiminin ve AB'nin iklim değişikliğini nasıl tanımladığını, sorumluluğu nasıl atfettiğini, normatif değerlendirmeleri nasıl yaptığını ve politika yanıtlarını nasıl gerekçelendirdiğini yansıtmaktadır."
        }
      ]
    },



    {
      id: "us-frames",
      titleEn: "2. U.S. Climate Change Frames under Trump (Simplified)",
      titleTr: "2. Trump Yönetiminde ABD'nin İklim Çerçeveleri (Sadeleştirilmiş)",
      blocks: [
        {
          id: "us-sbg-1",
          type: "background",
          textEn: "The Paris Climate Agreement is a legally binding international treaty on climate change, adopted by 196 parties at COP21 in Paris in 2015. Its goal is to limit global warming to well below 2, preferably to 1.5 degrees Celsius, compared to pre-industrial levels. Trump formally withdrew the U.S. in 2019, citing an 'unfair economic burden' on American workers and competitive disadvantages against China.",
          textTr: "Paris İklim Anlaşması, iklim değişikliği konusunda yasal olarak bağlayıcı uluslararası bir antlaşmadır. 2015 yılında Paris'teki COP21'de 196 tarafça kabul edilmiştir. Amacı, küresel ısınmayı sanayi öncesi döneme kıyasla 2 derecenin, tercihen 1.5 derecenin oldukça altında sınırlamaktır. Trump, Amerikan işçileri üzerindeki 'haksız ekonomik yükü' ve Çin'e karşı rekabet dezavantajlarını gerekçe göstererek 2019'da ABD'yi resmi olarak anlaşmadan çekmiştir."
        },
        {
          id: "us-sbg-2",
          type: "background",
          textEn: "Under Biden (2021-2025), the U.S. rejoined the Paris Agreement, set goals to cut emissions by half by 2030, achieve net-zero power by 2035 and net-zero emissions by 2050. This was backed by landmark legislations like the Inflation Reduction Act (IRA) and the Bipartisan Infrastructure Law, which made historical investments in clean energy.",
          textTr: "Biden döneminde (2021-2025) ABD, Paris Anlaşması'na yeniden katılmış, emisyonları 2030'a kadar yarıya indirme, 2035'e kadar karbon kirliliğinden arınmış elektrik sektörüne ulaşma ve 2050'ye kadar net sıfır emisyon hedeflerini belirlemiştir. Bu süreç, temiz enerjiye tarihi yatırımlar yapan Enflasyonu Düşürme Yasası (IRA) ve İki Partili Altyapı Yasası gibi dönüm noktası niteliğindeki yasalarla desteklenmiştir."
        },
        {
          id: "us-core-1",
          type: "core",
          textEn: "During his first term, Donald Trump treated climate change as an ideological matter, questioning the legitimacy of climate science. A key action was U.S. withdrawal from the <span class=\"info-trigger\" data-target=\"us-sbg-1\">Paris Climate Agreement</span>, prioritizing fossil fuels and 'energy independence.' While the Biden administration subsequently pursued a <span class=\"info-trigger\" data-target=\"us-sbg-2\">'green transformation'</span>, Trump's return to the presidency in 2025 marked a swift return to economic nationalism.",
          textTr: "Donald Trump, ilk başkanlık döneminde iklim değişikliğini ideolojik bir konu olarak ele almış ve iklim biliminin meşruiyetini sorgulamıştır. En önemli adımlarından biri, ABD'yi <span class=\"info-trigger\" data-target=\"us-sbg-1\">Paris İklim Anlaşması'ndan</span> çekmek, fosil yakıtları ve 'enerji bağımsızlığını' önceliklendirmek olmuştur. Sonraki Biden yönetimi bir <span class=\"info-trigger\" data-target=\"us-sbg-2\">'yeşil dönüşüm'</span> yürütmüş olsa da, Trump'ın 2025'te başkanlığa geri dönüşü ekonomik milliyetçiliğe hızlı bir dönüşü simgelemiştir."
        },
        {
          id: "us-core-2",
          type: "core",
          textEn: "On his first day of his second term, Trump signed Executive Order 14148, which rescinded 11 key climate-related executive orders enacted by Biden. His administration also enacted the executive order 'Restoring Gold Standard Science,' rejecting scientific evidence on climate by criticizing federal agencies for relying on the <span class=\"info-trigger\" data-target=\"us-sbg-3\">RCP 8.5 scenario</span>.",
          textTr: "Trump, ikinci döneminin ilk gününde, Biden tarafından çıkarılan 11 kritik iklim kararını yürürlükten kaldıran 14148 sayılı Yürütme Emrini imzalamıştır. Yönetim ayrıca, federal kurumların <span class=\"info-trigger\" data-target=\"us-sbg-3\">RCP 8.5 senaryosuna</span> dayanmasını eleştirerek iklim konusundaki bilimsel kanıtları reddeden 'Altın Standart Bilimin Restorasyonu' kararını yürürlüğe koymuştur."
        },
        {
          id: "us-stable-s1",
          type: "table",
          tableName: "rescissions"
        },
        {
          id: "us-sbg-3",
          type: "background",
          textEn: "Representative Concentration Pathway (RCP) 8.5 is a greenhouse gas concentration trajectory adopted by the IPCC. It represents a high-emissions scenario ('business-as-usual') where emissions continue to rise throughout the 21st century. The Trump administration rejected it as an 'unrealistic worst-case scenario' based on exaggerated assumptions.",
          textTr: "Temsili Konsantrasyon Yolu (RCP) 8.5, IPCC tarafından kabul edilen bir sera gazı konsantrasyon rotasıdır. Emisyonların 21. yüzyıl boyunca yükselmeye devam ettiği yüksek emisyonlu bir senaryoyu ('işlerin olağan akışı') temsil eder. Trump yönetimi, kömür tüketiminin abartılı varsayımlara dayandığını iddia ederek bunu 'gerçekçi olmayan en kötü durum senaryosu' olarak reddetmiştir."
        },
        {
          id: "us-core-3",
          type: "core",
          textEn: "By defining 'energy security as national security,' the Trump administration reframes climate change from a security issue to an economic threat, portraying climate measures as a 'Green New Scam' and a global conspiracy.",
          textTr: "Trump yönetimi, 'enerji güvenliği ulusal güvenliktir' tanımını yaparak iklim değişikliğini bir güvenlik meselesi olmaktan çıkarıp ekonomik bir tehdide dönüştürmüş, iklim önlemlerini bir 'Yeşil Yeni Aldatmaca' (Green New Scam) ve küresel bir komplo olarak sunmuştur."
        }
      ]
    },
    {
      id: "eu-frames",
      titleEn: "3. The European Union’s Climate Change Frames (Simplified)",
      titleTr: "3. Avrupa Birliği'nin İklim Çerçeveleri (Sadeleştirilmiş)",
      blocks: [
        {
          id: "eu-sbg-1",
          type: "background",
          textEn: "The European Green Deal, signed in 2019, is a set of policy initiatives by the European Commission with the overarching aim of making the EU climate neutral by 2050. It seeks to decouple economic growth from resource use, reduce air/water/soil pollution, and ensure a just transition where 'no one is left behind.' The Climate Change and Defence Roadmap (2020) outlines defense risks of climate change. 'Fit for 55' (2021) is a package of legislative proposals to meet the target of reducing net greenhouse gas emissions by at least 55% by 2030, supported by the Social Climate Plans (2025) and Social Climate Fund (SCF) in 2023.",
          textTr: "2019 yılında imzalanan Avrupa Yeşil Mutabakatı (European Green Deal), Avrupa Komisyonu'nun AB'yi 2050 yılına kadar iklim nötr hale getirmeyi amaçlayan bir dizi politika girişimidir. Ekonomik büyümeyi kaynak kullanımından ayırmayı, hava/su/toprak kirliliğini azaltmayı ve 'kimseyi geride bırakmama' ilkesiyle adil bir geçiş sağlamayı hedefler. İklim Değişikliği ve Savunma Yol Haritası (2020) ise iklimin savunma risklerini belirler. 'Fit for 55' (2021), emisyonları 2030'a kadar %55 azaltmayı amaçlar ve Sosyal İklim Planları (2025) ve Sosyal İklim Fonu (SCF) ile desteklenir."
        },
        {
          id: "eu-core-1",
          type: "core",
          textEn: "Since the 1990s, the European Union has steadily integrated climate change into its strategic policy. A major milestone was the 2008 joint report *'Climate Change and International Security'*, which officially framed climate change as a **'threat multiplier'** in direct connection with human security.",
          textTr: "Avrupa Birliği, 1990'lardan bu yana iklim değişikliğini stratejik politikalarına istikrarlı bir şekilde entegre etmiştir. Bu konudaki en önemli dönüm noktası, iklim değişikliğini doğrudan insan güvenliği ile ilişkilendirerek resmi olarak bir **'tehdit çarpanı'** (threat multiplier) olarak tanımlayan 2008 tarihli ortak rapordur."
        },
        {
          id: "eu-quote-s1",
          type: "core",
          textEn: "<blockquote class=\"article-blockquote\">“Climate change is best viewed as a threat multiplier which exacerbates existing trends, tensions and instability. The core challenge is that climate change threatens to overburden states and regions which are already fragile and conflict prone...”<cite>— European Commission and High Representative, 2008</cite></blockquote>",
          textTr: "<blockquote class=\"article-blockquote\">“İklim değişikliği en iyi şekilde, mevcut eğilimleri, gerilimleri ve istikrarsızlığı artıran bir tehdit çarpanı olarak görülmelidir. Temel zorluk, iklim değişikliğinin zaten kırılgan ve çatışmaya eğilimli olan devletleri ve bölgeleri aşırı yük altına sokma tehdidi taşımasıdır...”<cite>— Avrupa Komisyonu ve Yüksek Temsilci, 2008</cite></blockquote>"
        },
        {
          id: "eu-core-2",
          type: "core",
          textEn: "The EU translated this security frame into concrete action through the <span class=\"info-trigger\" data-target=\"eu-sbg-1\">European Green Deal</span> (2019) and the Climate Change and Defence Roadmap (2020). This was followed by the 'Fit for 55' package, defining the climate problem as a global threat to human life and proposing deep multilateral cooperation.",
          textTr: "AB, bu güvenlik çerçevesini <span class=\"info-trigger\" data-target=\"eu-sbg-1\">Avrupa Yeşil Mutabakatı</span> (2019) ve İklim Değişikliği ve Savunma Yol Haritası (2020) ile somut politikalara dönüştürmüştür. Bunu daha sonra 'Fit for 55' paketi izlemiş, iklim sorununu insan yaşamına yönelik küresel bir tehdit olarak tanımlamış ve derin çok taraflı iş birliği önermiştir."
        }
      ]
    },
    {
      id: "comparative",
      titleEn: "4. Comparative Analysis (Simplified)",
      titleTr: "4. Karşılaştırmalı Analiz (Sadeleştirilmiş)",
      blocks: [
        {
          id: "comp-sbg-1",
          type: "background",
          textEn: "CSDDD (Corporate Sustainability Due Diligence Directive) is an EU directive requiring large companies to identify and prevent negative impacts on human rights and the environment in their operations and supply chains. Trump claimed these regulations impose unfair regulatory and economic burdens on American companies doing business in Europe.",
          textTr: "CSDDD (Kurumsal Sürdürülebilirlik Özen Yükümlülüğü Direktifi), büyük şirketlerin kendi faaliyetleri ve tedarik zincirlerindeki insan hakları ve çevre üzerindeki olumsuz etkileri tespit edip önlemelerini gerektiren bir AB yönergesidir. Trump, bu kuralların Avrupa'da iş yapan Amerikan şirketlerine haksız ekonomik ve düzenleyici yükler getirdiğini savunmuştur."
        },
        {
          id: "comp-core-1",
          type: "core",
          textEn: "The U.S. and the EU present two distinct discursive universes. While the U.S. under Trump is grounded in economic nationalism, the EU is based on normative multilateralism. Table 2 outlines this divergence.",
          textTr: "ABD ve AB, iki zıt söylem evrenini ortaya koymaktadır. Trump yönetimindeki ABD ekonomik milliyetçiliğe dayanırken, AB normatif çok taraflılığa dayanmaktadır. Tablo 2 bu sapmayı özetlemektedir."
        },
        {
          id: "comp-stable-s1",
          type: "table",
          tableName: "comparison"
        },
        {
          id: "comp-core-2",
          type: "core",
          textEn: "In his speech at the UN General Assembly in 2025, Trump criticized climate policies as a global conspiracy, calling them 'the greatest con job ever perpetrated on the world.' The Trump administration attacked EU's green regulations, such as the <span class=\"info-trigger\" data-target=\"comp-sbg-1\">CSDDD directive</span>, as self-inflicted economic harm.",
          textTr: "Trump, 2025 yılındaki BM Genel Kurulu konuşmasında, iklim politikalarını küresel bir komplo olarak nitelendirmiş ve bunları 'dünyada yapılmış en büyük dolandırıcılık' olarak adlandırmıştır. Trump yönetimi, AB'nin CSDDD gibi yeşil düzenlemelerini, sanayileşmiş ülkelerin kendilerine verdiği ekonomik zararlar olarak eleştirmiştir."
        }
      ]
    },
    {
      id: "conclusion",
      titleEn: "5. Conclusion (Simplified)",
      titleTr: "5. Sonuç (Sadeleştirilmiş)",
      blocks: [
        {
          id: "conc-s1",
          type: "core",
          textEn: "<p>This study demonstrates that climate frames are not merely policy preferences; they actively produce different security realities. The U.S. under the Trump administration excludes human security from its climate frame, treating climate policies as threats to national economy and energy independence. Conversely, the EU institutionalizes climate change within a human security paradigm, framing it as an existential threat to humanity.</p><p>The divergence between the U.S. and the EU weakens global climate governance, setting a dangerous precedent. While the EU maintains its role as a normative champion, the lack of cooperation from a superpower like the U.S. exacerbates global vulnerabilities and places human security under a greater threat.</p>",
          textTr: "<p>Bu çalışma, iklim çerçevelerinin yalnızca politika tercihleri olmadığını, aktif olarak farklı güvenlik gerçeklikleri ürettiğini göstermektedir. Trump yönetimindeki ABD, insan güvenliğini iklim çerçevesinden dışlamakta, iklim politikalarını ulusal ekonomiye ve enerji bağımsızlığına yönelik tehditler olarak ele almaktadır. Buna karşılık AB, iklim değişikliğini insan güvenliği paradigması içinde kurumsallaştırmakta ve bunu insanlığa yönelik varoluşsal bir tehdit olarak tanımlamaktadır.</p><p>ABD ile AB arasındaki bu sapma, küresel iklim yönetişimini zayıflatmakta ve tehlikeli bir emsal oluşturmaktadır. AB normatif bir şampiyon olarak rolünü sürdürse de, ABD gibi bir süper gücün iş birliği yapmaması, küresel kırılganlıkları artırmakta ve insan güvenliğini daha büyük bir tehdit altına sokmaktadır.</p>"
        }
      ]
    }
  ],
  
  // ==========================================
  // 3. TABULAR DATA (SHARED)
  // ==========================================
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
          summary: "İptali, bu kurumsal mekanizmayı tamamen ortadan getirmiştir."
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

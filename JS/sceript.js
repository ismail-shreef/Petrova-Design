// =========================الاضاءة ===================

const body = document.querySelector("body"),
    modeSwitch = body.querySelector(".botton-content"),
    modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
});


// ===================الترجمه===============

const Translations = {
    en: {
        home: 'Home',
        projcet: 'Our Projcet',
        contact: 'Contact Us',
        mt1: 'Petrova Design',
        h3t: 'Who we are',
        p1: 'We don’t just offer finishing and decoration services; we transform spaces into unique experiences. With extensive experience and a passion for detail, we create designs that blend luxury, practicality, and innovation to meet the highest standards. Whether you need elegant touches for your home, a sophisticated office design, or a complete commercial identity, our expert team will bring your vision to life. Using the latest technologies and finest materials, we ensure quality, durability, and creativity. Every space deserves to be a masterpiece, and we are committed to exceeding expectations. Contact us today and let’s turn your ideas into stunning reality!',
        mt2: 'We Made Change',
        h4t: 'Description',
        p2: 'Petrova Design is a company specializing in finishing and decoration, providing creative solutions that transform spaces into elegant and functional environments. We are distinguished by high quality, attention to detail, and the use of the latest technologies and materials to ensure unique designs that meet our clients aspirations Whether you seek a luxurious home design a modern office or a standout commercial project our team of skilled engineers and designers works to bring your vision to life with the highest standards We believe every space deserves to be a masterpiece reflecting its owners personality Contact us today and lets bring your ideas to life',
        mt3: 'Our Vision',
        tt1: 'OUR WORK',
        cont: 'Contact Us ',
        email: 'Email Address',
        phone: 'Phone',
        whats: 'Whats App',
        fb: 'Facebook',
        ins: 'Instagram',
        tik: 'Tiktok',
        you: 'Youtube',
        add: 'Address',
        add2: 'Beheira - Damanhour - Sky Mall Tower, first floor',
        footer1: 'All Right for Petrova Design',
        footer: 'Copyright @ Ismail Shreef 2025',
    },
    ar: {
        home: 'الصفحة الرئيسة',
        projcet: 'مشروعاتنا',
        contact: 'تواصل معنا',
        mt1: 'Petrova Design',
        h3t: 'من نحن',
        p1: ' نحن لا نقدم مجرد خدمات تشطيب وديكور، بل نحول المساحات إلى تجارب فريدة تنبض بالحياة. بفضل خبرتنا الواسعة وشغفنا بالتفاصيل، نبتكر تصاميم تجمع بين الفخامة، العملية والابتكار، لتناسب جميع الأذواق وتلبي أعلى المعايير سواء كنت تبحث عن لمسات أنيقة لمنزلك، تصميم راقٍ لمكتبك، أو هوية متكاملة لمشروعك التجاري، فإن فريقنا من المهندسين والمصممين المتخصصين سيعمل معك خطوة بخطوة لتحقيق رؤيتك بأدق التفاصيل. نستخدم أحدث التقنيات وأجود المواد لنضمن لك الجودة والمتانة مع لمسة إبداعية استثنائية نؤمن بأن كل مساحة تستحق أن تكون تحفة فنية تعكس شخصية أصحابها، ولهذا نسعى دائمًا لتقديم حلول تصميمية مبتكرة تلبي احتياجات عملائنا وتتفوق على توقعاتهم. تواصل معنا اليوم ودعنا نحول أفكارك إلى واقع ينبض بالجمال ',
        mt2: 'نصنع الفرق',
        h4t: 'وصف',
        p2: 'Petrova Design هي شركة متخصصة في أعمال التشطيبات والديكورات، تقدم حلولًا إبداعية تحول المساحات إلى بيئات أنيقة وعملية. نتميز بالجودة العالية، الاهتمام بالتفاصيل، واستخدام أحدث التقنيات والمواد لضمان تصميمات فريدة تلبي تطلعات عملائنا. سواء كنت ترغب في تصميم منزلي فاخر، مكتب عصري، أو مشروع تجاري متميز، فإن فريقنا من المهندسين والمصممين المحترفين يعمل على تحقيق رؤيتك بأعلى المعايير. نحن نؤمن بأن كل مساحة تستحق أن تكون تحفة فنية تعكس شخصية أصحابها. تواصل معنا اليوم لنجعل أفكارك تنبض بالحياة',
        mt3: 'رؤيتنا',
        tt1: 'تصاميمنا',
        cont: 'اتصل بنا ',
        email: 'البريد الالكترونى',
        phone: 'رقم الهاتف',
        whats: 'واتس اب',
        fb: 'فيس بوك',
        ins: 'انستجرام',
        tik: 'تيك توك',
        you: 'يوتيوب',
        add: 'عنوانا',
        add2: 'البحيرة - دمنهور - برج سكاى مول الدور الاول علوى',
        footer1: 'جميع الحقوق محفوظه لشركة Petrova Design',
        footer: 'جميع الحقوق محفوظه @ إسماعيل شريف 2025'
    }
};
const LangSelector = document.querySelector('select');

LangSelector.addEventListener('change', (Event) => {
    setLang(Event.target.value);
    localStorage.setItem("lang", Event.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem("lang");
    setLang(language);
});
const setLang = (language) => {
    const elements = document.querySelectorAll('[data-itn]');
    elements.forEach((element) => {
        const Translationskey = element.getAttribute('data-itn');
        element.textContent = Translations[language][Translationskey];
    });
    document.dir = language === 'ar' ? "rtl" : 'ltr'
};

// =================== الصور المنبثقه==================

const images = [...document.querySelectorAll('.imager')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    });
});
const updateImage = (i) => {
    let path = `img/img${i + 1}.JPG`;
    largeImage.src = path;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;
};

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
});

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    }
})
rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    }
})





// =============== الاسكرول============


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});


ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec-01, .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top', });
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });


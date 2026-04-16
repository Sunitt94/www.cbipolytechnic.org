//-------------our program - smart slider--------
document.addEventListener('DOMContentLoaded', function () {
    new Swiper(".programSwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        speed: 3000,
        grabCursor: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                speed: 800,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                freeMode: false,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
                speed: 800,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                freeMode: false,
            },
        },
        navigation: {
            nextEl: ".programSwiper .swiper-button-next",
            prevEl: ".programSwiper .swiper-button-prev",
        },
    });
});
//------------------end--------------
//------------------Carousel fix start-----------------

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('heroCarousel');
    var bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,   // 3 seconds
        ride: 'carousel', // auto-start
        wrap: true        // loop karta rahe
    });
});

//-----------------Carousel fix end------------------------



//------------Latest CBIPOLYTECHNIC Updates start--------------------

//-------------------------------------- PDF UPLOAD SECTION SPOTLIGHT HERE----------------------------
const newsData = {
    spotlight: [
        { day: "10", month: "Apr", title: "Admission Open 2026: Best Polytechnic Diploma in Ranchi", status: "Active", url: "pdfs/admission_2026.pdf" },
        { day: "05", month: "Apr", title: "Campus Placement Drive: Top MNCs visiting CBI Polytechnic", status: "Ongoing", url: "pdfs/placement_drive.pdf" },
        { day: "01", month: "Apr", title: "Faculty Recruitment 2026: Apply for Assistant Professor Roles", status: "Open", url: "pdfs/recruitment_rules.pdf" }
    ],
    lecture: [
        { day: "12", month: "Apr", title: "Annual Tech-Fest 2026: State Level Technical Competition", status: "Upcoming", url: "pdfs/techfest_schedule.pdf" },
        { day: "08", month: "Apr", title: "National Seminar on Renewable Energy Trends", status: "Register Now", url: "https://forms.gle/registration" },
        { day: "05", month: "Apr", title: "Workshop on Industrial Automation & Robotics", status: "Closed", url: "#" }
    ],
    media: [
        { day: "28", month: "Mar", title: "CBI Polytechnic Awarded Best Infrastructure in Jharkhand", status: "News", url: "pdfs/award_news.pdf" },
        { day: "20", month: "Mar", title: "85% Placement Record Achieved for 2025-26 Batch", status: "Achievement", url: "pdfs/placement_stats.pdf" },
        { day: "15", month: "Mar", title: "JUT Exam Toppers: Our Students Rank in Top 10", status: "Academic", url: "pdfs/toppers_list.pdf" }
    ]
};

//-------------------------------------- PDF UPLOAD SECTION NOTIFICATION BOARD ----------------------------

const notifications = [
    { text: "Diploma 1st Semester Examination 2025", url: "assets/pdf/Examination program 11.04.2026/pdf&rendition=1.pdf" },
    { text: "Scholarship Form Submission Last Date: 15th April", url: "pdfs/scholarship_form.pdf" },
    { text: "Registration Open for Diploma Admission 2026", url: "admission-page.html" },
    { text: "Walk-in Interview for Lab Assistants (Civil & Mechanical)", url: "pdfs/lab_interview.pdf" },
    { text: "Holiday Notice: Ram Navami Celebration", url: "pdfs/holiday_notice.pdf" }
];

function updateNews(category, btn) {
    if (btn) {
        document.querySelectorAll('.btn-custom').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const container = document.getElementById('news-list');
    container.innerHTML = '';

    newsData[category].forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `news-item d-flex gap-4 p-3 mb-3 rounded-3 border-bottom animate__animated animate__fadeInUp`;
        div.style.animationDelay = `${index * 0.15}s`;

        div.innerHTML = `
                <div class="date-box shadow-sm">
                    <div class="fs-4 fw-bold">${item.day}</div>
                    <div class="small">${item.month}</div>
                </div>
                <div>
                    <a href="${item.url}" target="_blank" class="text-decoration-none fw-bold fs-5 d-block" style="color: #2c3e50;">${item.title}</a>
                    <small class="text-muted">Status: ${item.status} | Tupudana, Ranchi</small>
                </div>
            `;
        container.appendChild(div);
    });
}
function loadNotifications() {
    const notifyContainer = document.getElementById('notification-list');
    notifyContainer.innerHTML = '';

    notifications.forEach((note, index) => {
        const p = document.createElement('p');
        p.className = "mb-3 pb-2 border-bottom small d-flex align-items-start gap-2 animate__animated animate__fadeInRight";
        p.style.animationDelay = `${index * 0.1}s`;

        // Yahan Red color aur NEW badge dono add kiye hain
        p.innerHTML = `
            <span style="color: #dc3545;">●</span> 
            <a href="${note.url}" target="_blank" class="text-decoration-none fw-bold" style="color: #dc3545;">
                ${note.text} 
                <span class="badge bg-danger ms-1 animate__animated animate__flash animate__infinite" style="font-size: 0.6rem;">NEW</span>
            </a>`;

        notifyContainer.appendChild(p);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateNews('spotlight');
    loadNotifications();
});



//------------------ Latest CBIPOLYTECHNIC Updates end-------------------





// -----------------chairperson-message-section start----------------------

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text-salutation");
    const originalText = textElement.innerHTML; // "Dear Parents And Prospective Students,"
    textElement.innerHTML = ""; // Clear text for typing
    textElement.style.visibility = "visible"; // Ensure it's not hidden

    let index = 0;
    const speed = 70; // Typing speed (milliseconds per char)

    // Add blink cursor
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    textElement.appendChild(cursor);

    function typeWriter() {
        if (index < originalText.length) {
            // Type the actual char
            textElement.insertBefore(document.createTextNode(originalText.charAt(index)), cursor);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // Option to keep cursor or remove
            // cursor.remove();
        }
    }

    typeWriter(); // Start on load
});

// ---------  chairperson-message-section end-------------------



// ----  chairperson-message- AOS section START-----
// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Custom JS for hover glow
function startGlow(element) {
    element.style.boxShadow = "0 15px 40px rgba(0, 155, 80, 0.4)";
}
function stopGlow(element) {
    element.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
}


// -----  chairperson-message AOS section end----------






// ------------ career success section script start----------------

document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');

    // Mouse le jane par sliding ruk jayegi
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });

    // Mouse hatane par sliding firse start hogi
    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });

    console.log("Success Section Ranchi - Final Version Initialized.");
});


//  ------------ career success section script end----------------




//-----------  student life section start-------------

// AOS Initialization
AOS.init({
    duration: 1200,
    once: true,
});

// Swiper 3D Animation Config
var swiper = new Swiper(".student-life-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});


//   -----------  student life section end-------------



//--------------------success section script-----------

document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');

    // Mouse le jane par sliding ruk jayegi
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });

    // Mouse hatane par sliding firse start hogi
    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });

    console.log("Success Section Ranchi - Final Version Initialized.");
});

//-----------------success section script end------------



//------------------testimonial script start------------

const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,      // Ek baar mein ek hi slide dikhegi (1-by-1)
    spaceBetween: 20,
    loop: true,
    speed: 1000,           // Sliding speed (smoothness)
    centeredSlides: true,
    autoplay: {
        delay: 3000,       // 3 seconds pause
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Tablet par 2
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3, // Desktop par 3 dikhenge par slide 1-by-1 hi honge
            centeredSlides: false,
        }
    }
});



//----------------------testimonial end------------------




//---------------------- scroll to top script-----------------

document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    var progressPath = document.querySelector('#progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = window.scrollY;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    var offset = 50;
    var duration = 550;

    window.addEventListener('scroll', function () {
        if (window.scrollY > offset) {
            document.querySelector('#progress-wrap').classList.add('active-progress');
        } else {
            document.querySelector('#progress-wrap').classList.remove('active-progress');
        }
    });

    document.querySelector('#progress-wrap').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });
});



//----------------------end------------------



//--------------------chatbot script-----------------


const triggerContainer = document.getElementById('chatbot-trigger-container');
const chatbotWindow = document.getElementById('cbiChatbot');
const closeBtn = document.getElementById('closeChat');

// Show/Hide Chat Window Logic
document.getElementById('chatTrigger').addEventListener('click', () => {
    chatbotWindow.classList.remove('d-none');
    gsap.fromTo("#cbiChatbot",
        { y: 50, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
    triggerContainer.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', () => {
    gsap.to("#cbiChatbot", {
        y: 50, scale: 0.8, opacity: 0, duration: 0.4,
        onComplete: () => {
            chatbotWindow.classList.add('d-none');
            triggerContainer.style.visibility = 'visible';
        }
    });
});

// WhatsApp Message Redirection
function sendToWhatsApp() {
    const name = document.getElementById('studentName').value;
    const phone = document.getElementById('studentPhone').value;
    const adminNumber = "917250211951"; // Official CBI Number

    if (name.trim() === "" || phone.trim() === "") {
        alert("Kripya details bharein!");
        return;
    }

    const msg = `*New Admission Inquiry - CBI Polytechnic*%0A%0A` +
        `*Student:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Interested In:* Admission 2026-27 Session.%0A%0A` +
        `_Sent via cbipolytechnic.org chatbot_`;

    window.open(`https://wa.me/${adminNumber}?text=${msg}`, '_blank');
}

//------------------------chatbot script------------------




//----------popop section script----------------------


document.addEventListener("DOMContentLoaded", function () {
    // Popup fast open logic
    if (!sessionStorage.getItem('cbiPopupShown')) {
        var admissionModal = new bootstrap.Modal(document.getElementById('admissionPopup'));

        // Website khulne ke 1 second baad popup aayega
        setTimeout(function () {
            admissionModal.show();
            // User ko bar-bar refresh par na dikhe isliye session storage
            sessionStorage.setItem('cbiPopupShown', 'true');
        }, 1000);
    }
});

//----------popop section script end----------------------
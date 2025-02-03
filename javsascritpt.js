document.addEventListener("DOMContentLoaded", function() {



    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".cta-button", { duration: 1, scale: 0.8, opacity: 0, delay: 1 });


    gsap.utils.toArray(".highlight-number").forEach(function(element) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate: function() {
                element.textContent = Math.round(element.textContent) + "%";
            }
        });
    });


    // Animation des sections lors du défilement
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1
        });
    });

    // Animation des services
    gsap.from(".service", {
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });

    autosize(document.querySelectorAll("textarea"));


});






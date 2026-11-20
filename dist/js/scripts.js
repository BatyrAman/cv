// Batyrbek Amangaliyev — CV
// Mobile navigation toggle and current-section highlighting. No dependencies.

(function () {
    'use strict';

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        nav.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    window.matchMedia('(min-width: 760px)').addEventListener('change', function (mq) {
        if (mq.matches) setOpen(false);
    });

    // Highlight the nav link of the section currently in view.
    if (!('IntersectionObserver' in window)) return;

    var links = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
        links[link.getAttribute('href').slice(1)] = link;
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = entry.target.id;
            Object.keys(links).forEach(function (key) {
                var active = key === id;
                links[key].classList.toggle('is-active', active);
                if (active) links[key].setAttribute('aria-current', 'true');
                else links[key].removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (section) {
        observer.observe(section);
    });
})();

const timeline = gsap.timeline();

timeline.fromTo('.logo', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.summer-menu-logo', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.legals', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.left-logo', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.right-logo', { opacity: 0 }, { opacity: 1, duration: 1 }, '<');
timeline.fromTo('.left-copy', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.right-copy', { opacity: 0 }, { opacity: 1, duration: 1 }, '<');
timeline.fromTo('.left-burger', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.right-burger', { opacity: 0 }, { opacity: 1, duration: 1 }, '<');

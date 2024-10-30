const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('not-in-view');
            }
        });
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    },
);
  
const tags = document.querySelectorAll('article');
tags.forEach((tag) => {
    observer.observe(tag);
});
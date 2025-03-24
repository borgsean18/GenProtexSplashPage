document.addEventListener('DOMContentLoaded', async () => {
    try {
        const content = await requestSplashPageContent();

        if (content) {
            renderIntroSection(content.intro);
            renderAboutUsSection(content.aboutUs);
        }
    } catch (error) {
        console.error('Error loading content:', error);
    }
})

async function requestSplashPageContent() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(console.log(response));

    return response;
}

function renderIntroSection(intro) {
    const introSection = document.getElementById('intro');
    if (!intro) {
        introSection.remove();
        return;
    }

    introSection.innerHTML = `
        <h2>` + (intro.icon ? `<i class="${intro.icon}"></i>` : '') + `${intro.title}`+ (intro.highlight ? `<span>${intro.highlight}</span>` : '') + `</h2>
        <p>${intro.description}</p>
    `;
};

function renderAboutUsSection(aboutUs) {
    const aboutUsSection = document.querySelector('#about-us');
    if (!aboutUs) {
        aboutUsSection.remove();
        return;
    }

    const aboutUsTitle = aboutUsSection.querySelector('.card .card-content h3');
    if (aboutUs.title)
        aboutUsTitle.innerHTML = aboutUs.title;
    
    if (aboutUs.description) {
        aboutUsSection.querySelectorAll('.card .card-content p').forEach(p => p.remove());

        aboutUsSection.querySelector('.card .card-content').innerHTML = `
            <p>${aboutUs.description}</p>
        `;
    }
}
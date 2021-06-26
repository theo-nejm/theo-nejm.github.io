// CAROUSEL ===========================================================

const slides = document.querySelectorAll(".carousel-image");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const projectTitle = document.getElementById("project-title");
const projectContent = document.getElementById("about-project-content");
const allProjectItems = document.querySelectorAll(".project-item")
const allSideItems = document.querySelectorAll(".list-item")
const scrollToTopButton = document.getElementById("scroll-to-top-button")
let projectLink = document.querySelector('#project-link')

let height = document.querySelector(".side-menu").offsetHeight
height = Number(height)

let currentImageIndex = 0;

function forceChangeImage(currentImageIndex) {
    slides.forEach(slide => {
        slide.classList.remove("selected")
    })

    slides[currentImageIndex].classList.add("selected")

    switch (currentImageIndex) {
        case 0:
            projectTitle.innerText = "dev.finance$";
            projectContent.innerText = "dev-finance$: este foi um projeto construído durante a maratona do Discover. Ele tem como função principal receber e armazenar internamente no browser quantias de entradas e saídas de dinheiro e calcular para devolver o balanço de forma reativa."
            allProjectItems.forEach(projectItem => {
                projectItem.classList.remove("selected-li")
            })
            project1.classList.add("selected-li")
            projectLink.setAttribute('href', 'dev-finances')
            break
        case 1:
            projectTitle.innerText = 'fastapping'
            projectContent.innerText = "fastapping: este foi um projeto que eu criei do zero. Ele é um 'game' que testa quantas palavras o usuário consegue digitar por minuto e a precisão ao digitar e, conforme o usuário vai treinando, um gráfico vai sendo desenvolvido com a evolução dele. O programa foi feito com apenas HTML, CSS e Javascript puro."
            allProjectItems.forEach(projectItem => {
                projectItem.classList.remove("selected-li")
            })
            project2.classList.add("selected-li")
            projectLink.setAttribute('href', 'fastapping')
            break
        case 2:
            projectTitle.innerText = "rocket.q"
            projectContent.innerText = "rocket.q: este foi um projeto desenvolvido durante a NLW - together, da Rocketseat. Ele trata de ciar ou entrar em salas já existentes para fazer perguntas anônimas, que podem ser moderadas pelo criador da sala ou qualquer um que tenha a senha dela. O programa foi feito com EJS, Javascript, Node com express e usando o SQLite como banco de dados."
            project2.classList.remove("selected-li")
            project3.classList.add("selected-li")
            projectLink.setAttribute('href', 'https://github.com/Theo-Nejm/nlw-rocketq')
            break
    }
}

nextButton.addEventListener("click", () => {
    if (currentImageIndex === slides.length - 1) {
        currentImageIndex = 0
    } else {
        currentImageIndex++
    }

    slides.forEach(slide => {
        slide.classList.remove("selected")
    })

    slides[currentImageIndex].classList.add("selected")

    switch (currentImageIndex) {
        case 0:
            projectTitle.innerText = "dev.finance$";
            projectContent.innerText = "dev-finance$: este foi um projeto construído durante a maratona do Discover. Ele tem como função principal receber e armazenar internamente no browser quantias de entradas e saídas de dinheiro e calcular para devolver o balanço de forma reativa."
            project3.classList.remove("selected-li")
            project1.classList.add("selected-li")
            projectLink.setAttribute('href', 'dev-finances')
            break
        case 1:
            projectTitle.innerText = "fastapping"
            projectContent.innerText = "fastapping: este foi um projeto que eu criei do zero. Ele é um 'game' que testa quantas palavras o usuário consegue digitar por minuto e a precisão ao digitar e, conforme o usuário vai treinando, um gráfico vai sendo desenvolvido com a evolução dele. O programa foi feito com apenas HTML, CSS e Javascript puro."
            project1.classList.remove("selected-li")
            project2.classList.add("selected-li")
            projectLink.setAttribute('href', 'fastapping')
            break
        case 2:
            projectTitle.innerText = "rocket.q"
            projectContent.innerText = "rocket.q: este foi um projeto desenvolvido durante a NLW - together, da Rocketseat. Ele trata de ciar ou entrar em salas já existentes para fazer perguntas anônimas, que podem ser moderadas pelo criador da sala ou qualquer um que tenha a senha dela. O programa foi feito com EJS, Javascript, Node com express e usando o SQLite como banco de dados."
            project2.classList.remove("selected-li")
            project3.classList.add("selected-li")
            projectLink.setAttribute('href', 'https://github.com/Theo-Nejm/nlw-rocketq')
            break
    }
})

prevButton.addEventListener("click", () => {
    if (currentImageIndex === 0) {
        currentImageIndex = slides.length - 1
    } else {
        --currentImageIndex
    }

    slides.forEach(slide => {
        slide.classList.remove("selected")
    })

    slides[currentImageIndex].classList.add("selected")


    switch (currentImageIndex) {
        case 0:
            projectTitle.innerText = "dev.finance$";
            projectContent.innerText = "dev-finance$: este foi um projeto construído durante a maratona do Discover. Ele tem como função principal receber e armazenar internamente no browser quantias de entradas e saídas de dinheiro e calcular para devolver o balanço de forma reativa. O programa foi feito apenas com HTML, CSS e Javascript puro."
            project2.classList.remove("selected-li")
            project1.classList.add("selected-li")
            projectLink.setAttribute('href', 'dev-finances')
            break
        case 1:
            projectTitle.innerText = "fastapping"
            projectContent.innerText = "fastapping: este foi um projeto que eu criei do zero. Ele é um 'game' que testa quantas palavras o usuário consegue digitar por minuto e a precisão ao digitar e, conforme o usuário vai treinando, um gráfico vai sendo desenvolvido com a evolução dele. O programa foi feito com apenas HTML, CSS e Javascript puro. (foi feito para computador, portanto, não pode ser executado em celulares)."
            project3.classList.remove("selected-li")
            project2.classList.add("selected-li")
            projectLink.setAttribute('href', 'fastapping')
            break 
        case 2:
            projectTitle.innerText = "rocket.q"
            projectContent.innerText = "rocket.q: este foi um projeto desenvolvido durante a NLW - together, da Rocketseat. Ele trata de ciar ou entrar em salas já existentes para fazer perguntas anônimas, que podem ser moderadas pelo criador da sala ou qualquer um que tenha a senha dela. O programa foi feito com EJS, Javascript, Node com express e usando o SQLite como banco de dados."
            project2.classList.remove("selected-li")
            project3.classList.add("selected-li")
            projectLink.setAttribute('href', 'fastapping')
            break
    }
})

function markSection(scrollDistance) {
    allSideItems.forEach(sideItem => {
        sideItem.classList.remove("selected-section")
    })

    if(scrollDistance == 0) {
        document.getElementById("ref-section0").classList.add("selected-section")
    } else if (scrollDistance >= height && scrollDistance < height * 2) {
        document.getElementById("ref-section1").classList.add("selected-section")
    } else if (scrollDistance >= height * 2 && scrollDistance < height * 3) {
        document.getElementById("ref-section2").classList.add("selected-section")
    } else if (scrollDistance >= height * 3) {
        document.getElementById("ref-section3").classList.add("selected-section")
    }
}

function changeSideSelectedSection () {
    setInterval(() => {
        markSection(window.scrollY)
    }, 500);
}

function isOnTop() {
    if(window.scrollY === 0) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener("scroll", () => {
    if(isOnTop() === true) {
        scrollToTopButton.classList.remove("shownScrollTopButton")
    } else {
        scrollToTopButton.classList.add("shownScrollTopButton")
    }
})

function scrollToTop() {
    window.scrollTo(0, 0)
}
window.addEventListener("load", changeSideSelectedSection)

// Change links list
function changeLink() {

}
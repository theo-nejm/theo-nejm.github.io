// CAROUSEL ===========================================================

const slides = document.querySelectorAll(".carousel-image");
const nextButton = document.querySelector("#nextButton");
const prevButton = document.querySelector("#prevButton");
const projectTitle = document.getElementById("project-title");
const projectContent = document.getElementById("about-project-content");
const allProjectItems = document.querySelectorAll(".project-item")
const allSideItems = document.querySelectorAll(".list-item")
const scrollToTopButton = document.getElementById("scroll-to-top-button")

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
            break
        case 1:
            projectTitle.innerText = "Mini Yoda"
            projectContent.innerText = "Mini Yoda: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            allProjectItems.forEach(projectItem => {
                projectItem.classList.remove("selected-li")
            })
            project2.classList.add("selected-li")
            break
        case 2:
            projectTitle.innerText = "Lamborghini"
            projectContent.innerText = "Lamborghini: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            allProjectItems.forEach(projectItem => {
                projectItem.classList.remove("selected-li")
            })
            project3.classList.add("selected-li")
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
            break
        case 1:
            projectTitle.innerText = "Mini Yoda"
            projectContent.innerText = "Mini Yoda: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            project1.classList.remove("selected-li")
            project2.classList.add("selected-li")
            break
        case 2:
            projectTitle.innerText = "Lamborghini"
            projectContent.innerText = "Lamborghini: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            project2.classList.remove("selected-li")
            project3.classList.add("selected-li")
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
            projectContent.innerText = "dev-finance$: este foi um projeto construído durante a maratona do Discover. Ele tem como função principal receber e armazenar internamente no browser quantias de entradas e saídas de dinheiro e calcular para devolver o balanço de forma reativa."
            project2.classList.remove("selected-li")
            project1.classList.add("selected-li")
            break
        case 1:
            projectTitle.innerText = "Mini Yoda"
            projectContent.innerText = "Mini Yoda: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            project3.classList.remove("selected-li")
            project2.classList.add("selected-li")
            break
        case 2:
            projectTitle.innerText = "Lamborghini"
            projectContent.innerText = "Lamborghini: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga saepe illum sit dolorem suscipit hic vero tempora officiis. Nobis quisquam reiciendis corrupti soluta veritatis numquam, repellat quia velit perferendis at?"
            project1.classList.remove("selected-li")
            project3.classList.add("selected-li")
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
import { devFinances, rocketQ, fastapping, todoList, pixelizeMe } from './projects.js';

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
      projectTitle.innerText = devFinances.name;
      projectContent.innerText = devFinances.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project1.classList.add("selected-li")
      projectLink.setAttribute('href', devFinances.link)
      break
    case 1:
      projectTitle.innerText = fastapping.name
      projectContent.innerText = fastapping.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project2.classList.add("selected-li")
      projectLink.setAttribute('href', fastapping.link)
      break
    case 2:
      projectTitle.innerText = rocketQ.name
      projectContent.innerText = rocketQ.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project3.classList.add("selected-li")
      projectLink.setAttribute('href', rocketQ.link)
      break
    case 3:
      projectTitle.innerText = todoList.name
      projectContent.innerText = todoList.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project4.classList.add("selected-li")
      projectLink.setAttribute('href', todoList.link)
      break
    case 4:
      projectTitle.innerText = pixelizeMe.name
      projectContent.innerText = pixelizeMe.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project5.classList.add("selected-li")
      projectLink.setAttribute('href', pixelizeMe.link)
      break

  }
}

allProjectItems.forEach(projectItem => {
  addEventListener('click', e => {
    const el = e.target;
    const id = el.id

    switch(id) {
      case 'project1':
        forceChangeImage(0)
        break

      case 'project2':
        forceChangeImage(1)
        break

      case 'project3':
        forceChangeImage(2)
        break

      case 'project4':
        forceChangeImage(3)
        break
      case 'project5':
        forceChangeImage(4)
        break
    }
  })
})


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
      projectTitle.innerText = devFinances.name
      projectContent.innerText = devFinances.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project1.classList.add("selected-li")
      projectLink.setAttribute('href', devFinances.link)
      break
    case 1:
      projectTitle.innerText = fastapping.name;
      projectContent.innerText = fastapping.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project2.classList.add("selected-li")
      projectLink.setAttribute('href', fastapping.link)
      break
    case 2:
      projectTitle.innerText = rocketQ.name;
      projectContent.innerText = rocketQ.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project3.classList.add("selected-li")
      projectLink.setAttribute('href', rocketQ.link);
      break
    case 3:
      projectTitle.innerText = todoList.name;
      projectContent.innerText = todoList.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project4.classList.add("selected-li")
      projectLink.setAttribute('href', todoList.link);
      break
    case 4:
      projectTitle.innerText = pixelizeMe.name;
      projectContent.innerText = pixelizeMe.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project5.classList.add("selected-li")
      projectLink.setAttribute('href', pixelizeMe.link);
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
      projectTitle.innerText = devFinances.name
      projectContent.innerText = devFinances.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project1.classList.add("selected-li")
      projectLink.setAttribute('href', devFinances.link)
      break
    case 1:
      projectTitle.innerText = fastapping.name
      projectContent.innerText = fastapping.description
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project2.classList.add("selected-li")
      projectLink.setAttribute('href', fastapping.link)
      break
    case 2:
      projectTitle.innerText = rocketQ.name;
      projectContent.innerText = rocketQ.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project3.classList.add("selected-li")
      projectLink.setAttribute('href', rocketQ.link);
      break
    case 3:
      projectTitle.innerText = todoList.name;
      projectContent.innerText = todoList.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project4.classList.add("selected-li")
      projectLink.setAttribute('href', todoList.link);
      break
    case 4:
      projectTitle.innerText = pixelizeMe.name;
      projectContent.innerText = pixelizeMe.description;
      allProjectItems.forEach(projectItem => {
        projectItem.classList.remove("selected-li")
      })
      project5.classList.add("selected-li")
      projectLink.setAttribute('href', pixelizeMe.link);
      break

  }
})

function markSection(scrollDistance) {
  allSideItems.forEach(sideItem => {
    sideItem.classList.remove("selected-section")
  })

  if (scrollDistance == 0) {
    document.getElementById("ref-section0").classList.add("selected-section")
  } else if (scrollDistance >= height && scrollDistance < height * 2) {
    document.getElementById("ref-section1").classList.add("selected-section")
  } else if (scrollDistance >= height * 2 && scrollDistance < height * 3) {
    document.getElementById("ref-section2").classList.add("selected-section")
  } else if (scrollDistance >= height * 3) {
    document.getElementById("ref-section3").classList.add("selected-section")
  }
}

function changeSideSelectedSection() {
  setInterval(() => {
    markSection(window.scrollY)
  }, 500);
}

function isOnTop() {
  if (window.scrollY === 0) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("scroll", () => {
  if (isOnTop() === true) {
    scrollToTopButton.classList.remove("shownScrollTopButton")
  } else {
    scrollToTopButton.classList.add("shownScrollTopButton")
  }
})

function scrollToTop() {
  window.scrollTo(0, 0)
}

window.addEventListener("load", changeSideSelectedSection)

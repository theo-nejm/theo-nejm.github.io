const modalForm = document.querySelector('#add-task')
const inputTitle = document.querySelector('#input-task')
const openModalBtn = document.querySelector('.add-task')
const closeModalBtn = document.querySelector('#cancel-button')

let tasksArr = getTasks() || []

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

window.addEventListener('load', () => {
  renderTasks(tasksArr)
})

modalForm.addEventListener('submit', event => {
  event.preventDefault()

  const newObjectTask = createObjectTask(inputTitle.value)
  const newArr = setNewTask(tasksArr, newObjectTask)
  storeTasks(newArr)
  reRenderTasks(newArr)

  inputTitle.value = ''

  closeModal()
})


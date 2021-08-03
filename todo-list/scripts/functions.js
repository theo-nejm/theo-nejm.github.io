function createObjectTask(title) {
  return {
    title,
    status: 'Pendente'
  }
}

function makeTask(taskObj) {
  const tr = document.createElement('tr')
  tr.classList.add('task')
  tr.innerHTML = `
    <td>${taskObj.title}</td>
    <td><span class="${taskObj.status === 'Pendente' ? 'pendent' : 'done'}">${taskObj.status}</span></td>
    <td>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(0, 0, 0)" class="check-btn" onclick="toggleCheckSelf(${taskObj.id})">
        <path class="check-${taskObj.id}" d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"></path>
      </svg>
    </td>
    <td>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff1e1e" class="delete-btn" onclick="removeSelf(${taskObj.id})" ">
        <path class="delete-${taskObj.id}" d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"></path>
      </svg>
    </td>
  `

  return tr;
}

function insertTask(task) {
  const tasksListTable = document.querySelector('.tasks-list tbody')
  tasksListTable.appendChild(task)
}

/* Funções da modal =-=-=-=-=-=-=-=-=-=-=- */

function openModal() {
  document.querySelector('#input-task').focus()
  document.querySelector('.modal-wrapper')
    .classList.remove('hidden')
}

function closeModal() {
  document.querySelector('.modal-wrapper')
    .classList.add('hidden')
}

function storeTasks(tasks) {
  const stringifiedTasks = JSON.stringify(tasks)
  localStorage.setItem('tasks', stringifiedTasks)
}

function getTasks() {
  const storedTasks = localStorage.getItem('tasks')
  const parsedTasks = JSON.parse(storedTasks)
  return parsedTasks;
}

function insertTaskId(tasks, task) {
  task.id = tasks.length + 1
  return task;
}

// push -> adiciona na última posição | pop -> retira da última posição
function setNewTask(tasks, task) {
  const newTask = insertTaskId(tasks, task)
  tasks.push(newTask)
  console.log(tasks)
  return tasks;
}

function renderTasks(tasks) {
  tasks.forEach(task => insertTask(makeTask(task)))
}

function clearTasks() {
  document.querySelector('.tasks-list tbody').innerHTML = `
  <tr>
    <td>Nome da tarefa</td>
    <td>Status</td>
    <td>Concluída</td>
    <td>Remover</td>
  </tr>`
}

function reRenderTasks(tasksArr) {
  clearTasks()
  renderTasks(tasksArr)
}

function removeSelf(taskId) {
  tasksArr.forEach(task => {
    if(task.id === taskId) {
      tasksArr.splice(tasksArr.indexOf(task), 1)
      reRenderTasks(tasksArr);
      storeTasks(tasksArr);
      return;
    }
  })
}

function toggleCheckSelf(taskId) {
  tasksArr.forEach(task => {
    if(task.id === taskId) {
      task.status = task.status === 'Pendente' ? 'Concluída' : 'Pendente';
      reRenderTasks(tasksArr);
      storeTasks(tasksArr);
      return;
    }
  })

}

/*
  0: {title: "Adicionar tasks", status: "Pendente", id: 1}
  1: {title: "Adicionar novas tarefas", status: "Pendente", id: 2}
  2: {title: "Qualquer outra", status: "Pendente", id: 3}
  3: {title: "Mais uma", status: "Pendente", id: 4}
  4: {title: "Outra", status: "Pendente", id: 5}
  5: {title: "Add another", status: "Pendente", id: 6}
  6: {title: "Add task", status: "Pendente", id: 7}
  7: {title: "a", status: "Pendente", id: 8}
  8: {title: "Add another one", status: "Pendente", id: 9}
  9: {title: "One more", status: "Pendente", id: 10}
*/
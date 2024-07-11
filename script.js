document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://dcsolutiontestworker.nfr-emea-dcsolution.workers.dev/api/todos')
    const tasks = await response.json()
    const taskList = document.getElementById('task-list')
    tasks.forEach(task => {
      const listItem = document.createElement('li')
      listItem.textContent = task.title
      taskList.appendChild(listItem)
    })
  
    document.getElementById('task-form').addEventListener('submit', async (event) => {
      event.preventDefault()
      const input = document.getElementById('task-input')
      const title = input.value
      await fetch('https://dcsolutiontestworker.nfr-emea-dcsolution.workers.dev/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      })
      const listItem = document.createElement('li')
      listItem.textContent = title
      taskList.appendChild(listItem)
      input.value = ''
    })
  })
  
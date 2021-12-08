import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask";



function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        id: 3,
        text: 'Hello Buddies',
        day: 'Sep 19th at 4:30pm',
        reminder: true,
      }
    ]
);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) => 
      task.id === id ? 
      {...task, reminder: !task.reminder } :
      task)
    )
  }

  // delete task
  const deleteTask = (id) => {
    // console.log('Delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header 
      title = 'Tasker' 
      onAdd = { () => setShowAddTask(!showAddTask)}
      isShown = {showAddTask}
      />
      {showAddTask && 
      <AddTask 
      onAdd = {addTask} 
      onHide = {() => setShowAddTask(!showAddTask)}
      />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
      />
      : ('No Tasks to show')}
    </div>
  );
}

export default App;

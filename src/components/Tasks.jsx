import Task from "./Task";


const Tasks = ({tasks, onDelete, onToggle}) => {

    
    
    return ( 
        <>
        {tasks.map((task) => (
        <Task 
        key={task.id} 
        task = {task}
        onDelete = {onDelete}
        onToggle = {onToggle}
        />
        ))}
        {/* <h3 key = {task.id}>{task.text}</h3> */}
        </>
     );
}


//Below function calculates fibonacci
// const fs = () => {
//     let s = '';
//     let a = '1112031584';
//     for (let i =1; i < a.length; i++){
//         if ( a[i] % 2 === a[i -1] % 2) {
//             s += Math.max(a[i], a[i-1]);
//         }
//     }
//     return s;
// }
 
export default Tasks;
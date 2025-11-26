
async function getTodos() {
    const res = await fetch('http://localhost:3000/api/todos', { method: 'GET', cache: 'no-store'})
    return res.json();
}

const TodoPage = async () => {
    const data = await getTodos();
    
    return (
        <div>
            <h1>Todo Page</h1>
            <ul>
                {data.map((todo: any) => {
                    return <li key={todo.id}>{todo.title}</li>
                })}
            </ul>  
        </div>
    )
}

export default TodoPage
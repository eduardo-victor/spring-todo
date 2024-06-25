
const Todo = () => {

    interface TodoList {
    nome : String,
    descricao: String,
    prioridade: Number,
    realizado: Boolean
}

  return (
    <div className="w-[90%] h-28 rounded-md bg-transparent border-2 border-white">
        <h1>Título</h1>
        <h2>Descrição</h2>
        <h2>Prioridade</h2>
        <div className="bg-white w-16 text-center rounded-md">Done</div>
    </div>
  )
}

export default Todo
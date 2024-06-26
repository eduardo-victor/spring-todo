import axios from "axios"
import Todo from "../components/Todo"
import { TodoList } from "../components/Todo"
import { useEffect, useState } from "react"
import ModalTodo from "../components/ModalTodo"

const Home = () => {

  const [data, setData] = useState<TodoList[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const deleteTodo = (id: number): void => {
    axios.delete(`http://localhost:8080/todos/${id}`)
      .then(() => {
        setData(data.filter(todo => todo.id !== id));
      });
  }

  async function getTodos() {
    await axios.get('http://localhost:8080/todos')
      .then((data) => {
        setData(data.data)
      })
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (taskName: string) => {
    // Lógica para salvar a nova tarefa
    console.log("New task:", taskName);
    // Aqui você poderia adicionar a lógica para salvar a tarefa usando axios
    setIsModalOpen(false);
  };

  useEffect(() => {
    getTodos()
  }, [data]);

  return (
    <div className='h-screen w-screen bg-[#8758ff] flex flex-col items-center justify-center'>
      <div className='flex flex-col w-[85%] h-[70%] gap-4 items-center bg-[#231942] rounded-md'>
        <h1 className='text-white text-2xl font-semibold font-poppins mt-4'>Simple Todo List</h1>
        <div className="w-full flex justify-center">
          <input type="text" className='text-center text-sm text-white border-[1px] border-[#8758ff] bg-transparent w-[70%] outline-none' placeholder='Search for todos...' />
          <button className='bg-[#8758ff] text-white w-16 h-10 text-sm font-semibold hover:text-[#ffc300] hover:border-[#ffc300]' onClick={handleOpenModal}>Add task</button>
        </div>

        {data.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            <Todo nome={item.nome} id={item.id} deleteTodo={() => deleteTodo(item.id)} />
          </div>
        ))}

{isModalOpen && (
          <ModalTodo onClose={handleCloseModal} onSave={handleSaveTask} />
        )}

      </div>
    </div>
  )
}

export default Home
import axios from "axios"
import Todo from "../components/Todo"
import { TodoList } from "../components/Todo"
import { useEffect, useState } from "react"

const Home = () => {

  const [data, setData] = useState<TodoList | null> (null);


  async function getTodos(){
    await axios.get('http://localhost:8080/todos')
      .then((data:any) => {
        setData(data)
      })
  }

  useEffect(() => {
    getTodos()
  }, [data]);

  return (
    <div className='h-screen w-screen bg-[#8758ff] flex flex-col items-center justify-center'>
        <div className='flex flex-col w-[85%] h-[70%] gap-4 items-center bg-[#231942] rounded-md'>
        <h1 className='text-white text-2xl font-semibold font-poppins mt-4'>Simple Todo List</h1>
          <div className="w-full flex justify-center">
            <input type="text" className='text-center text-sm text-white border-[1px] border-[#8758ff] bg-transparent w-[70%] outline-none' placeholder='Search for todos...'/>
            <button className='bg-[#8758ff] text-white w-16 h-10 text-sm font-semibold hover:text-[#ffc300] hover:border-[#ffc300]'>Add task</button>
          </div>
          <div className="flex justify-center w-full">
            <Todo nome={data?.nome} />
          </div>
        </div>
    </div>
  )
}

export default Home
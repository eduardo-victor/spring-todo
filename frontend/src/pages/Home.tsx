
const Home = () => {
  return (
    <div className='h-screen w-screen bg-[#001d3d] flex flex-col items-center'>
        <div className='h-32 w-full flex flex-col items-center mt-20'>
            <h1 className='text-white text-2xl'>Simple Todo List</h1>
            <h2 className='text-white opacity-40 text-md w-[80%] text-center'>This project is just a todo list to learn more about java springboot :D</h2>
        </div>
        <div className='flex gap-4'>
            <input type="text" className='text-center text-white text-lg bg-transparent border-2 rounde-md outline-none' placeholder='Search for todos...'/>
            <button className='bg-transparent border-2 border-white text-white w-16 h-10 text-lg hover:text-[#ffc300] hover:border-[#ffc300]'>New</button>
        </div>
    </div>
  )
}

export default Home
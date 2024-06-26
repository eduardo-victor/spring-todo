import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export interface TodoList {
  nome : String | null,
}

const Todo: React.FC<TodoList> = ({nome}) => {

  return (
    <div className="w-[90%] h-12 rounded-md bg-[#8758ff] gap-6 flex items-center">
        <h1 className="text-white text-md font-semibold w-[70%] truncate ml-4">{nome}</h1>
        <div className="flex gap-2">
          <FontAwesomeIcon className="text-white" icon={faPenToSquare}/>
          <FontAwesomeIcon className="text-white" icon={faTrash} />
        </div>
    </div>
  )
}

export default Todo;
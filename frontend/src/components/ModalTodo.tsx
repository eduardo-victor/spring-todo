import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  onClose: () => void;
  onSave: (taskName: string) => void;
}

const ModalTodo: React.FC<ModalProps> = ({ onClose, onSave }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(0);
  const [taskFinished, setTaskFinished] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSave = () => {
    onSave(taskName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white w-[85%] p-4 rounded-md relative">
        <FontAwesomeIcon icon={faX} onClick={onClose} className="absolute top-0 right-0 m-2 text-[#231942]"/>
        <div className="w-full h-full flex flex-col gap-4 items-center">
            <h2 className='text-black text-xl font-poppins'>Add a new task</h2>
            <input
            type="text"
            className='text-center text-sm text-white bg-[#231942] w-[90%] h-8 outline-none'
            placeholder='Título'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <input
            type="text"
            maxLength={120}
            className='text-center text-sm text-white bg-[#231942] w-[90%] h-8 outline-none'
            placeholder='Descrição'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            />
            <input 
            disabled={true}
            value={taskPriority} 
            className="text-center text-sm text-white bg-[#231942] w-[90%] h-8 outline-none"
            />
            <input
            type="range"
            min={1}
            max={5}
            className='text-center text-sm text-white bg-[#231942] w-[90%] h-8 outline-none'
            placeholder='Descrição'
            value={taskPriority}
            onChange={(e) => setTaskPriority(parseInt(e.target.value))}
            title="Priority"
            />
            <button className='bg-[#8758ff] text-white w-16 h-10 text-sm font-semibold hover:text-[#ffc300] hover:border-[#ffc300]' onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ModalTodo;
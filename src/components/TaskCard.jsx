import { useState } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

function TaskCard({ task, updateTask, deleteTask }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false)

  function toggleEditMode() {
    setEditMode(prev => !prev)
    setMouseIsOver(false)
  }

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task
    },

  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      "
      />
    )
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
        onMouseEnter={() => {
          setMouseIsOver(true)
        }}
        onMouseLeave={() => {
          setMouseIsOver(false)
        }}
      >
        <textarea className="bg-transparent my-auto h-[90%] w-full resize-none border-none overflow-y-auto overflow-x-hidden whitespace-pre-wrap"
          autoFocus
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if(e.key === "Enter") toggleEditMode()
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
          defaultValue={task.content}
          >

            
          {/* {task.content} */}

        </textarea>
      </div>
    )
  }



  return (
    <div
    data-testid={`task-${task.id}`}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true)
      }}
      onMouseLeave={() => {
        setMouseIsOver(false)
      }}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>
      <div className="flex flex-col gap-2">
        <button onClick={toggleEditMode} className="bg-slate-700 py-1 px-2 rounded-md">edit</button>
        <button onClick={()=> deleteTask(task.id)} className="bg-slate-700 py-1 px-2 rounded-md">delete</button>
        </div>
    </div>
  )
}

export default TaskCard

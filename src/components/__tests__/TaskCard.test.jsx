import React from "react"
import {screen, cleanup, render} from "@testing-library/react"
import TaskCard from "../TaskCard"


test('render todo', () => {
    const newTask = {
        id: "1",
        columnId: "todo",
        content: "vite test"
      }
    render(<TaskCard task={newTask}/>)
    const taskElement = screen.getByTestId(`task-${newTask.id}`)
    expect(taskElement).toHaveReturned();
    expect(taskElement).toHaveTextContent(newTask.content)
})
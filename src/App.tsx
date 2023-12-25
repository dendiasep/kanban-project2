import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskSummary from "./features/tasks/TaskSummary"
import TaskList from "./features/tasks/TaskList/TaskList"
import TaskProgress from "./features/tasks/TaskProgress/TaskProgress"
import SideMenuLayout from "./layouts/SideMenuLayout"

/*const router = creeateBrowserRouter([
  {
    path: '/',
    element: <SideMenuLayout />,
    children: [{
        path: '/',
        element: <TaskSummary />
      },
      {
        path: 'task-list',
        element: <TaskList />
      },
      {
        path: 'task-progress',
        element: <TaskProgress />
      },
    ],  
  },
],
)*/

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<SideMenuLayout />} >
          <Route path="/" element= {<TaskSummary />}></Route>
          <Route path="task-list" element= {<TaskList />}></Route>
          <Route path="task-progress" element= {<TaskProgress/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
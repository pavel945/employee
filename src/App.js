import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Department from "./pages/Department";
import Employee from "./pages/Employee";

const router = createBrowserRouter([
  { path: '/', element: <Home/>},
  { path: '/department/:id', element: <Department/>},
  { path: '/department/create', element: <Department/>},
  { path: '/department', element: <Departments/>},
  { path: '/employee/:id', element: <Employee/>},
  { path: '/employee/create', element: <Employee/>},
  { path: '/employee', element: <Employees/>},
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;

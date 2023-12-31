import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from "./stores/index";
import { Provider } from 'react-redux';
import router from "./router/index"

export default function App() {
  return ( 
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
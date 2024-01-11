import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import socketIO from 'socket.io-client';
import ChatHome from './components/ChatHome';
import ChatPage from './components/ChatPage';
const socket = socketIO.connect('http://localhost:4000');

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ChatHome socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
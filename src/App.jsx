
import { BrowserRouter, Routes, Route } from "react-router-dom";
import appRoutes from './routes/routes';
import RootLayout from './components/layout';

function App() {

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          {
            Object.values(appRoutes).map((e, i) => <Route path={e.path} element={e.component} key={e.name} id={e.name} />)
          }
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App

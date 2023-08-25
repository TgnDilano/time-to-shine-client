import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import appRoutes from "./routes/routes";
import RootLayout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Navigate to={appRoutes.home.path} />} />
          {Object.values(appRoutes).map((e, i) => (
            <Route
              path={e.path}
              element={e.component}
              key={e.name}
              id={e.name}
            />
          ))}
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;

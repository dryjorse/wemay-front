import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { router } from "./router/router";
import Header from "./components/header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {router.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

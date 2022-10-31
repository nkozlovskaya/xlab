import "./App.sass";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { router } from "./router/router";

const App: FC = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default App;

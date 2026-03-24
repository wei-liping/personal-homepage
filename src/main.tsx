import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import CaseWuliAi from "./pages/CaseWuliAi";
import CaseChatDebug from "./pages/CaseChatDebug";
import CaseProdMind from "./pages/CaseProdMind";
import About from "./pages/About";
import Resume from "./pages/Resume";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="case/wuli-ai" element={<CaseWuliAi />} />
          <Route path="case/echomate" element={<CaseChatDebug />} />
          <Route path="case/prodmind" element={<CaseProdMind />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import CaseKnowNet from "./pages/CaseKnowNet";
import CaseJobHunter from "./pages/CaseJobHunter";
import CaseInsightFlow from "./pages/CaseInsightFlow";
import CaseEchoMate from "./pages/CaseEchoMate";
import CaseProdMind from "./pages/CaseProdMind";
import About from "./pages/About";
import Resume from "./pages/Resume";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="case/knownet" element={<CaseKnowNet />} />
          <Route path="case/jobhunter" element={<CaseJobHunter />} />
          <Route path="case/insightflow" element={<CaseInsightFlow />} />
          <Route path="case/echomate" element={<CaseEchoMate />} />
          <Route path="case/prodmind" element={<CaseProdMind />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);

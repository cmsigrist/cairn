// React
import { Suspense } from "react";
// MUI
import { Container, Stack } from "@mui/material";
// Components
import ResponsiveAppBar from "./layout/ResponsiveAppBar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
// Hooks
// Utils
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CHARACTERS, ROUTE_GENERATE, ROUTE_HOME } from "./utils/routes";
import PageNotFound from "./pages/PageNotFound";
import Characters from "./pages/Characters";
import CharacterBackground from "./pages/CharacterBackground";
import GenerateCharacter from "./pages/GenerateCharacter";

// Types
// Icons

function App() {
  return (
    <Suspense fallback="...loading app">
      <Router basename={process.env.PUBLIC_URL}>
        <Stack minHeight={"100vh"} direction={"column"}>
          <ResponsiveAppBar />
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              height: "100%",
            }}
          >
            <Routes>
              <Route path={ROUTE_HOME} element={<Home />} />
              <Route path={ROUTE_GENERATE} element={<GenerateCharacter />} />
              <Route path={ROUTE_CHARACTERS} element={<Characters />} />
              <Route
                path={"/characters/:background"}
                element={<CharacterBackground />}
              />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
          <Footer />
        </Stack>
      </Router>
    </Suspense>
  );
}

export default App;

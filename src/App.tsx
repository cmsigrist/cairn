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
import {
  ROUTE_EXPLORE,
  ROUTE_EXPLORE_BONDS,
  ROUTE_EXPLORE_OMENS,
  ROUTE_EXPLORE_TRAITS,
  ROUTE_GENERATE,
  ROUTE_HOME,
} from "./utils/routes";
import PageNotFound from "./pages/PageNotFound";
import RollCharacter from "./pages/RollCharacter";
import ExploreBackground from "./pages/explore/ExploreBackground";
import Explore from "./pages/Explore";
import ExploreBonds from "./pages/explore/ExploreBonds";
import ExploreOmens from "./pages/explore/ExploreOmens";
import ExploreTraits from "./pages/explore/ExploreTraits";

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
              <Route path={ROUTE_GENERATE} element={<RollCharacter />} />
              <Route path={ROUTE_EXPLORE} element={<Explore />} />
              <Route
                path={`${ROUTE_EXPLORE}/background/:background`}
                element={<ExploreBackground />}
              />
              <Route path={ROUTE_EXPLORE_BONDS} element={<ExploreBonds />} />
              <Route path={ROUTE_EXPLORE_OMENS} element={<ExploreOmens />} />
              <Route path={ROUTE_EXPLORE_TRAITS} element={<ExploreTraits />} />

              <Route path="/404" element={<PageNotFound />} />
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

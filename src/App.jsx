import React from "react";

import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";

// import Landingpage2 from "./landing2/Landingpage2";
import AuthPage from "./login/AuthPage";
import LandingLayout2 from "./landing2/LandingLayout2";
import Landingpage2 from "./landing2/Landingpage2";
import About2 from "./landing2/About2";
import CourseCatalog from "./landing2/CourseCatalog";
import Pricing from "./landing2/Pricing";
import MentorsCatalog from "./landing2/MentorsCatalog";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Landing />}>
              <Route index element={<LandingLayout />} />
              <Route path="about" element={<About />} />
              <Route path="course" element={<Course />} />
              <Route path="blog" element={<BlogSection />} />
              <Route path="contact" element={<Contact />} />
            </Route> */}


            {/* landing page 2 */}

            <Route path="/" element={<LandingLayout2/>}>
              <Route index element={<Landingpage2/>}/>
              <Route path="about2" element={<About2/>}/>
              <Route path="courses2" element={<CourseCatalog/>}/>
              <Route path="mentors" element={<MentorsCatalog/>}/>
              <Route path="pricing" element={<Pricing/>}/>
            </Route>
            <Route path="/login" element={<AuthPage/>}/>
          </Routes>
      </BrowserRouter>
      {/* <Navbar2/> */}
     
    </div>
  );
}

export default App;

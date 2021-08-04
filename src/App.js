import './App.css';
import topFunction from "./helpers/topFunction";
import {lazy, Suspense, useState, useEffect} from 'react';
import scrollFunction from "./helpers/scrollFunction";
import LandingPage from "./pages/LandingPage";
import OverOns from "./pages/OverOns";
import {getData} from "./helpers/getData";
const CursusAanbod = lazy(() => import("./pages/CursusAanbod"))

function App() {
    const [content, setContent] = useState("puppy");
    const [courses, setCourses] = useState(null);
    const [overOns, setOverOns] = useState(null);
    const [loading, setLoading] = useState(false);
    window.onscroll = function() {scrollFunction(document.getElementById("scroll-back-underlay"))};

    useEffect(()=>{
        getData({setLoading, setCourses, content, setOverOns} )
    }, [content]);

    return (
        <div className="container">
            <div id="scroll-back-underlay">
            <i id="scroll-back-button" onClick={topFunction}/>
            </div>
            <div id="landing-page">
                <LandingPage/>
            </div>
            <div id="over-ons">
                <OverOns
                    overOns = {overOns}
                />
            </div>
            <div id="cursus-aanbod">
                <Suspense fallback={<h1>LOADING</h1>}>
                <CursusAanbod
                    content = {content}
                    setContent = {setContent}
                    courses = {courses}
                />
                </Suspense>
            </div>
        </div>
    );
}

export default App;

import './App.css';
import topFunction from "./helpers/topFunction";
import scrollFunction from "./helpers/scrollFunction";
import LandingPage from "./pages/LandingPage";
import OverOns from "./pages/OverOns";
import CursusAanbod from "./pages/CursusAanbod";

function App() {
    window.onscroll = function() {scrollFunction(document.getElementById("scroll-back-underlay"))};

    return (
        <div className="container">
            <div id="scroll-back-underlay">
            <i id="scroll-back-button" onClick={topFunction}/>
            </div>
            <div id="landing-page">
                <LandingPage/>
            </div>
            <div id="over-ons">
                <OverOns />
            </div>
            <div id="cursus-aanbod">
                <CursusAanbod/>
            </div>
        </div>
    );
}

export default App;

import "./App.css";
import RenderJokesMain from "./renderlistofcomponents/RenderJokesMain";
import JokesMain from "./createcomponents/JokesMain";
import Formevents from "./handleevents/Formevents";
function App() {
    return (
        <>
            {/* <JokesMain /> */}
            <Formevents />
            {/* <RenderJokesMain /> */}
        </>
    );
}

export default App;

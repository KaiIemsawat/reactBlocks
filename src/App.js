import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Subcontent from "./components/Subcontent";
import Advertisement from "./components/Advertisement";
import styles from "./components/styles.module.css";
import layout from "./components/layout.module.css";

function App() {
    return (
        <div className={`${styles.appColor} ${styles.border} ${layout.app}`}>
            <Header />
            <div className={layout.mainContainer}>
                <Navigation />
                <Main></Main>
            </div>
        </div>
    );
}

export default App;

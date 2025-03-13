import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<BrowserRouter><App /></BrowserRouter>);
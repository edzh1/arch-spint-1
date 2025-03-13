import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./components/Auth.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <Auth/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<BrowserRouter><App /></BrowserRouter>);
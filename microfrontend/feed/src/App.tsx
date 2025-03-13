import React from "react";
import ReactDOM from "react-dom/client";
import Feed from "./components/Feed.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <Feed/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<BrowserRouter><App /></BrowserRouter>);
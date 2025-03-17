import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from './components/App'

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
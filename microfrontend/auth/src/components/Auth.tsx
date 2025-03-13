import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import Register from "./Register.tsx";
import Login from "./Login.tsx";
import * as auth from "../utils/auth.ts";
import InfoTooltip from "./InfoTooltip.tsx";
import useGlobalStore from "store/store"

function Auth() {
    const history = useHistory();

    const [tooltipStatus, setTooltipStatus] = React.useState("");
    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);

    //@ts-ignore
    const {email, isLoggedIn, setIsLoggedIn, setEmail} = useGlobalStore();

    React.useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth
                .checkToken(token)
                .then((res) => {
                    setEmail(res.data.email);
                    setIsLoggedIn(true);
                    history.push("/");
                })
                .catch((err) => {
                    localStorage.removeItem("jwt");
                    console.log(err);
                });
        }
    }, [history]);

    function onRegister({ email, password }: {email: string, password: string}) {
        auth
            .register(email, password)
            .then((res) => {
                setTooltipStatus("success");
                setIsInfoToolTipOpen(true);
                history.push("/signin");
            })
            .catch((err) => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }

    function onLogin({ email, password }: {email: string, password: string}) {
        auth
            .login(email, password)
            .then((res) => {
                setIsLoggedIn(true);
                setEmail(email);
                history.push("/");
            })
            .catch((err) => {
                setTooltipStatus("fail");
                setIsInfoToolTipOpen(true);
            });
    }
    return (
        <React.Fragment>
            <Switch>
                <Route path="/signup">
                    <Register onRegister={onRegister} />
                </Route>
                <Route path="/signin">
                    <Login onLogin={onLogin} />
                </Route>
            </Switch>
            <InfoTooltip
                isOpen={isInfoToolTipOpen}
                onClose={() => setIsInfoToolTipOpen(false)}
                status={tooltipStatus}
            />
        </React.Fragment>
    )
}

export default Auth;
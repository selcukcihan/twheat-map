import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Heatmap from "./views/Heatmap";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

const App = () => {
    const { loading } = useAuth0();

    if (loading) {
        return <Loading className="spinner" />;
    }

    return (
        <Router history={history}>
            <div id="app" className="d-flex flex-column h-100">
                <NavBar />
                <Container className="flex-grow-1 mt-5">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <PrivateRoute path="/heatmap" exact component={Heatmap} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

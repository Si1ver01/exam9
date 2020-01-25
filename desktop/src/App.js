import React, { Fragment } from "react";
import TopBar from "./components/Topbar/TopBar";
import Contacts from "./pages/Contacts/Contacts";
import AddContact from "./pages/AddContact/AddContact";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Contacts} />
        <Route path="/new-contact" component={AddContact} />
        <Route path="/edit-contact/:id" component={AddContact} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;

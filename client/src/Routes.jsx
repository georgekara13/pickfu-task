import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout.jsx";
import QuestionForm from "./components/QuestionForm.jsx";
import AnswersList from "./components/AnswersList.jsx";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={QuestionForm} />
        <Route path="/answers" exact component={AnswersList} />
      </Switch>
    </Layout>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LoginViaSmsPage from '../components/LoginViaSmsPage';
import EnterPage from '../components/EnterPage';
import LoadingPage from '../components/LoadingPage';

 const AppRouter = () => (
     <BrowserRouter>
        <div  className="main_container">
            <Header />
            <Switch>
                <Route path="/" component={LoginViaSmsPage} exact={true} />
                <Route path="/01" exact={true} component={EnterPage} />
                <Route path="/02" exact={true} component={LoadingPage}  />
                <Route path="/aviram" exact={true}>
                    <div>
                        aviram
                    </div>
                </Route>
                <Route component={LoadingPage} />
            </Switch>
        </div>
     </BrowserRouter>
 );

export default AppRouter;
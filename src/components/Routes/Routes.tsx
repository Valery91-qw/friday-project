import React from "react";
import {Route, Switch} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Registration} from "../registration/Registration";
import {Login} from "../login/Login";
import {TestStand} from "../testStand/TestStand";
import {PasswordRecovery} from "../passwordRecovery/PesswordRecovery";
import {NewPassword} from "../newPassword/NewPassword";
import {NotFound} from "../notFound/NotFound";

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    NOT_FOUND: "/not_found",
    TEST_STAND: "/test_stand",
    REGISTRATION: "/registration",
    NEW_PASSWORD: "/new_password",
    PASSWORD_RECOVERY: "/password_recovery",

}

export const Routes = () => {
    return (<>
        <Switch>
            <Route path={"/"} exact render={() => <Profile/>}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.TEST_STAND} render={() => <TestStand/>}/>
            <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
            <Route path={PATH.NEW_PASSWORD} render={ () => <NewPassword/>}/>
            <Route render={() => <NotFound/>}/>
        </Switch>
    </>)
}
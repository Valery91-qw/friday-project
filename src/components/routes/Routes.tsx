import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Registration} from "../registration/Registration";
import {Login} from "../login/Login";
import {TestStand} from "../testStand/TestStand";
import {PasswordRecovery} from "../passwordRecovery/PesswordRecovery";
import {NewPassword} from "../newPassword/NewPassword";
import {NotFound} from "../notFound/NotFound";
import {Packs} from "../packs/Packs";
import {Cards} from "../packs/cards/Cards";
import {LearnPage} from "../packs/learnPage/LearnPage";

type PropsType = {
    isInitialize: boolean
}

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    NOT_FOUND: "/not_found",
    TEST_STAND: "/test_stand",
    REGISTRATION: "/registration",
    NEW_PASSWORD: "/new_password",
    PASSWORD_RECOVERY: "/password_recovery",
    PACKS: "/packs",
    CARDS: "/cards",
    LEARNPAGE: "/learnPage"
}

export const Routes: FC<PropsType> = ({isInitialize}) => {

    return (<>
        <Switch>
            {isInitialize ?
                <>
                    <Route exact path={"/"} render={() => <Profile/>}/>
                    <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                    <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                    <Route path={PATH.TEST_STAND} render={() => <TestStand/>}/>
                    <Route path={PATH.PACKS} render={() => <Packs />}/>
                    <Route path={PATH.CARDS} render={() => <Cards /> }/>
                    <Route path={PATH.LEARNPAGE} render={() => <LearnPage /> }/>
                    <Redirect from={PATH.LOGIN} exact to={PATH.PROFILE} />
                </>
                :
                <>
                    <Route path={PATH.LOGIN} render={() => <Login/>}/>
                    <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                    <Route path={PATH.TEST_STAND} render={() => <TestStand/>}/>
                    <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                </>
            }
            <Route render={() => <NotFound/>}/>
        </Switch>
    </>)
}
import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import { passwordRecoveryReducer } from "./passwordRecovery-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";
import {testStandReducer} from "./testStand-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    login: loginReducer,
    newPass: newPasswordReducer,
    recoverPass: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer,
    testStand: testStandReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof reducer>
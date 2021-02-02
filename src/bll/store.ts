import {combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import { passwordRecoveryReducer } from "./passwordRecovery-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";
import {testStandReducer} from "./testStand-reducer";

const reducer = combineReducers({
    login: loginReducer,
    newPass: newPasswordReducer,
    recoverPass: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer,
    testStand: testStandReducer
})

export const store = createStore(reducer)

export type RootStateType = ReturnType<typeof reducer>
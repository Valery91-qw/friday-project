import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import { passwordRecoveryReducer } from "./passwordRecovery-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";
import {testStandReducer} from "./testStand-reducer";
import thunk from "redux-thunk";
import {commonReducer} from "./common-reducer";
import {packsReducer} from "./packs-reducer";

const reducer = combineReducers({
    login: loginReducer,
    newPass: newPasswordReducer,
    recoverPass: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer,
    testStand: testStandReducer,
    common: commonReducer,
    packs: packsReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof reducer>
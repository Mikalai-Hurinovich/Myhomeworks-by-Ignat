import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PreJunior from './pages/PreJunior/PreJunior'
import Error404 from "./pages/ErrorPage/Error404";
import JuniorPlus from "./pages/JuniorPlus/JuniorPlus";
import MIDDLE from './pages/Middle/MIDDLE';
import Junior from "./pages/Junior/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
    MIDDLE: '/middle',

}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route exact path="/"/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route path={PATH.MIDDLE} render={() => <MIDDLE/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes

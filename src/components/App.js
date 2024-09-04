import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EventCalendar from '../pages/Calendar';
import EventList from '../pages/EventList';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/calendar">
                    <EventCalendar />
                </Route>
                <Route exact path="/events/:id">
                    <EventList />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;

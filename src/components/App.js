import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EventCalendar from '../pages/Calendar';
import TheaterCalendar from '../pages/TheaterCalendar';
import EventList from '../pages/EventList';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/calendar">
                    <EventCalendar />
                </Route>
                <Route exact path="/theater-calendar">
                    <TheaterCalendar />
                </Route>
                <Route exact path="/events/:id">
                    <EventList />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;

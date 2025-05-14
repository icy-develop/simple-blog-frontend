import './ui/app.css'
import {About} from "@/pages/about";
import {ErrorBoundary, LocationProvider, Route, Router} from 'preact-iso';
import {NotFound} from "./routes/not_found.tsx";
import {Posts} from "@/pages/posts";
import AsyncRoute from "preact-async-route";

export function Index() {
    return (
        <LocationProvider>
            <ErrorBoundary>
                <header>
                    <nav>
                        <a href={`/`}>Все статьи</a>
                        {true ? <>
                            <a href={`/profile/${'user_id'}`}>Профиль</a>
                            <a onClick={() => console.log("Выйти")}>Выйти</a>
                        </> : ''}
                    </nav>
                </header>
                <Router>
                    <AsyncRoute path="/" component={Posts}></AsyncRoute>
                    <Route path="/about" component={About}></Route>
                    <Route component={NotFound} default />
                </Router>
            </ErrorBoundary>
        </LocationProvider>
  );
}

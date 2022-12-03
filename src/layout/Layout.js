import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./layout.css"
import { ThreadTop } from "./../thread/ThreadTop";
import { Thread } from "./../thread/Thread";
import { ThreadCreate } from "./../thread/ThreadCreate";

export const Layout = () => {
    return (
        <> 
            <header>
                <h1>Thread!!</h1>
                <p><a href="http://localhost:3000/thread/new">スレッドを立てる</a></p>
                <p><a href="http://localhost:3000">トップ</a></p>
            </header>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path={`/`} element={<ThreadTop />}/>
                        <Route path={`/thread/new`} element={<ThreadCreate />}/>
                        <Route path={`/thread/:id`} element={<Thread />}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <footer>
                Copyright © 2022 Izawa Soma. All Rights Reserved.
            </footer>
        </>
    );
}
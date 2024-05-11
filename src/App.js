import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { AuthProvider } from "./components/AuthProvider";
import { DefaultLayout } from "./Layout";

function App() {
    const docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back :(";
    });
    window.addEventListener("focus", () => {
        document.title = docTitle;
    });
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AuthProvider>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </AuthProvider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

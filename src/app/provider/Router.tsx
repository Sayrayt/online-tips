import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

// import ProtectedRoute from "@/pages/Auth/ProtectedRoute";
// import ProcessingPage from "./ProcessingPage";
// import ErrorFallback from "./ErrorFallback";
const Loading = lazy(() => import("@pages/loading").then(module => ({ default: module.Loading })));

const Menu = lazy(() => import("@pages/menu").then(module => ({ default: module.Menu })));
const PaymentPage = lazy(() => import("@pages/paymentPage").then(module => ({ default: module.PaymentPage })));

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <Suspense fallback={<Loading />}>
                        <Menu />
                    </Suspense>
                }
                errorElement={
                    <h1>Ошибка</h1>
                }
            />
            <Route
                path="/payment"
                element={
                    <Suspense fallback={ <Loading />}>
                        <PaymentPage />
                    </Suspense>
                }
                errorElement={
                    <h1>Ошибка</h1>
                }
            />
        </>
    )
);

export default Router;

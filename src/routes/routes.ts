import { LazyExoticComponent, lazy } from "react";
import { LazyLayout, NoLazyPage } from "../01-lazyload";

type JSXComponent = () => JSX.Element;

interface RoutesInterface {
    to: string,
    path: string,
    Component: (LazyExoticComponent<JSXComponent>) | JSXComponent,
    name: string,
}

const Lazy = lazy(() => import('../01-lazyload/layout/LazyLayout'))


export const routes: RoutesInterface[] = [
    // {
    //     to: '/lazyload/',
    //     path: '/lazyload/*',
    //     Component: Lazy,
    //     name: 'Lazy Page',
    // },
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: Lazy,
        name: 'Lazy Page',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazyPage,
        name: 'No Lazy Page',
    },
]
import { Outlet } from 'react-router-dom';
import MainNavication from '../compoments/MainNavigation';

function RootLayout(){
    return (
    <>
        <MainNavication />
        <main>
            <Outlet />
        </main>
    </>
    );
}

export default RootLayout;
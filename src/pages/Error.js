import MainNavication from "../compoments/MainNavigation";

function ErrorPage(){

    return(
        <>
            <MainNavication />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    )
    
}

export default ErrorPage;
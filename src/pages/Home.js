import { Link } from 'react-router-dom'
import MainNavication from '../compoments/MainNavigation';

// Link : 불필요한 서버 HTTP 요청을 전송하는걸 막아줌.
function HomePage(){
    return (
    <>  
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>
        </p>
        {/* <p>
            Go to <a href="/products">the list of products</a>
        </p> */}
    </>
    )
}

export default HomePage;
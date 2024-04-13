import {Outlet} from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
const Root = () => {
    return (
        <div className='font-roboto'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
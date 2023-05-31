import {Link} from 'react-router-dom';
import './Navigation.css'
function Navigation(){
    return(
        <div>
            <nav className='d-flex justify-content-between px-4 text-center py-1'>
                <div className='image'><img src="https://www.ecti.co.in/assets/images/illustrations/Envision.svg" alt="" /></div>
                <ul className='d-flex pt-4'>
                    <li className='pe-5 '><Link className='text-dark' to="/Component/Home">Home</Link></li>
                    <li className='px-5 '><Link className='text-dark' to="/Component/Courese">Courses</Link></li>
                    <li className='px-5 '><Link className='text-dark' to="/Component/About">About</Link></li>
                    <li className='px-5 '><Link className='text-dark' to="/Component/Downloads">Downloads</Link></li>
                    <li className='px-5 '><Link className='text-dark' to="/Component/Contact">Contact</Link></li>
                </ul>
                <div ><p className='pt-4'><span className='fw-bold'>Call Now:</span>+917498713536</p></div>
            </nav>
        </div>
    );
}
export default Navigation;
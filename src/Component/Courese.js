import Biuld from "./Biuld";
import './Courses.css';
import Owner from './Owner';
import Records from "./Records";
import Chat from "./Chat";
import Footer from "./Footer";
function Courese(){
    return(
        <div>
                <div className='d-flex justify-content-around home pt-5 px-5'>
            <div className='home1'>
                <p className=' fw-bold pt-3'>Courses  @ Envision Computer training institute</p>
                <button type='button' className='btn btn-warning px-3 py-2'>Placement record</button>
            </div>
            <Biuld/>
        </div>
        
        <div className="row">
         <div className="col-8">  
         
         <div className="century">
            <h3>All Courses:</h3>
            <p>21st century is dominated by IT industry. Almost every thing is available on a single mouse click. As the industry is expanding its horizon there is need for more and more professional developer to meet this ever increasing demand. Applications required for the industry is very diversified i.e Web Application, Stand alone Application, Mobile Application and many more. Hence need for these professional is very high. Learning programming language from best it training institute in pune can help you to get into this most wanted industry. </p>
        </div>
        <div className="all row ">
            <div className=" col-4">
                <div>
                <img className="vie" src="https://www.ecti.co.in/assets/images/illustrations/Creative-Master-in-UI-UX-Design.svg"></img>
                <p className="text-center">View More</p>
                </div>
            </div>
            <div className="  col-4">
                <img className="vie" src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-UI-UX-Development.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie" src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-Architectural-Designing.svg"></img>
                <p className="text-center">View More</p>
            </div>

            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-Design-and-Manufacturing-Process-Engineering.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/PHP-Full-Stack-Web-Apps-Development.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Java-Full-Stack-Web-Apps-Development.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-UI-UX-Development.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Alias-Modeling.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/software-testing.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-Automotive-Embedded-System-Design.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/AutoCAD.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Revit-Architecture.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Google-Sketchup.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/3D-Max.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="col-4">
                <img className="vie"  src="https://www.ecti.co.in/assets/images/illustrations/Angular.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="last1 col-4">
                <img className="last" src="https://www.ecti.co.in/assets/images/illustrations/React.svg"></img>
                <p className="text-center">View More</p>
            </div>
            <div className="last1 col-4">
                <img className="last"  src="https://www.ecti.co.in/assets/images/illustrations/Python.svg"></img>
                <p className="text-center">View More</p>
            </div>
            
        </div>
        </div>
        <div className="col-4">
                <Owner/>
            </div>
    
    </div>
         <div className="text-center">
            <Records/>
         </div>
         <Chat/>
         <Footer/>
        </div>
    );
}
export default Courese;



    
    
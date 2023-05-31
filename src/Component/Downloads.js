import Biuld from "./Biuld";
import Owner from "./Owner";
import './Dawonloads.css';
import Records from "./Records";
import Chat from "./Chat";
import Footer from "./Footer";
function Downloads(){
    return(
        <div>
             <div className='d-flex justify-content-around home pt-5 px-5'>
            <div className='home1'>
                <p className=' fw-bold pt-3'>Dawonloads  @ Envision Computer training institute</p>
                <button type='button' className='btn btn-warning px-3 py-2'>Placement record</button>
            </div>
            <Biuld/>
        </div>
          <div className="row px-5 justify-content-around">
          <div className='since col-7 pt-5'>
            <h4 className="pt-5">Download Center:</h4>
            <p> notes:</p>
            
        <div className="basic">
            <h4>Basics of Web</h4>
            <p>Download and learn the very basics of what is internet and HOW STUFF WORKS... Understanding internet just became a whole lot easier.</p>
        </div>
        <div className="basic">
            <h4>Basics of SEO</h4>
            <p>Download and learn the very basics of what is Search Engine and Hit works. We also understand what SEO means. This tutorial gives us a superficial knowledge of SEO.</p>
        </div>
        <div className="basic">
            <h4>Design Principle</h4>
            <p>Download and learn the very basics of Design Principle. Understanding the basic of design principle just became a whole lot easier.</p>
        </div>
          </div>
          <div className="col-4">
            <Owner/>
          </div>


        </div>
        <div>
            <div className="text-center"><Records/></div>
            <Chat/>
            <Footer/>
        </div>
        </div>
    );
}
export default Downloads;
import Biuld from "./Biuld";
import Owner from "./Owner";
import Records from "./Records";
import Chat from "./Chat";
import Footer from "./Footer";
import './Contact.css'
function Contact(){
    return(
        <div>
             <div className='d-flex justify-content-around home pt-5 px-5'>
            <div className='home1'>
                <p className=' fw-bold pt-3'>Contact @ Envision Computer training institute</p>
                <button type='button' className='btn btn-warning px-3 py-2'>Placement record</button>
            </div>
            <Biuld/>
        </div>
         <div className="row px-5 justify-content-around">
         <div className='join col-8'>
            <h4>Contact below:</h4>
            <p>join our training institute in pune!</p>
            <p>Fill up the form and and we will get in touch with you!</p>


            <p>First Name</p>
            <input></input>

            <p>Last Name</p>
            <input></input>

            <p>Select Course</p>
            <select className='opt'>
                <option  value="">Select Course</option>
                <option>Creating Master In UI/UX Design</option>
                <option> Diploma In UI/UX Development</option>
                <option>Diploma In Architectural Designing</option>
                <option>Diploma In Design & Manufacturing Engineering</option>
                <option>PHP Full Stack Web Apps Development</option>
                <option >Java Full Stack Web Apps Development</option>
                <option>Dot Net Full Stack Web Apps Development</option>
                <option>
                Alias Modeling
                </option>
                <option value="Software Testing">Software Testing</option>
                <option value="Diploma In Automotive Embedded System Design">Diploma In Automotive Embedded System Design</option>
                <option value="Auto CAD">Auto CAD</option>
                <option value="Revit Architecture">Revit Architecture</option>
                <option value="Google Sketcheup">Google Sketcheup</option>
                <option value="3ds Max">3ds Max</option>
                <option value="MongoDb">MongoDb</option>
                <option value="React js">React js</option>
                <option value="Angular">Angular</option>
                <option value="Node js">Node js</option>
                <option value="Python">Python</option>
            </select>

            <p>Phone No</p>
            <input></input>

            <p>Email</p>
            <input></input>

        <button>Submit</button>
        </div>
        <div className="col-4">
            <Owner/>
        </div>
         </div>
         <div>
            <div className="text-center">
                <Records/>
            </div>
            <Chat/>
            <Footer/>
         </div>
        </div>
    );
}
export default Contact;
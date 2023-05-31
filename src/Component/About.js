import Owner from "./Owner";
import Biuld from "./Biuld";
import Records from "./Records";
import Chat from "./Chat";
import Footer from "./Footer";
function About(){
    return(
        <div>
             <div className='d-flex justify-content-around home pt-5 px-5'>
            <div className='home1'>
                <p className=' fw-bold pt-3'>About Envision Computer training institute</p>
                <button type='button' className='btn btn-warning px-3 py-2'>Placement record</button>
            </div>
            <Biuld/>
        </div>
    
            <div className='row px-5 py-5 justify-content-between'>
         <div className='since col-8 pt-5'>
            <h4>About ECTI:</h4>
            <p> Since its inception in 1999, Envision Computer Training Institute has been effectively substantiating the ever rising needs of technical support in the social and business scenario. This computer institute in puneis successfully paving its way through the fields of Programming and Engineering acting as a full proof educational facilitator thus consistently delivering the demand of industry ready professionals.
            </p>
            <p className='pt-2'> 
            Envision has always been in the quest of building a technical edifice for the students with its underlying values and core competencies in technical excellence, quality training and innovative concepts. </p>


            <h4>Vision:</h4>
            <p>To be recognized and respected as one of the premium associations of technical support with the quality of well groomed students, exemplifying technical excellence among the other training instututions in pune. </p>

            <h4>Mission:</h4>
            <p>Our missions is to provide best in class education, meeting the requirements of industries by instilling professional approach in our students and equip them with requisite knowledge thus enhancing their work productivity and provide them with a staunch platform by lending job assistance. We strive to achieve this by leveraging the expertise of our technical staff and their high level of commitment. </p>


            <h4>Aims and Objectives:</h4>
            <p>1.To build a comprehensive approach towards knowledge acquisition in our students.</p>
            <p>2.To instigate an application oriented approach by providing exposure to latest trends in the industries. </p>
            <p>3.To instigate an application oriented approach by providing exposure to latest trends in the industries. </p>

        <h4>Why IT training at ECTI:</h4>
        <p className='pt-3'>   You will get complete support after completion of your course.</p>
        <p>Your knowledge will be as good as one year experienced professional.</p>
        <p>You get intensive, hands-on experience learning from professionals.</p>
        <p>We provide in-depth demonstrations on every aspects of course topics.</p>
        <p>Also we offer internship for talent. </p>
                </div>
                <div className='col-4 ps-4'>
                <Owner/>
                </div>

        </div>
        <div>
            <Records/>
            <Chat/>
            <Footer/>
        </div>
</div>
        
    );
}
export default About;



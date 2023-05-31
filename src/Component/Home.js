import Biuld from './Biuld';
import Records from './Records';
import Chat from './Chat';
import './Home.css';
import Footer from './Footer'
function Home(){
    return(
        <div>
            <div className='d-flex justify-content-around home pt-5 px-5'>
            <div className='home1'>
                <p className=' fw-bold pt-3'>Build Your Career Development Skills From Masters</p>
                <button type='button' className='btn btn-warning px-3 py-2'>Placement record</button>
            </div>
            <Biuld/>
        </div>
        <div className='row justify-content-around pt-5 px-5 text-center full'>
            <div className='col-2 shadow fullstack'><img src="https://www.ecti.co.in/assets/images/illustrations/Java-Full-Stack-Web-Apps-Development.svg" alt="" />
            <a href="">view more</a>
            </div>
            <div className='col-2 shadow fullstack'><img src="https://www.ecti.co.in/assets/images/illustrations/Alias-Modeling.svg" alt="" /> <a href="">view more</a></div>
            <div className='col-2 shadow fullstack'><img src="https://www.ecti.co.in/assets/images/illustrations/Diploma-in-UI-UX-Development.svg" alt="" /> <a href="">view more</a></div>
            <div className='text-center pt-5 pb-5 '><p>Explore Entire Courses <a href="">Click Here</a></p></div>
        </div>
         <div className='row about pt-5 mt-5 '>

            <div className='col-6'>
                <img src="https://www.ecti.co.in/assets/images/illustrations/about.svg" alt="" />
            </div>
            <div className='col-6 pt-5'>
                <h3>About Us</h3>
                <p>As a Student, are you confused between the syllabus going in the college and practical requirements in companies for jobs? Worry not. ECTI brings you a range of curricular courses that focus on curriculum.</p>
                <button type='button' className='btn bg-warning px-3 py-2'>more about ecti</button>
            </div>
         </div>
              
              <div className='why row px-5 justify-content-around pb-5'>
                <div className='text-center py-5'>
                    <h2>Why ECTI</h2>
                </div>
                <div className='col-4 why1'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-01.svg" alt="" />
                     <h3>100% Job Guarantee</h3>
                     <p>We have plenty of courses. Out of which some courses have 100% placement gurantee.</p>
                </div>
                <div className='col-4 why1'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-04.svg" alt="" />
                    <h3>Cost Effective</h3>
                    <p>We know how much money you need to invest in getting technical knowledge. Thus we have made sure the courses we provided are not just the best but also absolutely cost effective.</p>
                </div>
                <div className='col-4 why1'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-05.svg" alt="" />
                    <h3>Industry Experts Lectures</h3>
                    <p>Our courses also include special lectures delivered by industry experts with experience of not less than 10 years.</p>
                </div>
                <div className='col-4 why1 mt-5'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-03.svg" alt="" />
                    <h3>Free Interview Training</h3>
                    <p>Interview technique is a major hurdle for students trying to get a job. At Envision we make sure that the student is imporved in this area.</p>
                </div>
                <div className='col-4 why1 mt-5'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-06.svg" alt="" />
                    <h3>Mock Interviews by HR</h3>
                    <p>We also make sure that a fresher isn't a fresher when it comes to his interviews from experts and people actually working in HR at various renowned companies.</p>
                </div>
                <div className='col-4 why1 mt-5'>
                    <img src="https://www.ecti.co.in/assets/images/illustrations/feature-icon-02.svg" alt="" />
                    <h3>Most Updated Syllabus</h3>
                    <p>We are proud to mention that our syllabus is updated every quarter. We make sure that the syllabus is also new and so are the programs or practical assignments.</p>
                </div>
              </div>
              <div className='text-center'>
                <h4 className='py-5'>Our Placements</h4>
                <h6 className='pt-2'><a href="">View More Placements</a></h6>
                <p className='fs-3 pt-4 fw-bold'>What Our Students Are Saying About Us</p>
                <div>
                    <Records/>
                </div>
              </div>
              <div>
                <Chat/>
              </div>
              <div className='pb-0 mb-0'>
                <Footer/>
              </div>

        </div>
        
    );
}
export default Home;
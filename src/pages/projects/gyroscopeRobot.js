import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import GSBRGif from '../../../static/projectFiles/gyroscopeRobot/GSBR.gif'

const styles = {
    link: {
        backgroundImage: 'none',
        color: 'black',
    },
    subtitle: {
        fontSize: 14,
        color: 'grey',
    },
}

const ProjectLink = props => (
        <a style={styles.link} href={props.to} download={props.download}><u>{props.children}</u></a>
)

export default function projectTemplate() {
    return (
        <Layout>
            <Header headerText={'Gyroscope Self-Balancing Robot'} />
            <p>The Gyroscope Self-Balancing Robot (GSBR) project has ended. Previous posts on the progress and results can be found on this site. A more detailed and better edited look at the project can be found in the final report that the team has written up <ProjectLink to="/projectFiles/gyroscopeRobot/ZeinHajjAli-GSBR-FinalReport.pdf">here</ProjectLink> or as a download <ProjectLink to="/projectFiles/gyroscopeRobot/ZeinHajjAli-GSBR-FinalReport.pdf" download="ZeinHajjAli-GSBR-FinalReport.pdf">here</ProjectLink>. The source code and testing code can all be found at the Github page <ProjectLink to="https://github.com/ZeinHajjAli/4805-selfBalancingRobot">here</ProjectLink>.</p>
            <div style={{textAlign:'center'}}><img src={GSBRGif} alt="Robot Balancing" /></div>
        
            <h2>Note</h2>
            <p>The following is a condensed and reorderd version of the original posts on my previous project site: </p>
        
            <hr/>

            <h2>Part 1: Project Proposal</h2>
            <p>Collaborators: Zein Hajj-Ali, Theo Hronowsky, Emmanuel Oluyomi, Hussain Aljabri, Ahmad Ayyoub</p>
            <h3>Objectives</h3>
            <p>The goal of the computer systems design lab as part of the SYSC 4805 project is to design and implement a robotic platform. The system will contain various sensors and the associated software that processes sensor data and drives the robot to solve a task. The task that our robot will accomplish is self-balancing. The robot will use its motors to keep itself upright, without any other aid. If this is achieved, we will also be adding a simple line-following capability. This will be implemented using a real robot platform rather than using the simulation software, Vrep. Reasons as to why the group decided to build a physical robot rather than use the simulation software was that using a physical model of the robot would translate to real world application as well as produce a hands-on and interactive end product.</p>
            <h3>Main Details</h3>
            <p>We decided to build a robot that balances on it's two wheels using sensor input data, and the movement of the motors to correct itself and keep upright. Our lesser part of our project is the line following aspect which should be much simpler, and is of less importance than the self-balancing project.</p>
            <p>Since our project depends on the building of a self balancing robot, we require the use of a gyroscope. We chose to use a gyroscope rather than an accelerometer due to the fact that a gyroscope can detect rotation around a given axis. This will be useful for when we come to the stage of the project where we want to implement the line following aspect. We will also need to build a new base for our robot that is vertical and distributes the weight of all the components evenly along the middle of the robot. This way it will lessen the amount of work needed to be done by the arduino to calculate the values for the self balancing movements.</p>
            <p>Our project uses new sensors that were not included in the system such as a gyroscope and/or an accelerometer, as well as a whole new platform for the robot. The extra sensors we need will be sourced from Graham Eatherley and the platform will be designed custom for our project and will be 3D printed using the printers available on campus.</p>
            <p>We will be developing an algorithm to calculate the speed values needed for the motors to keep the robot upright. There are already some algorithms and programs found online that do the same job, but we will be using ideas from them to implement our own version specific to our project. We will also be developing a simple line following algorithm that uses the movement techniques from the self-balancing part of the project.</p>
            <p>We will be evaluating the success of our project by running tests on the practical performance. We will be testing the capability of keeping upright under four main conditions:</p>
            <ol>
                <li>Standing still or in place,</li>
                <li>Being pushed down lightly,</li>
                <li>While moving in a straight line, and</li>
                <li>While moving on a curved path or taking turns</li>
            </ol>
            <p>These four tests will show the full capabilities of our self-balancing system. If completed successfully, we will also be testing the basic line-following implementation.</p>
            <p>The roles and strengths of each team member and the timeline for each stage of the project are discussed below in their respective sections.</p>
            <h3>Team Members & Roles</h3>
            <p>Group #9 consists of five 4th year computer systems engineering students. The group members are: Theo Hronowsky, Zein Hajj-Ali, Emmanuel Oluyomi, Hussain Aljabri and Ahmad Ayyoub. Each member will assume the role of the project manager and will have their own associated responsibilities. The roles of each team member is split in a way that each member of the team will participate in all aspects of project planning, management and the design and development of the end solution.</p>
            <p>As 4th year computer system engineers, all group members have similar knowledge and experience. Experience such as embedded system design and various programming principles are a shared skill set between the team. Knowledge in microcontrollers and sensors have been acquired in previous projects and will be applied by all members. More so, all members of the group have extensive knowledge of various programming principles. That being said, the group will work as a team on all phases of the engineering design process, and as problems arise, will branch off, based on interests, to propose solutions.</p>
            <h4>Proposed Tasks:</h4>
            <ul>
                <li><b>Zein Hajj-Ali:</b> Programming, Building Hardware, Developing testing scenarios</li>
                <li><b>Theo Hronowsky:</b> Sensor programming, assembling the robot/hardware, CAD design/3-D printing</li>
                <li><b>Emmanuel Oluyomi:</b> Coding of Arduino, 3-D printing, testing of program</li>
                <li><b>Hussain Aljabri:</b> Hardware connections and Arduino programming.</li>
                <li><b>Ahmad Ayyoub:</b> Writing or testing the software needed to balance the robot or make it follow the line</li>
            </ul>
            <h3>Project Planning Steps</h3>
            <p>The computer systems design lab project will be planned in a way that it is iterative. It will be planned using a variation of the engineering design process. The robot will be created through defining, planning, design, implementing and testing phases. The team will start working on the first iteration of the project after acquiring and checking all the necessary sensors and parts.</p>
            <p>First, the team members will collaborate to determine the needed hardware sensors that will be connected to the robot to accomplish the self-balancing and line following functionalities of the robot. For now, we know that we will need the gyroscope and accelerometer sensors to implement the functionalities. The second step is to connect these sensors with other sensors of the robot to make it move on the line. The next step is to test the sensors if they are working after we connect them with the robot.Then we proceed to writing or downloading the necessary software application code on arduino that will cause the sensors to work accordingly. Then we will need to check for any mistakes or variations from the robot. For example, we will test whether the robot is actually moving on the line while balancing itself and not falling off. In other words, we will do the integration testing of the software and hardware of the robot.We then combine the sensors and implement the required software code that will make it move in a line and balance itself at the same time. We've organized a tentative schedule for the group to achieve the project objectives for structure.</p>
            <p>The tentative schedule for the group is as follows:</p>
            <table>
                <thead>
                    <tr>
                        <th><strong>Component</strong></th>
                        <th><strong>Date</strong></th>
                        <th><strong>Details</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Requirements Elicitation</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Project topic choice &amp; planning</td>
                        <td>Jan 25th - Feb 1st, 2019</td>
                        <td>Choose topic and begin planning</td>
                    </tr>
                    <tr>
                        <td>Project proposal</td>
                        <td>Feb 1st 2019</td>
                        <td>Brief description of the self balancing robot and platform chosen</td>
                    </tr>
                    <tr>
                        <td><strong>Planning/Design</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Project planning/design options</td>
                        <td>Feb 1st - Feb 15th, 2019</td>
                        <td>Consider the weight of the robot and figuring out a design to maintain balanced and begin planning.</td>
                    </tr>
                    <tr>
                        <td>Acquire necessary hardware</td>
                        <td>Feb 1st - Feb 15th, 2019</td>
                        <td>We need Gyroscope and/or accelerometer.</td>
                    </tr>
                    <tr>
                        <td><strong>Development/Implementation</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Project implementation</td>
                        <td>Feb 15th - Mar 1st, 2019</td>
                        <td>Begin the implementation phase: Adding the sensors and composing the robot.</td>
                    </tr>
                    <tr>
                        <td>Project progress report</td>
                        <td>Mar. 3, 2019</td>
                        <td>Description of the current progress</td>
                    </tr>
                    <tr>
                        <td><strong>Testing &amp; Refinement</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Testing and refinement</td>
                        <td>Mar. 3rd - Mar. 21, 2019</td>
                        <td>Test the first iteration of the completed robot, implement changes that improve performance.</td>
                    </tr>
                    <tr>
                        <td>Final project presentation</td>
                        <td>scheduled between Mar. 22 and Apr. 5, 2019</td>
                        <td>Presentation that will cover chosen components, implementation, and other project specifics.</td>
                    </tr>
                    <tr>
                        <td>Final project demonstration</td>
                        <td>Apr. 5, 2019</td>
                        <td>Presentation of the implementation of the physical robot.</td>
                    </tr>
                    <tr>
                        <td>Peer review of individual contributions</td>
                        <td>Mar. 29, 2019</td>
                        <td>Each student will demonstrate their personal contributions throughout the semester.</td>
                    </tr>
                    <tr>
                        <td>Robot kit return</td>
                        <td>Apr. 9, 2019</td>
                        <td>Robot kit is returned.</td>
                    </tr>
                    <tr>
                        <td>Final Report</td>
                        <td>Apr. 9, 2019</td>
                        <td>An updated version of the progress report, and contains all the technical details of the project.</td>
                    </tr>
                </tbody>
            </table>
            <h3>Risk Evaluation</h3>
            <p>In any project, it can be expected that problems will arise. In order to minimize the impact of these setbacks, some considerations have been placed. This involves events that are uncertain to the group, and may have positive or negative effects on the project.</p>
            <p>These risks can be identified as:</p>
            <ul>
                <li>The event that a piece of hardware is broken or does not work to specification. <b>Medium Risk, Medium Impact.</b> Solution: Source a replacement part; Remove need for it using an alternative method.</li>
                <li>If hardware is not sourced locally, the chance that shipping time may not be within the timeline of this project. <b>Low Risk, Low Impact.</b> Solution: Order parts locally; Order parts early in the process.</li>
                <li>There might be latency delay from the sensors. <b>Medium Risk, Low Impact.</b> Solution: Account for delay in code; Don't use speed dependant processes.</li>
                <li>Readings from the sensors aren't accurate and precise. <b>Medium Risk, Medium Impact.</b> Solution: Order replacement sensors; Account for precision in code.</li>
                <li>Scope of the project is ill defined and needs to be redefined later on. <b>Low Risk, Medium Impact.</b> Solution: Redefine scope of project.</li>
            </ul>
            <p>Overall, the risk associated with the combination of the events is minimal in the sense that if these events occur, there are preventative measures or alternatives that can be considered.</p>
            <h3>Project Cost and Duration</h3>
            <p>The basic equipment that we will use for the robot's hardware configuration are borrowed from Carleton University, and other sensors hardware equipment might be purchased or borrowed from Graham Eatherley if needed and available. If these sensors are not available locally, we will need to purchase these components, which will come with a cost. However, often times these components are cheap and will not have a huge impact in terms of cost. As stated in the tentative schedule, the basic equipments will be returned at the end of the semester. It is assumed that the duration of the project will last the whole semester with a functional product developed at the end of the term.</p>
            <p>The main sensors used in the robot and components are:</p>
            <ul>
                <li>Gyroscope</li>
                <li>Accelerometer</li>
                <li>Motor Module</li>
            </ul>

            <hr/>

            <h2>Part 2: Acquiring Components and Splitting Tasks</h2>
            <p>Theo and Emmanuel started work on the platform we need to build. The platform/base given to us works fine for a rover style robot, but is not very suited for a self-balancing robot. We decided on a two or three platform base, keeping the battery pack on the highest level since it is the heaviest. The Arduino and gyroscope would go in the middle level, and the motors, IR sensors, and motor driver will all be on the bottom.</p>
            <div style={{textAlign:'center'}}><img src="/projectFiles/gyroscopeRobot/base.png" alt="base of robot"/></div>
            <p style={styles.subtitle}>Figure 1: Prototype 3D print base [Theo Hronowsky]</p>
            <p>Above is a first prototype of the base. We will be trying to build it out of wood or plastic, but we might resort to 3D printing it if it is feasible.</p>
            <hr/>
            <p>Ahmad was about to start work on the line follower part of the code. We will be using two IR sensors placed close enough to straddle a line made with double width electrical tape. The robot will go forward, watching the floor for the black tape, and turning towards the side of the sensors that senses the tape.</p>
            <hr/>
            <p>Hussain and I will be working on the self-balancing algorithm. We obtained a gyroscope from Mr. Graham. The one we received is a 9-axis sensor, the Adafruit BNO055.</p>
            <img src="/projectFiles/gyroscopeRobot/gyro.jpg" alt="Gyroscope module"/>
            <p style={styles.subtitle}>Figure 2: Adafruit BNO055 [Adafruit Industries]</p>
            <p>We connected it to the Arduino and ran some test code. After battling with the header files and libraries, we were able to read successfully from the sensor. The easiest way to include the libraries is to download them as zip files and add them through the Arduino IDE, it does the rest for you. We also had some trouble connecting the Arduino to any of our PCs to download the code. We had to make sure we selected the correct processor in the IDE as well as the correct COM port. We needed to download the drivers and when it still didn’t work, we realized we that our USB cable was faulty. After replacing the cable, the upload went smoothly. I have the kit with me at home, and I will be running some more tests to find the thresholds and values needed to keep our robot upright.</p>
            <hr/>
            <p>We will all be doing some part of our work during the week and meeting up in the project lab to update each other and re-schedule tasks.</p>

            <hr/>

            <h2>Part 3: Final Update & Conclusion</h2>
            <p>Two months have passed since my last update on the Gyroscope Self-Balancing Robot and a lot has happened. The team wrote up a progress report, we built the self-balancing code framework, and did a whole lot of testing to get the correct PID constant values to keep the robot upright without oscillating too heavily. The demo went smoothly, and we have some videos of the robot keeping upright at different PID values. We are currently finishing up the final report to be submitted to the professor.</p>
            <h3>Testing & Setbacks</h3>
            <p>We ran into more than a few issues during testing, mostly to do with the motor drivers and the batteries attached. We were not able to run the Arduino, the gyroscope, and the motors/motor driver all off of the 4 AAA battery pack, and so we decided to connect a 9V battery directly to the motor driver. Unfortunately, once the 9V loses a bit of charge, the maximum motor speed would decrease, which changes the needed PID constants to keep the robot upright, and makes testing and demoing the robot without a rechargeable battery pack a hassle.</p>
            <h3>Final Demo</h3>
            <p>We bought many batteries to test with and kept one aside to demo the project to the professor and the teaching assistants. As soon as we connected the battery, only one wheel was spinning, and we first thought that our battery was mixed up with one that was dying. Upon further inspection, one of the connections from the motor to the motor driver was loose, and the robot worked well after fixing the issue.</p>
            <iframe width="590" height="494" src="https://www.youtube.com/embed/aJF67wwZkME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Final Deliverables</h3>
            <p>The final project report is currently being finalized, and will be submitted by tomorrow to the professor. I will also upload it to the site as a PDF. The Github page has been kept up to date, since we used it for source code version control and collaborative programming efforts.</p>
            <h3>Conclusion & Final Thoughts</h3>
            <p>I take great pride in the accomplishments of the team for this project. The components we were given to work with were subpar, and some were damaged, but we made use of them in the best possible way. My pride is also compounded by the fact that a week before the demo, we gave a presentation on the project, and we heard the professor say to her teaching assistant that she didn’t believe we could get it to work with the components we had. We used this doubt as a motivating factor and worked hard over the next week to achieve the goals of the project, and deliver an impressive demo. I took on the role of a leader for this project, but not everyone needed to be told what to do. I enjoyed my responsibilities throughout the semester, and learned a lot about the optimal way of motivating different people in different ways. Overall, I rank this project as a success.</p>
        </Layout>
    )
}
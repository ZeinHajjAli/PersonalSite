import React from 'react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import SiteHelmet from '../../components/helmet'

const styles = {
    link: {
        backgroundImage: 'none',
        color: 'black',
    },
    subtitle: {
        fontSize: 14,
        color: 'grey',
    },
    unorderedList: {
        marginLeft: '40pt',
    },
    inlineImages: {
        // position: 'relative',
        textAlign: 'center',
        padding: 'between',
    },
    halfImage: {
        display: 'inline',
        width: '19.12pc',
    },
    thirdImage: {
        display: 'inline',
        width: '12.75pc',
    },
}

const ProjectLink = props => (
    <a style={styles.link} href={props.to} download={props.download}><u>{props.children}</u></a>
)

export default function modelingCO2Classroom() {
    return (
        <Layout>
            <SiteHelmet titleText={"MCO2"} />
            <Header headerText={'Modeling CO2 in a Classroom - A Cell-DEVS Model'} />

            <p>The following mini-project was made as a solution to an assignment for one of my graduate studies courses in the fall of 2020. The project's Github repo can be found <ProjectLink to={'https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2'}>here</ProjectLink>. A pdf version of this report can be found <ProjectLink to={'/projectFiles/modelingCO2Classroom/ZeinHajjAli-MCO2-FinalReport.pdf'}>here.</ProjectLink></p>
        
            <h2>Introduction</h2>
            <p>Due to the ongoing COVID-19 pandemic, a number of solutions for schools and classrooms have come up to slow or stop the spread of the virus. One of these solutions is the use of barriers around the individual desks of students in a classroom. These 3-sided plexiglass barriers are meant to slow the spread of COVID-19 by stopping exhaled breath and water droplets from reaching other students. Since there have been models of the diffusion of CO<sub>2</sub> in the air, we can adapt those models to track the spread of exhaled air from student to student in a variety of different situations.</p>

            <h2>Prior Work</h2>
            <p>CO<sub>2</sub> sensors are being more widely used to detect the presence of occupants in rooms. Although the sensors can accurately predict the presence of occupants, they struggle with predicting the number of occupants due to the high variability in the positioning of the persons. Due to this, models are required to represent the most effective configurations of CO<sub>2</sub> sensors in a variety of spaces. The <a href="https://informs-sim.org/wsc20papers/098.pdf">Khalil, Wainer, Dunnigan paper</a> attempts to answer two main questions: What is the optimal sensor location for occupancy detection? What is the latency between when the number of occupants changes, and when the sensors are able to detect that change?</p>
            <p>The space is modeled as a 3.5m x 5.75m x 2.5m room, with each cell representing 25cm x 25cm x 25cm (15.625L). Each cell can be one of 6 spaces:</p>
            <ol>
                <li>Open-air with CO<sub>2</sub> constant at 500ppm</li>
                <li>Impermeable walls that do not allow CO<sub>2</sub> diffusion</li>
                <li>CO<sub></sub> sources (occupants) which add 12.16ppm of CO<sub>2</sub> every 5 seconds</li>
                <li>Open doors that keep a constant 500ppm CO<sub>2</sub> level to allow CO<sub>2</sub> to be diffused from the inside out (sinks)</li>
                <li>Open windows that keep a constant 400ppm CO<sub>2</sub> level to allow CO<sub>2</sub> to be diffused from the inside out (sinks)</li>
                <li>Vents that actively diffuse CO<sub>2</sub> with a CO<sub>2</sub> background level of &lt;300ppm.</li>
            </ol>
            <p>The experiments in the Khalil, Wainer, Dunnigan paper were done with 10 variations in the layout of the occupants and sources. A sensor was placed on the right and left walls respectively and the results were plotted to show a change in the detected CO<sub>2</sub> levels over time. The results show that the flow of CO<sub>2</sub> is heavily dependent on the position of the sinks. It also backs up the fact that the CO<sub>2</sub> sensors are noticeably sensitive to the configuration of the room as well as the locations of the impermeable walls. The experiments determined that the latency is dependent on the positioning of the sensors and the flow of CO<sub>2</sub> in the room. Therefore, each real-life room must be modeled and simulated to accurately determine the ideal location of the sensors.</p>
            <h2>Proposed Model</h2>
            <p>I propose a model using similar specifications to simulate the effects of glass barriers placed between students as is used in some school districts as precautions against COVID-19. The teacher and students will be modeled as CO<sub>2</sub> sources, and the glass barriers will be modelled as 3-sided impermeable walls around each student. There will be four open windows and an open door modelled as CO<sub>2</sub> sinks and some vents distributed around the classroom.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-noBarrier/screenshots/layout.png" alt="No Barrier Layout"/>
                <img style={styles.halfImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-barrier/screenshots/layout.png" alt="Barrier Layout"/>
            </div>
            <p style={styles.subtitle}>Figures 1 & 2: The layout of the classroom without and with barriers</p>
            <p>The simulation will first be run without the glass barriers, and the results recorded and visualized before rerunning the simulation after the addition of the 3-sided glass barriers. The aim of this is to determine whether the barriers have an effect on the spread of exhaled air in a classroom.</p>

            <h2>Formal Specification</h2>
            <p>&emsp;CO2 = &lt; Xlist, Ylist, S, X, Y, η, N, &#123; t1, t2 &#125;, C, B, Z &gt;,
                <br/>
                &emsp;&emsp;Where:
                <br/>
                &emsp;&emsp;&emsp;Xlist = Ylist = &#123; Ø &#125;;
                <br/>
                &emsp;&emsp;&emsp;S = type: &#123; 0, 1, 2, 3, 4, 5 &#125; and conc: &#123; double &#125;;
                <br/>
                &emsp;&emsp;&emsp;X = Y = Ø;
                <br/>
                &emsp;&emsp;&emsp;η = 5;
                <br/>
                &emsp;&emsp;&emsp;N = &#123; (0,0), (-1, 0), (0, -1), (0, 1), (1, 0) &#125;;
                <br/>
                &emsp;&emsp;&emsp;t1 = 23;
                <br/>
                &emsp;&emsp;&emsp;t2 = 33;
                <br/>
                &emsp;&emsp;&emsp;C = &#123; Cij/ i∈[0,23] ˄j∈[0,33] &#125;;
                <br/>
                &emsp;&emsp;&emsp;B = &#123; Ø &#125;
            </p>
            <h2>Experiments and Results</h2>
            <p>The first experiment is performed without the addition of the glass barriers between students. The classroom is set up as a 23 cell by 33 cell area, with impermeable walls forming the boundary. One of the walls has an open door (2 cells) near the corner, while the opposite wall has four windows (2 cells each). The teacher is a source that is placed at the middle-front of the classroom. There are 20 students in 4 rows of five spaced equally away from each other. A reasonable amount of vents are placed around the classroom.</p>
            <div style={{textAlign: 'center'}}><img src={'/projectFiles/modelingCO2Classroom/legend.png'} /></div>
            <p style={styles.subtitle}>Figure 3: Color legend for CO<sub>2</sub> levels [Khalil, Wainer, Dunnigan]</p>
            <p>We can see that although the room starts out without much CO<sub>2</sub>, it quickly starts to fill up. The door, windows and vents can’t seem to keep up with the CO<sub>2</sub> production from 21 people in a small space.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-noBarrier/screenshots/noBarrier_start.png" alt="No Barrier Start"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-noBarrier/screenshots/noBarrier_middle.png" alt="No Barrier Middle"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-noBarrier/screenshots/noBarrier_end.png" alt="No Barrier End"/>
            </div>
            <p style={styles.subtitle}>Figures 4-6: CO<sub>2</sub> levels at the start, middle, and end of experiment 1</p>
            <p>The second experiment was done after adding a barrier for each student that surrounds them on three sides (one cell thick). The results show that the barriers really stifle the flow of CO<sub>2</sub> from student to student, and keeps each student's CO<sub>2</sub> output localized near them. On a closer look, it seems that the results are too perfect, perhaps the thickness of the barriers are not allowing the diffusion of CO<sub>2</sub> in the model to behave as it would in a real-life scenario.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-barrier/screenshots/barrier_start.png" alt="Barrier Start"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-barrier/screenshots/barrier_middle.png" alt="Barrier Middle"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-barrier/screenshots/barrier_end.png" alt="Barrier End"/>
            </div>
            <p style={styles.subtitle}>Figures 7-9: CO<sub>2</sub> levels at the start, middle, and end of experiment 2</p>
            <p>The third experiment was done after removing the unneeded parts of the barriers. Since the model is using a Von Neumann neighborhood, the corners of the barriers are unused and removing them might give us better insight into how the CO<sub>2</sub> levels change with more free space in the model.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-smallerBarrier/screenshots/layout.png" alt="Smaller Barrier Layout"/>
            </div>
            <p style={styles.subtitle}>Figure 10: Layout of classroom with adjusted barriers</p>
            <p>The results show that CO<sub>2</sub> is still spreading all around the classroom, albeit slower than without the barriers. An interesting result is that the teacher at the front of the classroom was much more protected from the student’s CO<sub>2</sub> when any barrier was present.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-smallerBarrier/screenshots/smallerBarrier_start.png" alt="Smaller Barrier Start"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-smallerBarrier/screenshots/smallerBarrier_middle.png" alt="Smaller Barrier Middle"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-smallerBarrier/screenshots/smallerBarrier_end.png" alt="Smaller Barrier End"/>
            </div>
            <p style={styles.subtitle}>Figures 11-13: CO<sub>2</sub> levels at the start, middle, and end of experiment 3</p>
            <p>After these results, I decided to perform two more experiments with fewer students in the classroom. This might give us more insight into how effective the barriers are while also avoiding the issue of the crowded cells in the classroom not allowing the flow of CO<sub>2</sub> to be modeled correctly. The fourth experiment was done after removing two rows of students bringing the total number of students to twelve. The barriers will be the smaller ones used in the last experiment for the same reasons as mentioned before.</p>

            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-fewerStudents/screenshots/layout.png" alt="Fewer Students Layout"/>
            </div>
            <p style={styles.subtitle}>Figure 14: Layout of classroom after removing two rows of students</p>
            <p>The fifth experiment was done after removing every alternating student in the classroom. This helps keep a greater distance between each student. This further reduces the number of students in the classroom to ten.</p>

            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-staggeredStudents/screenshots/layout.png" alt="Staggered Students Layout"/>
            </div>
            <p style={styles.subtitle}>Figure 15: Layout of classroom after alternating students</p>
            <p>The results of these experiments when taken together show that with sufficient ventilation, the students are more protected, and the mixing of CO<sub>2</sub> between students is slower when they are seated in rows with greater spacing between rows (experiment 4). This might be due to the fact that a 3-sided barrier almost acts as a 4-sided barrier when the student sitting behind also has a barrier facing the same way.</p>

            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-fewerStudents/screenshots/fewerStudents_start.png" alt="Fewer Students Start"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-fewerStudents/screenshots/fewerStudents_middle.png" alt="Fewer Students Middle"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-fewerStudents/screenshots/fewerStudents_end.png" alt="Fewer Students End"/>
            </div>
            <p style={styles.subtitle}>Figures 16-18: CO<sub>2</sub> levels at the start, middle, and end of experiment 4</p>

            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-staggeredStudents/screenshots/staggeredStudents_start.png" alt="Staggered Students Start"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-staggeredStudents/screenshots/staggeredStudents_middle.png" alt="Staggered Students Middle"/>
                <img style={styles.thirdImage} src="https://github.com/ZeinHajjAli/Cell-DEVS-Classroom-CO2/raw/master/classroom-staggeredStudents/screenshots/staggeredStudents_end.png" alt="Staggered Students End"/>
            </div>
            <p style={styles.subtitle}>Figures 19-21: CO<sub>2</sub> levels at the start, middle, and end of experiment 5</p>

            <h2>Conclusion</h2>
            <p>It can be seen from the results that adding barriers around each student in a classroom might not be enough to stop the spread of their CO<sub>2</sub>/breath around to other students. This does not mean that they do not slow the spread of viruses like COVID-19 since the virus is most commonly passed through water particles or droplets during exhalation. We can see, however, that the teacher who is standing up at the front of the classroom seems to be the most protected. This is due both to the more isolated position they are in, as well as the 3-sided nature of the student’s barriers, which are open only at the side facing away from the teacher. It can also be seen that when using the barriers, the students at the back of the class (away from the teacher) will be more exposed to the rest of the student’s CO<sub>2</sub>. This is probably because the barriers only allow for diffusion in one direction. More work can be done on this model, including testing semi-permeable barriers and adjusting the scaling of the model so as to make the barriers significantly thinner (this should make the model more accurate to real-life situations).</p>
        </Layout>
    )
}
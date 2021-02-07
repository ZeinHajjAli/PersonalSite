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

export default function maskEffectsModel() {
    return (
        <Layout>
            <SiteHelmet titleText={"MEVP"} />
            <Header headerText={'Effects of Different Masks on the Spread of Viral Particles'} />

            <p>The following project was made as a solution to an assignment for one of my graduate studies courses in the fall of 2020. The project's Github repo can be found <ProjectLink to={'https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects'}>here</ProjectLink>. A pdf version of this report can be found <ProjectLink to={'/projectFiles/maskEffectsModel/ZeinHajjAli-MEVP-FinalReport.pdf'}>here.</ProjectLink></p>

            <h2>Abstract</h2>
            <p>Due to the ongoing COVID-19 pandemic, a number of different masks are being used to help slow or stop the spread of the virus. A paper published by Ueki, et al. has shown the effects of different masks in the spread of COVID-19 from person to person in a one-to-one scenario. Using the findings of that research and utilizing a model that was adapted from one that measures the diffusion of viral particles in a room allows us to create scenarios that investigate the effect of these masks in a larger environment. The results show that more emphasis should be placed on the type of mask being worn by someone with symptoms or a suspicion of having the disease than the type of mask being worn by susceptible people trying to protect themselves.</p>

            <h2>Introduction</h2>
            <p>A paper published by <a href="https://doi.org/10.1128/msphere.00637-20">Ueki, et al.</a> studied the efficiency of different masks to protect against the airborne transmission of COVID-19 particles. The researchers simulated the creation of the aerosolized particles and droplets and used a ventilator to simulate the inhalation of the particles by a receiver. They measured the effects of a mild cough, at a flow speed of 2 m/s for 20 minutes and placed the two simulated persons 50 cm apart. They tested the effects of different combinations of the spreader and receiver wearing the masks. The efficacy graph can be seen in (Figure 1).</p>

            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="/projectFiles/maskEffectsModel/receiverMaskGraph.png" alt="Receiver Mask Efficacy Graph"/>
                <img style={styles.halfImage} src="/projectFiles/maskEffectsModel/spreaderMaskGraph.png" alt="Spreader Mask Efficacy Graph"/>
            </div>
            <p style={styles.subtitle}>Figure 1: Mask Efficacy Graphs (Ueki et al.)</p>

            <p>The Advanced Real-Time Simulation Laboratory (ARSLab) at Carleton University has built a <a href="https://github.com/SimulationEverywhere-Models/indoor_virus_spread/tree/indoor_vent_2d/indoor_spread_2D">model</a> that simulates the movement of viral particles as well as the infection rates in a closed environment. This model uses the values found in the aforementioned paper for the efficiency of each type of mask used in the simulated environment. This project aims to explore the results of a few simulated scenarios using the model built by the ARSLab and evaluate the findings.</p>
            <p>The scenarios explored in this project all have to do with a restaurant environment (Figure 2). The first batch of scenarios occur when all the tables in the restaurant are fully occupied and wearing the same type of mask. The second batch keeps the room fully occupied, but the spreader wears a different type of mask than all the receivers do.</p>

            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="/projectFiles/maskEffectsModel/Layout.png" alt="Layout"/>
            </div>
            <p style={styles.subtitle}>Figure 2: Layout of the Restaurant Environment</p>

            <p>The scenarios are built as JSON files that describe the size of the scenario environment, the initial values of each cell in the scenario, and some variables including the breathing rate, the coughing rate, and the efficiency of each mask. The JSON scenario is then run in the <a href="https://github.com/SimulationEverywhere/Cell-DEVS-Cadmium-Simulation-Environment">Cadmium Cell-DEVS Simulation Environment</a> to produce two log files, one containing the messages sent to/from each cell at every timestep, and the other containing the state of each cell. The scenario can then be visualized using the <a href="http://206.12.94.204:8080/arslab-web/1.2/app-simple/index.html">ARSLab DEVS Web Viewer</a> and the simulation can be recorded.</p>

            <h2>Formal Model</h2>
            <p>&emsp; CO2 = &lt; Xlist, Ylist, S, X, Y, η, N, &#123; t1, t2 &#125;, C, B, Z &gt;,
                <br/>
                &emsp;&emsp; Where:
                <br/>
                &emsp;&emsp;&emsp; Xlist = Ylist = &#123; Ø &#125;;
                <br/>
                &emsp;&emsp;&emsp; S = type: &#123; 0, 1, 2, 3, 4, 5, 6, 7, 8 &#125; and <br/>&emsp;&emsp;&emsp;&emsp; mask: &#123; NO_MASK, COTTON, SURGICAL, N95, N95_FIT &#125; and<br/>&emsp;&emsp;&emsp;&emsp; num_particles: &#123; integer &#125; and<br/>&emsp;&emsp;&emsp;&emsp; inhaled_particles: &#123; integer &#125;;
                <br/>
                &emsp;&emsp;&emsp; X = Y = Ø;
                <br/>
                &emsp;&emsp;&emsp; η = 5;
                <br/>
                &emsp;&emsp;&emsp; N = &#123; (0,0), (-1, 0), (0, -1), (0, 1), (1, 0) &#125;;
                <br/>
                &emsp;&emsp;&emsp; t1 = 28;
                <br/>
                &emsp;&emsp;&emsp; t2 = 31;
                <br/>
                &emsp;&emsp;&emsp; C = &#123; Cij/ i∈[0,28] ˄j∈[0,31] &#125;;
                <br/>
                &emsp;&emsp;&emsp; B = &#123; Ø &#125;
            </p>

            <h2>Models</h2>
            <p>The model built by the ARSLab is a coupled Cell-DEVS model that has 9 different cell types: air cells, impermeable walls, doors, tables, chairs, ventilation, source (emitter) cells, receiver (susceptible) cells, and infected cells. The cell state includes a counter to keep track of the time step, the cell type, the number of viral particles in the cell, the flow direction, and some variables used for calculating the appropriate number of particles to emit or diffuse to neighboring cells. The source and receiver cells also make use of a state variable that keeps track of the type of mask that cell is using. Each type of mask has a ‘shed’ variable and an ‘efficiency’ variable. The shed variable is the percentage of the viral particles that are allowed to pass through the mask from the emitter out to the environment. The efficiency variable is the percentage of the viral particles that are allowed to pass through the mask from the environment into the person wearing the mask. The processes that occur when advancing a timestep for each of the cell types are as follows:</p>
            <ul>
                <li><i>Air:</i> The air cell calculates the direction of the airflow at that time step. It then loops through the cells in it’s neighbourhood and calculates the number of particles that will be given to it from those neighbours. It then computes the number of viral particles it will be sending to its neighbours, and increases it’s counter variable.</li>
                <li><i>Impermeable Walls:</i> Always has 0 viral particles and does not do anything dynamic. The impermeable walls change the direction and weight of the airflow of surrounding cells since they are seen as the edges of the environment.</li>
                <li><i>Doors:</i> Same as the impermeable walls in this version of the model. Unused in the scenarios explored in this project.</li>
                <li><i>Tables:</i> Performs the same function as the air cells in this version of the model. The table cells are mostly used for the visualization and organization of the chair and person cells. Viral particles pass through them in the same way as the air cells.</li>
                <li><i>Chairs:</i> The chair cells allow viral particles to pass across them in the same way as the air and table cells in this version of the model. The chair cells have an added function of spawning the source and receiver cells at a given start time, and the cells will have either a source or receiver type at the next time step. In these scenarios, the start time is 0, so the chairs will instantly spawn the needed person cells.</li>
                <li><i>Ventilation:</i> The main behavior of the ventilation cells is to change the direction and therefore the weights of the airflow of the surrounding cells away from it.</li>
                <li><i>Source (Emitter) Cells:</i> The source cell first calculates the direction of the airflow at that time step, and then loops through the cells in its neighbourhood to calculate the number of particles it will be given from those neighbours. Depending on the preset breathing, speaking, and coughing rate, it might then emit some viral particles for each of those behaviours. The number of particles emitted depends on both the type of action as well as the shed of the type of mask being worn by the emitter.</li>
                <li><i>Receiver (Susceptible) Cells:</i> The receiver cell first calculates the direction of the airflow at that time step, and then loops through the cells in its neighbourhood to calculate the number of particles it will be given from those neighbours. Depending on the preset breathing rate, it might then inhale some particles. The number of particles inhaled depends on the efficiency of the type of mask being worn by the receiver. If at some point the receiver has inhaled a total number of particles greater than or equal to a preset infection threshold, the cell will become a newly infected cell at the next time step.</li>
                <li><i>Newly Infected Cells:</i> The newly infected cells are cells that used to be receivers, but have crossed a threshold of inhaled particles. These infected cells continue to behave the same way as the receiver cells and do not have the ability to emit particles themselves.</li>
            </ul>
            <p>The color-coded legend can be seen in (Figure 3)</p>

            <div style={styles.inlineImages}>
                <img style={styles.thirdImage} src="/projectFiles/maskEffectsModel/legend1.png" alt="Color Legend"/>
            </div>
            <p style={styles.subtitle}>Figure 3: Color Legend</p>

            <p>The first batch of scenarios explored in this paper occur when the restaurant environment is fully occupied (Figure 4) and all the cells representing people are wearing the same type of mask. The only source cell is placed in the middle of the room so as to demonstrate the effects of the airflow direction. The scenario is run multiple times changing only the type of mask all the persons in the room are wearing.</p>
            
            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="/projectFiles/maskEffectsModel/figure4.png" alt="Layout of the Scenarios"/>
            </div>
            <p style={styles.subtitle}>Figure 4: Layout of the Scenarios</p>

            <p>The second batch of scenarios test the effects of different masks in a larger environment. The restaurant’s tables will be fully occupied, with the only source cell placed in the same position as in the first batch of scenarios. The source cell will be wearing a mask that is of a different type than the mask being worn by all of the receiver cells. The scenario is run multiple times while only changing the type of masks being worn by the source and the receivers.</p>
            <p>When visualizing the results, three views are shown. The view on the right shows the type of each cell at that point in time as coded in the legend above (Figure 3). The view in the middle shows the concentration of viral particles in the room at each cell, where as the shade of red gets darker, the concentration is higher (Figure 5). The view on the left shows the amount of viral particles inhaled by each receiver or newly infected cell. As the shade of red gets darker, the cell gets closer to the infection threshold.</p>

            <div style={styles.inlineImages}>
                <img style={styles.halfImage} src="/projectFiles/maskEffectsModel/legend2.png" alt="Viral Color Legend"/>
            </div>
            <p style={styles.subtitle}>Figure 5: Color legend for viral particle concentration in the simulations</p>

            <p>Four types of masks were used in the model, and one option for no mask. The mask options with their preset shed and efficiency values can be seen in (Table 1).</p>

            <table>
                <thead>
                    <tr>
                        <th><strong>Mask Type</strong></th>
                        <th><strong>Shed</strong></th>
                        <th><strong>Efficiency</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>No Mask</td>
                        <td>100%</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Cotton</td>
                        <td>24%</td>
                        <td>17%</td>
                    </tr>
                    <tr>
                        <td>Surgical</td>
                        <td>27%</td>
                        <td>47%</td>
                    </tr>
                    <tr>
                        <td>Unfitted N95</td>
                        <td>5%</td>
                        <td>57%</td>
                    </tr>
                    <tr>
                        <td>Fitted N95</td>
                        <td>0%</td>
                        <td>79%</td>
                    </tr>
                </tbody>
            </table>
            <p style={styles.subtitle}>Table 1: Mask types with shed and efficiency values</p>

            <h2>Simulation Results</h2>

            <h3>First Batch: Full Occupancy, Same Mask Type</h3>
            <p>Running the first batch of scenarios, the results turn out mostly as expected. The scenarios were run for 6850 time steps each, since that was the maximum that could be visualized using the Web Viewer tool. When everyone in the restaurant environment was not wearing any mask (Figures 6-8), the viral particles spread around the room easily, and by the end of the scenario (Figure 8), twelve of the susceptible cells had turned into newly infected cells, and at least three more were close to reaching the infection threshold. The particles were flowing more towards the top of the visualization, due to the ventilation placed on the bottom end of it.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/NO_MASK/screenshots/start.png" alt="No Mask Start"/>
            </div>
            <p style={styles.subtitle}>Figure 6: Visualization of no masks after the first viral particle spread</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/NO_MASK/screenshots/middle.png" alt="No Mask Middle"/>
            </div>
            <p style={styles.subtitle}>Figure 7: Visualization of no masks halfway through the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/NO_MASK/screenshots/end.png" alt="No Mask End"/>
            </div>
            <p style={styles.subtitle}>Figure 8: Visualization of no masks at the end of the simulation</p>

            <p>When everyone in the restaurant was wearing cotton masks (Figures 9-11), the spread of the particles was significantly slowed down for both the exhalation as well as inhalation. By the end of the scenario (Figure 11), only four of the susceptible cells had turned into newly infected cells, and one more susceptible cell was approaching the threshold of infection. As with the first scenario, the particles were spread with more bias towards the top of the visualization since the airflow is the same in both scenarios.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/COTTON/screenshots/start.png" alt="Cotton Mask Start"/>
            </div>
            <p style={styles.subtitle}>Figure 9: Visualization of cotton masks after the first viral particle spread</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/COTTON/screenshots/middle.png" alt="Cotton Mask Middle"/>
            </div>
            <p style={styles.subtitle}>Figure 10: Visualization of cotton masks halfway through the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/COTTON/screenshots/end.png" alt="Cotton Mask End"/>
            </div>
            <p style={styles.subtitle}>Figure 11: Visualization of cotton masks at the end of the simulation</p>

            <p>When the scenario was run with everyone in the restaurant wearing surgical masks (Figures 12-14), the resulting visualization was found to be nearly identical to the previous (cotton) visualization, with four of the susceptible cells having turned into newly infected cells, and one more susceptible cell almost reaching the infection threshold. This is probably due to the fact that even though the efficiency of the cotton masks is 17% and that of the surgical masks is 47%, the shed variable of both is very similar at 24% and 27% for cotton masks and surgical masks respectively. Therefore, emitters wearing either type of masks will expel around the same amount of viral particles.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/SURGICAL/screenshots/start.png" alt="Surgical Mask Start"/>
            </div>
            <p style={styles.subtitle}>Figure 12: Visualization of surgical masks after the first viral particle spread</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/SURGICAL/screenshots/middle.png" alt="Surgical Mask Middle"/>
            </div>
            <p style={styles.subtitle}>Figure 13: Visualization of surgical masks halfway through the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/SURGICAL/screenshots/end.png" alt="Surgical Mask End"/>
            </div>
            <p style={styles.subtitle}>Figure 14: Visualization of surgical masks at the end of the simulation</p>

            <p>As for the scenarios when everyone in the restaurant is wearing an N95 mask (Figure 15), it was found that both the fitted and unfitted masks allowed the emitter to let out so few particles that they didn’t show up on the visualization. This essentially meant that in the context of the model used in this project, both the unfitted N95 mask and the fitted N95 mask performed the same function when the source cells were the ones using them. Since no particles were emitted, there were no particles circulating in the air for the receivers to inhale and therefore no cell was turned into a newly infected cell. This requires further study, and some of the scenarios in the second batch will look into it with more detail.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch1/N95/screenshots/all.png" alt="N95 Mask All"/>
            </div>
            <p style={styles.subtitle}>Figure 15: Visualization fo unfitted N95 and fitted N95 over the whole simulation duration</p>

            <h3>Second Batch: Full Occupancy, Different Mask Types</h3>
            <p>The second batch of scenarios was run with the sources having one type of mask while all of the receivers having another. This resulted in twenty different scenarios. Eight of those scenarios have the source wearing either an unfitted N95 or a fitted N95, and since they both don’t allow for essentially any particles to be emitted in this version of the model, the results of all eight of those scenarios can be discarded as they are identical to the last scenario in the first batch.</p>
            <p>The remaining twelve scenarios consist of four scenarios where the emitter is wearing no mask while the receivers are wearing one of the four masks, four scenarios where the emitter is wearing a cotton mask while the receivers are either wearing no mask or one of the other masks, and four scenarios where the emitter is wearing a surgical mask while the receivers are either wearing no mask or one of the other masks.</p>
            <p>Going through the visualized results of the scenarios where the emitter doesn’t wear any mask (Figures 16-19) clears up a few misconceptions about the efficacy of mask wearing. It seems that if the person spreading the viral particles is not wearing a mask, it is just a matter of time before the people around them will reach the infection threshold. We can see that when comparing the result of the first scenario in the first batch (no one wearing a mask) to a couple of the scenarios where the receivers are wearing masks, the same susceptible cells become newly infected cells or are close to the threshold. This is true even for receivers wearing a fitted N95 mask which has quite a high efficiency (79%).</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-NO_MASK/NO_MASK-COTTON/screenshots/end.png" alt="No Mask/Cotton Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 16: Visualization of emitter/no mask and receiver/cotton at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-NO_MASK/NO_MASK-SURGICAL/screenshots/end.png" alt="No Mask/Surgical Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 17: Visualization of emitter/no mask and receiver/surgical at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-NO_MASK/NO_MASK-N95/screenshots/end.png" alt="No Mask/N95 Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 18: Visualization of emitter/no mask and receiver/unfitted N95 at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-NO_MASK/NO_MASK-N95_FIT/screenshots/end.png" alt="No Mask/N95 fitted Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 19: Visualization of emitter/no mask and receiver/fitted N95 at the end of the simulation</p>

            <p>There are twelve cells that turn into newly infected cells when the receivers are wearing cotton masks (Figure 16), eleven when the receivers are wearing surgical or unfitted N95 masks, and nine when the receivers are wearing fitted N95 masks. The number of cells that are at or near the infection threshold stays constant at fourteen when the receivers are wearing cotton, surgical, or unfitted N95 masks and goes down to twelve when they are wearing fitted N95  masks.</p>
            <p>The scenarios where the emitter is wearing either a cotton or a surgical mask (Figures 20-21) have very similar results to each other, since the shed variable of both those mask types are very close at 24% and 27% respectively.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-COTTON/COTTON-NO_MASK/screenshots/end.png" alt="Cotton/No Mask Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 20: Visualization of emitter/cotton and receiver/no mask at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-SURGICAL/SURGICAL-NO_MASK/screenshots/end.png" alt="Surgical/No Mask Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 21: Visualization of emitter/surgical and receiver/no mask at the end of the simulation</p>

            <p>When comparing the results of the use of different mask types for receivers when the emitter is wearing either a cotton or surgical mask (Figures 21-23) we can see that the number of susceptible cells that turn into newly infected cells are the same, and the number of susceptible cells that are close to the infection threshold are also unchanged. Receivers using a well fitted N95 mask do not have a greater advantage or increase safety level than those who are wearing no mask in this case.</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-SURGICAL/SURGICAL-COTTON/screenshots/end.png" alt="Surgical/Cotton Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 22: Visualization of emitter/surgical and receiver/cotton at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-SURGICAL/SURGICAL-N95/screenshots/end.png" alt="Surgical/N95 Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 23: Visualization of emitter/surgical and receiver/unfitted N95 at the end of the simulation</p>

            <div style={styles.inlineImages}>
                <img src="https://github.com/ZeinHajjAli/Cell-DEVS-Mask-Effects/raw/master/Visualization/Batch2/source-SURGICAL/SURGICAL-N95_FIT/screenshots/end.png" alt="Surgical/N95 fitted Simulation"/>
            </div>
            <p style={styles.subtitle}>Figure 24: Visualization of emitter/surgical and receiver/fitted N95 at the end of the simulation</p>

            <p>The results seem to show that the only thing that matters a significant amount is the type of mask worn by the emitters rather than the type of masks worn by susceptible persons. There is a miniscule difference in the number of inhaled particles depending when only changing the type of mask worn by the susceptible cells.</p>

            <h2>Conclusions</h2>
            <p>It can be seen from the results that the type of mask worn by the infected spreaders is much more important to the safety of everyone than the type of mask worn by the susceptible receivers. Although the better performing masks do make a difference in the number of inhaled particles and in the outcome as a whole, specifically when the emitter doesn’t wear any mask, the use of any type of mask by the source cells has a much greater impact. The limitations of the model mean that both the unfitted and fitted N95 masks return the same results, and that they do not allow for the emission of any particles at all. This is of course not true in a real-world setting, and further study and modifications to the model can be made to better represent this. Another limitation of the test environment is the restriction on the size of the simulation that can be visualized in the Web Viewer. Although the Web Viewer is quite powerful, it still runs inside a browser, and therefore cannot take full advantage of resources to complete larger visualizations. The experiments that were performed revealed that the use of any mask by a spreader is more effective than the use of the best mask by a receiver placed close to them. This can be seen to be in line with the recommendations provided by the <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks">World Health Organization</a> as well as most Public Health Units in that they all advocate the use of any mask not for the safety of oneself, but for the safety of those around them.</p>
        </Layout>
    )
}
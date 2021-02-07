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
        marginLeft: '40pt'
    },
}

const ProjectLink = props => (
    <a style={styles.link} href={props.to} download={props.download}><u>{props.children}</u></a>
)

export default function typicalHomeNetwork() {
    return (
        <Layout>
            <SiteHelmet titleText={"THN"} />
            <Header headerText={'Modeling a Typical Home Network'} />

            <p>The following mini-project was made as a solution to an assignment for one of my graduate studies courses in the fall of 2020. The project's Github repo can be found <ProjectLink to={'https://github.com/ZeinHajjAli/Cadmium-TypicalHomeNetwork'}>here</ProjectLink>. A pdf version of this report can be found <ProjectLink to={'/projectFiles/typicalHomeNetwork/ZeinHajjAli-THN-FinalReport.pdf'}>here.</ProjectLink></p>
        
            <h2>Model Description</h2>
            <p>A typical home network only needs a few devices to fulfill a basic standard of service. Most people use the modem/router combination given to them by their ISP as the main access point. Personal devices are required to communicate with one another as well as send and receive communication from the internet. A lot of the variability in the network comes from the speed of the connections to different servers on the internet</p>
            <p>The model I propose consists of two main components: Personal Devices communicate through the Router, and the netwrok is connected to the internet through the Modem. (see Figure 1)</p>
            <img src="/projectFiles/typicalHomeNetwork/NetworkDiagram.png" alt="Network Diagram"/>
            <p style={styles.subtitle}>Figure 1: Typical Home Network Diagram</p>
            <p>The Personal Device will simulate receiving a userInput (from a file) and sens a request to the Modem/Router Combo.  It will wait to receive a response until a predetermined timeout and resend the same request if not received. If a response is received in time, it will output it as a userResponse and continue to the next userInput.</p>
            <p>The behavior of the Modem is to receive a request and attempt to send it out to the internet. The Modem will have a randomized wait time between receiving a request and sending the request out to the internet to simulate the variable upload speeds. If the randomized wait time is less than the predetermined timeout, the Modem will send a response as an acknowledgment back to the Router to be sent to the Personal Device.</p>
            <p>The role of the Router is to pass on the requests from the Personal Device to the Modem in the Combo as well as the responses from the Modem back to the Personal Device. The Router will have a constant wait time to simulate the processing of the request.</p>
            <p>The Typical Home Network has 1 input and 2 outputs. The userInput input controls when a message is sent from the PersonalDevice. The inetSent output shows the time the Modem sends the message to the internet. The userResponse output shows the time that the personal device receives the acknowledgment of its packet from the modem.The Typical Home Network is made up of 2 components: the PersonalDevice, and the Modem/Router Combo. The Modem/Router Combo can be decomposed into 2 subcomponents, one being a Router, and the other a Modem. The PersonalDevice sends messages to the Combo and receives and acknowledgement that the Modem successfully sent the message to the internet.</p>

            <h2>Formal Specification</h2>
            <p>The formal specification can be found in the full pdf report <ProjectLink to={'/projectFiles/typicalHomeNetwork/ZeinHajjAli-THN-FinalReport.pdf'}>here.</ProjectLink></p>

            <h2>Testing Strategy</h2>
            <p>The atomic models and coupled models will be tested using the “black box” testing method. Test cases are created by adding different combinations of inputs to the test input text files, run the simulation (./TYPICALHOMENETWORK) and check whether the outputs in the output file are as expected.</p>

            <h2>Testing</h2>
            <h3>PersonalDevice - Atomic</h3>
            <p>The PersonalDevice has 2 inputs: userInput, and response. The userInput should be a positive integer. It represents a dummy data value to be sent to the internet. If the userInput is negative, the input is ignored. The userInput triggers the PersonalDevice to send messages to the ModemRouterCombo if the PersonalDevice is passive. If the PersonalDevice was already active, the input is ignored. Response is the acknowledgment that should be received from the ModemRouterCombo when the message is successfully sent to the internet. It should have a packetType of 0 and a data value equal to the data last sent. If the acknowledgment is in the correct format and contains the correct data value, the PersonalDevice sends an output of the data on the userResponse port and then passivates, waiting for the next userInput. If the acknowledgment is not received before the PersonalDevice reaches the timeout, it will resend the same message to the ModemRouterCombo.</p>
            <h3>Router - Atomic</h3>
            <p>The Router has 2 inputs: lanIn, and routerIn. Both lanIn and routerIn inputs must be messages in the format of &#123;packetType, data&125;. The Router outputs any message it receives on lanIn to routerOut as-is, and any message it receives on routerIn on lanOut as-is. It has a preparation time and cannot accept messages while the current message is being prepared.</p>
            <h3>Modem - Atomic</h3>
            <p>The Modem has one input (modemIn). It has a randomized wait time to simulate server speeds when uploading to the internet. If the wait time is less than the Modem’s timeout, it sends back an acknowledgement to the PersonalDevice. It also sends the message out to the inetSent port. </p>
            <h3>ModemRouterCombo - Coupled</h3>
            <p>ModemRouterCombo is a coupled model that consists of Modem and Router atomic models. All requests from the PersonalDevice go to the ModemRouterCombo. Inside the ModemRouterCombo decisions will be made on waitTime of sending the request out to the internet and whether to send back an acknowledgment or not. The Input of ModemRouterCombo is a Message that includes the packetType and the Data. The outputs are the response (acknowledgment) send to the PersonalDevice, and the Message itself sent to the internet via the inetSent port. </p>
            <h3>TypicalHomeNetwork (THN) - Top Model</h3>
            <p>The top model consists of 1 coupled model (ModemRouterCombo) and 1 atomic model (PersonalDevice). The input of the top model should be an integer greater than or equal to 0 which represents a dummy data value to be sent through the modem to the internet. The top model has 2 outputs, userResponse which tells the user that the request was successfully sent from the modem, and inetSent which represents the message sent to the internet. I have created 2 input files for the THN, one of which I will display the outputs of here.</p>

            <p><b>Note: full results and logs are found in the github repo, and explanations are found in the pdf.</b></p>

            <h2>Conclusion</h2>
            <p>The TypicalHomeNetwork model simulated a network according to our specifications and outputted with the expected results. The models that run in the simulator follow the same formal specification that is given in this document. The data being sent to the internet is modeled as a simple integer dummy value for the purposes of this simulation. The THN simulator works as intended.</p>
        </Layout>
    )
}
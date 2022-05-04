import React, { Component } from "react"; // import react
import GoogleMaps from "simple-react-google-maps"; // import Google maps

// create a class for the form and the map
export default class Contact extends Component {
    render() {
        return(
            <div>
                <div id="contact">
                    <h1>Contact</h1>
                </div>
                <div id="text">
                    <h3>Write to us and we will contact you as soon as possible.</h3>
                </div>
                <div id="container"> {/*main container to apply flexbox to the divs*/}
                    <div id="contact-form">
                        <h3>Contact with us</h3>
                        <br></br>
                        <form action="" method="post">       
                            <p>
                            <label for="name" class="place_name">Name
                                <span id="mandatory">*</span>
                            </label>
                                <input type="text" name="introduce_name" id="name" required="required" placeholder=" Write your name"/>
                            </p>
                            <p>
                            <label for="email" class="place_email">Email
                                <span class="mandatory">*</span>
                            </label>
                                <input type="email" name="introduce_email" id="email" required="required" placeholder=" Write your Email"/>
                            </p>
                        
                            <p>
                            <label for="phone" class="place_phone">Phone
                            </label>
                                <input type="tel" name="introduce_phone" id="phone" placeholder="Write your phone"/>
                            </p>    
                        
                            <p>
                            <label for="subject" class="place_subject">Subject
                                <span class="mandatory">*</span>
                            </label>
                                <input type="text" name="introduce_subject" id="subject" required="required" placeholder=" Write a subject"/>
                            </p>    
                        
                            <p>
                            <label for="message" class="place_message">Message
                                <span class="mandatory">*</span>
                            </label>                     
                                <textarea name="introduce_message" class="text_message" id="message" required="required" placeholder=" Put here your message..."></textarea> 
                            </p>                    
                        
                            <button type="submit" name="send_form" id="send"><strong>Send</strong></button>

                            <p class="warning">
                                <span class="mandatory"> * </span>fields are mandatory.
                            </p>          
                    </form>
                    </div>

                    {/*map of google*/}
                    <div className="map">
                        <GoogleMaps
                        apiKey={"AIzaSyAeFkw9qjqzzzfY5-ed4b6Xadp4fQqn-Ks"}
                        style={{ height: "350px", width: "500px" }}
                        zoom={11}
                        center={{
                            lat: 40.4127355,
                            lng: -3.695428
                        }}
                        markers={[
                            { lat: 40.409711, lng: -3.692569 },
                        ]}/>
                    </div>
                    
                    <div id="call-and-social">
                        <h3><i class="fa fa-headset"></i>&nbsp;Call us at</h3>
                        <br></br>
                        <p>Number: xxxxxxxxx</p>
                        <br></br>
                        <h3>Our social networks</h3>
                        <br></br>
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook fa-3x"></i></a>	
                        <a href="https://www.instagram.com/"><i class="fa fa-instagram fa-3x"></i></a>	
                    </div>
                </div>
            </div>
        )
    }
}
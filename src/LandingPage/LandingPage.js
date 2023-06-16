import React from "react"
import './LandingPage.css'


export default function LandingPage() {
  return(
    <container class="landing-page">
      <div class="col-1">
        <h1>facebook</h1>
        <h2>Connect with friends and the <br/>
        world around you on Facebook.</h2>
      </div>
      <div class="col-2">
        <form class="signin-info">
          <input type="text" id="email-phone" name="email-phone"placeholder='Email or phone number'/>
          <br/>
          <input type="text" id="password" name="password" placeholder='Password'/>
          <br/>
          <input type="submit" value="Log In" class="log-in-btn"/>
          <div class="forgot-password">Forgot password?</div>
          <hr/>
          <button class="new-account"><b>Create New account</b></button>
        </form>
        <br/>
        <div class="create-a-page"><b>Create a Page</b> for a celebrity, brand or business.</div>
      </div>
  </container>
  );
}
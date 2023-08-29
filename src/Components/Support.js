import React from 'react'
import '../Components/Support.css'
function Support() {
    return (
        <div className="support-container">
            <header style={{ color: 'blue', fontSize: '40px' }}>Support</header><br></br>
            <h1>Password Recovery</h1>
            <p>If you are unable to log in to your account, please follow the steps which apply to you.</p>

            <h2>I know my registered email and have access to it</h2>
            <p>
                Please go here and request a new password. If it does not arrive in your inbox after several minutes, please check your spam/junk folders. If the password still does not arrive (Hotmail, Live, and Outlook email domains), please click the "contact customer support" button and fill out the form including "I know my registered email and have access, but the email does not arrive" at the top of the inquiry.
            </p>

            <h2>I don't remember my registered email</h2>
            <p>
                Please go here and select "I do not remember the email address registered on my MAL account." An email will be sent to your provided email address with a hint to your registered email. If it does not arrive in your inbox after several minutes, please enter a different email address.
            </p>

            <h2>I know my registered email, but do not have access to it</h2>
            <p>
                Please go here and select "I cannot use the email address registered on my MAL account anymore." The form will use your old password (if your account is still locked from May 2018) and other information from your device to verify your identity. If the form succeeds, you will be sent a new password to your provided email within several minutes.
            </p>

            <h2>No email arrives after completing the form</h2>
            <p>
                Please check your spam/junk folders. If it's not there, please enter a different email address. Hotmail, Live, and Outlook email domains often have problems receiving our emails.
            </p>

            <h2>The email says the form cannot verify my identity</h2>
            <p>
                The form uses your last login information, so please:
                <ul>
                    <li>Try completing the form with all of your devices (mobile, desktop, tablet).</li>
                    <li>Try at all possible locations (work, home, school).</li>
                    <li>Ensure your last password is correct by checking your browser settings for saved passwords (e.g. chrome://settings/passwords in Chrome).</li>
                </ul>
            </p>

            <h2>I tried all my devices, at all locations, and still cannot get a new password</h2>
            <p>
                Please collect any information that we could use to verify your identity. This includes:
                <ul>
                    <li>Receipts from MAL Supporter payments or Manga Store purchases.</li>
                    <li>Other email addresses or social media accounts (Steam, Twitch, Reddit, Discord, Twitter, Last.fm) that you have written publicly on your MAL account ("Also Available At").</li>
                </ul>
                Once you have this information, please click the "contact customer support" button and fill out the form, write "I do not have access to my registered email and the form won't help me" at the top, and include all of this information in your inquiry.
            </p>
        </div>
    );
}

export default Support
import'./sign-up.css'
function SignUp (){
    return (
        <div id='componentOfSignup'>
            <div id='leftPartOfSignup'>
            <h2 id='headerOfSignup'>Sign Up For Newsletters</h2>
            <h5 id='supHeaderOfSignup'>Get E-mail updates about our lasts shop and<p id='specialPargraph'> special offres.</p></h5>
            </div>
            <div id='rightPartOfSignup'>
            <input id='inputOfSignup' type="email" placeholder='Your email address'/>
            <button id='buttonOfSignup'>Submit</button>
            </div>
        </div>
    )
}
export default SignUp
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Join Our VIP List for Special Deals</h1>
        <p>Sign Up & Never Miss a Trend</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;

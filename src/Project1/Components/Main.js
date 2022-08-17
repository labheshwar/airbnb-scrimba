export default function Mid(){
    return (
        <main>
            <h1>Madhur Yadav</h1>
            <p className = "main--work">MERN Stack Developer</p>
            <a href="/" className = "main--website">yo'mama.com</a>
            
            <div className="main--buttons">
                <button className = "main--email">
                    <a href="mailto:madhury571@gmail.com">
                        <img src={require("../Pictures/Gmail.png")} alt="email-icon" className = "main--icons"/>
                        <span>
                            Email
                        </span>
                    </a>
                </button>
                <button className = "main--linkedin">
                    <a href="https://www.linkedin.com/in/madhur-yadav-6s2002/">
                        <img src={require("../Pictures/Linkedin.png")} alt="linkedin-icon" className = "main--icons"/>
                        <span>
                            LinkedIn
                        </span>
                    </a>
                </button>
            </div>

            <div className="main--about">
                <h1>About</h1>
                <p>I am your mom's favourite developer , and a part time problem solver.</p>
            </div>
            <div className="main--interests">
                <h1>Interests</h1>
                <p>Doing your mom, rapping, singing , gaming and researching about every little shit which has nothing to do with my life and career.</p>
            </div>
        </main>
    )
}
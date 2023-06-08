var user_cmd,inc=0,root;
root=document.getElementById("root");
(function(){
    root.insertAdjacentHTML("beforeend",`
        <h1 class='headline'><span>જય શ્રી કૃષ્ણ</span>, I'm vrajesh vadhavana. nice to meet you</h1>
        <nav class='nav-wrapper'>
            <div class='nav-inner-left'>
                <p>Type <span>.help</span> to see all commands</p>    
            </div>
            <div class='nav-inner-right'>
                <div class='nav-foreground'>
                    <p>Foreground_color</p> 
                    <span>::</span>
                    <input type="color" id='foreground-color' oninput='fc()'/> 
                </div>
                <div class='nav-background'>
                    <p>Background_color</p>
                    <span>::</span>
                    <input type="color" id='background-color' oninput='bg()'/>
                </div>
            </div>    
        </nav>
    `)
})();
function new_line(){
    root.insertAdjacentHTML("beforeend",`
    <article class="user-input-wrapper">
        <h2>&gt;</h2>
        <input type="text" class='user-input' autofocus/>
    <article>
    `)
}
new_line();
user_cmd = document.getElementsByClassName("user-input");
window.addEventListener("keypress",check_cmd);
function check_cmd(){
    if(event.key == "Enter"){
        user_cmd[inc].value = (user_cmd[inc].value).trim();
        user_cmd[inc].value = (user_cmd[inc].value).toLowerCase();
        if(user_cmd[inc].value=="cls" || user_cmd[inc].value==".cls"){
            window.location.reload();
        }
        else if(user_cmd[inc].value=="help" || user_cmd[inc].value==".help"){
            root.insertAdjacentHTML("beforeend",`
                <header class="help-wrapper">
                    <div class="help-show-box">
                        <h4>.profile ::</h4>
                        <p>To view my personal details</p>                    
                    </div>
                    <div class="help-show-box">
                        <h4>.skills ::</h4>
                        <p>To view my skills</p>                    
                    </div>
                    <div class="help-show-box">
                        <h4>.education ::</h4>
                        <p>To view my education & qualification</p>                    
                    </div>
                    <div class="help-show-box">
                        <h4>.projects ::</h4>
                        <p>To view my projects that i have made</p>                    
                    </div>
                    <div class="help-show-box">
                        <h4>.cls ::</h4>
                        <p>To clear webpage</p>                    
                    </div>
                    <div class="help-show-box">
                        <h4>.experience ::</h4>
                        <p>To view my experience</p>                    
                    </div>
                </header>
            `)
        }
        else if(user_cmd[inc].value==".experience" || user_cmd[inc].value=="experience"){
            root.insertAdjacentHTML("beforeend",`
                <section class="experience-wrapper">
                    <div class="experience-inner-box">
                        <h2>IANT - Institute of Advance Network Technology</h2>
                        <h4>Role :: <b>Tutor</b></h4>
                        <p>Jan 2022 - Dec 2022</p>
                        <p>Junagadh, Gujarat, India.</p>
                    </div>
                    <div class="experience-inner-box">
                        <h2>Multispan Control Instruments Pvt Ltd.</h2>
                        <h4>Role :: <b>Web Application Engineer</b></h4>
                        <p>Jan 2023 - Present 6 mos</p>
                        <p>Ahmedabad, Gujarat, India.</p>
                    </div>
                </section>
            `)
        }
        else if(user_cmd[inc].value==".skill" || user_cmd[inc].value=="skill" || user_cmd[inc].value=="skills" || user_cmd[inc].value==".skills"){
            root.insertAdjacentHTML("beforeend",`
                <section class="skill-wrapper">
                    <div class="skill-inner-icon">
                        <i class="fa-brands fa-html5" title="HTML5"></i>
                        <i class="fa-brands fa-css3-alt" title="CSS3"></i> 
                        <i class="fa-brands fa-square-js" title="JavaScript"></i> 
                        <i class="fa-brands fa-bootstrap" title="Bootstrap"></i>
                        <i class="fa-brands fa-node-js" title="Node.js"></i>
                        <img src="./images/jquery.png" alt="jquery" title="jQuery"/>
                        <img src="./images/c.png" alt="c" title="C++"/>  
                        <i class="fa-brands fa-react" title="React & React Native"></i>
                        <i class="fa-brands fa-git-alt" title="Git"></i>
                        <i class="fa-brands fa-github" title="GitHub"></i>
                        <i class="fa-solid fa-pepper-hot fa-flip-horizontal" title="Flask"></i>
                        <i class="fa-brands fa-python" title="Python"></i>
                        <img src="./images/electron.svg" alt="electron" title="Electron">
                        <img src="./images/mongodb.png" alt="mongodb" title="MongoDB"/>    
                    </div>
                    <p>"I can build mobile-applications, web-applications and softwares using these technologies and currently i am learing how to create Utility and AV softwares"</p>
                </section>
            `)
        }
        else if(user_cmd[inc].value==".education" || user_cmd[inc].value=="education"){
            root.insertAdjacentHTML("beforeend",`
                <section class="education-wrapper">
                    <div class="education-inner-info">
                        <h2>Institute :: HarvardX</h2>
                        <h4>Subject :: Computer Science for Programming</h4>
                        <p>Duration :: Apr 2021 - May 2023</p>    
                    </div>
                    <div class="education-inner-info">
                        <h2>Institute :: Hindi Technical</h2>
                        <h4>Subject :: Web development</h4>
                        <p>Duration :: Feb 2020 - Jan 2021</p>  
                    </div>
                    <div class="education-inner-info">
                        <h2>Institute :: Adarsh Education School</h2>
                        <h4>Primary education</h4>
                        <p>Duration :: June 2005 - Apr 2017</p>
                    </div>
                    <div class="education-inner-info">
                        <h2>Institute :: IANT - Institute of Advance Network Technology</h2>
                        <h4>Subject :: programming languages, computer Hardware and network</h4>
                        <p>Duration :: Jun 2017 - Dec 2019</p>
                    </div>
                </section>
            `)
        }
        else if(user_cmd[inc].value==".profile" || user_cmd[inc].value=="profile"){
            root.insertAdjacentHTML("beforeend",`
                <section class="profile-wrapper">
                    <div class="profile-inner-left">
                        <img src="./images/profile.png" alt="Profile_Logo"/>
                    </div>
                    <div class="profile-inner-right">
                        <div class="profile-inner-box">
                            <h4>Fullname ::&nbsp;</h4>
                            <p>Vadhavana Vrajesh Nileshkumar</p>
                        </div>
                        <div class="profile-inner-box">
                            <h4>Date Of Birth ::&nbsp;</h4>
                            <p>05/24/2001</p>
                        </div>
                        <div class="profile-inner-box">
                            <h4>About ::&nbsp;</h4>
                            <p>I like to solve errors, and also like to gain knowledge everday.</p>
                        </div>
                        <div class="profile-contact">
                            <a href="tel:9409495208"><i class="fa-solid fa-phone"></i></a>
                            <a href="https://github.com/VrajeshVadhavana"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto://mailto:vrajeshvadhavana@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                            <a href="https://wa.me/9409495208"><i class="fa-sharp fa-brands fa-whatsapp"></i></a> 
                            <a href="https://www.instagram.com/vrajesh_vadhavana"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <div class="profile-inner-box">
                            <h4>Address ::&nbsp;</h4>
                            <p>"kandarpvilla", nr. navyug school, hirapara vadi, dhoraji.</p>
                        </div>
                    </div>
                </section>
            `)
        }
        else if(user_cmd[inc].value=="projects" || user_cmd[inc].value == ".projects" || user_cmd[inc].value == ".project" || user_cmd[inc].value == "project"){
            root.insertAdjacentHTML("beforeend",`
                <section class="project-wrapper">
                    <div class="project-inner-wrapper">
                    <img src="./images/japmala.png" alt="japmala">
                        <div class="project-info">
                            <h2>Japmala</h2>
                            <h4>Use of 'Japmala' counter is to keep count of each mala to 108.</h4>
                            <a href="https://github.com/VrajeshVadhavana"><i class="fa-brands fa-github"></i></a>    
                            <p>Built with :: React Native, React, JSX</p>
                        </div>
                    </div>
                    <div class="project-inner-wrapper">
                    <img src="./images/talk.png" alt="DTC">
                    <div class="project-info">
                            <h2>Talk With Me</h2>
                            <h4>Use of 'Talk with me' is to direct chat with me.</h4>
                            <a href="https://github.com/VrajeshVadhavana"><i class="fa-brands fa-github"></i></a>    
                            <p>Built with :: React, React Native, JSX</p>
                        </div>
                    </div>
                    <div class="project-inner-wrapper" id="resp">
                    <img src="./images/cricket-score-counter.PNG" alt="cricket-score-counter"> 
                    <div class="project-info">
                            <h2>Cricket Score Counter</h2>
                            <h4 class="mg">Use of 'cricket score counter' is to count cricket score with accuracy</h4>
                            <a href="https://github.com/VrajeshVadhavana"><i class="fa-brands fa-github mgb"></i></a>    
                            <p>Built with :: HTML, CSS, JavaScript</p>
                        </div>
                    </div>
                    <div class="project-inner-wrapper-2">
                    <img src="./images/iiot-dashboard.PNG" alt="iiot-dashboard">
                        <div class="project-info">
                            <h2>IIoT Dashboard</h2>
                            <h4 class="mg">Use of 'IIoT dashboard' is to monitor live instruments and their gateway status.</h4>
                            <p>Built with :: HBS, CSS, JavaScript, Node.js, API and WS</p>
                        </div>
                    </div>
                </section>
            `)
        }
        else{
            root.insertAdjacentHTML("beforeend",`
            <h3><b>'${user_cmd[inc].value}'</b> is not recognized as an internal command</h3>
            `)
        }
        new_line();
        inc++;
        user_cmd[inc].focus();
    }
}

function fc(){
    $(document).ready(function(){
        $("*").css("color",document.getElementsByTagName("input")[0].value);
    })
}      
function bg(){
    $(document).ready(function(){
        $("*").css("background-color",document.getElementsByTagName("input")[1].value);
    })
}    
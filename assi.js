const mainDiv = document.getElementById("main");

function generateLine(msg,pref){
    const h2 = document.createElement("h2");
    h2.style.backgroundColor="lightseagreen";
    const h4 = document.createElement("h4");
    h2.innerText = msg;
    h4.innerText = pref;

    mainDiv.appendChild(h2);
    mainDiv.appendChild(h4);
}

generateLine(`HTML :`,`-HTML is a Hyper Text Markup Language.HTML is a standard markup language for creating Web Pages`)
generateLine(`CSS :`,`CSS is the acronyn of "cascadings style".CSS is a computer language for laying out and structuring Web pages (HTML OR XML). `)
generateLine(`JavaScript :`,`JavaScript (JS) is a cross-platform ,object-oriented programming language used by developers to make web pages interactive.`)
generateLine(`React.js :`,`React is Javascript library developed by Facebook which ,among other things,was used to bulid Instagram com.`)
generateLine(`Node.js :`,`Node.js is a single-threaded ,open-source,cross-platform runtine environment for building fast and scable server-side and netwoking applicatins`)
generateLine(`MongoDB :`,`-MongoDB is built on scale-out architecture that has become popular with developer of all kinds for developing scalable applications with evolving data schemas.`)
generateLine(`GitHub :`,`-GitHub is a code hosting platform for version control and collaboration.It lets you and others work togehter on projects from anywhere.`)
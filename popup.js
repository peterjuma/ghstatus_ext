// Future JavaScript will go here
// alert("Start here")

const statusURL='https://www.githubstatus.com//api/v2/summary.json'

const allops = document.getElementById("all")

const gh_components = {
    ops: "Git Operations",
    api: "API Requests",
    whk: "Webhooks",
    issues: "Issues",
    prs: "Pull Requests",
    actions: "GitHub Actions",
    pack: "GitHub Packages",
    pages: "GitHub Pages"
}

fetch(statusURL)
    .then((response) => {
        return response.json();
    })
    .then((ghstatus) => {
        switch (ghstatus.status.description){
            case "All Systems Operational":
                allops.style.backgroundColor = '#32CD32';
                break;
            case "Major System Outage":
                allops.style.backgroundColor = '#FF033E';
                break;
            case "Partial System Outage":
                allops.style.backgroundColor = '#FF9900';
                break;
            case "Minor Service Outage":
                allops.style.backgroundColor = '#FFFF00';
                break;
            case "Degraded System Service":
                allops.style.backgroundColor = '#FFFF00';
                break;
            case "Partially Degraded Service":
                allops.style.backgroundColor = '#FFFF00';
                break;
            case "Service Under Maintenance":
                allops.style.backgroundColor = '#0088ff';
                break;
            default:
                allops.style.backgroundColor = '#bbb';
        }

        ghstatus.components.forEach((component) => {
            console.log(component.name)
            for (var ghcomponent in gh_components) {
                if (component.name === gh_components[ghcomponent]) {
                    switch (component.status.toLowerCase()) {
                        case "operational":
                            document.getElementById(ghcomponent).style.backgroundColor = '#32CD32';
                            document.getElementById(ghcomponent).classList.remove("loader");
                            document.getElementById(ghcomponent).classList.add("dot");
                            break;
                        case "under maintenance":
                            document.getElementById(ghcomponent).style.backgroundColor = '#0088FF';
                            document.getElementById(ghcomponent).classList.remove("loader");
                            document.getElementById(ghcomponent).classList.add("dot");
                            break;
                        case "degraded performance":
                            document.getElementById(ghcomponent).style.backgroundColor = '#FFFF00';
                            document.getElementById(ghcomponent).classList.remove("loader");
                            document.getElementById(ghcomponent).classList.add("dot");
                            break;
                        case "partial outage":
                            document.getElementById(ghcomponent).style.backgroundColor = '#FF9900';
                            document.getElementById(ghcomponent).classList.remove("loader");
                            document.getElementById(ghcomponent).classList.add("dot");
                            break;
                        case "major outage":
                            document.getElementById(ghcomponent).style.backgroundColor = '#FF033E';
                            document.getElementById(ghcomponent).classList.remove("loader");
                            document.getElementById(ghcomponent).classList.add("dot");
                            break;
                        default:
                            document.getElementById(ghcomponent).style.backgroundColor = '#bbb';
                    }
                }
            }
            
        })

    });



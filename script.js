const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");
const skillsInput = document.getElementById("skills");
const collegeInput = document.getElementById("college");
const degreeInput = document.getElementById("degree");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewRole = document.getElementById("previewRole");
const previewSkills = document.getElementById("previewSkills");
const previewCollege = document.getElementById("previewCollege");
const previewDegree = document.getElementById("previewDegree");

const summaryText = document.getElementById("summaryText");

nameInput.addEventListener("input", () => {
    previewName.textContent =
    nameInput.value || "Your Name";
});

emailInput.addEventListener("input", () => {
    previewEmail.textContent =
    emailInput.value || "your@email.com";
});

roleInput.addEventListener("input", () => {
    previewRole.textContent =
    roleInput.value || "Your Role";
});

skillsInput.addEventListener("input", () => {
    previewSkills.textContent =
    skillsInput.value || "Skills will appear here.";
});

collegeInput.addEventListener("input", () => {
    previewCollege.textContent =
    collegeInput.value || "Your College";
});

degreeInput.addEventListener("input", () => {
    previewDegree.textContent =
    degreeInput.value || "Your Degree";
});

document
.getElementById("generateBtn")
.addEventListener("click", generateSummary);

function generateSummary(){

    const name = nameInput.value;
    const role = roleInput.value;
    const skills = skillsInput.value;

    if(!name || !role || !skills){

        alert("Please fill all fields first.");
        return;
    }

    const summary = `
Motivated and detail-oriented ${role} with knowledge in ${skills}. Passionate about building efficient and user-friendly digital experiences. Strong problem-solving abilities, teamwork skills, and eagerness to learn modern technologies.
`;

    summaryText.textContent = summary;
}

function updateScore(){

let score = 0;

if(nameInput.value) score += 15;
if(emailInput.value) score += 15;
if(roleInput.value) score += 15;
if(skillsInput.value) score += 15;
if(collegeInput.value) score += 20;
if(degreeInput.value) score += 20;

document.getElementById("progressFill")
.style.width = score + "%";

document.getElementById("scoreText")
.textContent = score + "% Complete";
}

nameInput.addEventListener("input", updateScore);
emailInput.addEventListener("input", updateScore);
roleInput.addEventListener("input", updateScore);
skillsInput.addEventListener("input", updateScore);
collegeInput.addEventListener("input", updateScore);
degreeInput.addEventListener("input", updateScore);

function saveData(){

localStorage.setItem("name", nameInput.value);
localStorage.setItem("email", emailInput.value);
localStorage.setItem("role", roleInput.value);
localStorage.setItem("skills", skillsInput.value);
localStorage.setItem("college", collegeInput.value);
localStorage.setItem("degree", degreeInput.value);

}

function loadData(){

nameInput.value =
localStorage.getItem("name") || "";

emailInput.value =
localStorage.getItem("email") || "";

roleInput.value =
localStorage.getItem("role") || "";

skillsInput.value =
localStorage.getItem("skills") || "";

collegeInput.value =
localStorage.getItem("college") || "";

degreeInput.value =
localStorage.getItem("degree") || "";

previewName.textContent =
nameInput.value || "Your Name";

previewEmail.textContent =
emailInput.value || "your@email.com";

previewRole.textContent =
roleInput.value || "Your Role";

previewSkills.textContent =
skillsInput.value || "Skills will appear here.";

previewCollege.textContent =
collegeInput.value || "Your College";

previewDegree.textContent =
degreeInput.value || "Your Degree";

updateScore();
}

nameInput.addEventListener("input", saveData);
emailInput.addEventListener("input", saveData);
roleInput.addEventListener("input", saveData);
skillsInput.addEventListener("input", saveData);
collegeInput.addEventListener("input", saveData);
degreeInput.addEventListener("input", saveData);

loadData();

document
.getElementById("downloadBtn")
.addEventListener("click", downloadPDF);

function downloadPDF(){

const element =
document.getElementById("resumePreview");

const options = {

margin:0.5,

filename:'ResumeForge_Resume.pdf',

image:{
type:'jpeg',
quality:1
},

html2canvas:{
scale:2
},

jsPDF:{
unit:'in',
format:'letter',
orientation:'portrait'
}

};

html2pdf()
.set(options)
.from(element)
.save();

}
const templateSelector =
document.getElementById("templateSelector");

templateSelector.addEventListener(
"change",
changeTemplate
);

function changeTemplate(){

const resumeCard =
document.getElementById("resumePreview");

resumeCard.classList.remove(
"modern",
"minimal",
"corporate"
);

resumeCard.classList.add(
templateSelector.value
);

}

changeTemplate();
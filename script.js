const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");
const skillsInput = document.getElementById("skills");
const collegeInput = document.getElementById("college");
const degreeInput = document.getElementById("degree");
const jobTitleInput = document.getElementById("jobTitle");
const companyInput = document.getElementById("company");
const experienceDescInput = document.getElementById("experienceDesc");

const templateSelector = document.getElementById("templateSelector");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewRole = document.getElementById("previewRole");
const previewSkills = document.getElementById("previewSkills");
const previewCollege = document.getElementById("previewCollege");
const previewDegree = document.getElementById("previewDegree");
const previewExperienceTitle = document.getElementById("previewExperienceTitle");
const previewExperienceDesc = document.getElementById("previewExperienceDesc");

const summaryText = document.getElementById("summaryText");

const resumeCard = document.getElementById("resumePreview");

/* ---------------- PREVIEW UPDATE ---------------- */

function updatePreview() {
    previewName.textContent = nameInput.value || "Your Name";
    previewEmail.textContent = emailInput.value || "your@email.com";
    previewRole.textContent = roleInput.value || "Your Role";
    previewSkills.textContent = skillsInput.value || "Skills will appear here.";

    previewCollege.textContent = collegeInput.value || "Your College";
    previewDegree.textContent = degreeInput.value || "Your Degree";

    previewExperienceTitle.textContent =
        (jobTitleInput.value || "Frontend Intern") +
        " — " +
        (companyInput.value || "Company");

    previewExperienceDesc.textContent =
        experienceDescInput.value || "Experience description.";
}

/* ---------------- SCORE ---------------- */

function updateScore() {
    let score = 0;

    if (nameInput.value) score += 10;
    if (emailInput.value) score += 10;
    if (roleInput.value) score += 10;
    if (skillsInput.value) score += 10;
    if (collegeInput.value) score += 15;
    if (degreeInput.value) score += 15;
    if (jobTitleInput.value) score += 15;
    if (companyInput.value) score += 15;

    document.getElementById("progressFill").style.width = score + "%";
    document.getElementById("scoreText").textContent = score + "% Complete";
}

/* ---------------- SAVE DATA ---------------- */

function saveData() {
    localStorage.setItem(
        "resumeData",
        JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            role: roleInput.value,
            skills: skillsInput.value,
            college: collegeInput.value,
            degree: degreeInput.value,
            jobTitle: jobTitleInput.value,
            company: companyInput.value,
            experienceDesc: experienceDescInput.value
        })
    );
}

/* ---------------- LOAD DATA ---------------- */

function loadData() {
    const data = JSON.parse(localStorage.getItem("resumeData"));

    if (!data) return;

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
    roleInput.value = data.role || "";
    skillsInput.value = data.skills || "";
    collegeInput.value = data.college || "";
    degreeInput.value = data.degree || "";
    jobTitleInput.value = data.jobTitle || "";
    companyInput.value = data.company || "";
    experienceDescInput.value = data.experienceDesc || "";

    updatePreview();
    updateScore();
}

/* ---------------- EVENT LISTENERS ---------------- */

[
    nameInput,
    emailInput,
    roleInput,
    skillsInput,
    collegeInput,
    degreeInput,
    jobTitleInput,
    companyInput,
    experienceDescInput
].forEach(input => {
    input.addEventListener("input", () => {
        updatePreview();
        updateScore();
        saveData();
    });
});

/* ---------------- AI SUMMARY ---------------- */

document.getElementById("generateBtn").addEventListener("click", () => {

    if (!roleInput.value || !skillsInput.value) {
        alert("Fill role and skills first.");
        return;
    }

    const template = templateSelector.value;

    let summary = "";

    if (template === "modern") {
        summary = `Innovative ${roleInput.value} skilled in ${skillsInput.value}. Passionate about modern technologies, problem solving and building efficient digital experiences. Strong teamwork and continuous learning mindset.`;
    }
    else if (template === "minimal") {
        summary = `Motivated ${roleInput.value} with knowledge in ${skillsInput.value}. Focused on practical problem solving, teamwork and consistent professional growth.`;
    }
    else {
        summary = `Results-driven ${roleInput.value} experienced in ${skillsInput.value}. Strong analytical thinking, adaptability and communication skills with focus on delivering professional solutions.`;
    }

    summaryText.textContent = summary;
});

/* ---------------- TEMPLATE SWITCH ---------------- */

templateSelector.addEventListener("change", () => {
    resumeCard.className = "resume-card";
    resumeCard.classList.add(templateSelector.value);
});

/* ---------------- PDF DOWNLOAD ---------------- */

document.getElementById("downloadBtn").addEventListener("click", () => {
    html2pdf()
        .from(document.getElementById("resumePreview"))
        .save("ResumeForge_Resume.pdf");
});

/* ---------------- INIT ---------------- */

loadData();
updatePreview();
updateScore();
let progress = localStorage.getItem("progress") || 0;

function startCourse() {
    document.getElementById("video").scrollIntoView({
        behavior: "smooth"
    });
}

function completeLesson() {
    progress = Math.min(100, parseInt(progress) + 20);
    localStorage.setItem("progress", progress);
    updateProgress();
    alert("Lesson marked as completed!");
}

function updateProgress() {
    document.getElementById("progress-fill").style.width = progress + "%";
    document.getElementById("progress-text").textContent = progress + "%";
}

updateProgress();

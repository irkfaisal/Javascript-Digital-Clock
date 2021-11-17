document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(updateTime));

function updateTime() {
    document.documentElement.style.setProperty("--day", "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty("--hours", "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty("--minutes", "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty("--seconds", "'" + moment().format("ss") + "'");

    requestAnimationFrame(updateTime);
}


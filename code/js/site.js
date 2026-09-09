/* Copy/paste box (used in about page) */

    function copyBox(button) {
        const input = button.previousElementSibling;

        navigator.clipboard.writeText(input.value);

        button.style.opacity = "0.5";

        setTimeout(function () {
            button.style.opacity = "1";
        }, 500);
    }

    /* Video title / filename toggle */

    document.querySelectorAll(".video-media details").forEach(function (videoDetails) {
        const videoLabel = videoDetails.querySelector(".video-label");
        const videoSwitch = videoDetails.querySelector(".video-switch");
        const video = videoDetails.querySelector("video");

        const videoTitle = videoDetails.dataset.title;
        const videoFilename = videoDetails.dataset.filename;

        let showingFilename = false;

        videoLabel.textContent = videoTitle;

        videoSwitch.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            showingFilename = !showingFilename;
            videoLabel.textContent = showingFilename ? videoFilename : videoTitle;
        });

        /* Pause the video whenever it gets collapsed. */

        videoDetails.addEventListener("toggle", function () {
            if (!videoDetails.open) {
                video.pause();
            }
        });
    });

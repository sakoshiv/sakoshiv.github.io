(() => {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    // Resolve assets relative to this script so the header works at any page depth.
    const script = document.currentScript;
    const siteRoot = new URL("../../", script.src).href;

    mount.innerHTML = `
        <div class="header">
            <a>
                <img class="header-logo" src="${siteRoot}media/sys/eyecon-sako.svg" alt="" width="260" height="41" fetchpriority="high">
            </a>

            <div class="socials">
                <a href="https://x.com/sakoshiv">
                    <img src="${siteRoot}media/sys/X.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>

                <a href="https://instagram.com/sakoshiv">
                    <img src="${siteRoot}media/sys/IG.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>

                <a href="https://twitch.tv/sakoshiv">
                    <img src="${siteRoot}media/sys/TTV.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>

                <a href="https://youtube.com/@sakoshiv">
                    <img src="${siteRoot}media/sys/YT.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>

                <a href="https://misskey.io/@sakoshiv">
                    <img src="${siteRoot}media/sys/MK.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>

                <a href="https://odaibako.net/u/sakoshiv">
                    <img src="${siteRoot}media/sys/OD.svg" alt="" width="30" height="30" fetchpriority="high">
                </a>
            </div>
        </div>

        <div class="tagline-row">
            <img class="header-logo-compact" src="${siteRoot}media/sys/compact.svg" alt="" width="64" height="32" fetchpriority="high">

            <p class="tagline" id="scrambleText" aria-label="TLL">
                <span style="color: #A7A7A7" aria-hidden="true">&nbsp;</span>
            </p>

            <p class="tagline-nav">
                <a href="https://sakoshiv.github.io/" class="subtle-link">Home</a> |
                <a href="https://sakoshiv.github.io/posts/" class="subtle-link">Posts</a> |
                <a href="https://sakoshiv.github.io/gallery/" class="subtle-link">Gallery</a> |
                <a href="https://sakoshiv.github.io/about/" class="subtle-link">About</a>
            </p>
        </div>

        <hr>
    `;
})();

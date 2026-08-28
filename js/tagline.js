/* Animated tagline. Random A-Z, a-z, and 0-9 characters only. */
(() => {
    const tagline = document.getElementById("scrambleText");
    const display = tagline.querySelector("span");

    const taglineLines = [
        "No one's watching, no one cares.",
        "The internet is noise and people are bored.",
        "Just more noise on the internet.",
        "Upper echelon internet poisoned schizophrenic.",
        "A shiv is a sharp makeshift weapon often used in survival situations.",
        "The undefeated champion of fucking things up.",
        "Mentally stable guy with normal thoughts in his head.",
        "None of this means anything to anyone (but me.)",
        "A highly curated personality designed to appeal specifically to you!",
        "Less is more.",
        "Inertia, schema, qualia."
    ];

    const scrambleCharacters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const isScrambleCharacter = character => /[A-Za-z0-9]/.test(character);

    const randomCharacter = () =>
        scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];

    const scrambleText = (text, revealedCount) => {
        let seen = 0;

        return Array.from(text, character => {
            if (!isScrambleCharacter(character)) return character;

            const output = seen < revealedCount
                ? character
                : randomCharacter();

            seen++;
            return output;
        }).join("");
    };

    // Pick a random tagline, but never repeat the one currently being shown.
    let currentIndex = Math.floor(Math.random() * taglineLines.length);
    let currentText = taglineLines[currentIndex];
    let animationFrame = null;
    let swapping = false;

    const render = text => display.textContent = text;
    const setAccessibleText = text => tagline.setAttribute("aria-label", text);

    render(currentText);
    setAccessibleText(currentText);

    const swapTagline = () => {
        if (swapping) return;

        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * taglineLines.length);
        } while (nextIndex === currentIndex);

        const nextText = taglineLines[nextIndex];

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            currentIndex = nextIndex;
            currentText = nextText;
            render(nextText);
            setAccessibleText(nextText);
            return;
        }

        swapping = true;
        tagline.setAttribute("aria-busy", "true");

        const oldText = currentText;
        const oldLength = Array.from(oldText).filter(isScrambleCharacter).length;
        const newLength = Array.from(nextText).filter(isScrambleCharacter).length;
        const startedAt = performance.now();

        const animate = now => {
            const elapsed = now - startedAt;

            if (elapsed < 420) {
                const progress = elapsed / 420;
                const revealed = Math.floor(oldLength * (1 - progress));
                render(scrambleText(oldText, revealed));
                animationFrame = requestAnimationFrame(animate);
                return;
            }

            if (elapsed < 1200) {
                const progress = (elapsed - 420) / 780;
                const revealed = Math.floor(newLength * progress);
                render(scrambleText(nextText, revealed));
                animationFrame = requestAnimationFrame(animate);
                return;
            }

            currentIndex = nextIndex;
            currentText = nextText;
            render(nextText);
            setAccessibleText(nextText);
            tagline.removeAttribute("aria-busy");
            swapping = false;
            animationFrame = null;
        };

        animationFrame = requestAnimationFrame(animate);
    };

    const interval = window.setInterval(swapTagline, 7000);

    window.addEventListener("pagehide", () => {
        window.clearInterval(interval);
        if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    }, { once: true });
})();

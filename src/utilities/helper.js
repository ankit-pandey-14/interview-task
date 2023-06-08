export function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");

        Object.assign(script, {
            type: 'text/javascript',
            async: true,
            src,
        });

        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    });
}
export function initMapScript() {
    if(window.google){
        return Promise.resolve();
    };

    const src = `${process.env.REACT_APP_MAP_API_JS}?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    return loadScript(src);
}
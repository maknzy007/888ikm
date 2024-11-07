// function to inject advertisement into a specific container
function loadAd(containerId, adType, adCode) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    if (adType === 'banner') {
        container.innerHTML = `
            <script type="text/javascript">
                ${adCode}
            </script>
        `;
    } else if (adType === 'iframe') {
        container.innerHTML = `
            <iframe src="${adCode}" width="468" height="60" style="border:0;"></iframe>
        `;
    } else {
        console.error("Unsupported ad type. Please use 'banner' or 'iframe'.");
    }
}

// Example usage:

// Load a banner ad
loadAd('ad-space-1', 'banner', `
    atOptions = {
        'key' : '9cb9c41d6e62d18a8e4065ac1fd9a72c',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };
    (function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.highperformanceformat.com/9cb9c41d6e62d18a8e4065ac1fd9a72c/invoke.js';
        document.body.appendChild(script);
    })();
`);

// Load an iframe ad
loadAd('ad-space-2', 'iframe', '<iframe align="center" border="1" frameborder="1" height="900" marginheight="1" marginwidth="1" name="I1" scrolling="no" src="https://plvl.weebly.com" width="350">
</iframe>');

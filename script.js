// script.js

function shortenLink() {
    const originalLink = document.getElementById('original-link').value.trim();
    if (originalLink) {
        const shortLinkId = Math.random().toString(36).substr(2, 6);
        const shortLink = `redirect.html?id=${shortLinkId}&url=${encodeURIComponent(originalLink)}`;
        document.getElementById('shortened-link').href = shortLink;
        document.getElementById('shortened-link').innerText = shortLink;
        document.getElementById('shortened-link-container').style.display = 'block';
    } else {
        alert("يرجى إدخال رابط صالح!");
    }
}

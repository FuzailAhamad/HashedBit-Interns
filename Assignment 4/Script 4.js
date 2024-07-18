document.getElementById('colorchange').addEventListener('click', function() {
    let color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});
document.getElementById('fontsize').addEventListener('input', function() {
    let fontSize = document.getElementById('fontsize').value;
    document.getElementById('text-container').style.fontSize = fontSize + 'px';
});
document.getElementById('italic').addEventListener('click', function() {
    let textContainer = document.getElementById('text-container');
    if (textContainer.style.fontStyle === 'italic') {
        textContainer.style.fontStyle = 'normal';
    } else {
        textContainer.style.fontStyle = 'italic';
    }
});
document.getElementById('underline').addEventListener('click', function() {
    let textContainer = document.getElementById('text-container');
    if (textContainer.style.textDecoration === 'underline') {
        textContainer.style.textDecoration = 'none';
    } else {
        textContainer.style.textDecoration = 'underline';
    }
});

document.getElementById('bold').addEventListener('click', function() {
    let textContainer = document.getElementById('text-container');
    if (textContainer.style.fontWeight === 'bold') {
        textContainer.style.fontWeight = 'normal';
    } else {
        textContainer.style.fontWeight = 'bold';
    }
});
document.getElementById('list').addEventListener('change', function() {
    let fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});
document.getElementById('getstyle').addEventListener('click', function() {
    let textContainer = document.getElementById('text-container');
    let styles = window.getComputedStyle(textContainer);
    let cssProps = `
        color: ${styles.color};
        font-size: ${styles.fontSize};
        font-style: ${styles.fontStyle};
        text-decoration: ${styles.textDecoration};
        font-weight: ${styles.fontWeight};
        font-family: ${styles.fontFamily};
    `;
    document.getElementById('css-props').textContent = cssProps.trim().replace(/\n\s+/g, ' ');
});
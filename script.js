document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const imageUrl = document.getElementById('imageUrl');
    const imageDisplay = document.getElementById('imageDisplay');

    if (fileInput.files.length === 0) {
        imageUrl.textContent = 'Please select a file.';
        return;
    }

    const file = fileInput.files[0];
    const url = URL.createObjectURL(file);

    imageUrl.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;

    // Display the image
    imageDisplay.src = url;
    imageDisplay.style.display = 'block'; // Show the image element
});

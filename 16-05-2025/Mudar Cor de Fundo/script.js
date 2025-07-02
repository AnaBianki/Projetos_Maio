document.addEventListener('DOMContentLoaded', function()
 {
    const colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.addEventListener('input', function() {
            const selectedColor = colorPicker.value;
            document.body.style.backgroundColor = selectedColor;
            console.log('Cor de fundo alterada para:', selectedColor);
        });
    } else {
        console.error('Elemento colorPicker não encontrado!');
    }
});
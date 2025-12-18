function calcularDescuento() {
    // Obtener valores
    const priceInput = document.getElementById('price');
    const discountInput = document.getElementById('discount');
    const precio = parseFloat(priceInput.value);
    const descuento = parseFloat(discountInput.value);
    
    // Resetear errores
    priceInput.classList.remove('invalid');
    discountInput.classList.remove('invalid');
    document.getElementById('priceError').classList.remove('show-error');
    document.getElementById('discountError').classList.remove('show-error');
    
    let hasError = false;
    
    // Validar precio
    if (isNaN(precio) || precio <= 0) {
        priceInput.classList.add('invalid');
        document.getElementById('priceError').classList.add('show-error');
        hasError = true;
    }
    
    // Validar descuento
    if (isNaN(descuento) || descuento < 0 || descuento > 100) {
        discountInput.classList.add('invalid');
        document.getElementById('discountError').classList.add('show-error');
        hasError = true;
    }
    
    // Si hay errores, no continuar
    if (hasError) {
        document.getElementById('resultSection').style.display = 'none';
        return;
    }
    
    // Calcular
    const montoDescuento = precio * descuento / 100;
    const precioFinal = precio - montoDescuento;
    
    // Mostrar resultados
    document.getElementById('displayOriginal').textContent = `$${precio.toFixed(2)}`;
    document.getElementById('displayDiscount').textContent = `$${montoDescuento.toFixed(2)}`;
    document.getElementById('displayFinal').textContent = `$${precioFinal.toFixed(2)}`;
    
    // Mostrar sección de resultados con animación
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
}

function clearForm() {
    document.getElementById('price').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('resultSection').style.display = 'none';
    
    // Limpiar errores
    document.getElementById('price').classList.remove('invalid');
    document.getElementById('discount').classList.remove('invalid');
    document.getElementById('priceError').classList.remove('show-error');
    document.getElementById('discountError').classList.remove('show-error');
}

// Permitir calcular con Enter
document.getElementById('price').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        calculateDiscount();
    }
});

document.getElementById('discount').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        calculateDiscount();
    }
});

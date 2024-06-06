document.getElementById('add-item').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;

    if (itemName && itemPrice) {
        const itemList = document.querySelector('.item-list');
        const item = document.createElement('div');
        item.classList.add('item');
        
        item.innerHTML = `
            <span>${itemName}</span>
            <span>${itemPrice}</span>
            <div class="actions">
                <button class="btn" onclick="editItem(this)">Edit</button>
                <button class="btn" onclick="deleteItem(this)">Hapus</button>
            </div>
        `;

        itemList.appendChild(item);
        updateTotal();
    }
}

function editItem(button) {
    const item = button.parentElement.parentElement;
    const itemName = item.children[0].innerText;
    const itemPrice = item.children[1].innerText;
    
    document.getElementById('item-name').value = itemName;
    document.getElementById('item-price').value = itemPrice;
    
    item.remove();
    updateTotal();
}

function deleteItem(button) {
    button.parentElement.parentElement.remove();
    updateTotal();
}

function updateTotal() {
    const items = document.querySelectorAll('.item');
    let total = 0;

    items.forEach(item => {
        const itemPrice = parseFloat(item.children[1].innerText);
        total += itemPrice;
    });

    document.getElementById('total-price').innerText = total;
}

document.getElementById('pay').addEventListener('click', () => {
    alert('Pembayaran berhasil!');
});

document.getElementById('print-receipt').addEventListener('click', () => {
    window.print();
});

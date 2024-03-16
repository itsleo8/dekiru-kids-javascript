function keisan() {
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if (text01.value == '') {
        alert('1つ目の数値が入力されていません');
        return;
    }

    if (text02.value == '') {
        alert('2つ目の数値が入力されていません');
        return;
    }

    z = x + y;

    kekka = document.getElementById('kekka');
    if (z > 100) {
        kekka.style.color = 'red';
    }
    else {
        kekka.style.color = 'green';
    }
    kekka.innerHTML = z;
}

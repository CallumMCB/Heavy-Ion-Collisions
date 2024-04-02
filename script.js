function toggleCategory(categoryId) {
    var element = document.getElementById(categoryId);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.style.display = 'block';
    } else {
        element.classList.add('hidden');
        element.style.display = 'none';
    }
}

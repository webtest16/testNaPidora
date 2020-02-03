const btn = document.getElementById('check');
const loading = document.getElementById('loading');
const loader = document.getElementById('loader');

function showLoader() {
    loading.style.display = 'block';
    loader.style.display = 'block';
}

function hideLoader() {
    loading.style.display = 'none';
    loader.style.display = 'none';
}

function testNaPidora(url, fullLink) {
    showLoader();
    fetch(url).then(res => {
        hideLoader();
        setTimeout(() => {
            if (res.status === 200) {
                alert(fullLink + ' натурал!!!');
            } else {
                alert(fullLink + 'не найден в базе натуралов!!!\n\r Он пидарас!!!');
            }
        }, 0);
    });
}

btn.addEventListener('click', () => {
  const fullLink = document.getElementById('vk').value;
  const user = fullLink.replace(/https:[/][/]vk.com[/]/ig, '');
  const url = 'https://api.github.com/users/' + user;

  testNaPidora(url, fullLink);
});
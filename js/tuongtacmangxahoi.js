const createLogs = async () => {
    let data = {
        end_point: window.location.href,
    }

    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    let pathname = [
        '/dang-nhap',
        '/dang-ky',
    ]
    if ((user && user.username != 'nguyetmun') || pathname.includes(location.pathname)) {
        await fetch('https://tikhub-tau.vercel.app/api/v1/logs/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data) 
        })
    }
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        createLogs();
        console.clear();
    }, 500);
}, false);

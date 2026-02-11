// =============================================
// QLDT Cookie Helper — Chrome Extension
// Lấy cookies từ qldt.hust.edu.vn
// =============================================

let currentCookies = '';

// ==============================
// INIT — Check cookies on load
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    checkCookies();

    // Button listeners
    document.getElementById('btnLogin').addEventListener('click', openQLDT);
    document.getElementById('btnCopy').addEventListener('click', copyCookies);
    document.getElementById('btnRefresh').addEventListener('click', checkCookies);
});

// ==============================
// Check & Display Cookies
// ==============================
async function checkCookies() {
    const dot = document.getElementById('authDot');
    const text = document.getElementById('authText');
    const btn = document.getElementById('btnLogin');
    const display = document.getElementById('cookieDisplay');

    try {
        // Lấy cookies từ tất cả các domain liên quan
        const domains = [
            'qldt.hust.edu.vn',
            'e.hust.edu.vn',
            '.hust.edu.vn'
        ];

        let allCookies = [];
        
        // Lấy cookies từ từng domain
        for (const domain of domains) {
            const cookies = await chrome.cookies.getAll({ domain });
            allCookies = allCookies.concat(cookies);
        }

        // Loại bỏ cookies trùng lặp (cùng name)
        const uniqueCookies = [];
        const seenNames = new Set();
        
        for (const cookie of allCookies) {
            if (!seenNames.has(cookie.name)) {
                seenNames.add(cookie.name);
                uniqueCookies.push(cookie);
            }
        }

        if (uniqueCookies.length > 0) {
            // Build cookie string - lấy tất cả cookies
            currentCookies = uniqueCookies.map(c => `${c.name}=${c.value}`).join('; ');

            // Hiển thị
            dot.className = 'auth-dot ok';
            text.textContent = `Tìm thấy ${uniqueCookies.length} cookies`;
            btn.style.display = 'none';
            display.value = currentCookies;

            // Log chi tiết
            console.log('✅ Cookies đã lấy:', uniqueCookies.length);
            console.log('Cookie names:', uniqueCookies.map(c => c.name).join(', '));
            console.log('Full cookies:', currentCookies);
            
            showMessage('Đã tìm thấy cookies từ QLDT!', 'success');
        } else {
            dot.className = 'auth-dot no';
            text.textContent = 'Chưa có cookies';
            btn.style.display = 'block';
            display.value = '';
            currentCookies = '';
            
            showMessage('Chưa đăng nhập QLDT. Vui lòng đăng nhập trước!', 'info');
        }
    } catch (err) {
        console.error('❌ Lỗi khi lấy cookies:', err);
        dot.className = 'auth-dot no';
        text.textContent = 'Lỗi kiểm tra cookies';
        btn.style.display = 'block';
        display.value = '';
        
        showMessage('Lỗi: ' + err.message, 'error');
    }
}

// ==============================
// Copy Cookies to Clipboard
// ==============================
async function copyCookies() {
    if (!currentCookies) {
        showMessage('Không có cookies để copy!', 'error');
        return;
    }

    try {
        // Copy to clipboard
        await navigator.clipboard.writeText(currentCookies);
        
        showMessage('✅ Đã copy cookies vào clipboard!', 'success');
        
        // Visual feedback
        const btn = document.getElementById('btnCopy');
        const originalText = btn.textContent;
        btn.textContent = '✅ Đã copy!';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.opacity = '1';
        }, 2000);
        
        console.log('📋 Cookies copied to clipboard');
    } catch (err) {
        console.error('❌ Lỗi copy:', err);
        showMessage('Lỗi khi copy: ' + err.message, 'error');
    }
}

// ==============================
// Open QLDT Login
// ==============================
function openQLDT() {
    chrome.tabs.create({ 
        url: 'https://qldt.hust.edu.vn' 
    });
}

// ==============================
// Show Message
// ==============================
function showMessage(text, type = 'info') {
    const el = document.getElementById('message');
    el.textContent = text;
    el.className = `message ${type}`;
    el.style.display = 'block';

    setTimeout(() => {
        el.style.display = 'none';
    }, 5000);
}

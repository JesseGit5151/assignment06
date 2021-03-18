// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    let addBtn = document.getElementById('btnAddEmployee')
    addBtn.addEventListener('click', (e) => {
        window.open('add-employee.html', 'width=300, height=300', 'resizable=true')
    });
});
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
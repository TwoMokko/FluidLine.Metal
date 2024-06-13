// $(() => {
//     new Components.FilterManager();
// })

document.addEventListener("DOMContentLoaded", () => {

})

function createElement(tagName: string, className: string|null, textContent: string|null, container: HTMLElement|null): any {
    let elem: HTMLElement = document.createElement(tagName);
    if (className) elem.className = className;
    if (textContent) elem.textContent = textContent;
    if (textContent) elem.textContent = textContent;
    if (container) container.append(elem);
    return elem;
}

function showForm(url: string = '', method: string = '',  title: string = '', from: string, countProductCode: number|null): void {
    let form: HTMLFormElement = createElement('form', null, null, null);
    // form.action = action;
    form.method = method;

    switch (from) {
        case 'offer':
            // createInputsProducts(countProductCode, form);
            break;
        case 'letter':
            createInputsMessage(form);
            break;
    }

    createInputsPhoneAndEmail(form);

    let btn = createElement('div', 'btn', 'Отправить', form);
    let wind = Common.Window.create(title, form);

    btn.addEventListener('click', () => {
        Common.Request.sendFormXHRnoAction(form, url, () => { console.log('ok'); wind.close(); });
        return false;
    })
}

function createInputsMessage(form: HTMLFormElement): void {
    let textMessageWrap: HTMLDivElement = createElement('div', 'text-wrap', null, form);
    let textMessage: HTMLTextAreaElement = createElement('textarea', null, null, textMessageWrap);
    textMessage.placeholder = 'Сообщение';
    textMessage.name = 'message';
}

function createInputsPhoneAndEmail(form: HTMLFormElement): void {
    let inputContactsWrap: HTMLDivElement = createElement('div', 'input-wrap contacts', null, form);
    let inputPhone: HTMLInputElement = createElement('input', null, null, inputContactsWrap);
    inputPhone.placeholder = 'Телефон';
    inputPhone.name = 'phone';
    let inputEmail: HTMLInputElement = createElement('input', null, null, inputContactsWrap);
    inputEmail.placeholder = 'E-mail';
    inputEmail.name = 'email';
}

function showBurger(open: boolean): void {
    if (!open) {
        document.querySelector('.burger-space').classList.remove('hide');
        document.querySelector('body').style.overflow = 'hidden';
        return;
    }
    document.querySelector('.burger-space').classList.add('hide');
    document.querySelector('body').style.overflow = 'revert';
}



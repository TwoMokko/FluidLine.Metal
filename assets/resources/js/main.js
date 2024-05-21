"use strict";
document.addEventListener("DOMContentLoaded", () => {
});
function createElement(tagName, className, textContent, container) {
    let elem = document.createElement(tagName);
    if (className)
        elem.className = className;
    if (textContent)
        elem.textContent = textContent;
    if (textContent)
        elem.textContent = textContent;
    if (container)
        container.append(elem);
    return elem;
}
function showForm(url = '', method = '', title = '', from, countProductCode) {
    let form = createElement('form', null, null, null);
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
    });
}
function createInputsMessage(form) {
    let textMessageWrap = createElement('div', 'text-wrap', null, form);
    let textMessage = createElement('textarea', null, null, textMessageWrap);
    textMessage.placeholder = 'Сообщение';
    textMessage.name = 'message';
}
function createInputsPhoneAndEmail(form) {
    let inputContactsWrap = createElement('div', 'input-wrap contacts', null, form);
    let inputPhone = createElement('input', null, null, inputContactsWrap);
    inputPhone.placeholder = 'Телефон';
    inputPhone.name = 'phone';
    let inputEmail = createElement('input', null, null, inputContactsWrap);
    inputEmail.placeholder = 'E-mail';
    inputEmail.name = 'email';
}
var Common;
(function (Common) {
    /**
     * Менеджер работы с окнами
     */
    class Window {
        static windows = {};
        static iter = 0;
        static windowsHTML = null;
        static content = null;
        // public static showMessage(text: string): Instance {
        //     return Window.create(null, text);
        // }
        static create(title = null, content) {
            document.querySelector('body').style.overflow = 'hidden';
            if (!Window.windowsHTML) {
                Window.windowsHTML = document.createElement('div');
                this.windowsHTML.className = 'windows';
                document.querySelector('main').append(Window.windowsHTML);
            }
            let id = ++Window.iter;
            let wind = new Instance(id, title, content);
            Window.windows[id] = wind;
            return wind;
        }
        static remove(id) {
            document.querySelector('body').style.overflow = 'revert';
            delete Window.windows[id];
        }
    }
    Common.Window = Window;
    /**
     * Работа с окнами
     */
    class Instance {
        id;
        instance;
        constructor(id, title, content) {
            this.id = id;
            this.instance = document.createElement('div');
            let space = document.createElement('div');
            let window = document.createElement('div');
            let header = document.createElement('div');
            let titleHTML = document.createElement('div');
            let closeHTML = document.createElement('div');
            let container = document.createElement('div');
            this.instance.className = 'instance';
            space.className = 'space';
            window.className = 'window';
            titleHTML.className = 'title';
            closeHTML.className = 'close';
            (title !== null) ? header.className = 'head' : header.className = 'head_null_title';
            (title !== null) ? container.className = 'container' : container.className = 'container_null_title';
            this.instance.append(space);
            this.instance.append(window);
            window.append(header);
            if (title !== null) {
                header.append(titleHTML);
                titleHTML.append(title);
            }
            header.append(closeHTML);
            window.append(container);
            container.append(content);
            space.addEventListener('click', this.close.bind(this));
            closeHTML.addEventListener('click', this.close.bind(this));
            Window.windowsHTML.append(this.instance);
        }
        close() {
            this.instance.remove();
            this.remove();
        }
        remove() {
            Window.remove(this.id);
        }
    }
})(Common || (Common = {}));
var Common;
(function (Common) {
    class Request {
        static sendXHR(formData, url, func) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.send(formData);
            xhr.onload = () => {
                if (xhr.status != 200) {
                    alert('Ошибка' + xhr.status);
                    return;
                }
                func();
            };
        }
        static send(formData, url, func) {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(async (response) => {
                let json = await response.json();
                Request.response(json, func);
            })
                .catch(response => { console.log('request failed: ' + url); console.log(response); });
        }
        // public static sendJson(url: string, jsonData: sendDataJson, func?: Function): void {
        //     fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json;charset=utf-8'
        //         },
        //         body: JSON.stringify(jsonData)
        //     })
        //         .then(async response => {
        //             let json = await response.json();
        //             Request.response(json, func);
        //         })
        //         .catch(response => { console.log('request failed: ' + url); console.log(response); });
        //
        //
        //     // let xhr = new XMLHttpRequest();
        //     // xhr.open('POST', url);
        //     // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        //     // xhr.send(JSON.stringify(jsonData));
        //     // xhr.onload =  ()=> {
        //     //     if (xhr.status != 200) {
        //     //         alert('Ошибка' + xhr.status);
        //     //         return;
        //     //     }
        //     // }
        // }
        static response(response, func) {
            switch (response.state) {
                case 'ok':
                    if (func)
                        func(response.body);
                    break;
                case 'error':
                    alert(response.body.message);
                    break;
            }
        }
        // public static send(formData: FormData, url: string, func?: Function): void {
        //     $.ajax({
        //         url				: url,
        //         method			: 'POST',
        //         dataType		: 'json',
        //         data 			: formData,
        //         contentType		: false,
        //         processData		: false,
        //         cache			: false,
        //         // beforeSend: function() { if (funcBeforeSend) funcBeforeSend(); },
        //         // complete: function() { if (funcComplete) funcComplete(); },
        //         success			: (response) => { if (func) func() },
        //         error			: (response) => { console.log('request failed: ' + url); console.log(response); }
        //     });
        // }
        // public static send(formData: FormData, url: string, func?: Function): void {
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('POST', url);
        //     xhr.send(formData);
        //     xhr.onload = () => func();
        //     xhr.onerror = () => alert('Ошибка соединения');
        // }
        static sendFormXHR(form, func) {
            let url = form.getAttribute('action');
            let formData = new FormData(form);
            Request.sendXHR(formData, url, func);
        }
        static sendFormXHRnoAction(form, url, func) {
            let formData = new FormData(form);
            Request.sendXHR(formData, url, func);
        }
        static sendForm(form, func) {
            let url = form.getAttribute('action');
            let formData = new FormData(form);
            Request.send(formData, url, func);
        }
        static sendFormNoAction(form, url, func) {
            let formData = new FormData(form);
            Request.send(formData, url, func);
        }
        static sendData(data, url, func) {
            let formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key].toString());
            }
            Request.send(formData, url, func);
        }
    }
    Common.Request = Request;
})(Common || (Common = {}));
$(() => {
    selectCustom();
});
function selectCustom() {
    $('.select').each(function () {
        const _this = $(this), selectOption = _this.find('option'), selectOptionLength = selectOption.length, selectedOption = selectOption.filter(':selected'), duration = 450; // длительность анимации
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);
                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');
                    _this.val(chooseItem).attr('selected', 'selected');
                    // $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
            }
            else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
}
//# sourceMappingURL=main.js.map
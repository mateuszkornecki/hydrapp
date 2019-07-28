!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n    window.addEventListener('load', function() {\n        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n            // Registration was successful\n            console.log('ServiceWorker registration successful with scope: ', registration.scope);\n        }, function(err) {\n            // registration failed :(\n            console.log('ServiceWorker registration failed: ', err);\n        });\n    });\n}\n\n// place your code below\n\nlet counterValue = document.querySelector(\".counter__value--js\");\nconst buttonAdd = document.querySelector(\".button-add--js\");\nconst buttonRemove = document.querySelector(\".button-remove--js\");\nconst buttonHistory = document.querySelector(\".button-history--js\");\nconst buttonClose = document.querySelector(\".button-close--js\");\nconst key = new Date().toISOString().slice(0, 10)\nconst history = document.querySelector(\".history--js\");\nconst historyList = document.querySelector(\".history__list\");\ncounterValue.innerHTML = 0;\n\n// setting counterValue.innerHTML to your last entered value\n// else create new record = 0\nif (localStorage.getItem(key)) {\n    counterValue.innerHTML = parseInt(localStorage.getItem(key));\n} else {\n    localStorage.setItem(key, 0);\n    counterValue.innerHTML = 0;\n}\n\nbuttonAdd.addEventListener('click', (e) => {\n    // localStorage.getItem(key) is a string, it have to be parse to a number\n    const currentValue = parseInt(localStorage.getItem(key));\n    if (currentValue < 99) {\n        localStorage.setItem(key, currentValue + 1);\n        counterValue.innerHTML = parseInt(localStorage.getItem(key));\n\n    } else {\n        console.log('Nie możliwe!')\n    }\n})\n\nbuttonRemove.addEventListener('click', (e) => {\n    const currentValue = parseInt(localStorage.getItem(key));\n    if (currentValue > 0) {\n        localStorage.setItem(key, currentValue - 1);\n        counterValue.innerHTML = parseInt(localStorage.getItem(key));\n    } else {\n        console.log('Nie wypiłeś nawet jednej szklanki!');\n    }\n})\n\n\nbuttonHistory.addEventListener('click', (e) => {\n    history.classList.toggle('history--visible');\n    historyList.innerHTML = \"\";\n    // push every localStorage.key to the array, and sort them\n    const localStorageArray = [];\n    for (let i = 0; i < localStorage.length; i++) {\n        let localStorageKey = localStorage.key(i);\n        localStorageArray.push(localStorage.key(i));\n        localStorageArray.sort();\n    }\n    // then print the array (each record in new list element)\n    localStorageArray.forEach(key => {\n        let value = localStorage.getItem(key);\n        const li = document.createElement('li');\n        li.id = key;\n        historyList.appendChild(li);\n        li.textContent = `W dniu ${key} wypiłeś ${value} szklanki`;\n        console.log(`W dniu ${key} wypiłeś ${value} szklanki`);\n    })\n\n})\n\nbuttonClose.addEventListener('click', (e) => {\n    history.classList.toggle('history--visible');\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUksV0FBVyxNQUFNO0FBQ3hELDhCQUE4QixJQUFJLFdBQVcsTUFBTTtBQUNuRCxLQUFLOztBQUVMLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xuXG5sZXQgY291bnRlclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGVyX192YWx1ZS0tanNcIik7XG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hZGQtLWpzXCIpO1xuY29uc3QgYnV0dG9uUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tcmVtb3ZlLS1qc1wiKTtcbmNvbnN0IGJ1dHRvbkhpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1oaXN0b3J5LS1qc1wiKTtcbmNvbnN0IGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tY2xvc2UtLWpzXCIpO1xuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuY29uc3QgaGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeS0tanNcIik7XG5jb25zdCBoaXN0b3J5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbGlzdFwiKTtcbmNvdW50ZXJWYWx1ZS5pbm5lckhUTUwgPSAwO1xuXG4vLyBzZXR0aW5nIGNvdW50ZXJWYWx1ZS5pbm5lckhUTUwgdG8geW91ciBsYXN0IGVudGVyZWQgdmFsdWVcbi8vIGVsc2UgY3JlYXRlIG5ldyByZWNvcmQgPSAwXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xuICAgIGNvdW50ZXJWYWx1ZS5pbm5lckhUTUwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbn0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAwKTtcbiAgICBjb3VudGVyVmFsdWUuaW5uZXJIVE1MID0gMDtcbn1cblxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIGlzIGEgc3RyaW5nLCBpdCBoYXZlIHRvIGJlIHBhcnNlIHRvIGEgbnVtYmVyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZSA8IDk5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgY3VycmVudFZhbHVlICsgMSk7XG4gICAgICAgIGNvdW50ZXJWYWx1ZS5pbm5lckhUTUwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOaWUgbW/FvGxpd2UhJylcbiAgICB9XG59KVxuXG5idXR0b25SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIGlmIChjdXJyZW50VmFsdWUgPiAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgY3VycmVudFZhbHVlIC0gMSk7XG4gICAgICAgIGNvdW50ZXJWYWx1ZS5pbm5lckhUTUwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTmllIHd5cGnFgmXFmyBuYXdldCBqZWRuZWogc3prbGFua2khJyk7XG4gICAgfVxufSlcblxuXG5idXR0b25IaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBoaXN0b3J5LmNsYXNzTGlzdC50b2dnbGUoJ2hpc3RvcnktLXZpc2libGUnKTtcbiAgICBoaXN0b3J5TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vIHB1c2ggZXZlcnkgbG9jYWxTdG9yYWdlLmtleSB0byB0aGUgYXJyYXksIGFuZCBzb3J0IHRoZW1cbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBsb2NhbFN0b3JhZ2VLZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VBcnJheS5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VBcnJheS5zb3J0KCk7XG4gICAgfVxuICAgIC8vIHRoZW4gcHJpbnQgdGhlIGFycmF5IChlYWNoIHJlY29yZCBpbiBuZXcgbGlzdCBlbGVtZW50KVxuICAgIGxvY2FsU3RvcmFnZUFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5pZCA9IGtleTtcbiAgICAgICAgaGlzdG9yeUxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGBXIGRuaXUgJHtrZXl9IHd5cGnFgmXFmyAke3ZhbHVlfSBzemtsYW5raWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXIGRuaXUgJHtrZXl9IHd5cGnFgmXFmyAke3ZhbHVlfSBzemtsYW5raWApO1xuICAgIH0pXG5cbn0pXG5cbmJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBoaXN0b3J5LmNsYXNzTGlzdC50b2dnbGUoJ2hpc3RvcnktLXZpc2libGUnKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);
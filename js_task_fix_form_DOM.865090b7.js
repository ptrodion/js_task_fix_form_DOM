"use strict";var elementForm=document.querySelectorAll("form input");elementForm.forEach(function(e){var t=document.createElement("label"),r=e.id,l=e.name;e.placeholder=l.charAt(0).toUpperCase()+l.slice(1),t.textContent=l,t.setAttribute("for",r),t.classList.add("field-label"),e.before(t)});
//# sourceMappingURL=js_task_fix_form_DOM.865090b7.js.map

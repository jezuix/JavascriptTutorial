var blg = (function () {
    var beluga = {};

    beluga.$ = document.querySelector.bind(document);
    beluga.$S = document.querySelectorAll.bind(document);

    return beluga;
})()
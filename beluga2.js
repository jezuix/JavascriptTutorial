var blg = (function () {
    var beluga = {};

    beluga.$ = document.querySelector.bind(document);
    beluga.$S = document.querySelectorAll.bind(document);

    Array.prototype.getMedia = function () {
        // return _calcularMedia.apply(this, this);
        return _calcularMedia(...this);
    };

    function _calcularMedia() {
        let params = arguments;
        let hasNaN = Array.prototype.some.call(params, (n) => isNaN(n));

        if (hasNaN) throw new Error('Somente números');

        let total = Array.prototype.reduce.call(params, function (total, atual) {
            return total + parseFloat(atual);
        });
        return total / arguments.length;
    }

    beluga.calcularMedia = _calcularMedia;

    return beluga;
})()
const Utils = {
    calculateNumber(type, a, b) {
        roundA = Math.round(a);
        roundB = Math.round(b);
        let result;

        if (type === 'SUM') {
            result = roundA + roundB;
        }

        if (type === 'SUBTRACT') {
            result = roundA - roundB;
        }

        if (type === 'DIVIDE') {
            if (roundB === 0) {
                result = 'Error'
            } else result = roundA / roundB;
        }

        return (result);

    },
}

module.exports = Utils;

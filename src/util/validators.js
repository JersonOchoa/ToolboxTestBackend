// String validators
const isEmpty = (string) => {
    if (string.trim() === "") {
        return true;
    } else {
        return false;
    }
};
const isDataIncomplete = (string) => {
    if (string === undefined) {
        return true;
    } else {
        return false;
    }
};

// Handlers validators
exports.validateText = (data) => {
    let errors = {};

    if (isDataIncomplete(data)) {
        errors.error = "no text";
    } else if (isEmpty(data)) {
        errors.error = "no text";
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false,
    };
};

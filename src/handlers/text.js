const { validateText } = require("../util/validators");

exports.test = (request, response) => {
    const bodyText = request.body.text;
    const queryText = request.query.text;
    let reversed = "";
    let varPalindromo = false;

    const isPalindromo = (text, dataReversed) => {
        const varTextModified = text.split(" ").join("");
        const varReversedModified = dataReversed.split(" ").join("");

        if (varTextModified === varReversedModified) {
            return true;
        } else {
            return false;
        }
    };

    if (bodyText) {
        const { valid, errors } = validateText(bodyText);
        if (!valid) {
            return response.status(400).json(errors);
        }
        reversed = bodyText.split("").reverse().join("");
        varPalindromo = isPalindromo(bodyText, reversed);
    } else {
        const { valid, errors } = validateText(queryText);
        if (!valid) {
            return response.status(400).json(errors);
        }
        reversed = queryText.split("").reverse().join("");
        varPalindromo = isPalindromo(queryText, reversed);
    }

    response.status(200).json({ text: reversed, palindrome: varPalindromo });
};

//ф-ция, сокращающая цвета html, если в них есть повторяющиеся символы
function replaceLongColors(text) {
    // запоминаем первую цифру после # (это делают скобки, а \1 говорит, что после сразу идет снова запомненный символ)
    return text.replace(/#([\da-f])\1([\da-f])\2([\da-f])\3\b/ig,
        (_, r, g, b) => `#${r}${g}${b}`)
    // _ исп-ся для именования неиспользуемых аргументов
}

function convertStyle(text) {
    return text.replace(/_[A-z]/g, (_) => _.substring(1).toUpperCase())
}

function convertStyle2(text) {
    return text.replace(/_[a-z]/gi, (_) => _.substring(1).toUpperCase())
}

function convertStyle3(text) {
    return text.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase())
}

function convertStyle4(text) {
    return text.replace(/_(?<letter>[a-z])/gi, (...args) => args.at(-1).letter.toUpperCase())
}


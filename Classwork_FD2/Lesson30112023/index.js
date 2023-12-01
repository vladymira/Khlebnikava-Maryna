console.log(t('Hello {{word}}', { word: 'Marina' }))

function t(text, data) {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => { return Object.hasOwn(data, key) ? String(data[key]) : match })
}



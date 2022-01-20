const os = require('os')

setInterval(() => {

    const { freemem, totalmem } = os

    const memory = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((memory / total) * 100)

    const stats = {
        free: `${memory} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    console.clear()
    console.log('====== PC STATS =====')
    console.table(stats)
}, 1000)
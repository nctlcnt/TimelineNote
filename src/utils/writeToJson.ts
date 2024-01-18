export const writeFile = (data: string) => {
    const element = document.createElement('a')
    const textFile = new Blob([data], { type: 'text/plain' })
    // const textFile = new Blob([[data], { type: 'text/plain' }) //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile)
    element.download = 'data.json'
    document.body.appendChild(element)
    element.click()
}
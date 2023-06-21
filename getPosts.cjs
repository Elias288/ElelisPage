/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/_content")
// const dirPath = path.join(__dirname, "../src/_contentTest")
let postlist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        console.log(`Cantidad de posts: ${files.length}`);
        if (err) {
            return console.log("Failed to list contents of directory: " + err);
        }

        files.forEach(file => {
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                if (err) {
                    return console.log("Failed to list contents of directory: " + err);
                }

                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices })
                
                const pagesIndices = lines.reduce(getPageIndices, [])
                const content = parseContent({ lines, pagesIndices, metadataIndices })

                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000

                const post = {
                    id: metadata.id ? metadata.id.replace(/\r/g, '') : `Untitled-${timestamp}`,
                    timestamp: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    description: metadata.description ? metadata.description : "",
                    date: metadata.date ? metadata.date : "",
                    modified_date: metadata.modified_date ? metadata.modified_date : "",
                    categories: metadata.categories ? JSON.parse(metadata.categories.replace(/'/g, '"')) : [],
                    contents: content ? content : "No content given"
                }

                postlist.push(post)

                if (postlist.length === files.length) {
                    const sortedList = postlist.sort((a, b) => {
                        return a.timestamp < b.timestamp ? 1 : -1
                    })
                    
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/post.json", data)
                    sortedList.forEach(post => console.log(`${post.timestamp} - ${post.id}`))
                    console.log('Done');
                }
            })
        })
    })
    return postlist
}

const getMetadataIndices = (acc, elem, i) => {
    if (/^---/.test(elem)) {
        acc.push(i)
    }
    return acc
}

const getPageIndices = (acc, elem, i) => {
    if (/^---Page/.test(elem)){
        acc.push(i)
    }
    return acc
}

const parseContent = ({ lines, pagesIndices, metadataIndices }) => {
    if (metadataIndices.length > 0) {
        lines = lines.slice(metadataIndices[1] + 1, lines.length)
    }
    lines.join("\n")

    let start = 0, parts = []
    
    pagesIndices.forEach((cont) => {
        const cont2 = cont - (metadataIndices[1] + 1)
        parts.push(lines.slice(start, cont2).join("\n"))
        start = cont2 + 1
    })

    parts.push(lines.slice(start).join("\n"))
    return parts
}

const parseMetadata = ({ lines, metadataIndices}) => {
    if (metadataIndices.length > 0) {
        let obj = {}
        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])

        metadata.forEach(line => {
            obj[line.split(': ')[0]] = line.split(": ")[1]
        })
        return obj
    }
}

getPosts()
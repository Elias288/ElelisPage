/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/_content")
let postlist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {

        if (err) {
            return console.log("Failed to list contents of directory: " + err);
        }
        
        files.forEach((file, i) => {
            let obj = {}

            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                if (err) {
                    return console.log("Failed to list contents of directory: " + err);
                }

                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({ lines, metadataIndices }, obj)
                const content = parseContent({ lines, metadataIndices })
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000

                const post = {
                    id: metadata.id ? metadata.id.replace(/\r/g, '') : `Untitled-${timestamp}`,
                    timestamp: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    description: metadata.description ? metadata.description : "",
                    date: metadata.date ? metadata.date : "",
                    modified_date: metadata.modified_date ? metadata.modified_date : "",
                    content: content ? content : "No content given"
                }

                /* console.log(`${i} - ${post.timestamp} - "${post.title}"`); */
                postlist.push(post)

                if (i === files.length - 1) {
                    const sortedList = postlist.sort((a, b) => {
                        return a.timestamp < b.timestamp ? 1 : -1
                    })
                    if (sortedList.length === files.length) {
                        let data = JSON.stringify(sortedList)
                        fs.writeFileSync("src/post.json", data)
                        console.log('done');
                    } else {
                        fs.writeFileSync("src/post.json", "")
                        console.log('Error');
                    }
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

const parseMetadata = ({ lines, metadataIndices }, obj) => {
    if (metadataIndices.length > 0) {
        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
        metadata.forEach(line => {
            obj[line.split(': ')[0]] = line.split(": ")[1]
        })
        return obj
    }
}

const parseContent = ({ lines, metadataIndices }) => {
    if (metadataIndices.length > 0) {
        lines = lines.slice(metadataIndices[1] + 1, lines.length)
    }
    return lines.join("\n")
}

getPosts()
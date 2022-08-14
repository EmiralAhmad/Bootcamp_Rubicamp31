const fs = require('fs');

const add = (check, activity) => {

    datalist = []
    try {
        datalist = JSON.parse(fs.readFileSync("datalist.json"))
    } catch (e) {
        console.log(e)
    }

    let index = datalist.findIndex((x) => x.activity === activity);
    console.log(index)

    if (index == -1) {
        datalist.push({check, activity})
        console.log(datalist)
    } else {
        datalist[index].check += check
    }

    fs.writeFileSync('datalist.json', JSON.stringify(datalist))

}
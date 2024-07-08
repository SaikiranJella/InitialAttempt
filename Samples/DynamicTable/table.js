const students=[
    {
        sname : "s1",
        location: "hyd",
        marks: 37
    },
    {
        sname : "s2",
        location: "mum",
        marks: 73
    },
    {
        sname : "s3",
        location: "raj",
        marks: 91
    },
    {
        sname : "s4",
        location: "che",
        marks: 97
    },
    {
        sname : "s5",
        location: "agra",
        marks: 88
    },
    {
        sname : "s6",
        location: "bglr",
        marks: 67
    },
]

divTableRef = document.querySelector("body > div")

const tableHeaders=["Name","Location","Marks"]


function prepareTrows(){
   let trs=''
   students.forEach(function (obj) {
    //not entering the forEach loop to be clarified??
        const { sname, location, marks } = obj
        trs=trs+`<tr><td>${sname}</td><td>${location}</td><td>${marks}</td></tr>`
})
return trs;
}

function prepareTheaders(){
    let ths=''
    tableHeaders.forEach(function (val) {
        ths=ths + `<th>${val}</th>`
    })
    return `<tr>${ths}</tr>`
}

function prepareTable(){
    const tableData = `<table border="2px Solid black"><thead>${prepareTheaders()}</thead><tbody>${prepareTrows()}</tbody></table>`
    divTableRef.innerHTML=tableData
}
prepareTable()


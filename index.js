// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//     if(node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }

// function pow (x, y) {
//     let result = 1;

//     for(let i = 0; i < y; i++) {
//         result *= x;
//         return result;
//     }
// }

// function pow (x, y) {
//     if(y === 1) {
//         return x;
//     } else {
//         return x * pow(x, y - 1);
//     }
// }
// pow (2, 1) // 2
// pow (2, 2) // 4
// pow (2, 3) // 8
// pow (2, 4) // 16

let students = {
    js: [{
        name: 'john',
        progress: 10
    },
    {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },
        {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
    
};
function getTotalProgressByIteration (data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if(Array.isArray(course)) {
            students += course.length;
            for(let i = 0; i < course.length; i++) {
                total += total + course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;
                
                for(let i = 0; i < subCourse.length; i++) {
                    total += total + subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}
console.log(getTotalProgressByIteration(students));
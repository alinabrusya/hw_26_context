//ЗАДАНИЕ: УБРАТЬ ПОТЕРЮ КОНЕКСТА
//
// let group =
//     {
//         title: 'Java 10',
//         students: ['Gena', 'Andrey', 'Elena', 'Anton'],
//         showList: function ()
//         {
//             const show = function (name)
//             {
//                 console.log(`${this.title}: ${name}`)
//             }
//             this.students.forEach(show)
//         }
//     }
//
// group.showList()
// let newFGroup = group
// group = null
// newFGroup.showList()

// let group =
//     {
//         title: 'Java 10',
//         students: ['Gena', 'Andrey', 'Elena', 'Anton'],
//         showList: function()
//         {
//             const show = function (name)
//             {
//                 console.log(`${this.title}: ${name}`)
//             }
//             this.students.forEach(show)
//         }
//     }
// group.showList()
// let newFGroup = group
// group = null
// newFGroup.showList()

//1-ОЕ РЕШЕНИЕ
// let group =
//     {
//         title: 'Java 10',
//         students: ['Gena', 'Andrey', 'Elena', 'Anton'],
//         showList: function()
//         {
//             const show = function (name)
//             {
//                 console.log(`${this.title}: ${name}`)
//             }
//             this.students.forEach(show.bind(this))
//         }
//     }
// group.showList()
// let newFGroup = group
// group = null
// newFGroup.showList()

//2-OE РЕШЕНИЕ
// let group =
//     {
//         title: 'Java 10',
//         students: ['Gena', 'Andrey', 'Elena', 'Anton'],
//         showList: function()
//         {
//             this.students.forEach((name)=>{
//                 console.log(`${this.title}: ${name}`)
//             })
//         }
//     }
// group.showList();
// let newFGroup = group;
// group = null;
// newFGroup.showList()

//3-Е РЕШЕНИЕ
let group =
    {
        title: 'Java 10',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function()
        {
            let self = this;
            const show = function (name)
            {
                console.log(`${self.title}: ${name}`)
            }
            this.students.forEach(show)
        }
    }
group.showList()
let newFGroup = group
group = null
newFGroup.showList()

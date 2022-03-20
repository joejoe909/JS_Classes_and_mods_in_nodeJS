import { employee } from "./employee.js";

function lg(val) {
    console.log(val);
}

const em1 = new employee("Jonny", "Cash");
const em2 = new employee("Sam", "Wise");
let empArray = new Array();

for(let i = 0; i < 10; i++) {
    empArray.push(new employee("firstName" + i, "secondName" + i));

}

lg(em1);
lg(em2);
empArray.forEach(item => lg(item));





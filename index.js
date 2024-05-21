const users = [{
  id: 1,
  name: "Ahmed"
}, {
  id: 2,
  name: "Mohmmmed",
},];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray);

const csv = userNamesArray.join(", ");
console.log(csv);

const csvExample = users.map(user => user.name).join(", ");
console.log(csvExample);

const html = `<ul>
${users.map(user => `<li>${user.name}</li>`).join("")}
</ul>`;
console.log(html);

const numbers = [15, 10, 20];
const allAbove10 = numbers.every(number => number >= 10);

console.log(allAbove10);

const samNumber = numbers.some(number => number > 10);
console.log(samNumber);

const show = grades => {
  return grades.some(grade => grade === 10);
};

console.log(show([9, 12, 9, 14])); 

const items = ["hn", 'as', 'dddd', 'dddd'];
console.log(items);
const deitems = items.splice(1, 3);
console.log(items);
console.log(deitems);

const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"]
const rem = apps => {
  console.log(apps);
  apps.splice(1, 1);
  return apps;
}
console.log(rem(apps));



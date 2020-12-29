for (let i = 1; i < 614; i++) {
  console.log(`import _${i} from "./${i.toString().padStart(3, '0')}.json";`);
}
console.log(`export default [`);
for (let i = 1; i < 614; i++) {
  console.log(`_${i},`);
}
console.log(`];`);

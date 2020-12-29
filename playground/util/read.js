const fs = require('fs');

const category = require('./category.json');

for (let index = 0; index < 11; index++) {
  if (!!category[index].category.length) {
    category[index].category.forEach((category) => {
      category.hymn
        .sort((a, b) =>
          parseInt(a) < parseInt(b) ? -1 : parseInt(a) > parseInt(b) ? 1 : 0
        )
        .forEach((number) => {
          const hymn = require(`./json/${`000${number}`.slice(-3)}.json`);

          console.log(
            `{category: "${category.name}", number: "${hymn.sub.attributes.number}", hymn: "${hymn.sub.attributes.title}"},`
          );
        });
    });
  } else {
    category[index].category.hymn
      .sort((a, b) =>
        parseInt(a) < parseInt(b) ? -1 : parseInt(a) > parseInt(b) ? 1 : 0
      )
      .forEach((number) => {
        const hymn = require(`./json/${`000${number}`.slice(-3)}.json`);

        console.log(
          `{category: "${category[index].category.name}", number: "${hymn.sub.attributes.number}", hymn: "${hymn.sub.attributes.title}"},`
        );
      });
  }
}

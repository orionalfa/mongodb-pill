db.authors.insertMany([
  {
    name: "Miguel",
    lastname: "Hernández",
    dateOfBirth: "1910-10-30",
    dateOfDeath: "1942-03-28",
    country: "Spain",
  },
  {
    name: "Chris",
    lastname: "Harman",
    dateOfBirth: "1942-11-08",
    dateOfDeath: "2009-11-07",
    country: "UK",
  },
  {
    name: "Rosa",
    lastname: "Luxemburg",
    dateOfBirth: "1871-03-05",
    dateOfDeath: "1919-01-15",
    country: "Poland",
  },
]);

db.books.insertMany([
  {
    title: "The Lost Revolution: Germany 1918 to 1923",
    releaseYear: "1997",
    category: "History",
    authors: [
      {
        id: "610a601a8ac56a0e13dd333f",
        name: "Chris",
        lastname: "Harman",
      },
    ],
  },
]);

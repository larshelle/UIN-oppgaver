const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// TODO: Hent HTML #id med getElementById[X]
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet [X]
  const searchName = searchInput.value;
  if (searchName) {
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet [X]
    //!!var nødt å sjekke løningen for her fikk jeg litt trøbbel
    const searchResult = users.find(
      (user) => user.name.toLowerCase() === searchName.toLowerCase()
    );
    if (searchResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket [X]
      createTableUI([searchResult]);
     
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe [X]
      userUl.innerHTML = `Finner ikke ${searchName}`;
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI [X]
    createTableUI(users);
  }
}; 

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet [X]
  const filterValue = filterInput.value;
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien [X]
    const filterResult = "";
    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret [X]
      createTableUI(filterResult);
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe [X]
      userUl.innerHTML = `Finner ikke ${filterResult}`;
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI [X]
    createTableUI(users);
  }
};   

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch) [X]
searchInput.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter) [X]
filterButton.addEventListener("click", handleFilter);

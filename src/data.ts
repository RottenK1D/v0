type Movie = {
	ID: string;
	Isbn: string;
	Title: string;
	Director: Director;
};

type Director = {
	Firstname: string;
	Lastname: string;
};

export const movies: Movie[] = [];

movies.push({
  ID: "1",
  Isbn: "123456",
  Title: "The Matrix",
  Director: {
    Firstname: "Lana",
    Lastname: "Wachowski",
  },
});

movies.push({
  ID: "2",
  Isbn: "7891011",
  Title: "The Matrix Reloaded",
  Director: {
    Firstname: "Lana",
    Lastname: "Wachowski",
  },
});
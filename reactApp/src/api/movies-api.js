export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=819ced827ccb486b293f66d1062c837b&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };
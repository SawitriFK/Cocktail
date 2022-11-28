

class DataSource {
  static searchcocktail(keyword) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson.drinks)

        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
cocktail

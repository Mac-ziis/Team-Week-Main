export default class PlantService {
  static getPlant(plantName) {
    return fetch(`https://perenual.com/api/species-list?q=${plantName}&key=sk-jg7F64d9204e783ca1868`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
  static getDisease(diseaseName) {
    return fetch (`https://perenual.com/api/pest-disease-list?q=${diseaseName}key=API_KEY_1&page=1`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
      }
}

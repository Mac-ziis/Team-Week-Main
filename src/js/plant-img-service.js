export default class PlantImgService {
  static getPlantByImage(plantImage) {
    return fetch (`https://my-api.plantnet.org/v2/identify/all?images=${plantImage}&organs=leaf&include-related-images=true&no-reject=true&lang=en&type=kt&api-key=API_KEY_3`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    //return fetch (`https://my-api.plantnet.org/v2/identify/all?images=https%3A%2F%2Fi.imgur.com%2FaWM4Wap.jpg&include-related-images=false&no-reject=false&lang=en&api-key=2b105VLAeIkcZCdeWdXG0fcFF`)
    .then(function(response) {
      const jsonifiedResponse = response.json()
      console.log(jsonifiedResponse)
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
}
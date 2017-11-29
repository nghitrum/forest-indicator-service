import axios from "axios";

//TODO: Ask teacher the API developers to fix their CORS, because we can't request anything from localhost...

function getRegionLevels() {
  return new Promise((resolve, reject) => {
    axios
      .get("http://melatupa.azurewebsites.net/regionLevels")
      .then(results => {
        resolve(results.data);
      })
      .catch(error => {
        console.log(error);
        reject();
      });
  });
}

function getRegion(regionLevelId) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "http://melatupa.azurewebsites.net/regionLevels/" +
          regionLevelId +
          "/regions"
      )
      .then(results => {
        resolve(results.data);
      })
      .catch(error => {
        console.log(error);
        reject();
      });
  });
}

function getScenarionCollection(regionLevelId, regionId) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "http://melatupa.azurewebsites.net/scenarioCollection/" +
          regionLevelId +
          "/region/" +
          regionId
      )
      .then(results => {
        resolve(results.data);
      })
      .catch(error => {
        console.log(error);
        reject();
      });
  });
}

export default { getRegionLevels, getRegion, getScenarionCollection };

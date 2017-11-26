import axios from 'axios';

//TODO: Ask teacher the API developers to fix their CORS, because we can't request anything from localhost...

function getRegionLevels()
{
    return new Promise((resolve, reject) =>{

        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        .then(results => {
            console.log(results);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default { getRegionLevels };
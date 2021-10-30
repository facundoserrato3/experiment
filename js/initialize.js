const PEOPLE_URL = "https://raw.githubusercontent.com/facundoserrato3/Experiment/main/webparaexperimentar/MOCK_DATA.json?token=AVA6GFERTXVAQMYXUAZ44JDBPSIE2";




function getJSONData(url) {
    var result= {};
    return fetch(url)
    .then(response =>{
        if(response.ok) {
            return response.json();
        } else {
            throw Error (response.statusText);

                    }
    })
    .then(function(response){
        result.status = "ok";
        result.data=response;
        return result;
    })
    .catch(function(error){
        result.status = "error";
        result.data = error;
        return result;
    });
}
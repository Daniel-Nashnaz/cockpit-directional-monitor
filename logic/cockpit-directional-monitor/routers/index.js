const express = require("express");

const router = express.Router();




const axios = require('axios');
let report;
const procCommand = async () => {

  
    // Request part.
    const options = {
      method: 'GET',
      url: 'https://www.n12.co.il/AjaxPage?jspName=getNewsChatMessages.jsp&count=100',
    };
    const response = await axios.request(options);
    // Only continue if status is ok.
    if (response.status !== 200) {
      return;
    }
    report = response.data[0];
    console.log(report);
    let reporter = report['reporter'];
    console.log(reporter);
    let output = reporter['reporter']['name']+':\n';
    let media;
    if (report['medias'].length===0) {
      output += report['messageContent'];
    } else {
      output += report['medias'][0]['mediaContent'];
      if (report['medias'][0]['link3']) {
        media = report['medias'][0]['link3'];
      } else if (report['medias'][0]['link2']) {
        media = report['medias'][0]['link2'];
      } else if (report['medias'][0]['link1']) {
        media = report['medias'][0]['link1'];
      }
    }
    console.log(response);
    return output;
  };
router.get('/', async(request, response) => {
    
    response.send(await procCommand());
});

router.post('/', async(request, response) => {
    console.log(await request.body);
    
    response.json("Sending Data");
});




module.exports = router;
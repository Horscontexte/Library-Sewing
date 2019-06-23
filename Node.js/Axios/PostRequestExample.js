const axios = require('axios');

axios.post('url',{
  key: "value",
})
.then(response => {
  console.log("Info - Posting : " + response.data.key)
})
.catch(error => {
  console.log("Error - While posting", error);
});

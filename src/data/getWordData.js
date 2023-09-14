


const getWords = async () => {
    await fetch("/../data/wordListDict.json", {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => {
        return response.json()
      })
  };


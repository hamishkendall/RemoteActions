const GetTestData = async () => {
    try {
        const response = await fetch(
          'http://192.168.1.222:8082/action',
        ).then(r => console.log(r.status));
    } catch (error) {
        console.error(error);
    }
}

export default GetTestData;
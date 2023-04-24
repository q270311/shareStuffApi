

(async () => {
    try {
        await axios.post("https://sharestuff.onrender.com/api/reservation",{
            //const resutl = await axios.post("http://localhost:3000/api/reservation",{
            stuffId: 3,
            startDate: "2023-05-01",
            endDate: "2023-05-03",
        });       
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();
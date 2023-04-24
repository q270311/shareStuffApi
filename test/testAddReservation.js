

(async () => {
    try {
        await axios.post("https://sharestuff.onrender.com/api/reservation",{
            stuffId: 3,
            startDate: "20230501",
            endDate: "20230503"
        });
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();


(async () => {
    try {
        const response = await axios.post("https://sharestuff.onrender.com/api/stuff",{
            name: "Kosiarka do trawy",
            description: "Elektryczna kosiarka do trawy"
        });
    } catch (error) {
        console.log(`Brak komunikacji z serwerem ${error}`)
    }
})();
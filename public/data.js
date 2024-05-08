async function getPhoneData(phones) {
    const apiUrl = `https://api.techspecs.io/v4/all/brands?category=Smartphones`;

    console.log("Fetching data from:", apiUrl);

    try {
        const response = await fetch(apiUrl);
        console.log("Response:", response);

        if (!response.ok) {
            throw new Error("Phone data not found");
        }

        const data = await response.json();
        console.log("Phone data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching phone data:", error);
        throw error;
    }
}


getPhoneData().catch(error => {
    console.error("An error occurred:", error);
});

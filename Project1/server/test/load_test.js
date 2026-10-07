const TOTAL_REQUESTS = 10000;
const URL = "http://localhost:2020/api/test_limit";

async function testRateLimit() {
    let success = 0;
    let limited = 0;
    let errors = 0;

    const start = Date.now();

    const requests = Array.from({ length: TOTAL_REQUESTS }, async (_, i) => {
        try {
            const response = await fetch(URL);

            if (response.status === 429) {
                limited++;
            } else if (response.ok) {
                success++;
            } else {
                errors++;
            }

        } catch (error) {
            errors++;
        }
    });

    await Promise.all(requests);

    const time = ((Date.now() - start) / 1000).toFixed(2);

    console.log("\n===== RATE LIMIT TEST =====");
    console.log("Total Requests :", TOTAL_REQUESTS);
    console.log("Successful     :", success);
    console.log("Rate Limited   :", limited);
    console.log("Errors         :", errors);
    console.log("Time Taken     :", time, "seconds");
}

testRateLimit();
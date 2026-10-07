import autocannon from "autocannon";

const url = "http://localhost:2020/api/test_limit";

const instance = autocannon(
    {
        url: url,

        // Total number of connections
        connections: 100,

        // Test duration
        duration: 10,

        // Number of requests per connection
        pipelining: 1
    },
    finishedBench
);

autocannon.track(instance);

function finishedBench(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("\n========== RATE LIMIT TEST ==========\n");

    console.table([
        {
            "URL": url,
            "Duration (sec)": result.duration,
            "Requests/sec": result.requests.average,
            "Total Requests": result.requests.total,
            "2xx": result["2xx"],
            "4xx": result["4xx"],
            "5xx": result["5xx"],
            "Errors": result.errors,
            "Timeouts": result.timeouts
        }
    ]);

    console.log("\n========== STATUS CODES ==========\n");

    console.table(result.statusCodeStats);
}
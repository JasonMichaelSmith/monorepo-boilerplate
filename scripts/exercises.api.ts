export { };

// Simple
//const res = await fetch("https://api.restful-api.dev/objects");
//console.log(await res.json());

// Fetch with Error Handling
async function apiCall(url, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    };

    try {
        const response = await fetch(url, defaultOptions);

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorBody}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
}
//console.log(await apiCall("https://api.restful-api.dev/objects"));

// Retry Logic with Exponential Backoff
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) return await response.json();
            throw new Error(`HTTP ${response.status}`);
        } catch (error) {
            lastError = error;
            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError;
}
console.log(await fetchWithRetry("https://api.restful-api.dev/objects"));
const getFileExtention = (file) => {
    const re = /(?:\.([^.]+))?$/;
    return re.exec(file)[0];
};

/**
 * Viewer-Request Lambda at Edge Handler
 */
export const handler = async (event) => {
    // get content of original request and response (Viewer Response)
    const { request, response } = event.Records[0].cf;

    console.log(`[START] Handling Response: ${response}`);

    // check extension of requested file
    const fileType = getFileExtention(request.uri);
    const targetFileExtentions = ['.png', '.jpg', '.svg', '.css', '.js', '.woff', '.otf'];

    // if extension is the above list, check the response headers
    if (targetFileExtentions.includes(fileType)) {
        console.log('Request is for a css, js, jpg, png, svg, woff or otf resource.');
        const headers = response.headers;
        const responseCache = headers['cache-control'];

        // if the response doesn't have a cache-control header, then add it.
        if (!responseCache) {
            console.log("Resource hasn't cache directives. Setting a directive that enforces revalidation.");
            headers['cache-control'] = [{ key: 'cache-control', value: 'public, no-cache' }];
        }
    }

    console.log(`[ END ] Modified Response: ${response}`);

    return response;
};

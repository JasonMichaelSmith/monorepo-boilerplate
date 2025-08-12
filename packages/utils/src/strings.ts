export const isUrl = (str: string, local: boolean = false): boolean => {
    const hostnamePattern = local 
        ? '([a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-z]{2,6}|localhost|[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+)' // includes localhost and IPs
        : '([a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-z]{2,6})'; // production domains only
    
    const pattern = new RegExp('^(https?:\\/\\/)' + // protocol
        hostnamePattern + // hostname
        '(:[0-9]+)?' + // port
        '(\\/\\S*)?' + // path
        '(\\?[\\w-,&=]*)?' + // query parameters
        '(\\#[\\w-]*)?$', 'i'); // fragment locator
    return pattern.test(str);
};
/**
 * Formats and validates a URL string
 * @param {string} input - The URL string to validate
 * @returns {Object} - Object containing validation results
 */
export function formatAndValidateUrl(input) {
    // Remove leading/trailing whitespace and any line breaks
    let url = input.trim().replace(/[\n\r]/g, '');
    
    // Regular expressions for validation
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    
    try {
        // Case 1: Just a domain (e.g., "example.com")
        if (domainRegex.test(url)) {
            url = `https://${url}`;
        }
        // Case 2: Starts with www but no protocol
        else if (url.startsWith('www.')) {
            url = `https://${url}`;
        }
        // Case 3: Has valid structure but no protocol
        else if (urlRegex.test(url) && !url.startsWith('http')) {
            url = `https://${url}`;
        }

        // Final validation using URL constructor
        const urlObject = new URL(url);
        
        // Additional validation for common issues
        if (!urlObject.hostname.includes('.')) {
            throw new Error('Invalid domain format');
        }
        
        return {
            isValid: true,
            url: url,
            hostname: urlObject.hostname
        };
    } catch (error) {
        return {
            isValid: false,
            error: 'Please enter a valid URL format. Examples:\n- example.com\n- www.example.com\n- https://example.com',
            originalInput: input
        };
    }
}

/**
 * Example usage:
 * 
 * const result = formatAndValidateUrl('example.com');
 * if (result.isValid) {
 *     console.log('Valid URL:', result.url);
 *     console.log('Hostname:', result.hostname);
 * } else {
 *     console.log('Error:', result.error);
 *     console.log('Original input:', result.originalInput);
 * }
 */
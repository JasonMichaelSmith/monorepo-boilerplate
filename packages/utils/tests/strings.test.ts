import { describe, it, expect } from 'vitest';
import { isUrl } from '../src/strings.js';

describe('isUrl', () => {
    it('should return true for valid HTTP URLs', () => {
        expect(isUrl('http://example.com')).toBe(true);
        expect(isUrl('http://www.google.com')).toBe(true);
        expect(isUrl('http://subdomain.example.org')).toBe(true);
    });

    it('should return true for valid HTTPS URLs', () => {
        expect(isUrl('https://example.com')).toBe(true);
        expect(isUrl('https://www.github.com')).toBe(true);
        expect(isUrl('https://api.example.com/v1')).toBe(true);
    });

    it('should return true for URLs with ports', () => {
        expect(isUrl('http://localhost:3000', true)).toBe(true);
        expect(isUrl('https://example.com:8080')).toBe(true);
    });

    it('should handle local development URLs when local=true', () => {
        expect(isUrl('http://localhost', true)).toBe(true);
        expect(isUrl('http://localhost:3000', true)).toBe(true);
        expect(isUrl('http://127.0.0.1', true)).toBe(true);
        expect(isUrl('http://192.168.1.1:8080', true)).toBe(true);
    });

    it('should reject local URLs when local=false (default)', () => {
        expect(isUrl('http://localhost')).toBe(false);
        expect(isUrl('http://127.0.0.1')).toBe(false);
        expect(isUrl('http://192.168.1.1:8080')).toBe(false);
    });

    it('should return true for URLs with query parameters', () => {
        expect(isUrl('https://example.com?param=value')).toBe(true);
        expect(isUrl('https://search.com?q=test&type=web')).toBe(true);
    });

    it('should return true for URLs with fragments', () => {
        expect(isUrl('https://example.com#section')).toBe(true);
        expect(isUrl('https://docs.com/page#header-1')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
        expect(isUrl('not-a-url')).toBe(false);
        expect(isUrl('ftp://example.com')).toBe(false);
        expect(isUrl('http://')).toBe(false);
        expect(isUrl('https://')).toBe(false);
        expect(isUrl('')).toBe(false);
        expect(isUrl('example.com')).toBe(false);
    });
});
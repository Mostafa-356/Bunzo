# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@bunzo.com**

### What to Include

- Type of vulnerability
- Full paths of affected files
- Step-by-step instructions to reproduce
- Impact of the vulnerability
- Suggested fix (if available)

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 7 days
  - Medium: 30 days
  - Low: 90 days

## Security Measures

### Application Security

- Input validation on all user inputs
- XSS protection implemented
- HTTPS enforcement
- Secure cookie flags
- Content Security Policy (CSP)

### Dependencies

- Dependabot enabled for automated updates
- npm audit on every build
- Regular security scans

### Code Security

- ESLint security rules
- TypeScript strict mode
- Code review required for all PRs

## Security Best Practices

### For Contributors

1. **Never commit secrets**
   - Use environment variables
   - Add sensitive files to .gitignore

2. **Validate all inputs**
   - Client-side validation
   - Server-side validation
   - Sanitize user data

3. **Keep dependencies updated**
   - Regular npm updates
   - Review security advisories

## Contact

- **Security Team**: security@bunzo.com

---

**Last Updated**: 2026-03-27

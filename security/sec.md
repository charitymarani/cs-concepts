# Security

I. Transport Level Security secures the actual transport/ pipe over which the message passes through from client to a service. It is a mechanism to secure HTTP Internet and intranet communications. It uses SSL (Secure Socket Layer) to ensure point-to-point protection.  It only supports sending a message directly from client to a service and would not be ideal on its own if there were intermediaries involved.

II. Message Level Security secures the message itself that is being transported from client to a service and vice versa. This supports intermediaries since the actual message is secured. This is done by encrypting messages at source and decrypting them at the intended destination.

## OWASP(Open Web Application Security Project)’s Application Security Verification Standard (ASVS)

According to OWASP, the ASVS project provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development. It’s primary aim is to normalize the range in the coverage and level of rigor available in the market when it comes to performing Web application security verification using a commercially-workable open standard.

Some of OWASP’s ASVS requirements include:

- Malicious input handling verification- this runs on the premise that data from an external entity or client should never be trusted all input should be validated to be correct and fit for the intended purpose.
- Authentication verification - the application should verify the digital identity of the sender of a communication, ensure that only those authorised are able to authenticate and credentials are
transported in a secure manner.
- Session management verification - the application must ensure that sessions are unique to each individual and cannot be guessed or shared, that they are invalidated when no longer required and timed out during periods of inactivity.
- Access control verification -  the application must ensure that persons accessing resources holds valid credentials to do so, users are associated with a well-defined set of roles and privileges and role and permission metadata is protected from replay or tampering
- Error handling and logging verification - the application should not collect or log sensitive information if not specifically required, should ensure all logged information is handled securely and protected as per its data classification and that logs are not forever, but have an absolute lifetime that is as short as possible.
- Data protection verification - data should be protected from unauthorised observation or
disclosure both in transit and when stored, protected from being maliciously created, altered or deleted by unauthorized attackers and should be available to authorized users as required.

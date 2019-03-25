# 2 & 3 Tier Architecture

There are several layers/tiers associated with multi-tier/N-tire architecture:

- Presentation/UI layer(the user interface)
- Application layer(bridges the gap between the business layer and the boundary technology i.e UI frameworks, database access libraries, service gateways, HTTP etc)
- Business/Logic layer
- Data layer(database/storage

2-tier architecture has no intermediate between the client(presentation layer) and the database(data layer). The client directly writes and reads from the database. Communication here may be faster but it becomes problematic as users increase because the database has to queue requests and execute them one by one. This may also result in a data integrity issue.

3-tier architecture introduces an intermediary between the client and database known as the business/logic layer. It holds data access logic like validation of data, calculations, data insertion etc.

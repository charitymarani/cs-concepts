# Databases

I’ve had extensive experience working with both relational and non-relational databases over the past 2 years. On my current engagement, I work with both Mongo(with Mongoose) and PostgreSQL(whose set up began with sequelize, we then moved it to raw SQL and then moved it back to an ORM settling on Objection.js with Knex.

## Optimizing Database Queries

### Indexes

Indexing is used to optimize performance of a database by minimizing the number of times a disk is accessed when processing queries. It is fairly similar to how indexing is done for books where one can look for keywords and be directed to a page as opposed to going page by page to find a specific topic.

In databases, indexes are created in a table where the first column is the search key that contains the contains a copy of the primary key of the table and the second column is the data reference which contains a set of pointers holding the address of the disk block where that particular key value can be found.

Methods include:

- Clustered Indexing where the rows are stored on the disk in the same order as the index. One can have only one clustered index per table because this defines how the data is physically arranged.
- Non-Clustered Indexing where there is a second list with pointers to the physical rows. Multiple non-clustered indexes are possible because they are an extra step removed from the referenced table.

While indexes speed up data retrieval, they can slow down write operations to a database because writing and removal data has to be applied to the index as well.

### Partitioning

Partitioning is the subdividing of large database tables into smaller individual tables. This way, queries only access a fraction of the data making access faster as there is less data to scan.

There’s two types of partitioning:

- Vertical Partitioning -  splits a table into two or more tables containing different column. It’s also a good way to restrict access to sensitive columns like passwords.
- Horizontal Partitioning - divides a table into multiple tables that contain the same number of columns, but fewer rows.

### Striping

Striping is the practice of dividing data into blocks and spreading the data blocks across multiple physical disks. It spreads data across more physical drives, multiple disks can access the contents of a file, enabling writes and reads to be completed more quickly. Care should be taken to ensure redundancy and fault tolerance. One way to do this is striping with parity data. Parity is a technique that checks whether data has been lost or written over when it is moved from one place in storage to another or when it is transmitted between computers.

### Clustering

This is the process of combining two or more servers or instances to connect to one database. Some of the advantages of this includes: redundancy, scalability, monitoring and automation and high availability.

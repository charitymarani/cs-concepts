# API

There are various types of API protocols available for application development. Some of these include: REST, RPC, gRPC, SOAP, graphql etc.

REST (Representational State Transfer) interacts in a stateless manner with resource representations. The operations are defined by HTTP methodologies like GET, POST, PUT etc and each one is identified by an URL. One of its key properties is that it is hypermedia rich. It is a more modern approach. It is all about a client-server relationship, where server-side data are made available through representations of data in simple formats. This format is usually JSON or XML but could be anything.

RPC (Remote Procedure Call) is the earliest, simplest form of API interaction. It executes a block of code on another server and can become can become a Web API when executed in HTTP. It is a bunch of functions in the context of an HTTP API. RPC has different implementations such as XML-RPC, JSON-RPC and SOAP. It sends back and forth when used for CRUD leaving the client with the burden to determine what endpoints to hit at a given time in order to work out a workflow.

gRPC is a somewhat new take on RPC. It adds onto it a wide range of features. A notable feature is the use of protocol buffers(protobufs). According to Google, protobufs are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. It also has a powerful authentication system that utilizes SSL/TLS through Google’s token-based system.

SOAP (Simple Object Access Protocol) is a message protocol that allows distributed elements of an application to communicate. It was designed to break traditional monolithic applications down into a multi-component, distributed form without losing security and control. SOAP is heavyweight and it requires more bandwidth and resources which can lead to slower page load times. REST is considered the answer to a bunch of issues encountered with SOAP such us high complexity and strict rules.

GraphQL is RPC but with a lot of good ideas borrowed from REST/HTTP. It lets the client specify what data it needs, aggregates data from multiple sources more easily and uses a type system to describe data. The user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.

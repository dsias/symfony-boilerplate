---
title: Overview
slug: /graphql
---

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 
> GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask 
> for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful 
> developer tools.
>
> -- <cite>[graphql.org](https://graphql.org/)</cite>

## API

The Symfony Boilerplate uses [GraphQLite](https://graphqlite.thecodingmachine.io/) to quickly build a GraphQL API based
on your models and use cases.

As the documentation of this PHP library covers a lot of aspects, we invite you to read it to have a better understanding
of its functionalities.

## Client

The Symfony Boilerplate uses [graphql-request](https://github.com/prisma-labs/graphql-request) client.

It is available in a Vue component thanks to `this.$graphql`.

Queries and mutations are JavaScript files. For instance:

```js title="src/webapp/graphql/auth/me.query.js"
import { gql } from 'graphql-request'
import { MeFragment } from '@/graphql/auth/me.fragment'

export const MeQuery = gql`
  query me {
    me {
      ... on User {
        ...MeFragment
      }
    }
  }
  ${MeFragment}
`
```

:::note

📣&nbsp;&nbsp;A fragment is useful is you want to fetch the same data in many queries and mutations.

:::

## Tools

The API provides the endpoint `/graphiql` (in development) so that you may quickly test a query or a mutation.

You may also use the [Altair GraphQL Client](https://altair.sirmuel.design/).
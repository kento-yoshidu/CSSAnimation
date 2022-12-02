import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { copyFileSync } from "fs";

const IndexPage: React.FC<PageProps> = ({ serverData }) => {
  const data = serverData.data.user.contributionsCollection.contributionCalendar

  return (
    <>
      <h1>PS</h1>
      {data.weeks.map((week) => {
        return (
          <>
            {week.contributionDays.map((day) => {
              console.log(day)
              return (
                <p>day: {day.contributionCount}</p>
              )
            })}
          </>
        )
      })}
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export async function getServerData() {
  const token = process.env.GITHUB_API

  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {authorization: `Bearer ${token}`},
    cache: new InMemoryCache(),
  });

  const { data } = await client
    .query({
      query: gql`
        query {
          user(login: "kento-yoshidu") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
    })
}

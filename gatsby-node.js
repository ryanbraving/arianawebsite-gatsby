/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getEnglishArticles = makeRequest(
    graphql,
    `
    {
        allContentfulArticleEn {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      
      `
  ).then(result => {
    // Create pages for each article.
    result.data.allContentfulArticleEn.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(
          `src/components/blogPageComponents/ArticleTemplate.js`
        ),
        context: {
          id: node.id,
          slug: node.slug,
          ryan: "i am ok,"
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        }
      });
    });
  });

  //   const getAuthors = makeRequest(
  //     graphql,
  //     `
  //       {
  //         allStrapiUser {
  //           edges {
  //             node {
  //               id
  //             }
  //           }
  //         }
  //       }
  //       `
  //   ).then(result => {
  //     // Create pages for each user.
  //     result.data.allStrapiUser.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `/authors/${node.id}`,
  //         component: path.resolve(`src/templates/user.js`),
  //         context: {
  //           id: node.id
  //         }
  //       });
  //     });
  //   });

  // Queries for articles and authors nodes to use in creating pages.
  //   return Promise.all([getArticles, getAuthors]);
  return Promise.all([getEnglishArticles]);
};

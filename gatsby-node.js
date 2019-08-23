/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API �createPages�. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const createAllPages = makeRequest(
    graphql,
    `
      {
        allArticlesEn: allContentfulArticleEn {
          edges {
            node {
              id
              slug
            }
          }
        }
        allArticlesFr: allContentfulArticleFr {
          edges {
            node {
              id
              slug
            }
          }
        }
        allTagsArticlesEn: allContentfulArticleEn {
          edges {
            node {
              tags
            }
          }
        }
        allTagsArticlesFr: allContentfulArticleFr {
          edges {
            node {
              tags
            }
          }
        }
        allVideosFr:allContentfulVideocastFr {
          edges {
            node {
              id
            }
          }
        }
        allTagsVideosFr:allContentfulVideocastFr {
          edges {
            node {
              tags
            }
          }
        }
        allPodcastsFr:allContentfulPodcastFr {
          edges {
            node {
              id
            }
          }
        }
        allTagsPodcastsFr:allContentfulPodcastFr {
          edges {
            node {
              tags
            }
          }
        }
        allInspirationalQuotesFr:allContentfulInspirationalQuotesFr {
          edges {
            node {
              id
            }
          }
        }
        allTagsInspirationalQuotesFr:allContentfulInspirationalQuotesFr {
          edges {
            node {
              tags
            }
          }
        }
      }
    `
  ).then(result => {
    // Create pages - English Articles
    result.data.allArticlesEn.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(
          `src/components/blogPageComponents/ArticleTemplate.js`
        ),
        context: {
          id: node.id,
          slug: node.slug,
          language: "english",
        },
      })
    })
    // Create pages - Farsi Articles
    result.data.allArticlesFr.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(
          `src/components/blogPageComponents/ArticleTemplate.js`
        ),
        context: {
          id: node.id,
          slug: node.slug,
          language: "farsi",
        },
      })
    })

    // Create pages - Farsi Videos
    result.data.allVideosFr.edges.forEach(({ node }) => {
      createPage({
        path: `/cast/${node.id}`,
        component: path.resolve(`src/components/resourcePage/Videocast.js`),
        context: {
          id: node.id,
          language: "farsi",
          type: "video",
        },
      })
    })

    // Create pages - Farsi Podcasts
    result.data.allPodcastsFr.edges.forEach(({ node }) => {
      createPage({
        path: `/cast/${node.id}`,
        component: path.resolve(`src/components/resourcePage/Podcast.js`),
        context: {
          id: node.id,
          language: "farsi",
          type: "podcast",
        },
      })
    })

    // Create pages - Farsi Inspirational Quotes
    result.data.allInspirationalQuotesFr.edges.forEach(({ node }) => {
      createPage({
        path: `/cast/${node.id}`,
        component: path.resolve(
          `src/components/resourcePage/InspirationalQuote.js`
        ),
        context: {
          id: node.id,
          language: "farsi",
          type: "inspiration",
        },
      })
    })

    // Collect Tags - English Tags
    var tagList = []
    result.data.allTagsArticlesEn.edges.forEach(({ node }) => {
      const newTag = node.tags
      for (var item of newTag) {
        item = item.toLowerCase()
        tagList.indexOf(item) === -1 ? tagList.push(item) : null
      }
    })
    // Create Pages - English Tags
    tagList.forEach(item => {
      createPage({
        path: `/tag/${item}`,
        component: path.resolve(
          `src/components/blogPageComponents/QueryTags.js`
        ),
        context: {
          tag: item,
          language: "english",
        },
      })
    })

    // Collect Tags - Farsi Tags
    var tagList = []
    result.data.allTagsArticlesFr.edges.forEach(({ node }) => {
      const newTag = node.tags
      for (var item of newTag) {
        item = item
          .split(" ")
          .join("-")
          .toLowerCase()
        tagList.indexOf(item) === -1
          ? tagList.push(item)
          : console.log("This item already exsists")
      }
    })
    result.data.allTagsVideosFr.edges.forEach(({ node }) => {
      const newTag = node.tags
      for (var item of newTag) {
        item = item
          .split(" ")
          .join("-")
          .toLowerCase()
        tagList.indexOf(item) === -1
          ? tagList.push(item)
          : console.log("This item already exsists")
      }
    })
    result.data.allTagsPodcastsFr.edges.forEach(({ node }) => {
      const newTag = node.tags
      for (var item of newTag) {
        item = item
          .split(" ")
          .join("-")
          .toLowerCase()
        tagList.indexOf(item) === -1
          ? tagList.push(item)
          : console.log("This item already exsists")
      }
    })
    result.data.allTagsInspirationalQuotesFr.edges.forEach(({ node }) => {
      const newTag = node.tags
      for (var item of newTag) {
        item = item
          .split(" ")
          .join("-")
          .toLowerCase()
        tagList.indexOf(item) === -1
          ? tagList.push(item)
          : console.log("This item already exsists")
      }
    })

    // Create Pages - Farsi Tags
    tagList.forEach(item => {
      createPage({
        path: `/tag/${item}`,
        component: path.resolve(
          `src/components/blogPageComponents/QueryTags.js`
        ),
        context: {
          tag: item
            .split("-")
            .join(" ")
            .toLowerCase(),
          language: "farsi",
        },
      })
    })
  })

  // const getEnglishTags = makeRequest(
  //   graphql,
  //   `
  //   {
  //       allTagsArticlesEn: allContentfulArticleEn {
  //         edges {
  //           node {
  //             tags
  //           }
  //         }
  //       }
  //     }

  //     `
  // ).then(result => {
  //   // create an array of unique tags
  //   var tagList = []
  //   result.data.allTagsArticlesEn.edges.forEach(({ node }) => {
  //     const newTag = node.tags
  //     for (var item of newTag) {
  //       item = item.toLowerCase()
  //       tagList.indexOf(item) === -1 ? tagList.push(item) : null
  //     }
  //   })
  //   tagList.forEach(item => {
  //     createPage({
  //       path: `/tag/${item}`,
  //       component: path.resolve(
  //         `src/components/blogPageComponents/QueryTags.js`
  //       ),
  //       context: {
  //         tag: item,
  //         language: "english",
  //       },
  //     })
  //   })
  // })

  // const getFarsiTags = makeRequest(
  //   graphql,
  //   `
  //   {
  //       allTagsArticlesFr: allContentfulArticleFr {
  //         edges {
  //           node {
  //             tags
  //           }
  //         }
  //       }
  //     }

  //     `
  // ).then(result => {
  //   // create an array of unique tags
  //   var tagList = []
  //   result.data.allTagsArticlesFr.edges.forEach(({ node }) => {
  //     const newTag = node.tags
  //     for (var item of newTag) {
  //       item = item.toLowerCase()
  //       tagList.indexOf(item) === -1
  //         ? tagList.push(item)
  //         : console.log("This item already exsists")
  //     }
  //   })
  //   tagList.forEach(item => {
  //     createPage({
  //       path: `/tag/${item}`,
  //       component: path.resolve(
  //         `src/components/blogPageComponents/QueryTags.js`
  //       ),
  //       context: {
  //         tag: item,
  //         language: "farsi",
  //       },
  //     })
  //   })
  // })

  // const getFarsiVideos = makeRequest(
  //   graphql,
  //   `
  //   {
  //       allVideosFr:allContentfulVideocastFr {
  //         edges {
  //           node {
  //             id
  //           }
  //         }
  //       }
  //     }

  //     `
  // ).then(result => {
  //   // create an array of unique tags
  //   result.data.allVideosFr.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `/videocast/${node.id}`,
  //       component: path.resolve(
  //         `src/components/podcastPageComponents/Video.js`
  //       ),
  //       context: {
  //         id: node.id,
  //         language: "farsi",
  //       },
  //     })
  //   })
  // })

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
  return Promise.all([
    createAllPages,
    // getFarsiArticles,
    // getEnglishTags,
    // getFarsiTags,
    // getFarsiVideos,
  ])
}

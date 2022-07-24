exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      categories: allStrapiCategory {
        edges {
          node {
            id
            name
            description
          }
        }
      }
      products: allStrapiProduct {
        edges {
          node {
            id
            name
            description
            category {
              name
              description
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  products.forEach(product => {
    createPage({
      // 'i++'를 url에 제대로 적용하기 위해 encodeURIComponent 사용
      path: `/${product.node.category.name.toLowerCase()}/${encodeURIComponent(
        product.node.name.split(" ")[0]
      )}`,
      component: require.resolve("./src/templates/ProductDetail.js"),
      context: {
        id: product.node.id,
        name: product.node.name,
        category: product.node.category.name,
      },
    })
  })
  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/ProductList.js"),
      context: {
        id: category.node.id,
        name: category.node.name,
        description: category.node.description,
      },
    })
  })
}

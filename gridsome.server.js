// ./gridsome.server.js

const Butter = require("./src/libs/butter");

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async ({ addCollection, getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // create a kbData collection from the flutterwave page type
    // with the typeName of KBData
    const kbData = addCollection({
      typeName: "KBData",
    });

    // retrieve the flutterwave page from ButterCMS
    const kbResponse = await Butter.page.retrieve(
      "flutterwave-kb",
      "flutterwave",
      {
        page: 1,
      }
    );

    // retrieve the data from the response
    const kb = await kbResponse.data;

    // add the data to the kbData collection
    kbData.addNode({
      id: kb.data.slug,
      ...kb.data.fields,
    });

    // create a categories collection from the flutterwave-kb_category page type
    // with the typeName of Category
    const categories = addCollection({
      typeName: "Category",
    });

    // retrieve the categories from ButterCMS
    const categoryParams = {
      order: "published",
    };

    // add the categories to the categories collection
    await Butter.page.list("flutterwave-kb_category", categoryParams).then(
      function(response) {
        for (const category of response.data.data) {
          categories.addNode({
            id: category.slug,
            ...category
          });
        }
      }
    );


    const articles = addCollection({
      typeName: "Article",
    });

    let articleParams = {
      order: "published",
    };

    await Butter.page
      .list("flutterwave-kb_article", articleParams)
      .then(function(response) {
        for (const article of response.data.data) {
          // console.log({
          //   article: article,
          // });
          articles.addNode({
            id: article.slug,
            slug: article.slug,
            name: article.name,
            published: article.published,
            updated: article.updated,
            // fields: {
            seo: {
              title: article.fields.title,
              description: article.fields.description,
            },
            title: article.fields.title,
            description: article.fields.description,
            body: article.fields.body,
            // },
          });
        }
      });

    // console.log("articles", getCollection("Article"));
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.createManagedPages(async ({ graphql, createPage }) => {
    const categoriesResponse = await Butter.page.list(
      "flutterwave-kb_category",
      {
        order: "published",
      }
    );

    const categories = await categoriesResponse.data;

    categories.data.forEach((category) => {
      createPage({
        path: `/category/${category.slug}`,
        component: "./src/templates/Category.vue",
        context: {
          ...category,
        },
      });
    });

    const articlesResponse = await Butter.page.list("flutterwave-kb_article", {
      order: "published",
    });

    const data = await articlesResponse.data;

    data.data.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: "./src/templates/Article.vue",
        context: {
          ...article,
        },
      });
    });
  });
};

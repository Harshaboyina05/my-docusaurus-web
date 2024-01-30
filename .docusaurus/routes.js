import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docusaurus-web/blog',
    component: ComponentCreator('/my-docusaurus-web/blog', 'b2b'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/archive',
    component: ComponentCreator('/my-docusaurus-web/blog/archive', '7b4'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/first-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/first-blog-post', 'e7e'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/long-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/long-blog-post', 'fa2'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/long-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/long-blog-post', 'fd5'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/mdx-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/mdx-blog-post', '2dd'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/mdx-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/mdx-blog-post', 'd3a'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/tags',
    component: ComponentCreator('/my-docusaurus-web/blog/tags', '535'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/tags/docusaurus',
    component: ComponentCreator('/my-docusaurus-web/blog/tags/docusaurus', '2c7'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/tags/facebook',
    component: ComponentCreator('/my-docusaurus-web/blog/tags/facebook', '5c4'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/tags/hello',
    component: ComponentCreator('/my-docusaurus-web/blog/tags/hello', '041'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/tags/hola',
    component: ComponentCreator('/my-docusaurus-web/blog/tags/hola', '201'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/three-blog-post',
    component: ComponentCreator('/my-docusaurus-web/blog/three-blog-post', '590'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/blog/welcome',
    component: ComponentCreator('/my-docusaurus-web/blog/welcome', '74a'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/hello',
    component: ComponentCreator('/my-docusaurus-web/hello', 'c28'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/markdown-page',
    component: ComponentCreator('/my-docusaurus-web/markdown-page', '002'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/search',
    component: ComponentCreator('/my-docusaurus-web/search', '2fb'),
    exact: true
  },
  {
    path: '/my-docusaurus-web/docs',
    component: ComponentCreator('/my-docusaurus-web/docs', '558'),
    routes: [
      {
        path: '/my-docusaurus-web/docs/',
        component: ComponentCreator('/my-docusaurus-web/docs/', 'dd6'),
        exact: true
      },
      {
        path: '/my-docusaurus-web/docs/DevelopersGuide/Concept',
        component: ComponentCreator('/my-docusaurus-web/docs/DevelopersGuide/Concept', 'fc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/DevelopersGuide/MindMap/Getting Started',
        component: ComponentCreator('/my-docusaurus-web/docs/DevelopersGuide/MindMap/Getting Started', '784'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/concept',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/concept', 'ba3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/Localsetup',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/Localsetup', '99d'),
        exact: true
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/GlobalConfigurations',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/GlobalConfigurations', '132'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/Introduction',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/Introduction', 'c02'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/Prerequisites',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/Prerequisites', 'ce1'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/Projectstructure',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/Projectstructure', '7c9'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/ServiceNode',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/ServiceNode', 'e60'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/MindMap/UIandGateway',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/MindMap/UIandGateway', 'ab8'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDA/',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDA/', '697'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDA/Application',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDA/Application', '31f'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDA/Communication',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDA/Communication', '835'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDA/Deployment',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDA/Deployment', 'eb3'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDA/Prerequisites',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDA/Prerequisites', '706'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDI/',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDI/', '093'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/Documentation/WDI/Prerequisites',
        component: ComponentCreator('/my-docusaurus-web/docs/Documentation/WDI/Prerequisites', '5ff'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docusaurus-web/docs/intro',
        component: ComponentCreator('/my-docusaurus-web/docs/intro', 'cd6'),
        exact: true
      }
    ]
  },
  {
    path: '/my-docusaurus-web/',
    component: ComponentCreator('/my-docusaurus-web/', '732'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

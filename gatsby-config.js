/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/adobe-pass/',
  siteMetadata: {
    pages: [
      {
        title: 'Adobe Pass Authentication',
        path: '/'
      },
      {
        title: 'API Reference',
        menu: [
          {
            title: 'One API Interactive',
            description: 'DESCRIPTION API',
            path: '/api/one_api/interactive/index.md'
          },
          {
            title: 'One API Non-Interactive',
            description: 'DESCRIPTION API',
            path: '/api/one_api/non_interactive/index.md'
          }
        ]
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Sessions',
            path: '/guides/sessions/'
          },
          {
            title: 'Decisions',
            path: '/guides/decisions/'
          },
          {
            title: 'Profiles',
            path: '/guides/profiles/'
          }
        ]
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};

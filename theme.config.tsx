import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>Leo Moko Doc</b></span>,
  project: {
    link: 'https://github.com/iamleomoko/doc-leomoko',
  },
  docsRepositoryBase: 'https://github.com/iamleomoko/doc-leomoko/tree/master',
  useNextSeoProps() {
     return {
      titleTemplate: '%s'
    }
  },
   footer: {
    text:(
      <div className="flex w-full flex-col items-center sm:items-start">
          <p>
            © {new Date().getFullYear()} All rights reserved <a href="https://www.leomoko.com/"> by Leo Moko</a>.
          </p>
      </div> 
    ),
  }
}


export default config
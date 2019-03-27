import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import PastExperience from '../components/PastExperience'
import Skillset from '../components/Skillset'
import Contact from '../components/Contact'
import Particles from '../components/Particles'

function Loading() {
  const { dash } = useSpring({
    from: { dash: 102 },
    to: { dash: 0 }
  })
 
  return (
    <animated.svg opacity=".5" height="60" width="60" strokeDasharray={100} strokeDashoffset={dash}>
      <circle cx="30" cy="30" r="20" pathLength="100" stroke-width="5" stroke="red"/>
    </animated.svg>
  )
}

const IndexTemplate = ({ data, pageContext }) => {
  const [loading, setLoading] = useState(true)
  
  const { opacity } = useSpring({
    opacity: loading ? 0 : 1
  })

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return loading ? 
    <div className="loader"><Loading/></div> :
    <Layout title={pageTitle} description={siteSubtitle}>
      <animated.div className="App" style={{opacity: opacity.interpolate(o => 0 + o) }}>
        <Particles />
        <div className="Hero">
          <div className="Row">
            <div className="Hero-intro Column">
              <div className="roboto-mono light align-left">
                <p>Hello! I'm Inacio. I work and freelance as software engineer</p>
                <p>I've proudly collaborated with awesome companies</p>
                <p>4th on Alakajam, a game jam, with <a 
                    className="underline-wave" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://thesunda.itch.io/cast-die-repeat">
                    Cast Die Repeat
                  </a>
                </p>
              </div>       
            </div>
            <div className="Hero-contact Column">
              <Contact />
            </div>
          </div>
        </div>
        <div className="Scroll">
          <Skillset />
          <PastExperience/>
          <div className="Footer">
            <p className="roboto-mono light">Made with React, ThreeJS and React-Spring by yours truly. © 2019</p>
          </div>
        </div>
      </animated.div>
      {/* <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page> */}
    </Layout>
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;

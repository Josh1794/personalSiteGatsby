const MetaImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "metaImage.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 3000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        height: "100vh",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default MetaImage

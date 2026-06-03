export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  sections[]{
    ...,
    image{
      asset->{
        url
      }
    },
    images[]{
      asset->{
        url
      }
    },
    cards[]{
      ...,
      image{
        asset->{
          url
        }
      }
    }
  }
}`

export const whoWeArePageQuery = `*[_type == "whoWeArePage"][0]{
  title,
  sections[]{
    ...,
    image{
      asset->{
        url
      }
    },
    images[]{
      asset->{
        url
      }
    }
  }
}`



export const blogPageQuery = `*[_type == "blogPage"][0]{
  title,
  sections[]{
    ...,
    image{
      asset->{
        url
      }
    },
    posts[]{
      ...,
      image{
        asset->{
          url
        }
      }
    }
  }
}`

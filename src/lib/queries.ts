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



export const blogPageQuery = `
*[_type == "blogPage"][0]{
  _id,
  title,

  hero{
    ...,
    image{
      asset->{
        _id,
        url
      }
    }
  },

  categories,

  posts[]{
    ...,
    image{
      asset->{
        _id,
        url
      }
    }
  }
}
`

export const signUpPageQuery = `
*[_type == "signUpPage"][0]{
  _id,
  title,
  heading,

  hero{
    ...,
    image{
      asset->{
        _id,
        url
      }
    }
  },

  options[]{
    ...,
    image{
      asset->{
        _id,
        url
      }
    }
  }
}
`

export const mediaPageQuery = `
*[_type == "mediaPage"][0]{
  _id,
  title,

  hero{
    ...,
    image{
      asset->{
        _id,
        url
      }
    }
  },

  photosVideosSection{
    ...,
    photos[]{
      ...,
      image{
        asset->{
          _id,
          url
        }
      }
    }
  },

  connectSection{
    ...
  }
}
`

export const onlineLessonsPageQuery = `
*[_type == "onlineLessonsPage"][0]{
  _id,
  title,

  hero{
    ...,
    "imageUrl": image.asset->url
  },

  introSection{
    ...,
    features[]{
      ...,
      "imageUrl": image.asset->url
    }
  },

  ctaSection{
    ...,
    "imageUrl": image.asset->url
  },

  comingSoonBar{
    ...
  }
}
`

export const donatePageQuery = `
*[_type == "donatePage"][0]{
  _id,
  title,

  hero{
    ...,
    "imageUrl": image.asset->url
  },

  volunteerSection{
    ...,
    "imageUrl": image.asset->url
  },

  donationSection{
    ...,
    "imageUrl": image.asset->url
  },

  trustItems[]{
    ...,
    "imageUrl": image.asset->url
  },

  miniStats[]{
    ...
  },

  impactCard{
    ...,
    "imageUrl": image.asset->url
  },

  donationTabs{
    ...
  }
}
`

import React, { Component } from 'react'
import styled from 'styled-components'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'
import config from '../../data/SiteConfig'

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props
    const post = postNode.frontmatter
    const url = config.siteUrl + config.pathPrefix + postPath
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      TelegramShareButton,
      RedditShareButton,
    } = ShareButtons
    const {
      FacebookShareCount,
      GooglePlusShareCount,
      LinkedinShareCount,
      RedditShareCount,
    } = ShareCounts

    const FacebookIcon = generateShareIcon('facebook')
    const TwitterIcon = generateShareIcon('twitter')
    const TelegramIcon = generateShareIcon('telegram')
    const GooglePlusIcon = generateShareIcon('google')
    const LinkedinIcon = generateShareIcon('linkedin')
    const RedditIcon = generateShareIcon('reddit')
    const iconSize = mobile ? 24 : 24
    const filter = count => (count > 0 ? count : '')

    return (
      <SocialLinksContainer>
        <p>Share this post:</p>
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </SocialLinksContainer>
    )
  }
}

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  & > div {
    margin: 5px 15px;
    display: inline;
  }

  .share-count {
    text-align: center;
  }

  p {
    margin: 0;
  }
`

export default SocialLinks

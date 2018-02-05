import React from "react"
import styled from "styled-components"

const DocumentThumbnailWrapper = styled.div`
  position: relative;
  padding-top: 125%;
  width: 100%;
  border-bottom: 1px solid var(--ui-semi-light);
  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props =>
      props.url ||
      "https://drive.google.com/thumbnail?id=12z2T5XJovplENAlIi6YIwBwCihpI5K05ZkiMNUFGOMI&authuser=0&v=1517602321389&sz=w208"});
  }
`

const DocumentThumbnail = props => (
  <DocumentThumbnailWrapper {...props}>
    <div className="content" />
  </DocumentThumbnailWrapper>
)

export default DocumentThumbnail

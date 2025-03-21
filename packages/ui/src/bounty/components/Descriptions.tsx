import React from 'react'
import styled from 'styled-components'

import { ImagePlaceholder } from '@/common/components/ImagePlaceholder'
import { TextHuge, TextMedium } from '@/common/components/typography'
import { Colors } from '@/common/constants'

export interface DescriptionProps {
  imageUrl?: string | null
  className?: string
  title?: string
  description?: string
}

export const Description = React.memo(({ imageUrl, className, title, description }: DescriptionProps) => {
  return (
    <DescriptionContainer>
      {imageUrl ? (
        <DescriptionImage src={imageUrl} className={className} />
      ) : (
        <ImagePlaceholder className={className} />
      )}
      <TextHuge bold>{title}</TextHuge>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionContainer>
  )
})

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`
const DescriptionImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const DescriptionText = styled(TextMedium)`
  top: 60px;
  color: ${Colors.Black[500]};
`

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { usePopper } from 'react-popper'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BorderRad, Colors, Transitions, ZIndex } from '../../constants'
import { LinkSymbol, LinkSymbolStyle } from '../icons/symbols'

import { DefaultTooltip } from './TooltipDefault'

export interface TooltipProps extends Omit<TooltipPopupProps, 'popUpHandlers' | 'position'> {
  absolute?: boolean
  children: React.ReactNode
}

export interface TooltipPopupProps {
  className?: string
  tooltipOpen?: boolean
  tooltipText?: string
  tooltipTitle?: string
  tooltipLinkText?: React.ReactNode
  tooltipLinkURL?: string
  popupContent?: React.ReactNode
  popUpHandlers: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
  forBig?: boolean
}

export interface DarkTooltipInnerItemProps {
  isOnDark?: boolean
}

export const Tooltip = ({
  absolute,
  children,
  tooltipText,
  tooltipOpen = false,
  tooltipTitle,
  tooltipLinkText,
  tooltipLinkURL,
  popupContent,
  className,
  forBig,
}: TooltipProps) => {
  const [isTooltipActive, setTooltipActive] = useState(tooltipOpen)
  const [referenceElementRef, setReferenceElementRef] = useState<HTMLElement | null>(null)
  const [popperElementRef, setPopperElementRef] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElementRef, popperElementRef, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 0],
        },
      },
    ],
  })

  const mouseIsOver = () => {
    if (!tooltipOpen) {
      setTooltipActive(true)
    }
  }
  const mouseLeft = () => {
    if (!tooltipOpen) {
      setTooltipActive(false)
    }
  }

  const tooltipHandlers = {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      if (!tooltipOpen) {
        event.stopPropagation()
        setTooltipActive(false)
      }
    },
    onFocus: mouseIsOver,
    onBlur: mouseLeft,
    onPointerEnter: mouseIsOver,
    onPointerLeave: mouseLeft,
  }
  const popUpHandlers = {
    onPointerEnter: mouseIsOver,
    onPointerLeave: mouseLeft,
  }

  const isExternalLink = () =>
    tooltipLinkURL && (tooltipLinkURL.startsWith('http://') || tooltipLinkURL.startsWith('https://'))

  return (
    <TooltipContainer absolute={absolute}>
      <TooltipComponent ref={setReferenceElementRef} {...tooltipHandlers} z-index={0} tabIndex={0}>
        {children}
      </TooltipComponent>
      {isTooltipActive &&
        (popupContent
          ? ReactDOM.createPortal(
              <TooltipPopupContainer
                ref={setPopperElementRef}
                className={className}
                style={styles.popper}
                {...attributes.popper}
                {...popUpHandlers}
                isTooltipActive={isTooltipActive}
                forBig={forBig}
              >
                {popupContent}
              </TooltipPopupContainer>,
              document.body
            )
          : ReactDOM.createPortal(
              <TooltipPopupContainer
                ref={setPopperElementRef}
                className={className}
                style={styles.popper}
                {...attributes.popper}
                {...popUpHandlers}
                isTooltipActive={isTooltipActive}
                forBig={forBig}
              >
                {tooltipTitle && <TooltipPopupTitle>{tooltipTitle}</TooltipPopupTitle>}
                <TooltipText>{tooltipText}</TooltipText>
                {tooltipLinkURL &&
                  (isExternalLink() ? (
                    <TooltipExternalLink href={tooltipLinkURL} target="_blank">
                      {tooltipLinkText ?? 'Link'}
                      <LinkSymbol />
                    </TooltipExternalLink>
                  ) : (
                    <TooltipLink to={tooltipLinkURL} target="_blank">
                      {tooltipLinkText ?? 'Link'}
                      <LinkSymbol />
                    </TooltipLink>
                  ))}
              </TooltipPopupContainer>,
              document.body
            ))}
    </TooltipContainer>
  )
}

export const TooltipPopupContainer = styled.div<{ isTooltipActive?: boolean; forBig?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${Colors.Black[900]};
  background-color: ${Colors.Black[700]};
  border-radius: ${BorderRad.m};
  opacity: ${({ isTooltipActive }) => (isTooltipActive ? '1' : '0')};
  transition: opacity ${Transitions.duration} ease;
  z-index: ${ZIndex.tooltip};

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${Colors.Black[700]};
    border: 1px solid ${Colors.Black[900]};
    transform: rotate(45deg);
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    z-index: -1;
  }

  &[data-popper-placement^='top'] {
    &:after {
      bottom: -4px;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }
  }
  &[data-popper-placement^='bottom'] {
    &:after {
      top: -4px;
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }
  }
  &[data-popper-placement='top-start']:after,
  &[data-popper-placement='bottom-start']:after {
    left: 19px;
  }
  &[data-popper-placement='top-end']:after,
  &[data-popper-placement='bottom-end']:after {
    right: 19px;
  }
  &[data-popper-placement='top-start'] {
    inset: ${({ forBig }) => (forBig ? 'auto auto 5px -13px !important' : 'auto auto 4px -16px !important')};
  }
  &[data-popper-placement='top-end'] {
    inset: ${({ forBig }) => (forBig ? 'auto -12px 5px auto !important' : 'auto -16px 4px auto !important')};
  }
  &[data-popper-placement='bottom-start'] {
    inset: ${({ forBig }) => (forBig ? '5px auto auto -13px !important' : '4px auto auto -16px !important')};
  }
  &[data-popper-placement='bottom-end'] {
    inset: ${({ forBig }) => (forBig ? '5px -12px auto auto !important' : '4px -16px auto auto !important')};
  }
`

export const TooltipPopupTitle = styled.h6`
  color: ${Colors.Black[900]};
  margin-bottom: 10px;
  color: ${Colors.White};
`

export const TooltipText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${Colors.Black[500]};
  color: ${Colors.Black[400]};
`

export const TooltipLink = styled(Link)<{ to: string; target: string }>`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${Colors.Black[400]};
  transition: ${Transitions.all};
  text-transform: capitalize;

  ${LinkSymbolStyle} {
    width: 12px;
    height: 12px;

    .blackPart,
    .primaryPart {
      fill: ${Colors.Black[300]};
    }
  }

  &:hover {
    color: ${Colors.Blue[500]};

    ${LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${Colors.Blue[500]};
      }
    }
  }
`

export const TooltipExternalLink = styled.a<{ href: string | undefined; target: string }>`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${Colors.Black[400]};
  transition: ${Transitions.all};
  text-transform: capitalize;

  ${LinkSymbolStyle} {
    width: 12px;
    height: 12px;

    .blackPart,
    .primaryPart {
      fill: ${Colors.Black[300]};
    }
  }

  &:hover {
    color: ${Colors.Blue[500]};

    ${LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${Colors.Blue[500]};
      }
    }
  }
`

export const TooltipComponent = styled.i`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-style: normal;
  background-color: transparent;
  padding: 0;

  &:hover,
  &:focus {
    ${DefaultTooltip} {
      color: ${Colors.Blue[500]};
      border-color: ${Colors.Blue[100]};
      background-color: ${Colors.Black[100]};
    }
  }
`

export const TooltipContainer = styled.div<{ absolute?: boolean }>`
  display: flex;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  right: ${({ absolute }) => (absolute ? '-24px' : 'auto')};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  text-transform: none;
`

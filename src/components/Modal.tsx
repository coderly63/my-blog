import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  open: boolean
  onOk?: Function
  onCancel?: Function
  children: React.ReactNode
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ open, children, setIsModalOpen }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<boolean>(false) // 弹窗的存在周期
  const [aniClassName, setAniClassName] = useState<string>('') // 动效的class
  const onTransitionEnd = () => {
    setAniClassName(open ? 'enter-done' : 'exit-done')
    if (!open) {
      setActive(false)
    }
  }
  useEffect(() => {
    if (open) {
      setActive(true)
      setAniClassName('enter')
      setTimeout(() => {
        setAniClassName('enter-active')
      })
    } else {
      setAniClassName('exit')
      setTimeout(() => {
        setAniClassName('exit-active')
      })
    }
  }, [open])
  // 处理点击关闭事件
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === targetRef.current) setIsModalOpen(false)
  }
  return open || active ? (
    createPortal(
      <div className="modal-root" onClick={handleClose}>
        <div
          className={`modal-${aniClassName} modal-mask`}
          ref={targetRef}
          onTransitionEnd={onTransitionEnd}
        >
          {children}
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  )
}

export default Modal

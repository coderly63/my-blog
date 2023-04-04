import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PersonXFill } from 'react-bootstrap-icons'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setUser, UserState } from '@/redux/modules/userSlice'
import ImgCrop from 'antd-img-crop'
import { Upload, message } from 'antd'
import { changeInfo } from '@/api/modules/login'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import './index.less'

interface formInitialDetailsType {
  nickname: string
  email: string
  phone: string
}

interface InfoProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsInfoChange: React.Dispatch<React.SetStateAction<boolean>>
  isInfoChange: boolean
}

const Info: React.FC<InfoProps> = ({
  setIsModalOpen,
  setIsInfoChange,
  isInfoChange,
}) => {
  // redux中的user信息
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  // 初始化登录注册表单信息
  const formInitialDetails: formInitialDetailsType = {
    nickname: user.nickname || '',
    email: user.email || '',
    phone: user.phone || '',
  }
  const nodeRef = useRef<HTMLInputElement | null>(null)
  // is login or register ?
  const [formDetails, setFormDetails] =
    useState<formInitialDetailsType>(formInitialDetails)
  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({ ...formDetails, [category]: value })
  }
  // 登录 or 注册
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(fileList)
    const formdata = new FormData()
    formdata.append('avator', fileList?.[0]?.originFileObj as Blob)
    formdata.append('nickname', formDetails.nickname)
    formdata.append('email', formDetails.email)
    formdata.append('phone', formDetails.phone)
    const res = await changeInfo(formdata)
    dispatch(setUser(res.data as UserState))
    message.success('修改成功！')
    setIsInfoChange(!isInfoChange)
    setIsModalOpen(false)
  }
  return (
    <div className='info'>
      <Container>
        <Row className='align-items-center'>
          <Col size={24} md={10}>
            <div className={1 ? 'animate__animated animate__fadeIn' : ''}>
              <h2 className='title'>个人信息</h2>
              <div className='close-icon' onClick={() => setIsModalOpen(false)}>
                <PersonXFill size={25}></PersonXFill>
              </div>
              <form onSubmit={handleSubmit}>
                <ImgCrop rotationSlider>
                  <Upload
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    listType='picture-card'
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 1 && '+ Upload'}
                  </Upload>
                </ImgCrop>

                <input
                  type='tel'
                  value={formDetails.phone}
                  disabled
                  placeholder='Phone No.'
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                />
                <div className='register-form' ref={nodeRef}>
                  <input
                    type='text'
                    value={formDetails.nickname}
                    placeholder='nickname'
                    onChange={(e) => onFormUpdate('nickname', e.target.value)}
                  />
                  <input
                    type='text'
                    value={formDetails.email}
                    placeholder='email'
                    disabled
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </div>
                <button type='submit'>
                  <span>确认修改</span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Info

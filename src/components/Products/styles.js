import styled from "styled-components";
import { Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, Form, FloatingLabel, FormControl, Button } from 'react-bootstrap';

export const OffcanvasBt = styled(Offcanvas)`
  width: 50%!important;
`

export const OffcanvasHeaderBt = styled(OffcanvasHeader)`
  background-color: #1C1C1C!important;
  .btn-close{
    background-color: BlueViolet;
    border-radius: 20px;
  }
`

export const OffcanvasTitleBt = styled(OffcanvasTitle)`
  color: LightGrey!important;
   font-weight: bold!important;
   font-size: 36px!important;
   justify-content: center!important;
   padding-left: 50px!important;
`

export const OffcanvasBodyBt = styled(OffcanvasBody)`
  background-color: #DCDCDC!important;
  color: lightgrey!important;
  font-weight: bolder!important;
`

export const FormBt = styled(Form)`
`

export const FloatingLabelBt = styled(FloatingLabel)`
  color: black!important;
  font-size: 14px!important;
`

export const FormControlBt = styled(FormControl)`
  background-color: #f5f5f5!important;
  height: 48px!important;
`

export const ButtonProduct = styled(Button)`
  background: BlueViolet!important;
  color: white!important;
  width: 220px!important;
`
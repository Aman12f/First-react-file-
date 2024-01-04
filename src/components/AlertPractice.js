import React from 'react'

export default function AlertPractice(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.msg}</strong>: {props.alert.type};
</div>
  )
}

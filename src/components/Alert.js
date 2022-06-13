import React from 'react'

export default function Alert(props) {
    const capitalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
        props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {capitalise(props.alert.msg)}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

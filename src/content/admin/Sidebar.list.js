import React from 'react'


export default function(props) {
    return props.children.find(item => item.props.id === props.activeSidebar)
}
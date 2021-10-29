import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const icon = ({item}) => {
    const {id}=item;
    const {name}=item;
    if(id === 1)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(id === 2)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(id === 3)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(id === 4)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(id === 5)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(item.id === 6)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(item.id === 7)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(item.id === 8)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )
    if(item.id === 9)
    return (
        <MaterialIcons name={name} size={38} color={theme.colors.secondary} />
    )

}

export default icon;


export const updateObjectInArray = (items, itemId, objPropName, newObjprops) => {
    return items.map(u => {
        if(u[objPropName] === itemId){
            return {...u, ...newObjprops}
        }
        return u;
    })
}


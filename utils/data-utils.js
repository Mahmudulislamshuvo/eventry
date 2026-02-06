// export const replaceMongoIdInArray = (array) => {
//   const mappedArray = array
//     .map((item) => {
//       return {
//         id: item._id.toString(),
//         ...item,
//       };
//     })
//     .map(({ _id, ...rest }) => rest);

//   return mappedArray;
// };

export const replaceMongoIdInArray = (array) => {
  if (!Array.isArray(array)) return array;

  return array.map((item) => replaceMongoIdInObject(item));
};

export const replaceMongoIdInObject = (obj) => {
  if (!obj) return obj;

  const updatedObj = { ...obj };

  // _id → id
  if (updatedObj._id) {
    updatedObj.id = updatedObj._id.toString();
    delete updatedObj._id;
  }

  // interested_ids → string[]
  if (Array.isArray(updatedObj.interested_ids)) {
    updatedObj.interested_ids = updatedObj.interested_ids.map((id) =>
      id.toString(),
    );
  }

  // going_ids → string[]
  if (Array.isArray(updatedObj.going_ids)) {
    updatedObj.going_ids = updatedObj.going_ids?.map((id) => id.toString());
  }

  return updatedObj;
};

// export const replaceMongoIdInObject = (obj) => {
//   const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
//   return updatedObj;
// };

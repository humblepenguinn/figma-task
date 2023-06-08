// Get all images from public folder and export them as an object
// This is easy since we won't have to create a new component for each item in the figma design

const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

export default {
  questionMark: require("./questionMark.png"),
  Request_Request_1:
    tryRequire("./Request_Request_1.png") || require("./questionMark.png"),
  Request_Request_2:
    tryRequire("./Request_Request_2.png") || require("./questionMark.png"),
  Request_Rectangle26:
    tryRequire("./Request_Rectangle26.png") || require("./questionMark.png"),
  Request_Rectangle24:
    tryRequire("./Request_Rectangle24.png") || require("./questionMark.png"),
  Request_Rectangle25:
    tryRequire("./Request_Rectangle25.png") || require("./questionMark.png"),
  Request_Line10:
    tryRequire("./Request_Line10.png") || require("./questionMark.png"),
  Request_Line10_1:
    tryRequire("./Request_Line10_1.png") || require("./questionMark.png"),
  Request_Line10_2:
    tryRequire("./Request_Line10_2.png") || require("./questionMark.png"),
  Request_Line10_3:
    tryRequire("./Request_Line10_3.png") || require("./questionMark.png"),
  Request_Rectangle28:
    tryRequire("./Request_Rectangle28.png") || require("./questionMark.png"),
  Request_Rectangle29:
    tryRequire("./Request_Rectangle29.png") || require("./questionMark.png"),
  Request_Line18:
    tryRequire("./Request_Line18.png") || require("./questionMark.png"),
  Request_Line19:
    tryRequire("./Request_Line19.png") || require("./questionMark.png"),
  Request_Rectangle22:
    tryRequire("./Request_Rectangle22.png") || require("./questionMark.png"),
  Request_Rectangle23:
    tryRequire("./Request_Rectangle23.png") || require("./questionMark.png"),
  Request_Line14:
    tryRequire("./Request_Line14.png") || require("./questionMark.png"),
  Request_Line15:
    tryRequire("./Request_Line15.png") || require("./questionMark.png"),
  Request_Line16:
    tryRequire("./Request_Line16.png") || require("./questionMark.png"),
  Request_Line17:
    tryRequire("./Request_Line17.png") || require("./questionMark.png"),
  Request_Rectangle30:
    tryRequire("./Request_Rectangle30.png") || require("./questionMark.png"),
  Request_Rectangle31:
    tryRequire("./Request_Rectangle31.png") || require("./questionMark.png"),
  Request_Vector1:
    tryRequire("./Request_Vector1.png") || require("./questionMark.png"),
  Request_Vector1_1:
    tryRequire("./Request_Vector1_1.png") || require("./questionMark.png"),
  Request_Vector1_2:
    tryRequire("./Request_Vector1_2.png") || require("./questionMark.png"),
  Request_Rectangle33:
    tryRequire("./Request_Rectangle33.png") || require("./questionMark.png"),
  Request_Rectangle30_1:
    tryRequire("./Request_Rectangle30_1.png") || require("./questionMark.png"),
  Request_Rectangle31_1:
    tryRequire("./Request_Rectangle31_1.png") || require("./questionMark.png"),
  Request_Vector1_3:
    tryRequire("./Request_Vector1_3.png") || require("./questionMark.png"),
  Request_Vector1_4:
    tryRequire("./Request_Vector1_4.png") || require("./questionMark.png"),
  Request_Vector1_5:
    tryRequire("./Request_Vector1_5.png") || require("./questionMark.png"),
  Request_Rectangle33_1:
    tryRequire("./Request_Rectangle33_1.png") || require("./questionMark.png"),
  Request_Rectangle30_2:
    tryRequire("./Request_Rectangle30_2.png") || require("./questionMark.png"),
  Request_Rectangle31_2:
    tryRequire("./Request_Rectangle31_2.png") || require("./questionMark.png"),
  Request_Vector1_6:
    tryRequire("./Request_Vector1_6.png") || require("./questionMark.png"),
  Request_Vector1_7:
    tryRequire("./Request_Vector1_7.png") || require("./questionMark.png"),
  Request_Vector1_8:
    tryRequire("./Request_Vector1_8.png") || require("./questionMark.png"),
  Request_Rectangle33_2:
    tryRequire("./Request_Rectangle33_2.png") || require("./questionMark.png"),
  Request_Rectangle32:
    tryRequire("./Request_Rectangle32.png") || require("./questionMark.png"),
  Request_Rectangle27:
    tryRequire("./Request_Rectangle27.png") || require("./questionMark.png"),
  Request_Ellipse7:
    tryRequire("./Request_Ellipse7.png") || require("./questionMark.png"),
  Request_Frame_1:
    tryRequire("./Request_Frame_1.png") || require("./questionMark.png"),
  Request_Frame_2:
    tryRequire("./Request_Frame_2.png") || require("./questionMark.png"),
  Request_Exclude:
    tryRequire("./Request_Exclude.png") || require("./questionMark.png"),
  Request_Vector:
    tryRequire("./Request_Vector.png") || require("./questionMark.png"),
  Request_Exclude_1:
    tryRequire("./Request_Exclude_1.png") || require("./questionMark.png"),
  Request_Vector_1:
    tryRequire("./Request_Vector_1.png") || require("./questionMark.png"),
  Request_Ellipse8:
    tryRequire("./Request_Ellipse8.png") || require("./questionMark.png"),
  Request_Ellipse9:
    tryRequire("./Request_Ellipse9.png") || require("./questionMark.png"),
};
